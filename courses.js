/* =====================================================================
   OSU COURSE PLANNER — COURSE DATABASE
   =====================================================================
   This file is the "spreadsheet." It is the only place course data
   lives. The app (app.js) never hard-codes a course — it just reads
   this array and checks the visitor's completed courses against it.

   Sourced directly from official OSU department pages: the CSE
   department's course listing (cse.osu.edu/courses), the ECE
   department's official course-listing table, the Math department's
   course catalog (math.osu.edu/courses), and department prerequisite
   flowcharts/curriculum sheets for ECE, MATH, and ENGR.

   HOW TO ADD / EDIT COURSES
   --------------------------------------------------------------------
     id        "DEPT NUMBER" — must be unique.
     dept      Department code, e.g. "CSE", "MATH", "ECE", "ENGR".
     number    Course number as a string, e.g. "2221".
     name      Official course title.
     credits   Number of credit hours (numeric).
     terms     Array of terms typically offered: "Au","Sp","Su".
     sentence  The catalog description ("course sentence").
     prereqs   Array of prerequisite GROUPS. Each group is an array of
               course ids — the student needs AT LEAST ONE id from
               EVERY group to be eligible (AND across groups, OR
               within a group). Use [] if there are no prerequisites.
               Tip: "(A and B) or C" can be encoded as two groups,
               [["A","C"], ["B","C"]] — satisfying C alone satisfies
               both groups; satisfying A and B together also works.
     concur    Same shape as prereqs, but for courses that may be
               taken concurrently rather than strictly beforehand.
     notes     Optional free-text note.
   ===================================================================== */

