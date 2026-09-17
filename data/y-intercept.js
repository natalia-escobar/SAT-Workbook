import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const yIntercept = {
  name: "Y-Intercept",
  workedProblems: [
    // Problem 1
    {
      ...asWorked(["Par-YInt-1-E-1"]),
      ...asGuided(["Par-YInt-1-GP-1"]),
      practice: asPractice(["Par-YInt-1-Q-1","Par-YInt-1-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-1-AQ-1","Par-YInt-1-AQ-2","Par-YInt-1-AQ-3","Par-YInt-1-AQ-4"]),
    },

    // Problem 2
    {
      ...asWorked(["Par-YInt-2-E-1"]),
      ...asGuided(["Par-YInt-2-GP-1"]),
      practice: asPractice(["Par-YInt-2-Q-1","Par-YInt-2-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-2-AQ-1","Par-YInt-2-AQ-2","Par-YInt-2-AQ-3","Par-YInt-2-AQ-4"]),
    },

    // Problem 3
    {
      ...asWorked(["Par-YInt-3-E-1"]),
      ...asGuided(["Par-YInt-3-GP-1"]),
      practice: asPractice(["Par-YInt-3-Q-1","Par-YInt-3-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-3-AQ-1","Par-YInt-3-AQ-2","Par-YInt-3-AQ-3","Par-YInt-3-AQ-4"]),
    },

    // Problem 4
    {
      ...asWorked(["Par-YInt-4-E-1"]),
      ...asGuided(["Par-YInt-4-GP-1"]),
      practice: asPractice(["Par-YInt-4-Q-1","Par-YInt-4-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-4-AQ-1","Par-YInt-4-AQ-2","Par-YInt-4-AQ-3","Par-YInt-4-AQ-4"]),
    },

    // Problem 5
    {
      ...asWorked(["Par-YInt-5-E-1"]),
      ...asGuided(["Par-YInt-5-GP-1"]),
      practice: asPractice(["Par-YInt-5-Q-1","Par-YInt-5-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-5-AQ-1","Par-YInt-5-AQ-2","Par-YInt-5-AQ-3","Par-YInt-5-AQ-4"]),
    },

    // Problem 6
    {
      ...asWorked(["Par-YInt-6-E-1","Par-YInt-6-E-2","Par-YInt-6-E-3","Par-YInt-6-E-4","Par-YInt-6-E-5"]),
      ...asGuided(["Par-YInt-6-GP-1","Par-YInt-6-GP-2","Par-YInt-6-GP-3","Par-YInt-6-GP-4"]),
      practice: asPractice(["Par-YInt-6-Q-1","Par-YInt-6-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-6-AQ-1","Par-YInt-6-AQ-2","Par-YInt-6-AQ-3"]),
    },

    // Problem 7
    {
      ...asWorked(["Par-YInt-7-E-1"]),
      ...asGuided(["Par-YInt-7-GP-1"]),
      practice: asPractice(["Par-YInt-7-Q-1","Par-YInt-7-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-7-AQ-1","Par-YInt-7-AQ-2","Par-YInt-7-AQ-3","Par-YInt-7-AQ-4"]),
    },

    // Problem 8
    {
      ...asWorked(["Par-YInt-8-E-1"]),
      ...asGuided(["Par-YInt-8-GP-1"]),
      practice: asPractice(["Par-YInt-8-Q-1","Par-YInt-8-Q-2"]),
      additionalPractice: asAdditional(["Par-YInt-8-AQ-1","Par-YInt-8-AQ-2","Par-YInt-8-AQ-3","Par-YInt-8-AQ-4"]),
    },
  ],
};

export default yIntercept;