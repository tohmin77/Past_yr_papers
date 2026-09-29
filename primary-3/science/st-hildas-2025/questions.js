// St Hilda's Primary School - P3 Science Term 3 Weighted Assessment 2025
// Question data + answer key (from the school's "Simplified Answer Key")

const QUESTIONS = [
  {
    id: 1,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Study the diagram below.",
    images: ["assets/q1-umbrella-curtain.jpg"],
    body: "Which of the following properties should the shower curtain and the canopy of the umbrella have?\n\nA  They are flexible.\nB  They are waterproof.\nC  They allow light to pass through.",
    options: [
      { key: "1", label: "A only" },
      { key: "2", label: "A and B only" },
      { key: "3", label: "B and C only" },
      { key: "4", label: "A, B and C" }
    ],
    correct: "2",
    explanation: "Both items need to keep water out and be able to bend/fold, so they must be waterproof (B) and flexible (A). Neither needs to let light through, so C is not required."
  },
  {
    id: 2,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Ali carried out an experiment using three different materials, A, B and C. The materials were placed in a container of water as shown below.",
    images: ["assets/q2-materials-water.jpg"],
    body: "Which property of the material is Ali testing?",
    options: [
      { key: "1", label: "strength" },
      { key: "2", label: "flexibility" },
      { key: "3", label: "transparency" },
      { key: "4", label: "ability to float or sink" }
    ],
    correct: "4",
    explanation: "In the diagram, B floats at the surface, C sinks to the bottom, and A stays suspended in the middle of the water. This spread of behaviour is what you'd observe when testing whether materials float or sink, not strength, flexibility or transparency."
  },
  {
    id: 3,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "The classification table shows three groups of objects.",
    images: ["assets/q3-classification.jpg"],
    body: "Which of the following materials do R, S and T represent?",
    optionTable: {
      headers: ["", "R", "S", "T"],
      rows: [
        ["(1)", "metal", "rubber", "plastic"],
        ["(2)", "rubber", "plastic", "metal"],
        ["(3)", "plastic", "rubber", "fabric"],
        ["(4)", "fabric", "plastic", "rubber"]
      ]
    },
    options: [
      { key: "1", label: "metal / rubber / plastic" },
      { key: "2", label: "rubber / plastic / metal" },
      { key: "3", label: "plastic / rubber / fabric" },
      { key: "4", label: "fabric / plastic / rubber" }
    ],
    correct: "3",
    explanation: "R (beach ball, raincoat) needs to be light and bendable, which fits plastic. S (car tyre, eraser) needs to be springy and grippy, which fits rubber. T (bedsheet, school uniform) is worn or used as cloth, which fits fabric."
  },
  {
    id: 4,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Study the flowchart below.",
    images: ["assets/q4-flowchart.jpg"],
    body: "Based on the flowchart, which material, P, Q, R and S, is most suitable for making part G of the safety helmet for the worker to wear during wet weather?",
    images2: ["assets/q4-helmet.jpg"],
    options: [
      { key: "1", label: "P" },
      { key: "2", label: "Q" },
      { key: "3", label: "R" },
      { key: "4", label: "S" }
    ],
    correct: "3",
    explanation: "The helmet needs a material that is rigid (not flexible, so it keeps its protective shape) and waterproof (for wet weather). Following the flowchart: flexible? No -> waterproof? Yes -> R. So R is the material that is both non-flexible and waterproof."
  },
  {
    id: 5,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Mary used the set-up as shown below. She wanted to test the strength of materials A, B and C. She placed identical bricks one at a time on each material until it broke.",
    images: ["assets/q5-strength-setup.jpg"],
    body: "She recorded the results below.\n\nMaterial A: 21 bricks\nMaterial B: 9 bricks\nMaterial C: 13 bricks\n\nWhich row shows the strongest and the weakest material?",
    optionTable: {
      headers: ["", "strongest material", "weakest material"],
      rows: [
        ["(1)", "A", "B"],
        ["(2)", "A", "C"],
        ["(3)", "B", "A"],
        ["(4)", "B", "C"]
      ]
    },
    options: [
      { key: "1", label: "strongest: A, weakest: B" },
      { key: "2", label: "strongest: A, weakest: C" },
      { key: "3", label: "strongest: B, weakest: A" },
      { key: "4", label: "strongest: B, weakest: C" }
    ],
    correct: "1",
    explanation: "The material that holds the most bricks before breaking is the strongest, and the one that breaks with the fewest bricks is the weakest. A held the most (21 bricks), so A is strongest; B held the fewest (9 bricks), so B is weakest."
  },
  {
    id: 6,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Which of the following is/are magnetic materials?",
    body: "X  Aluminium\nY  Copper\nZ  Steel",
    options: [
      { key: "1", label: "X only" },
      { key: "2", label: "Z only" },
      { key: "3", label: "Y and Z only" },
      { key: "4", label: "X, Y and Z" }
    ],
    correct: "2",
    explanation: "Magnetic materials are attracted to magnets - mainly iron, steel, nickel and cobalt. Steel (Z) is magnetic. Aluminium (X) and copper (Y) are metals, but they are not magnetic materials."
  },
  {
    id: 7,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Which of the following objects uses a magnet?",
    options: [
      { key: "1", label: "umbrella", image: "assets/q7-opt1-umbrella.jpg" },
      { key: "2", label: "compass needle", image: "assets/q7-opt2-compass.jpg" },
      { key: "3", label: "table lamp", image: "assets/q7-opt3-lamp.jpg" },
      { key: "4", label: "watering can", image: "assets/q7-opt4-wateringcan.jpg" }
    ],
    correct: "2",
    explanation: "A compass needle is itself a small magnet that aligns with the Earth's magnetic field to point north-south. The umbrella, table lamp and watering can don't rely on a magnet to work."
  },
  {
    id: 8,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "W and V repelled when they are brought near each other as shown below.",
    images: ["assets/q8-magnets.jpg"],
    body: "Based on the observation, which of the following is definitely true?",
    optionTable: {
      headers: ["", "W", "V"],
      rows: [
        ["(1)", "magnet", "magnet"],
        ["(2)", "magnet", "not a magnet"],
        ["(3)", "not a magnet", "magnet"],
        ["(4)", "not a magnet", "not a magnet"]
      ]
    },
    options: [
      { key: "1", label: "W: magnet, V: magnet" },
      { key: "2", label: "W: magnet, V: not a magnet" },
      { key: "3", label: "W: not a magnet, V: magnet" },
      { key: "4", label: "W: not a magnet, V: not a magnet" }
    ],
    correct: "1",
    explanation: "Repulsion only happens between two magnets with like poles facing each other - a magnet can attract a magnetic material, but a non-magnet can never repel a magnet. Since W and V pushed each other away, both W and V must be magnets."
  },
  {
    id: 9,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Jane placed three ring magnets through a wooden rod as shown below.",
    images: ["assets/q9-ring-magnets.jpg"],
    body: "Which row shows the correct poles at P, Q and R of the ring magnets?",
    optionTable: {
      headers: ["", "P", "Q", "R"],
      rows: [
        ["(1)", "N", "N", "S"],
        ["(2)", "N", "S", "S"],
        ["(3)", "S", "S", "N"],
        ["(4)", "S", "N", "N"]
      ]
    },
    options: [
      { key: "1", label: "P: N, Q: N, R: S" },
      { key: "2", label: "P: N, Q: S, R: S" },
      { key: "3", label: "P: S, Q: S, R: N" },
      { key: "4", label: "P: S, Q: N, R: N" }
    ],
    correct: "3",
    explanation: "The magnets float apart because facing poles repel each other (like poles repel). The top magnet's upper face is given as N, so its lower face (P) must be S. For the middle magnet to be pushed away below it, its facing top face (Q) must also be S. That makes the middle magnet's other face N, so the bottom magnet's facing top face (R) must also be N to repel it in turn."
  },
  {
    id: 10,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Diana conducted an experiment using magnets, X and Y, of different shapes. She placed each magnet at the same distance above a tray containing identical number of iron clips. The diagrams below show her observation.",
    images: ["assets/q10-magnets-clips.jpg"],
    body: "Based on her observations above, which of the following statements are correct?\n\nA  The iron clips are made of magnetic materials.\nB  Magnet X and Y are equally strong.\nC  Magnet Y is stronger than magnet X.\nD  The magnet is strongest at its poles.",
    options: [
      { key: "1", label: "A and B only" },
      { key: "2", label: "B and D only" },
      { key: "3", label: "C and D only" },
      { key: "4", label: "A, C and D only" }
    ],
    correct: "4",
    explanation: "The iron clips are attracted to both magnets, so they are magnetic materials (A is true). Magnet Y attracts more clips than magnet X under the same conditions, so Y is stronger, not equally strong - meaning B is false and C is true. In both diagrams, the clips cluster only near the ends (poles) of the magnets, showing the magnetic force is strongest there (D is true)."
  },
  {
    id: 11,
    section: "A",
    marks: 2,
    type: "mcq",
    prompt: "Peter wanted to make an electromagnet using the electrical method. Which one of the following set-ups should he use to make the strongest electromagnet?",
    options: [
      { key: "1", label: "10 turns of wire, 1 battery", image: "assets/q11-opt1.jpg" },
      { key: "2", label: "10 turns of wire, 3 batteries", image: "assets/q11-opt2.jpg" },
      { key: "3", label: "20 turns of wire, 2 batteries", image: "assets/q11-opt3.jpg" },
      { key: "4", label: "20 turns of wire, 3 batteries", image: "assets/q11-opt4.jpg" }
    ],
    correct: "4",
    explanation: "An electromagnet gets stronger with more turns of wire and more batteries (more current). Option 4 has both the most turns (20) and the most batteries (3), so it produces the strongest electromagnet."
  },
  {
    id: 12,
    section: "B",
    type: "structured",
    prompt: "John conducted a few tests on materials Q, R and S to find out the properties of each material. He recorded the results in the table below.",
    table: {
      headers: ["Property", "Material Q", "Material R", "Material S"],
      rows: [
        ["Waterproof", "Yes", "No", "Yes"],
        ["Breaks when dropped", "No", "No", "Yes"],
        ["Allows most light to pass through", "Yes", "No", "Yes"]
      ]
    },
    parts: [
      {
        key: "a",
        marks: 2,
        type: "material-choice",
        prompt: "Which material could R and S be? Circle (select) the correct answer.",
        rows: [
          { label: "R", choices: ["glass", "plastic", "fabric"], correct: "fabric" },
          { label: "S", choices: ["glass", "plastic", "fabric"], correct: "glass" }
        ]
      },
      {
        key: "b",
        marks: 2,
        type: "written",
        prompt: "John placed his mobile phone in the pouch as shown below. The pouch allowed him to read the messages on his mobile phone while keeping it dry in the water.",
        images: ["assets/q12-pouch.jpg"],
        followUp: "Which material Q or R is most suitable to make part Z of the pouch? Explain your answer.",
        modelAnswer: "Material Q. Q allows most light to pass through and does not absorb water, so John can read the messages while keeping the phone dry in water."
      }
    ]
  },
  {
    id: 13,
    section: "B",
    type: "structured",
    prompt: "Devi sets up an experiment using four magnets of different sizes A, B, C and D as shown.",
    images: ["assets/q13-magnets-sizes.jpg"],
    body: "Each magnet was lowered into a pile of iron nails and the number of iron nails attracted by each magnet was recorded in the table below.",
    table: {
      headers: ["Magnet", "Number of iron nails attracted"],
      rows: [
        ["A", "20"],
        ["B", "12"],
        ["C", "16"],
        ["D", "8"]
      ]
    },
    parts: [
      {
        key: "a",
        marks: 1,
        type: "written",
        prompt: "State the aim of the experiment.",
        modelAnswer: "The aim of the experiment is to find out if the size of a magnet will affect the strength of the magnet."
      },
      {
        key: "b",
        marks: 1,
        type: "checkbox-table",
        prompt: "When carrying out the experiment, which variable(s) must be kept the same for a fair test? Tick (✓) the correct box(es).",
        rows: [
          { label: "Size of magnets", correct: false },
          { label: "Number of iron nails attracted", correct: false },
          { label: "Type of iron nails", correct: true }
        ]
      },
      {
        key: "c",
        marks: 2,
        type: "written",
        prompt: "Devi attached magnet D to a retort stand. She tied an iron clip to a wooden block using a piece of string. She observed that the iron clip was pulled by magnet D as shown in the set-up below.",
        images: ["assets/q13-retort-stand.jpg"],
        followUp: "Should Devi use a stronger or weaker magnet if the string for the set-up above is changed to only 5 cm in length? Explain your answer.",
        modelAnswer: "She should use a stronger magnet. A stronger magnet is able to attract the iron clip from a further distance."
      }
    ]
  }
];

