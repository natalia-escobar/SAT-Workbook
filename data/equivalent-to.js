import { asWorked, asGuided, asPractice, asAdditional } from "@/lib/questions";

const equivalentTo = {
  icon: "ti-line",
  name: "Parabola",
  meta: "",
  workedProblems: [
    // Problem 1
    {
      ...asWorked("ParEqE1"),
      ...asGuided("ParEqGP1"),
      practice: asPractice(["ParEq1Q1","ParEq1Q2"]),
      additionalPractice: asAdditional(["ParEq1AQ1","ParEq1AQ2","ParEq1AQ3","ParEq1AQ4","ParEq1AQ5"]),
    },

    // Problem 2
    {
      ...asWorked("ParEqE2"),
      ...asGuided("ParEqGP2"),
      practice: asPractice(["ParEq2Q1","ParEq2Q2"]),
      additionalPractice: asAdditional(["ParEq2AQ1","ParEq2AQ2","ParEq2AQ3","ParEq2AQ4"]),
    },

    // Problem 3
    {
      ...asWorked("ParEqE3"),
      ...asGuided("ParEqGP3"),
      practice: asPractice(["ParEq3Q1","ParEq3Q2"]),
      additionalPractice: asAdditional(["ParEq3AQ1","ParEq3AQ2","ParEq3AQ3","ParEq3AQ4"]),
    },

    // Problem 4
    {
      ...asWorked("ParEqE4"),
      ...asGuided("ParEqGP4"),
      practice: asPractice(["ParEq4Q1","ParEq4Q2"]),
      additionalPractice: asAdditional(["ParEq4AQ1","ParEq4AQ2","ParEq4AQ3","ParEq4AQ4"]),
    },

    // Problem 5
    {
      ...asWorked("ParEqE5"),
      ...asGuided("ParEqGP5"),
      practice: asPractice(["ParEq5Q1","ParEq5Q2"]),
      additionalPractice: asAdditional(["ParEq5AQ1","ParEq5AQ2","ParEq5AQ3","ParEq5AQ4"]),
    },

    // Problem 6
    {
      ...asWorked("ParEqE6"),
      ...asGuided("ParEqGP6"),
      practice: asPractice(["ParEq6Q1","ParEq6Q2"]),
      additionalPractice: asAdditional(["ParEq6AQ1","ParEq6AQ2","ParEq6AQ3","ParEq6AQ4"]),
    },

    // Problem 7
    {
      ...asWorked("ParEqE7"),
      ...asGuided("ParEqGP7"),
      practice: asPractice(["ParEq7Q1"]),
      additionalPractice: asAdditional(["ParEq7AQ1","ParEq7AQ2","ParEq7AQ3","ParEq7AQ4"]),
    },

    // Problem 8
    {
      ...asWorked("ParEqE8"),
      ...asGuided("ParEqGP8"),
      practice: asPractice(["ParEq8Q1","ParEq8Q2"]),
      additionalPractice: asAdditional(["ParEq8AQ1","ParEq8AQ2","ParEq8AQ3","ParEq8AQ4"]),
    },

    // Problem 9
    {
      ...asWorked("ParEqE9"),
      ...asGuided("ParEqGP9"),
      practice: asPractice(["ParEq9Q1","ParEq9Q2"]),
      additionalPractice: asAdditional([]),
    },

    // Problem 10
    {
      ...asWorked("ParEqE10"),
      ...asGuided("ParEqGP10"),
      practice: asPractice(["ParEq10Q1","ParEq10Q2"]),
      additionalPractice: asAdditional([]),
    },

    // Problem 11
    {
      ...asWorked("ParEqE11"),
      ...asGuided("ParEqGP11"),
      practice: asPractice(["ParEq11Q1","ParEq11Q2"]),
      additionalPractice: asAdditional(["ParEq11AQ1","ParEq11AQ2","ParEq11AQ3","ParEq11AQ4"]),
    },

    // Problem 12
    {
      ...asWorked("ParEqE12"),
      ...asGuided("ParEqGP12"),
      practice: asPractice(["ParEq12Q1","ParEq12Q2"]),
      additionalPractice: asAdditional(["ParEq12AQ1","ParEq12AQ2","ParEq12AQ3","ParEq12AQ4"]),
    },

    // Problem 13
    {
      ...asWorked("ParEqE13"),
      ...asGuided("ParEqGP13"),
      practice: asPractice(["ParEq13Q1","ParEq13Q2"]),
      additionalPractice: asAdditional(["ParEq13AQ1","ParEq13AQ2","ParEq13AQ3","ParEq13AQ4"]),
    },

    // Problem 14
    {
      ...asWorked("ParEqE14"),
      ...asGuided("ParEqGP14"),
      practice: asPractice(["ParEq14Q1","ParEq14Q2"]),
      additionalPractice: asAdditional([]),
    },

    // Problem 15
    {
      ...asWorked("ParEqE15"),
      ...asGuided("ParEqGP15"),
      practice: asPractice(["ParEq15Q1","ParEq15Q2"]),
      additionalPractice: asAdditional(["ParEq15AQ1","ParEq15AQ2","ParEq15AQ3","ParEq15AQ4"]),
    },

    // Problem 16
    {
      ...asWorked("ParEqE16"),
      ...asGuided("ParEqGP16"),
      practice: asPractice(["ParEq16Q1","ParEq16Q2"]),
      additionalPractice: asAdditional(["ParEq16AQ1","ParEq16AQ2","ParEq16AQ3","ParEq16AQ4"]),
    },

    // Problem 17
    {
      ...asWorked("ParEqE17"),
      ...asGuided("ParEqGP17"),
      practice: asPractice(["ParEq17Q1","ParEq17Q2"]),
      additionalPractice: asAdditional(["ParEq17AQ1","ParEq17AQ2","ParEq17AQ3","ParEq17AQ4","ParEq17AQ5","ParEq17AQ6"]),
    },

    // Problem 18
    {
      ...asWorked("ParEqE18"),
      ...asGuided("ParEqGP18"),
      practice: asPractice(["ParEq18Q1","ParEq18Q2"]),
      additionalPractice: asAdditional(["ParEq18AQ1","ParEq18AQ2","ParEq18AQ3","ParEq18AQ4"]),
    },

    // Problem 19
    {
      ...asWorked("ParEqE19"),
      ...asGuided("ParEqGP19"),
      practice: asPractice(["ParEq19Q1","ParEq19Q2"]),
      additionalPractice: asAdditional(["ParEq19AQ1","ParEq19AQ2","ParEq19AQ3","ParEq19AQ4"]),
    },

    // Problem 20
    {
      ...asWorked("ParEqE20"),
      ...asGuided("ParEqGP20"),
      practice: asPractice(["ParEq20Q1","ParEq20Q2"]),
      additionalPractice: asAdditional(["ParEq20AQ1","ParEq20AQ2","ParEq20AQ3","ParEq20AQ4"]),
    },

    // Problem 21
    {
      ...asWorked("ParEqE21"),
      ...asGuided("ParEqGP21"),
      practice: asPractice(["ParEq21Q1","ParEq21Q2"]),
      additionalPractice: asAdditional(["ParEq21AQ1","ParEq21AQ2","ParEq21AQ3","ParEq21AQ4"]),
    },

    // Problem 22
    {
      ...asWorked("ParEqE22"),
      ...asGuided("ParEqGP22"),
      practice: asPractice(["ParEq22Q1","ParEq22Q2"]),
      additionalPractice: asAdditional(["ParEq22AQ1","ParEq22AQ2","ParEq22AQ3","ParEq22AQ4"]),
    },

    // Problem 23
    {
      ...asWorked("ParEqE23"),
      ...asGuided("ParEqGP23"),
      practice: asPractice(["ParEq23Q1","ParEq23Q2"]),
      additionalPractice: asAdditional([]),
    },

    // Problem 24
    {
      ...asWorked("ParEqE24"),
      ...asGuided("ParEqGP24"),
      practice: asPractice(["ParEq24Q1","ParEq24Q2"]),
      additionalPractice: asAdditional(["ParEq24AQ1","ParEq24AQ2","ParEq24AQ3","ParEq24AQ4"]),
    },

    // Problem 25
    {
      ...asWorked("ParEqE25"),
      ...asGuided("ParEqGP25"),
      practice: asPractice(["ParEq25Q1","ParEq25Q2"]),
      additionalPractice: asAdditional([]),
    },

    // Problem 26
    {
      ...asWorked("ParEqE26"),
      ...asGuided("ParEqGP26"),
      practice: asPractice(["ParEq26Q1","ParEq26Q2"]),
      additionalPractice: asAdditional([]),
    },
  ],
};

export default equivalentTo;
