import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const evaluatingAFunction = {
  icon: "ti-line",
  name: "Parabola",
  meta: "",
  workedProblems: [
    // Problem 1
    {
      ...asWorked("Par43269"),
      ...asGuided("Par60427"),
      practice: asPractice(["Par71314", "Par37512"]),
      additionalPractice: asAdditional(["Par71962", "Par27418", "Par89206", "Par77590"]),
    },

    // Problem 2
    {
      ...asWorked("Par86722"),
      ...asGuided("Par56885"),
      practice: asPractice(["Par83095", "Par90556"]),
      additionalPractice: asAdditional(["Par19540", "Par37365", "Par58404", "Par11142"]),
    },

    // Problem 3
    {
      ...asWorked("Par24387"),
      ...asGuided("Par52038"),
      practice: asPractice(["Par90372", "Par79932"]),
      additionalPractice: asAdditional(["Par85149", "Par63493", "Par18696", "Par63076"]),
    },

     // Problem 4
    {
      ...asWorked("Par68538"),
      ...asGuided("Par74150"),
      practice: asPractice(["Par71454", "Par85686"]),
      additionalPractice: asAdditional(["Par46519", "Par77978", "Par32625", "Par32392"]),
    },

     // Problem 5
    {
      ...asWorked("Par58111"),
      ...asGuided("Par85995"),
      practice: asPractice(["Par81908", "Par36327"]),
      additionalPractice: asAdditional(["Par51039", "Par16622", "Par79236", "Par13713"]),
    },

     // Problem 6
    {
      ...asWorked("Par73529"),
      ...asGuided("Par54429"),
      practice: asPractice(["Par10520", "Par77355"]),
      additionalPractice: asAdditional(["Par47530", "Par94360", "Par11759", "Par35467"]),
    },
    ],
};

export default evaluatingAFunction;