import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const simpleGraphing = {
  name: "Parabola",
  lesson: "Simple Graphing",
  workedProblems: [
    // Problem 1
    {
      ...asWorked("Par34378"),
      ...asGuided("Par97742"),
      practice: asPractice(["Par73907","Par80055"]),
      additionalPractice: asAdditional(["Par79460","Par70963","Par79991","Par55114"]),
    },

    // Problem 2
    {
      ...asWorked("Par18600"),
      ...asGuided("Par77838"),
      practice: asPractice(["Par91613","Par86603"]),
      additionalPractice: asAdditional(["Par74195","Par39174","Par81034","Par23233"]),
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
      ...asWorked("Par21278"),
      ...asGuided("Par52136"),
      practice: asPractice(["Par53466","Par45308"]),
      additionalPractice: asAdditional(["Par38578","Par83619","Par60221","Par99493"]),
    },

    // Problem 6
    {
      ...asWorked("Par48057"),
      ...asGuided("Par78959"),
      practice: asPractice(["Par59866","Par44798"]),
      additionalPractice: asAdditional(["Par57926","Par63625","Par64365"]),
    },

    // Problem 7
    {
      ...asWorked("Par88913"),
      ...asGuided("Par70428"),
      practice: asPractice(["Par78487","Par18767"]),
      additionalPractice: asAdditional(["Par43739","Par20206","Par69783","Par31355"]),
    },

    // Problem 8
    {
      ...asWorked("Par62335"),
      ...asGuided("Par35666"),
      practice: asPractice(["Par66898","Par99000"]),
      additionalPractice: asAdditional(["Par12488","Par73063","Par32710","Par58354"]),
    },
  ],
};

export default simpleGraphing;