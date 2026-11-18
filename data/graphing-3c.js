import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const graphing3c = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Finding the Equation, Points on the Graph, or Graph",
  meta: "",
  slug: "finding-the-equation-points-on-the-graph-or-graph",
  workedProblems: [

    // Problem 1
    {
      ...asWorked("Par78202"),
      ...asGuided("Par29964"),
      practice: asPractice(["Par48675", "Par13008"]),
      additionalPractice: asAdditional(["Par78723", "Par35134", "Par93416", "Par73422"]),
    },

    // Problem 2
    {
      ...asWorked("Par34466"),
      ...asGuided("Par12500"),
      practice: asPractice(["Par67250", "Par83417"]),
      additionalPractice: asAdditional(["Par28215", "Par49388", "Par48837", "Par29829"]),
    },

    // Problem 3
    {
      ...asWorked("Par41862"),
      ...asGuided("Par86598"),
      practice: asPractice(["Par94475", "Par98613"]),
      additionalPractice: asAdditional(["Par13595", "Par38312", "Par52178", "Par94677"]),
    },

    // Problem 4
    {
      ...asWorked("Par16018"),
      ...asGuided("Par42028"),
      practice: asPractice(["Par87068", "Par22149"]),
      additionalPractice: asAdditional(["Par81917", "Par22179", "Par16934", "Par56508"]),
    },



    ],
};

export default graphing3c;