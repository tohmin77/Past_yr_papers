// Registry of digitized test papers available to attempt.
// To add a new paper: build it in its own self-contained folder (its own
// index.html + questions.js + assets/) nested under
// <level-slug>/<subject-slug>/<paper-id>/ (e.g. primary-3/science/my-school-2025/),
// then add one entry here.
//
// `level` must be exactly one of: "Primary 3", "Primary 4", "Primary 5", "Primary 6"
// `subject` must be exactly one of: "Science", "Mathematics", "English"
// (these match the dropdown filters on the main page in index.html — a
// mismatched value means the paper silently won't appear under any filter).
// The level/subject slugs in each `path` below are lowercased, hyphenated
// versions of `level`/`subject` (e.g. "Primary 3" -> "primary-3").

const PAPERS = [
  {
    id: "st-hildas-2025",
    title: "St Hilda's Primary School - P3 Science Term 3 WA (2025)",
    school: "St Hilda's Primary School",
    level: "Primary 3",
    subject: "Science",
    description: "Term 3 Weighted Assessment. Section A: 11 MCQs (22 marks). Section B: 2 structured questions (8 marks). Official school answer key included.",
    questionCount: 13,
    path: "primary-3/science/st-hildas-2025/index.html"
  },
  {
    id: "nanyang-2025",
    title: "Nanyang Primary School - P3 Science End of Year Exam (2025)",
    school: "Nanyang Primary School",
    level: "Primary 3",
    subject: "Science",
    description: "End of Year Exam (Think Academy compilation). Paper 1: 22 MCQs. Paper 2: 9 structured questions. No official answer key was supplied - all suggested answers are self-review only.",
    questionCount: 31,
    path: "primary-3/science/nanyang-2025/index.html"
  },
  {
    id: "raffles-girls-2025",
    title: "Raffles Girls' Primary School - P3 Science End of Year Exam (2025)",
    school: "Raffles Girls' Primary School",
    level: "Primary 3",
    subject: "Science",
    description: "End of Year Exam (Think Academy compilation). Paper 1: 25 MCQs. Paper 2: 11 structured questions. No official answer key was supplied - all suggested answers are self-review only. Two source-material defects (a blank diagram box in Q14, an unticked table in Q34) are called out directly in the app.",
    questionCount: 36,
    path: "primary-3/science/raffles-girls-2025/index.html"
  },
  {
    id: "tao-nan-2025",
    title: "Tao Nan School - P3 Science End of Year Exam (2025)",
    school: "Tao Nan School",
    level: "Primary 3",
    subject: "Science",
    description: "End of Year Exam (Think Academy compilation). Paper 1: 18 MCQs. Paper 2: 8 structured questions. No official answer key was supplied - all suggested answers are self-review only.",
    questionCount: 26,
    path: "primary-3/science/tao-nan-2025/index.html"
  },
  {
    id: "rosyth-2025",
    title: "Rosyth School - P3 Mathematics End of Year Assessment Paper 1 (2025)",
    school: "Rosyth School",
    level: "Primary 3",
    subject: "Mathematics",
    description: "End-of-year Assessment Paper 1 (Think Academy compilation). Section A: 8 MCQs (12 marks). Section B: 14 short-answer questions (24 marks). Section C: 4 structured questions (15 marks). No official answer key was supplied - all suggested answers are self-review only. One source-material defect (Section C's printed header says 14 marks / 3 marks each for Q23-24, but Q24's own part brackets sum to 4 marks) is called out directly in the app.",
    questionCount: 26,
    path: "primary-3/mathematics/rosyth-2025/index.html"
  }
];
