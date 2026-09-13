// 2025 Nanyang P3 Science End of Year Exam (Think Academy compilation)
// No official answer key was supplied with this paper. Every `correct` /
// `modelAnswer` value below is a suggested solution derived from the P3
// Science syllabus, not an official school answer key.

const QUESTIONS = [
  // ---------------- Paper 1 (MCQ) ----------------
  {
    id: 1,
    paper: 1,
    type: "mcq",
    prompt: "James made the following observations about his dog.\n\nA  It gave birth to puppies.\nB  It shivers when feeling cold.\nC  It became too heavy to be carried.\n\nWhich of the observations show that James' dog is a living thing?",
    options: [
      { key: "1", label: "A and B only" },
      { key: "2", label: "A and C only" },
      { key: "3", label: "B and C only" },
      { key: "4", label: "A, B and C" }
    ],
    correct: "4",
    explanation: "A shows reproduction, B shows response to surroundings (sensitivity), and C shows growth - all three are signs of life, so all three observations show the dog is living."
  },
  {
    id: 2,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagram below.",
    images: ["assets/q2-flowchart.png"],
    body: "Which of the following shows the living things represented by P, Q, R and S?",
    optionTable: {
      headers: ["", "P", "Q", "R", "S"],
      rows: [
        ["(1)", "moss", "mushroom", "hibiscus plant", "cat"],
        ["(2)", "mushroom", "moss", "hibiscus plant", "cat"],
        ["(3)", "hibiscus plant", "moss", "cat", "mushroom"],
        ["(4)", "hibiscus plant", "mushroom", "cat", "moss"]
      ]
    },
    options: [
      { key: "1", label: "P: moss, Q: mushroom, R: hibiscus plant, S: cat" },
      { key: "2", label: "P: mushroom, Q: moss, R: hibiscus plant, S: cat" },
      { key: "3", label: "P: hibiscus plant, Q: moss, R: cat, S: mushroom" },
      { key: "4", label: "P: hibiscus plant, Q: mushroom, R: cat, S: moss" }
    ],
    correct: "3",
    explanation: "Things that make their own food are plants: bearing flowers gives P = hibiscus plant, not bearing flowers gives Q = moss. Things that don't make their own food: moving freely gives R = cat, not moving gives S = mushroom."
  },
  {
    id: 3,
    paper: 1,
    type: "mcq",
    prompt: "Which statement about fish and reptiles is correct?",
    options: [
      { key: "1", label: "Both have fins." },
      { key: "2", label: "Both are covered with scales." },
      { key: "3", label: "Fish lay eggs but reptiles give birth to young." },
      { key: "4", label: "Fish live in water but reptiles live only on land." }
    ],
    correct: "2",
    explanation: "Both fish and reptiles have bodies covered in scales. Reptiles don't have fins, most reptiles lay eggs too, and many reptiles (turtles, crocodiles) live in water as well as on land."
  },
  {
    id: 4,
    paper: 1,
    type: "mcq",
    prompt: "Three animals, X, Y and Z are shown below.",
    images: ["assets/q4-animals.png"],
    body: "Based on the diagrams above, which animals can be correctly classified as insects?",
    options: [
      { key: "1", label: "X and Y only" },
      { key: "2", label: "X and Z only" },
      { key: "3", label: "Y and Z only" },
      { key: "4", label: "X, Y and Z" }
    ],
    correct: "1",
    explanation: "Insects have 6 legs and a pair of feelers (antennae). X and Y both have feelers and 6 legs, so they are insects. Z has claws and 8 legs, so it is an arachnid, not an insect."
  },
  {
    id: 5,
    paper: 1,
    type: "mcq",
    prompt: "Study the chart below.",
    images: ["assets/q5-chart.png"],
    body: "Which of the following represents Questions A and B correctly?",
    optionTable: {
      headers: ["", "Question A", "Question B"],
      rows: [
        ["(1)", "Does it have gills?", "Does it have hair?"],
        ["(2)", "Does it have a tail?", "Does it have wings?"],
        ["(3)", "Does it have scales?", "Does it have four legs?"],
        ["(4)", "Does it have fins?", "Does it have feathers?"]
      ]
    },
    options: [
      { key: "1", label: "A: Does it have gills? B: Does it have hair?" },
      { key: "2", label: "A: Does it have a tail? B: Does it have wings?" },
      { key: "3", label: "A: Does it have scales? B: Does it have four legs?" },
      { key: "4", label: "A: Does it have fins? B: Does it have feathers?" }
    ],
    correct: "4",
    explanation: "Question A must identify fish (Yes) - fins are a fish feature. Question B must separate Bird (Yes) from Mammal (No) - feathers are a bird feature, so 'Yes' correctly leads to Bird."
  },
  {
    id: 6,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following statements are true about bacteria?",
    body: "A  Bacteria are living things.\nB  All bacteria are harmful to humans.\nC  Bacteria come in different shapes and sizes.\nD  We can easily see bacteria with our naked eye.",
    options: [
      { key: "1", label: "A and B only" },
      { key: "2", label: "A and C only" },
      { key: "3", label: "B and D only" },
      { key: "4", label: "C and D only" }
    ],
    correct: "2",
    explanation: "Bacteria are living things (A) and exist in many shapes and sizes such as rods and spheres (C). Not all bacteria are harmful - many are beneficial - and bacteria are microscopic, too small to see with the naked eye."
  },
  {
    id: 7,
    paper: 1,
    type: "mcq",
    prompt: "Lindy placed 4 cookies in 4 identical sealed bags in a room as shown below.",
    images: ["assets/q7-cookies.png"],
    body: "In which set-up would mould most likely grow on the cookie first?",
    options: [
      { key: "1", label: "Set-up A" },
      { key: "2", label: "Set-up B" },
      { key: "3", label: "Set-up C" },
      { key: "4", label: "Set-up D" }
    ],
    correct: "4",
    explanation: "Mould grows fastest in warm, moist conditions. Set-up D has extra water sprinkled on the cookie, giving it the most moisture at room temperature, so mould grows there first."
  },
  {
    id: 8,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following is correct for both the life cycle of a frog and the life cycle of a cockroach?",
    body: "A  Both the young look like the adult.\nB  Both life cycles take place fully on land.\nC  Both life cycles have the same number of stages.",
    options: [
      { key: "1", label: "A only" },
      { key: "2", label: "C only" },
      { key: "3", label: "A and B only" },
      { key: "4", label: "B and C only" }
    ],
    correct: "2",
    explanation: "Both life cycles have 3 main stages (egg, young, adult), even though the young look and live differently: a tadpole doesn't resemble a frog and lives in water, while a nymph resembles a cockroach and lives on land."
  },
  {
    id: 9,
    paper: 1,
    type: "mcq",
    prompt: "The graph below shows how long Animal X and Animal Y spent in each stage of their life cycle.",
    images: ["assets/q9-graph.png"],
    body: "At which stage will Animal X and Animal Y be on the 12th day after the eggs hatch?",
    optionTable: {
      headers: ["", "Animal X", "Animal Y"],
      rows: [
        ["(1)", "larva", "adult"],
        ["(2)", "pupa", "larva"],
        ["(3)", "pupa", "adult"],
        ["(4)", "adult", "pupa"]
      ]
    },
    options: [
      { key: "1", label: "X: larva, Y: adult" },
      { key: "2", label: "X: pupa, Y: larva" },
      { key: "3", label: "X: pupa, Y: adult" },
      { key: "4", label: "X: adult, Y: pupa" }
    ],
    correct: "3",
    explanation: "Counting from egg hatching: Animal X spends 11 days as larva, so by day 12 it has moved into the pupa stage. Animal Y spends 4 days as larva and 7 as pupa (11 days total), so by day 12 it has already become an adult."
  },
  {
    id: 10,
    paper: 1,
    type: "mcq",
    prompt: "The diagram below shows the various stages in the life cycle of a plant.",
    images: ["assets/q10-stages.png"],
    body: "Which one of the following correctly shows the life cycle of a plant?",
    options: [
      { key: "1", label: "Option A", image: "assets/q10-optA.png" },
      { key: "2", label: "Option B", image: "assets/q10-optB.png" },
      { key: "3", label: "Option C", image: "assets/q10-optC.png" },
      { key: "4", label: "Option D", image: "assets/q10-optD.png" }
    ],
    correct: "4",
    explanation: "The correct growth order is Q (dry seed) -> P (root just emerges) -> S (root grows further) -> R (shoot and leaves emerge) -> back to Q. Reading option D's arrows (S -> R -> Q -> P -> S) traces this same cycle."
  },
  {
    id: 11,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagram below.",
    images: ["assets/q11-tree.png"],
    body: "What could materials W, X and Y be?",
    optionTable: {
      headers: ["", "W", "X", "Y"],
      rows: [
        ["(1)", "metal", "wood", "fabric"],
        ["(2)", "wood", "glass", "plastic"],
        ["(3)", "plastic", "rubber", "fabric"],
        ["(4)", "ceramic", "rubber", "metal"]
      ]
    },
    options: [
      { key: "1", label: "W: metal, X: wood, Y: fabric" },
      { key: "2", label: "W: wood, X: glass, Y: plastic" },
      { key: "3", label: "W: plastic, X: rubber, Y: fabric" },
      { key: "4", label: "W: ceramic, X: rubber, Y: metal" }
    ],
    correct: "3",
    explanation: "A pen and comb are commonly made of rigid plastic (W). A balloon and bicycle tyre are stretchy rubber (X). A towel and bedsheet are soft, absorbent fabric (Y)."
  },
  {
    id: 12,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagram below.",
    table: {
      headers: ["Group A", "Group B"],
      rows: [["metal block, glass marble", "balloon filled with air, styrofoam ball"]]
    },
    body: "How have the objects been classified into Group A and B?",
    options: [
      { key: "1", label: "Group A: flexible, Group B: not flexible" },
      { key: "2", label: "Group A: sink in water, Group B: float in water" },
      { key: "3", label: "Group A: break easily, Group B: do not break easily" },
      { key: "4", label: "Group A: allow most light to pass through, Group B: do not allow light to pass through" }
    ],
    correct: "2",
    explanation: "The metal block and glass marble are dense and sink in water. The air-filled balloon and styrofoam ball are light and float in water."
  },
  {
    id: 13,
    paper: 1,
    type: "mcq",
    prompt: "Study the diagram below. Different materials are used to make different parts of a window.",
    images: ["assets/q13-window.png"],
    body: "Which of the following best describes the properties of materials used to make the different parts of the window?",
    optionTable: {
      headers: ["", "metal", "glass"],
      rows: [
        ["(1)", "strong", "allows light to pass through"],
        ["(2)", "flexible", "does not allow light to pass through"],
        ["(3)", "waterproof", "flexible"],
        ["(4)", "able to float on water", "waterproof"]
      ]
    },
    options: [
      { key: "1", label: "metal: strong, glass: allows light to pass through" },
      { key: "2", label: "metal: flexible, glass: does not allow light to pass through" },
      { key: "3", label: "metal: waterproof, glass: flexible" },
      { key: "4", label: "metal: able to float on water, glass: waterproof" }
    ],
    correct: "1",
    explanation: "The metal frame needs to be strong to support and hold the window's structure, while the glass pane needs to allow light to pass through so people can see through it."
  },
  {
    id: 14,
    paper: 1,
    type: "mcq",
    prompt: "Ben wanted to find out which materials, P, Q, R, or S, would make the best raincoat. He hung a similar piece of each material on a string. The materials were dipped in 20ml of water.",
    images: ["assets/q14-beakers.png"],
    body: "After ten minutes, Ben removed each material from the beaker and measured the amount of water left.",
    table: {
      headers: ["", "P", "Q", "R", "S"],
      rows: [
        ["Amount of water at the start (ml)", "20", "20", "20", "20"],
        ["Amount of water left in each beaker (ml)", "6", "0", "20", "13"]
      ]
    },
    body2: "Which is the best material to make the raincoat?",
    options: [
      { key: "1", label: "P" },
      { key: "2", label: "Q" },
      { key: "3", label: "R" },
      { key: "4", label: "S" }
    ],
    correct: "3",
    explanation: "A good raincoat material should absorb the least water (be waterproof). Material R left all 20ml of water in the beaker, meaning it absorbed none of it, making it the most waterproof choice."
  },
  {
    id: 15,
    paper: 1,
    type: "mcq",
    prompt: "Study the flow chart below carefully.",
    images: ["assets/q15-flowchart.png"],
    body: "What could object E, F and G be?",
    optionTable: {
      headers: ["", "Object E", "Object F", "Object G"],
      rows: [
        ["(1)", "wooden ruler", "bar magnet", "iron nail"],
        ["(2)", "steel keychain", "wooden ruler", "button magnet"],
        ["(3)", "plastic spoon", "iron rod", "ring magnet"],
        ["(4)", "iron nail", "plastic spoon", "steel keychain"]
      ]
    },
    options: [
      { key: "1", label: "E: wooden ruler, F: bar magnet, G: iron nail" },
      { key: "2", label: "E: steel keychain, F: wooden ruler, G: button magnet" },
      { key: "3", label: "E: plastic spoon, F: iron rod, G: ring magnet" },
      { key: "4", label: "E: iron nail, F: plastic spoon, G: steel keychain" }
    ],
    correct: "3",
    explanation: "E is not attracted to a magnet, so it must be non-magnetic (plastic spoon). F is attracted but does not repel, so it is a magnetic material that isn't itself a magnet (iron rod). G is attracted AND repels, so it must be a magnet itself (ring magnet)."
  },
  {
    id: 16,
    paper: 1,
    type: "mcq",
    prompt: "Lucas hung three bars, E, F and G on a pole. The diagram below shows the interaction of the bars when they are brought near one another.",
    images: ["assets/q16-bars.png"],
    body: "Which of the statements are true?\n\nA  Bar F is a magnet\nB  Bar E is made of plastic\nC  Bar G could be a magnetic material",
    options: [
      { key: "1", label: "A and B only" },
      { key: "2", label: "A and C only" },
      { key: "3", label: "B and C only" },
      { key: "4", label: "A, B and C" }
    ],
    correct: "3",
    explanation: "F and G stick together, so at least one of them is a magnet - but we cannot be sure it is specifically F, so A is not confirmed. G being attracted is consistent with it being a magnetic material, so C holds. E does not attract to either bar, so it must be a non-magnetic material like plastic (B)."
  },
  {
    id: 17,
    paper: 1,
    type: "mcq",
    prompt: "Annie brought Object X near Object Y. She observed that Object Y got pushed away.",
    images: ["assets/q17-objects.png"],
    body: "Which one of the following statements could be true?",
    options: [
      { key: "1", label: "Only Object X is a magnet." },
      { key: "2", label: "Only Object Y is a magnet." },
      { key: "3", label: "Both Object X and Y are magnets." },
      { key: "4", label: "Both Object X and Y are not magnets." }
    ],
    correct: "3",
    explanation: "Y being pushed away means repulsion occurred. Repulsion can only happen between two magnets with like poles facing each other, so both X and Y must be magnets."
  },
  {
    id: 18,
    paper: 1,
    type: "mcq",
    prompt: "Serena is lost in a forest. She found a small bar magnet in her bag and decides to suspend it freely using a thread. After a few minutes, the magnet stopped spinning and pointed in a specific direction.",
    body: "Which one of the following best explains the direction that the magnet is pointing in?",
    options: [
      { key: "1", label: "It is pointing towards a metal." },
      { key: "2", label: "It is pointing towards the sunlight." },
      { key: "3", label: "It is pointing in the East - South direction." },
      { key: "4", label: "It is pointing in the North - South direction." }
    ],
    correct: "4",
    explanation: "A freely suspended magnet always aligns itself with the Earth's magnetic field and settles pointing in the North-South direction."
  },
  {
    id: 19,
    paper: 1,
    type: "mcq",
    prompt: "Rahim stroked an iron nail many times with a strong magnet. He then placed the nail on top of a wooden block. He placed the nail and wooden block in a bowl of water and noticed that they float in a certain direction.",
    images: ["assets/q19-nail.png"],
    body: "What was Rahim most likely trying to do?",
    body2: "A  He wanted to find the direction of the wind.\nB  He wanted to find which direction was North.\nC  He wanted to find out if wood floats on water.\nD  He wanted to find out the strength of the iron nail.",
    options: [
      { key: "1", label: "B only" },
      { key: "2", label: "A and D only" },
      { key: "3", label: "B and C only" },
      { key: "4", label: "A, C and D only" }
    ],
    correct: "1",
    explanation: "Stroking a nail magnetises it, and floating it freely on water lets it turn and settle pointing North-South, just like a compass. This set-up is a classic way to find geographic North."
  },
  {
    id: 20,
    paper: 1,
    type: "mcq",
    prompt: "Which one of the following methods can be used to increase the magnetic strength of an electromagnet as shown in the diagram below?",
    images: ["assets/q20-electromagnet.png"],
    options: [
      { key: "1", label: "Heating up the iron rod." },
      { key: "2", label: "Hammering the iron rod." },
      { key: "3", label: "Increasing the number of batteries used." },
      { key: "4", label: "Decreasing the number of coils of wire around the iron rod." }
    ],
    correct: "3",
    explanation: "An electromagnet's strength increases with more current. Adding more batteries increases the current flowing through the coil, strengthening the electromagnet. Fewer coils or heating/hammering the rod does not strengthen it."
  },
  {
    id: 21,
    paper: 1,
    type: "mcq",
    prompt: "Viki conducted an experiment using four set-ups J, K, L and M as shown below.",
    images: ["assets/q21-setups.png"],
    body: "Which two set-ups should Viki use if she wants to find out whether the number of coils of wire affects the magnetic strength of the electromagnet?",
    options: [
      { key: "1", label: "J and L" },
      { key: "2", label: "K and L" },
      { key: "3", label: "K and M" },
      { key: "4", label: "L and M" }
    ],
    correct: "4",
    explanation: "For a fair test, only the number of coils should differ while the number of batteries stays the same. L and M both use 1 battery but have a different number of coils, making them the correct pair to compare."
  },
  {
    id: 22,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following is a common use of magnets in everyday life?",
    body: "A  Attracting plastic objects\nB  Pouring water into a metal cup\nC  A refrigerator door that stays shut",
    options: [
      { key: "1", label: "A only" },
      { key: "2", label: "C only" },
      { key: "3", label: "A and B only" },
      { key: "4", label: "B and C only" }
    ],
    correct: "2",
    explanation: "Magnets are used in refrigerator door seals to keep the door shut. Plastic is non-magnetic so magnets cannot attract it, and pouring water into a cup has nothing to do with magnetism."
  },

  // ---------------- Paper 2 (structured) ----------------
  {
    id: 23,
    paper: 2,
    type: "structured",
    prompt: "Study the classification table below. The diagrams are not drawn to scale.",
    images: ["assets/q23-table.png"],
    parts: [
      {
        key: "1i",
        type: "short-text",
        prompt: "Give a suitable heading for group (i) - mould, fern, rabbit.",
        correct: "living things",
        accept: ["living thing"]
      },
      {
        key: "1ii",
        type: "short-text",
        prompt: "Give a suitable heading for group (ii) - raincoat, computer, pillow.",
        correct: "non-living things",
        accept: ["non living things", "non-living thing", "nonliving things"]
      },
      {
        key: "2",
        type: "written",
        prompt: "Besides your answer in (1), state a difference in characteristic between the mould and the raincoat.",
        modelAnswer: "The mould can grow and reproduce on its own, while the raincoat cannot grow or reproduce because it is non-living."
      }
    ]
  },
  {
    id: 24,
    paper: 2,
    type: "structured",
    prompt: "Meiling observed a papaya tree and a fern that grew on a tree.",
    images: ["assets/q24-plants.png"],
    parts: [
      {
        key: "1i",
        type: "short-text",
        prompt: "State the way that the papaya tree reproduces.",
        correct: "seeds",
        accept: ["seed", "by seeds"]
      },
      {
        key: "1ii",
        type: "short-text",
        prompt: "State the way that the fern reproduces.",
        correct: "spores",
        accept: ["spore", "by spores"]
      },
      {
        key: "2",
        type: "written",
        prompt: "Meiling says that the fern gets its food from the tree that it grows on. Give a reason why she is wrong.",
        modelAnswer: "The fern only uses the tree for physical support to reach sunlight - it makes its own food through photosynthesis using sunlight, water and carbon dioxide, and does not take nutrients from the tree."
      }
    ]
  },
  {
    id: 25,
    paper: 2,
    type: "structured",
    prompt: "The diagram below shows Animal S which lives on land and in water. It has four legs and a moist skin.",
    images: ["assets/q25-animal.png"],
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "Which animal group does Animal S belong to?",
        correct: "amphibian",
        accept: ["amphibians"]
      },
      {
        key: "2",
        type: "written",
        prompt: "How does the moist skin help Animal S to stay alive in water?",
        modelAnswer: "The moist skin allows Animal S to absorb oxygen from the water directly through its skin, letting it breathe while underwater."
      }
    ]
  },
  {
    id: 26,
    paper: 2,
    type: "structured",
    prompt: "Study the diagram below.",
    images: ["assets/q26-bread.png"],
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "How does living thing Y reproduce?",
        correct: "spores",
        accept: ["spore", "by producing spores", "by releasing spores"]
      },
      {
        key: "2",
        type: "written",
        prompt: "How does living thing Y obtain food?",
        modelAnswer: "Living thing Y (mould) releases digestive substances onto the bread to break it down, then absorbs the nutrients from the bread."
      }
    ]
  },
  {
    id: 27,
    paper: 2,
    type: "structured",
    prompt: "Ben kept the young of four insects with food in a container for ten weeks. He drew his observations as shown in the table below.",
    images: ["assets/q27-table.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "At week 4, he noticed that there were some shed skin inside the container. Why did the insects need to shed their skin?",
        modelAnswer: "An insect's exoskeleton is hard and does not grow or stretch. As the insect's body grows bigger, it must shed its old, tight exoskeleton to make way for a new, larger one."
      },
      {
        key: "2",
        type: "short-text",
        prompt: "At week 8, he could not find the same insects he had at week 4. In the container, there were two beetles and two living things X that did not move from place to place. What could living thing X be?",
        correct: "pupa",
        accept: ["pupae", "the pupa stage", "pupa stage"]
      },
      {
        key: "3",
        type: "written",
        prompt: "Besides not moving from place to place, state another difference in characteristic between living thing X and the young in week 4.",
        modelAnswer: "Living thing X (the pupa) does not eat or feed, whereas the young in week 4 (the larva) actively feeds and eats continuously."
      },
      {
        key: "4",
        images: ["assets/q27-beetles.png"],
        type: "written",
        prompt: "After some time, some bean-shaped objects appeared in the container even though Ben did not add them. What had most likely happened for the bean-shaped objects to appear?",
        modelAnswer: "The adult beetles mated and laid eggs, which are the bean-shaped objects that appeared in the container."
      },
      {
        key: "5",
        type: "written",
        prompt: "Name another animal that has a life cycle with the same number of stages as the insect that Ben kept.",
        modelAnswer: "Any insect with complete metamorphosis (4 stages: egg, larva, pupa, adult), for example a butterfly, mosquito, or housefly."
      }
    ]
  },
  {
    id: 28,
    paper: 2,
    type: "structured",
    prompt: "The diagram below shows the life cycle of a plant.",
    images: ["assets/q28-cycle.png"],
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "Fill in the correct stage in the empty box (between Adult plant and Young plant).",
        correct: "seed",
        accept: ["seeds"]
      },
      {
        key: "2",
        images: ["assets/q28-banana.png"],
        type: "written",
        prompt: "The diagram shows a banana plant. Which stage of the life cycle does the banana plant represent? Give a reason for your answer.",
        modelAnswer: "It represents the adult plant stage, because it is bearing fruits (bananas) - only a mature, adult plant is able to produce flowers and fruit."
      }
    ]
  },
  {
    id: 29,
    paper: 2,
    type: "structured",
    prompt: "Study the flowchart.",
    images: ["assets/q29-flowchart.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "State a difference in properties between objects Q and R.",
        modelAnswer: "Object Q does not break when hit and can be bent (flexible), while object R breaks easily when hit and does not allow light to pass through (brittle and opaque)."
      },
      {
        key: "2a",
        type: "short-text",
        prompt: "Ben was given a metal hammer and a glass spectacle lens. Which letter best represents the spectacle lens?",
        correct: "S"
      },
      {
        key: "2b",
        type: "short-text",
        prompt: "Which letter best represents the metal hammer?",
        correct: "P"
      }
    ]
  },
  {
    id: 30,
    paper: 2,
    type: "structured",
    prompt: "Jimmy made a magnet using the stroke method as shown below. He stroked the iron nail in the same direction with the same pole of a magnet.",
    images: ["assets/q30-stroke.png"],
    table: {
      headers: ["Number of Strokes made", "Number of Steel Clips Attracted"],
      rows: [["10", "2"], ["20", "9"], ["30", "17"]]
    },
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "Based on the results above, what is the relationship between the number of strokes made and the strength of the magnet?",
        modelAnswer: "The more strokes made, the stronger the magnet becomes (as shown by more steel clips being attracted)."
      },
      {
        key: "2",
        type: "written",
        prompt: "Without changing the type of nail or the paper clips, suggest what Jimmy should do if he wanted the iron nail to attract more than 17 steel clips.",
        modelAnswer: "He should stroke the nail more times (more than 30 strokes) in the same direction with the same pole of the magnet."
      },
      {
        key: "3",
        type: "written",
        prompt: "If Jimmy replaced the iron nail with a wooden nail and stroked it 30 times in the same direction with the same pole of a magnet, how many steel clips would it attract? Explain your answer.",
        modelAnswer: "It would attract 0 steel clips. Wood is a non-magnetic material and cannot be magnetised by stroking, no matter how many times it is stroked."
      }
    ]
  },
  {
    id: 31,
    paper: 2,
    type: "structured",
    prompt: "Jeslyn played with the toy shown below. She observed that part K is 'floating' above part L.",
    images: ["assets/q31-floating.png"],
    parts: [
      {
        key: "1k",
        type: "short-text",
        prompt: "Identify the object that part K is made of.",
        correct: "magnet"
      },
      {
        key: "1l",
        type: "short-text",
        prompt: "Identify the object that part L is made of.",
        correct: "magnet"
      },
      {
        key: "2",
        images: ["assets/q31-toycar.png"],
        type: "written",
        prompt: "Jeslyn attached bar magnet M to the top of a toy car using some tape and rolled the toy car towards another magnet, P, that was glued onto the wall. Before the front of the toy car reached magnet P, Jeslyn observed that it started to move backwards. Explain why the toy car moved backwards.",
        modelAnswer: "As the car approached the wall, like poles of magnet M and magnet P faced each other and repelled. This repulsive force pushed the toy car backwards before it could reach the wall."
      }
    ]
  }
];

