import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const vertex = {
  name: "Vertex",
  workedProblems: [

    // Problem 1

    {
      ...asWorked("Par-Vert-1-E-1"),
      ...asGuided("Par-Vert-1-GP-1"),
      practice: asPractice(["Par-Vert-1-Q-1", "Par-Vert-1-Q-2"]),
      additionalPractice: asAdditional([
        "Par-Vert-1-AQ-1",
        "Par-Vert-1-AQ-2",
        "Par-Vert-1-AQ-3",
        "Par-Vert-1-AQ-4",
      ]),
    },

    // Problem 2

    {
      ...asWorked("Par-Vert-2-E-1"),
      ...asGuided("Par-Vert-2-GP-1"),
      practice: asPractice(["Par-Vert-2-Q-1", "Par-Vert-2-Q-2"]),
      additionalPractice: asAdditional([
        "Par-Vert-2-AQ-1",
        "Par-Vert-2-AQ-2",
        "Par-Vert-2-AQ-3",
        "Par-Vert-2-AQ-4",
      ]),
    },

    // Problem 3

    {
      ...asWorked("Par-Vert-3-E-1"),
      ...asGuided("Par-Vert-3-GP-1"),
      practice: asPractice(["Par-Vert-3-Q-1", "Par-Vert-3-Q-2"]),
      additionalPractice: asAdditional(["Par-Vert-3-AQ-1", "Par-Vert-3-AQ-2", "Par-Vert-3-AQ-3"]),
    },

    // Problem 4

    {
      ...asWorked("Par-Vert-4-E-1"),
      ...asGuided("Par-Vert-4-GP-1"),
      practice: asPractice(["Par-Vert-4-Q-1", "Par-Vert-4-Q-2"]),
      additionalPractice: asAdditional(["Par-Vert-4-AQ-1", "Par-Vert-4-AQ-2", "Par-Vert-4-AQ-3"]),
    },

    // Problem 5

    {
      ...asWorked(["Par-Vert-5-E-1", "Par-Vert-5-E-2", "Par-Vert-5-E-3"]),
      ...asGuided(["Par-Vert-5-GP-1", "Par-Vert-5-GP-2", "Par-Vert-5-GP-3"]),
      practice: asPractice(["Par-Vert-5-Q-1", "Par-Vert-5-Q-2"]),
      additionalPractice: asAdditional(["Par-Vert-5-AQ-1", "Par-Vert-5-AQ-2", "Par-Vert-5-AQ-3", "Par-Vert-5-AQ-4"]),
    },

    // Problem 6

    {
      ...asWorked("Par-Vert-6-E-1"),
      ...asGuided("Par-Vert-6-GP-1"),
      practice: asPractice(["Par-Vert-6-Q-1", "Par-Vert-6-Q-2"]),
      additionalPractice: asAdditional(["Par-Vert-6-AQ-1", "Par-Vert-6-AQ-2", "Par-Vert-6-AQ-3"]),
    },

    // Problem 7

    {
      ...asWorked("Par-Vert-7-E-1"),
      ...asGuided("Par-Vert-7-GP-1"),
      practice: asPractice(["Par-Vert-7-Q-1", "Par-Vert-7-Q-2"]),
      additionalPractice: asAdditional(["Par-Vert-7-AQ-1", "Par-Vert-7-AQ-2", "Par-Vert-7-AQ-3"]),
    },

    // Problem 8

    {
      ...asWorked("Par-Vert-8-E-1"),
      ...asGuided("Par-Vert-8-GP-1"),
      practice: asPractice(["Par-Vert-8-Q-1", "Par-Vert-8-Q-2"]),
      additionalPractice: asAdditional(["Par-Vert-8-AQ-1", "Par-Vert-8-AQ-2", "Par-Vert-8-AQ-3", "Par-Vert-8-AQ-4"]),
    },
  ],
};

export default vertex;