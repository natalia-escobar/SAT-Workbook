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

     // Problem 7
    {
      ...asWorked("Par74071"),
      ...asGuided("Par64671"),
      practice: asPractice(["Par74482"]),
      additionalPractice: asAdditional(["Par95517", "Par42701"]),
    },

     // Problem 8
    {
      ...asWorked("Par37276"),
      ...asGuided("Par20312"),
      practice: asPractice(["Par60053", "Par30945"]),
      additionalPractice: asAdditional(["Par13174", "Par81973", "Par67383", "Par92944"]),
    },

     // Problem 9
    {
      ...asWorked("Par67448"),
      ...asGuided("Par98677"),
      practice: asPractice(["Par84367", "Par34187"]),
      additionalPractice: asAdditional(["Par74774", "Par61753", "Par73308", "Par17403"]),
    },

     // Problem 10
    {
      ...asWorked("Par80304"),
      ...asGuided("Par78209"),
      practice: asPractice(["Par98140", "Par22526"]),
      additionalPractice: asAdditional(["Par95861","Par78949", "Par55001", "Par81069"]),
    },

    // Problem 11
    {
      ...asWorked("Par18744"),
      ...asGuided("Par99940"),
      practice: asPractice(["Par11274", "Par63006"]),
      additionalPractice: asAdditional(["Par78227","Par40944", "Par31218", "Par31516"]),
    },

    ],
};

export default evaluatingAFunction;