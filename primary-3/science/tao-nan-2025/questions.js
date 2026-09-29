// 2025 Tao Nan School P3 Science End of Year Exam (Think Academy compilation)
// No official answer key was supplied with this paper. Every `correct` /
// `modelAnswer` value below is a suggested solution derived from the P3
// Science syllabus, not an official school answer key.

const QUESTIONS = [
  // ---------------- Paper 1 (MCQ) ----------------
  {
    id: 1,
    paper: 1,
    type: "mcq",
    prompt: "The diagram shows how some things are classified.",
    images: ["assets/q1-classify.png"],
    body: "Which of the following correctly describes the characteristics, A and B?",
    optionTable: {
      headers: ["", "A", "B"],
      rows: [
        ["(1)", "can reproduce", "cannot reproduce"],
        ["(2)", "can make its own food", "cannot make its own food"],
        ["(3)", "cannot move on its own", "can move on its own"],
        ["(4)", "cannot respond to changes in the environment", "can respond to changes in the environment"]
      ]
    },
    options: [
      { key: "1", label: "A: can reproduce, B: cannot reproduce" },
      { key: "2", label: "A: can make its own food, B: cannot make its own food" },
      { key: "3", label: "A: cannot move on its own, B: can move on its own" },
      { key: "4", label: "A: cannot respond to changes in the environment, B: can respond to changes in the environment" }
    ],
    correct: "1",
    explanation: "A (bee, frog, plant) and B (teddy bear, laptop, robot) are living and non-living things. The only characteristic true for every member of A and false for every member of B is the ability to reproduce - not every living thing in A makes its own food, always moves on its own, or is the only one able to respond to its surroundings."
  },
  {
    id: 2,
    paper: 1,
    type: "mcq",
    prompt: "Study the four set-ups as shown below.",
    images: ["assets/q2-setups.png"],
    body: "Which two set-ups should she use to find out if living things need water to survive?",
    options: [
      { key: "1", label: "C and D" },
      { key: "2", label: "C and E" },
      { key: "3", label: "D and F" },
      { key: "4", label: "E and F" }
    ],
    correct: "1",
    explanation: "For a fair test, only the variable being investigated (presence of water) should differ. Set-up C (holes, food, water, grasshopper) and Set-up D (holes, food, grasshopper, no water) are identical except for the water, making them the correct pair to compare."
  },
  {
    id: 3,
    paper: 1,
    type: "mcq",
    prompt: "Study the pictures below carefully.",
    images: ["assets/q3-livingthings.png"],
    body: "Which of the following statements is correct?",
    options: [
      { key: "1", label: "Both have leaves." },
      { key: "2", label: "Both reproduce by spores." },
      { key: "3", label: "G does not produce fruits but H produces fruits." },
      { key: "4", label: "G is a non-flowering plant but H is a flowering plant." }
    ],
    correct: "4",
    explanation: "Living thing H is a tomato plant - it bears flowers and fruits. Living thing G shows a magnified spore-producing structure typical of a non-flowering plant (like a fern or moss), which reproduces by spores instead of flowers and seeds."
  },
  {
    id: 4,
    paper: 1,
    type: "mcq",
    prompt: "The table below shows some information on four plants, J, K, L and M.\n\nA tick (✓) shows that the characteristic is present in that plant.",
    images: ["assets/q4-waterlily.png"],
    body: "Which plant, J, K, L or M, is shown in the diagram above?",
    table: {
      headers: ["Plant", "able to produce fruits", "grows on land"],
      rows: [
        ["J", "", "✓"],
        ["K", "", ""],
        ["L", "✓", ""],
        ["M", "✓", "✓"]
      ]
    },
    options: [
      { key: "1", label: "J" },
      { key: "2", label: "K" },
      { key: "3", label: "L" },
      { key: "4", label: "M" }
    ],
    correct: "3",
    explanation: "The diagram shows a water lily, which grows in water (not on land) and is able to produce fruit. That matches plant L, which has a tick for 'able to produce fruits' but not for 'grows on land'."
  },
  {
    id: 5,
    paper: 1,
    type: "mcq",
    prompt: "Study the flowchart.",
    images: ["assets/q5-flowchart.png"],
    body: "Based on the flowchart above, which of the following questions correctly represent N and P respectively?",
    optionTable: {
      headers: ["", "N", "P"],
      rows: [
        ["(1)", "Do they reproduce by seeds?", "Do they bear flowers?"],
        ["(2)", "Do they bear flowers?", "Do they reproduce by seeds?"],
        ["(3)", "Do they reproduce by spores?", "Do they bear flowers?"],
        ["(4)", "Do they bear flowers?", "Do they reproduce by seeds?"]
      ]
    },
    options: [
      { key: "1", label: "N: Do they reproduce by seeds? P: Do they bear flowers?" },
      { key: "2", label: "N: Do they bear flowers? P: Do they reproduce by seeds?" },
      { key: "3", label: "N: Do they reproduce by spores? P: Do they bear flowers?" },
      { key: "4", label: "N: Do they bear flowers? P: Do they reproduce by seeds?" }
    ],
    correct: "3",
    explanation: "N separates mould (reproduces by spores: Yes) from bacteria (No), so N must be 'Do they reproduce by spores?'. P separates the banana plant (bears flowers: Yes) from the bird's nest fern (No, it reproduces by spores instead), so P must be 'Do they bear flowers?'."
  },
  {
    id: 6,
    paper: 1,
    type: "mcq",
    prompt: "Study the table below carefully. A tick (✓) shows that the animal has the characteristic.",
    images: ["assets/q6-animals.png"],
    body: "Which animals, Q, R or S, can represent Animal A and Animal B shown below?",
    optionTable: {
      headers: ["", "Animal A", "Animal B"],
      rows: [
        ["(1)", "Q", "R"],
        ["(2)", "Q", "S"],
        ["(3)", "R", "S"],
        ["(4)", "S", "Q"]
      ]
    },
    options: [
      { key: "1", label: "Animal A: Q, Animal B: R" },
      { key: "2", label: "Animal A: Q, Animal B: S" },
      { key: "3", label: "Animal A: R, Animal B: S" },
      { key: "4", label: "Animal A: S, Animal B: Q" }
    ],
    correct: "3",
    explanation: "Animal A (the dog) has hair as its outer covering, matching R. Animal B (the bird) can fly and has 2 legs only, matching S."
  },
  {
    id: 7,
    paper: 1,
    type: "mcq",
    prompt: "S, T and U show the stages of a plant life cycle.",
    images: ["assets/q7-stages.png"],
    body: "Which diagram shows the correct life cycle of a plant?",
    options: [
      { key: "1", label: "T → U → S → T" },
      { key: "2", label: "S → T → U → S (drawn as S, U, T)" },
      { key: "3", label: "U → T → S → U" },
      { key: "4", label: "T → S → U → T" }
    ],
    correct: "1",
    explanation: "The correct order is seed (S) → seedling (T) → mature flowering plant (U) → back to seed (S). Option A's loop (T → U → S → T) follows this same cycle direction, just starting from a different point in the loop."
  },
  {
    id: 8,
    paper: 1,
    type: "mcq",
    prompt: "Which of the following represents a chicken's life cycle?",
    options: [
      { key: "1", label: "Egg → Nymph → Adult → Egg" },
      { key: "2", label: "Egg → Adult → Young → Egg" },
      { key: "3", label: "Egg → Nymph → Adult → Egg (reversed labelling)" },
      { key: "4", label: "Egg → Young → Adult → Egg" }
    ],
    correct: "4",
    explanation: "A chicken hatches from an egg into a chick (young), which grows into an adult that lays eggs. The stage is called 'young', not 'nymph' (nymph is used for insects with incomplete metamorphosis like grasshoppers and cockroaches), and the stages must run in the order egg → young → adult → egg."
  },
  {
    id: 9,
    paper: 1,
    type: "mcq",
    prompt: "Study the flowchart.",
    images: ["assets/q9-flowchart.png"],
    body: "Which animal, V, W, X or Y, represents a frog?",
    options: [
      { key: "1", label: "V" },
      { key: "2", label: "W" },
      { key: "3", label: "X" },
      { key: "4", label: "Y" }
    ],
    correct: "2",
    explanation: "A frog has a three-stage life cycle (egg, tadpole, adult), so the first answer is Yes. However, the young (tadpole) does not look like the adult frog, so the answer to 'Does the young look like the adult?' is No, leading to W."
  },
  {
    id: 10,
    paper: 1,
    type: "mcq",
    prompt: "Which statement about the life cycles of both the cockroach and the grasshopper is not correct?",
    options: [
      { key: "1", label: "Both have the egg stage." },
      { key: "2", label: "Both have the larval stage." },
      { key: "3", label: "Both have three stages in their life cycles." },
      { key: "4", label: "Both their young and adults live on land." }
    ],
    correct: "2",
    explanation: "Cockroaches and grasshoppers undergo incomplete metamorphosis (egg → nymph → adult) - they do not have a larval stage. A larval stage only occurs in complete metamorphosis (egg → larva → pupa → adult), like butterflies or mosquitoes."
  },
  {
    id: 11,
    paper: 1,
    type: "mcq",
    prompt: "The graph below shows the length of time for each stage in the life cycle of animal A.",
    images: ["assets/q11-graph.png"],
    body: "Based on the graph, which statement about animal A is true?",
    options: [
      { key: "1", label: "Animal A can live up to 30 days." },
      { key: "2", label: "Animal A has 3 stages in its life cycle." },
      { key: "3", label: "Animal A spends most of its life cycle in the larval stage." },
      { key: "4", label: "After hatching, animal A takes another 30 days to turn into an adult." }
    ],
    correct: "4",
    explanation: "After the egg hatches (5 days), the animal spends 15 days as a larva and 15 more days as a pupa before becoming an adult - that is 15 + 15 = 30 days after hatching. The graph shows 4 stages, not 3, and the adult stage (30 days) is the longest, not the larval stage."
  },
  {
    id: 12,
    paper: 1,
    type: "mcq",
    prompt: "The diagram shows a boy riding his kick scooter. Part C helps the kick scooter move smoothly and Part B keeps the movement of the kick scooter stable and safe.",
    images: ["assets/q12-scooter.png"],
    body: "Which materials are most suitable for making parts B and C?",
    optionTable: {
      headers: ["", "B", "C"],
      rows: [
        ["(1)", "rubber", "metal"],
        ["(2)", "ceramic", "metal"],
        ["(3)", "rubber", "ceramic"],
        ["(4)", "metal", "rubber"]
      ]
    },
    options: [
      { key: "1", label: "B: rubber, C: metal" },
      { key: "2", label: "B: ceramic, C: metal" },
      { key: "3", label: "B: rubber, C: ceramic" },
      { key: "4", label: "B: metal, C: rubber" }
    ],
    correct: "1",
    explanation: "Part B (the handlebar grips) needs a grippy, non-slip material like rubber to keep the rider's movement stable and safe. Part C (the wheels) needs a smooth, hard material like metal to help the scooter roll and move smoothly."
  },
  {
    id: 13,
    paper: 1,
    type: "mcq",
    prompt: "Mandy wants to select a material to make part D of a photo frame as shown below.",
    images: ["assets/q13-photoframe.png"],
    body: "Which property of this material allows Mandy to see the photograph clearly?",
    options: [
      { key: "1", label: "strong" },
      { key: "2", label: "flexible" },
      { key: "3", label: "waterproof" },
      { key: "4", label: "allows most light to pass through" }
    ],
    correct: "4",
    explanation: "Part D is the transparent cover of the photo frame. A material that allows most light to pass through (is transparent) is what lets Mandy see the photograph clearly through it."
  },
  {
    id: 14,
    paper: 1,
    type: "mcq",
    prompt: "The diagram below shows an outdoor roller coaster.",
    images: ["assets/q14-rollercoaster.png"],
    body: "Which material, E, F, G or H, is most suitable for making part X to keep the people sitting in the roller coaster safe? A tick (✓) shows that the property is present in the material.",
    table: {
      headers: ["Material", "strong", "flexible", "waterproof"],
      rows: [
        ["E", "✓", "✓", "✓"],
        ["F", "", "✓", ""],
        ["G", "✓", "", "✓"],
        ["H", "", "✓", "✓"]
      ]
    },
    options: [
      { key: "1", label: "E" },
      { key: "2", label: "F" },
      { key: "3", label: "G" },
      { key: "4", label: "H" }
    ],
    correct: "3",
    explanation: "Part X is the track/structural rail that must be strong (to safely hold the riders' weight) and waterproof (since it's used outdoors). It does not need to be flexible - a rigid track is actually important for safety. Material G (strong and waterproof, but not flexible) is the best fit."
  },
  {
    id: 15,
    paper: 1,
    type: "mcq",
    prompt: "Which statement about magnets is not correct?",
    options: [
      { key: "1", label: "All magnets have two poles." },
      { key: "2", label: "All metals can be made into magnets." },
      { key: "3", label: "Like poles of two magnets facing each other repel." },
      { key: "4", label: "A freely suspended bar magnet will come to rest pointing in the north-south direction." }
    ],
    correct: "2",
    explanation: "Only magnetic materials (such as iron, steel, nickel and cobalt) can be made into magnets. Many metals, such as copper and aluminium, are not magnetic and cannot be made into magnets."
  },
  {
    id: 16,
    paper: 1,
    type: "mcq",
    prompt: "Chen moved a bar magnet towards 3 objects, J, K and L, as shown.",
    images: ["assets/q16-retortstand.png"],
    body: "He recorded his observations in the table below.\n\nJ: Object J did not move.\nK: Object K moved away from the magnet then flipped to the opposite side.\nL: Object L moved towards the magnet.\n\nWhat can be concluded from Chen's observations?\n\nA  Object J is not made from a magnetic material.\nB  Object K is a magnet.\nC  Object L is a magnet.",
    options: [
      { key: "1", label: "B only" },
      { key: "2", label: "C only" },
      { key: "3", label: "A and B only" },
      { key: "4", label: "A and C only" }
    ],
    correct: "3",
    explanation: "J did not move at all, so it is not attracted or repelled - it is not a magnetic material (A is correct). K first moved away (repelled) then flipped - repulsion only happens between two magnets, so K must itself be a magnet (B is correct). L simply moved towards the magnet, which could mean L is a magnet (attracted by an opposite pole) OR just a magnetic material being attracted - so we cannot conclude L is definitely a magnet (C is not certain)."
  },
  {
    id: 17,
    paper: 1,
    type: "mcq",
    prompt: "The diagram shows the positions of 3 ring magnets when they are put through a wooden rod.",
    images: ["assets/q17-ringmagnets.png"],
    body: "What are the poles marked M and P?",
    optionTable: {
      headers: ["", "M", "P"],
      rows: [
        ["(1)", "north", "north"],
        ["(2)", "north", "south"],
        ["(3)", "south", "north"],
        ["(4)", "south", "south"]
      ]
    },
    options: [
      { key: "1", label: "M: north, P: north" },
      { key: "2", label: "M: north, P: south" },
      { key: "3", label: "M: south, P: north" },
      { key: "4", label: "M: south, P: south" }
    ],
    correct: "2",
    explanation: "The ring magnets float apart because facing poles repel (like poles). Since the bottom magnet's south pole faces down, its top face is north, which must repel the pole of the magnet above it, and so on up the rod, alternating poles - giving M a north-facing top pole and P a south-facing top pole."
  },
  {
    id: 18,
    paper: 1,
    type: "mcq",
    prompt: "The diagram below shows a floating toy train. Four strong magnets are fixed to the base of the toy train and the track of the toy train.",
    images: ["assets/q18-train-prompt.png"],
    body: "Which of the following diagrams correctly shows how the magnets are arranged so that the toy train can float above the track?",
    options: [
      { key: "1", label: "Option A", image: "assets/q18-optA.png" },
      { key: "2", label: "Option B", image: "assets/q18-optB.png" },
      { key: "3", label: "Option C", image: "assets/q18-optC.png" },
      { key: "4", label: "Option D", image: "assets/q18-optD.png" }
    ],
    correct: "3",
    explanation: "For the toy train to float, the poles facing each other across the gap (the train magnet's bottom pole and the track magnet's top pole, on both sides) must be the same (like poles repel). In Option C, both facing pairs are S facing S, so the magnets repel on both sides and the train floats."
  },

  // ---------------- Paper 2 (structured) ----------------
  {
    id: 19,
    paper: 2,
    type: "structured",
    prompt: "Belle conducted an experiment with the bag left open as shown in the diagram. She added some water to the paper towel every day and recorded the height of each plant for a week. The table below shows the height of each plant each day.",
    images: ["assets/q19-bag.png"],
    body: "Day 1: plant E = 0 cm, plant F = 0 cm\nDay 2: plant E = 1 cm, plant F = 2 cm\nDay 3: plant E = 2 cm, plant F = 3 cm\nDay 4: plant E = 2 cm, plant F = 4 cm\nDay 5: plant E = 3 cm, plant F = 4 cm\nDay 6: plant E = 3 cm, plant F = 5 cm\nDay 7: plant E = 4 cm, plant F = 6 cm",
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "How does keeping the bag open help the plant to survive?",
        modelAnswer: "Keeping the bag open allows air to enter and leave, so the growing seedling can get the oxygen and carbon dioxide it needs and does not suffocate inside a sealed bag."
      },
      {
        key: "2",
        type: "written",
        prompt: "The paper towel must be kept wet during the experiment. Explain why.",
        modelAnswer: "Seeds need water to germinate and grow. Keeping the paper towel wet provides a continuous supply of water for the seeds to absorb, which they need to sprout and develop into seedlings."
      },
      {
        key: "3",
        type: "written",
        prompt: "Using information from the table, compare the growth of plant E to plant F.",
        modelAnswer: "Both plant E and plant F grew taller every day over the week. However, plant F grew taller than plant E on every day and grew at a faster rate overall - by Day 7, plant F reached 6 cm while plant E only reached 4 cm."
      }
    ]
  },
  {
    id: 20,
    paper: 2,
    type: "structured",
    prompt: "Study the classification chart below.",
    images: ["assets/q20-tree.png"],
    parts: [
      {
        key: "1a",
        type: "written",
        prompt: "Using the information above, state one similarity between animals K and M.",
        modelAnswer: "Both animal K and animal M lay eggs."
      },
      {
        key: "1b",
        type: "written",
        prompt: "State one difference between animals K and M.",
        modelAnswer: "Animal K has scales as its outer covering, while animal M has fur as its outer covering."
      },
      {
        key: "2",
        images: ["assets/q20-orangutan.png"],
        type: "written",
        prompt: "Study the diagram of the animal shown. Which animal, J or L, can this animal shown above be? Explain why.",
        modelAnswer: "It can be animal L, because the animal shown (an orangutan) has fur and gives birth to live young, which matches the branch for L (has fur → gives birth to young alive)."
      }
    ]
  },
  {
    id: 21,
    paper: 2,
    type: "structured",
    prompt: "The diagram below shows three stages in the life cycle of a rice plant.",
    images: ["assets/q21-stages.png"],
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "Name stage A.",
        correct: "seed",
        accept: ["seeds"]
      },
      {
        key: "2",
        type: "written",
        prompt: "Using information from the diagram above, explain how a farmer knows that the rice plant at stage C is at the adult stage.",
        modelAnswer: "The farmer can tell the rice plant at stage C is an adult because it is bearing fruit (the rice grains) - only a mature, adult plant is able to produce flowers and fruit."
      },
      {
        key: "3",
        type: "written",
        prompt: "A farmer did not sell or eat all the rice but kept a small portion of the rice harvested. This action ensures that the farmer has more rice to sell in the future. Based on the life cycle of the plant, explain why the farmer can have a continuous supply of rice to sell.",
        modelAnswer: "The rice grains kept back are seeds. When planted, these seeds can germinate and grow into new rice plants, which will again produce more rice grains - repeating the life cycle so the farmer has a continuous new supply of rice to sell."
      }
    ]
  },
  {
    id: 22,
    paper: 2,
    type: "structured",
    prompt: "The diagram below shows two stages in the life cycle of a mosquito.",
    images: ["assets/q22-stageG.png", "assets/q22-lifecycle.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "Fill in the stages 'G' and 'H' correctly in the empty boxes below (the flowchart runs larva → pupa → [box after pupa] → [box after that] → back to larva).",
        modelAnswer: "The box right after pupa should be filled with 'adult' (Stage G, the adult mosquito shown). The box after that, leading back to larva, should be filled with 'egg' (Stage H)."
      },
      {
        key: "2",
        type: "written",
        prompt: "Dengue fever is spread by adult female mosquitoes. To reduce dengue fever, special male mosquitoes were released to breed with female mosquitoes. Their eggs do not hatch. Suggest how the release of the special male mosquitoes affect the life cycle of the mosquitoes.",
        modelAnswer: "Because the eggs produced do not hatch, fewer eggs develop into larvae, pupae and adult mosquitoes. This breaks the mosquito life cycle at the egg stage and reduces the number of new mosquitoes born, lowering the overall mosquito population over time."
      },
      {
        key: "3",
        type: "written",
        prompt: "State another way to prevent mosquito breeding at home.",
        modelAnswer: "Remove any stagnant/standing water around the home (for example, empty flowerpot trays and unused containers regularly), since mosquitoes need standing water to lay their eggs and breed."
      }
    ]
  },
  {
    id: 23,
    paper: 2,
    type: "structured",
    prompt: "Timmy made an electromagnet as shown below. His electromagnet attracted 2 steel clips from a fixed distance, d.",
    images: ["assets/q23-electromagnet.png"],
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "Suggest a suitable material used to make the rod.",
        correct: "iron",
        accept: ["soft iron", "steel"]
      },
      {
        key: "2a",
        type: "short-text",
        prompt: "Circle the correct answer: He added more batteries to his electromagnet. The number of steel clips attracted will (increase / decrease / stay the same).",
        correct: "increase",
        accept: []
      },
      {
        key: "2b",
        type: "short-text",
        prompt: "He reduced the number of coils of wire around the rod. The number of steel clips attracted will (increase / decrease / stay the same).",
        correct: "decrease",
        accept: []
      }
    ]
  },
  {
    id: 24,
    paper: 2,
    type: "structured",
    prompt: "Sarah conducted an experiment with objects made of materials N, P, Q and R, to observe their ability to sink or float in water. They are of the same size and shape. Her observation is shown in the diagram.",
    images: ["assets/q24-container.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "Based on the diagram above, classify the four materials, N, P, Q and R, into two groups: 'Float on water' and 'Sink in water'.",
        modelAnswer: "Float on water: P and Q. Sink in water: N and R."
      },
      {
        key: "2",
        images: ["assets/q24-materialstree.png"],
        type: "written",
        prompt: "Sarah concludes that N and Q are made of the same material. Do you agree with her? Explain why.",
        modelAnswer: "No, I do not agree. N sinks in water while Q floats in water. Since they behave differently in water even though they are the same size and shape, they must be made of different materials."
      },
      {
        key: "3",
        images: ["assets/q24-raft.png"],
        type: "written",
        prompt: "Sarah wanted to build a water raft as shown in the diagram. Which material, P or R, should she use to make part A? Explain why.",
        modelAnswer: "She should use material P, because it floats on water. A raft needs to be made of a material that floats so that it (and the people on it) can stay above the water."
      }
    ]
  },
  {
    id: 25,
    paper: 2,
    type: "structured",
    prompt: "Devi arranged four different bar magnets as shown below.",
    images: ["assets/q25-poles.png"],
    parts: [
      {
        key: "1",
        type: "written",
        prompt: "Using the letters 'N' or 'S', fill in the correct poles of the magnets in boxes ① and ② (the labelled south pole, S, is given on the diagram).",
        modelAnswer: "Suggested reading of the diagram: since each bar magnet has one north and one south pole, and the labelled pole is S, the opposite end of that same magnet must be N. Box ① and box ② can then be worked out from the poles already given on each magnet in the diagram. (This is a self-review suggestion - check it carefully against your own copy of the diagram.)"
      },
      {
        key: "2",
        type: "written",
        prompt: "Devi wanted to test the magnetic strength of four magnets, W, X, Y and Z. She placed each magnet on the table and slowly pushed an iron nail towards it until the nail was just attracted by the magnet, and measured this distance. Her results: W = 3 cm, X = 2 cm, Y = 4 cm, Z = 5 cm. Arrange the 4 magnets, W, X, Y and Z, in order of their strength, from the weakest to the strongest.",
        modelAnswer: "Weakest to strongest: X, W, Y, Z. (A stronger magnet attracts the nail from a greater distance, so the magnet with the smallest attraction distance, X at 2 cm, is weakest, and the one with the largest distance, Z at 5 cm, is strongest.)"
      },
      {
        key: "3",
        type: "written",
        prompt: "To conduct a fair test, Devi needs to change one variable but keep the other variables the same. Which variables need to be kept the same: type of nail, type of magnet, type of table surface, and/or distance at which the nail was attracted?",
        modelAnswer: "Type of nail and type of table surface should be kept the same. Type of magnet is the variable being changed (tested), and the distance at which the nail was attracted is what is being measured (the result), not a controlled variable."
      }
    ]
  },
  {
    id: 26,
    paper: 2,
    type: "structured",
    prompt: "Jenny placed two bowls made of materials R and S, of the same thickness, over two identical empty containers. She poured 500 ml of water into each bowl.",
    images: ["assets/q26-setup.png", "assets/q26-after5min.png"],
    body: "The diagrams show what she observed after 5 minutes: for bowl R, the 500 ml of water was still in the bowl. For bowl S, only 90 ml of water remained in the bowl, and 250 ml of water had collected in the container below.",
    parts: [
      {
        key: "1",
        type: "short-text",
        prompt: "What property of material was Jenny testing on?",
        correct: "waterproof",
        accept: ["waterproofness", "whether the material is waterproof"]
      },
      {
        key: "2",
        images: ["assets/q26-soupbowl.png"],
        type: "written",
        prompt: "The diagram shows a soup bowl found in Jenny's school canteen. Which of the materials, R or S, is the soup bowl made of? Explain why.",
        modelAnswer: "The soup bowl is most likely made of material R, because R is waterproof (it did not let the water leak through), which is needed so the soup does not leak out of the bowl."
      },
      {
        key: "3",
        images: ["assets/q26-materialT.png"],
        type: "written",
        prompt: "She carried out the experiment with another material T to compare with material R. The diagram shows the set-up at the start of the experiment. Was Jenny's experiment a fair test? Explain why.",
        modelAnswer: "No, it was not a fair test. To fairly compare materials R and T, all other variables (such as the amount of water poured and the size/thickness of the bowl) must be kept the same, and only the material itself should be different - the description does not confirm this was controlled, so it needs to be checked. If those variables were the same, then yes it would be a fair test, since only the material (the variable being investigated) would differ."
      }
    ]
  }
];

function normalize(str) {
  return (str || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function isShortTextCorrect(part, given) {
  const g = normalize(given);
  if (!g) return false;
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
