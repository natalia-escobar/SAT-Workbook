import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const quadraticWP = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Writing Quadratic Equation from a Word Problem",
  meta: "",
  slug: "writing-quadratic-equation-from-word-problem",
  workedProblems: [

    // Problem 1
    {
      ...asWorked("Par61625"),
      ...asGuided("Par68998"),
      practice: asPractice(["Par66721", "Par21780"]),
      additionalPractice: asAdditional(["Par43119", "Par56165", "Par53553", "Par32073"]),
    },

        ],
};

export default quadraticWP;