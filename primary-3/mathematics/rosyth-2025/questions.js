// SG 2025 Rosyth Primary School End-of-year Assessment - P3 Mathematics Paper 1
// (Think Academy compilation). No official answer key was supplied with this
// paper. Every `correct` / part `correct` value below is a worked suggested
// answer derived from the P3 Maths syllabus, not an official school answer key.
//
// Section A (12 marks): Q1-8, MCQ.
// Section B (24 marks): Q9-22, short-answer.
// Section C: Q23-26, structured short-answer with sub-parts.
// Every answer in this paper is an objective number/word, so every part is
// auto-gradable (no free-text "model answer only" questions).
//
// Source-material defect (not a transcription error - confirmed against the
// scanned page): the Section C header states "14 marks" and "Questions 23 to
// 24 carry 3 marks each", but Q24's own printed part brackets read [2] and
// [2] (4 marks), not 3. Q23's brackets do sum to 3 as stated. The per-part
// brackets are transcribed exactly as printed and used for grading, so
// Section C's true auto-graded max is 15, not the paper's stated 14.

const QUESTIONS = [
  // ---------------- Section A (MCQ) ----------------
  {
    id: 1,
    paper: "A",
    type: "mcq",
    marks: 1,
    prompt: "In 8930, the digit 3 is in the _____ place.",
    options: [
      { key: "1", label: "ones" },
      { key: "2", label: "tens" },
      { key: "3", label: "hundreds" },
      { key: "4", label: "thousands" }
    ],
    correct: "2",
    explanation: "8930 = 8 thousands, 9 hundreds, 3 tens, 0 ones. The digit 3 is in the tens place."
  },
  {
    id: 2,
    paper: "A",
    type: "mcq",
    marks: 1,
    prompt: "What is the missing number?",
    body: "_____ ÷ 6 = 9 R1",
    options: [
      { key: "1", label: "14" },
      { key: "2", label: "16" },
      { key: "3", label: "55" },
      { key: "4", label: "60" }
    ],
    correct: "3",
    explanation: "9 × 6 = 54, plus the remainder of 1 gives 55. Check: 55 ÷ 6 = 9 remainder 1."
  },
  {
    id: 3,
    paper: "A",
    type: "mcq",
    marks: 1,
    prompt: "4/5 − 1/10 = ?",
    options: [
      { key: "1", label: "3/5" },
      { key: "2", label: "3/10" },
      { key: "3", label: "5/10" },
      { key: "4", label: "7/10" }
    ],
    correct: "4",
    explanation: "4/5 = 8/10, so 8/10 − 1/10 = 7/10."
  },
  {
    id: 4,
    paper: "A",
    type: "mcq",
    marks: 1,
    prompt: "Which of the following is the same as 8015 ml?",
    options: [
      { key: "1", label: "8 L 15 ml" },
      { key: "2", label: "8 L 105 ml" },
      { key: "3", label: "80 L 15 ml" },
      { key: "4", label: "801 L 5 ml" }
    ],
    correct: "1",
    explanation: "1000 ml = 1 L, so 8015 ml = 8 L and 15 ml."
  },
  {
    id: 5,
    paper: "A",
    type: "mcq",
    marks: 2,
    prompt: "Arrange these numbers from the greatest to the smallest.",
    body: "6089, 6890, 6809",
    options: [
      { key: "1", label: "6089, 6809, 6890" },
      { key: "2", label: "6890, 6809, 6089" },
      { key: "3", label: "6809, 6890, 6089" },
      { key: "4", label: "6890, 6089, 6809" }
    ],
    correct: "2",
    explanation: "Comparing the hundreds digit: 6890 (8 hundreds) > 6809 (8 hundreds, but smaller tens) > 6089 (0 hundreds). So the order from greatest to smallest is 6890, 6809, 6089."
  },
  {
    id: 6,
    paper: "A",
    type: "mcq",
    marks: 2,
    prompt: "The difference between two numbers is 218. The smaller number is 357. What is the greater number?",
    options: [
      { key: "1", label: "139" },
      { key: "2", label: "141" },
      { key: "3", label: "565" },
      { key: "4", label: "575" }
    ],
    correct: "4",
    explanation: "Greater number = smaller number + difference = 357 + 218 = 575."
  },
  {
    id: 7,
    paper: "A",
    type: "mcq",
    marks: 2,
    prompt: "There were some children in a school hall. 332 of them were boys. There were 140 more boys than girls. How many children were there in the school hall altogether?",
    options: [
      { key: "1", label: "332" },
      { key: "2", label: "472" },
      { key: "3", label: "524" },
      { key: "4", label: "612" }
    ],
    correct: "3",
    explanation: "Girls = 332 − 140 = 192. Total children = 332 + 192 = 524."
  },
  {
    id: 8,
    paper: "A",
    type: "mcq",
    marks: 2,
    prompt: "The figure below is made up of 3 identical squares. One square is divided equally into 4 triangles. What fraction of the figure is shaded?",
    images: ["assets/q8-shape.png"],
    options: [
      { key: "1", label: "1/4" },
      { key: "2", label: "1/5" },
      { key: "3", label: "3/16" },
      { key: "4", label: "7/8" }
    ],
    correct: "1",
    explanation: "3 of the 4 triangles in the divided square are shaded, so 3/4 of one square is shaded. The whole figure is made of 3 identical squares, so the shaded fraction of the whole figure is (3/4) ÷ 3 = 1/4."
  },

  // ---------------- Section B (short-answer) ----------------
  {
    id: 9,
    paper: "B",
    type: "structured",
    prompt: "What is the smallest 4-digit odd number that can be formed with all the digits below?",
    body: "3   1   0   6",
    parts: [
      { key: "", marks: 1, type: "short-text", prompt: "Ans:", correct: "1063" }
    ]
  },
  {
    id: 10,
    paper: "B",
    type: "structured",
    prompt: "What is the missing number in the box below?",
    body: "647 + ? = 6500",
    parts: [
      { key: "", marks: 1, type: "short-text", prompt: "Ans:", correct: "5853" }
    ]
  },
  {
    id: 11,
    paper: "B",
    type: "structured",
    prompt: "Express 2480 m in km and m.",
    parts: [
      { key: "km", marks: 0.5, type: "short-text", prompt: "Ans: _____ km", correct: "2" },
      { key: "m", marks: 0.5, type: "short-text", prompt: "_____ m", correct: "480" }
    ]
  },
  {
    id: 12,
    paper: "B",
    type: "structured",
    prompt: "How much did the book and the pencil case cost altogether?",
    images: ["assets/q12-items.png"],
    body: "Book: $12.75      Pencil case: $6.45",
    parts: [
      { key: "", marks: 1, type: "short-text", prompt: "Ans: $", correct: "19.20", accept: ["19.2"] }
    ]
  },
  {
    id: 13,
    paper: "B",
    type: "structured",
    prompt: "The figure below is made up of 2 identical rectangles. Find the perimeter of the figure.",
    images: ["assets/q13-rectangles.png"],
    body: "Each rectangle is 10 cm wide and 7 cm tall.",
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans: _____ cm", correct: "54" }
    ]
  },
  {
    id: 14,
    paper: "B",
    type: "structured",
    prompt: "The bar graph shows the number of ice cream cones Mr Ahmad sold over 5 days. Each ice cream cone was sold for $3. How much money did Mr Ahmad collect on Wednesday?",
    images: ["assets/q14-bargraph.png"],
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans: $", correct: "126" }
    ]
  },
  {
    id: 15,
    paper: "B",
    type: "structured",
    prompt: "The bar graph shows the number of boys and girls from 3 classes who took part in an Art competition. Find the total number of students who took part in the Art competition.",
    images: ["assets/q15-bargraph.png"],
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans:", correct: "97" }
    ]
  },
  {
    id: 16,
    paper: "B",
    type: "structured",
    prompt: "Ali reached the bus stop at 6:45 am. He waited 8 minutes before he got on the bus. He got off the bus at 7:30 am. How long was he on the bus?",
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans: _____ min", correct: "37" }
    ]
  },
  {
    id: 17,
    paper: "B",
    type: "structured",
    prompt: "Johan and Ben had the same number of marbles at first. Then, Johan lost 50 marbles and Ben bought another 138 marbles. How many more marbles did Ben have than Johan in the end?",
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans:", correct: "188" }
    ]
  },
  {
    id: 18,
    paper: "B",
    type: "structured",
    prompt: "Mrs Tan spent $35. How many mangoes did she buy?",
    images: ["assets/q18-mangoes.png"],
    body: "3 mangoes for $7",
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans:", correct: "15" }
    ]
  },
  {
    id: 19,
    paper: "B",
    type: "structured",
    prompt: "Lokman and Vincent had 84 stickers at first. Lokman had 5 times as many stickers as Vincent. Then Vincent bought 17 more stickers. How many stickers did Vincent have in the end?",
    parts: [
      { key: "", marks: 2, type: "short-text", prompt: "Ans:", correct: "31" }
    ]
  },
  {
    id: 20,
    paper: "B",
    type: "structured",
    prompt: "Arrange the fractions 1/2, 11/12, 1/6 in order. Begin with the smallest fraction.",
    parts: [
      { key: "1", marks: 0.67, type: "short-text", prompt: "Ans (smallest):", correct: "1/6" },
      { key: "2", marks: 0.67, type: "short-text", prompt: "Then:", correct: "1/2" },
      { key: "3", marks: 0.66, type: "short-text", prompt: "Then (greatest):", correct: "11/12" }
    ]
  },
  {
    id: 21,
    paper: "B",
    type: "structured",
    prompt: "Name the two angles that are smaller than a right angle.",
    images: ["assets/q21-polygon.png"],
    parts: [
      { key: "1", marks: 1, type: "short-text", prompt: "Ans: ∠", correct: "a" },
      { key: "2", marks: 1, type: "short-text", prompt: "and ∠", correct: "e" }
    ]
  },
  {
    id: 22,
    paper: "B",
    type: "structured",
    prompt: "Study the figure in the square grid and fill in the blanks below.",
    images: ["assets/q22-grid.png"],
    parts: [
      { key: "1a", marks: 0.5, type: "short-text", prompt: "(1) Identify and name a pair of perpendicular lines. Ans:", correct: "AG", accept: ["GA"] },
      { key: "1b", marks: 0.5, type: "short-text", prompt: "⊥", correct: "DE", accept: ["ED"] },
      { key: "2a", marks: 0.5, type: "short-text", prompt: "(2) Identify and name a pair of parallel lines. Ans:", correct: "AG", accept: ["GA"] },
      { key: "2b", marks: 0.5, type: "short-text", prompt: "//", correct: "FE", accept: ["EF"] }
    ]
  },

  // ---------------- Section C (structured, multi-part) ----------------
  {
    id: 23,
    paper: "C",
    type: "structured",
    prompt: "The diagrams below show some similar rubber balls, toy cars and a teddy bear being placed on 3 identical weighing scales.",
    parts: [
      {
        key: "1", marks: 1, type: "short-text",
        prompt: "What is the mass of 1 rubber ball?",
        images: ["assets/q23-balls-140g.png"],
        body: "10 rubber balls balance with a 140 g weight plus 3 rubber balls.",
        prompt2: "Ans: _____ g",
        correct: "20"
      },
      {
        key: "2", marks: 2, type: "short-text",
        prompt: "What is the mass of the teddy bear?",
        images: ["assets/q23-balls-car.png", "assets/q23-bear-cars.png"],
        body: "9 rubber balls balance with 1 toy car. The teddy bear balances with 3 toy cars.",
        prompt2: "Ans: _____ g",
        correct: "540"
      }
    ]
  },
  {
    id: 24,
    paper: "C",
    type: "structured",
    prompt: "The figure below is made up of 4 identical squares. The length of the figure is 12 cm.",
    images: ["assets/q24-squares.png"],
    parts: [
      { key: "1", marks: 2, type: "short-text", prompt: "(1) What is the length of one square? Ans: _____ cm", correct: "3" },
      { key: "2", marks: 2, type: "short-text", prompt: "(2) What is the area of the figure? Ans: _____ cm²", correct: "36" }
    ]
  },
  {
    id: 25,
    paper: "C",
    type: "structured",
    prompt: "1402 visitors went to the zoo on Tuesday. 564 of them were adults and the rest were children.",
    parts: [
      { key: "1", marks: 2, type: "short-text", prompt: "(1) How many children were at the zoo? Ans:", correct: "838" },
      { key: "2", marks: 2, type: "short-text", prompt: "(2) Among the 564 adults, there were twice as many women as men. How many of them were women? Ans:", correct: "376" }
    ]
  },
  {
    id: 26,
    paper: "C",
    type: "structured",
    prompt: "Some lamp posts were placed in a straight row at an equal distance apart. The distance between the 1st and the 5th lamp post was 36 m. The distance between the 2nd and the last lamp post was 144 m. What was the total number of lamp posts along the straight row?",
    parts: [
      { key: "", marks: 4, type: "short-text", prompt: "Ans:", correct: "18" }
    ]
  }
];

