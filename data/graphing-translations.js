import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const graphingTranslations = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Graphing Translations",
  meta: "",
  slug: "graphing-translations",
  workedProblems: [

    // Problem 1
    {
      ...asWorked("Par21278"),
      ...asGuided("Par52136"),
      practice: asPractice(["Par53466", "Par45308"]),
      additionalPractice: asAdditional(["Par38578", "Par83619", "Par60221", "Par99493"]),
    },

    // Problem 2
    {
      ...asWorked("Par48057"),
      ...asGuided("Par78959"),
      practice: asPractice(["Par59866", "Par44798"]),
      additionalPractice: asAdditional(["Par57926", "Par63625", "Par64365"]),
    },

    // Problem 3
    {
      ...asWorked("Par88913"),
      ...asGuided("Par70428"),
      practice: asPractice(["Par78487", "Par18767"]),
      additionalPractice: asAdditional(["Par43739", "Par20206", "Par69783", "Par31355"]),
    },

    // Problem 4
    {
      ...asWorked("Par62335"),
      ...asGuided("Par35666"),
      practice: asPractice(["Par66898", "Par99000"]),
      additionalPractice: asAdditional(["Par12488", "Par73063", "Par32710", "Par58354"]),
    },

    // Problem 5
    {
      ...asWorked("Par92026"),
      ...asGuided("Par84484"),
      practice: asPractice(["Par29848", "Par13204"]),
      additionalPractice: asAdditional(["Par18546", "Par61889", "Par30697", "Par77553"]),
    },

],
};

export default graphingFunctions;