const SECTION_A_MAX = 22;
const SECTION_B_MAX = 8;
const TOTAL_MAX = 30;

function scoreTest(answers) {
  let sectionA = 0;
  let sectionAPossible = 0;

  QUESTIONS.forEach(q => {
    if (q.section === "A") {
      sectionAPossible += q.marks;
      const given = answers[q.id];
      if (given != null && q.correct != null && given === q.correct) {
        sectionA += q.marks;
      }
    }
  });

  // Section B is open-ended / partially auto-gradable (material-choice, checkbox-table only)
  let sectionB = 0;
  let sectionBAutoPossible = 0;
  let sectionBManualPossible = 0;

  QUESTIONS.forEach(q => {
    if (q.section !== "B") return;
    q.parts.forEach(part => {
      const partKey = `${q.id}${part.key}`;
      if (part.type === "material-choice") {
        sectionBAutoPossible += part.marks;
        const given = answers[partKey] || {};
        const allCorrect = part.rows.every(row => given[row.label] === row.correct);
        if (allCorrect) sectionB += part.marks;
      } else if (part.type === "checkbox-table") {
        sectionBAutoPossible += part.marks;
        const given = answers[partKey] || {};
        const allCorrect = part.rows.every(row => !!given[row.label] === row.correct);
        if (allCorrect) sectionB += part.marks;
      } else {
        sectionBManualPossible += part.marks;
      }
    });
  });

  return {
    sectionA: { score: sectionA, max: sectionAPossible },
    sectionB: { score: sectionB, autoMax: sectionBAutoPossible, manualMax: sectionBManualPossible, max: SECTION_B_MAX },
    total: { score: sectionA + sectionB, max: TOTAL_MAX }
  };
}
