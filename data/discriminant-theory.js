import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const discriminantTheory = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Discriminant Theory",
  meta: "",
  workedProblems: [

    // Problem 1

    {
      ...asWorked("Par71484"),
      ...asGuided("Par97237"),
      practice: asPractice(["Par12395", "Par13311"]),
      additionalPractice: asAdditional(["Par72166", "Par36102", "Par71983", "Par67986"]),
    },

    // Problem 2

    {
      ...asWorked("Par14415"),
      ...asGuided("Par81513"),
      practice: asPractice(["Par96216", "Par46333"]),
      additionalPractice: asAdditional(["Par59896", "Par67326", "Par96985", "Par28759", "Par26495", "Par20408","Par17480", "Par63063"]),
    },

    // Problem 3

    {
      ...asWorked("Par67319"),
      ...asGuided("Par49943"),
      practice: asPractice(["Par85180", "Par16633"]),
      additionalPractice: asAdditional(["Par51409", "Par70959", "Par53628", "Par91575"]),
    },

    // Problem 4

    {
      ...asWorked("Par22682"),
      ...asGuided("Par13889"),
      practice: asPractice(["Par11595", "Par36289"]),
      additionalPractice: asAdditional(["Par35531", "Par92645", "Par75678", "Par59561"]),
    },

    // Problem 5

    {
      ...asWorked("Par83759"),
      ...asGuided("Par21704"),
      practice: asPractice(["Par58509", "Par43664"]),
      additionalPractice: asAdditional(["Par95844", "Par82102", "Par95332", "Par99010", "Par46739", "Par42652","Par14183", "Par14029"]),
    },

    // Problem 6

    {
      ...asWorked("Par21620"),
      ...asGuided("Par74828"),
      practice: asPractice(["Par63400", "Par61472"]),
      additionalPractice: asAdditional(["Par19335", "Par95656", "Par30173", "Par51357"]),
    },

    // Problem 7

    {
      ...asWorked("Par83099"),
      ...asGuided("Par35027"),
      practice: asPractice(["Par90734", "Par33426"]),
      additionalPractice: asAdditional(["Par65634", "Par36007", "Par35404", "Par82687"]),
    },

     // Problem 8

    {
      ...asWorked("Par81371"),
      ...asGuided("Par92870"),
      practice: asPractice(["Par42726", "Par63752"]),
      additionalPractice: asAdditional(["Par80528", "Par60587", "Par20100", "Par10669"]),
    },

    // Problem 9

    {
      ...asWorked("Par21474"),
      ...asGuided("Par55221"),
      practice: asPractice(["Par89351", "Par41505"]),
      additionalPractice: asAdditional(["Par98574", "Par32951", "Par94601", "Par23069"]),
    },

    ],
};

export default discriminantTheory;
