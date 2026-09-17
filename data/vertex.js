import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const vertex = {
  name: "Vertex",
  workedProblems: [
    {
      ...asWorked("ParVer1E1"),
      ...asGuided("ParVer1GP1"),
      practice: asPractice(["ParVer1Q1", "ParVer1Q2"]),
      additionalPractice: asAdditional([
        "ParVer1AQ1",
        "ParVer1AQ2",
        "ParVer1AQ3",
        "ParVer1AQ4",
      ]),
    },
  ],
};

export default vertex;