import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const xIntercept = {
    name: "X-Intercept",
    workedProblems: [
    
    // Problem 1

    {
      ...asWorked("Par-XInt-1-E-1"),
      ...asGuided("Par-XInt-1-GP-1"),
      practice: asPractice(["Par-XInt-1-Q-1"]),
      additionalPractice: asAdditional(["Par-XInt-1-AQ-1", "Par-XInt-1-AQ-2"]),
    },

    // Problem 2

    {
      ...asWorked("Par-XInt-2-E-1"),
      ...asGuided("Par-XInt-2-GP-1"),
      practice: asPractice(["Par-XInt-2-Q-1", "Par-XInt-2-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-2-AQ-1", "Par-XInt-2-AQ-2", "Par-XInt-2-AQ-3"]),
    },

    // Problem 3

    {
      ...asWorked("Par-XInt-3-E-1"),
      ...asGuided("Par-XInt-3-GP-1"),
      practice: asPractice(["Par-XInt-3-Q-1"]),
      additionalPractice: asAdditional(["Par-XInt-3-AQ-1", "Par-XInt-3-AQ-2"]),
    },

    // Problem 4

    {
      ...asWorked("Par-XInt-4-E-1"),
      ...asGuided("Par-XInt-4-GP-1"),
      practice: asPractice(["Par-XInt-4-Q-1", "Par-XInt-4-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-4-AQ-1", "Par-XInt-4-AQ-2", "Par-XInt-4-AQ-3", "Par-XInt-4-AQ-4"]),
    },

    // Problem 5

    {
      ...asWorked("Par-XInt-5-E-1"),
      ...asGuided("Par-XInt-5-GP-1"),
      practice: asPractice(["Par-XInt-5-Q-1", "Par-XInt-5-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-5-AQ-1", "Par-XInt-5-AQ-2"]),
    },

    // Problem 6

    {
      ...asWorked("Par-XInt-6-E-1"),
      ...asGuided("Par-XInt-6-GP-1"),
      practice: asPractice(["Par-XInt-6-Q-1", "Par-XInt-6-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-6-AQ-1", "Par-XInt-6-AQ-2", "Par-XInt-6-AQ-3"]),
    },


    // Problem 7

    {
      ...asWorked("Par-XInt-7-E-1"),
      ...asGuided("Par-XInt-7-GP-1"),
      practice: asPractice(["Par-XInt-7-Q-1", "Par-XInt-7-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-7-AQ-1", "Par-XInt-7-AQ-2"]),
    },

    // Problem 8

    {
      ...asWorked("Par-XInt-8-E-1"),
      ...asGuided("Par-XInt-8-GP-1"),
      practice: asPractice(["Par-XInt-8-Q-1", "Par-XInt-8-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-8-AQ-1", "Par-XInt-8-AQ-2"]),
    },

    // Problem 9

    {
      ...asWorked("Par-XInt-9-E-1"),
      ...asGuided("Par-XInt-9-GP-1"),
      practice: asPractice(["Par-XInt-9-Q-1", "Par-XInt-9-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-9-AQ-1", "Par-XInt-9-AQ-2", "Par-XInt-9-AQ-3"]),
    },

    // Problem 10

    {
      ...asWorked("Par-XInt-10-E-1"),
      ...asGuided("Par-XInt-10-GP-1"),
      practice: asPractice(["Par-XInt-10-Q-1"]),
      additionalPractice: asAdditional(["Par-XInt-10-AQ-1", "Par-XInt-10-AQ-2"]),
    },

    // Problem 11

    {
      ...asWorked("Par-XInt-11-E-1"),
      ...asGuided("Par-XInt-11-GP-1"),
      practice: asPractice(["Par-XInt-11-Q-1"]),
      additionalPractice: asAdditional(["Par-XInt-11-AQ-1", "Par-XInt-11-AQ-2"]),
    },

    // Problem 12

    {
      ...asWorked([
        "Par-XInt-12-E-1", "Par-XInt-12-E-2", "Par-XInt-12-E-3",
        "Par-XInt-12-E-4", "Par-XInt-12-E-5", "Par-XInt-12-E-6",
        "Par-XInt-12-E-7", "Par-XInt-12-E-8", "Par-XInt-12-E-9",
      ]),
      ...asGuided([
        "Par-XInt-12-GP-1", "Par-XInt-12-GP-2", "Par-XInt-12-GP-3",
        "Par-XInt-12-GP-4", "Par-XInt-12-GP-5", "Par-XInt-12-GP-6",
        "Par-XInt-12-GP-7", "Par-XInt-12-GP-8", "Par-XInt-12-GP-9",
      ]),
      practice: asPractice(["Par-XInt-12-Q-1", "Par-XInt-12-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-12-AQ-1", "Par-XInt-12-AQ-2", "Par-XInt-12-AQ-3"]),
    },

    // Problem 13

    {
      ...asWorked("Par-XInt-13-E-1"),
      ...asGuided("Par-XInt-13-GP-1"),
      practice: asPractice(["Par-XInt-13-Q-1", "Par-XInt-13-Q-2", "Par-XInt-13-Q-3"]),
      additionalPractice: asAdditional(["Par-XInt-13-AQ-1", "Par-XInt-13-AQ-2", "Par-XInt-13-AQ-3", "Par-XInt-13-AQ-4", "Par-XInt-13-AQ-5"]),
    },

    // Problem 14

    {
      ...asWorked(["Par-XInt-14-E-1"]),
      ...asGuided(["Par-XInt-14-GP-1"]),
      practice: asPractice(["Par-XInt-14-Q-1", "Par-XInt-14-Q-2"]),
      additionalPractice: asAdditional(["Par-XInt-14-AQ-1", "Par-XInt-14-AQ-2",
        "Par-XInt-14-AQ-3", "Par-XInt-14-AQ-4"]),
    },

     // Problem 15
    
    {
      ...asWorked(["Par-XInt-15-E-1"]),
      ...asGuided(["Par-XInt-15-GP-1"]),
      practice: asPractice(["Par-XInt-15-Q-1"]),
      additionalPractice: asAdditional(["Par-XInt-15-AQ-1", "Par-XInt-15-AQ-2"]),
    },

    ]
    
}

export default xIntercept;