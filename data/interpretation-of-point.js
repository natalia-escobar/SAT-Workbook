import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const interpretationPoint = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Best Interpretation of a Point",
  meta: "",
  slug: "best-interpretation-of-a-point",
  workedProblems: [

    // Problem 1
    {
      ...asWorked("Par55996"),
      ...asGuided("Par83515"),
      practice: asPractice(["Par89116", "Par22417"]),
      additionalPractice: asAdditional(["Par53264", "Par37346", "Par33491", "Par27489"]),
    },

     // Problem 2
    {
      ...asWorked("Par35688"),
      ...asGuided("Par96664"),
      practice: asPractice(["Par20264", "Par11356"]),
      additionalPractice: asAdditional(["Par47075", "Par24723", "Par80071", "Par44825"]),
    },

        ],
};

export default interpretationPoint;