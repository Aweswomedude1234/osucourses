# OSU Course Planner

A minimal, no-login course planner. Add the courses you've completed, click
**Find eligible courses**, and it lists every course in the database whose
prerequisites you satisfy — filterable by department and credit hours.

## Running it

No build step, no server required. Just open `index.html` in a browser
(double-click works — everything loads via `<script>` tags, so there's no
CORS issue like there would be with `fetch()` on a local file).

## How it's built

- **`courses.js`** — the database. A plain JS array of course objects
  (id, department, number, name, credits, terms, catalog sentence, and
  prerequisites). This is the single source of truth; the app never
  hard-codes a course anywhere else. Think of it as the spreadsheet.
- **`app.js`** — the logic: normalizes course-code input, runs the
  eligibility check against `courses.js`, applies filters, renders results.
- **`index.html` / `style.css`** — the page and its (minimal, OSU-scarlet)
  styling.
- **No backend, no real database.** For an app this size a spreadsheet-like
  JS array is genuinely the right amount of infrastructure — it's fast,
  has zero dependencies, and is trivial for you to hand-edit or regenerate.

### Prerequisite model

Each course's `prereqs` field is a list of **groups**. You need at least one
completed course from **every** group (AND across groups, OR within a
group). Example — CSE 2331 requires CSE 2231 *and* CSE 2321 *and* STAT 3470:

```js
prereqs: [["CSE 2231"], ["CSE 2321"], ["STAT 3470"]]
```

Example — CSE 3421 requires CSE 2421 *and* ECE 2060, but a course with an
"either/or" prerequisite would list alternatives inside one group, e.g.
`["MATH 1151", "MATH 1161.01"]` meaning either satisfies that slot.

## Current data coverage

I populated the database with **113 real courses** pulled from Ohio State's
own published sources (department prerequisite flowcharts, curriculum
sheets, and official course-listing tables from cse.osu.edu, ece.osu.edu,
math.osu.edu, and engineering.osu.edu), covering:

- **CSE** (44 courses) — parsed directly from the department's official
  course listing: all three intro-language tracks (1222/1223/1224) and
  their alternate data-structures courses (2122/2123/2124), the full core
  sequence through the senior capstones (2221/2231, 2321/2331, 2421/2431,
  project courses), and electives spanning databases, cryptography,
  networking, parallel computing, AI/ML, and cybersecurity.
- **ECE** (24 courses) — parsed directly from the department's official
  course-listing table, including exact prerequisite text: the digital
  logic / analog circuits / signals-and-systems core, electronics and
  power sequences, both capstone courses (3906 → 4905), and senior
  electives (DSP, communications, machine learning, robotics,
  cybersecurity).
- **MATH** (36 courses) — parsed directly from the department's course
  catalog: the full precalculus-through-calculus chain (1148/1149/1150 →
  1151/1152 and the honors/accelerated variants), both engineering
  calculus tracks, linear algebra (standard and honors), differential
  equations, discrete math, foundations of higher math, and upper-level
  electives (analysis, complex analysis, abstract algebra, combinatorics,
  number theory, dynamical systems, scientific computing).
- **ENGR** — the first-year fundamentals sequence (1100, 1181/1182, honors
  1281.01H/.02H).
- **PHYSICS, STAT, CHEM** — the standard engineering support courses that
  gate CSE/ECE electives (1250/1251, 3470, 1250).

This is a **curated starter set** (core-path + common electives), not the
full catalog — OSU's full catalog has hundreds of courses per department,
most of which are electives, honors variants, or rarely-taken special
topics. I prioritized the courses that actually gate other courses (i.e.,
appear in prerequisite chains) so the eligibility logic is meaningfully
accurate for a real 4-year plan, rather than padding the count with courses
that don't affect what you're prepared to take next.

## Plan for expanding the data to full department coverage

You have three options, roughly in order of effort:

### 1. Paste in course lists yourself (fastest, no research needed)
You mentioned you can paste in full course lists you already have. Paste
them into the chat in this format (one line per course) and I'll convert
them straight into `courses.js` entries:

```
CSE 3902 | Project: Interactive Systems | 4 cr | Au,Sp | Prereq: CSE 2421 | "Team-based project..."
```

Any format works, honestly — even a raw copy-paste from a department PDF or
the course catalog is fine; I'll parse it.

### 2. Ask me to look up specific courses or departments
Tell me which departments/courses to add (e.g. "add all 4000-level CSE
electives" or "add the STAT department") and I'll search the OSU catalog
and department sites, extract the prerequisite chains, and add them the
same way I built the current set — checked for duplicate IDs and dangling
prerequisite references, the way I validated this batch.

### 3. Scripted catalog scrape (most complete, most effort)
OSU's registrar course catalog (`catalog.osu.edu` / the class search) lists
every active course with official prerequisite text, but prerequisite
phrasing is free text ("Prereq: 2221; concur: 2321") that has to be parsed
into the group structure above. For full-catalog coverage across many
departments, the efficient path is: I fetch each department's course
listing PDF/page, extract course code / title / credit / prereq text with a
script, then hand-normalize the prerequisite phrasing into `prereqs` groups
(the free-text parsing isn't fully reliable automatically — OSU prereqs use
inconsistent phrasing like "Prereq or concur," "and/or" chains, and grade
minimums that a script will misparse, so a review pass matters if accuracy
is important to you). This is doable but is a bigger, multi-session task —
best done a department at a time so each batch can be spot-checked.

**My recommendation:** tell me which specific majors/course lists matter
most for your plan (e.g. "I need every course on the BS CSE and CS minor
sheets" or "add all ECE electives") and I'll fetch and add exactly that
scope next, validated the same way as this batch, rather than scraping
everything speculatively.

Out of scope for this starter set: pure graduate research/topics courses
(6000+ in most departments), teacher-education math tracks, actuarial
science, and 1-credit "programming in X" refresher courses — these exist
in the real catalog but don't gate the standard CSE/ECE/MATH/ENGR degree
paths, so they were left out to keep the dataset focused. Say the word and
I'll add any of them.

## Known simplifications

- Grade-minimum prerequisites (e.g. "C- or better") are tracked as
  "completed," not by letter grade — the app assumes if you list a course
  as done, you passed it.
- "Prereq or concur" (can be taken at the same time) is stored separately
  in each course's `concur` field but isn't currently required by the
  eligibility check — only true prerequisites gate eligibility. Concurrent
  options show up in a course's data if you want to extend the UI to
  surface them.
- Course sentences are condensed/paraphrased from official descriptions,
  not verbatim catalog copy.
