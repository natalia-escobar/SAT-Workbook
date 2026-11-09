import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const parMiscellaneous = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Miscellaneous",
  meta: "",
  slug: "par-miscellaneous",
  workedProblems: [

    // Problem 1
    {
      ...asWorked("Par67523"),
      ...asGuided("Par36615"),
      practice: asPractice(["Par74842", "Par48241"]),
      additionalPractice: asAdditional(["Par47058", "Par86751", "Par81606", "Par65559"]),
    },

    // Problem 2
    {
      ...asWorked("Par54284"),
      ...asGuided("Par23606"),
      practice: asPractice(["Par96692", "Par21926"]),
      additionalPractice: asAdditional(["Par61660", "Par21928", "Par79355", "Par56405"]),
    },

    // Problem 3
    {
      ...asWorked("Par65183"),
      ...asGuided("Par75145"),
      practice: asPractice(["Par19517", "Par45089"]),
      additionalPractice: asAdditional(["Par57445", "Par55193", "Par52808", "Par75820"]),
    },

    // Problem 4
    {
      ...asWorked("Par69768"),
      ...asGuided("Par51462"),
      practice: asPractice(["Par67331", "Par61968"]),
      additionalPractice: asAdditional(["Par97678", "Par99150", "Par18618", "Par41643"]),
    },

    // Problem 5
    {
      ...asWorked("Par14269"),
      ...asGuided("Par77798"),
      practice: asPractice(["Par37067", "Par35947"]),
      additionalPractice: asAdditional(["Par33563", "Par26401", "Par97724", "Par75438"]),
    },

    // Problem 6
    {
      ...asWorked("Par38299"),
      ...asGuided("Par29016"),
      practice: asPractice(["Par78770", "Par13905"]),
      additionalPractice: asAdditional(["Par43744", "Par29040", "Par57581", "Par54269"]),
    },

    // Problem 7
    {
      ...asWorked("Par84050"),
      ...asGuided("Par93336"),
      practice: asPractice(["Par44826", "Par43102"]),
      additionalPractice: asAdditional(["Par41759", "Par51859", "Par67249", "Par58867"]),
    },

     // Problem 8
    {
      ...asWorked("Par94722"),
      ...asGuided("Par38276"),
      practice: asPractice(["Par29993", "Par89449"]),
      additionalPractice: asAdditional(["Par30629", "Par58988", "Par92153", "Par66084"]),
    },

    // Problem 9
    {
      ...asWorked("Par10221"),
      ...asGuided("Par78421"),
      practice: asPractice(["Par15337", "Par18088"]),
      additionalPractice: asAdditional(["Par83987", "Par63756", "Par91029", "Par68476"]),
    },

    // Problem 10
    {
      ...asWorked("Par98171"),
      ...asGuided("Par36824"),
      practice: asPractice(["Par51214", "Par67011"]),
      additionalPractice: asAdditional(["Par14224", "Par14165", "Par31688", "Par80613"]),
    },
],
};

export default parMiscellaneous;