const PAPER1_MAX = 22; // 1 mark implied per MCQ (no official mark scheme supplied)
const PAPER2_AUTO_PARTS = QUESTIONS
  .filter(q => q.paper === 2)
  .flatMap(q => q.parts.filter(p => p.type === "short-text").map(p => `${q.id}${p.key}`));

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
    if (q.paper !== 1) return;
    paper1Max += 1;
    const given = answers[q.id];
    if (given != null && given === q.correct) paper1Score += 1;
  });

  let paper2AutoScore = 0;
  let paper2AutoMax = 0;
  let paper2ManualMax = 0;
  QUESTIONS.forEach(q => {
    if (q.paper !== 2) return;
    q.parts.forEach(part => {
      const partKey = `${q.id}${part.key}`;
      if (part.type === "short-text") {
        paper2AutoMax += 1;
        if (isShortTextCorrect(part, answers[partKey])) paper2AutoScore += 1;
      } else {
        paper2ManualMax += 1;
      }
    });
  });

  return {
    paper1: { score: paper1Score, max: paper1Max },
    paper2: { score: paper2AutoScore, autoMax: paper2AutoMax, manualMax: paper2ManualMax },
    total: {
      autoScore: paper1Score + paper2AutoScore,
      autoMax: paper1Max + paper2AutoMax,
      manualMax: paper2ManualMax
    }
  };
}
