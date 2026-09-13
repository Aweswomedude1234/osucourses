/* =====================================================================
   OSU COURSE PLANNER â€” COURSE DATABASE
   =====================================================================
   This file is the "spreadsheet." It is the only place course data
   lives. The app (app.js) never hard-codes a course â€” it just reads
   this array and checks the visitor's completed courses against it.

   Sourced directly from official OSU department pages: the CSE
   department's course listing (cse.osu.edu/courses), the ECE
   department's official course-listing table, the Math department's
   course catalog (math.osu.edu/courses), and department prerequisite
   flowcharts/curriculum sheets for ECE, MATH, and ENGR.

   HOW TO ADD / EDIT COURSES
   --------------------------------------------------------------------
     id        "DEPT NUMBER" â€” must be unique.
     dept      Department code, e.g. "CSE", "MATH", "ECE", "ENGR".
     number    Course number as a string, e.g. "2221".
     name      Official course title.
     credits   Number of credit hours (numeric).
     terms     Array of terms typically offered: "Au","Sp","Su".
     sentence  The catalog description ("course sentence").
     prereqs   Array of prerequisite GROUPS. Each group is an array of
               course ids â€” the student needs AT LEAST ONE id from
               EVERY group to be eligible (AND across groups, OR
               within a group). Use [] if there are no prerequisites.
               Tip: "(A and B) or C" can be encoded as two groups,
               [["A","C"], ["B","C"]] â€” satisfying C alone satisfies
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
    notes: "Catalog prereq references ECE 3905/ENGR 5901.01/5902.02, not tracked in this starter database â€” treat as a senior-standing course taken alongside the capstone sequence."
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
     course lines are intentionally out of scope for this starter set â€”
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
  },

  /* ============================= FROM osu_courses.md ==================== */

  {
    id: "BIOCHEM 2210",
    dept: "BIOCHEM",
    number: "2210",
    name: "Elements of Biochemistry",
    credits: 4,
    terms: [],
    sentence: " A survey of biochemistry stressing the qualitative rather than the quantitative approach. Credit does not count toward a major in biochemistry.",
    prereqs: [
    ["BIOCHEM 1110"],
    ["BIOCHEM 102"],
    ["BIOCHEM 1210"],
    ["BIOCHEM 122"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 2900H",
    dept: "BIOCHEM",
    number: "2900H",
    name: "Early Experience in Research in Biochemistry: Seminar",
    credits: 1,
    terms: [],
    sentence: " Introduction to biochemical research through seminars and laboratory tours by faculty in the department. Biology 1113 (113) recommended but not required.",
    prereqs: [
    ["BIOCHEM 1220"],
    ["BIOCHEM 1620"],
    ["BIOCHEM 1920H"],
    ["BIOCHEM 203H"],
    ["BIOCHEM 1900H"],
    ["BIOCHEM 200H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 2998H",
    dept: "BIOCHEM",
    number: "2998H",
    name: "Early Experience in Research in Biochemistry: Laboratory",
    credits: 1,
    terms: [],
    sentence: " A laboratory sequel to Biochem 2900H to introduce undergraduates to biochemical research.",
    prereqs: [
    ["BIOCHEM 2900H"],
    ["BIOCHEM 1998H"],
    ["BIOCHEM 201H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 4511",
    dept: "BIOCHEM",
    number: "4511",
    name: "Introduction to Biological Chemistry",
    credits: 4,
    terms: [],
    sentence: " An introductory course in biochemistry dealing with the molecular basis of structure, metabolism, genetic replication, transcription, and translation in plants, animals, and microorganisms.",
    prereqs: [
    ["BIOCHEM 1220"],
    ["BIOCHEM 1250"],
    ["BIOCHEM 1620"],
    ["BIOCHEM 1920H"],
    ["BIOCHEM 2510"],
    ["BIOCHEM 2310"],
    ["BIOCHEM 2610"],
    ["BIOCHEM 2910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 5613",
    dept: "BIOCHEM",
    number: "5613",
    name: "Biochemistry and Molecular Biology I",
    credits: 3,
    terms: [],
    sentence: " An introductory course in biochemistry and molecular biology developing in three semesters the molecular basis of structure and function of living cells.",
    prereqs: [],
    concur: [
    ["BIOCHEM 2520"],
    ["BIOCHEM 253"],
    ["BIOCHEM 2620"],
    ["BIOCHEM 2920H"],
    ["BIOCHEM 613"],
    ["BIOCHEM 4511"],
    ["BIOCHEM 511"]
  ],
    notes: ""
  },
  {
    id: "BIOCHEM 5614",
    dept: "BIOCHEM",
    number: "5614",
    name: "Biochemistry and Molecular Biology II",
    credits: 3,
    terms: [],
    sentence: " Continuation of Biochem 5613.",
    prereqs: [
    ["BIOCHEM 5613"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 5615",
    dept: "BIOCHEM",
    number: "5615",
    name: "Biochemistry and Molecular Biology III",
    credits: 3,
    terms: [],
    sentence: " Continuation of Biochem 5614.",
    prereqs: [
    ["BIOCHEM 5614"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 5621",
    dept: "BIOCHEM",
    number: "5621",
    name: "Biochemistry and Molecular Biology Laboratory",
    credits: 4,
    terms: [],
    sentence: " Laboratory course covering the principles and application of basic lab techniques, protein purification, enzyme assays, and recombinant DNA technologies.",
    prereqs: [
    ["BIOCHEM 4511"],
    ["BIOCHEM 5613"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BIOCHEM 5721",
    dept: "BIOCHEM",
    number: "5721",
    name: "Physical Biochemistry I",
    credits: 3,
    terms: [],
    sentence: " Introduction to physical chemistry with emphasis on biological applications; designed for students in the life sciences.",
    prereqs: [],
    concur: [
    ["BIOCHEM 2520"],
    ["BIOCHEM 253"],
    ["BIOCHEM 2620"],
    ["BIOCHEM 2920H"],
    ["BIOCHEM 721"],
    ["BIOCHEM 4200"],
    ["BIOCHEM 4300"]
  ],
    notes: ""
  },
  {
    id: "BIOCHEM 5722",
    dept: "BIOCHEM",
    number: "5722",
    name: "Physical Biochemistry II",
    credits: 3,
    terms: [],
    sentence: " Continuation of Biochem 5721.",
    prereqs: [
    ["BIOCHEM 5721"],
    ["BIOCHEM 4200"],
    ["BIOCHEM 4300"],
    ["BIOCHEM 721"],
    ["BIOCHEM 721"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1101",
    dept: "CHEM",
    number: "1101",
    name: "Chemistry and Society",
    credits: 4,
    terms: [],
    sentence: " The course will examine the dilemma that we face in our modern world of attempting to balance the great benefits of modern chemical sciences and technology with the risks that accompany those benefits, through the lens of chemicals that have changed the world around us. This course includes a laboratory experience.",
    prereqs: [
    ["CHEM 1050"],
    ["CHEM 1100"],
    ["CHEM 1110"],
    ["CHEM 1210"],
    ["CHEM 1610"],
    ["CHEM 1910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1110",
    dept: "CHEM",
    number: "1110",
    name: "Elementary Chemistry",
    credits: 5,
    terms: [],
    sentence: " Introductory chemistry for non-science majors, including dimensional analysis, atomic structure, bonding, chemical reactions, states of matter, solutions, chemical equilibrium, acids and bases, along with topics in organic and biological chemistry.",
    prereqs: [
    ["CHEM 1073"],
    ["CHEM 1074"],
    ["CHEM 1075"],
    ["CHEM 1210"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1206",
    dept: "CHEM",
    number: "1206",
    name: "Foundations 1 of General Chemistry",
    credits: 3,
    terms: [],
    sentence: " Chem 1206 is the first course in a two-course series, for science majors, covering units & measurement, atomic structure, electron configuration, periodic trends, bonding, and molecular structure. The chemistry content is covered in the same depth and rigor as in Chem 1210, and is about 1/2 of the Chem 1210 content. Additionally, metacognitive learning strategies are taught in the course.",
    prereqs: [],
    concur: [
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1140"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1210"],
    ["CHEM 1220"],
    ["CHEM 1610"],
    ["CHEM 1620"],
    ["CHEM 1910H"],
    ["CHEM 1920H"],
    ["CHEM 1250"]
  ],
    notes: ""
  },
  {
    id: "CHEM 1208",
    dept: "CHEM",
    number: "1208",
    name: "Foundations 2 of General Chemistry",
    credits: 4,
    terms: [],
    sentence: " CHEM 1208 is second course in a two-course series, for science majors, covering the mole, stoichiometry, chemical reactions, thermochemistry, gases, liquids, and solids, paired with metacognitive learning strategies. CHEM 1208 also includes a laboratory experience, that covers labs from both CHEM 1206 and CHEM 1208 content. Credit for CHEM 1206 and CHEM 1208 is equivalent to CHEM 1210.",
    prereqs: [
    ["CHEM 1206"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1140"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1210"],
    ["CHEM 1220"],
    ["CHEM 1610"],
    ["CHEM 1620"],
    ["CHEM 1910H"],
    ["CHEM 1920H"],
    ["CHEM 1250"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1210",
    dept: "CHEM",
    number: "1210",
    name: "General Chemistry I",
    credits: 5,
    terms: [],
    sentence: " First course for science majors, covering dimensional analysis, atomic structure, the mole, stoichiometry, chemical reactions, thermochemistry, electron configuration, bonding, molecular structure, gases, liquids, and solids.",
    prereqs: [
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1220",
    dept: "CHEM",
    number: "1220",
    name: "General Chemistry II",
    credits: 5,
    terms: [],
    sentence: " Continuation of 1210 for science majors, covering solutions, kinetics, chemical equilibrium, solubility and ionic equilibria, qualitative analysis, thermodynamics, electrochemistry, descriptive chemistry, coordination compounds, and nuclear chemistry.",
    prereqs: [
    ["CHEM 1210"],
    ["CHEM 1215"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1206"],
    ["CHEM 1208"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1250",
    dept: "CHEM",
    number: "1250",
    name: "General Chemistry for Engineers",
    credits: 4,
    terms: [],
    sentence: " First course for engineering majors, covering dimensional analysis, atomic and molecular structure, the mole, stoichiometry, chemical reactions, states of matter, solutions, kinetics, equilibrium, acids and bases, thermodynamics, and electrochemistry.",
    prereqs: [
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1210"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 2310"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1610",
    dept: "CHEM",
    number: "1610",
    name: "General Chemistry for Majors I",
    credits: 5,
    terms: [],
    sentence: " First course for chemistry and biochemistry majors, covering dimensional analysis, atomic structure, the mole, stoichiometry, chemical reactions, thermochemistry, electron configuration, bonding, molecular structure, gases, liquids, and solids.",
    prereqs: [
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1210"],
    ["CHEM 1220"],
    ["CHEM 1250"],
    ["CHEM 1620"],
    ["CHEM 1910H"],
    ["CHEM 1920H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1620",
    dept: "CHEM",
    number: "1620",
    name: "General Chemistry for Majors II",
    credits: 5,
    terms: [],
    sentence: " Continuation of 1610 for science majors, covering solutions, kinetics, chemical equilibrium, solubility and ionic equilibria, qualitative analysis, thermodynamics, electrochemistry, descriptive chemistry, coordination compounds, and nuclear chemistry.",
    prereqs: [
    ["CHEM 1210"],
    ["CHEM 1215"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 1220"],
    ["CHEM 1920H"],
    ["CHEM 2310"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 1910H",
    dept: "CHEM",
    number: "1910H",
    name: "Honors General Chemistry I",
    credits: 5,
    terms: [],
    sentence: " Fundamental chemical principles and the chemistry of nonmetals for selected students.",
    prereqs: [],
    concur: [
    ["CHEM 1141"],
    ["CHEM 1151"],
    ["CHEM 1210"],
    ["CHEM 1610"]
  ],
    notes: ""
  },
  {
    id: "CHEM 1920H",
    dept: "CHEM",
    number: "1920H",
    name: "Honors General Chemistry II",
    credits: 5,
    terms: [],
    sentence: " Continuation of Chem 1910H for selected students covering fundamental principles and the chemistry of metals.",
    prereqs: [
    ["CHEM 1910H"],
    ["CHEM 202H"],
    ["CHEM 203H"],
    ["CHEM 1220"],
    ["CHEM 1620"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2210",
    dept: "CHEM",
    number: "2210",
    name: "Analytical Chemistry I: Quantitative Analysis",
    credits: 5,
    terms: [],
    sentence: " Quantitative chemical analysis for chemistry majors; quantitative analysis of the elemental and molecular composition of complex systems.",
    prereqs: [
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 203H"],
    ["CHEM 1148"],
    ["CHEM 1149"],
    ["CHEM 1130"],
    ["CHEM 130"],
    ["CHEM 1131"],
    ["CHEM 131"],
    ["CHEM 1150"],
    ["CHEM 150"],
    ["CHEM 2210H"],
    ["CHEM 221H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2210H",
    dept: "CHEM",
    number: "2210H",
    name: "Honors Analytical Chemistry I: Quantitative Analysis",
    credits: 5,
    terms: [],
    sentence: " Honors version of quantitative chemical analysis for chemistry majors; quantitative analysis of the elemental and molecular composition of complex systems.",
    prereqs: [
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 203H"],
    ["CHEM 1148"],
    ["CHEM 1149"],
    ["CHEM 1130"],
    ["CHEM 130"],
    ["CHEM 1131"],
    ["CHEM 131"],
    ["CHEM 1150"],
    ["CHEM 150"],
    ["CHEM 2210"],
    ["CHEM 221"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2310",
    dept: "CHEM",
    number: "2310",
    name: "Introductory Organic Chemistry",
    credits: 4,
    terms: [],
    sentence: " A condensed presentation of organic chemistry organized by functional groups with an emphasis on practical applications.",
    prereqs: [
    ["CHEM 1110"],
    ["CHEM 1220"],
    ["CHEM 122"],
    ["CHEM 1250"],
    ["CHEM 125"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 2510"],
    ["CHEM 251"],
    ["CHEM 2610"],
    ["CHEM 2910H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2510",
    dept: "CHEM",
    number: "2510",
    name: "Organic Chemistry I",
    credits: 4,
    terms: [],
    sentence: " Introduction to structure, nomenclature, physical properties, preparation and reactions of alkanes, alkenes, conjugated dienes, alkynes, alcohols, ethers, epoxides, aldehydes, and ketones. Other topics include stereochemistry, conformations of molecules, acids, bases, and reaction mechanisms.",
    prereqs: [
    ["CHEM 1208"],
    ["CHEM 1210"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 2520"],
    ["CHEM 2610"],
    ["CHEM 2620"],
    ["CHEM 2910H"],
    ["CHEM 2920H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2520",
    dept: "CHEM",
    number: "2520",
    name: "Organic Chemistry II",
    credits: 4,
    terms: [],
    sentence: " Continuation from 2510, including aromatic systems, carboxylic acids, carboxylic acid derivatives, amines, carbon-carbon bond-forming reactions, polymers, carbohydrates, and amino acids.",
    prereqs: [
    ["CHEM 1208"],
    ["CHEM 1210"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"],
    ["CHEM 2620"],
    ["CHEM 2920H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2540",
    dept: "CHEM",
    number: "2540",
    name: "Organic Chemistry Laboratory I",
    credits: 2,
    terms: [],
    sentence: " Introduction to spectroscopic characterization, scientific writing, computational chemistry, and the laboratory techniques of organic chemistry, including synthesis, isolation, purification, and identification of organic compounds. Spectroscopic techniques discussed included Infrared Spectroscopy, Mass Spectrometry, 1H and 13C Nuclear Magnetic Resonance.",
    prereqs: [],
    concur: [
    ["CHEM 2310"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"],
    ["CHEM 1208"],
    ["CHEM 1210"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"]
  ],
    notes: ""
  },
  {
    id: "CHEM 2550",
    dept: "CHEM",
    number: "2550",
    name: "Organic Chemistry Laboratory II",
    credits: 2,
    terms: [],
    sentence: " Synthetic application to various organic reaction and spectroscopic characterization, scientific writing, computational chemistry, and the laboratory techniques of organic chemistry. Includes application of synthesis, isolation, purification, and identification of organic compounds.",
    prereqs: [],
    concur: [
    ["CHEM 2520"],
    ["CHEM 2620"],
    ["CHEM 2920H"],
    ["CHEM 1208"],
    ["CHEM 1210"],
    ["CHEM 1250"],
    ["CHEM 1610"],
    ["CHEM 1910H"],
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"],
    ["CHEM 2540"],
    ["CHEM 1120"],
    ["CHEM 1130"],
    ["CHEM 1131"],
    ["CHEM 1148"],
    ["CHEM 1150"]
  ],
    notes: ""
  },
  {
    id: "CHEM 2610",
    dept: "CHEM",
    number: "2610",
    name: "Organic Chemistry for Majors I",
    credits: 4,
    terms: [],
    sentence: " Introduction to structure, nomenclature, physical properties, preparation and reactions of alkanes, alkenes, alkynes, alcohols, ethers, epoxides, aldehydes and ketones. Other topics include stereochemistry, acids, bases, and reaction mechanisms.",
    prereqs: [
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 203H"],
    ["CHEM 252"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2620",
    dept: "CHEM",
    number: "2620",
    name: "Organic Chemistry for Majors II",
    credits: 4,
    terms: [],
    sentence: " Continuation from 2610, including aromatic systems, carboxylic acids, carboxylic acid derivatives, amines, carbon-carbon bond-forming reactions, polymers, carbohydrates and amino acids.",
    prereqs: [
    ["CHEM 2510"],
    ["CHEM 252"],
    ["CHEM 2610"],
    ["CHEM 2910H"],
    ["CHEM 2520"],
    ["CHEM 253"],
    ["CHEM 2920H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2910H",
    dept: "CHEM",
    number: "2910H",
    name: "Honors Organic Chemistry I",
    credits: 4,
    terms: [],
    sentence: " Honors introduction to structure, nomenclature, physical properties, preparation and reactions of alkanes, alkenes, alkynes, alcohols, ethers, epoxides, aldehydes and ketones, including stereochemistry, acids, bases, and reaction mechanisms.",
    prereqs: [
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 203H"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 252H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 2920H",
    dept: "CHEM",
    number: "2920H",
    name: "Honors Organic Chemistry II",
    credits: 4,
    terms: [],
    sentence: " Continuation from 2910H, including aromatic systems, carboxylic acids, carboxylic acid derivatives, amines, carbon-carbon bond-forming reactions, polymers, carbohydrates and amino acids.",
    prereqs: [
    ["CHEM 2910H"],
    ["CHEM 252H"],
    ["CHEM 252"],
    ["CHEM 2520"],
    ["CHEM 2620"],
    ["CHEM 253H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 3301",
    dept: "CHEM",
    number: "3301",
    name: "Science and Process of Drug Development",
    credits: 3,
    terms: [],
    sentence: " The course focus is on the science and public policy that govern drug development. The principles of chemistry and biochemistry are applied to research and development of drug therapeutics. The drug approval process of drug safety, toxicity, and clinical trials will focus on pharmaceutical industry challenges of drug affordability, safety, and drug development impact on global public health.",
    prereqs: [
    ["CHEM 1113"],
    ["CHEM 1220"],
    ["CHEM 1250"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 3301"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 3510",
    dept: "CHEM",
    number: "3510",
    name: "Inorganic Chemistry",
    credits: 3,
    terms: [],
    sentence: " Introduction to the principles of inorganic structure and bonding, including molecular symmetry, atomic structure, ionic bonding, coordination complexes, magnetic properties, thermodynamics and reactivity, bioinorganic chemistry, and nanoparticles.",
    prereqs: [
    ["CHEM 2520"],
    ["CHEM 253"],
    ["CHEM 2620"],
    ["CHEM 253"],
    ["CHEM 2920H"],
    ["CHEM 253H"],
    ["CHEM 652"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 4200",
    dept: "CHEM",
    number: "4200",
    name: "Physical Chemistry for Chemical Science I",
    credits: 3,
    terms: [],
    sentence: " This course covers quantum mechanics and spectroscopy, beginning with an overview of classical mechanics and the historical origins of quantum theory. Basic quantum mechanics problems including the particle in a box, rigid rotor, harmonic oscillator, and hydrogen atom will be discussed, leading to a description of chemical bonding and modern computational molecular orbital theory (Hartree-Fock).",
    prereqs: [
    ["CHEM 2210"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"],
    ["CHEM 1201"],
    ["CHEM 1251"],
    ["CHEM 1152"],
    ["CHEM 1172"],
    ["CHEM 4300"],
    ["CHEM 5721"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 4300",
    dept: "CHEM",
    number: "4300",
    name: "Physical Chemistry I",
    credits: 3,
    terms: [],
    sentence: " Quantum mechanics, spectroscopy, and statistical mechanics.",
    prereqs: [],
    concur: [
    ["CHEM 2177"],
    ["CHEM 2255"],
    ["CHEM 2415"],
    ["CHEM 2173"]
  ],
    notes: ""
  },
  {
    id: "CHEM 4310",
    dept: "CHEM",
    number: "4310",
    name: "Physical Chemistry II",
    credits: 3,
    terms: [],
    sentence: " Statistical thermodynamics, thermodynamic equilibrium, and chemical kinetics.",
    prereqs: [
    ["CHEM 4300"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 4410",
    dept: "CHEM",
    number: "4410",
    name: "Physical Chemistry Laboratory",
    credits: 3,
    terms: [],
    sentence: " Quantitative measurements of chemical phenomena and the application of chemical principles to their interpretation.",
    prereqs: [],
    concur: [
    ["CHEM 4200"],
    ["CHEM 520"],
    ["CHEM 4300"],
    ["CHEM 530"],
    ["CHEM 541"]
  ],
    notes: ""
  },
  {
    id: "CHEM 4550",
    dept: "CHEM",
    number: "4550",
    name: "Inorganic Chemistry Laboratory",
    credits: 2,
    terms: [],
    sentence: " Preparation and characterization of inorganic compounds employing a variety of synthetic techniques.",
    prereqs: [
    ["CHEM 3510"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 4870",
    dept: "CHEM",
    number: "4870",
    name: "Analytical Chemistry II: Instrumental Analysis",
    credits: 3,
    terms: [],
    sentence: " Applications of physico-chemical principles to problems in qualitative and quantitative chemical analysis.",
    prereqs: [],
    concur: [
    ["CHEM 4200"],
    ["CHEM 4300"],
    ["CHEM 520"],
    ["CHEM 530"],
    ["CHEM 541"]
  ],
    notes: ""
  },
  {
    id: "CHEM 4880",
    dept: "CHEM",
    number: "4880",
    name: "Instrumental Analysis Laboratory",
    credits: 2,
    terms: [],
    sentence: " Laboratory applications of physico-chemical principles to instrumental analysis.",
    prereqs: [],
    concur: [
    ["CHEM 4870"],
    ["CHEM 587"],
    ["CHEM 588"]
  ],
    notes: ""
  },
  {
    id: "CHEM 5230",
    dept: "CHEM",
    number: "5230",
    name: "Neurotransmitter Chemistry",
    credits: 3,
    terms: [],
    sentence: " Come and explore the natural and unnatural organic molecules involved in neurotransmission. Through the study of synthetic strategies, mechanistic principles, and the structural requirements for biological activity, students will investigate the chemical world of endogenous molecules, pharmaceuticals, and drugs of abuse.",
    prereqs: [
    ["CHEM 2520"],
    ["CHEM 2620"],
    ["CHEM 2920H"],
    ["CHEM 2540"],
    ["CHEM 2550"],
    ["CHEM 4511"],
    ["CHEM 5613"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 5240",
    dept: "CHEM",
    number: "5240",
    name: "Introduction to Protein Modeling",
    credits: 3,
    terms: [],
    sentence: " This course provides a practical introduction to the theory and methods of molecular modeling and computational chemistry as it pertains to modeling large biological molecules such as proteins. Hands-on experience will be obtained by all attendees in doing molecular mechanics and modeling dynamic systems (molecular dynamics).",
    prereqs: [
    ["CHEM 2310"],
    ["CHEM 2510"],
    ["CHEM 2610"],
    ["CHEM 2910H"],
    ["CHEM 4511"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 5420",
    dept: "CHEM",
    number: "5420",
    name: "Spectroscopy of Organic Compounds",
    credits: 2,
    terms: [],
    sentence: " Exploration of the use of spectroscopic techniques for the determination of the structure of organic molecules, including UV/vis, IR, NMR, and MS.",
    prereqs: [
    ["CHEM 2520"],
    ["CHEM 253"],
    ["CHEM 2620"],
    ["CHEM 253"],
    ["CHEM 2920H"],
    ["CHEM 253H"],
    ["CHEM 632"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 5430",
    dept: "CHEM",
    number: "5430",
    name: "Carbohydrate Chemistry",
    credits: 3,
    terms: [],
    sentence: " Introduction to synthesis, conformation, and biological importance of carbohydrates and oligosaccharides, including nomenclature, protecting groups, glycoside synthesis, biosynthesis and biology, and NMR methods.",
    prereqs: [
    ["CHEM 2520"],
    ["CHEM 253"],
    ["CHEM 2620"],
    ["CHEM 2920H"],
    ["CHEM 253H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 5440",
    dept: "CHEM",
    number: "5440",
    name: "Introduction to Computational Chemistry",
    credits: 3,
    terms: [],
    sentence: " Introduction to fundamental concepts in computational chemistry, including molecular modeling, molecular dynamics, and semi-empirical and ab initio calculations.",
    prereqs: [
    ["CHEM 2520"],
    ["CHEM 253"],
    ["CHEM 2620"],
    ["CHEM 253"],
    ["CHEM 2920H"],
    ["CHEM 253H"],
    ["CHEM 644"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 5450",
    dept: "CHEM",
    number: "5450",
    name: "Practical NMR Spectroscopy",
    credits: 1,
    terms: [],
    sentence: " This course focuses on the application of NMR Spectroscopy to the structure determination and dynamics of primarily synthetic organic and organometallic products. The practical aspects of acquiring optimized, high-quality data are still beneficial for analysis of these spectra and will be presented as lectures and demonstrations.",
    prereqs: [
    ["CHEM 5420"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "CHEM 5520",
    dept: "CHEM",
    number: "5520",
    name: "Nanochemistry",
    credits: 3,
    terms: [],
    sentence: " Introduction to fundamental concepts of nanoscience, exploring strategies for complex assemblies of molecules and developing computational techniques for the investigation of nanotech structures.",
    prereqs: [
    ["CHEM 1220"],
    ["CHEM 1620"],
    ["CHEM 1920H"],
    ["CHEM 203H"],
    ["CHEM 611"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 103",
    dept: "Physics",
    number: "103",
    name: "The World of Energy I",
    credits: 5,
    terms: [],
    sentence: " An examination of the concept of energy with its personal and global impact using the hands-on discovery mode. Intended for non-science majors. GEC physical science course.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 104",
    dept: "Physics",
    number: "104",
    name: "The World of Energy II",
    credits: 5,
    terms: [],
    sentence: " A continuation of Physics 103.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 106",
    dept: "Physics",
    number: "106",
    name: "Physics by Inquiry: Properties of Matter",
    credits: 5,
    terms: [],
    sentence: " Properties of matter and experimental physics for undergraduates contemplating a teaching career. Intended for non-science majors, especially those interested in education.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 107",
    dept: "Physics",
    number: "107",
    name: "Physics by Inquiry: Electric Circuits",
    credits: 5,
    terms: [],
    sentence: " Electric phenomena, electric circuits, and experimental physics for undergraduates contemplating a teaching career.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 108",
    dept: "Physics",
    number: "108",
    name: "Physics by Inquiry: Concepts of Light with Applications to Optics",
    credits: 5,
    terms: [],
    sentence: " Principles of light and optics with applications to real-world phenomena such as astronomy, appropriate for undergraduates contemplating a teaching career.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 109",
    dept: "Physics",
    number: "109",
    name: "Preparation for Physics",
    credits: 4,
    terms: [],
    sentence: " Introduction to elementary concepts of mechanics with emphasis on correction of misconceptions and elementary mathematical methods in physics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 110",
    dept: "Physics",
    number: "110",
    name: "The Physics of Sports",
    credits: 5,
    terms: ["Sp"],
    sentence: " Examines the physics of motion set in the context of sports.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 111",
    dept: "Physics",
    number: "111",
    name: "General Physics: Mechanics and Heat",
    credits: 5,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " General Physics: Mechanics and Heat.",
    prereqs: [
    ["Physics 150"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 112",
    dept: "Physics",
    number: "112",
    name: "General Physics: Electricity",
    credits: 5,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " General Physics: Electricity, Magnetism, and Light.",
    prereqs: [
    ["Physics 111"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 113",
    dept: "Physics",
    number: "113",
    name: "General Physics: Waves and Modern Physics",
    credits: 5,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " General Physics: Modern Physics.",
    prereqs: [
    ["Physics 112"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 131",
    dept: "Physics",
    number: "131",
    name: "Mechanics",
    credits: 5,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Major concepts of physics from a contemporary point of view; for students in Physical Sciences, Mathematics, or Engineering.",
    prereqs: [
    ["Physics 151"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 131H",
    dept: "Physics",
    number: "131H",
    name: "Honors Physics: Particles and Motion",
    credits: 5,
    terms: [],
    sentence: " Major concepts of physics from a contemporary point of view; challenging, flexible format; includes honors lab; for students strong in physical sciences, mathematics, or engineering.",
    prereqs: [
    ["Physics 151"],
    ["Physics 152"],
    ["Physics 161"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 132",
    dept: "Physics",
    number: "132",
    name: "Electricity and Magnetism",
    credits: 5,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Continuation of 131. 132H (honors) may be available.",
    prereqs: [
    ["Physics 131"],
    ["Physics 152"],
    ["Physics 153"],
    ["Physics 162"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 132H",
    dept: "Physics",
    number: "132H",
    name: "Honors Physics: Electricity and Magnetism",
    credits: 5,
    terms: [],
    sentence: " Continuation of 131H.",
    prereqs: [
    ["Physics 131H"],
    ["Physics 152"],
    ["Physics 153"],
    ["Physics 162"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 133",
    dept: "Physics",
    number: "133",
    name: "Waves",
    credits: 5,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Continuation of 132. 133H (honors) may be available.",
    prereqs: [
    ["Physics 132"],
    ["Physics 153"],
    ["Physics 162"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 133H",
    dept: "Physics",
    number: "133H",
    name: "Honors Physics: Thermal Physics, Waves, and Quantum Physics",
    credits: 5,
    terms: [],
    sentence: " Continuation of 132H.",
    prereqs: [
    ["Physics 132H"],
    ["Physics 153"],
    ["Physics 162"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 261",
    dept: "Physics",
    number: "261",
    name: "Dynamics of Particles and Waves I",
    credits: 4,
    terms: [],
    sentence: " Vectors and kinematics; foundations of Newtonian mechanics; momentum, work, and energy; conservative and nonconservative forces; potentials; angular momentum; rotation about a fixed axis.",
    prereqs: [],
    concur: [
    ["Physics 132"],
    ["Physics 525"]
  ],
    notes: ""
  },
  {
    id: "Physics 262",
    dept: "Physics",
    number: "262",
    name: "Dynamics of Particles and Waves II",
    credits: 4,
    terms: [],
    sentence: " Rigid body motion; noninertial systems and fictitious forces; central force motion; the special theory of relativity; relativistic kinematics; relativistic momentum and energy.",
    prereqs: [
    ["Physics 261"],
    ["Physics 133"],
    ["Physics 254"],
    ["Physics 263"],
    ["Physics 261"],
    ["Physics 525"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 263",
    dept: "Physics",
    number: "263",
    name: "Dynamics of Particles and Waves III",
    credits: 4,
    terms: [],
    sentence: " Introduction to quantum systems; photons; the Bohr atom; matter waves.",
    prereqs: [
    ["Physics 262"],
    ["Physics 254"],
    ["Physics 263"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 294",
    dept: "Physics",
    number: "294",
    name: "Group Studies",
    credits: 1,
    terms: [],
    sentence: " Designed to permit groups of students the opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 295",
    dept: "Physics",
    number: "295",
    name: "Undergraduate Seminar",
    credits: 1,
    terms: [],
    sentence: " Introduction to departmental research programs and to selected topics of interest in contemporary physics.",
    prereqs: [
    ["Physics 131"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 367",
    dept: "Physics",
    number: "367",
    name: "Uses of Science in Society",
    credits: 5,
    terms: [],
    sentence: " Energy, environment, and the arms race are examined using the methods of science; focuses on interaction of science and technology; and social and ethical implications of choices.",
    prereqs: [
    ["Physics 100"],
    ["Physics 110"],
    ["Physics 111"],
    ["Physics 180"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 416",
    dept: "Physics",
    number: "416",
    name: "Methods of Experimental Physics",
    credits: 4,
    terms: [],
    sentence: " Introduction to the experimental techniques of physics and the statistical analysis of data, through lectures and a variety of experiments.",
    prereqs: [
    ["Physics 131"],
    ["Physics 132"],
    ["Physics 133"],
    ["Physics 202"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 455H",
    dept: "Physics",
    number: "455H",
    name: "Honors Holography I",
    credits: 5,
    terms: [],
    sentence: " Visual and Performing Arts, Honors Course.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 517",
    dept: "Physics",
    number: "517",
    name: "Introductory Electronics for Physicists",
    credits: 4,
    terms: [],
    sentence: " Intermediate level introduction to electronic circuits, devices, and instrumentation with emphasis on laboratory experience.",
    prereqs: [
    ["Physics 133"],
    ["Physics 617"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 555",
    dept: "Physics",
    number: "555",
    name: "Fields and Waves I",
    credits: 4,
    terms: [],
    sentence: " Introduction to the description of electrostatic fields; dielectrics; boundary-value problems.",
    prereqs: [
    ["Physics 133"],
    ["Physics 416"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 570",
    dept: "Physics",
    number: "570",
    name: "Modern Optics",
    credits: 4,
    terms: [],
    sentence: " This course introduces students to the fundamentals of modern optics. Topics will include Maxwell's equations, reflection & refraction, interference & diffraction, lasers and optical imaging.",
    prereqs: [
    ["Physics 261"],
    ["Physics 153"],
    ["Physics 716"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 593",
    dept: "Physics",
    number: "593",
    name: "Individual Studies",
    credits: 2,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Independent reading, study, or laboratory work at an intermediate level.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 594",
    dept: "Physics",
    number: "594",
    name: "Group Studies",
    credits: 1,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Group studies of special topics not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 596",
    dept: "Physics",
    number: "596",
    name: "Senior Seminar: Writing and Speaking about Physics and Astronomy",
    credits: 3,
    terms: [],
    sentence: " Seminar on selected topics in physics and astronomy; training in written and oral presentations; third writing course.",
    prereqs: [
    ["Physics 262"],
    ["Physics 255"],
    ["Physics 415"],
    ["Physics 595"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 616",
    dept: "Physics",
    number: "616",
    name: "Advanced Physics Laboratory",
    credits: 4,
    terms: [],
    sentence: " Experiments selected from all areas of physics; independent work emphasized.",
    prereqs: [
    ["Physics 263"],
    ["Physics 555"],
    ["Physics 416"],
    ["Physics 245"],
    ["Physics 631"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 621",
    dept: "Physics",
    number: "621",
    name: "Statistical Physics I",
    credits: 4,
    terms: [],
    sentence: " Thermodynamics and statistical mechanics; applications to noninteracting classical and quantum systems.",
    prereqs: [
    ["Physics 263"],
    ["Physics 416"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 622",
    dept: "Physics",
    number: "622",
    name: "Statistical Physics II",
    credits: 4,
    terms: [],
    sentence: " Interacting systems, special states of matter, critical phenomena and phase transitions.",
    prereqs: [
    ["Physics 621"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 631",
    dept: "Physics",
    number: "631",
    name: "Introductory Quantum Mechanics I",
    credits: 4,
    terms: [],
    sentence: " Introduction to quantum mechanics, including its historical background, the Schrodinger equation, solutions of one-dimensional scattering and bound state problems.",
    prereqs: [
    ["Physics 133"],
    ["Physics 416"],
    ["Physics 255"],
    ["Physics 415"],
    ["Physics 568"],
    ["Physics 571"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 631H",
    dept: "Physics",
    number: "631H",
    name: "Honors Quantum Mechanics I",
    credits: 4,
    terms: [],
    sentence: " Introduction to quantum mechanics, including its historical background, the Schrodinger equation, solutions of one-dimensional scattering and bound state problems.",
    prereqs: [
    ["Physics 263"],
    ["Physics 416"],
    ["Physics 255"],
    ["Physics 415"],
    ["Physics 568"],
    ["Physics 571"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 632",
    dept: "Physics",
    number: "632",
    name: "Introductory Quantum Mechanics II",
    credits: 4,
    terms: [],
    sentence: " Continuation of 631; the Schrodinger equation in three dimensions, angular momentum, the hydrogen atom, Dirac notation, and time-independent perturbation theory.",
    prereqs: [
    ["Physics 631"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 632H",
    dept: "Physics",
    number: "632H",
    name: "Honors Quantum Mechanics II",
    credits: 4,
    terms: [],
    sentence: " The Schrodinger equation in three dimensions, angular momentum, the hydrogen atom, Dirac notation, and time-independent perturbation theory.",
    prereqs: [
    ["Physics 631H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 633",
    dept: "Physics",
    number: "633",
    name: "Introductory Quantum Mechanics III",
    credits: 4,
    terms: [],
    sentence: " Continuation of 632; time-dependent perturbation theory, scattering theory and the Born approximation, multi-electron atoms, and selected further applications.",
    prereqs: [
    ["Physics 632"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 633H",
    dept: "Physics",
    number: "633H",
    name: "Honors Quantum Mechanics III",
    credits: 4,
    terms: [],
    sentence: " Time-dependent perturbation theory, scattering theory and the Born approximation, multi-electron atoms, and selected further applications.",
    prereqs: [
    ["Physics 632H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 656",
    dept: "Physics",
    number: "656",
    name: "Fields and Waves II",
    credits: 4,
    terms: [],
    sentence: " Continuation of 555; magnetic fields of steady currents; induction; Maxwell's equations; plane waves; special relativity.",
    prereqs: [
    ["Physics 555"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 657",
    dept: "Physics",
    number: "657",
    name: "Fields and Waves III",
    credits: 4,
    terms: [],
    sentence: " Continuation of 656; plane waves in matter; physical optics; coherence, interference, diffraction, and dispersion.",
    prereqs: [
    ["Physics 656"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 664",
    dept: "Physics",
    number: "664",
    name: "Theoretical Mechanics",
    credits: 4,
    terms: [],
    sentence: " Development of Lagrangian mechanics, inertia and stress tensors, rigid body rotations and introduction to the mechanics of continuous media.",
    prereqs: [
    ["Physics 262"],
    ["Physics 255"],
    ["Physics 513"],
    ["Physics 551"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 681",
    dept: "Physics",
    number: "681",
    name: "Principles of Stellar Evolution and Nucleosynthesis",
    credits: 5,
    terms: [],
    sentence: " Experimental and theoretical aspects of areas of current interest in physics: Elementary Particle Physics. (Note: department page text appears to reuse the \"Topics\" course description template for this listing.)",
    prereqs: [
    ["Physics 633"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 682",
    dept: "Physics",
    number: "682",
    name: "Introduction to Cosmology",
    credits: 5,
    terms: [],
    sentence: " Structure and evolution of the Universe.",
    prereqs: [
    ["Physics 255"],
    ["Physics 415"],
    ["Physics 263"],
    ["Physics 621"],
    ["Physics 642"],
    ["Physics 682"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 693",
    dept: "Physics",
    number: "693",
    name: "Individual Studies",
    credits: 0,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Designed to give a properly qualified student opportunity for independent reading, study, or laboratory work in a specialized field of interest.",
    prereqs: [
    ["Physics 693A"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 699",
    dept: "Physics",
    number: "699",
    name: "Undergraduate Research in Physics",
    credits: 1,
    terms: ["Su", "Au", "Wi", "Sp"],
    sentence: " Undergraduate research or creative activities in various topics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 730",
    dept: "Physics",
    number: "730",
    name: "Methods of Theoretical Physics I",
    credits: 4,
    terms: [],
    sentence: " Sturm-Liouville theory of orthogonal functions; boundary value problems in Cartesian, cylindrical, spherical coordinates; Fourier series, Legendre polynomials, spherical harmonics, and Bessel functions.",
    prereqs: [
    ["Physics 601"],
    ["Physics 701"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 783H",
    dept: "Physics",
    number: "783H",
    name: "Honors Research",
    credits: 3,
    terms: [],
    sentence: " A program of research for each student which includes individual conferences and which culminates in an honors thesis or oral defense.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Physics 795",
    dept: "Physics",
    number: "795",
    name: "Special Topics Seminar",
    credits: 1,
    terms: [],
    sentence: " A survey of current research problems in physics.",
    prereqs: [],
    concur: [
    ["Physics 631"]
  ],
    notes: ""
  },
  {
    id: "ASTRON 1100",
    dept: "ASTRON",
    number: "1100",
    name: "Astronomy IRL: An Influencer's Guide to Science",
    credits: 4,
    terms: [],
    sentence: " Science shapes our lives, but with so much \"scientific\" info out there, how do we know what to trust? This course sharpens your ability to evaluate scientific information, using astronomy as a concrete way to develop your understanding of the methods and nature of science. To ensure you can apply this knowledge beyond astronomy, we'll put you to the test in real-world social media contexts.",
    prereqs: [
    ["ASTRON 1075"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 1101",
    dept: "ASTRON",
    number: "1101",
    name: "From Planets to the Cosmos (With Lab)",
    credits: 4,
    terms: [],
    sentence: " Overview of the Copernican revolution, the discovery of the nature of our solar system, light, gravity, and planets around other stars; the nature and evolution of stars and origin of the chemical elements; the history of galaxies and the expanding universe. Weekly laboratory. Not recommended for students who plan to major in astronomy or physics.",
    prereqs: [
    ["ASTRON 1050"],
    ["ASTRON 075"],
    ["ASTRON 102"],
    ["ASTRON 1140"],
    ["ASTRON 1144"],
    ["ASTRON 1161H"],
    ["ASTRON 1162H"],
    ["ASTRON 2161H"],
    ["ASTRON 2162H"],
    ["ASTRON 2291"],
    ["ASTRON 291"],
    ["ASTRON 2292"],
    ["ASTRON 292"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 1221",
    dept: "ASTRON",
    number: "1221",
    name: "Astronomy Data Analysis",
    credits: 3,
    terms: [],
    sentence: " Overview of data analysis in astronomy. The course will combine select topics in modern astronomy with contemporary data analysis methods implemented in the Python programming language, illustrating how astronomical data lead to scientific conclusions. Intended for students with interest in astronomy and analysis of large data sets; prior astronomy experience not required.",
    prereqs: [],
    concur: [
    ["ASTRON 1141"],
    ["ASTRON 1151"],
    ["ASTRON 1161"]
  ],
    notes: ""
  },
  {
    id: "ASTRON 2020",
    dept: "ASTRON",
    number: "2020",
    name: "The Night Sky",
    credits: 3,
    terms: [],
    sentence: " This course uses the planetarium and observations of the sky to understand the motion of the Sun, Moon, and planets, and how humans have interpreted them. It considers the large number of foreign worlds that have been discovered orbiting the Sun and other stars, and visualizes their skies. It reflects on how the night sky affects human cultures, and how it might affect cultures on other worlds.",
    prereqs: [
    ["ASTRON 1140"],
    ["ASTRON 2140"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2140",
    dept: "ASTRON",
    number: "2140",
    name: "Planets and The Solar System",
    credits: 3,
    terms: [],
    sentence: " We study the formation, current properties, and evolution of the Sun, planets and minor bodies of the Solar System; how they compare with planetary systems around other stars; and how people, over millennia, inferred that the Earth was not at the center of the Universe.",
    prereqs: [
    ["ASTRON 1050"],
    ["ASTRON 1140"],
    ["ASTRON 1161"],
    ["ASTRON 1161H"],
    ["ASTRON 2291"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2141",
    dept: "ASTRON",
    number: "2141",
    name: "Life in the Universe",
    credits: 3,
    terms: [],
    sentence: " We will learn about scientists' ongoing quest for answers to some of the most fundamental human questions: How did life originate on Earth? Is there life on other worlds? Are we alone in the universe? What is the long-term future of life in the universe?",
    prereqs: [
    ["ASTRON 1050"],
    ["ASTRON 1141"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2142",
    dept: "ASTRON",
    number: "2142",
    name: "Black Holes",
    credits: 3,
    terms: [],
    sentence: " This course will tell the story of black holes: how they were conceived as theoretical ideas, how they might form from dying stars, how they were discovered, what roles they play in cosmic history, how they distort space and time, how they produce tiny but detectable gravitational wave signals, and some of the remaining mysteries they present to contemporary physics.",
    prereqs: [
    ["ASTRON 1050"],
    ["ASTRON 1142"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2143",
    dept: "ASTRON",
    number: "2143",
    name: "Cosmology: History of the Universe",
    credits: 3,
    terms: [],
    sentence: " Description of the history of the universe from Big Bang to present; how observations led to discovery of this history.",
    prereqs: [
    ["ASTRON 1050"],
    ["ASTRON 1143"],
    ["ASTRON 1144"],
    ["ASTRON 2292"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2193",
    dept: "ASTRON",
    number: "2193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: " Independent library or laboratory work on a special problem or topic in observational or theoretical astronomy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2194",
    dept: "ASTRON",
    number: "2194",
    name: "Group Studies",
    credits: 1,
    terms: [],
    sentence: " Special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2291",
    dept: "ASTRON",
    number: "2291",
    name: "Basic Astrophysics and Planetary Astronomy",
    credits: 3,
    terms: [],
    sentence: " Motions and physical nature of objects in the solar system; electromagnetic radiation, telescopes, and astronomical detectors.",
    prereqs: [
    ["ASTRON 1251"],
    ["ASTRON 133"],
    ["ASTRON 291"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2292",
    dept: "ASTRON",
    number: "2292",
    name: "Stellar, Galactic, and Extragalactic Astronomy and Astrophysics",
    credits: 3,
    terms: [],
    sentence: " Observational and physical properties of the sun and stars; stellar structure and evolution; interstellar medium; galaxies and cosmology.",
    prereqs: [
    ["ASTRON 2291"],
    ["ASTRON 291"],
    ["ASTRON 292"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 2895",
    dept: "ASTRON",
    number: "2895",
    name: "Topics in Astrophysics",
    credits: 1,
    terms: [],
    sentence: " Prospective astronomy majors will meet weekly with different astronomy faculty to learn about current research topics, facilities, and opportunities available in the undergraduate astronomy program.",
    prereqs: [
    ["ASTRON 295"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 3350",
    dept: "ASTRON",
    number: "3350",
    name: "Methods of Astronomical Observation and Data Analysis",
    credits: 4,
    terms: [],
    sentence: " Overview of observational methods and quantitative analysis in astronomy with applications to the large datasets produced by modern astronomy surveys. Students will apply commonly used methods to reproduce major astronomical results in a collaborative setting. Prepares students for advanced undergraduate research in astronomy and introduces broadly-applicable data analysis tools.",
    prereqs: [
    ["ASTRON 2292"],
    ["ASTRON 1152"],
    ["ASTRON 1172"],
    ["ASTRON 1222"],
    ["ASTRON 1223"],
    ["ASTRON 1224"],
    ["ASTRON 1221"],
    ["ASTRON 1221"],
    ["ASTRON 1281"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 3810",
    dept: "ASTRON",
    number: "3810",
    name: "Order of Magnitude Astronomy",
    credits: 1,
    terms: [],
    sentence: " This course focuses on developing the skills needed to approach problems at an order-of-magnitude level. It provides students with mathematical techniques and critical thinking skills that can be used to create approximate solutions to problems that may at first seem impossible to solve.",
    prereqs: [
    ["ASTRON 1251"],
    ["ASTRON 1261"],
    ["ASTRON 1271"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4193",
    dept: "ASTRON",
    number: "4193",
    name: "Individual Studies - Writing Seminar",
    credits: 1,
    terms: [],
    sentence: " Independent library or laboratory work on a special problem or topic in observational or theoretical astronomy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4193",
    dept: "ASTRON",
    number: "4193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: " Independent library or laboratory work on a special problem or topic in observational or theoretical astronomy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4810",
    dept: "ASTRON",
    number: "4810",
    name: "Advanced Order of Magnitude",
    credits: 1,
    terms: [],
    sentence: " This course focuses on developing the skills needed to approach problems at an order-of-magnitude level. The methods learned are often sufficient to draw conclusions about phenomena in our universe and also in our daily lives. Expands on the skills developed in Astron 3810 and builds intuition on when to apply various skills.",
    prereqs: [
    ["ASTRON 3810"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4998",
    dept: "ASTRON",
    number: "4998",
    name: "Non-Thesis Research",
    credits: 1,
    terms: [],
    sentence: " Directed undergraduate research (non-thesis).",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4998H",
    dept: "ASTRON",
    number: "4998H",
    name: "Honors Non-Thesis Research",
    credits: 1,
    terms: [],
    sentence: " Directed undergraduate research (non-thesis).",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4999",
    dept: "ASTRON",
    number: "4999",
    name: "Thesis Research",
    credits: 1,
    terms: [],
    sentence: " Directed undergraduate research for thesis.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 4999H",
    dept: "ASTRON",
    number: "4999H",
    name: "Honors Thesis Research",
    credits: 1,
    terms: [],
    sentence: " Directed undergraduate research (thesis).",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 5205",
    dept: "ASTRON",
    number: "5205",
    name: "Planetary Science",
    credits: 3,
    terms: [],
    sentence: " A multidisciplinary approach to planetary science, integrating modern methods with the Earth and Astrophysical Sciences. Team-taught with faculty in Earth Sciences.",
    prereqs: [
    ["ASTRON 1152"],
    ["ASTRON 5205"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 5550",
    dept: "ASTRON",
    number: "5550",
    name: "Advanced Astronomical Data Analysis",
    credits: 3,
    terms: [],
    sentence: " Overview of advanced astronomy data analysis methods with applications to the large datasets produced by modern surveys. Students will learn to apply these methods to reproduce several major astronomical results in collaborative research projects.",
    prereqs: [
    ["ASTRON 3350"],
    ["ASTRON 3700"],
    ["ASTRON 2568"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 5681",
    dept: "ASTRON",
    number: "5681",
    name: "Principles of Stellar Evolution and Nucleosynthesis",
    credits: 3,
    terms: [],
    sentence: " Physics of stellar structure, evolution, and nucleosynthesis.",
    prereqs: [
    ["ASTRON 2174"],
    ["ASTRON 2255"],
    ["ASTRON 255"],
    ["ASTRON 2415"],
    ["ASTRON 415"],
    ["ASTRON 5500"],
    ["ASTRON 631"],
    ["ASTRON 681"],
    ["ASTRON 681"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 5682",
    dept: "ASTRON",
    number: "5682",
    name: "Introduction to Cosmology",
    credits: 3,
    terms: [],
    sentence: " Structure and evolution of the Universe.",
    prereqs: [
    ["ASTRON 2174"],
    ["ASTRON 2255"],
    ["ASTRON 255"],
    ["ASTRON 2415"],
    ["ASTRON 415"],
    ["ASTRON 2301"],
    ["ASTRON 263"],
    ["ASTRON 682"],
    ["ASTRON 682"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ASTRON 5830",
    dept: "ASTRON",
    number: "5830",
    name: "Observed Properties of Astronomical Systems",
    credits: 5,
    terms: [],
    sentence: " Observed properties of planets (including extrasolar planets), the solar system, stars, and both active and quiescent galaxies.",
    prereqs: [
    ["ASTRON 830"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 3313",
    dept: "Psychology",
    number: "3313",
    name: "Introduction to Behavioral Neuroscience",
    credits: 0,
    terms: ["Su", "Au", "Sp"],
    sentence: " Introduction to the structure and function of the nervous system in relation to behavior.",
    prereqs: [
    ["Psychology 1100"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 3513",
    dept: "Psychology",
    number: "3513",
    name: "Introduction to Cognitive Neuroscience",
    credits: 0,
    terms: ["Au", "Sp"],
    sentence: " Examination of the neuroscientific approach to the study of cognition; primary focus on the psychobiology of memory, attention, language, and spatial orientation.",
    prereqs: [
    ["Psychology 1100"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 3000",
    dept: "Neuroscience",
    number: "3000",
    name: "Introduction to Molecular/Cellular Neuroscience",
    credits: 0,
    terms: ["Au", "Sp"],
    sentence: " Introductory course covering organization and function of the nervous system at a level understandable to science and non-science majors.",
    prereqs: [
    ["Neuroscience 1113"],
    ["Neuroscience 3313"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 3050",
    dept: "Neuroscience",
    number: "3050",
    name: "Structure and Function of the Nervous System",
    credits: 0,
    terms: ["Au", "Sp"],
    sentence: " Basic principles of the anatomical and neurophysiological organization of the nervous system.",
    prereqs: [
    ["Neuroscience 1113"],
    ["Neuroscience 3000"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 2220",
    dept: "Psychology",
    number: "2220",
    name: "Introduction to Data Analysis in Psychology",
    credits: 0,
    terms: ["Su", "Au", "Sp"],
    sentence: " Introduction to statistical analysis of psychological data; random samples, graphical and numerical techniques of descriptive statistics, correlation, regression, probability, sampling distribution, and hypothesis testing.",
    prereqs: [
    ["Psychology 1100"],
    ["Psychology 1148"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Statistics 2480",
    dept: "Statistics",
    number: "2480",
    name: "Statistics for Life Sciences",
    credits: 0,
    terms: ["Sp"],
    sentence: " Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, and hypothesis testing.",
    prereqs: [
    ["Statistics 1151"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Statistics 2450",
    dept: "Statistics",
    number: "2450",
    name: "Introduction to Statistical Analysis",
    credits: 0,
    terms: ["Au"],
    sentence: " Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, and hypothesis testing.",
    prereqs: [
    ["Statistics 1151"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 4050H",
    dept: "Neuroscience",
    number: "4050H",
    name: "Neurogenetics",
    credits: 0,
    terms: ["Au"],
    sentence: " This course is about gene discovery in neuroscience. Spans classic mutagenesis and gene mapping studies in simple invertebrate systems to the mapping and identification of brain disease genes in humans. Explores the genetics of neurological, developmental and psychiatric diseases, animal models of these diseases, and unique genetic systems and studies.",
    prereqs: [
    ["Neuroscience 3000"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 4100",
    dept: "Neuroscience",
    number: "4100",
    name: "Basic and Clinical Foundations of Neurological Disease",
    credits: 0,
    terms: ["Au"],
    sentence: " Discusses basic and clinical issues related to a variety of neurological disease.",
    prereqs: [
    ["Neuroscience 3000"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 4305",
    dept: "Psychology",
    number: "4305",
    name: "Introduction to Psychopharmacology",
    credits: 0,
    terms: ["Sp"],
    sentence: " Introduction to the psychology and biology of licit and illicit psychoactive drug use. Formerly Drugs and Behavior (Psych 3305).",
    prereqs: [
    ["Psychology 3313"],
    ["Psychology 3305"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Math 4350",
    dept: "Math",
    number: "4350",
    name: "Quantitative Neuroscience",
    credits: 0,
    terms: ["Sp"],
    sentence: " Introduction to mathematical modeling and computational analysis of neuronal systems, Hodgkin-Huxley model, dynamical systems methods, neuronal networks, models for neurological disease.",
    prereqs: [
    ["Math 1151"],
    ["Math 1152"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 4501",
    dept: "Psychology",
    number: "4501",
    name: "Advanced Behavioral Neuroscience",
    credits: 0,
    terms: ["Sp"],
    sentence: " Advanced discussion of contemporary issues in psychobiology, including: synaptic pharmacology, drugs, and behavior, neurodegenerative diseases and the biological bases of psychopathology.",
    prereqs: [
    ["Psychology 3313"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 4623",
    dept: "Neuroscience",
    number: "4623",
    name: "Biological Clocks & Rhythms",
    credits: 0,
    terms: ["Sp"],
    sentence: " Biological rhythms (daily and seasonal) of animals and humans, how brains produce them, and how they regulate cells, organs and behaviors.",
    prereqs: [
    ["Neuroscience 3313"],
    ["Neuroscience 3000"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biochemistry 4511",
    dept: "Biochemistry",
    number: "4511",
    name: "Introduction to Biological Chemistry",
    credits: 0,
    terms: ["Su", "Au", "Sp"],
    sentence: " An introductory course in biochemistry dealing with the molecular basis of structure and metabolism of plants, animals, and micro-organisms.",
    prereqs: [
    ["Biochemistry 1210"],
    ["Biochemistry 1220"],
    ["Biochemistry 2510"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 4644",
    dept: "Psychology",
    number: "4644",
    name: "Hormones & Behavior",
    credits: 0,
    terms: ["Sp"],
    sentence: " Exploration of the interactions among hormones, brain, and behavior through an integrative approach.",
    prereqs: [
    ["Psychology 3313"],
    ["Psychology 5644"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5600",
    dept: "Psychology",
    number: "5600",
    name: "Psychobiology of Learning & Memory",
    credits: 0,
    terms: ["Au"],
    sentence: " The study of principles which underlie the discovery, fixation, and retention of behavior; emphasis on theoretical formulation of the conditions necessary for learning and remembering.",
    prereqs: [
    ["Psychology 3313"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5602",
    dept: "Psychology",
    number: "5602",
    name: "Behavioral Genetics",
    credits: 0,
    terms: ["Sp"],
    sentence: " Examines the role of genetics in animal (including human) behavior. Highly interdisciplinary, drawing on biology, genetics, epigenetics, ethology, psychology and statistics.",
    prereqs: [
    ["Psychology 3313"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5606",
    dept: "Psychology",
    number: "5606",
    name: "High Level Vision",
    credits: 0,
    terms: ["Sp"],
    sentence: " Visual perception of solid shape, models of object recognition, perception of self-motion and of action.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5608",
    dept: "Psychology",
    number: "5608",
    name: "Introduction to Mathematical Psychology",
    credits: 0,
    terms: ["Au"],
    sentence: " Survey of current topics in mathematical psychology; topics include measurement theory, scaling, utility theory, subjective probability, decision making in uncertain situations, choice theory.",
    prereqs: [
    ["Psychology 3321"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5609",
    dept: "Psychology",
    number: "5609",
    name: "Introduction to Mathematical Models in Experimental Psychology",
    credits: 0,
    terms: ["Au"],
    sentence: " A survey of mathematical models and theories in important areas of experimental psychology; models of perceptual and cognitive processes, memory, and learning.",
    prereqs: [
    ["Psychology 5608"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5613H",
    dept: "Psychology",
    number: "5613H",
    name: "Biological Psychiatry",
    credits: 0,
    terms: ["Sp"],
    sentence: " Provides a contemporary overview of the biological bases of several significant psychopathologies, including: mood disorders, schizophrenia, and PTSD/dissociative identity disorders.",
    prereqs: [
    ["Psychology 4501"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5614",
    dept: "Psychology",
    number: "5614",
    name: "Cognitive Neuroscience",
    credits: 0,
    terms: ["Au"],
    sentence: " Neuronal mechanisms of information processing.",
    prereqs: [
    ["Psychology 3313"],
    ["Psychology 3513"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5618",
    dept: "Psychology",
    number: "5618",
    name: "Introduction to Computational Cognitive Neuroscience",
    credits: 0,
    terms: [],
    sentence: " Focuses on how the brain generates cognition using neural network models to simulate perception, memory, and other mental processes.",
    prereqs: [
    ["Psychology 5612"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 4640",
    dept: "Neuroscience",
    number: "4640",
    name: "Neuronal Signal Transduction",
    credits: 0,
    terms: ["Au"],
    sentence: " Focus on the fundamental intracellular signaling events and transcriptional control mechanisms that shape CNS physiology and pathophysiology.",
    prereqs: [
    ["Neuroscience 3000"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 5790H",
    dept: "Neuroscience",
    number: "5790H",
    name: "Developmental Neuroscience",
    credits: 0,
    terms: ["Sp"],
    sentence: " This class takes a molecular and cellular approach to understanding how the nervous system develops. Topics include neuronal cell fate specification, cellular patterning, axon guidance, synapse development and circuit formation.",
    prereqs: [
    ["Neuroscience 3000"],
    ["Neuroscience 3050"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Psychology 5898",
    dept: "Psychology",
    number: "5898",
    name: "Seminar in Behavioral Neuroscience",
    credits: 0,
    terms: ["Sp"],
    sentence: " Overview of contemporary research topics in the broad interdisciplinary field of Behavioral Neuroscience, encompassing behavioral, cognitive, developmental, and systems neuroscience, with research-based lectures by faculty from several departments and colleges.",
    prereqs: [
    ["Psychology 4501"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Neuroscience 4850",
    dept: "Neuroscience",
    number: "4850",
    name: "Contemporary Topics in Neuroscience",
    credits: 0,
    terms: [],
    sentence: " A merging of pop culture and Neuroscience, this course surveys recent events and literature in the field of Neuroscience from learning and memory, neurodevelopmental disorders, the microbiome and aging.",
    prereqs: [
    ["Neuroscience 3313"],
    ["Neuroscience 3000"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1101",
    dept: "Biology",
    number: "1101",
    name: "Introductory Biology",
    credits: 4,
    terms: [],
    sentence: " Basic principles of biology; topics include the nature of science, organismal diversity, evolution, ecology, genetics, reproduction, and cellular structure and function. Not intended for students majoring in one of the biological sciences. Lecture, Lab.",
    prereqs: [
    ["Biology 101"],
    ["Biology 1113"],
    ["Biology 1113H"],
    ["Biology 1101"],
    ["Biology 101"],
    ["Biology 1101"],
    ["Biology 101"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1102",
    dept: "Biology",
    number: "1102",
    name: "Human Biology",
    credits: 4,
    terms: [],
    sentence: " Exploration of human biology; topics include structure and physiological function, reproduction and development, genetics and disease, ecology, and evolution. Not intended for students majoring in one of the biological sciences. Lecture, Recitation.",
    prereqs: [
    ["Biology 102"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1110",
    dept: "Biology",
    number: "1110",
    name: "Biology for the Health Sciences",
    credits: 4,
    terms: [],
    sentence: " A survey of biological topics including evolution; structure and function; information flow, exchange and storage; pathways and transformations of energy and matter; and systems intended as preparation for Pre-Nursing and Pre-HRS students. Not intended for students on a Pre-Medicine or related track, or for students intending to major in biology or related areas.",
    prereqs: [
    ["Biology 1101"],
    ["Biology 101"],
    ["Biology 1102"],
    ["Biology 102"],
    ["Biology 1113"],
    ["Biology 1114"],
    ["Biology 114"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1111",
    dept: "Biology",
    number: "1111",
    name: "Biological Foundations 1: Cells and Chemistry of Life",
    credits: 3,
    terms: [],
    sentence: " An introductory exploration of life's chemical and cellular foundations, including macromolecular and cellular structure and function, energetics, pathways, the nature of scientific endeavors, and metacognitive strategies. Includes a required weekly Peer Led Team Learning Workshop. Intended for students majoring in STEM fields.",
    prereqs: [
    ["Biology 1075"],
    ["Biology 1120"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1112",
    dept: "Biology",
    number: "1112",
    name: "Biological Foundations 2: Molecular Machinery & Genetics",
    credits: 4,
    terms: [],
    sentence: " An introductory exploration of life's cellular and genetic mechanisms, molecular biology, and metacognitive strategies. Includes a required weekly Peer Led Team Learning Workshop. Intended for students majoring in STEM fields.",
    prereqs: [
    ["Biology 1111"],
    ["Biology 1121"],
    ["Biology 1148"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1113H",
    dept: "Biology",
    number: "1113H",
    name: "Biological Sciences: Energy Transfer and Development (Honors)",
    credits: 4,
    terms: [],
    sentence: " Exploration of biology and biological principles; evolution and the origin of life, cellular structure and function, bioenergetics, and genetics. A broad introduction to biology comprises both Biology 1113H and 1114H. Lecture, Lab.",
    prereqs: [
    ["Biology 115"],
    ["Biology 115H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1114H",
    dept: "Biology",
    number: "1114H",
    name: "Biological Sciences: Form, Function, Diversity, and Ecology (Honors)",
    credits: 4,
    terms: [],
    sentence: " Exploration of biology and biological principles; evolution and speciation, diversity in structure, function, behavior, and ecology among prokaryotes and eukaryotes. A broad introduction to biology comprises both Biology 1113H and 1114H. Lecture, Lab.",
    prereqs: [
    ["Biology 116"],
    ["Biology 116H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 1870",
    dept: "Biology",
    number: "1870",
    name: "Biology of Sex",
    credits: 2,
    terms: [],
    sentence: " A foundational exploration of the evolution and maintenance of sexual reproduction across species, including sexual selection, mating systems, and reproductive strategies.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 2105",
    dept: "Biology",
    number: "2105",
    name: "Human Biology in Cinema",
    credits: 3,
    terms: [],
    sentence: " Human Biology in Cinema explores biological insights related to human health and well-being through the lens of mainstream films. High School Biology recommended.",
    prereqs: [
    ["Biology 1105"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 2200",
    dept: "Biology",
    number: "2200",
    name: "Genome Biology",
    credits: 1,
    terms: [],
    sentence: " DNA sequencing and analysis of bacteriophage genomes. Special emphasis on mycobacteriophage as part of the Howard Hughes Medical Institute National Genomics Research Initiative. Lab.",
    prereqs: [
    ["Biology 1113"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 2360",
    dept: "Biology",
    number: "2360",
    name: "Zombie Biology",
    credits: 3,
    terms: [],
    sentence: " A novel approach to learning biology using zombie media as a tool for critical analysis, with heavy emphasis on human biology, body systems, and infectious disease, evaluating clips and excerpts from zombie films, TV shows, and novels for biological accuracy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 2750",
    dept: "Biology",
    number: "2750",
    name: "Scientific Thought in an Anecdotal World",
    credits: 3,
    terms: [],
    sentence: " Examination of the intersection of modern biological academic environment with the cultural environment, focusing on the sharing of information, identification of validated biological discovery, and comparison with misinformation encountered in our lived environment.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 3050",
    dept: "Biology",
    number: "3050",
    name: "Current Events in Biology",
    credits: 1,
    terms: [],
    sentence: " An exploration of contemporary issues and breakthroughs in biology from diverse biological fields. Students analyze scientific literature and various media sources, discuss ethical and societal implications, and develop critical thinking skills.",
    prereqs: [
    ["Biology 1101"],
    ["Biology 1110"],
    ["Biology 1112"],
    ["Biology 1114"],
    ["Biology 1113"],
    ["Biology 1114"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 3120",
    dept: "Biology",
    number: "3120",
    name: "Biology Research Laboratory Techniques: Genetic Engineering",
    credits: 1,
    terms: [],
    sentence: " Introduces students to modern laboratory techniques for future career opportunities. Students perform experiments involving gene editing and DNA processing and data analysis linked with a focused research question, producing a portfolio through weekly lab sessions.",
    prereqs: [
    ["Biology 1112"],
    ["Biology 1113"],
    ["Biology 1113E"],
    ["Biology 1113H"],
    ["Biology 1114"],
    ["Biology 1114E"],
    ["Biology 1114H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 3401",
    dept: "Biology",
    number: "3401",
    name: "Integrated Biology",
    credits: 4,
    terms: [],
    sentence: " A case studies approach is used to gain a better understanding of biological concepts and principles. This course is designed for biology majors. Lecture, Recitation.",
    prereqs: [
    ["Biology 1113"],
    ["Biology 1114"],
    ["Biology 114"],
    ["Biology 1220"],
    ["Biology 1150"],
    ["Biology 150"],
    ["Biology 401"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 3730",
    dept: "Biology",
    number: "3730",
    name: "Humans vs Germs: An Arms Race between Medicine and Evolution",
    credits: 3,
    terms: [],
    sentence: " An evolutionary analysis of human health through the lens of our coevolution with pathogens and the rise of biotechnology as a tool for manipulating how evolution affects both pathogens and the human condition.",
    prereqs: [
    ["Biology 1101"],
    ["Biology 1110"],
    ["Biology 1112"],
    ["Biology 1113"],
    ["Biology 1113H"],
    ["Biology 1113E"],
    ["Biology 1114"],
    ["Biology 1114H"],
    ["Biology 1114E"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 3870",
    dept: "Biology",
    number: "3870",
    name: "Evolution of Sex",
    credits: 3,
    terms: [],
    sentence: " An exploration of biological evolution of sex across species, including mechanisms of reproduction, sexual selection, and reproductive strategies in various environmental conditions.",
    prereqs: [
    ["Biology 1101"],
    ["Biology 1110"],
    ["Biology 1112"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4150",
    dept: "Biology",
    number: "4150",
    name: "Undergraduate Research Scholars",
    credits: 1,
    terms: [],
    sentence: " This seminar guides undergraduate research scholars (URS) in life sciences towards a path of discovery to enhance their high-impact research participation experience at OSU.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4191",
    dept: "Biology",
    number: "4191",
    name: "Internship in Biology",
    credits: 1,
    terms: [],
    sentence: " A cooperative education or internship assignment conducted under the supervision of a faculty member. Independent Study.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4193",
    dept: "Biology",
    number: "4193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: " A program of individual study in the biological sciences appropriate for the student's needs. Independent Study.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4194",
    dept: "Biology",
    number: "4194",
    name: "Group Studies",
    credits: 2,
    terms: [],
    sentence: " Group studies of topics not otherwise offered in Biology. Lecture.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4210",
    dept: "Biology",
    number: "4210",
    name: "Undergraduate Research in Biology Education",
    credits: 3,
    terms: [],
    sentence: " A course-based undergraduate research experience for students to gain valuable skills as both researchers and lifelong learners, focusing on discipline-based (educational) and human subjects research around biology education.",
    prereqs: [
    ["Biology 1113"],
    ["Biology 1114"],
    ["Biology 3501"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4797",
    dept: "Biology",
    number: "4797",
    name: "Study at a Foreign Institution",
    credits: 1,
    terms: [],
    sentence: " An opportunity for students to study at a foreign institution and receive Ohio State credit for that work. Independent Study.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4798",
    dept: "Biology",
    number: "4798",
    name: "Biological Roots in England",
    credits: 3,
    terms: [],
    sentence: " A short-term study abroad course examining the history of biology in England. Lecture.",
    prereqs: [
    ["Biology 500"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4901",
    dept: "Biology",
    number: "4901",
    name: "Biological Capstone",
    credits: 2,
    terms: [],
    sentence: " A topical case study approach to integrating and synthesizing content across the life sciences.",
    prereqs: [
    ["Biology 3501"],
    ["Biology 3401"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4998",
    dept: "Biology",
    number: "4998",
    name: "Research",
    credits: 1,
    terms: [],
    sentence: " Undergraduate research in biology. Independent Study.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 4999H",
    dept: "Biology",
    number: "4999H",
    name: "Honors Thesis Research",
    credits: 1,
    terms: [],
    sentence: " A program of individual research in the biological sciences appropriate for the student's needs, culminating in an honors thesis and oral examination. Independent Study.",
    prereqs: [
    ["Biology 1113"],
    ["Biology 1114"],
    ["Biology 114"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "Biology 5001",
    dept: "Biology",
    number: "5001",
    name: "Topics in Biology Teaching",
    credits: 1,
    terms: [],
    sentence: " Students actively participate in workshops and other activities, including the development of new instructional materials and SOTL projects, that enhance their preparedness for college teaching.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 2200",
    dept: "AEROENG",
    number: "2200",
    name: "Introduction to Aerospace Engineering I",
    credits: 4,
    terms: [],
    sentence: " An introduction to fundamental concepts leading to aircraft design, with an emphasis on aerodynamics and aircraft performance.",
    prereqs: [],
    concur: [
    ["AEROENG 2173"],
    ["AEROENG 2153"],
    ["AEROENG 2162"],
    ["AEROENG 1250"],
    ["AEROENG 1210"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 2201",
    dept: "AEROENG",
    number: "2201",
    name: "Introduction to Aerospace Engineering II",
    credits: 4,
    terms: [],
    sentence: " An introduction to fundamental concepts leading to aircraft and spacecraft design, with an emphasis on stability and control, propulsion, space launch/reentry, and orbital mechanics.",
    prereqs: [
    ["AEROENG 2200"],
    ["AEROENG 200"],
    ["AEROENG 201"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 2405",
    dept: "AEROENG",
    number: "2405",
    name: "Thermodynamics",
    credits: 3,
    terms: [],
    sentence: " Aerospace engineering thermodynamics: introduction to the concepts of energy and entropy, the First and Second Law analysis of systems and control volumes, and the analysis of power and refrigeration cycles.",
    prereqs: [
    ["AEROENG 2200"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 3520",
    dept: "AEROENG",
    number: "3520",
    name: "Flight Vehicle Dynamics",
    credits: 3,
    terms: [],
    sentence: " Introduction to mathematical modeling of dynamics (equations of motion) for rigid bodies with specific application towards aircraft and spacecraft.",
    prereqs: [],
    concur: [
    ["AEROENG 2030"],
    ["AEROENG 1251"],
    ["AEROENG 1261"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 3521",
    dept: "AEROENG",
    number: "3521",
    name: "Fundamentals of Flight Vehicle Control",
    credits: 3,
    terms: [],
    sentence: " Linear dynamic systems analysis using Transfer function (Laplace Transformation based) methods and State Space (matrix theory based) methods with emphasis on aircraft and spacecraft models.",
    prereqs: [
    ["AEROENG 3520"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 3522",
    dept: "AEROENG",
    number: "3522",
    name: "Fundamental Astronautics",
    credits: 3,
    terms: [],
    sentence: " Presents a conceptual understanding of different types of orbits in space that arise under the laws of gravitational motion, basics of preliminary orbit determination, design of maneuvers among orbits of different types, perturbations in space, preliminary space propulsion and the patched conics approach for interplanetary mission design.",
    prereqs: [
    ["AEROENG 3520"],
    ["AEROENG 2405"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 3542",
    dept: "AEROENG",
    number: "3542",
    name: "Flight Vehicle Structures I",
    credits: 3,
    terms: [],
    sentence: " Introduction to aerospace structures: basic structural components; fundamental elements of linear elastic boundary value problems; composites; bending, torsion and shear of thin-walled sections; laboratory demonstrations.",
    prereqs: [
    ["AEROENG 2200"],
    ["AEROENG 2030"],
    ["AEROENG 2040"],
    ["AEROENG 2010"],
    ["AEROENG 2020"],
    ["AEROENG 2030"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 3543",
    dept: "AEROENG",
    number: "3543",
    name: "Flight Vehicle Structures II",
    credits: 3,
    terms: [],
    sentence: " Energy based analysis: principles of virtual work and minimum potential energy; Rayleigh-Ritz & finite element methods; structural stability; thermo-elasticity; structural dynamics; laboratory demonstrations.",
    prereqs: [
    ["AEROENG 3542"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 3560",
    dept: "AEROENG",
    number: "3560",
    name: "Fundamentals of Aerodynamics",
    credits: 3,
    terms: [],
    sentence: " Fundamentals of viscous and inviscid flow encountered in aircraft aerodynamics.",
    prereqs: [],
    concur: [
    ["AEROENG 2300"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 3570",
    dept: "AEROENG",
    number: "3570",
    name: "One Dimensional Gas Dynamics",
    credits: 3,
    terms: [],
    sentence: " Continuation of viscous flows and boundary layers. One-dimensional gas dynamics including shocks, waves, supersonic, and transonic flow.",
    prereqs: [
    ["AEROENG 3560"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 3580",
    dept: "AEROENG",
    number: "3580",
    name: "Heat Transfer",
    credits: 3,
    terms: [],
    sentence: " Fundamentals of conduction, convection, and radiation.",
    prereqs: [],
    concur: [
    ["AEROENG 2300"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 3581",
    dept: "AEROENG",
    number: "3581",
    name: "Numerical Methods in Aerospace Engineering",
    credits: 3,
    terms: [],
    sentence: " Fundamentals of mathematical and numerical modeling techniques and their applications in solving engineering problems.",
    prereqs: [
    ["AEROENG 2174"],
    ["AEROENG 2568"],
    ["AEROENG 2415"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4193",
    dept: "AEROENG",
    number: "4193",
    name: "Individual Studies in Aerospace Engineering",
    credits: 1,
    terms: [],
    sentence: " Individual studies project for undergraduates.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4510",
    dept: "AEROENG",
    number: "4510",
    name: "Experimental Projects I",
    credits: 2,
    terms: [],
    sentence: " Conceive, plan and design an experiment with a group of students. Emphasis on planning and experiment preparation.",
    prereqs: [
    ["AEROENG 3543"],
    ["AEROENG 3570"],
    ["AEROENG 1201"],
    ["AEROENG 2601"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4511",
    dept: "AEROENG",
    number: "4511",
    name: "Experimental Projects II",
    credits: 3,
    terms: [],
    sentence: " Execute and report on experiment formulated in Projects I. Emphasis on execution and reporting.",
    prereqs: [
    ["AEROENG 4510"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4515",
    dept: "AEROENG",
    number: "4515",
    name: "Design of Atmospheric Flight Vehicles I",
    credits: 3,
    terms: [],
    sentence: " Conceptual and preliminary design, methodology, case studies, introduction of design software, group planning for subsequent design effort: design of atmospheric flight vehicles and components.",
    prereqs: [],
    concur: [
    ["AEROENG 4550"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 4516",
    dept: "AEROENG",
    number: "4516",
    name: "Design of Atmospheric Flight Vehicles II",
    credits: 3,
    terms: [],
    sentence: " Continuation of 4515. Preliminary and detailed design of aerospace vehicle components: design of a vehicle for atmospheric flight.",
    prereqs: [
    ["AEROENG 4515"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4517",
    dept: "AEROENG",
    number: "4517",
    name: "Design of Space Vehicles and Systems I",
    credits: 3,
    terms: [],
    sentence: " Feasibility study of a space mission, elements of mission design and design methodologies of spacecraft subsystems, and preliminary sizing.",
    prereqs: [],
    concur: [
    ["AEROENG 4550"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 4518",
    dept: "AEROENG",
    number: "4518",
    name: "Design of Space Vehicles and Systems II",
    credits: 3,
    terms: [],
    sentence: " Continuation of 4517: preliminary and detailed design of space vehicle components. Design of a space vehicle/system, and mission scenarios simulation via computer software.",
    prereqs: [
    ["AEROENG 4517"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4550",
    dept: "AEROENG",
    number: "4550",
    name: "Principles of Flight Vehicle Propulsion",
    credits: 3,
    terms: [],
    sentence: " Fundamentals of aerospace propulsion, engine cycles and analysis of various air-breathing and rocket engines.",
    prereqs: [
    ["AEROENG 3570"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4998",
    dept: "AEROENG",
    number: "4998",
    name: "Aerospace Engineering Research",
    credits: 1,
    terms: [],
    sentence: " Aerospace Engineering research.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4999",
    dept: "AEROENG",
    number: "4999",
    name: "Aerospace Engineering Thesis Research",
    credits: 1,
    terms: [],
    sentence: " Aerospace Engineering research for thesis.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 4999H",
    dept: "AEROENG",
    number: "4999H",
    name: "Aerospace Engineering Honors Thesis Research",
    credits: 1,
    terms: [],
    sentence: " Aerospace Engineering honors research for thesis.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 5522",
    dept: "AEROENG",
    number: "5522",
    name: "Intermediate Astronautics",
    credits: 3,
    terms: [],
    sentence: " Intermediate orbital mechanics with coverage of advanced solution methods of the two-body problem, the two-body two-point boundary value problem, initial and statistical orbit determination, and foundations of non-Keplerian motion including the three-body problem and orbital perturbations.",
    prereqs: [
    ["AEROENG 3522"],
    ["AEROENG 2030"],
    ["AEROENG 5626"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 5610",
    dept: "AEROENG",
    number: "5610",
    name: "Helicopter Aerodynamics",
    credits: 3,
    terms: [],
    sentence: " Basic treatment of helicopter aerodynamics, performance, and design.",
    prereqs: [
    ["AEROENG 3570"],
    ["AEROENG 530"],
    ["AEROENG 570"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 5615",
    dept: "AEROENG",
    number: "5615",
    name: "Introduction to Computational Aerodynamics",
    credits: 3,
    terms: [],
    sentence: " Introduction to computational methods used in aerodynamics flow problems.",
    prereqs: [
    ["AEROENG 3570"],
    ["AEROENG 3581"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 5616",
    dept: "AEROENG",
    number: "5616",
    name: "Advanced Flight Vehicle Design",
    credits: 3,
    terms: [],
    sentence: " Introduces advanced flight vehicle design techniques applied during the conceptual design phase, including optimum design process, problem formulation, and multivariate graphical optimization techniques for aircraft.",
    prereqs: [],
    concur: [
    ["AEROENG 4550"],
    ["AEROENG 4515"],
    ["AEROENG 4517"]
  ],
    notes: ""
  },
  {
    id: "AEROENG 5621",
    dept: "AEROENG",
    number: "5621",
    name: "Guidance, Navigation, and Control of Aerospace Vehicles",
    credits: 3,
    terms: [],
    sentence: " Spacecraft (satellite) control systems analysis and design.",
    prereqs: [
    ["AEROENG 3521"],
    ["AEROENG 521"],
    ["AEROENG 620"],
    ["AEROENG 621"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "AEROENG 5626",
    dept: "AEROENG",
    number: "5626",
    name: "Orbital Mechanics for Engineers",
    credits: 3,
    terms: [],
    sentence: " Introduction to orbital mechanics with orbit determination techniques, orbital maneuvers and lunar and interplanetary trajectories.",
    prereqs: [
    ["AEROENG 3520"],
    ["AEROENG 520"],
    ["AEROENG 2030"],
    ["AEROENG 430"],
    ["AEROENG 645"],
    ["AEROENG 745"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2010",
    dept: "MECHENG",
    number: "2010",
    name: "Statics",
    credits: 2,
    terms: [],
    sentence: " Vector concepts of static equilibrium for isolated and connected bodies, centroids, inertia, truss, frame and machine analysis, and friction.",
    prereqs: [
    ["MECHENG 1181"],
    ["MECHENG 1187"],
    ["MECHENG 1281H"],
    ["MECHENG 1250"],
    ["MECHENG 1260"],
    ["MECHENG 1151"],
    ["MECHENG 1140"],
    ["MECHENG 1161"],
    ["MECHENG 2010H"],
    ["MECHENG 2040"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2010H",
    dept: "MECHENG",
    number: "2010H",
    name: "Statics (Honors)",
    credits: 2,
    terms: [],
    sentence: " Vector concepts of static equilibrium for isolated and connected bodies, centroids, inertia, truss, frame and machine analysis, friction and virtual work.",
    prereqs: [
    ["MECHENG 1181"],
    ["MECHENG 1187"],
    ["MECHENG 1281H"],
    ["MECHENG 1250"],
    ["MECHENG 1260"],
    ["MECHENG 1151"],
    ["MECHENG 1140"],
    ["MECHENG 1161"],
    ["MECHENG 2010"],
    ["MECHENG 2040"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2020",
    dept: "MECHENG",
    number: "2020",
    name: "Introduction to Mechanics of Materials",
    credits: 3,
    terms: [],
    sentence: " Stress and strain analysis of deformable structural components subjected to unidirectional and combined loads; pressure vessels; stress transformations (Mohr's Circle); beam deflections; column buckling.",
    prereqs: [
    ["MECHENG 2010"],
    ["MECHENG 2010H"],
    ["MECHENG 2040"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2030",
    dept: "MECHENG",
    number: "2030",
    name: "Dynamics",
    credits: 3,
    terms: [],
    sentence: " Dynamics of particles and rigid bodies; linear and angular motion; work and energy; and single degree of freedom vibration analysis.",
    prereqs: [
    ["MECHENG 2010"],
    ["MECHENG 2010H"],
    ["MECHENG 2040"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2040",
    dept: "MECHENG",
    number: "2040",
    name: "Statics and Introduction to Mechanics of Materials",
    credits: 4,
    terms: [],
    sentence: " Vector concepts of static equilibrium, truss, frame and machine analysis. Stress and strain analysis of deformable structural components; stress transformations; beam deflections; column buckling.",
    prereqs: [
    ["MECHENG 1181"],
    ["MECHENG 1187"],
    ["MECHENG 1281H"],
    ["MECHENG 1250"],
    ["MECHENG 1260"],
    ["MECHENG 1152"],
    ["MECHENG 1161"],
    ["MECHENG 1172"],
    ["MECHENG 1181H"],
    ["MECHENG 2020"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2193",
    dept: "MECHENG",
    number: "2193",
    name: "Individual Studies in Mechanical Engineering",
    credits: 1,
    terms: [],
    sentence: " Designed to give the advanced student opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 2900",
    dept: "MECHENG",
    number: "2900",
    name: "Introduction to Design in Mechanical Engineering",
    credits: 3,
    terms: [],
    sentence: " Introduction to the discipline of Mechanical Engineering through a structured design, build, and test sequence. Students fabricate apparatus requiring a basic understanding of the full scope of Mechanical Engineering.",
    prereqs: [],
    concur: [
    ["MECHENG 2010"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 3260",
    dept: "MECHENG",
    number: "3260",
    name: "System Dynamics and Vibrations",
    credits: 3,
    terms: [],
    sentence: " Applications of ordinary differential equations, Laplace transforms, transfer function analysis to first and second order systems, and single-degree-of-freedom mechanical and electrical systems.",
    prereqs: [],
    concur: [
    ["MECHENG 2900"],
    ["MECHENG 2300"],
    ["MECHENG 2300"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 3360",
    dept: "MECHENG",
    number: "3360",
    name: "System Integration and Control",
    credits: 3,
    terms: [],
    sentence: " Modeling of a variety of multi-domain systems, including electromechanical actuators, principles of feedback control, and analysis of control systems.",
    prereqs: [],
    concur: [
    ["MECHENG 3503"],
    ["MECHENG 2900"],
    ["MECHENG 2300"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 3500",
    dept: "MECHENG",
    number: "3500",
    name: "Engineering Thermal Sciences",
    credits: 3,
    terms: [],
    sentence: " Introduction to thermodynamics, fluid mechanics and heat transfer with engineering applications.",
    prereqs: [
    ["MECHENG 2174"],
    ["MECHENG 2177"],
    ["MECHENG 2255"],
    ["MECHENG 255"],
    ["MECHENG 2415"],
    ["MECHENG 415"],
    ["MECHENG 1250"],
    ["MECHENG 131"],
    ["MECHENG 500"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 3501",
    dept: "MECHENG",
    number: "3501",
    name: "Introduction to Engineering Thermodynamics",
    credits: 3,
    terms: [],
    sentence: " Principles of engineering thermodynamics from the classical perspective, including first and second laws of thermodynamics, with selected applications.",
    prereqs: [],
    concur: [
    ["MECHENG 2850"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 3503",
    dept: "MECHENG",
    number: "3503",
    name: "Introduction to Fluid Mechanics",
    credits: 3,
    terms: [],
    sentence: " A study of the basic concepts, fundamental equations, and applications of fluid mechanics to engineering problems.",
    prereqs: [
    ["MECHENG 2850"],
    ["MECHENG 3501"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 3670",
    dept: "MECHENG",
    number: "3670",
    name: "Design and Analysis of Machine Elements I",
    credits: 2,
    terms: [],
    sentence: " Design of mechanisms. Application of general mechanical engineering principles to the design and analysis of mechanical components.",
    prereqs: [
    ["MECHENG 2020"],
    ["MECHENG 2030"],
    ["MECHENG 2850"],
    ["MECHENG 2010"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 3671",
    dept: "MECHENG",
    number: "3671",
    name: "Design and Analysis of Machine Elements II",
    credits: 3,
    terms: [],
    sentence: " Continuation of 3670 and 3571.",
    prereqs: [
    ["MECHENG 3670"],
    ["MECHENG 3751"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 3751",
    dept: "MECHENG",
    number: "3751",
    name: "Kinematics and Mechanism Design",
    credits: 2,
    terms: [],
    sentence: " Helps students develop an intuitive understanding of the design concepts for machinery and mechanisms: kinematic joints, mobility analysis, kinematic synthesis of planar linkages, computer-aided design of mechanisms, kinematic analysis, cam motion program synthesis, and cam profile design.",
    prereqs: [
    ["MECHENG 2020"],
    ["MECHENG 2030"],
    ["MECHENG 2850"],
    ["MECHENG 2010"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 3870",
    dept: "MECHENG",
    number: "3870",
    name: "Introduction to Measurements and Data Analysis in Mechanical Engineering",
    credits: 3,
    terms: [],
    sentence: " Foundation in experimental measurement and data analysis in mechanical engineering; team planning and execution of experiments; technical report writing.",
    prereqs: [],
    concur: [
    ["MECHENG 3503"],
    ["MECHENG 2900"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 4505",
    dept: "MECHENG",
    number: "4505",
    name: "Introduction to Nuclear Science and Engineering",
    credits: 3,
    terms: [],
    sentence: " Discussion of nuclear energy and nuclear radiation; sources, methods of utilization, and projections for future engineering uses.",
    prereqs: [
    ["MECHENG 2153"],
    ["MECHENG 1251"],
    ["MECHENG 4505"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4510",
    dept: "MECHENG",
    number: "4510",
    name: "Heat Transfer",
    credits: 3,
    terms: [],
    sentence: " A study of the fundamentals of conduction, convection, and thermal radiation energy transfer with engineering applications.",
    prereqs: [
    ["MECHENG 3503"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4536",
    dept: "MECHENG",
    number: "4536",
    name: "Nuclear Reactor Systems",
    credits: 3,
    terms: [],
    sentence: " Introductory course covering concepts of nuclear power reactor systems, thermal and mechanical design aspects, and economics of nuclear power plants.",
    prereqs: [
    ["MECHENG 4505"],
    ["MECHENG 505"],
    ["MECHENG 4505"],
    ["MECHENG 505"],
    ["MECHENG 6536"],
    ["MECHENG 736"],
    ["MECHENG 4536"],
    ["MECHENG 736"],
    ["MECHENG 6536"],
    ["MECHENG 736"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4610",
    dept: "MECHENG",
    number: "4610",
    name: "Introduction to Automotive Manufacturing",
    credits: 3,
    terms: [],
    sentence: " An introduction to automotive manufacturing as implemented in the certificate program at OSU in the College of Engineering.",
    prereqs: [
    ["MECHENG 1182"],
    ["MECHENG 1282"],
    ["MECHENG 1282"],
    ["MECHENG 1282"],
    ["MECHENG 1186"],
    ["MECHENG 1187"],
    ["MECHENG 1188"],
    ["MECHENG 4670"],
    ["MECHENG 4610"],
    ["MECHENG 4610"],
    ["MECHENG 4670"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4611",
    dept: "MECHENG",
    number: "4611",
    name: "Practical Experience in Automotive Manufacturing or Related Area",
    credits: 1,
    terms: [],
    sentence: " Practical experience in automotive manufacturing from a cooperative work experience, internship, undergraduate research project, capstone project, or participation on a student motorsports team.",
    prereqs: [
    ["MECHENG 4610"],
    ["MECHENG 4610"],
    ["MECHENG 4610"],
    ["MECHENG 4670"],
    ["MECHENG 4611"],
    ["MECHENG 4611"],
    ["MECHENG 4671"],
    ["MECHENG 4611"],
    ["MECHENG 4611"],
    ["MECHENG 4671"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4684",
    dept: "MECHENG",
    number: "4684",
    name: "Product Design Capstone I",
    credits: 4,
    terms: [],
    sentence: " Fundamentals of the product design process, from concept creation to final implementation, including product architecture and design for manufacture and assembly. Part I ends with initial build; Part II continues with implementation and testing.",
    prereqs: [],
    concur: [
    ["MECHENG 4510"],
    ["MECHENG 510"],
    ["MECHENG 5682"],
    ["MECHENG 682"],
    ["MECHENG 5682"],
    ["MECHENG 682"],
    ["MECHENG 5560"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 4685",
    dept: "MECHENG",
    number: "4685",
    name: "Product Design Capstone II",
    credits: 2,
    terms: [],
    sentence: " Fabrication and testing of the product prototype developed in MechEng 4684, Product Design Capstone I.",
    prereqs: [
    ["MECHENG 4684"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4870",
    dept: "MECHENG",
    number: "4870",
    name: "Multidisciplinary Mechanical Engineering Laboratory",
    credits: 2,
    terms: [],
    sentence: " Builds upon prior laboratory experiences and integrates thermal and mechanical system concepts; focus on problem solving using experimental and analytical/computational methods.",
    prereqs: [],
    concur: [
    ["MECHENG 4510"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 4900",
    dept: "MECHENG",
    number: "4900",
    name: "ME Capstone Design I",
    credits: 2,
    terms: [],
    sentence: " First course of 2-semester senior capstone series. Fundamentals of engineering design process and the technical and professional skills needed in Mechanical Engineering. Lectures, hands-on project.",
    prereqs: [],
    concur: [
    ["MECHENG 4510"],
    ["MECHENG 510"],
    ["MECHENG 4901"],
    ["MECHENG 4902"],
    ["MECHENG 4903"],
    ["MECHENG 4904"],
    ["MECHENG 4905"],
    ["MECHENG 4901"],
    ["MECHENG 658"],
    ["MECHENG 564"],
    ["MECHENG 565"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 4998",
    dept: "MECHENG",
    number: "4998",
    name: "Undergraduate Research in Mechanical Engineering",
    credits: 1,
    terms: [],
    sentence: " Opportunity for undergraduate students to conduct research in Mechanical Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4998H",
    dept: "MECHENG",
    number: "4998H",
    name: "Undergraduate Research in Mechanical Engineering (Honors)",
    credits: 1,
    terms: [],
    sentence: " Opportunity for undergraduate Honors program students to conduct research in Mechanical Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4999",
    dept: "MECHENG",
    number: "4999",
    name: "Mechanical Engineering Undergraduate Research for Thesis",
    credits: 1,
    terms: [],
    sentence: " Students are offered the opportunity to pursue independent project/research, including student presentations and undergraduate thesis writing.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 4999H",
    dept: "MECHENG",
    number: "4999H",
    name: "Mechanical Engineering Undergraduate Research for Thesis (Honors)",
    credits: 1,
    terms: [],
    sentence: " Honors program students pursue independent project/research, including student presentations and undergraduate Honors thesis writing, enabling graduation with Research Distinction in Mechanical Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5003",
    dept: "MECHENG",
    number: "5003",
    name: "Nuclear Reactor Systems and Analysis",
    credits: 3,
    terms: [],
    sentence: " Intermediate-level course covering thermal and mechanical design aspects of nuclear power plants. The thermodynamics of operating nuclear power plants (BWRs and PWRs) are emphasized.",
    prereqs: [
    ["MECHENG 4505"],
    ["MECHENG 4505"],
    ["MECHENG 3501"],
    ["MECHENG 6536"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5030",
    dept: "MECHENG",
    number: "5030",
    name: "Intermediate Dynamics",
    credits: 3,
    terms: [],
    sentence: " Emphasizes dynamics of single/multi-degree-of-freedom systems, including particles and rigid bodies; an extensive introduction to the principles of analytical mechanics, including Lagrange's equations of motion.",
    prereqs: [
    ["MECHENG 2030"],
    ["MECHENG 5194"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5134",
    dept: "MECHENG",
    number: "5134",
    name: "Introduction to Vibrations of Deformable Solids",
    credits: 3,
    terms: [],
    sentence: " Introduction to the analysis of the free and forced transverse vibrations of strings, beams, membranes and plates and the longitudinal and torsional vibrations of prismatic bars.",
    prereqs: [
    ["MECHENG 2020"],
    ["MECHENG 420"],
    ["MECHENG 2040"],
    ["MECHENG 2174"],
    ["MECHENG 2177"],
    ["MECHENG 2415"],
    ["MECHENG 415"],
    ["MECHENG 734"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5139",
    dept: "MECHENG",
    number: "5139",
    name: "Applied Finite Element Method",
    credits: 3,
    terms: [],
    sentence: " Overview of finite element method, description of finite element software, modeling requirements and techniques, analysis using general purpose software, and case studies.",
    prereqs: [
    ["MECHENG 2020"],
    ["MECHENG 2040"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5144",
    dept: "MECHENG",
    number: "5144",
    name: "Engineering Fracture Mechanics",
    credits: 3,
    terms: [],
    sentence: " Fracture and fatigue of solids; stress intensity factors; stability of cracks; compliance and energy methods; plane stress, plane strain effects; crack propagation and arrest criteria.",
    prereqs: [
    ["MECHENG 2020"],
    ["MECHENG 420"],
    ["MECHENG 2040"],
    ["MECHENG 2174"],
    ["MECHENG 2177"],
    ["MECHENG 2415"],
    ["MECHENG 415"],
    ["MECHENG 744"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5162",
    dept: "MECHENG",
    number: "5162",
    name: "Introduction to Laminated Composite Materials",
    credits: 3,
    terms: [],
    sentence: " Introduction to anisotropic material behavior and failure assessment of laminated composite materials. Classical lamination theory, beams, plates and shells.",
    prereqs: [
    ["MECHENG 2020"],
    ["MECHENG 420"],
    ["MECHENG 2040"],
    ["MECHENG 662"],
    ["MECHENG 762"],
    ["MECHENG 5162"],
    ["MECHENG 662"],
    ["MECHENG 762"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5180",
    dept: "MECHENG",
    number: "5180",
    name: "Mechanics of Biomolecular Systems",
    credits: 3,
    terms: [],
    sentence: " Introduction to biomolecules and systems in the context of cellular functions, focusing on the physical properties of biomolecules and the physical interactions that mediate their functions.",
    prereqs: [
    ["MECHENG 694E"],
    ["MECHENG 2010"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5234",
    dept: "MECHENG",
    number: "5234",
    name: "Vehicle Dynamics",
    credits: 4,
    terms: [],
    sentence: " A first course in vehicle dynamics devoted to the basic concepts of rubber-wheeled vehicles with an actual driving and demonstrated laboratory.",
    prereqs: [
    ["MECHENG 3360"],
    ["MECHENG 482"],
    ["MECHENG 3671"],
    ["MECHENG 563"],
    ["MECHENG 654"],
    ["MECHENG 754"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5240",
    dept: "MECHENG",
    number: "5240",
    name: "Mechanical Vibrations",
    credits: 3,
    terms: [],
    sentence: " Free and forced vibration analysis of single-degree-of-freedom systems with various forms of damping, vibration isolation and control methods and devices, vibration sensors, equations of motion of multi-degree of freedom systems using Lagrange's method, Eigen value problem, modal analysis, and frequency-domain data analysis fundamentals.",
    prereqs: [],
    concur: [
    ["MECHENG 3360"],
    ["MECHENG 482"],
    ["MECHENG 650"],
    ["MECHENG 666"],
    ["MECHENG 7250"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 5241",
    dept: "MECHENG",
    number: "5241",
    name: "Engineering Acoustics",
    credits: 3,
    terms: [],
    sentence: " Acoustics applications survey. Wave propagation phenomena. Introduction to human hearing. Acoustic wave equation, propagation, and metrics. Instrumentation for and evaluation of acoustic measurements. Introductory architectural acoustics, engineering noise control, and psychoacoustics.",
    prereqs: [
    ["MECHENG 3260"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5339",
    dept: "MECHENG",
    number: "5339",
    name: "Modeling and Simulation Techniques for Dynamic Systems and Control",
    credits: 3,
    terms: [],
    sentence: " Introduction and use of software tools for dynamic system modeling, control system analysis, and design, with emphasis on model development and validation, parameter identification, and results presentation.",
    prereqs: [
    ["MECHENG 3360"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5372",
    dept: "MECHENG",
    number: "5372",
    name: "Theory and Applications of Feedback Control",
    credits: 3,
    terms: [],
    sentence: " Introduction to multi-domain (mechanical, thermal, fluid, electrical, electronic, electro-mechanical) system design, dynamic modeling, and control system design and analysis techniques.",
    prereqs: [
    ["MECHENG 3360"],
    ["MECHENG 3361"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5374",
    dept: "MECHENG",
    number: "5374",
    name: "Smart Materials and Intelligent Systems",
    credits: 3,
    terms: [],
    sentence: " Macromechanical modeling of smart materials including piezoceramics, magnetostrictives, shape memory alloys, magnetorheological fluids, and active polymers. Constitutive and system-level modeling. Design of smart dynamic systems.",
    prereqs: [
    ["MECHENG 3360"],
    ["MECHENG 571"],
    ["MECHENG 3361"],
    ["MECHENG 774"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5427",
    dept: "MECHENG",
    number: "5427",
    name: "Introduction to Turbomachinery",
    credits: 3,
    terms: [],
    sentence: " Introduction to analysis and design of turbomachinery.",
    prereqs: [
    ["MECHENG 3503"],
    ["MECHENG 3504"],
    ["MECHENG 504"],
    ["MECHENG 627"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5463",
    dept: "MECHENG",
    number: "5463",
    name: "Introduction to Real Time Robotics Systems",
    credits: 3,
    terms: [],
    sentence: " Components of a robot system, robot forward and reverse kinematics; robot dynamics; robot force generation, robot trajectory generation.",
    prereqs: [
    ["MECHENG 2177"],
    ["MECHENG 2174"],
    ["MECHENG 2415"],
    ["MECHENG 2568"],
    ["MECHENG 1250"],
    ["MECHENG 1250H"],
    ["MECHENG 1260"],
    ["MECHENG 2300"],
    ["MECHENG 1221"],
    ["MECHENG 1222"],
    ["MECHENG 1181"],
    ["MECHENG 1281"],
    ["MECHENG 1281"],
    ["MECHENG 1221"],
    ["MECHENG 1222"],
    ["MECHENG 7752"],
    ["MECHENG 5463"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5500",
    dept: "MECHENG",
    number: "5500",
    name: "Sustainable Energy Science and Technology",
    credits: 3,
    terms: [],
    sentence: " Understand the principles and energy efficiency of sustainable energy technologies and prepare engineering students for evaluating and developing those technologies, through technology examples, fundamental principles, and project-based deep dives.",
    prereqs: [
    ["MECHENG 3500"],
    ["MECHENG 3501"],
    ["MECHENG 2405"],
    ["MECHENG 3120"],
    ["MECHENG 2251"],
    ["MECHENG 3508"],
    ["MECHENG 4310"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5502",
    dept: "MECHENG",
    number: "5502",
    name: "Engineering Thermodynamics",
    credits: 3,
    terms: [],
    sentence: " Technical elective in Engineering Thermodynamics including energy analysis, non-reacting and reacting gas mixtures, combustion, psychrometrics, chemical and phase equilibrium, thermoeconomics and applications.",
    prereqs: [
    ["MECHENG 3501"],
    ["MECHENG 501"],
    ["MECHENG 3502"],
    ["MECHENG 502"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5512",
    dept: "MECHENG",
    number: "5512",
    name: "Design of Heat Exchangers",
    credits: 2,
    terms: [],
    sentence: " Design methods, heat transfer and pressure drop in single phase and two phase heat exchangers. Design of single phase and two phase heat exchangers.",
    prereqs: [
    ["MECHENG 4510"],
    ["MECHENG 510"],
    ["MECHENG 612"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5530",
    dept: "MECHENG",
    number: "5530",
    name: "Internal Combustion Engines",
    credits: 3,
    terms: [],
    sentence: " Design and operating characteristics of contemporary internal combustion engines, induction/exhaust breathing, boosting, variable valvetrains, combustion and knock, fuel economy, alternative fuels, and advanced powertrains.",
    prereqs: [
    ["MECHENG 3501"],
    ["MECHENG 3502"],
    ["MECHENG 502"],
    ["MECHENG 630"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5531",
    dept: "MECHENG",
    number: "5531",
    name: "Automotive Powertrain Laboratory",
    credits: 3,
    terms: [],
    sentence: " Focuses on analysis and testing of advanced automotive systems, including turbocharged GDI engines, electric powertrain components, and autonomous vehicle sensing technologies like radar and lidar.",
    prereqs: [
    ["MECHENG 3870"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5535",
    dept: "MECHENG",
    number: "5535",
    name: "Advanced Topics in Solar Energy Systems",
    credits: 3,
    terms: [],
    sentence: " Understand the design, manufacturing, operations and financing of solar energy plants, systems utilizing classroom lecture and presentation, computer simulation, and two projects.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5539",
    dept: "MECHENG",
    number: "5539",
    name: "Applied Computational Fluid Dynamics and Heat Transfer",
    credits: 3,
    terms: [],
    sentence: " Introduces basic concepts in Computational Fluid Dynamics (CFD) and Computational Heat Transfer (CHT), teaches thermo-fluid analysis of engineering systems, and enhances understanding of fluid flow and heat transfer.",
    prereqs: [],
    concur: [
    ["MECHENG 4510"],
    ["MECHENG 510"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 5541",
    dept: "MECHENG",
    number: "5541",
    name: "Heating, Ventilating, and Air Conditioning",
    credits: 3,
    terms: [],
    sentence: " Analysis of components and systems for heating, ventilating and air-conditioning.",
    prereqs: [
    ["MECHENG 4510"],
    ["MECHENG 510"],
    ["MECHENG 641"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5550",
    dept: "MECHENG",
    number: "5550",
    name: "Engineering Principles in Cancer",
    credits: 3,
    terms: [],
    sentence: " Introduces engineering principles in the context of cancer progression and therapy.",
    prereqs: [
    ["MECHENG 3500"],
    ["MECHENG 3503"],
    ["MECHENG 2420"],
    ["MECHENG 5550"],
    ["MECHENG 5550"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5555",
    dept: "MECHENG",
    number: "5555",
    name: "Safety & Security of Autonomous Systems",
    credits: 3,
    terms: [],
    sentence: " Introduces principles and methodologies for ensuring the safety and security of autonomous systems, including AI and ML components: system modeling for safety analysis, risk and hazard assessment, Lyapunov-based safety and invariance, reachability and safe set computation, and fault detection and isolation.",
    prereqs: [
    ["MECHENG 3050"],
    ["MECHENG 3551"],
    ["MECHENG 3360"],
    ["MECHENG 5555"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5600",
    dept: "MECHENG",
    number: "5600",
    name: "Applied Project Management in Product Development Team Environments",
    credits: 3,
    terms: [],
    sentence: " Students learn to apply project management concepts in product development team environments; includes relevant theory, tools, and techniques used in industry; relevant systems engineering concepts for designing complex products are introduced.",
    prereqs: [
    ["MECHENG 4194"],
    ["MECHENG 5194"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5670",
    dept: "MECHENG",
    number: "5670",
    name: "Advanced MCAD Modeling with CATIA",
    credits: 3,
    terms: [],
    sentence: " Advanced techniques for solid, surface and assembly modeling using CATIA workbenches, including how geometric modelers work internally: constraint solving, geometric DoFs, history roll forward-rollback, BRep data structure, Boolean ops, math representations of curves and surfaces.",
    prereqs: [
    ["MECHENG 3670"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5680",
    dept: "MECHENG",
    number: "5680",
    name: "Computer Aided Design and Manufacturing",
    credits: 4,
    terms: [],
    sentence: " Design of machine components, surfaces, and assemblies using parametric and feature-based design principles and advanced design tools.",
    prereqs: [
    ["MECHENG 3670"],
    ["MECHENG 561"],
    ["MECHENG 621"],
    ["MECHENG 683"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5683",
    dept: "MECHENG",
    number: "5683",
    name: "Fundamentals of Product Design Engineering Laboratory",
    credits: 1,
    terms: [],
    sentence: " An optional laboratory to go with ISE/ME5682.01. This project-based lab gives students hands-on experience with the product design process, from conducting user research through constructing prototypes.",
    prereqs: [],
    concur: [
    ["MECHENG 5682"],
    ["MECHENG 5682"],
    ["MECHENG 5682"],
    ["MECHENG 5682"],
    ["MECHENG 5682"],
    ["MECHENG 5682"]
  ],
    notes: ""
  },
  {
    id: "MECHENG 5686",
    dept: "MECHENG",
    number: "5686",
    name: "Smart Product Engineering Design",
    credits: 3,
    terms: [],
    sentence: " Introduces senior-level undergraduate and graduate students to the concepts and process of embedded (smart) product design, through an application-based, structured design process, building on the fundamentals of the ME undergraduate curriculum.",
    prereqs: [
    ["MECHENG 2900"],
    ["MECHENG 3360"],
    ["MECHENG 3671"],
    ["MECHENG 3870"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5700",
    dept: "MECHENG",
    number: "5700",
    name: "Introduction to Musculoskeletal Biomechanics",
    credits: 3,
    terms: [],
    sentence: " Introduction to the field of musculoskeletal biomechanics at a level appropriate for advanced undergraduates and early graduate students: fundamental anatomy and physiology; mechanics of muscle, tendon, ligament, meniscus, bone; equations of motion for movement; introduction to experimental methods.",
    prereqs: [
    ["MECHENG 3670"],
    ["MECHENG 6700"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5751",
    dept: "MECHENG",
    number: "5751",
    name: "Design and Manufacturing of Compliant Mechanisms and Robots",
    credits: 3,
    terms: [],
    sentence: " Introduces methods and theories for kinematic and force analysis, synthesis of rigid body and compliant (flexible) mechanisms and robots, using the pseudo-rigid-body model and CAD/CAE software; includes a team project.",
    prereqs: [
    ["MECHENG 3670"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "MECHENG 5797",
    dept: "MECHENG",
    number: "5797",
    name: "Study at a Foreign Institution",
    credits: 1,
    terms: [],
    sentence: " An opportunity for students to study at a foreign institution and receive Ohio State credit for that work.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 2500",
    dept: "NUCLREN",
    number: "2500",
    name: "Nuclear Sciences and Engineering at The Ohio State University",
    credits: 1,
    terms: [],
    sentence: " Offers information about careers in Nuclear Sciences and Engineering (NE) and describes NE-related opportunities at OSU, such as the NE minor and undergraduate research possibilities, plus an overview of NE research areas at OSU and the NE faculty.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4193",
    dept: "NUCLREN",
    number: "4193",
    name: "Individual Studies in Nuclear Engineering",
    credits: 1,
    terms: [],
    sentence: " Designed to give the advanced student opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4193H",
    dept: "NUCLREN",
    number: "4193H",
    name: "Individual Studies in Nuclear Engineering (Honors)",
    credits: 1,
    terms: [],
    sentence: " Designed to give the advanced student opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4505",
    dept: "NUCLREN",
    number: "4505",
    name: "Introduction to Nuclear Science and Engineering",
    credits: 3,
    terms: [],
    sentence: " Discussion of nuclear energy and nuclear radiation; sources, methods of utilization, and projections for future engineering uses.",
    prereqs: [
    ["NUCLREN 2153"],
    ["NUCLREN 1251"],
    ["NUCLREN 4505"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4506",
    dept: "NUCLREN",
    number: "4506",
    name: "Undergraduate Nuclear Engineering Laboratory",
    credits: 3,
    terms: [],
    sentence: " A laboratory course tailored to undergraduates that provides hands-on experience with nuclear engineering instrumentation and the OSU Research Reactor.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 4505"],
    ["NUCLREN 505"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4536",
    dept: "NUCLREN",
    number: "4536",
    name: "Nuclear Reactor Systems",
    credits: 3,
    terms: [],
    sentence: " Introductory course covering concepts of nuclear power reactor systems, thermal and mechanical design aspects, and economics of nuclear power plants.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 6536"],
    ["NUCLREN 736"],
    ["NUCLREN 4536"],
    ["NUCLREN 6536"],
    ["NUCLREN 736"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4701",
    dept: "NUCLREN",
    number: "4701",
    name: "Introduction to Nuclear Power Engineering",
    credits: 3,
    terms: [],
    sentence: " For advanced undergraduates in nuclear engineering, focusing on the physics and engineering of nuclear reactors and nuclear power plants.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 701"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4998",
    dept: "NUCLREN",
    number: "4998",
    name: "Undergraduate Research in Nuclear Engineering",
    credits: 1,
    terms: [],
    sentence: " Designed to give the advanced student opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 4998H",
    dept: "NUCLREN",
    number: "4998H",
    name: "Undergraduate Research in Nuclear Engineering (Honors)",
    credits: 1,
    terms: [],
    sentence: " Designed to give the advanced student opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5001",
    dept: "NUCLREN",
    number: "5001",
    name: "Interactions of Radiation with Matter",
    credits: 3,
    terms: [],
    sentence: " Core course in Nuclear Engineering focused on ionization interactions with matter, including radiation sources, interaction of charged particles, x-ray, gamma-rays, and neutrons with matter, nuclear structure, cross-section, nuclear reaction, radiation dose, shielding, radiation damage, space radiation, interactions with electronics, and MC simulations.",
    prereqs: [
    ["NUCLREN 4505"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5002",
    dept: "NUCLREN",
    number: "5002",
    name: "Reactor Physics",
    credits: 3,
    terms: [],
    sentence: " Fundamental neutron physics concepts. Neutron transport and neutron diffusion. One, two, and multi-group diffusion equation. Analytical and numerical solutions of the diffusion equation. Criticality calculations for diffusion. Heterogeneous reactors and homogenization. Introduction to transport solution techniques.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 4505"],
    ["NUCLREN 6708"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5003",
    dept: "NUCLREN",
    number: "5003",
    name: "Nuclear Reactor Systems and Analysis",
    credits: 3,
    terms: [],
    sentence: " Intermediate-level course covering thermal and mechanical design aspects of nuclear power plants. The thermodynamics of operating nuclear power plants (BWRs and PWRs) are emphasized.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 4505"],
    ["NUCLREN 3501"],
    ["NUCLREN 6536"],
    ["NUCLREN 6536"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5004",
    dept: "NUCLREN",
    number: "5004",
    name: "Materials in Nuclear Systems",
    credits: 3,
    terms: [],
    sentence: " Develop an understanding of the interactions of materials with radiation and the resulting changes in materials properties, with discussion of common materials in nuclear systems.",
    prereqs: [
    ["NUCLREN 6750"],
    ["NUCLREN 6750"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5606",
    dept: "NUCLREN",
    number: "5606",
    name: "Radiation Protection and Shielding",
    credits: 3,
    terms: [],
    sentence: " General principles of radiation, radioactivity, and radiation protection including radiation sources, radioactive decay, radiation interactions, radiation detection, radiation shielding, radiation dose calculations, and biological effects.",
    prereqs: [
    ["NUCLREN 2153"],
    ["NUCLREN 2173"],
    ["NUCLREN 2177"],
    ["NUCLREN 153"],
    ["NUCLREN 1250"],
    ["NUCLREN 133"],
    ["NUCLREN 606"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5610",
    dept: "NUCLREN",
    number: "5610",
    name: "Reactor Safety",
    credits: 3,
    terms: [],
    sentence: " Introductory course covering concepts of reactor safety, the history of reactor accidents and methods of safety analysis.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 610"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5735",
    dept: "NUCLREN",
    number: "5735",
    name: "Nuclear Power Plant Operations",
    credits: 3,
    terms: [],
    sentence: " Introduction to power plant systems, regulatory requirements, integrated plant operations, and emergency responses.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 735"],
    ["NUCLREN 745"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5742",
    dept: "NUCLREN",
    number: "5742",
    name: "Nuclear Instrumentation, Radiation Sensor and Detection",
    credits: 3,
    terms: [],
    sentence: " Systematic study of nuclear radiation source, interaction with matter and their detection using gas-filled, semiconductor, Scintillation detectors, HPGe spectrometry, pulse processing, and statistical data analysis.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "NUCLREN 5776",
    dept: "NUCLREN",
    number: "5776",
    name: "Nuclear Fuel Cycle and Radioactive Waste Management",
    credits: 3,
    terms: [],
    sentence: " Review of the nuclear fuel cycle and radioactive waste management, including uranium mining, milling, conversion, enrichment, fuel fabrication, reactor operations, reprocessing, waste treatment, and disposal.",
    prereqs: [
    ["NUCLREN 4505"],
    ["NUCLREN 505"],
    ["NUCLREN 4505"],
    ["NUCLREN 505"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 2400",
    dept: "ISE",
    number: "2400",
    name: "Design of Work: Methods and Measurement",
    credits: 2,
    terms: [],
    sentence: " Introduces tools and techniques used in work methods design and productivity improvement, including operation analysis, motion study, value engineering, predetermined time systems, time study, and line balancing.",
    prereqs: [
    ["ISE 3470"],
    ["ISE 3470"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 2500",
    dept: "ISE",
    number: "2500",
    name: "Introduction to Manufacturing Engineering",
    credits: 3,
    terms: [],
    sentence: " Fundamentals of common manufacturing processes, materials and tooling; relationship of product design to required processing sequences and steps; attributes of manufacturing systems.",
    prereqs: [
    ["ISE 350"],
    ["ISE 311"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3200",
    dept: "ISE",
    number: "3200",
    name: "Linear and Integer Programming",
    credits: 3,
    terms: [],
    sentence: " Introduction to formulation, solution and analysis of continuous and discrete linear models to optimize the design of production and service systems and other engineering applications.",
    prereqs: [
    ["ISE 2568"],
    ["ISE 2174"],
    ["ISE 1224"],
    ["ISE 2221"],
    ["ISE 1281"],
    ["ISE 1281"],
    ["ISE 2400"],
    ["ISE 2112"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3210",
    dept: "ISE",
    number: "3210",
    name: "Nonlinear and Dynamic Optimization",
    credits: 3,
    terms: [],
    sentence: " Introduction to nonlinear, dynamic, and network optimization models and solution techniques.",
    prereqs: [
    ["ISE 3200"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3230",
    dept: "ISE",
    number: "3230",
    name: "Systems Modeling and Optimization for Analytics",
    credits: 3,
    terms: [],
    sentence: " Introduction to formulation, solution and analysis of continuous and discrete linear and nonlinear models to optimize systems using data-driven techniques.",
    prereqs: [
    ["ISE 1152"],
    ["ISE 2568"],
    ["ISE 2231"],
    ["ISE 3200"],
    ["ISE 3210"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3400",
    dept: "ISE",
    number: "3400",
    name: "Production Planning and Facilities Design",
    credits: 4,
    terms: [],
    sentence: " Introduction to production systems control: deterministic and stochastic, static and dynamic, single-stage and multi-stage inventory control, MRP systems, just-in-time, scheduling. Facility and machine location models, storage models, and layout planning with applications in manufacturing, health care, service and logistics.",
    prereqs: [
    ["ISE 3200"],
    ["ISE 3470"],
    ["ISE 3600"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3500",
    dept: "ISE",
    number: "3500",
    name: "Process Engineering for Machining Operations",
    credits: 3,
    terms: [],
    sentence: " Introduction to the machines, tooling, set-ups, processing sequences, processing times, metrology, and safety issues for traditional and selected non-traditional metal cutting operations.",
    prereqs: [
    ["ISE 2500"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3600",
    dept: "ISE",
    number: "3600",
    name: "Workplace Ergonomics: Analysis and Design of Physical Work Systems",
    credits: 3,
    terms: [],
    sentence: " Explores physiological and biomechanical principles used to analyze and design work systems (tasks, tools, equipment) so people can perform their jobs more effectively and safely.",
    prereqs: [],
    concur: [
    ["ISE 2400"],
    ["ISE 2040"]
  ],
    notes: ""
  },
  {
    id: "ISE 3700",
    dept: "ISE",
    number: "3700",
    name: "Cognitive Engineering Systems",
    credits: 3,
    terms: [],
    sentence: " Human-centered design of cognitive tools and work systems. Human-computer interaction; decision making; human error; computer-supported distributed work; design of decision support systems.",
    prereqs: [
    ["ISE 2400"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 3800",
    dept: "ISE",
    number: "3800",
    name: "Engineering Project Management",
    credits: 3,
    terms: [],
    sentence: " Project management for engineers, including project life cycle, planning, optimization models, management of change, and scheduling and budgeting.",
    prereqs: [
    ["ISE 2400"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4100",
    dept: "ISE",
    number: "4100",
    name: "Stochastic Modeling and Simulation",
    credits: 4,
    terms: [],
    sentence: " Methods for stochastic process and discrete event simulation modeling and system design and decision-making using simulation tools.",
    prereqs: [
    ["ISE 2400"],
    ["ISE 3470"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4120",
    dept: "ISE",
    number: "4120",
    name: "Quality and Reliability Engineering",
    credits: 3,
    terms: [],
    sentence: " Techniques associated with Total Quality Management and Lean Six Sigma as well as the foundations of reliability engineering.",
    prereqs: [
    ["ISE 3470"],
    ["ISE 3470"],
    ["ISE 3200"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4193",
    dept: "ISE",
    number: "4193",
    name: "Individual Studies in Integrated Systems Engineering",
    credits: 1,
    terms: [],
    sentence: " Special topics of general interest to undergraduate students in Integrated Systems Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4230",
    dept: "ISE",
    number: "4230",
    name: "Decision Analytics for Integrated Systems Engineering",
    credits: 3,
    terms: [],
    sentence: " Focuses on decision analytics, a rigorous system for decision-making support that draws from data science, statistical/machine learning, and mathematical optimization, starting from the needs of the decision and applying tools in an integrated fashion.",
    prereqs: [
    ["ISE 2568"],
    ["ISE 2174"],
    ["ISE 1224"],
    ["ISE 2221"],
    ["ISE 1281"],
    ["ISE 1281"],
    ["ISE 3470"],
    ["ISE 5307"],
    ["ISE 5710"],
    ["ISE 4230"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4500",
    dept: "ISE",
    number: "4500",
    name: "Manufacturing Process Engineering",
    credits: 3,
    terms: [],
    sentence: " A thorough quantitative understanding of contemporary manufacturing processes; exposure to laboratory exercises and computer simulations in major manufacturing processes; design for manufacturing and assembly.",
    prereqs: [],
    concur: [
    ["ISE 3503"],
    ["ISE 2020"],
    ["ISE 2040"],
    ["ISE 4201"],
    ["ISE 3500"],
    ["ISE 3151"]
  ],
    notes: ""
  },
  {
    id: "ISE 4510",
    dept: "ISE",
    number: "4510",
    name: "Manufacturing Engineering",
    credits: 3,
    terms: [],
    sentence: " Emphasizes quantitative analysis of manufacturing processes, discusses manufacturing support systems, evaluates the interplay between materials and manufacturing, and discusses future manufacturing like automation and data-driven controls.",
    prereqs: [
    ["ISE 2500"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4610",
    dept: "ISE",
    number: "4610",
    name: "Introduction to Automotive Manufacturing",
    credits: 3,
    terms: [],
    sentence: " An introduction to automotive manufacturing as implemented in the automotive manufacturing certificate program at OSU in the College of Engineering.",
    prereqs: [
    ["ISE 1182"],
    ["ISE 1282"],
    ["ISE 1282"],
    ["ISE 1282"],
    ["ISE 1186"],
    ["ISE 1187"],
    ["ISE 1188"],
    ["ISE 4610"],
    ["ISE 4610"],
    ["ISE 4670"],
    ["ISE 4670"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4611",
    dept: "ISE",
    number: "4611",
    name: "Practical Experience in Automotive Manufacturing or Related Area",
    credits: 1,
    terms: [],
    sentence: " Practical experience in automotive manufacturing from a cooperative work experience, internship, undergraduate research project, capstone project, or participation on a student motorsports team.",
    prereqs: [
    ["ISE 4610"],
    ["ISE 4610"],
    ["ISE 4610"],
    ["ISE 4670"],
    ["ISE 4611"],
    ["ISE 4611"],
    ["ISE 4671"],
    ["ISE 4671"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4900",
    dept: "ISE",
    number: "4900",
    name: "Capstone Design",
    credits: 4,
    terms: [],
    sentence: " In-depth systems design project for industrial engineering. Exploration and selection of design alternatives; justification, recommendation, and presentation of problems and potential solutions.",
    prereqs: [
    ["ISE 2040"],
    ["ISE 2400"],
    ["ISE 2500"],
    ["ISE 3200"],
    ["ISE 3210"],
    ["ISE 3400"],
    ["ISE 3600"],
    ["ISE 3700"],
    ["ISE 3800"],
    ["ISE 4100"],
    ["ISE 4120"],
    ["ISE 1201"],
    ["ISE 2601"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4998",
    dept: "ISE",
    number: "4998",
    name: "Undergraduate Research in Integrated Systems Engineering",
    credits: 1,
    terms: [],
    sentence: " Opportunity for undergraduates to conduct research in Integrated Systems Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4998H",
    dept: "ISE",
    number: "4998H",
    name: "Honors Undergraduate Research in Integrated Systems Engineering",
    credits: 1,
    terms: [],
    sentence: " Opportunity for undergraduate honors students to conduct research in Integrated Systems Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4999",
    dept: "ISE",
    number: "4999",
    name: "Undergraduate Research for Thesis",
    credits: 1,
    terms: [],
    sentence: " Opportunity for undergraduates to conduct research in Integrated Systems Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 4999H",
    dept: "ISE",
    number: "4999H",
    name: "Honors Undergraduate Research for Thesis",
    credits: 1,
    terms: [],
    sentence: " Opportunity for Honors undergraduates to conduct research in Integrated Systems Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5043",
    dept: "ISE",
    number: "5043",
    name: "Power Systems - Analysis and Operation",
    credits: 3,
    terms: [],
    sentence: " Power systems analysis and operations, including steady-state analysis, state estimation, and economic operation.",
    prereqs: [
    ["ISE 3040"],
    ["ISE 2568"],
    ["ISE 2568"],
    ["ISE 5043"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5110",
    dept: "ISE",
    number: "5110",
    name: "Design of Engineering Experiments",
    credits: 3,
    terms: [],
    sentence: " Plan and analyze experiments relevant to system design; students also learn regression and alternative approaches for on-hand data analysis.",
    prereqs: [
    ["ISE 4210"],
    ["ISE 3470"],
    ["ISE 610"],
    ["ISE 610"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5193",
    dept: "ISE",
    number: "5193",
    name: "Individual Studies in Integrated Systems Engineering",
    credits: 1,
    terms: [],
    sentence: " Special topics of general interest to graduate students in Integrated Systems Engineering.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5194",
    dept: "ISE",
    number: "5194",
    name: "Group Studies in Integrated Systems Engineering",
    credits: 1,
    terms: [],
    sentence: " Special topics of general interest to undergraduate and graduate students in Integrated Systems Engineering and related fields.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5200",
    dept: "ISE",
    number: "5200",
    name: "Linear Optimization",
    credits: 3,
    terms: [],
    sentence: " Introduction to linear optimization and its applications. Topics include model formulation, solution methods, polyhedral and duality theory, sensitivity analysis, and software usage.",
    prereqs: [
    ["ISE 2174"],
    ["ISE 2415"],
    ["ISE 2568"],
    ["ISE 4568"],
    ["ISE 720"],
    ["ISE 702"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5201",
    dept: "ISE",
    number: "5201",
    name: "Theory of Linear Optimization",
    credits: 3,
    terms: [],
    sentence: " Introduction to linear optimization with an emphasis on theory. Topics include model formulation, solution methods, polyhedral and duality theory, sensitivity analysis, and software.",
    prereqs: [
    ["ISE 2174"],
    ["ISE 2415"],
    ["ISE 2568"],
    ["ISE 4568"],
    ["ISE 5200"],
    ["ISE 720"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5220",
    dept: "ISE",
    number: "5220",
    name: "Complementarity Theory & Applications",
    credits: 3,
    terms: [],
    sentence: " Describes complementarity models and their solution techniques, including optimality conditions, equilibria, mathematical programs with equilibrium constraints, and equilibrium problems with equilibrium constraints.",
    prereqs: [
    ["ISE 3200"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5225",
    dept: "ISE",
    number: "5225",
    name: "Electricity Market Analytics",
    credits: 3,
    terms: [],
    sentence: " Provides an analysis of decision-making tools for electricity markets, addressing the perspectives of the market operator, producers, retailers, and consumers.",
    prereqs: [
    ["ISE 3200"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5230",
    dept: "ISE",
    number: "5230",
    name: "Decomposition Techniques in Mathematical Programming",
    credits: 3,
    terms: [],
    sentence: " Describes decomposition techniques to solve large-scale optimization problems with decomposable structure, including Dantzig-Wolfe, Benders and Lagrangian decompositions, illustrated with examples and case studies from the energy sector.",
    prereqs: [
    ["ISE 3200"],
    ["ISE 3210"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5350",
    dept: "ISE",
    number: "5350",
    name: "Probabilistic Models and Methods in Operations Research",
    credits: 3,
    terms: [],
    sentence: " Introduces probabilistic modeling techniques in operations research like Markov Chains, Poisson Processes, and Markov Decision Processes; modeling, theory, and applications are discussed.",
    prereqs: [
    ["ISE 3200"],
    ["ISE 3470"],
    ["ISE 7300"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5410",
    dept: "ISE",
    number: "5410",
    name: "Quantitative Models in Production and Distribution Logistics",
    credits: 3,
    terms: [],
    sentence: " Introduction to quantitative models in supply chain management and logistics including location analysis, inventory management, vehicle routing, coordination, risk pooling, and reverse logistics.",
    prereqs: [
    ["ISE 3210"],
    ["ISE 3400"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5430",
    dept: "ISE",
    number: "5430",
    name: "Warehouse and Facility Design",
    credits: 3,
    terms: [],
    sentence: " Broad exposure to facility planning and design, and distribution center layout and operations, including current material handling equipment technology and warehouse systems and operations.",
    prereqs: [
    ["ISE 742"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5501",
    dept: "ISE",
    number: "5501",
    name: "Fundamentals of Solid State Processing",
    credits: 3,
    terms: [],
    sentence: " Application of basic principles of heat transfer, tribology, and elastic/plastic deformation for metallic solids to manufacturing processes.",
    prereqs: [
    ["ISE 2010"],
    ["ISE 2020"],
    ["ISE 2040"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5503",
    dept: "ISE",
    number: "5503",
    name: "Manufacturing Processes and Simulation",
    credits: 3,
    terms: [],
    sentence: " An introduction to theory and simulation of different manufacturing processes; students learn to apply numerical methods to manufacturing processes such as machining, hot embossing, and injection molding.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5520",
    dept: "ISE",
    number: "5520",
    name: "Industrial Automation",
    credits: 2,
    terms: [],
    sentence: " Teaches the design, application, and computer logic and control of various mechanical, pneumatic, electrical, and electronic sensors and actuator devices for industrial systems.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5521",
    dept: "ISE",
    number: "5521",
    name: "Advanced Sheet Forming Laboratory",
    credits: 2,
    terms: [],
    sentence: " Computational and experimental laboratory-based hands-on introduction to the fundamentals and applications of sheet forming processes.",
    prereqs: [
    ["ISE 2500"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5525",
    dept: "ISE",
    number: "5525",
    name: "Industrial Robotics",
    credits: 2,
    terms: [],
    sentence: " Operating principles, selection, use of proximity and optical sensors; switches, relays, actuators; electric motors and controls; electro-pneumatic devices; integration of these for automated industrial systems.",
    prereqs: [
    ["ISE 1182"],
    ["ISE 1182"],
    ["ISE 1182"],
    ["ISE 1282"],
    ["ISE 1282"],
    ["ISE 1282"],
    ["ISE 1188"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5540",
    dept: "ISE",
    number: "5540",
    name: "Polymer Processing Fundamentals",
    credits: 3,
    terms: [],
    sentence: " Applies fundamentals of transport phenomena and polymer constitutive equations to the analysis of manufacturing of plastic components.",
    prereqs: [],
    concur: [
    ["ISE 2251"],
    ["ISE 4510"]
  ],
    notes: ""
  },
  {
    id: "ISE 5550",
    dept: "ISE",
    number: "5550",
    name: "Principles of Precision Engineering",
    credits: 3,
    terms: [],
    sentence: " Principles of precision engineering with focus on design and performance of precision machinery, machine tool metrology, and precision manufacturing processes.",
    prereqs: [
    ["ISE 2010"],
    ["ISE 2020"],
    ["ISE 2040"],
    ["ISE 752"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5555",
    dept: "ISE",
    number: "5555",
    name: "Manufacturing Processes and Machine Tools",
    credits: 3,
    terms: [],
    sentence: " Focuses on machining processes: cutting, grinding and milling, including descriptive and analytical treatment of machining processes, equipment, computer control and integrated systems.",
    prereqs: [
    ["ISE 651"],
    ["ISE 611"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5570",
    dept: "ISE",
    number: "5570",
    name: "Manufacturing Data Processing and Analysis",
    credits: 3,
    terms: [],
    sentence: " Project-based introduction to manufacturing data streams and methods to process and analyze them towards solving manufacturing problems in process planning and quality control.",
    prereqs: [
    ["ISE 1222"],
    ["ISE 1223"],
    ["ISE 1224"],
    ["ISE 2021"],
    ["ISE 3470"],
    ["ISE 3450"],
    ["ISE 3460"],
    ["ISE 5194"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5600",
    dept: "ISE",
    number: "5600",
    name: "Principles of Occupational Biomechanics and Ergonomics",
    credits: 3,
    terms: [],
    sentence: " Introduction to anatomical, physiological, and biomechanical bases of physical ergonomics; workplace assessment techniques; biomechanical modeling; bioinstrumentation; preparation for advanced topics and research.",
    prereqs: [
    ["ISE 660"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5610",
    dept: "ISE",
    number: "5610",
    name: "Ergonomics in the Product Design Process",
    credits: 3,
    terms: [],
    sentence: " Provides an understanding of where and how ergonomic principles are incorporated into the design and evaluation of consumer products.",
    prereqs: [
    ["ISE 3600"],
    ["ISE 3700"],
    ["ISE 769"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5620",
    dept: "ISE",
    number: "5620",
    name: "Risk Assessment Tools for Occupational Musculoskeletal Disorders",
    credits: 3,
    terms: [],
    sentence: " Provides an understanding and working knowledge of tools used to assess risk of occupationally related musculoskeletal disorders.",
    prereqs: [
    ["ISE 3600"],
    ["ISE 761"],
    ["ISE 761"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5640",
    dept: "ISE",
    number: "5640",
    name: "Occupational Safety: Analysis and Design of Work Environments",
    credits: 3,
    terms: [],
    sentence: " Introduction to workplace hazards and controls for engineers and others who design workplaces, equipment, tools, and processes.",
    prereqs: [
    ["ISE 664"],
    ["ISE 665"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5650",
    dept: "ISE",
    number: "5650",
    name: "Introduction and Practical Experience in Ergonomics Research",
    credits: 1,
    terms: [],
    sentence: " Provides undergraduate students the opportunity to engage in applied ergonomics research in a group setting, and graduate students the opportunity to mentor and collaborate with undergraduates in research.",
    prereqs: [
    ["ISE 3470"],
    ["ISE 3600"],
    ["ISE 3700"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5683",
    dept: "ISE",
    number: "5683",
    name: "Fundamentals of Product Design Engineering Laboratory",
    credits: 1,
    terms: [],
    sentence: " An optional laboratory to go with ISE/ME 5682.01, giving students hands-on experience with the product design process from conducting user research through constructing prototypes.",
    prereqs: [],
    concur: [
    ["ISE 5682"],
    ["ISE 5682"],
    ["ISE 5682"],
    ["ISE 5682"],
    ["ISE 5682"],
    ["ISE 5682"]
  ],
    notes: ""
  },
  {
    id: "ISE 5700",
    dept: "ISE",
    number: "5700",
    name: "Introduction to Cognitive Systems Engineering",
    credits: 3,
    terms: [],
    sentence: " Human-centered design of consumer products, web sites and complex sociotechnical systems, including human-computer interaction and the design of decision support and distributed work systems.",
    prereqs: [
    ["ISE 3700"],
    ["ISE 770"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5710",
    dept: "ISE",
    number: "5710",
    name: "Behind Human Error: Safety and Complex Systems",
    credits: 3,
    terms: [],
    sentence: " Covers how complex systems fail and the human contribution to success and failure by studying actual disasters in diverse fields.",
    prereqs: [
    ["ISE 875"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5720",
    dept: "ISE",
    number: "5720",
    name: "Human Systems Integration",
    credits: 3,
    terms: [],
    sentence: " Concepts and methods for considering the human as part of the design and operation of any system, especially large scale systems and enterprises.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5740",
    dept: "ISE",
    number: "5740",
    name: "Cognitive Engineering Systems: Human-Centered Automation",
    credits: 3,
    terms: [],
    sentence: " Provides key concepts to make autonomous systems, robots, and artificially intelligent systems team players with responsible people.",
    prereqs: [
    ["ISE 771"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5745",
    dept: "ISE",
    number: "5745",
    name: "Human-Centered Machine Learning",
    credits: 3,
    terms: [],
    sentence: " Design and analysis of ML for human users. Topics include introductory machine learning, interactive ML, ethics in AI, human-agent interaction, and human-subject research.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5760",
    dept: "ISE",
    number: "5760",
    name: "Visual Analytics and Sensemaking",
    credits: 3,
    terms: [],
    sentence: " Students learn about information visualization techniques that help people analyze massive amounts of digital data to combat overload and aid sensemaking, with applications in retail and financial decision making, logistics, information systems, manufacturing, healthcare, energy, cybersecurity and social networks.",
    prereqs: [
    ["ISE 773"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5770",
    dept: "ISE",
    number: "5770",
    name: "Cognitive Engineering Systems: Design and Evaluation",
    credits: 3,
    terms: [],
    sentence: " Evaluation of product and system design to assess usefulness and usability; advanced design concepts for consumer products, web sites, educational tools and information retrieval systems.",
    prereqs: [
    ["ISE 772"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5800",
    dept: "ISE",
    number: "5800",
    name: "Advanced Project Management",
    credits: 3,
    terms: [],
    sentence: " Advanced project management engineering techniques to implement and optimize project-driven change; communication and leadership strategies critical to successful optimization of a firm's processes and systems.",
    prereqs: [
    ["ISE 3800"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5810",
    dept: "ISE",
    number: "5810",
    name: "Lean Sigma Foundations",
    credits: 4,
    terms: [],
    sentence: " Comprehensive foundation course required to complete Green and Black Belt Certification.",
    prereqs: [
    ["ISE 4120"],
    ["ISE 2024"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5811",
    dept: "ISE",
    number: "5811",
    name: "Lean Sigma Certification Project (Part I)",
    credits: 3,
    terms: [],
    sentence: " Focuses on industry-sponsored LeanSigma DMAIC Certification Projects; Project Selection, Definition and Measure are covered in this course.",
    prereqs: [
    ["ISE 5810"],
    ["ISE 4120"],
    ["ISE 1201"],
    ["ISE 2601"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5812",
    dept: "ISE",
    number: "5812",
    name: "LeanSigma Certification Project II",
    credits: 3,
    terms: [],
    sentence: " Focuses on industry-sponsored Lean Sigma DMAIC Certification Projects; Improve and Control are the phases covered in this course.",
    prereqs: [
    ["ISE 5811"],
    ["ISE 1201"],
    ["ISE 2601"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5813",
    dept: "ISE",
    number: "5813",
    name: "Integrated Lean Six Sigma Capstone Certification Experience",
    credits: 4,
    terms: [],
    sentence: " Capstone Senior Design alternative focusing on industry-sponsored Lean Six Sigma DMAIC Certification Projects.",
    prereqs: [
    ["ISE 5810"],
    ["ISE 4120"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5820",
    dept: "ISE",
    number: "5820",
    name: "Systems Thinking in Engineering and Design",
    credits: 3,
    terms: [],
    sentence: " Concepts and heuristics in systems thinking and complex systems analysis and how these concepts apply to engineering and design projects.",
    prereqs: [
    ["ISE 688"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5830",
    dept: "ISE",
    number: "5830",
    name: "Decision Analysis",
    credits: 3,
    terms: [],
    sentence: " Introduction to decision analysis, modern utility theory and risk modeling, Bayesian inference, value of information, multiattribute decision modeling, and application to engineering decisions under uncertainty.",
    prereqs: [
    ["ISE 2040"],
    ["ISE 2040"],
    ["ISE 3470"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "ISE 5870",
    dept: "ISE",
    number: "5870",
    name: "Resilience Engineering",
    credits: 3,
    terms: [],
    sentence: " Provides a comprehensive treatment of Resilience Engineering tools to measure, manage, and design complex systems to be resilient in the face of surprising disrupting events.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 1100",
    dept: "BUSADM",
    number: "1100",
    name: "College of Business Survey",
    credits: 0,
    terms: [],
    sentence: " Academic requirements; policies procedures and resources; student rights and responsibilities; academic areas of specialization; careers in accounting and business administration.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 1200",
    dept: "BUSADM",
    number: "1200",
    name: "College of Business Survey II",
    credits: 1,
    terms: [],
    sentence: " Students will develop a comprehensive academic, professional/career, and personal plan for success that incorporates: self-knowledge and individual interests, exploring a specialization, a 4-year graduation plan, short term and long term goals for gaining leadership and work experience, and identifying opportunities to enhance the college experience.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 2600",
    dept: "BUSADM",
    number: "2600",
    name: "Career Exploration",
    credits: 1,
    terms: [],
    sentence: " Through guided reflection, interactive workshops, and meaningful engagement with Fisher faculty, alumni, and business professionals, students will explore diverse industries, functional roles, and career pathways available to business graduates.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 2601",
    dept: "BUSADM",
    number: "2601",
    name: "Career Foundations",
    credits: 1,
    terms: [],
    sentence: " Explore the mindsets, strategies, and professional skills that drive successful careers in business while broadening your understanding of different career pathways. Engage directly with industry professionals through meaningful, interactive experiences and focus on developing self-awareness, strong communication skills, and career readiness.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 2798",
    dept: "BUSADM",
    number: "2798",
    name: "Study Tour: International",
    credits: 2,
    terms: [],
    sentence: " Designed to provide an orientation to students who will embark on an international experience and once there, will enable students across countries to learn from each other.",
    prereqs: [
    ["BUSADM 498"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 3360",
    dept: "BUSADM",
    number: "3360",
    name: "Elevate 360: A Practical Guide to Career and Life Success",
    credits: 3,
    terms: [],
    sentence: " Imagine if you could take a class that teaches you all the practical things you're going to learn after college, but before you leave college...that's the idea behind Impact 360: A Practical Guide to Career and Life Success. This course aims to help students get a jumpstart on their careers and lives after college by teaching them the practical skills for how to achieve holistic life success.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 3533",
    dept: "BUSADM",
    number: "3533",
    name: "Technology Entrepreneurship",
    credits: 3,
    terms: [],
    sentence: " Examine the innovative transformation of knowledge captured in scientific discoveries into conceptual, viable, commercial products and services.",
    prereqs: [
    ["BUSADM 3510"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 3760",
    dept: "BUSADM",
    number: "3760",
    name: "Exploring Culture in International Environments",
    credits: 1,
    terms: [],
    sentence: " Through individual reflections, activities, and discussions, students participating in Fisher's International Student Exchange Program will be challenged to view knowledge and experiences from multiple perspectives.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 3890H",
    dept: "BUSADM",
    number: "3890H",
    name: "Honors Seminar",
    credits: 3,
    terms: [],
    sentence: " Honors seminar for students enrolled in the Business Administration Honors Program.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 4189",
    dept: "BUSADM",
    number: "4189",
    name: "Advanced Field Study: Doing Business in a Global Region",
    credits: 1,
    terms: [],
    sentence: " Required pre-departure component of Fisher College of Business Global Internship Program for Undergraduates.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 4191",
    dept: "BUSADM",
    number: "4191",
    name: "Professional Experience in Business",
    credits: 0,
    terms: [],
    sentence: " Students complete a co-op or internship assignment in private industry or for a government agency; assignment is supervised by the employer and monitored and evaluated by the course coordinator.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 4890H",
    dept: "BUSADM",
    number: "4890H",
    name: "Honors Seminar",
    credits: 2,
    terms: [],
    sentence: " Seminar on current business topics for students enrolled in the Business Administration Honors Programs. Topics may vary.",
    prereqs: [
    ["BUSADM 3890H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSADM 5797",
    dept: "BUSADM",
    number: "5797",
    name: "Study at a Foreign Institution",
    credits: 0,
    terms: [],
    sentence: " An opportunity for students to study at a foreign institution and receive Ohio State credit for that work. (Note: listed under Academic Career \"Graduate\" in Class Search, but prereq restricts it to undergraduate BSBA students; included here per that eligibility.)",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 2320",
    dept: "BUSOBA",
    number: "2320",
    name: "Decision Sciences: Statistical Techniques",
    credits: 0,
    terms: [],
    sentence: " Examination of the use of statistical techniques in managerial decision-making processes; statistical inference, simple and multiple regression, time series.",
    prereqs: [],
    concur: [
    ["BUSOBA 2002"]
  ],
    notes: ""
  },
  {
    id: "BUSOBA 2321",
    dept: "BUSOBA",
    number: "2321",
    name: "Business Analytics",
    credits: 0,
    terms: [],
    sentence: " Examination of the use of business analytic models used in managerial decision making processes. Emphasis on formulation and interpretation of models; supported by spreadsheet based software.",
    prereqs: [
    ["BUSOBA 1131"],
    ["BUSOBA 1151"],
    ["BUSOBA 1113"],
    ["BUSOBA 2111"],
    ["BUSOBA 2001"],
    ["BUSOBA 2002"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3130",
    dept: "BUSOBA",
    number: "3130",
    name: "Foundations of Operations Management",
    credits: 3,
    terms: [],
    sentence: " Introduction to operations & supply chain management to improve organizations; specifically analyzing, controlling & improving resources & processes to increase productivity, generate value-added output & meet business strategic & tactical goals.",
    prereqs: [
    ["BUSOBA 1116"],
    ["BUSOBA 1130"],
    ["BUSOBA 1148"],
    ["BUSOBA 2001"],
    ["BUSOBA 3230"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3230",
    dept: "BUSOBA",
    number: "3230",
    name: "Introduction to Operations Management: Improving Competitiveness in Organizations",
    credits: 3,
    terms: [],
    sentence: " Introduction to operations and supply chain management to improve manufacturing and service organizations; analyzing, controlling and improving resources and processes to increase productivity, generate value-added output and meet business goals.",
    prereqs: [
    ["BUSOBA 2001"],
    ["BUSOBA 2002"],
    ["BUSOBA 1430"],
    ["BUSOBA 1151"],
    ["BUSOBA 1154"],
    ["BUSOBA 3130"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3230H",
    dept: "BUSOBA",
    number: "3230H",
    name: "Introduction to Operations Management: Improving Competitiveness in Organizations (Honors)",
    credits: 3,
    terms: [],
    sentence: " Introduction to operations and supply chain management to improve manufacturing and service organizations; analyzing, controlling and improving resources and processes to increase productivity, generate value-added output and meet business goals.",
    prereqs: [
    ["BUSOBA 630H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3243H",
    dept: "BUSOBA",
    number: "3243H",
    name: "Digital Product Management and Innovation",
    credits: 3,
    terms: [],
    sentence: " This course introduces the principles and practices of digital product management. This multidisciplinary field combines strategy, design, and technology to create and manage digital products such as mobile apps, websites, and software.",
    prereqs: [
    ["BUSOBA 3230"],
    ["BUSOBA 3230H"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3331",
    dept: "BUSOBA",
    number: "3331",
    name: "Tactics in Analytical Discovery",
    credits: 3,
    terms: [],
    sentence: " Understand how organizations can successfully collect, organize, manipulate, use and present data.",
    prereqs: [
    ["BUSOBA 2001"],
    ["BUSOBA 2002"],
    ["BUSOBA 2111"],
    ["BUSOBA 1131"],
    ["BUSOBA 1151"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3332",
    dept: "BUSOBA",
    number: "3332",
    name: "Business Analytics: Application of Predictive Analytics to Business Data",
    credits: 3,
    terms: [],
    sentence: " Build and test predictive models that move from data to parameter estimation.",
    prereqs: [
    ["BUSOBA 2001"],
    ["BUSOBA 2002"],
    ["BUSOBA 3202"],
    ["BUSOBA 2320"],
    ["BUSOBA 2321"],
    ["BUSOBA 2111"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 3333",
    dept: "BUSOBA",
    number: "3333",
    name: "Business Analytics: Applied Prescriptive Analytics",
    credits: 3,
    terms: [],
    sentence: " Moving from estimating model parameters, to making data-informed business decisions.",
    prereqs: [
    ["BUSOBA 2001"],
    ["BUSOBA 2001"],
    ["BUSOBA 2002"],
    ["BUSOBA 3202"],
    ["BUSOBA 2320"],
    ["BUSOBA 2321"],
    ["BUSOBA 2111"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4193",
    dept: "BUSOBA",
    number: "4193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: " Individual study projects in selected areas in Management Sciences.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4232",
    dept: "BUSOBA",
    number: "4232",
    name: "Operations Planning and Control",
    credits: 3,
    terms: [],
    sentence: " Review of a Planning and Control System. Theoretical frameworks and utilization of techniques to execute strategic and tactical goals to increase productivity and effectiveness of forecasting, scheduling, and inventory and capacity resources.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 330"],
    ["BUSOBA 2321"],
    ["BUSOBA 331"],
    ["BUSOBA 3230"],
    ["BUSOBA 630"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2291"],
    ["BUSOBA 2292"],
    ["BUSOBA 499"],
    ["BUSOBA 732"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4233",
    dept: "BUSOBA",
    number: "4233",
    name: "Operations Management Analytics",
    credits: 3,
    terms: [],
    sentence: " A study of data and modeling tools used in operations management. Emphasis is spreadsheet and database applications.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 330"],
    ["BUSOBA 2321"],
    ["BUSOBA 331"],
    ["BUSOBA 3230"],
    ["BUSOBA 630"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2291"],
    ["BUSOBA 2292"],
    ["BUSOBA 499"],
    ["BUSOBA 733"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4234",
    dept: "BUSOBA",
    number: "4234",
    name: "Service Operations",
    credits: 3,
    terms: [],
    sentence: " Surveys a broad framework of key operations management challenges, while also focusing on a broad variety of different services via in-depth case studies.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 330"],
    ["BUSOBA 2321"],
    ["BUSOBA 331"],
    ["BUSOBA 3230"],
    ["BUSOBA 630"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2291"],
    ["BUSOBA 2292"],
    ["BUSOBA 499"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4239",
    dept: "BUSOBA",
    number: "4239",
    name: "Managing Process Improvement",
    credits: 3,
    terms: [],
    sentence: " Describes the basics of establishing and managing a Lean process in service, office and manufacturing operations. We will look at how we can add value in delivery of goods or services to the customer.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 330"],
    ["BUSOBA 2321"],
    ["BUSOBA 331"],
    ["BUSOBA 3230"],
    ["BUSOBA 630"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2291"],
    ["BUSOBA 2292"],
    ["BUSOBA 499"],
    ["BUSOBA 739"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4240",
    dept: "BUSOBA",
    number: "4240",
    name: "Management of Technology",
    credits: 3,
    terms: [],
    sentence: " This course explores technology and innovation from an operational perspective, emphasizing their role in driving competitive advantage. Students will analyze strategies, processes, and digital tools that enhance innovation capability, while strengthening their skills in strategic thinking, problem solving, and collaboration for effective operational leadership.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 2321"],
    ["BUSOBA 3230"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2291"],
    ["BUSOBA 2292"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4250",
    dept: "BUSOBA",
    number: "4250",
    name: "Six Sigma Principles",
    credits: 3,
    terms: [],
    sentence: " Designed to familiarize students with the Six Sigma process improvement methodology and to provide them an opportunity to practice using Six Sigma Black Belt tools.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 2321"],
    ["BUSOBA 3230"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2292"],
    ["BUSOBA 3230"],
    ["BUSOBA 2040"],
    ["BUSOBA 3440"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4251",
    dept: "BUSOBA",
    number: "4251",
    name: "Six Sigma Projects",
    credits: 3,
    terms: [],
    sentence: " Six Sigma Projects class.",
    prereqs: [
    ["BUSOBA 4250"],
    ["BUSOBA 710"],
    ["BUSOBA 711"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4253",
    dept: "BUSOBA",
    number: "4253",
    name: "Sustainable Operations",
    credits: 3,
    terms: [],
    sentence: " There is increasing pressure on businesses to pay more attention to the environmental consequences of the raw materials they source, processes they deploy, and the products and services they offer. Recognizing that operations are at the core of any sustainable enterprise, this course addresses issues related to sustainable operations in three modules.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 2321"],
    ["BUSOBA 3230"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2292"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4262",
    dept: "BUSOBA",
    number: "4262",
    name: "Purchasing Strategy",
    credits: 3,
    terms: [],
    sentence: " Strategic purchasing is a methodology used in many businesses to realize the greatest amount of benefit to the company while still effectively managing the costs associated with the acquisition of raw materials and operational components.",
    prereqs: [
    ["BUSOBA 2320"],
    ["BUSOBA 330"],
    ["BUSOBA 2321"],
    ["BUSOBA 331"],
    ["BUSOBA 3230"],
    ["BUSOBA 630"],
    ["BUSOBA 2200"],
    ["BUSOBA 2300"],
    ["BUSOBA 2291"],
    ["BUSOBA 2292"],
    ["BUSOBA 499"],
    ["BUSOBA 736"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4331",
    dept: "BUSOBA",
    number: "4331",
    name: "Tactics in Analytical Discovery",
    credits: 3,
    terms: [],
    sentence: " Understand how organizations can successfully collect, organize, manipulate, use and present data.",
    prereqs: [
    ["BUSOBA 2001"],
    ["BUSOBA 2002"],
    ["BUSOBA 2111"],
    ["BUSOBA 1131"],
    ["BUSOBA 1151"],
    ["BUSOBA 3331"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSOBA 4998",
    dept: "BUSOBA",
    number: "4998",
    name: "Undergraduate Research in Management Sciences",
    credits: 2,
    terms: [],
    sentence: " Undergraduate Research in Management Sciences for non-honors students.",
    prereqs: [
    ["BUSOBA 2291"],
    ["BUSOBA 499"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSFIN 1200",
    dept: "BUSFIN",
    number: "1200",
    name: "Personal Finance",
    credits: 3,
    terms: [],
    sentence: " Introduction to the field of personal financial management and planning, focusing on the tools individuals and families employ to manage their financial affairs.",
    prereqs: [
    ["BUSFIN 220"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSFIN 3120",
    dept: "BUSFIN",
    number: "3120",
    name: "Foundations of Finance",
    credits: 3,
    terms: [],
    sentence: " Develops skills related to Time Value of Money, Risk and Return with applications in business and personal finance.",
    prereqs: [
    ["BUSFIN 2000"],
    ["BUSFIN 1116"],
    ["BUSFIN 2001"],
    ["BUSFIN 3220"]
  ],
    concur: [],
    notes: ""
  },
  {
    id: "BUSFIN 3220",
    dept: "BUSFIN",
    number: "3220",
    name: "Business Finance",
    credits: 0,
    terms: [],
    sentence: " Introductory finance class which allows students develop the skills to understand how financial managers make value-maximizing decisions for their firms.",
    prereqs: [],
    concur: [
    ["BUSFIN 2300"],
    ["BUSFIN 620"]
  ],
    notes: ""
  },
  {
    id: "BUSFIN 3222",
    dept: "BUSFIN",
    number: "3222",
    name: "Foundations of Investments",
    credits: 3,
    terms: [],
    sentence: " Basic principles and methods of investment for non-Business majors.",
    prereqs: [
    ["BUSFIN 3120"],
    ["BUSFIN 2000"],
    ["BUSFIN 4221"]
  ],
    concur: [],
    notes: ""
  },


  {
    id: "ECON 1100.01",
    dept: "ECON",
    number: "1100.01",
    name: "Current Economic Events in Historical Perspective",
    credits: 3,
    terms: [],
    sentence: " Introduction to economic analysis; historical background for interpreting current economic events. Discuss current issues in a historical context, including topics like taxes and unemployment. A one-course introduction to economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 1100.02",
    dept: "ECON",
    number: "1100.02",
    name: "Freakonomics",
    credits: 3,
    terms: [],
    sentence: " Discuss current social problems and issues within an economics framework, including topics such as job discrimination and integration. A one-course introduction to economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2001.01",
    dept: "ECON",
    number: "2001.01",
    name: "Principles of Microeconomics",
    credits: 3,
    terms: [],
    sentence: " Introduction to economic theory: supply and demand for goods, services, and factor inputs; market structure; international trade, the distribution of income. First required course for students planning to take 4000-level courses in Econ.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2001.03H",
    dept: "ECON",
    number: "2001.03H",
    name: "Principles of Microeconomics (Honors)",
    credits: 3,
    terms: [],
    sentence: " An advanced introduction to economic theory: supply and demand for goods, services, and factor inputs; market structure; international trade, the distribution of income. First required course for students planning to take 4000-level courses in econ.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2002.01",
    dept: "ECON",
    number: "2002.01",
    name: "Principles of Macroeconomics",
    credits: 3,
    terms: [],
    sentence: " Introduction to the theory of national income determination; economic fluctuations; money; government policy; international economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2002.03H",
    dept: "ECON",
    number: "2002.03H",
    name: "Principles of Macroeconomics (Honors)",
    credits: 3,
    terms: [],
    sentence: " An advanced introduction to the theory of national income determination; economic fluctuations; money; government policy; international economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2367.02",
    dept: "ECON",
    number: "2367.02",
    name: "Current Economic Issues in the United States",
    credits: 3,
    terms: [],
    sentence: " Study of problems currently facing the U.S. economy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 3048",
    dept: "ECON",
    number: "3048",
    name: "Ethics and Social Responsibility in Economic Life",
    credits: 3,
    terms: [],
    sentence: " Examines the role of ethical norms and social constraints in determining economic outcomes.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 3400",
    dept: "ECON",
    number: "3400",
    name: "The Analysis and Display of Data",
    credits: 3,
    terms: [],
    sentence: " Introduction to the analysis of data. Topics include sampling, data collection, probability, inference, random variables, display of data, correlation, and analysis of variance. This course does not count toward a course elective for Econ majors.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 3820",
    dept: "ECON",
    number: "3820",
    name: "The Economics of Gender in Labor Markets",
    credits: 3,
    terms: [],
    sentence: " Application of economic analysis to the evolution and economic condition of women and men in the labor force; occupational distribution and segregation; wage gap; the glass ceiling.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4001.01",
    dept: "ECON",
    number: "4001.01",
    name: "Intermediate Microeconomic Theory",
    credits: 3,
    terms: [],
    sentence: " Theory of consumer behavior; theory of the firm; costs and production; factor price determination; general equilibrium.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4001.02",
    dept: "ECON",
    number: "4001.02",
    name: "Intermediate Microeconomic Theory (Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: " Theory of consumer behavior; theory of the firm; costs and production; factor price determination; general equilibrium. Designates a calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4001.03",
    dept: "ECON",
    number: "4001.03",
    name: "Intermediate Microeconomic Theory (Advanced Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: " Theory of consumer behavior; theory of the firm; costs and production; factor price determination; general equilibrium. Designates an advanced calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4002.01",
    dept: "ECON",
    number: "4002.01",
    name: "Intermediate Macroeconomic Theory",
    credits: 3,
    terms: [],
    sentence: " Analysis of the determinants of national output; income and employment levels; theory of economic growth and progressive equilibrium in an economy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4002.02",
    dept: "ECON",
    number: "4002.02",
    name: "Intermediate Macroeconomic Theory (Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: " Analysis of the determinants of national output; income and employment levels; theory of economic growth and progressive equilibrium in an economy. Designates a calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4002.03",
    dept: "ECON",
    number: "4002.03",
    name: "Intermediate Macroeconomic Theory (Advanced Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: " Analysis of the determinants of national output; income and employment levels; theory of economic growth and progressive equilibrium in an economy. Designates an advanced calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4050",
    dept: "ECON",
    number: "4050",
    name: "Experimental Economics",
    credits: 3,
    terms: [],
    sentence: " Introduction to economics as an experimental social science. Students participate in and study results of economic experiments dealing with markets, individual decision making, and a broad array of game theoretic economic models.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4130",
    dept: "ECON",
    number: "4130",
    name: "World Economic Development in Historical Perspective",
    credits: 3,
    terms: [],
    sentence: " A survey of economic development from the middle ages through the 20th century, emphasizing Europe, Asia and Africa.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4140",
    dept: "ECON",
    number: "4140",
    name: "Economic History of the Americas",
    credits: 3,
    terms: [],
    sentence: " A survey of economic development in the Americas emphasizing the United States from colonial times to the 20th century.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4191",
    dept: "ECON",
    number: "4191",
    name: "Internship",
    credits: 1,
    terms: [],
    sentence: " Allows students to apply knowledge from their economics courses and learn from hands on experience in approved positions. Applies toward an Econ 4000-level elective; 3 credit hours maximum toward major.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4200",
    dept: "ECON",
    number: "4200",
    name: "Money and Banking",
    credits: 3,
    terms: [],
    sentence: " Organization, operation, and economic significance of our monetary and banking system; special reference to current conditions and problems. Students intending to take 5200 are encouraged to take it instead.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4300",
    dept: "ECON",
    number: "4300",
    name: "Government Finance in the American Economy",
    credits: 3,
    terms: [],
    sentence: " Analysis of fiscal institutions and decision-making in the public sector of the American economy; budget planning and execution; taxation, debt, and fiscal policy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4310",
    dept: "ECON",
    number: "4310",
    name: "Local Public Finance",
    credits: 3,
    terms: [],
    sentence: " Financing public services by state/local governments. The fiscal relationship between state/local governments and the federal government. Apply techniques of economic analysis to policy issues.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4400",
    dept: "ECON",
    number: "4400",
    name: "Elementary Econometrics",
    credits: 3,
    terms: [],
    sentence: " Basic linear regression analysis with applications; hypothesis testing and model specification.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4537",
    dept: "ECON",
    number: "4537",
    name: "Middle Eastern Economic Development",
    credits: 3,
    terms: [],
    sentence: " Introduction to current economic issues facing the Middle East; similarities and differences in Middle Eastern countries' growth, inflation, unemployment, fiscal and monetary policy, imports, exports, foreign debt and exchange rate policy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4553",
    dept: "ECON",
    number: "4553",
    name: "Economics of Population",
    credits: 3,
    terms: [],
    sentence: " Using economic principles to analyze population growth, fertility, mortality, mating, dating, marriage, teen pregnancy, divorce, and migration.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4560",
    dept: "ECON",
    number: "4560",
    name: "Cooperation and Conflict in the Global Economy",
    credits: 3,
    terms: [],
    sentence: " The economic, social, and political bases for and responses to increasing global economic integration.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4597.01",
    dept: "ECON",
    number: "4597.01",
    name: "Issues of the Underground Economy",
    credits: 3,
    terms: [],
    sentence: " Focuses on the informal sector of the underground economy: illegal drugs, arms sales and human trafficking. Applies economic reasoning.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4700",
    dept: "ECON",
    number: "4700",
    name: "Government and Business",
    credits: 3,
    terms: [],
    sentence: " Economic and legal aspects of government regulation of business in the United States; philosophies and concepts of public control; contemporary problems. Students planning on taking 5700 are encouraged to take it instead.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4800",
    dept: "ECON",
    number: "4800",
    name: "Labor Economics and Industrial Relations",
    credits: 3,
    terms: [],
    sentence: " Survey of the field of labor economics; trade unionism, collective bargaining; wage determination, employment, unemployment; labor legislation. Students planning on taking 5850 are encouraged to take it instead.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4830",
    dept: "ECON",
    number: "4830",
    name: "Economics of Sports",
    credits: 3,
    terms: [],
    sentence: " Analysis of economic and business aspects of sports teams and their strategic interactions in sports markets.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4831",
    dept: "ECON",
    number: "4831",
    name: "Sports Data Analytics and Economic Analysis",
    credits: 3,
    terms: [],
    sentence: " An introduction to basic data analysis methods used by economists to explain economic reasoning in the sport industry and associated markets.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4960H",
    dept: "ECON",
    number: "4960H",
    name: "Honors Seminar in Economics",
    credits: 3,
    terms: [],
    sentence: " Prepares students to write an undergraduate thesis; group discussion of research problems, methods, and strategies.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4998",
    dept: "ECON",
    number: "4998",
    name: "Undergraduate Research in Economics",
    credits: 1,
    terms: [],
    sentence: " Directed research for an Economics major; collection and analysis of data and information for a research project.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4998H",
    dept: "ECON",
    number: "4998H",
    name: "Honors Research in Economics",
    credits: 1,
    terms: [],
    sentence: " Directed research for an economics major; collection and analysis of data and information for a research project.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4999",
    dept: "ECON",
    number: "4999",
    name: "Undergraduate Thesis Research",
    credits: 1,
    terms: [],
    sentence: " A program of study arranged for each student, with individual conferences and reports, to write a senior thesis. At least two semesters are required of candidates for the degree with distinction in economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4999H",
    dept: "ECON",
    number: "4999H",
    name: "Honors Thesis Research",
    credits: 1,
    terms: [],
    sentence: " A program of study arranged for each student, with individual conferences and reports, to write a senior thesis. At least 2 sems required for distinction in econ. Failure to receive a mark of S in this course is a disqualification for special honors.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5001",
    dept: "ECON",
    number: "5001",
    name: "Game Theory in Economics",
    credits: 3,
    terms: [],
    sentence: " Analysis of behavior in strategic situations - when a person or firm's best action depends on what others do.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5130",
    dept: "ECON",
    number: "5130",
    name: "Economic History of Western Europe",
    credits: 4,
    terms: [],
    sentence: " Survey of economic development of Europe from pre-industrialization to current globalization. Emphasis on critical analysis of long-run factors in economic growth.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5140",
    dept: "ECON",
    number: "5140",
    name: "Economic History of the United States",
    credits: 4,
    terms: [],
    sentence: " General survey from discovery of America to present; European economic background; westward movement and its effects; development of economic institutions in the United States.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5193",
    dept: "ECON",
    number: "5193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: " Advanced readings in economics and related fields.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5261",
    dept: "ECON",
    number: "5261",
    name: "Financial Economics I",
    credits: 3,
    terms: [],
    sentence: " Examination of the evolution of and economic issues facing financial markets, financial institutions, and financial market participants. Does not count as course credit towards the completion of a business major.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5410",
    dept: "ECON",
    number: "5410",
    name: "Econometrics I",
    credits: 3,
    terms: [],
    sentence: " The general linear regression model; multiple correlation, path analysis, analysis of variance and tests of significance; specification errors.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5420",
    dept: "ECON",
    number: "5420",
    name: "Econometrics II",
    credits: 3,
    terms: [],
    sentence: " Discrete choice models, panel data, endogeneity, instrumental variables, and systems of equations; stationary and nonstationary time series; applications in various fields of economics. Continuation of 5410.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5660",
    dept: "ECON",
    number: "5660",
    name: "Financial Aspects of International Trade",
    credits: 3,
    terms: [],
    sentence: " International payments and receipts; foreign exchange markets; balance-of-payments adjustment under different monetary systems; macroeconomic policy; international monetary reforms; foreign investments; multinational corporations.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5700",
    dept: "ECON",
    number: "5700",
    name: "Industrial Organization",
    credits: 3,
    terms: [],
    sentence: " Nature, role, and regulation of competition; market structure and social performance; antitrust laws; current economic, legal, and policy problems in the antitrust area.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5720",
    dept: "ECON",
    number: "5720",
    name: "Comparative Institutional Analysis of Firms and Markets",
    credits: 3,
    terms: [],
    sentence: " Applications of economic analysis to industrial organizations including the firm's internal incentive structure, labor markets, and financial institutions, of major market economies such as U.S., and Japan from comparative perspectives.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5850",
    dept: "ECON",
    number: "5850",
    name: "Labor Economics",
    credits: 3,
    terms: [],
    sentence: " Advanced study of the labor market including labor demand and supply, wage determination, and unemployment.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1350.01",
    dept: "STAT",
    number: "1350.01",
    name: "Elementary Statistics",
    credits: 3,
    terms: [],
    sentence: " Introduction to probability and statistics, experiments, and sampling, data analysis and interpretation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1350.02",
    dept: "STAT",
    number: "1350.02",
    name: "Elementary Statistics (Online)",
    credits: 3,
    terms: [],
    sentence: " Introduction to probability and statistics, experiments, and sampling, data analysis and interpretation. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1430.01",
    dept: "STAT",
    number: "1430.01",
    name: "Statistics for the Business Sciences",
    credits: 4,
    terms: [],
    sentence: " Fundamentals of probability and statistics: Data collection and summaries, random variables, simple linear regression, two-way tables, conditional probability, sampling distributions, confidence intervals, hypothesis tests, analysis of variance. In-person recitation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1430.02",
    dept: "STAT",
    number: "1430.02",
    name: "Statistics for the Business Sciences (Online)",
    credits: 4,
    terms: [],
    sentence: " Fundamentals of probability and statistics: Data collection and summaries, random variables, simple linear regression, two-way tables, conditional probability, sampling distributions, confidence intervals, hypothesis tests, analysis of variance. Partly or fully offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1430H",
    dept: "STAT",
    number: "1430H",
    name: "Statistics for the Business Sciences (Honors)",
    credits: 4,
    terms: [],
    sentence: " Calculus-based fundamentals of probability and statistics: Data collection and summaries, random variables, simple linear regression, two-way tables, conditional probability, sampling distributions, confidence intervals, hypothesis tests, ANOVA.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1450.01",
    dept: "STAT",
    number: "1450.01",
    name: "Introduction to the Practice of Statistics",
    credits: 3,
    terms: [],
    sentence: " Algebra-based introduction to data analysis, experimental design, sampling, probability, inference, and linear regression. Emphasis on applications, statistical reasoning, and data analysis using statistical software.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1450.02",
    dept: "STAT",
    number: "1450.02",
    name: "Introduction to the Practice of Statistics (Online)",
    credits: 3,
    terms: [],
    sentence: " Algebra-based introduction to data analysis, experimental design, sampling, probability, inference, and linear regression. Emphasis on applications, statistical reasoning, and data analysis using statistical software. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1550",
    dept: "STAT",
    number: "1550",
    name: "Introduction to Statistical Reasoning",
    credits: 3,
    terms: [],
    sentence: " Introduction to statistical reasoning through data and application examples, including an introduction to coding in the R software; intended for students considering the Statistics major.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2450",
    dept: "STAT",
    number: "2450",
    name: "Introduction to Statistical Analysis I",
    credits: 3,
    terms: [],
    sentence: " Calculus-based introduction to statistical data analysis. Includes sampling, experimental design, probability, binomial and normal distributions, sampling distributions, inference, regression, ANOVA, two-way tables.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2450.01",
    dept: "STAT",
    number: "2450.01",
    name: "Introduction to Statistical Analysis I",
    credits: 3,
    terms: [],
    sentence: " Calculus-based introduction to statistical data analysis. Includes sampling, experimental design, probability, binomial and normal distributions, sampling distributions, inference, regression, ANOVA, two-way tables.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2450.02",
    dept: "STAT",
    number: "2450.02",
    name: "Introduction to Statistical Analysis I (Online)",
    credits: 3,
    terms: [],
    sentence: " Calculus-based introduction to statistical data analysis. Includes sampling, experimental design, probability, binomial and normal distributions, sampling distributions, inference, regression, ANOVA, two-way tables. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2460H",
    dept: "STAT",
    number: "2460H",
    name: "Introduction to Statistical Analysis II",
    credits: 3,
    terms: [],
    sentence: " Introductory statistics review; Simple linear regression; Multiple regression; One-way ANOVA review; Multiple comparisons; Two-way ANOVA; Bootstrap and permutation tests; Nonparametric tests; Intro to quality/process control; Intro time series.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2480",
    dept: "STAT",
    number: "2480",
    name: "Statistics for the Life Sciences",
    credits: 3,
    terms: [],
    sentence: " Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, hypothesis testing, linear regression and correlation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2480.01",
    dept: "STAT",
    number: "2480.01",
    name: "Statistics for the Life Sciences",
    credits: 3,
    terms: [],
    sentence: " Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, hypothesis testing, linear regression and correlation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2480.02",
    dept: "STAT",
    number: "2480.02",
    name: "Statistics for the Life Sciences (Online)",
    credits: 3,
    terms: [],
    sentence: " Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, hypothesis testing, linear regression and correlation. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2510.01",
    dept: "STAT",
    number: "2510.01",
    name: "Statistics in the Sports World",
    credits: 2,
    terms: [],
    sentence: " Ask and answer questions, debate issues and analyze data from your favorite sports using statistics. Statistical techniques include contingency tables, regression, estimation, confidence levels, testing. Cannot be used to replace a GE data anly course.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2510.02",
    dept: "STAT",
    number: "2510.02",
    name: "Statistics in the Environmental Sciences",
    credits: 2,
    terms: [],
    sentence: " Learn, discuss, and apply statistical methods to important problems in the environmental sciences. Statistical techniques will be introduced and illustrated through applications in climate change, pollution monitoring, and biodiversity/conservation. Cannot be used to replace a GE data anly course.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3201",
    dept: "STAT",
    number: "3201",
    name: "Introduction to Probability for Data Analytics",
    credits: 3,
    terms: [],
    sentence: " An introduction to probability and its role in statistical methods for data analytics. Equal emphasis is placed on analytical and simulation-based methods for quantifying uncertainty. Approaches to assessing the accuracy of simulation methods are discussed. Applications of probability and sampling to big-data settings are discussed.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3202",
    dept: "STAT",
    number: "3202",
    name: "Introduction to Statistical Inference for Data Analytics",
    credits: 4,
    terms: [],
    sentence: " Foundational inferential methods for learning about populations from samples, including point and interval estimation, and the formulation and testing of hypotheses. Statistical theory is introduced to justify the approaches. The course emphasizes challenges that arise when applying classical ideas to big data, partially through the use of computational and simulation techniques.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3301",
    dept: "STAT",
    number: "3301",
    name: "Statistical Modeling for Discovery I",
    credits: 3,
    terms: [],
    sentence: " Statistical models for data analysis in the linear regression framework. The challenges of developing meaningful models for data are explored, with emphasis on the model building process, the use of numerical and graphical diagnostics for assessing model fit, and interpretation and communication of results. Statistical foundations are introduced along with basic inferential techniques.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3302",
    dept: "STAT",
    number: "3302",
    name: "Statistical Modeling for Discovery II",
    credits: 3,
    terms: [],
    sentence: " This course investigates advanced statistical models for data analysis. The regression methods developed in Stat 3301 are extended to data settings with binary and multi-category outcomes. Commonly used statistical methods for exploring and analyzing multivariate data are introduced. Interpretation and communication of the results of analyses is emphasized.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3303",
    dept: "STAT",
    number: "3303",
    name: "Bayesian Analysis and Statistical Decision Making",
    credits: 3,
    terms: [],
    sentence: " Introduction to concepts and methods for making decisions in the presence of uncertainty. Topics include: formulation of decision problems and quantification of their components; learning about unknown features of a decision problem based on data via Bayesian analysis; characterizing and finding optimal decisions. Techniques and computational methods for practical implementation are presented.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3410",
    dept: "STAT",
    number: "3410",
    name: "Principles of Data Collection and Analysis",
    credits: 3,
    terms: [],
    sentence: " Principles of designing experiments; analysis of variance techniques for hypothesis testing; simultaneous confidence intervals; block designs; factorial experiments; random effects and mixed models; observational data.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3440",
    dept: "STAT",
    number: "3440",
    name: "Statistics in Quality",
    credits: 3,
    terms: [],
    sentence: " Descriptive statistics; introduction to probability; Bayes theorem; discrete and continuous random variables, expected value, probability distributions; interval estimation for means and proportions; hypotheses tests for means and proportions; least squares regression; one- and two-way anova; control charts; process capability indices.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3450",
    dept: "STAT",
    number: "3450",
    name: "Basic Statistics for Engineers",
    credits: 2,
    terms: [],
    sentence: " Introduction to probability; Normal distribution; Confidence intervals for means; Hypothesis tests for means; Multi-factor experiments; Experiments with blocking.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3450.01",
    dept: "STAT",
    number: "3450.01",
    name: "Basic Statistics for Engineers",
    credits: 2,
    terms: [],
    sentence: " Introduction to probability; Normal distribution; Confidence intervals for means; Hypothesis tests for means; Multi-factor experiments; Experiments with blocking.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3450.02",
    dept: "STAT",
    number: "3450.02",
    name: "Basic Statistics for Engineers (Online)",
    credits: 2,
    terms: [],
    sentence: " Introduction to probability; Normal distribution; Confidence intervals for means; Hypothesis tests for means; Multi-factor experiments; Experiments with blocking. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3460",
    dept: "STAT",
    number: "3460",
    name: "Principles of Statistics for Engineers",
    credits: 3,
    terms: [],
    sentence: " Introduction to probability, random variables, distributions, expected values; confidence intervals; paired and unpaired t-tests; linear regression; analysis of variance; blocked experiments; fractional factorial experiments; quality control charts.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3470.01",
    dept: "STAT",
    number: "3470.01",
    name: "Introduction to Probability and Statistics for Engineers",
    credits: 3,
    terms: [],
    sentence: " Introduction to probability, Bayes theorem; discrete and continuous random variables, expected value, probability distributions; point and interval estimation; hypotheses tests for means and proportions; least squares regression.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3470.02",
    dept: "STAT",
    number: "3470.02",
    name: "Introduction to Probability and Statistics for Engineers (Online)",
    credits: 3,
    terms: [],
    sentence: " Introduction to probability, Bayes theorem; discrete and continuous random variables, expected value, probability distributions; point and interval estimation; hypotheses tests for means and proportions; least squares regression. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4193",
    dept: "STAT",
    number: "4193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: " Individual conferences, assigned readings, and reports on minor investigations.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4194",
    dept: "STAT",
    number: "4194",
    name: "Group Studies",
    credits: 1,
    terms: [],
    sentence: " Designed to give groups of students an opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4201",
    dept: "STAT",
    number: "4201",
    name: "Introduction to Mathematical Statistics I",
    credits: 4,
    terms: [],
    sentence: " Basic concepts in mathematical statistics, including probability, discrete and continuous distributions and densities, mathematical expectation, functions of random variables, transformation techniques, sampling distributions, order statistics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4202",
    dept: "STAT",
    number: "4202",
    name: "Introduction to Mathematical Statistics II",
    credits: 4,
    terms: [],
    sentence: " Decision theory, point and interval estimation, Neyman-Pearson lemma, likelihood ratio tests, tests for means, variances, and proportions, nonparametric tests, regression, and ANOVA.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4301",
    dept: "STAT",
    number: "4301",
    name: "Advanced Statistical Inference",
    credits: 3,
    terms: [],
    sentence: " Advanced probability models and fundamentals of inferential procedures; distribution functions, moment generating functions, transformations, order statistics, large-sample theory, classical hypothesis testing, distribution-free hypothesis tests.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4302",
    dept: "STAT",
    number: "4302",
    name: "Computational Statistics",
    credits: 3,
    terms: [],
    sentence: " Topics in computational statistics using the R software, including design and execution of classical and modern Monte Carlo experiments, and statistical inference based on resampling methods, such as bootstrap, jackknife, and permutation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4620",
    dept: "STAT",
    number: "4620",
    name: "Introduction to Statistical Learning",
    credits: 2,
    terms: [],
    sentence: " The course provides an introduction to the principles of statistical learning and standard learning techniques for regression, classification, clustering, dimensionality reduction, and feature extraction.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4690",
    dept: "STAT",
    number: "4690",
    name: "Undergraduate Topics in Statistics",
    credits: 1,
    terms: [],
    sentence: " Various topics in Statistics and Data Analysis that are relevant to an undergraduate audience. Topics vary per offering. Repeatable to a maximum of 12 cr hrs or 3 completions.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4911",
    dept: "STAT",
    number: "4911",
    name: "Data Analytics Capstone",
    credits: 4,
    terms: [],
    sentence: " A teamwork-based synthesis of the Data Analytics major curriculum through the analysis of data supplied by a partnering institution. Prepares students for the complexity of data analysis they will encounter outside of the university in a mentored setting.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4998",
    dept: "STAT",
    number: "4998",
    name: "Undergraduate Research in Statistics",
    credits: 1,
    terms: [],
    sentence: " Designed to give undergraduates experience in carrying out statistics research.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4999",
    dept: "STAT",
    number: "4999",
    name: "Undergraduate Thesis Research in Statistics",
    credits: 1,
    terms: [],
    sentence: " Designed to give undergraduates experience in carrying out statistics research.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5301",
    dept: "STAT",
    number: "5301",
    name: "Intermediate Data Analysis I",
    credits: 4,
    terms: [],
    sentence: " The first course in a two-semester non-calculus sequence in data analysis covering descriptive statistics, design of experiments, probability, statistical inference, one-sample t, goodness of fit, two sample problem, and one-way ANOVA.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5302",
    dept: "STAT",
    number: "5302",
    name: "Intermediate Data Analysis II",
    credits: 3,
    terms: [],
    sentence: " The second course in a two-semester sequence in data analysis covering simple linear regression (inference, model diagnostics), multiple regression models, variable selection, model selection, two-way ANOVA, mixed effects model.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5510",
    dept: "STAT",
    number: "5510",
    name: "Statistical Foundations of Survey Research",
    credits: 3,
    terms: [],
    sentence: " Understand and practice methods of survey research and data analysis including questionnaire design and pilot testing, non-sampling and sampling errors, sampling design, descriptive statistics, estimation, and hypothesis testing; and ethics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5550",
    dept: "STAT",
    number: "5550",
    name: "Introductory Time Series Analysis",
    credits: 3,
    terms: [],
    sentence: " Introduces the statistical methodology and models to analyze time series data in practice.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5730",
    dept: "STAT",
    number: "5730",
    name: "Introduction to R for Data Science",
    credits: 2,
    terms: [],
    sentence: " Introduces underlying concepts of the R programming language and R package ecosystem for manipulation, visualization, and modeling of data, and for communicating the results of and enabling replication of their analyses.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 1100.01",
    dept: "ECON",
    number: "1100.01",
    name: "Current Economic Events in Historical Perspective",
    credits: 3,
    terms: [],
    sentence: "Introduction to economic analysis; historical background for interpreting current economic events. Discuss current issues in a historical context, including topics like taxes and unemployment. A one-course introduction to economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 1100.02",
    dept: "ECON",
    number: "1100.02",
    name: "Freakonomics",
    credits: 3,
    terms: [],
    sentence: "Discuss current social problems and issues within an economics framework, including topics such as job discrimination and integration. A one-course introduction to economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2001.01",
    dept: "ECON",
    number: "2001.01",
    name: "Principles of Microeconomics",
    credits: 3,
    terms: [],
    sentence: "Introduction to economic theory: supply and demand for goods, services, and factor inputs; market structure; international trade, the distribution of income. First required course for students planning to take 4000-level courses in Econ.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2001.03H",
    dept: "ECON",
    number: "2001.03H",
    name: "Principles of Microeconomics (Honors)",
    credits: 3,
    terms: [],
    sentence: "An advanced introduction to economic theory: supply and demand for goods, services, and factor inputs; market structure; international trade, the distribution of income. First required course for students planning to take 4000-level courses in econ.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2002.01",
    dept: "ECON",
    number: "2002.01",
    name: "Principles of Macroeconomics",
    credits: 3,
    terms: [],
    sentence: "Introduction to the theory of national income determination; economic fluctuations; money; government policy; international economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2002.03H",
    dept: "ECON",
    number: "2002.03H",
    name: "Principles of Macroeconomics (Honors)",
    credits: 3,
    terms: [],
    sentence: "An advanced introduction to the theory of national income determination; economic fluctuations; money; government policy; international economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 2367.02",
    dept: "ECON",
    number: "2367.02",
    name: "Current Economic Issues in the United States",
    credits: 3,
    terms: [],
    sentence: "Study of problems currently facing the U.S. economy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 3048",
    dept: "ECON",
    number: "3048",
    name: "Ethics and Social Responsibility in Economic Life",
    credits: 3,
    terms: [],
    sentence: "Examines the role of ethical norms and social constraints in determining economic outcomes.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 3400",
    dept: "ECON",
    number: "3400",
    name: "The Analysis and Display of Data",
    credits: 3,
    terms: [],
    sentence: "Introduction to the analysis of data. Topics include sampling, data collection, probability, inference, random variables, display of data, correlation, and analysis of variance. This course does not count toward a course elective for Econ majors.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 3820",
    dept: "ECON",
    number: "3820",
    name: "The Economics of Gender in Labor Markets",
    credits: 3,
    terms: [],
    sentence: "Application of economic analysis to the evolution and economic condition of women and men in the labor force; occupational distribution and segregation; wage gap; the glass ceiling.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4001.01",
    dept: "ECON",
    number: "4001.01",
    name: "Intermediate Microeconomic Theory",
    credits: 3,
    terms: [],
    sentence: "Theory of consumer behavior; theory of the firm; costs and production; factor price determination; general equilibrium.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4001.02",
    dept: "ECON",
    number: "4001.02",
    name: "Intermediate Microeconomic Theory (Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: "Theory of consumer behavior; theory of the firm; costs and production; factor price determination; general equilibrium. Designates a calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4001.03",
    dept: "ECON",
    number: "4001.03",
    name: "Intermediate Microeconomic Theory (Advanced Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: "Theory of consumer behavior; theory of the firm; costs and production; factor price determination; general equilibrium. Designates an advanced calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4002.01",
    dept: "ECON",
    number: "4002.01",
    name: "Intermediate Macroeconomic Theory",
    credits: 3,
    terms: [],
    sentence: "Analysis of the determinants of national output; income and employment levels; theory of economic growth and progressive equilibrium in an economy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4002.02",
    dept: "ECON",
    number: "4002.02",
    name: "Intermediate Macroeconomic Theory (Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: "Analysis of the determinants of national output; income and employment levels; theory of economic growth and progressive equilibrium in an economy. Designates a calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4002.03",
    dept: "ECON",
    number: "4002.03",
    name: "Intermediate Macroeconomic Theory (Advanced Calculus-Based)",
    credits: 3,
    terms: [],
    sentence: "Analysis of the determinants of national output; income and employment levels; theory of economic growth and progressive equilibrium in an economy. Designates an advanced calculus-based version.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4050",
    dept: "ECON",
    number: "4050",
    name: "Experimental Economics",
    credits: 3,
    terms: [],
    sentence: "Introduction to economics as an experimental social science. Students participate in and study results of economic experiments dealing with markets, individual decision making, and a broad array of game theoretic economic models.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4130",
    dept: "ECON",
    number: "4130",
    name: "World Economic Development in Historical Perspective",
    credits: 3,
    terms: [],
    sentence: "A survey of economic development from the middle ages through the 20th century, emphasizing Europe, Asia and Africa.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4140",
    dept: "ECON",
    number: "4140",
    name: "Economic History of the Americas",
    credits: 3,
    terms: [],
    sentence: "A survey of economic development in the Americas emphasizing the United States from colonial times to the 20th century.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4191",
    dept: "ECON",
    number: "4191",
    name: "Internship",
    credits: 1,
    terms: [],
    sentence: "Allows students to apply knowledge from their economics courses and learn from hands on experience in approved positions. Applies toward an Econ 4000-level elective; 3 credit hours maximum toward major.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4200",
    dept: "ECON",
    number: "4200",
    name: "Money and Banking",
    credits: 3,
    terms: [],
    sentence: "Organization, operation, and economic significance of our monetary and banking system; special reference to current conditions and problems. Students intending to take 5200 are encouraged to take it instead.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4300",
    dept: "ECON",
    number: "4300",
    name: "Government Finance in the American Economy",
    credits: 3,
    terms: [],
    sentence: "Analysis of fiscal institutions and decision-making in the public sector of the American economy; budget planning and execution; taxation, debt, and fiscal policy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4310",
    dept: "ECON",
    number: "4310",
    name: "Local Public Finance",
    credits: 3,
    terms: [],
    sentence: "Financing public services by state/local governments. The fiscal relationship between state/local governments and the federal government. Apply techniques of economic analysis to policy issues.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4400",
    dept: "ECON",
    number: "4400",
    name: "Elementary Econometrics",
    credits: 3,
    terms: [],
    sentence: "Basic linear regression analysis with applications; hypothesis testing and model specification.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4537",
    dept: "ECON",
    number: "4537",
    name: "Middle Eastern Economic Development",
    credits: 3,
    terms: [],
    sentence: "Introduction to current economic issues facing the Middle East; similarities and differences in Middle Eastern countries' growth, inflation, unemployment, fiscal and monetary policy, imports, exports, foreign debt and exchange rate policy.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4553",
    dept: "ECON",
    number: "4553",
    name: "Economics of Population",
    credits: 3,
    terms: [],
    sentence: "Using economic principles to analyze population growth, fertility, mortality, mating, dating, marriage, teen pregnancy, divorce, and migration.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4560",
    dept: "ECON",
    number: "4560",
    name: "Cooperation and Conflict in the Global Economy",
    credits: 3,
    terms: [],
    sentence: "The economic, social, and political bases for and responses to increasing global economic integration.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4597.01",
    dept: "ECON",
    number: "4597.01",
    name: "Issues of the Underground Economy",
    credits: 3,
    terms: [],
    sentence: "Focuses on the informal sector of the underground economy: illegal drugs, arms sales and human trafficking. Applies economic reasoning.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4700",
    dept: "ECON",
    number: "4700",
    name: "Government and Business",
    credits: 3,
    terms: [],
    sentence: "Economic and legal aspects of government regulation of business in the United States; philosophies and concepts of public control; contemporary problems. Students planning on taking 5700 are encouraged to take it instead.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4800",
    dept: "ECON",
    number: "4800",
    name: "Labor Economics and Industrial Relations",
    credits: 3,
    terms: [],
    sentence: "Survey of the field of labor economics; trade unionism, collective bargaining; wage determination, employment, unemployment; labor legislation. Students planning on taking 5850 are encouraged to take it instead.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4830",
    dept: "ECON",
    number: "4830",
    name: "Economics of Sports",
    credits: 3,
    terms: [],
    sentence: "Analysis of economic and business aspects of sports teams and their strategic interactions in sports markets.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4831",
    dept: "ECON",
    number: "4831",
    name: "Sports Data Analytics and Economic Analysis",
    credits: 3,
    terms: [],
    sentence: "An introduction to basic data analysis methods used by economists to explain economic reasoning in the sport industry and associated markets.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4960H",
    dept: "ECON",
    number: "4960H",
    name: "Honors Seminar in Economics",
    credits: 3,
    terms: [],
    sentence: "Prepares students to write an undergraduate thesis; group discussion of research problems, methods, and strategies.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4998",
    dept: "ECON",
    number: "4998",
    name: "Undergraduate Research in Economics",
    credits: 1,
    terms: [],
    sentence: "Directed research for an Economics major; collection and analysis of data and information for a research project.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4998H",
    dept: "ECON",
    number: "4998H",
    name: "Honors Research in Economics",
    credits: 1,
    terms: [],
    sentence: "Directed research for an economics major; collection and analysis of data and information for a research project.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4999",
    dept: "ECON",
    number: "4999",
    name: "Undergraduate Thesis Research",
    credits: 1,
    terms: [],
    sentence: "A program of study arranged for each student, with individual conferences and reports, to write a senior thesis. At least two semesters are required of candidates for the degree with distinction in economics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 4999H",
    dept: "ECON",
    number: "4999H",
    name: "Honors Thesis Research",
    credits: 1,
    terms: [],
    sentence: "A program of study arranged for each student, with individual conferences and reports, to write a senior thesis. At least 2 sems required for distinction in econ. Failure to receive a mark of S in this course is a disqualification for special honors.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5001",
    dept: "ECON",
    number: "5001",
    name: "Game Theory in Economics",
    credits: 3,
    terms: [],
    sentence: "Analysis of behavior in strategic situations - when a person or firm's best action depends on what others do.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5130",
    dept: "ECON",
    number: "5130",
    name: "Economic History of Western Europe",
    credits: 4,
    terms: [],
    sentence: "Survey of economic development of Europe from pre-industrialization to current globalization. Emphasis on critical analysis of long-run factors in economic growth.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5140",
    dept: "ECON",
    number: "5140",
    name: "Economic History of the United States",
    credits: 4,
    terms: [],
    sentence: "General survey from discovery of America to present; European economic background; westward movement and its effects; development of economic institutions in the United States.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5193",
    dept: "ECON",
    number: "5193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: "Advanced readings in economics and related fields.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5261",
    dept: "ECON",
    number: "5261",
    name: "Financial Economics I",
    credits: 3,
    terms: [],
    sentence: "Examination of the evolution of and economic issues facing financial markets, financial institutions, and financial market participants. Does not count as course credit towards the completion of a business major.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5410",
    dept: "ECON",
    number: "5410",
    name: "Econometrics I",
    credits: 3,
    terms: [],
    sentence: "The general linear regression model; multiple correlation, path analysis, analysis of variance and tests of significance; specification errors.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5420",
    dept: "ECON",
    number: "5420",
    name: "Econometrics II",
    credits: 3,
    terms: [],
    sentence: "Discrete choice models, panel data, endogeneity, instrumental variables, and systems of equations; stationary and nonstationary time series; applications in various fields of economics. Continuation of 5410.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5660",
    dept: "ECON",
    number: "5660",
    name: "Financial Aspects of International Trade",
    credits: 3,
    terms: [],
    sentence: "International payments and receipts; foreign exchange markets; balance-of-payments adjustment under different monetary systems; macroeconomic policy; international monetary reforms; foreign investments; multinational corporations.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5700",
    dept: "ECON",
    number: "5700",
    name: "Industrial Organization",
    credits: 3,
    terms: [],
    sentence: "Nature, role, and regulation of competition; market structure and social performance; antitrust laws; current economic, legal, and policy problems in the antitrust area.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5720",
    dept: "ECON",
    number: "5720",
    name: "Comparative Institutional Analysis of Firms and Markets",
    credits: 3,
    terms: [],
    sentence: "Applications of economic analysis to industrial organizations including the firm's internal incentive structure, labor markets, and financial institutions, of major market economies such as U.S., and Japan from comparative perspectives.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "ECON 5850",
    dept: "ECON",
    number: "5850",
    name: "Labor Economics",
    credits: 3,
    terms: [],
    sentence: "Advanced study of the labor market including labor demand and supply, wage determination, and unemployment.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1350.01",
    dept: "STAT",
    number: "1350.01",
    name: "Elementary Statistics",
    credits: 3,
    terms: [],
    sentence: "Introduction to probability and statistics, experiments, and sampling, data analysis and interpretation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1350.02",
    dept: "STAT",
    number: "1350.02",
    name: "Elementary Statistics (Online)",
    credits: 3,
    terms: [],
    sentence: "Introduction to probability and statistics, experiments, and sampling, data analysis and interpretation. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1430.01",
    dept: "STAT",
    number: "1430.01",
    name: "Statistics for the Business Sciences",
    credits: 4,
    terms: [],
    sentence: "Fundamentals of probability and statistics: Data collection and summaries, random variables, simple linear regression, two-way tables, conditional probability, sampling distributions, confidence intervals, hypothesis tests, analysis of variance. In-person recitation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1430.02",
    dept: "STAT",
    number: "1430.02",
    name: "Statistics for the Business Sciences (Online)",
    credits: 4,
    terms: [],
    sentence: "Fundamentals of probability and statistics: Data collection and summaries, random variables, simple linear regression, two-way tables, conditional probability, sampling distributions, confidence intervals, hypothesis tests, analysis of variance. Partly or fully offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1430H",
    dept: "STAT",
    number: "1430H",
    name: "Statistics for the Business Sciences (Honors)",
    credits: 4,
    terms: [],
    sentence: "Calculus-based fundamentals of probability and statistics: Data collection and summaries, random variables, simple linear regression, two-way tables, conditional probability, sampling distributions, confidence intervals, hypothesis tests, ANOVA.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1450.01",
    dept: "STAT",
    number: "1450.01",
    name: "Introduction to the Practice of Statistics",
    credits: 3,
    terms: [],
    sentence: "Algebra-based introduction to data analysis, experimental design, sampling, probability, inference, and linear regression. Emphasis on applications, statistical reasoning, and data analysis using statistical software.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1450.02",
    dept: "STAT",
    number: "1450.02",
    name: "Introduction to the Practice of Statistics (Online)",
    credits: 3,
    terms: [],
    sentence: "Algebra-based introduction to data analysis, experimental design, sampling, probability, inference, and linear regression. Emphasis on applications, statistical reasoning, and data analysis using statistical software. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 1550",
    dept: "STAT",
    number: "1550",
    name: "Introduction to Statistical Reasoning",
    credits: 3,
    terms: [],
    sentence: "Introduction to statistical reasoning through data and application examples, including an introduction to coding in the R software; intended for students considering the Statistics major.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2450",
    dept: "STAT",
    number: "2450",
    name: "Introduction to Statistical Analysis I",
    credits: 3,
    terms: [],
    sentence: "Calculus-based introduction to statistical data analysis. Includes sampling, experimental design, probability, binomial and normal distributions, sampling distributions, inference, regression, ANOVA, two-way tables.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2450.01",
    dept: "STAT",
    number: "2450.01",
    name: "Introduction to Statistical Analysis I",
    credits: 3,
    terms: [],
    sentence: "Calculus-based introduction to statistical data analysis. Includes sampling, experimental design, probability, binomial and normal distributions, sampling distributions, inference, regression, ANOVA, two-way tables.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2450.02",
    dept: "STAT",
    number: "2450.02",
    name: "Introduction to Statistical Analysis I (Online)",
    credits: 3,
    terms: [],
    sentence: "Calculus-based introduction to statistical data analysis. Includes sampling, experimental design, probability, binomial and normal distributions, sampling distributions, inference, regression, ANOVA, two-way tables. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2460H",
    dept: "STAT",
    number: "2460H",
    name: "Introduction to Statistical Analysis II",
    credits: 3,
    terms: [],
    sentence: "Introductory statistics review; Simple linear regression; Multiple regression; One-way ANOVA review; Multiple comparisons; Two-way ANOVA; Bootstrap and permutation tests; Nonparametric tests; Intro to quality/process control; Intro time series.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2480",
    dept: "STAT",
    number: "2480",
    name: "Statistics for the Life Sciences",
    credits: 3,
    terms: [],
    sentence: "Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, hypothesis testing, linear regression and correlation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2480.01",
    dept: "STAT",
    number: "2480.01",
    name: "Statistics for the Life Sciences",
    credits: 3,
    terms: [],
    sentence: "Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, hypothesis testing, linear regression and correlation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2480.02",
    dept: "STAT",
    number: "2480.02",
    name: "Statistics for the Life Sciences (Online)",
    credits: 3,
    terms: [],
    sentence: "Calculus-based introduction to the statistical analysis of biological data, including probability, common discrete and continuous distributions, experimental design, hypothesis testing, linear regression and correlation. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2510.01",
    dept: "STAT",
    number: "2510.01",
    name: "Statistics in the Sports World",
    credits: 2,
    terms: [],
    sentence: "Ask and answer questions, debate issues and analyze data from your favorite sports using statistics. Statistical techniques include contingency tables, regression, estimation, confidence levels, testing. Cannot be used to replace a GE data anly course.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 2510.02",
    dept: "STAT",
    number: "2510.02",
    name: "Statistics in the Environmental Sciences",
    credits: 2,
    terms: [],
    sentence: "Learn, discuss, and apply statistical methods to important problems in the environmental sciences. Statistical techniques will be introduced and illustrated through applications in climate change, pollution monitoring, and biodiversity/conservation. Cannot be used to replace a GE data anly course.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3201",
    dept: "STAT",
    number: "3201",
    name: "Introduction to Probability for Data Analytics",
    credits: 3,
    terms: [],
    sentence: "An introduction to probability and its role in statistical methods for data analytics. Equal emphasis is placed on analytical and simulation-based methods for quantifying uncertainty. Approaches to assessing the accuracy of simulation methods are discussed. Applications of probability and sampling to big-data settings are discussed.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3202",
    dept: "STAT",
    number: "3202",
    name: "Introduction to Statistical Inference for Data Analytics",
    credits: 4,
    terms: [],
    sentence: "Foundational inferential methods for learning about populations from samples, including point and interval estimation, and the formulation and testing of hypotheses. Statistical theory is introduced to justify the approaches. The course emphasizes challenges that arise when applying classical ideas to big data, partially through the use of computational and simulation techniques.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3301",
    dept: "STAT",
    number: "3301",
    name: "Statistical Modeling for Discovery I",
    credits: 3,
    terms: [],
    sentence: "Statistical models for data analysis in the linear regression framework. The challenges of developing meaningful models for data are explored, with emphasis on the model building process, the use of numerical and graphical diagnostics for assessing model fit, and interpretation and communication of results. Statistical foundations are introduced along with basic inferential techniques.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3302",
    dept: "STAT",
    number: "3302",
    name: "Statistical Modeling for Discovery II",
    credits: 3,
    terms: [],
    sentence: "This course investigates advanced statistical models for data analysis. The regression methods developed in Stat 3301 are extended to data settings with binary and multi-category outcomes. Commonly used statistical methods for exploring and analyzing multivariate data are introduced. Interpretation and communication of the results of analyses is emphasized.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3303",
    dept: "STAT",
    number: "3303",
    name: "Bayesian Analysis and Statistical Decision Making",
    credits: 3,
    terms: [],
    sentence: "Introduction to concepts and methods for making decisions in the presence of uncertainty. Topics include: formulation of decision problems and quantification of their components; learning about unknown features of a decision problem based on data via Bayesian analysis; characterizing and finding optimal decisions. Techniques and computational methods for practical implementation are presented.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3410",
    dept: "STAT",
    number: "3410",
    name: "Principles of Data Collection and Analysis",
    credits: 3,
    terms: [],
    sentence: "Principles of designing experiments; analysis of variance techniques for hypothesis testing; simultaneous confidence intervals; block designs; factorial experiments; random effects and mixed models; observational data.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3440",
    dept: "STAT",
    number: "3440",
    name: "Statistics in Quality",
    credits: 3,
    terms: [],
    sentence: "Descriptive statistics; introduction to probability; Bayes theorem; discrete and continuous random variables, expected value, probability distributions; interval estimation for means and proportions; hypotheses tests for means and proportions; least squares regression; one- and two-way anova; control charts; process capability indices.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3450",
    dept: "STAT",
    number: "3450",
    name: "Basic Statistics for Engineers",
    credits: 2,
    terms: [],
    sentence: "Introduction to probability; Normal distribution; Confidence intervals for means; Hypothesis tests for means; Multi-factor experiments; Experiments with blocking.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3450.01",
    dept: "STAT",
    number: "3450.01",
    name: "Basic Statistics for Engineers",
    credits: 2,
    terms: [],
    sentence: "Introduction to probability; Normal distribution; Confidence intervals for means; Hypothesis tests for means; Multi-factor experiments; Experiments with blocking.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3450.02",
    dept: "STAT",
    number: "3450.02",
    name: "Basic Statistics for Engineers (Online)",
    credits: 2,
    terms: [],
    sentence: "Introduction to probability; Normal distribution; Confidence intervals for means; Hypothesis tests for means; Multi-factor experiments; Experiments with blocking. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3460",
    dept: "STAT",
    number: "3460",
    name: "Principles of Statistics for Engineers",
    credits: 3,
    terms: [],
    sentence: "Introduction to probability, random variables, distributions, expected values; confidence intervals; paired and unpaired t-tests; linear regression; analysis of variance; blocked experiments; fractional factorial experiments; quality control charts.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3470.01",
    dept: "STAT",
    number: "3470.01",
    name: "Introduction to Probability and Statistics for Engineers",
    credits: 3,
    terms: [],
    sentence: "Introduction to probability, Bayes theorem; discrete and continuous random variables, expected value, probability distributions; point and interval estimation; hypotheses tests for means and proportions; least squares regression.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 3470.02",
    dept: "STAT",
    number: "3470.02",
    name: "Introduction to Probability and Statistics for Engineers (Online)",
    credits: 3,
    terms: [],
    sentence: "Introduction to probability, Bayes theorem; discrete and continuous random variables, expected value, probability distributions; point and interval estimation; hypotheses tests for means and proportions; least squares regression. Offered online.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4193",
    dept: "STAT",
    number: "4193",
    name: "Individual Studies",
    credits: 1,
    terms: [],
    sentence: "Individual conferences, assigned readings, and reports on minor investigations.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4194",
    dept: "STAT",
    number: "4194",
    name: "Group Studies",
    credits: 1,
    terms: [],
    sentence: "Designed to give groups of students an opportunity to pursue special studies not otherwise offered.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4201",
    dept: "STAT",
    number: "4201",
    name: "Introduction to Mathematical Statistics I",
    credits: 4,
    terms: [],
    sentence: "Basic concepts in mathematical statistics, including probability, discrete and continuous distributions and densities, mathematical expectation, functions of random variables, transformation techniques, sampling distributions, order statistics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4202",
    dept: "STAT",
    number: "4202",
    name: "Introduction to Mathematical Statistics II",
    credits: 4,
    terms: [],
    sentence: "Decision theory, point and interval estimation, Neyman-Pearson lemma, likelihood ratio tests, tests for means, variances, and proportions, nonparametric tests, regression, and ANOVA.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4301",
    dept: "STAT",
    number: "4301",
    name: "Advanced Statistical Inference",
    credits: 3,
    terms: [],
    sentence: "Advanced probability models and fundamentals of inferential procedures; distribution functions, moment generating functions, transformations, order statistics, large-sample theory, classical hypothesis testing, distribution-free hypothesis tests.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4302",
    dept: "STAT",
    number: "4302",
    name: "Computational Statistics",
    credits: 3,
    terms: [],
    sentence: "Topics in computational statistics using the R software, including design and execution of classical and modern Monte Carlo experiments, and statistical inference based on resampling methods, such as bootstrap, jackknife, and permutation.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4620",
    dept: "STAT",
    number: "4620",
    name: "Introduction to Statistical Learning",
    credits: 2,
    terms: [],
    sentence: "The course provides an introduction to the principles of statistical learning and standard learning techniques for regression, classification, clustering, dimensionality reduction, and feature extraction.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4690",
    dept: "STAT",
    number: "4690",
    name: "Undergraduate Topics in Statistics",
    credits: 1,
    terms: [],
    sentence: "Various topics in Statistics and Data Analysis that are relevant to an undergraduate audience. Topics vary per offering. Repeatable to a maximum of 12 cr hrs or 3 completions.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4911",
    dept: "STAT",
    number: "4911",
    name: "Data Analytics Capstone",
    credits: 4,
    terms: [],
    sentence: "A teamwork-based synthesis of the Data Analytics major curriculum through the analysis of data supplied by a partnering institution. Prepares students for the complexity of data analysis they will encounter outside of the university in a mentored setting.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4998",
    dept: "STAT",
    number: "4998",
    name: "Undergraduate Research in Statistics",
    credits: 1,
    terms: [],
    sentence: "Designed to give undergraduates experience in carrying out statistics research.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 4999",
    dept: "STAT",
    number: "4999",
    name: "Undergraduate Thesis Research in Statistics",
    credits: 1,
    terms: [],
    sentence: "Designed to give undergraduates experience in carrying out statistics research.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5301",
    dept: "STAT",
    number: "5301",
    name: "Intermediate Data Analysis I",
    credits: 4,
    terms: [],
    sentence: "The first course in a two-semester non-calculus sequence in data analysis covering descriptive statistics, design of experiments, probability, statistical inference, one-sample t, goodness of fit, two sample problem, and one-way ANOVA.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5302",
    dept: "STAT",
    number: "5302",
    name: "Intermediate Data Analysis II",
    credits: 3,
    terms: [],
    sentence: "The second course in a two-semester sequence in data analysis covering simple linear regression (inference, model diagnostics), multiple regression models, variable selection, model selection, two-way ANOVA, mixed effects model.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5510",
    dept: "STAT",
    number: "5510",
    name: "Statistical Foundations of Survey Research",
    credits: 3,
    terms: [],
    sentence: "Understand and practice methods of survey research and data analysis including questionnaire design and pilot testing, non-sampling and sampling errors, sampling design, descriptive statistics, estimation, and hypothesis testing; and ethics.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5550",
    dept: "STAT",
    number: "5550",
    name: "Introductory Time Series Analysis",
    credits: 3,
    terms: [],
    sentence: "Introduces the statistical methodology and models to analyze time series data in practice.",
    prereqs: [],
    concur: [],
    notes: ""
  },
  {
    id: "STAT 5730",
    dept: "STAT",
    number: "5730",
    name: "Introduction to R for Data Science",
    credits: 2,
    terms: [],
    sentence: "Introduces underlying concepts of the R programming language and R package ecosystem for manipulation, visualization, and modeling of data, and for communicating the results of and enabling replication of their analyses.",
    prereqs: [],
    concur: [],
    notes: ""
  },
];

// Make available to app.js whether loaded via <script> tag (browser global)
if (typeof module !== "undefined") { module.exports = COURSES_DB; }