function normalize(str) {
  return (str || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function isShortTextCorrect(part, given) {
  if (given == null) return false;
  const g = normalize(given);
  if (g === normalize(part.correct)) return true;
  if (part.accept) return part.accept.some(a => normalize(a) === g);
  return false;
}

function scoreTest(answers) {
  const sections = {
    A: { score: 0, max: 0 },
    B: { score: 0, max: 0 },
    C: { score: 0, max: 0 }
  };

  QUESTIONS.forEach(q => {
    if (q.type === "mcq") {
      sections[q.paper].max += q.marks;
      const given = answers[q.id];
      if (given != null && given === q.correct) sections[q.paper].score += q.marks;
    } else {
      q.parts.forEach(part => {
        const partKey = `${q.id}${part.key}`;
        sections[q.paper].max += part.marks;
        if (isShortTextCorrect(part, answers[partKey])) sections[q.paper].score += part.marks;
      });
    }
  });

  const round1 = n => Math.round(n * 10) / 10;
  ["A", "B", "C"].forEach(k => { sections[k].score = round1(sections[k].score); sections[k].max = round1(sections[k].max); });

  const totalScore = round1(sections.A.score + sections.B.score + sections.C.score);
  const totalMax = round1(sections.A.max + sections.B.max + sections.C.max);

  return {
    sectionA: sections.A,
    sectionB: sections.B,
    sectionC: sections.C,
    total: { score: totalScore, max: totalMax }
  };
}
