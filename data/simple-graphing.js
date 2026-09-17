import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const simpleGraphing = {
  name: "Simple Graphing",
  workedProblems: [
    // Problem 1
    {
      ...asWorked("Par-SimGr-1-E-1"),
      ...asGuided("Par-SimGr-1-GP-1"),
      practice: asPractice(["Par-SimGr-1-Q-1","Par-SimGr-1-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-1-AQ-1","Par-SimGr-1-AQ-2","Par-SimGr-1-AQ-3","Par-SimGr-1-AQ-4"]),
    },

    // Problem 2
    {
      ...asWorked("Par-SimGr-2-E-1"),
      ...asGuided("Par-SimGr-2-GP-1"),
      practice: asPractice(["Par-SimGr-2-Q-1","Par-SimGr-2-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-2-AQ-1","Par-SimGr-2-AQ-2","Par-SimGr-2-AQ-3","Par-SimGr-2-AQ-4"]),
    },

    // Problem 3
    {
      ...asWorked("Par-SimGr-3-E-1"),
      ...asGuided("Par-SimGr-3-GP-1"),
      practice: asPractice(["Par-SimGr-3-Q-1","Par-SimGr-3-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-3-AQ-1","Par-SimGr-3-AQ-2","Par-SimGr-3-AQ-3","Par-SimGr-3-AQ-4"]),
    },

    // Problem 4
    {
      ...asWorked("Par-SimGr-4-E-1"),
      ...asGuided("Par-SimGr-4-GP-1"),
      practice: asPractice(["Par-SimGr-4-Q-1","Par-SimGr-4-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-4-AQ-1","Par-SimGr-4-AQ-2","Par-SimGr-4-AQ-3","Par-SimGr-4-AQ-4"]),
    },

    // Problem 5
    {
      ...asWorked("Par-SimGr-5-E-1"),
      ...asGuided("Par-SimGr-5-GP-1"),
      practice: asPractice(["Par-SimGr-5-Q-1","Par-SimGr-5-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-5-AQ-1","Par-SimGr-5-AQ-2","Par-SimGr-5-AQ-3","Par-SimGr-5-AQ-4"]),
    },

    // Problem 6
    {
      ...asWorked("Par-SimGr-6-E-1"),
      ...asGuided("Par-SimGr-6-GP-1"),
      practice: asPractice(["Par-SimGr-6-Q-1","Par-SimGr-6-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-6-AQ-1","Par-SimGr-6-AQ-2","Par-SimGr-6-AQ-3"]),
    },

    // Problem 7
    {
      ...asWorked("Par-SimGr-7-E-1"),
      ...asGuided("Par-SimGr-7-GP-1"),
      practice: asPractice(["Par-SimGr-7-Q-1","Par-SimGr-7-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-7-AQ-1","Par-SimGr-7-AQ-2","Par-SimGr-7-AQ-3","Par-SimGr-7-AQ-4"]),
    },

    // Problem 8
    {
      ...asWorked("Par-SimGr-8-E-1"),
      ...asGuided("Par-SimGr-8-GP-1"),
      practice: asPractice(["Par-SimGr-8-Q-1","Par-SimGr-8-Q-2"]),
      additionalPractice: asAdditional(["Par-SimGr-8-AQ-1","Par-SimGr-8-AQ-2","Par-SimGr-8-AQ-3","Par-SimGr-8-AQ-4"]),
    },
  ],
};

export default simpleGraphing;