const COURSES_DB = [

  /* ============================== CSE ============================== */
  {
    id: "CSE 1222", dept: "CSE", number: "1222", name: "Introduction to Computer Programming in C++ for Engineers and Scientists",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to computer programming and problem solving using computer programs, with applications in engineering and the physical sciences; algorithm development and programming lab experience.",
    prereqs: [], concur: [["MATH 1151"]]
  },
  {
    id: "CSE 1223", dept: "CSE", number: "1223", name: "Introduction to Computer Programming in Java",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to computer programming and problem solving using computer programs, with hands-on programming lab experience.",
    prereqs: [["MATH 1148", "MATH 1150", "MATH 1151"], ["MATH 1149", "MATH 1150", "MATH 1151"]]
  },
  {
    id: "CSE 1224", dept: "CSE", number: "1224", name: "Introduction to Computer Programming in Python",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to computer programming and problem solving using computer programs, with hands-on programming lab experience.",
    prereqs: [["MATH 1148", "MATH 1150", "MATH 1151"], ["MATH 1149", "MATH 1150", "MATH 1151"]]
  },
  {
    id: "CSE 2122", dept: "CSE", number: "2122", name: "Data Structures Using C++",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to programming in C++ and object-oriented programming: encapsulation using classes, inheritance, and related concepts.",
    prereqs: [["CSE 1222"]]
  },
  {
    id: "CSE 2123", dept: "CSE", number: "2123", name: "Data Structures Using Java",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Subroutines and modular programming; searching; basic data structures; recursion; introduction to sequential files.",
    prereqs: [["CSE 1223"]]
  },
  {
    id: "CSE 2124", dept: "CSE", number: "2124", name: "Intermediate Python Programming",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "A second course in Python programming covering object-oriented programming, recursive programming, searching and sorting, and basic data structures such as linked lists.",
    prereqs: [["CSE 1224"]]
  },
  {
    id: "CSE 2221", dept: "CSE", number: "2221", name: "Software I: Software Components",
    credits: 4, terms: ["Au", "Sp", "Su"],
    sentence: "Intellectual foundations of software engineering: design-by-contract principles, mathematical modeling of software functionality, component-based software from a client perspective, and layered data representation.",
    prereqs: [["CSE 1222", "CSE 1223", "CSE 1224", "ENGR 1281.01H", "ENGR 1281.02H"]],
    concur: [["MATH 1151"]]
  },
  {
    id: "CSE 2231", dept: "CSE", number: "2231", name: "Software II: Software Development and Design",
    credits: 4, terms: ["Au", "Sp", "Su"],
    sentence: "Data representation using hashing, search trees, and linked data structures; algorithms for sorting; using trees for language processing; component interface design; best practices in Java.",
    prereqs: [["CSE 2221"]],
    concur: [["CSE 2321"]]
  },
  {
    id: "CSE 2321", dept: "CSE", number: "2321", name: "Foundations I: Discrete Structures",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Propositional and first-order logic; basic proof techniques; graphs, trees; analysis of algorithms; asymptotic analysis; recurrence relations.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2124", "CSE 2221"], ["MATH 1151"]]
  },
  {
    id: "CSE 2331", dept: "CSE", number: "2331", name: "Foundations II: Data Structures and Algorithms",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Design and analysis of algorithms and data structures: divide-and-conquer, sorting and selection, search trees, hashing, graph algorithms, string matching, probabilistic analysis, randomized algorithms, and NP-completeness.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2124", "CSE 2231"], ["CSE 2321"], ["STAT 3470"]]
  },
  {
    id: "CSE 2421", dept: "CSE", number: "2421", name: "Systems I: Introduction to Low-Level Programming and Computer Organization",
    credits: 4, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to computer architecture at machine and assembly language level; pointers and addressing; C programming at machine level; computer organization.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2231"], ["CSE 2321"]]
  },
  {
    id: "CSE 2431", dept: "CSE", number: "2431", name: "Systems II: Introduction to Operating Systems",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to operating system concepts: process, CPU scheduling, memory management, file system and storage, and multi-threaded programming.",
    prereqs: [["CSE 2421"]],
    notes: "Catalog also allows CSE 2451 + ECE 2560 as an alternate path; only the CSE 2421 path is modeled here."
  },
  {
    id: "CSE 2451", dept: "CSE", number: "2451", name: "Advanced C Programming",
    credits: 2, terms: ["Au", "Sp"],
    sentence: "Advanced C features for students with significant programming experience in another language.",
    prereqs: [["CSE 2221"]],
    concur: [["CSE 2231"]]
  },
  {
    id: "CSE 2501", dept: "CSE", number: "2501", name: "Social, Ethical, and Professional Issues in Computing",
    credits: 1, terms: ["Au", "Sp", "Su"],
    sentence: "Social, ethical, and professional issues facing computing professionals; ethical principles; discussion of case studies.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2231"]]
  },
  {
    id: "CSE 3231", dept: "CSE", number: "3231", name: "Software Engineering Techniques",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Software engineering issues, techniques, methodologies and technologies: requirements analysis, architecture, design, testing, deployment, maintenance, project management, enterprise software systems, and frameworks.",
    prereqs: [["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 3232", dept: "CSE", number: "3232", name: "Software Requirements Analysis",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Information systems analysis: object-oriented analysis models and tools, use cases, system modeling using UML, and requirements specification development.",
    prereqs: [["CSE 3241", "CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 3241", dept: "CSE", number: "3241", name: "Introduction to Database Systems",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Database systems use, logical design, entity-relationship model, normalization, query languages and SQL, relational algebra and calculus, object-relational databases, XML, and active databases.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2124", "CSE 2231"], ["CSE 2321"]]
  },
  {
    id: "CSE 3244", dept: "CSE", number: "3244", name: "Data Management in the Cloud",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Systematic organization of data on cloud computing architectures: indexing techniques, query optimization, replication, data partitioning, and distributed task scheduling.",
    prereqs: [["CSE 3241"], ["CSE 2421"]]
  },
  {
    id: "CSE 3321", dept: "CSE", number: "3321", name: "Automata and Formal Languages",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Machine-based and grammatical models of computation: finite automata and regular languages, pushdown automata and context-free languages, Turing machines, non-determinism, and Church's Thesis.",
    prereqs: [["CSE 2231"], ["CSE 2421"], ["CSE 2331"], ["MATH 3345"]]
  },
  {
    id: "CSE 3341", dept: "CSE", number: "3341", name: "Principles of Programming Languages",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Formal languages and grammars; recursive descent parsing; data types, expressions, control structures, parameter passing; compilers and interpreters; memory management; functional programming principles.",
    prereqs: [["CSE 2231"], ["CSE 2331"], ["CSE 2421"], ["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 3421", dept: "CSE", number: "3421", name: "Introduction to Computer Architecture",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Organization of hardware and software in modern computer systems: instruction set design, processor control, ALU design, pipelining, multicores and accelerators, and memory subsystem design.",
    prereqs: [["CSE 2231"], ["CSE 2421", "ECE 2560"], ["ECE 2060"]]
  },
  {
    id: "CSE 3430", dept: "CSE", number: "3430", name: "Overview of Computer Systems for Non-Majors",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Introduction to computer architecture and organization at the machine and assembly level, and to operating system concepts: process, memory management, file systems, and multi-threaded programming.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2124", "CSE 2231"], ["CSE 2321"]]
  },
  {
    id: "CSE 3461", dept: "CSE", number: "3461", name: "Computer Networking and Internet Technologies",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Computer networks, communication protocols, Internet TCP/IP and applications, wireless communications, and network security.",
    prereqs: [["CSE 2421", "CSE 3430"]]
  },
  {
    id: "CSE 3521", dept: "CSE", number: "3521", name: "Survey of Artificial Intelligence I: Basic Techniques",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Survey of basic concepts and techniques in artificial intelligence, including problem solving, knowledge representation, and machine learning.",
    prereqs: [["CSE 2331"], ["MATH 2174", "MATH 2568"], ["STAT 3470"]]
  },
  {
    id: "CSE 3541", dept: "CSE", number: "3541", name: "Computer Game and Animation Techniques",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Fundamental algorithms and mathematics in the production of computer animation and video games, emphasizing control and rendering of animated characters.",
    prereqs: [["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 3901", dept: "CSE", number: "3901", name: "Project: Design, Development, and Documentation of Web Applications",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Intensive group project involving design, development, and documentation of a web application, with client-side and server-side scripting; communication skills emphasized.",
    prereqs: [["CSE 2231"], ["CSE 2321"], ["CSE 2421", "CSE 3430"]]
  },
  {
    id: "CSE 3902", dept: "CSE", number: "3902", name: "Project: Design, Development, and Documentation of Interactive Systems",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Intensive group project involving design, development, and documentation of an interactive software system, such as a 2D interactive game; communication skills emphasized.",
    prereqs: [["CSE 2231"], ["CSE 2321"], ["CSE 2421", "CSE 3430"]]
  },
  {
    id: "CSE 3903", dept: "CSE", number: "3903", name: "Project: Design, Development, and Documentation of System Software",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Intensive group project involving design, development, and documentation of system software, including an assembler and a linking loader; communication skills emphasized.",
    prereqs: [["CSE 2231"], ["CSE 2321"], ["CSE 2421", "CSE 3430"]]
  },
  {
    id: "CSE 4471", dept: "CSE", number: "4471", name: "Information Security",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to security of digital information: threats and attacks, regulations, risk management, attack detection and response, cryptography, and forensics.",
    prereqs: [["CSE 2122", "CSE 2123", "CSE 2124", "CSE 2231"], ["CSE 2321"]]
  },
  {
    id: "CSE 5242", dept: "CSE", number: "5242", name: "Advanced Database Management Systems",
    credits: 3, terms: ["Au"],
    sentence: "Transaction management; query processing and optimization; organization of database systems; advanced indexing, multi-dimensional data, similarity-based analysis, and performance evaluation.",
    prereqs: [["CSE 3241"], ["CSE 2421"]]
  },
  {
    id: "CSE 5243", dept: "CSE", number: "5243", name: "Introduction to Data Mining",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Knowledge discovery, data mining, data preprocessing, data transformations; clustering, classification, frequent pattern mining, anomaly detection, and graph and network analysis.",
    prereqs: [["CSE 3241"], ["CSE 2331"]]
  },
  {
    id: "CSE 5245", dept: "CSE", number: "5245", name: "Introduction to Network Science",
    credits: 3, terms: ["Sp"],
    sentence: "Introduction to network science: global and local network measures, PageRank, community discovery algorithms, network models, and the role of network analysis in web and social-network applications.",
    prereqs: [["CSE 2331"]]
  },
  {
    id: "CSE 5351", dept: "CSE", number: "5351", name: "Introduction to Cryptography",
    credits: 3, terms: ["Sp"],
    sentence: "Foundations of cryptography: mathematical formulations and proofs of security goals; theory and practical constructions of encryption schemes, MACs, digital signatures; zero-knowledge proof systems.",
    prereqs: [["CSE 2331"], ["STAT 3470"]]
  },
  {
    id: "CSE 5361", dept: "CSE", number: "5361", name: "Numerical Methods",
    credits: 3, terms: ["Au"],
    sentence: "Numerical methods for scientific computation: computer arithmetic, rounding errors, root-finding, interpolation, integration, linear systems, splines, smoothing, and curve-fitting.",
    prereqs: [["CSE 2231"], ["MATH 2568"]]
  },
  {
    id: "CSE 5441", dept: "CSE", number: "5441", name: "Introduction to Parallel Computing",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Parallel programming models; sequential and parallel performance issues; high-performance computer architecture; design, analysis, implementation, and performance evaluation of parallel algorithms.",
    prereqs: [["CSE 2231"], ["CSE 2321"], ["CSE 2421", "CSE 3430"]]
  },
  {
    id: "CSE 5471", dept: "CSE", number: "5471", name: "Introduction to Cybersecurity",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to cybersecurity: technical fundamentals of data, software, component, network, and system security, including organizational and societal perspectives.",
    prereqs: [],
    notes: "Cross-listed with ECE 5561. Catalog prereq is junior/senior/grad standing rather than a specific course."
  },
  {
    id: "CSE 5521", dept: "CSE", number: "5521", name: "Survey of Artificial Intelligence I: Basic Techniques",
    credits: 2, terms: ["Au", "Sp"],
    sentence: "Survey of the basic concepts and techniques in artificial intelligence, including problem solving, knowledge representation, and machine learning.",
    prereqs: [["CSE 2331"]],
    notes: "Reduced-credit graduate-track version of CSE 3521."
  },
  {
    id: "CSE 5522", dept: "CSE", number: "5522", name: "Survey of Artificial Intelligence II: Advanced Techniques",
    credits: 3, terms: ["Sp"],
    sentence: "Survey of advanced concepts, techniques, and applications of artificial intelligence, including knowledge representation, learning, natural language understanding, and vision.",
    prereqs: [["CSE 3521", "CSE 5521"]]
  },
  {
    id: "CSE 5523", dept: "CSE", number: "5523", name: "Machine Learning and Statistical Pattern Recognition",
    credits: 3, terms: ["Au"],
    sentence: "Introduction to basic concepts of machine learning and statistical pattern recognition: techniques for classification, clustering, and data representation and their theoretical analysis.",
    prereqs: [["CSE 3521", "CSE 5521"], ["MATH 2568"]]
  },
  {
    id: "CSE 5911", dept: "CSE", number: "5911", name: "Capstone Design: Software Applications",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Capstone design project: application of software engineering techniques, methodologies, and technologies in software lifecycle activities using enterprise software frameworks; teamwork and communication.",
    prereqs: [["CSE 3231"], ["CSE 2501"], ["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 5912", dept: "CSE", number: "5912", name: "Capstone Design: Game Design and Development",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Capstone design project: conceptual and technical design and implementation of an interactive game, integrating custom code and toolkits; teamwork and communication.",
    prereqs: [["CSE 3541"], ["CSE 2501"], ["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 5913", dept: "CSE", number: "5913", name: "Capstone Design: Computer Animation",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Capstone design project: conceptual and technical design and implementation of a computer animation incorporating animation elements; teamwork and communication.",
    prereqs: [["CSE 3541"], ["CSE 2501"], ["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 5914", dept: "CSE", number: "5914", name: "Capstone Design: Knowledge-Based Systems",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Capstone design project: conceptual and technical design, theory, and practice of knowledge-based systems; teamwork and communication.",
    prereqs: [["CSE 3521"], ["CSE 2501"], ["CSE 3901", "CSE 3902", "CSE 3903"]]
  },
  {
    id: "CSE 5915", dept: "CSE", number: "5915", name: "Capstone Design: Information Systems",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Capstone design project: information system principles including database design methods and tools, indexing, searching, application development, testing, and evaluation; teamwork and communication.",
    prereqs: [["CSE 3241"], ["CSE 2501"], ["CSE 3901", "CSE 3902", "CSE 3903"]]
  },

  /* ============================== ECE ================================
     Sourced directly from the official ECE course-listings table. */
  {
    id: "ECE 2020", dept: "ECE", number: "2020", name: "Introduction to Analog Systems and Circuits",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Circuit theory and applications of passive components and op-amps; introduction to analog systems using differential equations and Laplace transforms.",
    prereqs: [["MATH 1152", "MATH 1172"], ["PHYSICS 1250", "CHEM 1250"]]
  },
  {
    id: "ECE 2050", dept: "ECE", number: "2050", name: "Introduction to Discrete Time Signals and Systems",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to sampled-time signals and linear time-invariant sampled-time systems.",
    prereqs: [["ECE 2060"], ["CSE 1222", "CSE 1223", "CSE 1224"]],
    concur: [["MATH 2174", "MATH 2568"]]
  },
  {
    id: "ECE 2060", dept: "ECE", number: "2060", name: "Introduction to Digital Logic",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to the theory and practice of combinational and clocked sequential networks.",
    prereqs: [["MATH 1148", "MATH 1151"]]
  },
  {
    id: "ECE 2560", dept: "ECE", number: "2560", name: "Introduction to Microcontroller-Based Systems",
    credits: 2, terms: ["Au", "Sp"],
    sentence: "Hardware and software organization of a typical microcontroller; machine-language programming, peripheral interfacing, and input-output programming.",
    prereqs: [["ECE 2060"], ["CSE 1222", "CSE 1223", "CSE 1224", "ENGR 1281.01H", "ENGR 1281.02H"]]
  },
  {
    id: "ECE 3010", dept: "ECE", number: "3010", name: "Introduction to Radio Frequency and Optical Engineering",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Waves and pulses on transmission lines; fields and potentials; Faraday's law; Maxwell's equations; plane wave propagation, polarization, reflection, and transmission.",
    prereqs: [["ECE 2020"], ["PHYSICS 1251"], ["MATH 2415", "MATH 2174"]]
  },
  {
    id: "ECE 3020", dept: "ECE", number: "3020", name: "Introduction to Electronics",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Electronics: diode and transistor models for amplifiers, switches, and logic gates; multiple-transistor circuit analysis, op-amps, and electronic systems.",
    prereqs: [["ECE 2020"]]
  },
  {
    id: "ECE 3027", dept: "ECE", number: "3027", name: "Electronics Laboratory",
    credits: 1, terms: ["Au", "Sp"],
    sentence: "Electronic amplification, signal processing, timing, and power-regulation circuits; hands-on testing with an analog system lab kit.",
    prereqs: [["ECE 3020"]]
  },
  {
    id: "ECE 3030", dept: "ECE", number: "3030", name: "Semiconductor Electronic Devices",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Semiconductor materials and devices: crystals, band structure, charge-carrier statistics, PN junctions, and bipolar and field-effect transistors.",
    prereqs: [["PHYSICS 1251"], ["CHEM 1250"]],
    concur: [["MATH 2415", "MATH 2174"]]
  },
  {
    id: "ECE 3040", dept: "ECE", number: "3040", name: "Sustainable Energy and Power Systems I",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to electrical energy systems: history, current trends, renewable and non-renewable sources, rotating machines, and smart-grid initiatives.",
    prereqs: [["ECE 2020"]]
  },
  {
    id: "ECE 3047", dept: "ECE", number: "3047", name: "Electrical Energy Conversion Laboratory",
    credits: 1, terms: ["Au", "Sp"],
    sentence: "Laboratory introducing basics of energy-conversion processes using conventional rotating machines and a hardware-in-the-loop simulation system.",
    prereqs: [["ECE 3040"]]
  },
  {
    id: "ECE 3050", dept: "ECE", number: "3050", name: "Signals and Systems",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Linear systems and models in continuous and discrete time; convolution; Fourier series and transform; frequency response; Laplace and z-transforms.",
    prereqs: [["ECE 2020"], ["ECE 2050"], ["ECE 2060"], ["MATH 2568"]]
  },
  {
    id: "ECE 3090", dept: "ECE", number: "3090", name: "Technical Writing and Presentations",
    credits: 1, terms: ["Au"],
    sentence: "Technical writing and communications skills for engineers.",
    prereqs: [],
    notes: "Catalog prereq references ECE 3905/ENGR 5901.01/5902.02, not tracked in this starter database — treat as a senior-standing course taken alongside the capstone sequence."
  },
  {
    id: "ECE 3551", dept: "ECE", number: "3551", name: "Introduction to Feedback Control Systems",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Fundamental concepts in feedback control systems design and analysis.",
    prereqs: [["ECE 3050"]]
  },
  {
    id: "ECE 3561", dept: "ECE", number: "3561", name: "Advanced Digital Design",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Design and analysis of sequential circuits; digital circuit design using building blocks and programmable logic devices; design of basic computer components such as ALUs.",
    prereqs: [["ECE 2060"]],
    concur: [["ECE 3020"]]
  },
  {
    id: "ECE 3567", dept: "ECE", number: "3567", name: "Microcontroller Lab",
    credits: 1, terms: ["Au", "Sp"],
    sentence: "Laboratory in which a microcontroller is used to interface real-world hardware to build a functioning system.",
    prereqs: [["ECE 2560", "CSE 2421"]]
  },
  {
    id: "ECE 3906", dept: "ECE", number: "3906", name: "Capstone Design I",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Fundamentals of the engineering design process; application of design principles and methodology to conceptual and detailed technical design; technical writing and project management.",
    prereqs: [["ECE 2560"], ["ECE 3010"], ["ECE 3020"], ["ECE 3027"], ["ECE 3030"], ["ECE 3040"], ["ECE 3050"]]
  },
  {
    id: "ECE 4021", dept: "ECE", number: "4021", name: "Analog Integrated Circuits I",
    credits: 3, terms: ["Au"],
    sentence: "Fundamentals of analog integrated circuits: CMOS transistor and diode operation and modeling, current mirrors, CMOS amplifiers, OTAs and op-amps, and IC fabrication.",
    prereqs: [["ECE 3020"]]
  },
  {
    id: "ECE 4905", dept: "ECE", number: "4905", name: "Capstone Design II",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Application of project management and design principles to the conceptual and detailed technical design, implementation, and testing of a capstone project.",
    prereqs: [["ECE 3906"]]
  },
  {
    id: "ECE 5000", dept: "ECE", number: "5000", name: "Introduction to Analog and Digital Communications",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Communications channel modeling, analog and digital communication schemes, error-rate analysis, and error-control coding.",
    prereqs: [["ECE 3050"], ["STAT 3470"]]
  },
  {
    id: "ECE 5200", dept: "ECE", number: "5200", name: "Introduction to Digital Signal Processing",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Sampling and reconstruction; discrete-time rate conversion and filter design; selected topics in adaptive filtering, time-frequency analysis, and wavelets.",
    prereqs: [["ECE 3050"], ["STAT 3470"]]
  },
  {
    id: "ECE 5307", dept: "ECE", number: "5307", name: "Introduction to Machine Learning for ECE",
    credits: 4, terms: ["Au", "Sp"],
    sentence: "Linear regression, linear classification, model and feature selection, neural networks, clustering, and principal component analysis, implemented in Python.",
    prereqs: [["CSE 1222", "CSE 1223", "CSE 1224", "ENGR 1281.01H", "ENGR 1281.02H"], ["MATH 2568"], ["STAT 3470"]]
  },
  {
    id: "ECE 5362", dept: "ECE", number: "5362", name: "Computer Architecture and Design",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Design of general-purpose digital computers including arithmetic and control units, input/output, and memory subsystems.",
    prereqs: [["ECE 2560"], ["ECE 3561"]]
  },
  {
    id: "ECE 5463", dept: "ECE", number: "5463", name: "Introduction to Real Time Robotics Systems",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Components of a robot system; robot forward and reverse kinematics; robot dynamics and force generation; robot trajectory generation.",
    prereqs: [["MATH 2174", "MATH 2415"], ["PHYSICS 1250"], ["CSE 1222", "CSE 1223", "ENGR 1181", "ENGR 1281.01H", "ENGR 1281.02H"]]
  },
  {
    id: "ECE 5561", dept: "ECE", number: "5561", name: "Introduction to Cybersecurity",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Technical fundamentals of data, software, component, network, and system security, including organizational and societal perspectives and human factors.",
    prereqs: [],
    notes: "Cross-listed with CSE 5471. Catalog prereq is junior/senior/grad standing rather than a specific course."
  },

  /* ============================= MATH ================================
     Sourced directly from the Math department's course catalog.
     Teacher-education, actuarial-science, and pure grad-research
     course lines are intentionally out of scope for this starter set —
     see README for how to add them. */
  {
    id: "MATH 1148", dept: "MATH", number: "1148", name: "College Algebra",
    credits: 4, terms: ["Au", "Sp", "Su"],
    sentence: "Functions: polynomial, rational, radical, exponential, and logarithmic. Introduction to right-angle trigonometry.",
    prereqs: [], notes: "Requires Math Placement Level N (or equivalent)."
  },
  {
    id: "MATH 1149", dept: "MATH", number: "1149", name: "Trigonometry",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Trigonometric functions and their properties; vectors, polar coordinates, and complex numbers.",
    prereqs: [["MATH 1148"]]
  },
  {
    id: "MATH 1150", dept: "MATH", number: "1150", name: "Precalculus",
    credits: 5, terms: ["Au", "Sp"],
    sentence: "Functions: polynomial, rational, radical, exponential, logarithmic, trigonometric, and inverse trigonometric, with applications.",
    prereqs: [], notes: "Requires Math Placement Level M (or equivalent)."
  },
  {
    id: "MATH 1151", dept: "MATH", number: "1151", name: "Calculus I",
    credits: 5, terms: ["Au", "Sp", "Su"],
    sentence: "Differential and integral calculus of one real variable.",
    prereqs: [["MATH 1148", "MATH 1150"], ["MATH 1149", "MATH 1150"]]
  },
  {
    id: "MATH 1156", dept: "MATH", number: "1156", name: "Calculus for the Biological Sciences",
    credits: 5, terms: ["Au"],
    sentence: "Differential calculus and mathematical modeling in the life sciences.",
    prereqs: [["MATH 1148", "MATH 1150"], ["MATH 1149", "MATH 1150"]]
  },
  {
    id: "MATH 1161.01", dept: "MATH", number: "1161.01", name: "Accelerated Calculus I",
    credits: 5, terms: ["Au"],
    sentence: "Differential and integral calculus of one real variable, intended for students with prior calculus experience.",
    prereqs: [], notes: "Requires Math Placement Level L and previous calculus experience."
  },
  {
    id: "MATH 1152", dept: "MATH", number: "1152", name: "Calculus II",
    credits: 5, terms: ["Au", "Sp", "Su"],
    sentence: "Integral calculus, sequences and series, parametric curves, and polar coordinates.",
    prereqs: [["MATH 1151", "MATH 1156", "MATH 1161.01"]]
  },
  {
    id: "MATH 1172", dept: "MATH", number: "1172", name: "Engineering Mathematics A",
    credits: 5, terms: ["Au", "Sp", "Su"],
    sentence: "Techniques of integration, Taylor series, and differential calculus of several variables, with engineering applications.",
    prereqs: [["MATH 1151", "MATH 1156", "MATH 1161.01"]]
  },
  {
    id: "MATH 1181H", dept: "MATH", number: "1181H", name: "Honors Calculus I",
    credits: 5, terms: ["Au"],
    sentence: "Single-variable calculus treated in depth.",
    prereqs: [["MATH 1151"]]
  },
  {
    id: "MATH 2153", dept: "MATH", number: "2153", name: "Calculus III",
    credits: 4, terms: ["Au", "Sp", "Su"],
    sentence: "Multivariable differential and integral calculus.",
    prereqs: [["MATH 1152", "MATH 1172", "MATH 1181H"]]
  },
  {
    id: "MATH 2162.01", dept: "MATH", number: "2162.01", name: "Accelerated Calculus II",
    credits: 5, terms: ["Sp"],
    sentence: "Vectors, multivariable calculus, and integral theorems.",
    prereqs: [["MATH 1161.01", "MATH 1181H"]]
  },
  {
    id: "MATH 2173", dept: "MATH", number: "2173", name: "Engineering Mathematics B",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Multiple integrals, line integrals, vector fields, and second-order ordinary differential equations.",
    prereqs: [["MATH 1172"]]
  },
  {
    id: "MATH 2174", dept: "MATH", number: "2174", name: "Linear Algebra and Differential Equations for Engineers",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Matrix theory, eigenvectors and eigenvalues, and ordinary and partial differential equations for engineers.",
    prereqs: [["MATH 2173"]]
  },
  {
    id: "MATH 2182H", dept: "MATH", number: "2182H", name: "Honors Calculus II",
    credits: 5, terms: ["Sp"],
    sentence: "Multivariable calculus treated in depth.",
    prereqs: [["MATH 1181H"]]
  },
  {
    id: "MATH 2255", dept: "MATH", number: "2255", name: "Differential Equations and Their Applications",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Ordinary differential equations, their series solutions, numerical methods, Laplace transforms, and physical applications.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 2366", dept: "MATH", number: "2366", name: "Introduction to Discrete Mathematics",
    credits: 2, terms: ["Sp"],
    sentence: "Mathematical reasoning, logic, sets, functions, recursive definitions, and elementary counting principles.",
    prereqs: [["MATH 1151", "MATH 1161.01", "MATH 1181H"]]
  },
  {
    id: "MATH 2415", dept: "MATH", number: "2415", name: "Ordinary and Partial Differential Equations",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Ordinary and partial differential equations: Fourier series, boundary and initial value problems.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 2568", dept: "MATH", number: "2568", name: "Linear Algebra",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Matrix algebra, vector spaces and linear maps, bases and dimension, eigenvalues and eigenvectors, and applications.",
    prereqs: [["MATH 1172", "MATH 2153", "MATH 2162.01", "MATH 2182H"]]
  },
  {
    id: "MATH 2568H", dept: "MATH", number: "2568H", name: "Honors Linear Algebra",
    credits: 3, terms: ["Au"],
    sentence: "A rigorous introduction to finite-dimensional linear algebra for math majors, with exposure to modern applications and computational practice.",
    prereqs: [["MATH 2153", "MATH 2162.01", "MATH 2182H"]]
  },
  {
    id: "MATH 3345", dept: "MATH", number: "3345", name: "Foundations of Higher Mathematics",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Introduction to logic, proof techniques, set theory, number theory, and real numbers.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H", "CSE 2321"]]
  },
  {
    id: "MATH 3345H", dept: "MATH", number: "3345H", name: "Honors Foundations of Higher Mathematics",
    credits: 3, terms: ["Sp"],
    sentence: "A systematic introduction to problem solving and proof-writing, serving as a bridge between calculus and the conceptual classes in the math major.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 3607", dept: "MATH", number: "3607", name: "Beginning Scientific Computing",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to the mathematical theory of algorithms used to solve problems that typically arise in sciences, engineering, and finance.",
    prereqs: [["MATH 2255", "MATH 2415"], ["MATH 2568", "MATH 2568H"]]
  },
  {
    id: "MATH 4181H", dept: "MATH", number: "4181H", name: "Honors Analysis I",
    credits: 5, terms: ["Au"],
    sentence: "An enriched honors sequence introducing students to the mathematical underpinnings of calculus.",
    prereqs: [], notes: "Requires permission of department."
  },
  {
    id: "MATH 4182H", dept: "MATH", number: "4182H", name: "Honors Analysis II",
    credits: 5, terms: ["Sp"],
    sentence: "Continuation of Math 4181H: the mathematical underpinnings of calculus.",
    prereqs: [["MATH 4181H"]]
  },
  {
    id: "MATH 4530", dept: "MATH", number: "4530", name: "Probability",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Combinatorial probability, random variables, independence, expectation, and variance.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 4547", dept: "MATH", number: "4547", name: "Introductory Analysis I",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Advanced calculus: sequences, limits, continuity, differentiation, the Riemann integral, sequences and series of functions, Taylor series, and improper integrals.",
    prereqs: [["MATH 3345", "MATH 3345H"]]
  },
  {
    id: "MATH 4548", dept: "MATH", number: "4548", name: "Introductory Analysis II",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Continuation of Math 4547: advanced calculus, sequences, limits, continuity, and Taylor series.",
    prereqs: [["MATH 4547"]]
  },
  {
    id: "MATH 4551", dept: "MATH", number: "4551", name: "Vector Analysis",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Vector operations; Jacobian and change of variables; divergence, gradient, and curl; Green's, Stokes', and divergence theorems, with applications.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 4552", dept: "MATH", number: "4552", name: "Complex Analysis",
    credits: 3, terms: ["Sp", "Su"],
    sentence: "Introduction to analytic functions of a complex variable, integral theorems, power series, residues, and conformal mapping.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 4556", dept: "MATH", number: "4556", name: "Dynamical Systems",
    credits: 3, terms: ["Au"],
    sentence: "Systems of linear, first-order differential equations; existence and uniqueness theorems; numerical methods; qualitative theory; and physical applications.",
    prereqs: [["MATH 2153", "MATH 2173", "MATH 2182H"]]
  },
  {
    id: "MATH 4557", dept: "MATH", number: "4557", name: "Partial Differential Equations",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "First- and second-order PDEs; existence and uniqueness, initial and boundary value problems, Fourier series, Green's functions, and the wave, heat, and Laplace equations.",
    prereqs: [["MATH 2255", "MATH 2415"]]
  },
  {
    id: "MATH 4573", dept: "MATH", number: "4573", name: "Elementary Number Theory",
    credits: 3, terms: ["Sp"],
    sentence: "Prime numbers, modular arithmetic, Diophantine equations, combinatorial analysis, and an introduction to concepts of abstract algebra.",
    prereqs: [["MATH 3345", "MATH 4181H"]]
  },
  {
    id: "MATH 4575", dept: "MATH", number: "4575", name: "Combinatorial Mathematics",
    credits: 3, terms: ["Sp"],
    sentence: "Classic puzzles of recreational mathematics; matching theory and graph theory; enumeration techniques; combinatorial analysis.",
    prereqs: [["MATH 2568", "MATH 2568H"]]
  },
  {
    id: "MATH 4578", dept: "MATH", number: "4578", name: "Discrete Mathematical Models",
    credits: 4, terms: ["Sp"],
    sentence: "Homogeneous and non-homogeneous difference equations of one or several variables, Markov chains, graph theory, and network flows.",
    prereqs: [["MATH 2568", "MATH 2568H"], ["MATH 4530"]]
  },
  {
    id: "MATH 4580", dept: "MATH", number: "4580", name: "Abstract Algebra I",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Topics in number theory, group theory, vector spaces and linear transformations, field theory, and field extensions.",
    prereqs: [["MATH 3345", "MATH 3345H"], ["MATH 2568", "MATH 2568H"]]
  },
  {
    id: "MATH 4581", dept: "MATH", number: "4581", name: "Abstract Algebra II",
    credits: 3, terms: ["Au", "Sp"],
    sentence: "Continuation of Math 4580: topics in number theory, group theory, vector spaces and linear transformations, field theory, and field extensions.",
    prereqs: [["MATH 4580"]]
  },

  /* ============================== ENGR =============================== */
  {
    id: "ENGR 1100", dept: "ENGR", number: "1100", name: "Introduction to Ohio State and Engineering",
    credits: 1, terms: ["Au", "Sp"],
    sentence: "Orientation to the university and the engineering profession; academic policies, resources, and strategies for success.",
    prereqs: []
  },
  {
    id: "ENGR 1181", dept: "ENGR", number: "1181", name: "Fundamentals of Engineering I",
    credits: 2, terms: ["Au", "Sp", "Su"],
    sentence: "Introduction to the engineering design process, teamwork, and problem solving using tools such as Excel and MATLAB.",
    prereqs: []
  },
  {
    id: "ENGR 1182", dept: "ENGR", number: "1182", name: "Fundamentals of Engineering II",
    credits: 2, terms: ["Au", "Sp", "Su"],
    sentence: "Continuation of ENGR 1181: engineering design, programming fundamentals, and a team design-build project.",
    prereqs: [["ENGR 1181"]],
    concur: [["MATH 1151"]]
  },
  {
    id: "ENGR 1281.01H", dept: "ENGR", number: "1281.01H", name: "Fundamentals of Engineering I (Honors)",
    credits: 5, terms: ["Au"],
    sentence: "Honors introduction to engineering design and programming, combining ENGR 1181/1182 content in an accelerated sequence.",
    prereqs: []
  },
  {
    id: "ENGR 1281.02H", dept: "ENGR", number: "1281.02H", name: "Fundamentals of Engineering II (Honors)",
    credits: 5, terms: ["Sp"],
    sentence: "Continuation of ENGR 1281.01H: advanced engineering design, programming, and a team design-build project.",
    prereqs: [["ENGR 1281.01H"]]
  },

  /* ============================= PHYSICS =============================== */
  {
    id: "PHYSICS 1250", dept: "PHYSICS", number: "1250", name: "Mechanics, Thermal Physics",
    credits: 5, terms: ["Au", "Sp", "Su"],
    sentence: "Calculus-based mechanics: kinematics, Newton's laws, energy, momentum, rotation, and thermal physics.",
    concur: [["MATH 1151"]], prereqs: []
  },
  {
    id: "PHYSICS 1251", dept: "PHYSICS", number: "1251", name: "Electricity and Magnetism, Optics, Modern Physics",
    credits: 5, terms: ["Au", "Sp", "Su"],
    sentence: "Calculus-based electricity and magnetism, optics, and an introduction to modern physics.",
    prereqs: [["PHYSICS 1250"]],
    concur: [["MATH 1152"], ["MATH 1172"]]
  },

  /* =============================== STAT ================================ */
  {
    id: "STAT 3470", dept: "STAT", number: "3470", name: "Probability and Statistics for Engineers",
    credits: 3, terms: ["Au", "Sp", "Su"],
    sentence: "Probability, random variables, and statistical inference, with applications to engineering problems.",
    prereqs: [["MATH 1152", "MATH 1172"]]
  },

  /* =============================== CHEM ================================ */
  {
    id: "CHEM 1250", dept: "CHEM", number: "1250", name: "General Chemistry for Engineers",
    credits: 4, terms: ["Au", "Sp", "Su"],
    sentence: "General chemistry principles for engineering students: stoichiometry, thermochemistry, equilibrium, and materials.",
    prereqs: []
  }
];

// Make available to app.js whether loaded via <script> tag (browser global)
if (typeof module !== "undefined") { module.exports = COURSES_DB; }
