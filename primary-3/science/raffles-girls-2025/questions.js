// 2025 Raffles Girls' P3 Science End of Year Exam (Think Academy compilation)
// No official answer key was supplied with this paper. Every `correct` /
// `modelAnswer` value below is a suggested solution derived from the P3
// Science syllabus, not an official school answer key.
//
// Two source-material defects were found (not extraction errors - confirmed
// by close inspection of the original PDF pages):
//  - Q14: option box "C" is genuinely blank in the source (no image rendered).
//  - Q34: the properties table has no ticks at all in the source (blank).
// Both are called out directly in the relevant question text below.

const QUESTIONS = [
  // ---------------- Paper 1 (MCQ) ----------------
  {
    id: 1,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagram.",
    images: ["assets/q1-cat-vacuum.png"],
    body: "Based on the diagram, which of the following best represents the characteristic of living things demonstrated by the cat?",
    options: [
      { key: "A", label: "Living things grow." },
      { key: "B", label: "Living things reproduce." },
      { key: "C", label: "Living things respond to changes around them." },
      { key: "D", label: "Living things need air, food and water to survive." }
    ],
    correct: "C",
    explanation: "The cat reacts (arches its back, fur standing up) because it is startled by the vacuum cleaner - this is a response to a change in its surroundings (sensitivity), not growth, reproduction, or a need for air/food/water."
  },
  {
    id: 2,
    paper: 1,
    type: "mcq",
    prompt: "The graph shows the height of a plant over five months.",
    images: ["assets/q2-graph.png"],
    body: "Based on the information, what can be concluded about the plant?",
    options: [
      { key: "A", label: "The plant bears fruits as it grew." },
      { key: "B", label: "The plant needed less sunlight as it grew." },
      { key: "C", label: "The height of the plant increased as it grew." },
      { key: "D", label: "The mass of the plant remained the same as it grew." }
    ],
    correct: "C",
    explanation: "The graph only records height over time, and the bars clearly get taller from month 1 to month 6, so the only conclusion the graph supports is that the plant's height increased as it grew. It says nothing about fruits, sunlight needs, or mass."
  },
  {
    id: 3,
    paper: 1,
    type: "mcq",
    prompt: "Joe classified some animals he observed into two groups, P and Q.",
    images: ["assets/q3-animals.png"],
    body: "Based on his observation only, which characteristics did Joe use to classify the animals in groups P and Q?",
    optionTable: {
      headers: ["", "P", "Q"],
      rows: [
        ["(1)", "Four legs", "Six legs"],
        ["(2)", "Two feelers", "No feelers"],
        ["(3)", "One body part", "Three body parts"],
        ["(4)", "Has outer covering of fur", "Has outer covering of scales"]
      ]
    },
    options: [
      { key: "1", label: "P: Four legs, Q: Six legs" },
      { key: "2", label: "P: Two feelers, Q: No feelers" },
      { key: "3", label: "P: One body part, Q: Three body parts" },
      { key: "4", label: "P: Has outer covering of fur, Q: Has outer covering of scales" }
    ],
    correct: "1",
    explanation: "Group P (deer, wolf) are mammals with four legs. Group Q (beetles) are insects with six legs. Fur/scales and feelers/body-part-count don't match what's actually visible for these particular animals as cleanly as the leg count does."
  },
  {
    id: 4,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following statements correctly describes an amphibian?",
    options: [
      { key: "A", label: "It has scales." },
      { key: "B", label: "It can only live in water." },
      { key: "C", label: "It gives birth to its young alive." },
      { key: "D", label: "It breathes through their skin underwater." }
    ],
    correct: "D",
    explanation: "Amphibians (like frogs) can absorb oxygen through their moist skin while underwater. They have smooth moist skin (not scales), live both on land and in water, and lay eggs rather than giving birth to live young."
  },
  {
    id: 5,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagram carefully.",
    images: ["assets/q5-tree.png"],
    body: "Which of the following could be the headings for R and S?",
    optionTable: {
      headers: ["", "R", "S"],
      rows: [
        ["(1)", "Mammals", "Fish"],
        ["(2)", "Amphibians", "Reptiles"],
        ["(3)", "Lay eggs", "Give birth to young alive"],
        ["(4)", "Live on land", "Live in water"]
      ]
    },
    options: [
      { key: "1", label: "R: Mammals, S: Fish" },
      { key: "2", label: "R: Amphibians, S: Reptiles" },
      { key: "3", label: "R: Lay eggs, S: Give birth to young alive" },
      { key: "4", label: "R: Live on land, S: Live in water" }
    ],
    correct: "1",
    explanation: "R breathes through lungs and is split into 'has hair' (mammals) and 'has feathers' (birds) - so R covers land-breathing groups, best labelled Mammals overall relative to S. S breathes through gills and has scales, matching Fish."
  },
  {
    id: 6,
    paper: 1,
    type: "mcq",
    prompt: "Study the following flow chart.",
    images: ["assets/q6-flowchart.png"],
    body: "Which of the following best represent questions P and Q?",
    optionTable: {
      headers: ["", "Question P", "Question Q"],
      rows: [
        ["(1)", "Does it have wings?", "Is it covered with feathers?"],
        ["(2)", "Does it breathe through gills?", "Is it covered with feathers?"],
        ["(3)", "Does it have wings?", "Does it breathe through gills?"],
        ["(4)", "Does it breathe through gills?", "Does it have wings?"]
      ]
    },
    options: [
      { key: "1", label: "P: Does it have wings? Q: Is it covered with feathers?" },
      { key: "2", label: "P: Does it breathe through gills? Q: Is it covered with feathers?" },
      { key: "3", label: "P: Does it have wings? Q: Does it breathe through gills?" },
      { key: "4", label: "P: Does it breathe through gills? Q: Does it have wings?" }
    ],
    correct: "3",
    explanation: "Among egg-laying animals, Question P separates Bird (Yes) from the rest - having wings fits birds. Question Q then separates Fish (Yes, breathes through gills) from Reptile (No)."
  },
  {
    id: 7,
    paper: 1,
    type: "mcq",
    prompt: "Study the plants A and B shown in the diagrams. (Note: the source material mislabels both photos \"Plant A\" - the second one should read \"Plant B\".)",
    images: ["assets/q7-plants.png", "assets/q7-tree.png"],
    body: "Photo 1 = Plant A (has spore bags, supported by a wooden pole). Photo 2 = Plant B (a tomato plant with fruit, also supported by a pole).\n\nBased on the information above, which letters, W, X, Y or Z, best represent plants A and B respectively?",
    optionTable: {
      headers: ["", "Plant A", "Plant B"],
      rows: [
        ["(1)", "X", "Z"],
        ["(2)", "Y", "W"],
        ["(3)", "Y", "X"],
        ["(4)", "Z", "W"]
      ]
    },
    options: [
      { key: "1", label: "Plant A: X, Plant B: Z" },
      { key: "2", label: "Plant A: Y, Plant B: W" },
      { key: "3", label: "Plant A: Y, Plant B: X" },
      { key: "4", label: "Plant A: Z, Plant B: W" }
    ],
    correct: "2",
    explanation: "Plant A produces spores (non-flowering) and needs a pole for support (weak stem) = Y. Plant B flowers and bears fruit (flowering) and also needs a pole for support (weak stem) = W."
  },
  {
    id: 8,
    paper: 1,
    type: "mcq",
    prompt: "Zoe has four plants, E, F, G and H, with characteristics as shown in the table below.",
    table: {
      headers: ["Characteristic", "E", "F", "G", "H"],
      rows: [
        ["Grows on land", "✓", "✓", "", ""],
        ["Reproduces by spores", "", "✓", "", "✓"],
        ["Bears fruit", "✓", "", "✓", ""]
      ]
    },
    body: "Based on the information above, Zoe classified her plants as shown below: Group 1 = F, H. Group 2 = E, G.\n\nWhich of the following sub-headings for groups 1 and 2 are correct?",
    optionTable: {
      headers: ["", "Group 1", "Group 2"],
      rows: [
        ["(1)", "Ferns", "Fungi"],
        ["(2)", "Fungi", "Non-flowering"],
        ["(3)", "Lives on land", "Lives on water"],
        ["(4)", "Non-flowering", "Flowering"]
      ]
    },
    options: [
      { key: "1", label: "Group 1: Ferns, Group 2: Fungi" },
      { key: "2", label: "Group 1: Fungi, Group 2: Non-flowering" },
      { key: "3", label: "Group 1: Lives on land, Group 2: Lives on water" },
      { key: "4", label: "Group 1: Non-flowering, Group 2: Flowering" }
    ],
    correct: "4",
    explanation: "F and H reproduce by spores, a feature of non-flowering plants. E and G bear fruit, which only happens after a plant flowers - so E and G are flowering plants."
  },
  {
    id: 9,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following statements describe the similarity between the mushroom and the bacteria?",
    options: [
      { key: "A", label: "They are micro-organisms." },
      { key: "B", label: "They need water to survive." },
      { key: "C", label: "They can make their own food." },
      { key: "D", label: "They do not need air to survive." }
    ],
    correct: "B",
    explanation: "Like all living things, both mushrooms and bacteria need water to survive. Mushrooms are not microscopic (unlike bacteria), and neither makes its own food (both feed on other organic matter) or generally survives without air."
  },
  {
    id: 10,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following stages is not found in the life cycle of a mealworm beetle?",
    options: [
      { key: "A", label: "Egg" },
      { key: "B", label: "Pupa" },
      { key: "C", label: "Larva" },
      { key: "D", label: "Nymph" }
    ],
    correct: "D",
    explanation: "A mealworm beetle undergoes complete metamorphosis: egg, larva, pupa, adult. 'Nymph' is the term used for the young stage of insects with incomplete metamorphosis (like cockroaches), not beetles."
  },
  {
    id: 11,
    paper: 1,
    type: "mcq",
    prompt: "The diagrams show the life cycles of animals P and Q.",
    images: ["assets/q11-cycles.png"],
    body: "Which of the following most likely represents P and Q correctly?",
    optionTable: {
      headers: ["", "Animal P", "Animal Q"],
      rows: [
        ["(1)", "Mosquito", "Grasshopper"],
        ["(2)", "Cockroach", "Butterfly"],
        ["(3)", "Butterfly", "Mosquito"],
        ["(4)", "Grasshopper", "Cockroach"]
      ]
    },
    options: [
      { key: "1", label: "P: Mosquito, Q: Grasshopper" },
      { key: "2", label: "P: Cockroach, Q: Butterfly" },
      { key: "3", label: "P: Butterfly, Q: Mosquito" },
      { key: "4", label: "P: Grasshopper, Q: Cockroach" }
    ],
    correct: "2",
    explanation: "P shows egg-nymph-adult (incomplete metamorphosis) which matches a cockroach. Q shows egg-larva-pupa-adult (complete metamorphosis) which matches a butterfly."
  },
  {
    id: 12,
    paper: 1,
    type: "mcq",
    prompt: "The diagrams show the life cycles of animals X and Y.",
    images: ["assets/q12-cycles.png"],
    body: "Based on the information, which of the following statements is true about the life cycles?",
    options: [
      { key: "A", label: "Animal X has more stages in its life cycle than animal Y." },
      { key: "B", label: "Animal X gives birth to its young alive but not animal Y." },
      { key: "C", label: "Animal Y has a larval stage in its life cycle but not animal X." },
      { key: "D", label: "Animal Y has a young that looks like the adult but not animal X." }
    ],
    correct: "C",
    explanation: "Animal X (chicken) has 3 stages (egg, chick, adult) with no larval stage. Animal Y (beetle) has 4 stages including a larva stage. So Y has a larval stage that X does not."
  },
  {
    id: 13,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following diagrams show the correct life cycle of a plant?",
    options: [
      { key: "A", label: "Option A", image: "assets/q13-optA.png" },
      { key: "B", label: "Option B", image: "assets/q13-optB.png" },
      { key: "C", label: "Option C", image: "assets/q13-optC.png" },
      { key: "D", label: "Option D", image: "assets/q13-optD.png" }
    ],
    correct: "B",
    explanation: "The correct cycle is: young plant grows into an adult plant, the adult plant produces a seed, and the seed grows into a young plant again. Option B's arrows trace exactly this loop (young plant -> adult plant -> seed -> young plant)."
  },
  {
    id: 14,
    paper: 1,
    type: "mcq",
    prompt: "The diagrams show the different stages of the development of a plant. The stages are not in the correct order. (Note: box C is genuinely blank in the source material - no image was printed there.)",
    images: ["assets/q14-stages.png"],
    body: "At which stage(s) can the plant bear fruits?",
    options: [
      { key: "A", label: "A only" },
      { key: "B", label: "D only" },
      { key: "C", label: "A and D only" },
      { key: "D", label: "B and C only" }
    ],
    correct: "A",
    explanation: "Only stage A shows a flower. A plant can only bear fruit after its flower has been pollinated, so only the flowering stage (A) can lead to fruit. B and D are earlier seedling stages with no flowers yet."
  },
  {
    id: 15,
    paper: 1,
    type: "mcq",
    prompt: "Judy observed the growth of a plant over stages A, B, C and D.",
    images: ["assets/q15-plants.png"],
    body: "Which of the following graphs shows her observation correctly?",
    options: [
      { key: "A", label: "Option A", image: "assets/q15-optA.png" },
      { key: "B", label: "Option B", image: "assets/q15-optB.png" },
      { key: "C", label: "Option C", image: "assets/q15-optC.png" },
      { key: "D", label: "Option D", image: "assets/q15-optD.png" }
    ],
    correct: "D",
    explanation: "The plant already has a couple of leaves at stage A (not zero) and grows more leaves at each stage through D. Only option D shows a small non-zero bar at A that keeps increasing all the way to D."
  },
  {
    id: 16,
    paper: 1,
    type: "mcq",
    prompt: "Henry wanted to choose a material to make part X of his display cabinet doors to allow him to see his trophies.",
    images: ["assets/q16-cabinet.png"],
    body: "Which of the following properties is most important to take into consideration when choosing the material to make part X?",
    options: [
      { key: "A", label: "Strength" },
      { key: "B", label: "Flexibility" },
      { key: "C", label: "Waterproof" },
      { key: "D", label: "Transparency" }
    ],
    correct: "D",
    explanation: "Part X is the door panel, and Henry needs to see his trophies through it, so the most important property is transparency (allowing light/vision through)."
  },
  {
    id: 17,
    paper: 1,
    type: "mcq",
    prompt: "Raj dropped four similar objects, A, B, C and D, made of different materials into a container as shown below.",
    images: ["assets/q17-container.png"],
    body: "Which material, A, B, C or D, should be used to make the toy boat so it can be played in a bath tub?",
    options: [
      { key: "A", label: "A" },
      { key: "B", label: "B" },
      { key: "C", label: "C" },
      { key: "D", label: "D" }
    ],
    correct: "A",
    explanation: "A boat needs to float. Object A is shown resting at the water's surface (floating), while B, C and D are shown submerged at various depths (sinking)."
  },
  {
    id: 18,
    paper: 1,
    type: "mcq",
    prompt: "Jim wore a pair of sunglasses outdoors as its lenses help to reduce the amount of light entering the eyes.",
    images: ["assets/q18-sunglasses.png"],
    body: "The table below shows the amount of light from a torch passing through lenses L, M, N and O. The amount of light from the torch is 100 units.",
    table: {
      headers: ["Lens", "Amount of light that passed through the lens (unit)"],
      rows: [["L", "97"], ["M", "45"], ["N", "0"], ["O", "60"]]
    },
    body2: "Which of the lens(es) is/are most likely to be suitable to make the lenses of Jim's sunglasses?",
    options: [
      { key: "A", label: "L only" },
      { key: "B", label: "N only" },
      { key: "C", label: "M and O only" },
      { key: "D", label: "L, M and O only" }
    ],
    correct: "C",
    explanation: "Sunglasses should reduce light without blocking it completely. L (97) lets through almost all light - too clear. N (0) blocks all light - too dark to see anything. M (45) and O (60) both cut the light roughly in half, a suitable reduction."
  },
  {
    id: 19,
    paper: 1,
    type: "mcq",
    prompt: "Ahmad carried out an experiment using different materials, P, Q, R and S. He attached a 4kg-mass to each strip of material and measured the distance it bent, d, as shown in the diagram.",
    images: ["assets/q19-setup.png", "assets/q19-graph.png", "assets/q19-key.png"],
    body: "He recorded his results in the graph below.",
    body2: "Which material, P, Q, R or S, is most suitable to be made into a key?",
    options: [
      { key: "A", label: "P" },
      { key: "B", label: "Q" },
      { key: "C", label: "R" },
      { key: "D", label: "S" }
    ],
    correct: "C",
    explanation: "A key needs to be rigid and not bend under force. Material R did not bend at all (d = 0cm) under the 4kg mass, making it the strongest/most rigid choice, unlike P, Q and S which all bent."
  },
  {
    id: 20,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following does not demagnetise a magnet?",
    options: [
      { key: "A", label: "Heat the magnet using a fire." },
      { key: "B", label: "Stroke the magnet with a silver bar." },
      { key: "C", label: "Hit the magnet with a hammer several times." },
      { key: "D", label: "Drop the magnet from a height several times." }
    ],
    correct: "B",
    explanation: "Heating, hammering, and repeated dropping (mechanical shock) are all known ways to demagnetise a magnet. Silver is not a magnetic material, so stroking a magnet with a silver bar has no demagnetising effect."
  },
  {
    id: 21,
    paper: 1,
    type: "mcq",
    prompt: "The diagram below shows three rings, P, Q and R, placed freely on a wooden rod. There are two ring magnets and one plastic ring.",
    images: ["assets/q21-rings.png"],
    body: "Based on the information above, which of the following statement(s) is/are correct?\n\nA  Like poles of rings Q and R are facing each other.\nB  Unlike poles of rings P and Q are facing each other.\nC  Rings Q and P are magnets, while ring R is a plastic ring.",
    options: [
      { key: "1", label: "A only" },
      { key: "2", label: "B only" },
      { key: "3", label: "A and B only" },
      { key: "4", label: "A and C only" }
    ],
    correct: "1",
    explanation: "P sits on the base, Q rests on P, but R floats above Q - proving Q and R are both magnets with like poles facing (repelling). Since Q is already confirmed a magnet and P doesn't float, P must be the plastic ring - making B and C both incorrect (P has no poles, and it's Q & R that are magnets, not Q & P)."
  },
  {
    id: 22,
    paper: 1,
    type: "mcq",
    prompt: "A plastic bowl is filled with water. A magnet is attached to a piece of wood which floats freely on the water as shown in the diagram.",
    images: ["assets/q22-bowl.png"],
    body: "After some time, the magnet will come to rest pointing in the _____ direction.",
    options: [
      { key: "A", label: "East-West" },
      { key: "B", label: "South-East" },
      { key: "C", label: "North-West" },
      { key: "D", label: "North-South" }
    ],
    correct: "D",
    explanation: "A magnet that is free to turn (floating freely, like a compass needle) will always align itself with the Earth's magnetic field and settle pointing North-South."
  },
  {
    id: 23,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagrams.",
    images: ["assets/q23-setups.png"],
    body: "Which of the following shows the correct arrangement of the electromagnets according to their magnetic strengths starting from the weakest to the strongest?",
    optionTable: {
      headers: ["", "Weakest", "", "", "Strongest"],
      rows: [
        ["(1)", "B", "A", "C", "D"],
        ["(2)", "C", "D", "A", "B"],
        ["(3)", "D", "C", "A", "B"],
        ["(4)", "D", "C", "B", "A"]
      ]
    },
    options: [
      { key: "1", label: "B, A, C, D" },
      { key: "2", label: "C, D, A, B" },
      { key: "3", label: "D, C, A, B" },
      { key: "4", label: "D, C, B, A" }
    ],
    correct: "2",
    explanation: "A and B have the same (many) coils, but B has more batteries, so B is stronger than A. C and D have the same (few) coils, but D has more batteries, so D is stronger than C. Only option 2 (C, D, A, B) is consistent with both of these relationships."
  },
  {
    id: 24,
    paper: 1,
    type: "mcq",
    prompt: "Ai Ting stroked a steel nail with a magnet as shown in the diagram. She placed a compass near to one end of the magnetised nail and made an observation.",
    images: ["assets/q24-stroke.png"],
    body: "Which of the following is the correct observation?",
    options: [
      { key: "A", label: "Option A", image: "assets/q24-optA.png" },
      { key: "B", label: "Option B", image: "assets/q24-optB.png" },
      { key: "C", label: "Option C", image: "assets/q24-optC.png" },
      { key: "D", label: "Option D", image: "assets/q24-optD.png" }
    ],
    correct: "C",
    explanation: "Stroking with the magnet's S pole moving from the head towards the tip makes the tip end become a North pole. A compass placed near that N pole will have its own South pole (the end nearer the nail) attracted towards it - this is exactly what option C shows."
  },
  {
    id: 25,
    paper: 1,
    type: "mcq",
    prompt: "The arrows in the diagrams show the direction in which the bars moved when they were brought close to each other.",
    images: ["assets/q25-bars.png", "assets/q25-doorstop.png"],
    body: "The diagram below shows a doorstop which is used to hold the door open.",
    body2: "Which metal bar(s), P, Q and R can be used to make the part X?",
    options: [
      { key: "A", label: "P only" },
      { key: "B", label: "P and Q only" },
      { key: "C", label: "Q and R only" },
      { key: "D", label: "P, Q and R" }
    ],
    correct: "C",
    explanation: "Working through the three interactions shows Q and R must both be magnets (repulsion between them proves it), while P cannot be a magnet (assuming it is leads to a contradiction) - P is just a magnetic material. Part X needs to actively attract the separate steel piece in the doorstop, which requires a real magnet - so only Q and R (the confirmed magnets) can work."
  },
  {
    id: 26,
    paper: 2,
    type: "structured",
    prompt: "Helen classified the animals below according to their outer covering.",
    images: ["assets/q26-animals.png"],
    parts: [
      {
        key: "1i",
        type: "short-text",
        prompt: "Name the outer covering of the animals in Group A.",
        correct: "scales"
      },
      {
        key: "1ii",
        type: "short-text",
        prompt: "Name the outer covering of the animals in Group B.",
        correct: "feathers"
      },
      {
        key: "2i",
        type: "short-text",
        prompt: "Suggest another suitable heading for Group A.",
        correct: "reptiles",
        accept: ["reptile"]
      },
      {
        key: "2ii",
        type: "short-text",
        prompt: "Suggest another suitable heading for Group B.",
        correct: "birds",
        accept: ["bird"]
      }
    ]
  },
  {
    id: 27,
    paper: 2,
    type: "structured",
    prompt: "Based on the characteristics of living things, state whether the following statements are 'True' or 'False'.",
    parts: [
      {
        key: "a",
        type: "short-text",
        prompt: "All living things can grow and die.",
        correct: "true"
      },
      {
        key: "b",
        type: "short-text",
        prompt: "Not all living things can reproduce.",
        correct: "false"
      },
      {
        key: "c",
        type: "short-text",
        prompt: "Anything which can move is a living thing.",
        correct: "false"
      },
      {
        key: "d",
        type: "short-text",
        prompt: "All living things need air, food and water to survive.",
        correct: "true"
      }
    ]
  },

  // ---------------- Paper 2 (structured) ----------------
  {
    id: 28,
    paper: 2,
    type: "structured",
    prompt: "Study the flowchart.",
    images: ["assets/q28-flowchart.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "State one difference between animals D and F.",
        modelAnswer: "D (e.g. kangaroo) gives birth to live young, while F (e.g. frog) lays eggs. (Alternatively: D has fur/hair, while F has smooth, moist skin.)"
      },
      {
        key: "2",
        images: ["assets/q28-animals.png"],
        type: "written",
        prompt: "The table shows four animals (bat, frog, kangaroo, owl). Fill in the boxes with the correct letter, C, D, E or F.",
        modelAnswer: "Bat = C (mammal that flies), Frog = F (lays eggs, no feathers), Kangaroo = D (mammal, doesn't fly), Owl = E (lays eggs, has feathers)."
      }
    ]
  },
  {
    id: 29,
    paper: 2,
    type: "structured",
    prompt: "Kim carried out an experiment to find out if mould needs light to grow. She sprinkled water on two slices of bread. Then she placed each slice into bags P and Q as shown.",
    images: ["assets/q29-bagsPQ.png"],
    parts: [
      {
        key: "1",
        type: "checkbox-table",
        prompt: "Which of the following condition(s) must be kept the same to ensure a fair experiment? Tick (✓) the correct box(es).",
        rows: [
          { label: "Type of bread", correct: true },
          { label: "Presence of light", correct: false },
          { label: "Amount of water on the bread", correct: true }
        ]
      },
      {
        key: "2",
        images: ["assets/q29-bagR.png"],
        type: "written",
        prompt: "In another experiment, Kim toasted a slice of bread for three minutes under high heat, let it cool down completely, then sealed it in bag R. Kim predicted that no mould would grow on this bread after a week. Do you agree? Explain why.",
        modelAnswer: "I disagree. Although the high heat from toasting kills the mould spores already on the bread, the bread is exposed to open air while it cools down before being sealed - new mould spores from the air can land on it during this time and still grow given enough time in the sealed bag."
      }
    ]
  },
  {
    id: 30,
    paper: 2,
    type: "structured",
    prompt: "The diagrams below show the different stages, L, M and N, in the life cycle of a frog.",
    images: ["assets/q30-stages.png"],
    parts: [
      {
        key: "1",
        images: ["assets/q30-cycle.png"],
        type: "written",
        prompt: "Fill in the letters, L or N, into the correct boxes to show the stages of the life cycle of the frog (cycle starts at M).",
        modelAnswer: "M -> L -> N -> back to M. (Egg -> tadpole -> adult frog -> egg.) So the top-right box is L and the bottom box is N."
      },
      {
        key: "2",
        type: "short-text",
        prompt: "At which stage(s), L, M or N, do(es) the animal live on both land and in water?",
        correct: "N"
      }
    ]
  },
  {
    id: 31,
    paper: 2,
    type: "structured",
    prompt: "Annie observed a mosquito at each stage of its life cycle. She recorded her observations in the graph shown.",
    images: ["assets/q31-graph.png"],
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "Based on her observations, how many days does it take for the mosquito to turn into an adult after it has hatched?",
        correct: "8",
        accept: ["8 days"]
      },
      {
        key: "2",
        images: ["assets/q31-diagrams.png"],
        type: "written",
        prompt: "The mosquito larvae take in surrounding air through their breathing tubes as shown in diagram 1. Annie poured a layer of oil, which floats on the water, into a beaker of water as shown in diagram 2. Explain why the layer of oil would kill mosquito larvae when it is added into the stagnant water.",
        modelAnswer: "The layer of oil floats on top of the water and blocks/coats the larvae's breathing tubes, preventing them from reaching the air above the surface. Without access to air, the larvae cannot breathe and will suffocate."
      }
    ]
  },
  {
    id: 32,
    paper: 2,
    type: "structured",
    prompt: "Read the following statements. Fill in the blanks with the numbers 1, 2, 3 and 4 to show the sequence of the development of a plant.",
    parts: [
      {
        key: "a",
        type: "short-text",
        prompt: "The plant starts to flower.",
        correct: "4"
      },
      {
        key: "b",
        type: "short-text",
        prompt: "The seed is put into the soil.",
        correct: "1"
      },
      {
        key: "c",
        type: "short-text",
        prompt: "The seed starts to grow the roots.",
        correct: "2"
      },
      {
        key: "d",
        type: "short-text",
        prompt: "The seed starts to grow the shoot.",
        correct: "3"
      }
    ]
  },
  {
    id: 33,
    paper: 2,
    type: "structured",
    prompt: "Mr Ravi prepared three set-ups, A, B and C, in the same room as shown in the diagram.",
    images: ["assets/q33-setups.png"],
    parts: [
      {
        key: "1a",
        type: "short-text",
        prompt: "Mr Ravi wanted to find out if water is needed for seeds to germinate. Which two set-ups should he use to make sure there is only one changed variable? (First set-up letter)",
        correct: "A",
        accept: ["B"]
      },
      {
        key: "1b",
        type: "short-text",
        prompt: "(Second set-up letter)",
        correct: "C"
      },
      {
        key: "2",
        type: "written",
        prompt: "In which set-up(s) would germination occur after a few days? Explain why.",
        modelAnswer: "Set-ups A and B, because their cotton wool is moist, providing the water the seeds need to germinate. Set-up C's cotton wool is dry, so its seed lacks water and will not germinate."
      }
    ]
  },
  {
    id: 34,
    paper: 2,
    type: "structured",
    prompt: "Materials W, X, Y and Z are classified in the table below. A tick (✓) shows the presence of the properties. (Note: the properties table is genuinely blank in the source material - no ticks were printed for any material.)",
    images: ["assets/q34-table.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "Based on the table above, state the property of material X.",
        modelAnswer: "The source table's ticks did not print, so the exact property of X can't be read off directly. Based on part (2) below (X is proposed for the transparent viewing wall of a capsule), X is most likely transparent - but for the capsule to be safe, it would also need to be strong, which the blank table cannot confirm one way or the other."
      },
      {
        key: "2",
        images: ["assets/q34-capsule.png"],
        type: "written",
        prompt: "The diagram shows a sky-high observation capsule. It was suggested to use material X to make part G of the capsule (the transparent floor/wall panel) to allow visitors to enjoy the city view safely. Do you agree? Explain your answer.",
        modelAnswer: "This depends on X's actual properties (unreadable from the blank source table). To agree, X would need to be BOTH transparent (so visitors can see the view/ground) AND strong (so the panel can safely hold their weight and withstand the outdoor conditions). If X is only transparent but not strong, it would not be safe to use, and a stronger transparent material should be used instead."
      }
    ]
  },
  {
    id: 35,
    paper: 2,
    type: "structured",
    prompt: "Sally conducted an experiment to find out how well each material, P, Q, R and S, can absorb water. Each material was identical in size, length and thickness. She dipped one end of each material into a container of coloured water. At the end of the experiment, the height of the water level on each material was observed as shown below.",
    images: ["assets/q35-experiment.png"],
    parts: [
      {
        key: "1a",
        type: "short-text",
        prompt: "Arrange the materials from non-absorbent to most absorbent (1st, most non-absorbent).",
        correct: "P"
      },
      {
        key: "1b",
        type: "short-text",
        prompt: "(2nd)",
        correct: "R"
      },
      {
        key: "1c",
        type: "short-text",
        prompt: "(3rd)",
        correct: "Q"
      },
      {
        key: "1d",
        type: "short-text",
        prompt: "(4th, most absorbent)",
        correct: "S"
      },
      {
        key: "2",
        images: ["assets/q35-mop.png"],
        type: "written",
        prompt: "The diagram shows a mop. Using the information from your answer above, which material, P, Q, R or S, is most suitable to make part A (the mop head) of a mop? Give a reason for your answer.",
        modelAnswer: "Material S, because it was the most absorbent material in the experiment (the water rose highest through it) - a mop head needs to absorb as much liquid as possible from the floor."
      }
    ]
  },
  {
    id: 36,
    paper: 2,
    type: "structured",
    prompt: "Mrs Gopal wanted to find out if the type of metal rod affects the strength of an electromagnet. She set up the experiment using metal rods, W, X, Y and Z separately as shown in the diagram.",
    images: ["assets/q36-setup.png"],
    table: {
      headers: ["Metal rod", "Distance at which the steel clip would be attracted by the metal rods (cm)"],
      rows: [["W", "8"], ["X", "6"], ["Y", "4"], ["Z", "(no interaction observed)"]]
    },
    body: "Mrs Gopal observed that there was no interaction between the set-up and the steel clip when rod Z was used.",
    parts: [
      {
        key: "1",
        type: "checkbox-table",
        prompt: "Tick (✓) the material that was used to make metal rod Z.",
        rows: [
          { label: "Iron", correct: false },
          { label: "Nickel", correct: false },
          { label: "Copper", correct: true },
          { label: "Cobalt", correct: false }
        ]
      },
      {
        key: "2",
        type: "written",
        prompt: "State a reason for your answer in part (1).",
        modelAnswer: "Copper is not a magnetic material, so it cannot be magnetised to form a working electromagnet - this explains why there was no attraction at all with rod Z. (Iron, nickel and cobalt are all magnetic materials and would have shown some attraction.)"
      },
      {
        key: "3",
        images: ["assets/q36-nails.png"],
        type: "written",
        prompt: "Mrs Gopal wants to make an electromagnet to pick up as many steel nails as possible. Which metal rod, W, X, Y or Z, should she use? Explain why.",
        modelAnswer: "She should use rod W. It produced the strongest electromagnet, since it attracted the steel clip from the greatest distance (8cm, compared to 6cm for X and 4cm for Y) - a stronger electromagnet can pick up more steel nails. Rod Z cannot be used at all since it is non-magnetic (copper)."
      }
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
  let paper1Score = 0;
  let paper1Max = 0;
  QUESTIONS.forEach(q => {
    if (q.paper !== 1 || q.type !== "mcq") return;
    paper1Max += 1;
    const given = answers[q.id];
    if (given != null && given === q.correct) paper1Score += 1;
  });

  let autoScore = 0;
  let autoMax = 0;
  let manualMax = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "mcq") return; // already counted in paper1 above, and there are no paper-2 mcqs
    q.parts.forEach(part => {
      const partKey = `${q.id}${part.key}`;
      if (part.type === "short-text") {
        autoMax += 1;
        if (isShortTextCorrect(part, answers[partKey])) autoScore += 1;
      } else if (part.type === "checkbox-table") {
        autoMax += 1;
        const given = answers[partKey] || {};
        const allCorrect = part.rows.every(row => !!given[row.label] === row.correct);
        if (allCorrect) autoScore += 1;
      } else {
        manualMax += 1;
      }
    });
  });

  return {
    paper1: { score: paper1Score, max: paper1Max },
    paper2: { score: autoScore, autoMax: autoMax, manualMax: manualMax },
    total: {
      autoScore: paper1Score + autoScore,
      autoMax: paper1Max + autoMax,
      manualMax: manualMax
    }
  };
}
