import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const graphingFunctions = {
  icon: "ti-line",
  name: "Parabola",
  lesson: "Graphing Functions",
  meta: "",
  workedProblems: [

    // Problem 1
    {
      ...asWorked("Par34378"),
      ...asGuided("Par97742"),
      practice: asPractice(["Par73907", "Par80055"]),
      additionalPractice: asAdditional(["Par79460", "Par79991", "Par70963", "Par55114"]),
    },

    // Problem 2
    {
      ...asWorked("Par18600"),
      ...asGuided("Par77838"),
      practice: asPractice(["Par91613", "Par86603"]),
      additionalPractice: asAdditional(["Par74195", "Par39174", "Par81034", "Par23233"]),
    },

     // Problem 3
    {
      ...asWorked("Par15321"),
      ...asGuided("Par29916"),
      practice: asPractice(["Par77374", "Par92970"]),
      additionalPractice: asAdditional(["Par32282", "Par34788", "Par75700", "Par58821"]),
    },
    
     // Problem 4
    {
      ...asWorked("Par94354"),
      ...asGuided("Par89877"),
      practice: asPractice(["Par34246", "Par60783"]),
      additionalPractice: asAdditional(["Par31856", "Par82408", "Par81845", "Par45598"]),
    },
],
};

export default graphingFunctions;