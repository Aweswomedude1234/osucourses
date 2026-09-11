(function () {
  "use strict";

  /* ---------------- helpers ---------------- */

  // Turn "cse2221", "CSE  2221", "cse-2221" etc into "CSE 2221"
  function normalizeId(raw) {
    if (!raw) return "";
    let s = raw.trim().toUpperCase();
    s = s.replace(/[-_]/g, " ");
    // Insert a space between letters and the number block if missing
    const m = s.match(/^([A-Z]+)\s*([0-9][0-9A-Z.]*)$/);
    if (m) return m[1] + " " + m[2];
    return s.replace(/\s+/g, " ");
  }

  const byId = {};
  COURSES_DB.forEach((c) => (byId[c.id] = c));

  const DEPTS = Array.from(new Set(COURSES_DB.map((c) => c.dept))).sort();

  /* ---------------- state ---------------- */

  const state = {
    completed: new Set(),
    lastResults: null
  };

  /* ---------------- DOM refs ---------------- */

  const $ = (sel) => document.querySelector(sel);
  const addInput = $("#add-input");
  const suggestList = $("#suggest-list");
  const completedListEl = $("#completed-list");
  const bulkToggle = $("#bulk-toggle");
  const bulkArea = $("#bulk-area");
  const bulkTextarea = $("#bulk-textarea");
  const bulkAddBtn = $("#bulk-add-btn");
  const deptChecksEl = $("#dept-checks");
  const minCreditsEl = $("#min-credits");
  const maxCreditsEl = $("#max-credits");
  const findBtn = $("#find-btn");
  const resultsEl = $("#results");
  const resultCountEl = $("#result-count");
  const dbStatEl = $("#db-stat");

  /* ---------------- init static UI ---------------- */

  dbStatEl.textContent = COURSES_DB.length + " courses in the database \u00b7 " + DEPTS.join(", ");

  DEPTS.forEach((d) => {
    const label = document.createElement("label");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = d;
    cb.checked = true;
    label.appendChild(cb);
    label.appendChild(document.createTextNode(" " + d));
    deptChecksEl.appendChild(label);
  });

  /* ---------------- autocomplete ---------------- */

  function courseSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return COURSES_DB.filter((c) => {
      return (
        c.id.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.dept.toLowerCase() === q
      );
    })
      .filter((c) => !state.completed.has(c.id))
      .slice(0, 8);
  }

  function renderSuggestions(list) {
    suggestList.innerHTML = "";
    if (list.length === 0) {
      suggestList.style.display = "none";
      return;
    }
    list.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML =
        '<span class="sc">' + c.id + "</span>" + c.name;
      btn.addEventListener("click", () => {
        addCompleted(c.id);
        addInput.value = "";
        suggestList.style.display = "none";
        addInput.focus();
      });
      suggestList.appendChild(btn);
    });
    suggestList.style.display = "block";
  }

  addInput.addEventListener("input", () => {
    renderSuggestions(courseSearch(addInput.value));
  });

  addInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const id = normalizeId(addInput.value);
      if (byId[id]) {
        addCompleted(id);
        addInput.value = "";
        suggestList.style.display = "none";
      } else {
        const matches = courseSearch(addInput.value);
        if (matches.length) {
          addCompleted(matches[0].id);
          addInput.value = "";
          suggestList.style.display = "none";
        }
      }
    } else if (e.key === "Escape") {
      suggestList.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".add-row")) suggestList.style.display = "none";
  });

  /* ---------------- bulk add ---------------- */

  bulkToggle.addEventListener("click", () => {
    bulkArea.classList.toggle("open");
  });

  bulkAddBtn.addEventListener("click", () => {
    const tokens = bulkTextarea.value
      .split(/[\n,]/)
      .map((t) => t.trim())
      .filter(Boolean);
    let added = 0,
      unknown = [];
    tokens.forEach((t) => {
      const id = normalizeId(t);
      if (byId[id]) {
        state.completed.add(id);
        added++;
      } else {
        unknown.push(t);
      }
    });
    renderCompleted();
    bulkTextarea.value = unknown.length
      ? "# not found, check spelling/format:\n" + unknown.join("\n")
      : "";
    if (added) findBtn.disabled = false;
  });

  /* ---------------- completed list ---------------- */

  function addCompleted(id) {
    state.completed.add(id);
    renderCompleted();
  }

  function removeCompleted(id) {
    state.completed.delete(id);
    renderCompleted();
  }

  function renderCompleted() {
    completedListEl.innerHTML = "";
    if (state.completed.size === 0) {
      const note = document.createElement("div");
      note.className = "empty-note";
      note.textContent = "No completed courses added yet.";
      completedListEl.appendChild(note);
      return;
    }
    Array.from(state.completed)
      .sort()
      .forEach((id) => {
        const pill = document.createElement("span");
        pill.className = "pill";
        const course = byId[id];
        pill.innerHTML =
          '<span>' + id + (course ? " \u2014 " + course.name : "") + "</span>";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "\u00d7";
        btn.title = "Remove";
        btn.addEventListener("click", () => removeCompleted(id));
        pill.appendChild(btn);
        completedListEl.appendChild(pill);
      });
  }

  /* ---------------- eligibility engine ---------------- */

  function prereqGroupsSatisfied(course) {
    if (!course.prereqs || course.prereqs.length === 0) return true;
    return course.prereqs.every((group) =>
      group.some((id) => state.completed.has(id))
    );
  }

  function passesFilters(course) {
    const checkedDepts = Array.from(
      deptChecksEl.querySelectorAll("input:checked")
    ).map((cb) => cb.value);
    if (checkedDepts.length && !checkedDepts.includes(course.dept)) return false;

    const min = minCreditsEl.value ? parseFloat(minCreditsEl.value) : null;
    const max = maxCreditsEl.value ? parseFloat(maxCreditsEl.value) : null;
    if (min !== null && course.credits < min) return false;
    if (max !== null && course.credits > max) return false;
    return true;
  }

  function findEligible() {
    return COURSES_DB.filter(
      (c) =>
        !state.completed.has(c.id) &&
        prereqGroupsSatisfied(c) &&
        passesFilters(c)
    ).sort((a, b) => (a.dept + a.number).localeCompare(b.dept + b.number));
  }

  /* ---------------- render results ---------------- */

  function prereqLineHtml(course) {
    if (!course.prereqs || course.prereqs.length === 0) {
      return '<span class="satisfied">No prerequisites.</span>';
    }
    const parts = course.prereqs.map((group) => {
      const label = group.join(" or ");
      return '<span class="satisfied">\u2713 ' + label + "</span>";
    });
    return "Prereqs met: " + parts.join(" &nbsp;\u00b7&nbsp; ");
  }

  function renderResults(list) {
    resultsEl.innerHTML = "";
    resultCountEl.textContent = list.length + " eligible";
    if (list.length === 0) {
      const p = document.createElement("div");
      p.className = "placeholder-note";
      p.textContent =
        "No courses match right now \u2014 add completed courses or widen your filters.";
      resultsEl.appendChild(p);
      return;
    }
    list.forEach((c) => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML =
        '<div class="row1">' +
        '<span class="code">' + c.id + "</span>" +
        '<span class="name">' + c.name + "</span>" +
        '<span class="meta">' + c.credits + " cr \u00b7 " +
        (c.terms && c.terms.length ? c.terms.join("/") : "\u2014") +
        "</span>" +
        "</div>" +
        '<div class="sentence">' + c.sentence + "</div>" +
        '<div class="prereq-line">' + prereqLineHtml(c) + "</div>";
      resultsEl.appendChild(card);
    });
  }

  findBtn.addEventListener("click", () => {
    const results = findEligible();
    state.lastResults = results;
    renderResults(results);
    document.getElementById("results-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  deptChecksEl.addEventListener("change", () => {
    if (state.lastResults) renderResults(findEligible());
  });
  minCreditsEl.addEventListener("input", () => {
    if (state.lastResults) renderResults(findEligible());
  });
  maxCreditsEl.addEventListener("input", () => {
    if (state.lastResults) renderResults(findEligible());
  });

  /* ---------------- boot ---------------- */

  renderCompleted();
  resultsEl.innerHTML =
    '<div class="placeholder-note">Add the courses you\u2019ve completed above, then click \u201cFind eligible courses.\u201d</div>';
})();
