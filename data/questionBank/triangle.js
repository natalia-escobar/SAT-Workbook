export const questions = [
    {
        id: "Tri16988",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 1,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(PQR\\), angles \\(P\\) and \\(Q\\) are acute, side \\(\\overline{PR}\\) has a length of \\(18.6\\), and \\(\\tan Q = \\frac{1}{4}\\). What is the length of side \\(\\overline{QR}\\), rounded to the nearest tenth?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(4.7\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(18.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(74.4\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(76.7\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Since \\(P\\) and \\(Q\\) are acute, the right angle is at \\(R\\). Sketch the triangle: \\(\\overline{PR}\\) is opposite \\(Q\\) and \\(\\overline{QR}\\) is adjacent to \\(Q\\)`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `TOA: \\(\\tan Q = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{PR}{QR}\\), so \\(\\frac{1}{4} = \\frac{18.6}{QR}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Solve: \\(QR = 18.6 \\cdot 4 = 74.4\\). Confirm in Desmos by typing \\(18.6 / (1/4)\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri34148",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 1,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(DEF\\), angles \\(D\\) and \\(E\\) are acute, side \\(\\overline{DF}\\) has a length of \\(15.4\\), and \\(\\tan E = \\frac{2}{5}\\). What is the length of side \\(\\overline{EF}\\), rounded to the nearest tenth?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(6.2\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(30.8\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(38.5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(41.6\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Identify the right angle (the vertex not named as acute) and sketch the triangle`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Decide which given side is opposite and which unknown side is adjacent to angle \\(E\\), then write \\(\\tan E\\) as their ratio`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Solve for the unknown side and round to the nearest tenth",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri33956",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 1,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(JKL\\), angles \\(J\\) and \\(K\\) are acute, side \\(\\overline{JL}\\) has a length of \\(24.8\\), and \\(\\tan K = \\frac{3}{8}\\). What is the length of side \\(\\overline{KL}\\), rounded to the nearest tenth?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(9.3\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(26.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(66.1\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(68.7\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri14481",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 1,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(ABC\\), \\(\\angle C\\) is a right angle, and the length of \\(\\overline{AB}\\) is \\(65\\). If \\(\\tan A = \\frac{5}{12}\\), what is the length of \\(\\overline{AC}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(25\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(39\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(60\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(156\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[500,320],"C":[500,160]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"B","arms":["A","C"]}],"labels":[{"text":"x","on":["A","B"]},{"text":"65","on":["C","A"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri77316",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 1,
        questionType: "AQ",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(PQR\\), \\(\\angle R\\) is a right angle, and the length of \\(\\overline{PR}\\) is \\(28\\). If \\(\\tan P = \\frac{3}{4}\\), what is the length of \\(\\overline{PQ}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(21\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(35\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( \\frac{112}{3} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{140}{3} \\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"P":[160,320],"Q":[500,320],"R":[500,80]},"segments":[{"from":"P","to":"Q"},{"from":"Q","to":"R"},{"from":"R","to":"P"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"Q","arms":["P","R"]}],"labels":[{"text":"28","on":["P","Q"]},{"text":"x","on":["R","P"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri38953",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 1,
        questionType: "AQ",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(DEF\\), \\(\\angle F\\) is a right angle, and the length of \\(\\overline{DE}\\) is \\(85\\). If \\(\\tan D = \\frac{8}{15}\\), what is the length of \\(\\overline{EF}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(40\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(45\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(75\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{85}{8} \\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: {"size":[600,400],"points":{"D":[160,320],"F":[500,320],"E":[500,180]},"segments":[{"from":"D","to":"F"},{"from":"F","to":"E"},{"from":"E","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"F","arms":["D","E"]}],"labels":[{"text":"85","on":["E","D"]},{"text":"x","on":["F","E"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },
        {
        id: "Tri50122",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 2,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(PQR\\), \\(\\angle Q\\) is a right angle and the length of \\(\\overline{QR}\\) is \\(120\\) centimeters. If \\(\\cos P = \\frac{5}{13}\\), what is the length, in centimeters, of \\(\\overline{PQ}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(50\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(60\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(100\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(130\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the triangle with the right angle at \\(Q\\). Relative to angle \\(P\\): \\(\\overline{PQ}\\) is adjacent, \\(\\overline{QR}\\) is opposite, and \\(\\overline{PR}\\) is the hypotenuse`,
            note: "",
            gif: "",
            answer: "A",
            video: ""
        },
        {
            text: `CAH: \\(\\cos P = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{5}{13}\\), so the triangle is a \\(5\\)-\\(12\\)-\\(13\\) triangle scaled up, with the opposite side \\(QR\\) matching the \\(12\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `The scale factor is \\(120 \\div 12 = 10\\), so \\(PQ = 5 \\cdot 10 = 50\\). Confirm in Desmos by typing \\(120 \\cdot 5 / 12\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri56384",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 2,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(DEF\\), \\(\\angle E\\) is a right angle and the length of \\(\\overline{DE}\\) is \\(84\\) millimeters. If \\(\\cos D = \\frac{7}{25}\\), what is the length, in millimeters, of \\(\\overline{EF}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(84\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(288\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(300\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the triangle with the right angle at \\(E\\) and label which side is adjacent, opposite, and the hypotenuse relative to angle \\(D\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Use \\(\\cos D = \\frac{\\text{adjacent}}{\\text{hypotenuse}}\\) with the given side to find the hypotenuse`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Use the Pythagorean theorem (or the matching Pythagorean triple) to find the opposite side",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

     {
        id: "Tri59453",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 2,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(JKL\\), \\(\\angle K\\) is a right angle and the length of \\(\\overline{KL}\\) is \\(48\\) inches. If \\(\\cos J = \\frac{8}{17}\\), what is the length, in inches, of \\(\\overline{JK}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(25.6\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(40\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(48\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(102\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri19253",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 3,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(ABC\\), \\(\\angle C\\) is a right angle. The length of \\(\\overline{AC}\\) is \\(28\\), and the length of \\(\\overline{BC}\\) is \\(x\\). If \\(\\tan A = \\frac{4}{7}\\), what is the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(7\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(28\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(49\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"A":[260,320],"B":[500,320],"C":[500,180]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"B","arms":["A","C"]}],"labels":[{"text":"x","on":["B","C"]},{"text":"28","on":["A","B"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the triangle with the right angle at \\(C\\). Relative to angle \\(A\\): \\(\\overline{BC}\\) is opposite and \\(\\overline{AC}\\) is adjacent`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `TOA: \\(\\tan A = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{x}{28}\\), so \\(\\frac{x}{28} = \\frac{4}{7}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Cross-multiply: \\(7x = 112\\), so \\(x = 16\\). Confirm in Desmos by typing \\(28 \\cdot 4 / 7\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri76351",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 3,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(PQR\\), \\(\\angle R\\) is a right angle. The length of \\(\\overline{PR}\\) is \\(x\\), and the length of \\(\\overline{QR}\\) is \\(45\\). If \\(\\tan P = \\frac{5}{3}\\), what is the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(15\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(27\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(45\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(75\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"P":[380,320],"R":[500,320],"Q":[500,100]},"segments":[{"from":"P","to":"R"},{"from":"R","to":"Q"},{"from":"Q","to":"P"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"R","arms":["P","Q"]}],"labels":[{"text":"45","on":["R","Q"]},{"text":"x","on":["P","R"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the triangle with the right angle at \\(R\\) and label which side is opposite and which is adjacent to angle \\(P\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Write \\(\\tan P\\) as the ratio of those two sides and set it equal to \\(\\frac{5}{3}\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Cross-multiply and solve for \\(x\\)",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri98266",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 3,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(DEF\\), \\(\\angle F\\) is a right angle. The length of \\(\\overline{DF}\\) is \\(42\\), and the length of \\(\\overline{EF}\\) is \\(x + 3\\). If \\(\\tan D = \\frac{2}{3}\\), what is the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(25\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(28\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(31\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(63\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: {"size":[600,400],"points":{"D":[220,320],"F":[500,320],"E":[500,180]},"segments":[{"from":"D","to":"F"},{"from":"F","to":"E"},{"from":"E","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"F","arms":["D","E"]}],"labels":[{"text":"x+3","on":["F","E"]},{"text":"42","on":["D","F"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri64666",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 4,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, \\(d\\) is a constant. The value of \\(\\sin x^\\circ = \\frac{k}{d}\\), where \\(k\\) is a constant. What is the value of \\(k\\)?</p>
        <p>The triangle has a horizontal leg of length \\(24\\), a vertical leg of length \\(18\\), and a hypotenuse labeled \\(d\\). Angle \\(x^\\circ\\) is at the bottom-right vertex.</p>`,
        answer: "18",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[340,320],"C":[100,180]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[{"at":"B","arms":["A","C"],"label":"x","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"d","on":["B","C"]},{"text":"18","on":["C","A"]},{"text":"24","on":["A","B"]}],"notToScale":true,"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Identify the sides relative to the angle \\(x^\\circ\\): the vertical leg (\\(18\\)) is opposite, the horizontal leg (\\(24\\)) is adjacent, and \\(d\\) is the hypotenuse`,
            note: "",
            gif: "",
            answer: "18",
            video: ""
        },
        {
            text: `SOH: \\(\\sin x^\\circ = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{18}{d}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Compare with \\(\\frac{k}{d}\\): \\(k = 18\\). (Note that \\(d = 30\\) from the Pythagorean theorem, but it isn't needed.)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri42140",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 4,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, \\(m\\) is a constant. The value of \\(\\cos y^\\circ = \\frac{k}{m}\\), where \\(k\\) is a constant. What is the value of \\(k\\)?</p>
        <p>The triangle has a horizontal leg of length \\(40\\), a vertical leg of length \\(9\\), and a hypotenuse labeled \\(m\\). Angle \\(y^\\circ\\) is at the bottom-right vertex.</p>`,
        answer: "40",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[420,320],"C":[100,220]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[{"at":"B","arms":["A","C"],"label":"y","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"m","on":["B","C"]},{"text":"9","on":["C","A"]},{"text":"40","on":["A","B"]}],"notToScale":true,"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Label the sides relative to angle \\(y^\\circ\\): which leg is adjacent, which is opposite, and which side is the hypotenuse`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `CAH: write \\(\\cos y^\\circ\\) as adjacent over hypotenuse using the given lengths`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Match the numerator to \\(k\\)`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri64264",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 4,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, the value of \\(\\tan z^\\circ = \\frac{k}{35}\\), where \\(k\\) is a constant. What is the value of \\(k\\)?</p>
        <p>The triangle has a horizontal leg of length \\(35\\) and a vertical leg of length \\(12\\). Angle \\(z^\\circ\\) is at the bottom-right vertex.</p>`,
        answer: "12",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[380,320],"C":[100,240]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[{"at":"B","arms":["A","C"],"label":"z","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"","on":["B","C"]},{"text":"12","on":["C","A"]},{"text":"35","on":["A","B"]}],"notToScale":true,"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri24657",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 5,
        questionType: "WE",
        difficulty: 1,
        tags: [],
        text: `<p>In right triangle \\(PQR\\), \\(\\angle R\\) is a right angle. The length of \\(\\overline{PR}\\) is \\(24\\), and the length of \\(\\overline{PQ}\\) is \\(25\\).</p>
        <p>What is the value of \\(\\cos P\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{25}{24} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( \\frac{7}{25} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( \\frac{24}{25} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{7}{24} \\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"P":[180,320],"R":[500,320],"Q":[500,180]},"segments":[{"from":"P","to":"R"},{"from":"R","to":"Q"},{"from":"Q","to":"P"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"R","arms":["P","Q"]}],"labels":[{"text":"25","on":["Q","P"]},{"text":"24","on":["P","R"]}],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the triangle with the right angle at \\(R\\). \\(\\overline{PQ}\\) is opposite the right angle, so it is the hypotenuse; \\(\\overline{PR}\\) touches angle \\(P\\), so it is adjacent`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `CAH: \\(\\cos P = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{PR}{PQ}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Substitute: \\(\\cos P = \\frac{24}{25}\\). (The third side, \\(7\\), is a distractor; it isn't needed.)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri39614",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 5,
        questionType: "GP",
        difficulty: 1,
        tags: [],
        text: `<p>In right triangle \\(DEF\\), \\(\\angle F\\) is a right angle. The length of \\(\\overline{DF}\\) is \\(15\\), and the length of \\(\\overline{DE}\\) is \\(17\\).</p>
        <p>What is the value of \\(\\cos D\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{8}{17} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( \\frac{15}{17} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( \\frac{17}{15} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{8}{15} \\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"D":[200,320],"F":[500,320],"E":[500,140]},"segments":[{"from":"D","to":"F"},{"from":"F","to":"E"},{"from":"E","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"F","arms":["D","E"]}],"labels":[{"text":"17","on":["E","D"]},{"text":"15","on":["D","F"]}],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the triangle with the right angle at \\(F\\) and identify the hypotenuse and the side adjacent to angle \\(D\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Write \\(\\cos D\\) as adjacent over hypotenuse`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Substitute the given lengths and match to an answer choice",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri41492",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 5,
        questionType: "PR",
        difficulty: 1,
        tags: [],
        text: `<p>In right triangle \\(JKL\\), \\(\\angle K\\) is a right angle. The length of \\(\\overline{KL}\\) is \\(20\\), and the length of \\(\\overline{JL}\\) is \\(29\\).</p>
        <p>What is the value of \\(\\cos L\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{21}{29} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( \\frac{29}{20} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( \\frac{21}{20} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( \\frac{20}{29} \\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: {"size":[600,400],"points":{"J":[340,320],"K":[500,320],"L":[500,140]},"segments":[{"from":"J","to":"K"},{"from":"K","to":"L"},{"from":"L","to":"J"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"K","arms":["J","L"]}],"labels":[{"text":"29","on":["L","J"]},{"text":"20","on":["K","L"]}],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri96324",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 6,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, the hypotenuse has a length of \\(41\\), the horizontal leg has a length of \\(40\\), and angle \\(x^\\circ\\) is located at the top-left vertex.</p>
        <p>What is the value of \\(\\sin x^\\circ\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{9}{41} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( \\frac{40}{41} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( \\frac{41}{40} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{1}{41} \\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[400,320],"C":[100,220]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[{"at":"C","arms":["B","A"],"label":"x","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"41","on":["B","C"]},{"text":"40","on":["A","B"]}],"notToScale":true,"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Locate the sides relative to the angle at the top-left vertex: the horizontal leg (\\(40\\)) is across from it, so it is the opposite side; \\(41\\) is the hypotenuse`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `SOH: \\(\\sin x^\\circ = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{40}{41}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `No extra computation is needed here; the third side (\\(9\\)) would only matter for \\(\\cos\\) or \\(\\tan\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri85875",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 6,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, the hypotenuse has a length of \\(61\\), the horizontal leg has a length of \\(11\\), and angle \\(y^\\circ\\) is located at the bottom-right vertex.</p>
        <p>What is the value of \\(\\sin y^\\circ\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{11}{61} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( \\frac{60}{61} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( \\frac{61}{60} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{60}{11} \\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[200,320],"C":[100,60]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[{"at":"B","arms":["A","C"],"label":"y","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"61","on":["B","C"]},{"text":"11","on":["A","B"]}],"notToScale":true,"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Decide which leg is opposite the angle at the bottom-right vertex; notice its length isn't given`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Use the Pythagorean theorem with the hypotenuse and the known leg to find the missing leg`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Write \\(\\sin y^\\circ\\) as opposite over hypotenuse and match to an answer choice`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri77287",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 6,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, the hypotenuse has a length of \\(65\\), the vertical leg has a length of \\(33\\), and angle \\(z^\\circ\\) is located at the top-left vertex.</p>
        <p>What is the value of \\(\\sin z^\\circ\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{33}{65} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( \\frac{56}{33} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( \\frac{56}{65} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{65}{56} \\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[340,320],"C":[100,160]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[{"at":"C","arms":["B","A"],"label":"z","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"33","on":["C","A"]},{"text":"65","on":["B","C"]}],"notToScale":true,"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri61285",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 7,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(ABC\\), \\(\\angle C\\) is a right angle, and the length of \\(\\overline{AB}\\) is \\(25\\). If \\(BC = \\sqrt{49}\\), what is the value of \\(\\sin B\\)?</p>`,
        answer: "24/25",
        figure: {"size":[600,400],"points":{"A":[240,320],"B":[500,320],"C":[500,200]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"B","arms":["A","C"]}],"labels":[{"text":"25","on":["C","A"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Simplify first: \\(BC = \\sqrt{49} = 7\\). The right angle is at \\(C\\), so \\(\\overline{AB} = 25\\) is the hypotenuse`,
            note: "",
            gif: "",
            answer: "24/25",
            video: ""
        },
        {
            text: `\\(\\sin B\\) needs the side opposite \\(B\\), which is \\(\\overline{AC}\\). Use the Pythagorean theorem: \\(AC = \\sqrt{25^2 - 7^2} = \\sqrt{576} = 24\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `SOH: \\(\\sin B = \\frac{AC}{AB} = \\frac{24}{25}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri20092",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 7,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(PQR\\), \\(\\angle Q\\) is a right angle, and the length of \\(\\overline{PR}\\) is \\(17\\). If \\(PQ = \\sqrt{64}\\), what is the value of \\(\\sin P\\)?</p>`,
        answer: "15/17",
        figure: {"size":[600,400],"points":{"P":[260,320],"Q":[340,320],"R":[340,160]},"segments":[{"from":"P","to":"Q"},{"from":"Q","to":"R"},{"from":"R","to":"P"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"Q","arms":["P","R"]}],"labels":[{"text":"17","on":["R","P"]}],"notToScale":true,"showPointLabels":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Simplify the radical and identify the hypotenuse (the side opposite the right angle)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Find the side opposite angle \\(P\\) using the Pythagorean theorem`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Write \\(\\sin P\\) as opposite over hypotenuse`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri35132",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 7,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In right triangle \\(DEF\\), \\(\\angle E\\) is a right angle, and the length of \\(\\overline{DF}\\) is \\(13\\). If \\(DE = \\sqrt{144}\\), what is the value of \\(\\sin F\\)?</p>`,
        answer: "12/13",
        figure: {"size":[600,400],"points":{"D":[160,320],"E":[340,320],"F":[340,260]},"segments":[{"from":"D","to":"E"},{"from":"E","to":"F"},{"from":"F","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"E","arms":["D","F"]}],"labels":[{"text":"13","on":["F","D"]}],"notToScale":true,"showPointLabels":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri72820",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 8,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(ABC\\), \\(\\cos(A) = \\frac{5}{13}\\), and angle \\(C\\) is a right angle. What is the value of \\(\\cos(B)\\)?</p>`,
        answer: "12/13",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Since \\(C\\) is the right angle, \\(A\\) and \\(B\\) are complementary, so \\(\\cos(B) = \\sin(A)\\)`,
            note: "",
            gif: "",
            answer: "12/13",
            video: ""
        },
        {
            text: `\\(\\cos(A) = \\frac{5}{13}\\) means adjacent \\(= 5\\) and hypotenuse \\(= 13\\); the opposite side is \\(\\sqrt{13^2 - 5^2} = 12\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `So \\(\\sin(A) = \\frac{12}{13}\\), and therefore \\(\\cos(B) = \\frac{12}{13}\\). Confirm in Desmos by typing \\(\\cos(90^\\circ - \\arccos(5/13))\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri33810",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 8,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(PQR\\), \\(\\cos(P) = \\frac{8}{17}\\), and angle \\(Q\\) is a right angle. What is the value of \\(\\cos(R)\\)?</p>`,
        answer: "15/17",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Identify the two acute angles; since they are complementary, the cosine of one equals the sine of the other`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Use \\(\\cos(P) = \\frac{8}{17}\\) to label the adjacent side and hypotenuse, then find the third side with the Pythagorean theorem`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Write \\(\\sin(P)\\), which is the same as \\(\\cos(R)\\)`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri98089",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 8,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(DEF\\), \\(\\cos(D) = \\frac{7}{25}\\), and angle \\(E\\) is a right angle. What is the value of \\(\\cos(F)\\)?</p>`,
        answer: "24/25",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri24217",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 9,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In the figure shown, triangle \\(PQR\\) is a right triangle with a right angle at \\(R\\). Point \\(S\\) lies on \\(\\overline{PQ}\\), point \\(T\\) lies on \\(\\overline{QR}\\), and \\(\\overline{ST}\\) is parallel to \\(\\overline{PR}\\).</p>
        <p>If \\(\\cos P = 0.72\\), what is the value of \\(\\sin Q\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(0.28\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(0.72\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(0.48\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(0.96\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"P":[20,340],"R":[240,340],"Q":[240,80],"S":[120,220],"T":[240,220]},"segments":[{"from":"P","to":"R"},{"from":"R","to":"Q"},{"from":"Q","to":"P"},{"from":"S","to":"T"},{"from":"T","to":"Q"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"R","arms":["P","Q"]},{"at":"T","arms":["S","Q"]}],"labels":[],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Since \\(R\\) is the right angle, angles \\(P\\) and \\(Q\\) add to \\(90^\\circ\\): they are complementary`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `For complementary angles, the cosine of one equals the sine of the other: \\(\\sin Q = \\cos P\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `So \\(\\sin Q = 0.72\\). The parallel segment \\(\\overline{ST}\\) creates a similar triangle but doesn't change any angle, so it can be ignored`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri90638",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 9,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In the figure shown, triangle \\(DEF\\) is a right triangle with a right angle at \\(F\\). Point \\(G\\) lies on \\(\\overline{DE}\\), point \\(H\\) lies on \\(\\overline{EF}\\), and \\(\\overline{GH}\\) is parallel to \\(\\overline{DF}\\).</p>
        <p>If \\(\\sin D = 0.63\\), what is the value of \\(\\cos E\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(0.37\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(0.77\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(0.63\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(0.81\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"D":[80,340],"F":[200,340],"E":[200,180],"G":[140,260],"H":[200,260]},"segments":[{"from":"D","to":"F"},{"from":"F","to":"E"},{"from":"E","to":"D"},{"from":"G","to":"H"},{"from":"H","to":"E"},{"from":"G","to":"E"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"F","arms":["D","E"]},{"at":"H","arms":["G","E"]}],"labels":[],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Identify the two acute angles of the right triangle and note that they are complementary`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Recall that for complementary angles, \\(\\sin\\) of one equals \\(\\cos\\) of the other`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Apply that relationship to \\(\\sin D\\) and \\(\\cos E\\), ignoring the parallel segment`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri10624",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 9,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In the figure shown, triangle \\(JKL\\) is a right triangle with a right angle at \\(K\\). Point \\(M\\) lies on \\(\\overline{JL}\\), point \\(N\\) lies on \\(\\overline{KL}\\), and \\(\\overline{MN}\\) is parallel to \\(\\overline{JK}\\).</p>
        <p>If \\(\\cos L = 0.84\\), what is the value of \\(\\sin J\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(0.16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(0.54\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(0.70\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(0.84\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: {"size":[600,400],"points":{"J":[80,340],"K":[260,340],"L":[260,160],"M":[160,260],"N":[260,260]},"segments":[{"from":"J","to":"K"},{"from":"K","to":"L"},{"from":"L","to":"J"},{"from":"M","to":"N"},{"from":"N","to":"L"},{"from":"M","to":"L"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"K","arms":["J","L"]},{"at":"N","arms":["M","L"]}],"labels":[],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri22902",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 10,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>For two acute angles, \\(\\angle A\\) and \\(\\angle B\\), \\(\\sin(A) = \\cos(B)\\). The measures, in degrees, of \\(\\angle A\\) and \\(\\angle B\\) are \\(3x + 12\\) and \\(2x + 18\\), respectively. What is the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(10\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(12\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(15\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(18\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `For acute angles, \\(\\sin(A) = \\cos(B)\\) exactly when the angles are complementary: \\(A + B = 90^\\circ\\)`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `Substitute the expressions: \\((3x + 12) + (2x + 18) = 90\\), so \\(5x + 30 = 90\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Solve: \\(5x = 60\\), \\(x = 12\\). Check in Desmos: \\(\\sin(48^\\circ)\\) and \\(\\cos(42^\\circ)\\) both give \\(0.743\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri86931",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 10,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>For two acute angles, \\(\\angle P\\) and \\(\\angle Q\\), \\(\\cos(P) = \\sin(Q)\\). The measures, in degrees, of \\(\\angle P\\) and \\(\\angle Q\\) are \\(5x + 8\\) and \\(3x + 18\\), respectively. What is the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(6\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(7\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(8\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(10\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Translate \\(\\cos(P) = \\sin(Q)\\) into a statement about the angle measures`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Set the sum of the two expressions equal to \\(90\\) and combine like terms`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Solve for \\(x\\) and match to an answer choice`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri36075",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 10,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>For two acute angles, \\(\\angle M\\) and \\(\\angle N\\), \\(\\sin(M) = \\cos(N)\\). The measures, in degrees, of \\(\\angle M\\) and \\(\\angle N\\) are \\(4x + 7\\) and \\(2x + 11\\), respectively. What is the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(9\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(10\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(11\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(12\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri30695",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 11,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>Triangle \\(ABC\\) is a right triangle with a right angle at \\(C\\). Which of the following has the same value as \\(\\sin A\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(\\tan B\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\cos A\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(\\cos B\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\sin B\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[360,320],"C":[100,160]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"15","on":["C","A"]},{"text":"20","on":["A","B"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `\\(\\sin A = \\frac{\\text{opposite } A}{\\text{hypotenuse}} = \\frac{BC}{AB}\\)`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `The side opposite \\(A\\) is the side adjacent to \\(B\\), so \\(\\cos B = \\frac{BC}{AB}\\) as well`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Since \\(A\\) and \\(B\\) are complementary, \\(\\sin A = \\cos B\\). Check in Desmos with any right triangle, e.g. a \\(3\\)-\\(4\\)-\\(5\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri15248",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 11,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>Triangle \\(PQR\\) is a right triangle with a right angle at \\(Q\\). Which of the following has the same value as \\(\\cos R\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(\\sin P\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\cos P\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\tan R\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\tan P\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: {"size":[600,400],"points":{"P":[100,320],"Q":[360,320],"R":[360,220]},"segments":[{"from":"P","to":"Q"},{"from":"Q","to":"R"},{"from":"R","to":"P"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"Q","arms":["P","R"]}],"labels":[{"text":"10","on":["Q","R"]},{"text":"24","on":["P","Q"]}],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Write \\(\\cos R\\) as a ratio of two specific sides of the triangle`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Find which trig ratio of the other acute angle uses those same two sides`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Match that ratio to an answer choice`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri56653",
        topic: "triangle",
        subtopic: "sohcahtoa",
        problem: 11,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>Triangle \\(DEF\\) is a right triangle with a right angle at \\(E\\). Which of the following has the same value as \\(\\tan D\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(\\tan F\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( \\frac{1}{\\tan F} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\sin F\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\cos D\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"D":[100,320],"E":[360,320],"F":[360,220]},"segments":[{"from":"D","to":"E"},{"from":"E","to":"F"},{"from":"F","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"E","arms":["D","F"]}],"labels":[{"text":"5","on":["E","F"]},{"text":"12","on":["D","E"]}],"notToScale":true,"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri17092",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 1,
        questionType: "WE",
        difficulty: 1,
        tags: [],
        text: `<p>The lengths of the legs of a right triangle are shown. Which of the following is closest to the length of the triangle's hypotenuse?</p>
        <p>The legs measure \\(7\\) and \\(11\\) units.</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(4.0\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(12.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(13.0\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(18.0\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"D":[100,320],"E":[360,320],"F":[360,180]},"segments":[{"from":"D","to":"E"},{"from":"E","to":"F"},{"from":"F","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"E","arms":["D","F"]}],"labels":[{"text":"7","on":["E","F"]},{"text":"11","on":["D","E"]}],"notToScale":true,"hiddenLabels":[],"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Pythagorean theorem: \\(a^2 + b^2 = c^2\\), where \\(c\\) is the hypotenuse. Substitute the legs: \\(7^2 + 11^2 = c^2\\)`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `Compute: \\(49 + 121 = 170\\), so \\(c = \\sqrt{170}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Type \\(\\sqrt{170}\\) into Desmos to get \\(13.04\\), closest to \\(13.0\\). Watch out for choice A — subtracting instead of adding gives \\(\\sqrt{72} \\approx 8.5\\), and \\(11 - 7 = 4\\) is the leg difference, not the hypotenuse`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri67762",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 1,
        questionType: "GP",
        difficulty: 1,
        tags: [],
        text: `<p>The lengths of the legs of a right triangle are shown. Which of the following is closest to the length of the triangle's hypotenuse?</p>
        <p>The legs measure \\(9\\) and \\(14\\) units.</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(5.0\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(15.0\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(23.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(16.6\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: {"size":[600,400],"points":{"D":[100,320],"E":[360,320],"F":[360,200]},"segments":[{"from":"D","to":"E"},{"from":"E","to":"F"},{"from":"F","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"E","arms":["D","F"]}],"labels":[{"text":"9","on":["E","F"]},{"text":"14","on":["D","E"]}],"notToScale":true,"hiddenLabels":[],"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Write the Pythagorean theorem with the two legs substituted in`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Square each leg and add`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Take the square root in Desmos and pick the closest answer choice`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri98765",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 1,
        questionType: "PR",
        difficulty: 1,
        tags: [],
        text: `<p>The length of one leg and the hypotenuse of a right triangle are shown. Which of the following is closest to the length of the other leg?</p>
        <p>The hypotenuse measures \\(19\\) units, and one leg measures \\(12\\) units.</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(13.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(14.8\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(16.0\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(22.5\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"D":[200,320],"E":[360,320],"F":[360,160]},"segments":[{"from":"D","to":"E"},{"from":"E","to":"F"},{"from":"F","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"E","arms":["D","F"]}],"labels":[{"text":"12","on":["D","E"]},{"text":"19","on":["F","D"]}],"notToScale":true,"hiddenLabels":[],"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri12130",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 2,
        questionType: "WE",
        difficulty: 1,
        tags: [],
        text: `<p>Which of the following sets of \\(3\\) numbers could be the side lengths, in centimeters, of a right triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(3, 5, 7\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(4, 6, 9\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(5, 12, 13\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(6, 8, 11\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(7, 9, 15\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `A set of side lengths forms a right triangle only if the two smaller numbers satisfy \\(a^2 + b^2 = c^2\\) with the largest number as \\(c\\)`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `Test each choice in Desmos: \\(3^2 + 5^2 = 34 \\neq 49\\); \\(4^2 + 6^2 = 52 \\neq 81\\); \\(5^2 + 12^2 = 169 = 13^2\\) ✓`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Choice C works. Recognizing \\(5\\)-\\(12\\)-\\(13\\) as a common Pythagorean triple saves the arithmetic`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri99156",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 2,
        questionType: "GP",
        difficulty: 1,
        tags: [],
        text: `<p>Which of the following sets of \\(3\\) numbers could be the side lengths, in meters, of a right triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(8, 15, 17\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(5, 7, 12\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(6, 10, 14\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(9, 12, 16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(10, 13, 18\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `For each choice, identify the largest number as the hypotenuse`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Check whether the squares of the two smaller numbers add to the square of the largest`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Select the one set that satisfies the Pythagorean theorem",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri97524",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 2,
        questionType: "PR",
        difficulty: 1,
        tags: [],
        text: `<p>Which of the following sets of \\(3\\) numbers could be the side lengths, in inches, of a right triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(4, 7, 9\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(6, 9, 12\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(8, 10, 14\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(9, 14, 19\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">E</span>
            <span>\\(7, 24, 25\\)</span>
        </div>
        </div>`,
        answer: "E",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri79981",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 3,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>Which of the following sets of three lengths, in centimeters, could be the side lengths of an obtuse triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\((5, 12, 13)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\((6, 8, 10)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\((7, 9, 11)\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\((8, 10, 15)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\((9, 12, 15)\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Compare \\(a^2 + b^2\\) (the two shorter sides) with \\(c^2\\) (the longest side): equal means right, greater means acute, and <strong>less</strong> means obtuse`,
            note: "",
            gif: "",
            answer: "D",
            video: ""
        },
        {
            text: `Test each choice in Desmos. A, B, and E are Pythagorean triples (right). C: \\(49 + 81 = 130 > 121\\) (acute). D: \\(64 + 100 = 164 < 225\\) (obtuse)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Choice D is obtuse. Also confirm it is a valid triangle: \\(8 + 10 = 18 > 15\\) ✓`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri87630",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 3,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>Which of the following sets of three lengths, in meters, could be the side lengths of an obtuse triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\((4, 5, 6)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\((5, 12, 13)\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\((6, 7, 12)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\((8, 15, 17)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\((9, 10, 12)\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `For each choice, square the two shorter sides and add them, then square the longest side`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `A triangle is obtuse exactly when \\(a^2 + b^2 < c^2\\); right when equal, acute when greater`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Pick the one set where the sum is smaller than the largest square",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri64734",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 3,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>Which of the following sets of three lengths, in inches, could be the side lengths of an obtuse isosceles triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\((5, 5, 7)\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\((6, 6, 10)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\((8, 8, 10)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\((9, 9, 12)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\((10, 10, 14)\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri75288",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 4,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>The side lengths of a certain triangle are \\(7\\), \\(7\\), and \\(12\\) centimeters. Which of the following descriptions best classifies this triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>Scalene acute</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>Isosceles acute</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>Isosceles right</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>Isosceles obtuse</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Scalene obtuse</span>
        </div>
        </div>`,
        answer: "D",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Classify by sides first: two sides are equal (\\(7\\) and \\(7\\)), so the triangle is isosceles. That rules out A and E`,
            note: "",
            gif: "",
            answer: "D",
            video: ""
        },
        {
            text: `Classify by angles with the Pythagorean comparison: \\(7^2 + 7^2 = 98\\) versus \\(12^2 = 144\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Since \\(98 < 144\\), the angle opposite the \\(12\\) is greater than \\(90^\\circ\\): the triangle is obtuse. Answer: isosceles obtuse`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri94559",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 4,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>The side lengths of a certain triangle are \\(9\\), \\(12\\), and \\(x\\) inches, where \\(x\\) is the longest side. If the triangle is a right triangle, which of the following describes the triangle and gives the value of \\(x\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>Scalene right; \\(x = 15\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>Isosceles right; \\(x = 15\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>Scalene acute; \\(x = 14\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>Scalene obtuse; \\(x = 16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Isosceles obtuse; \\(x = 18\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Since \\(x\\) is the longest side of a right triangle, it is the hypotenuse; use \\(9^2 + 12^2 = x^2\\) to find it`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Now classify by sides: are any two of \\(9\\), \\(12\\), and \\(x\\) equal?`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Combine the side classification with \"right\" and match to an answer choice",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri61719",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 4,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>The side lengths of a certain triangle are \\(x + 2\\), \\(x + 2\\), and \\(2x\\) centimeters, where \\(x = 5\\). Which of the following descriptions best classifies this triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>Scalene acute</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>Isosceles right</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>Isosceles obtuse</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>Isosceles acute</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Scalene obtuse</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri96907",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 5,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>The sides of a triangle are \\(8\\), \\(15\\), and \\(17\\) centimeters long. What is the measure of the angle between the \\(2\\) shortest sides?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(30^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(45^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(60^\\circ\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(90^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(120^\\circ\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Test whether the sides satisfy the Pythagorean theorem: \\(8^2 + 15^2 = 64 + 225 = 289\\) and \\(17^2 = 289\\)`,
            note: "",
            gif: "",
            answer: "D",
            video: ""
        },
        {
            text: `They match, so the triangle is a right triangle with hypotenuse \\(17\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `The right angle is always between the two legs (the two shortest sides), opposite the hypotenuse, so the angle is \\(90^\\circ\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri35695",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 5,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>The sides of a triangle are \\(7\\), \\(24\\), and \\(25\\) inches long. What is the measure of the angle opposite the longest side?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(30^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(45^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(60^\\circ\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(90^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(120^\\circ\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Check whether \\(7^2 + 24^2\\) equals \\(25^2\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "If it does, the triangle is right and the longest side is the hypotenuse",
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "The angle opposite the hypotenuse is the right angle",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri66778",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 5,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>The sides of a triangle are \\(x + 3\\), \\(2x + 2\\), and \\(3x + 1\\) meters long, where \\(x = 3\\). What is the measure of the angle between the \\(2\\) shortest sides?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(30^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(45^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(60^\\circ\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(90^\\circ\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(120^\\circ\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri60938",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 6,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(ABC\\), the length of \\(\\overline{AB}\\) is \\(\\sqrt{45}\\) centimeters, and the length of \\(\\overline{BC}\\) is \\(4\\) centimeters. If it can be determined, what is the length, in centimeters, of \\(\\overline{AC}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(4\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\sqrt{29}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\sqrt{45}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\sqrt{61}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">E</span>
            <span>Cannot be determined from the given information</span>
        </div>
        </div>`,
        answer: "E",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `The Pythagorean theorem only applies to right triangles, and nothing in the problem says triangle \\(ABC\\) has a right angle`,
            note: "",
            gif: "",
            answer: "E",
            video: ""
        },
        {
            text: `Choices B and D are traps: \\(\\sqrt{45 - 16} = \\sqrt{29}\\) and \\(\\sqrt{45 + 16} = \\sqrt{61}\\) are what you'd get by assuming a right angle at \\(C\\) or at \\(B\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `With two sides and no angle, the third side can be anything between \\(\\sqrt{45} - 4\\) and \\(\\sqrt{45} + 4\\), so it cannot be determined`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri43440",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 6,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(PQR\\), \\(\\angle Q\\) is a right angle. The length of \\(\\overline{PQ}\\) is \\(\\sqrt{40}\\) inches, and the length of \\(\\overline{QR}\\) is \\(3\\) inches. What is the length, in inches, of \\(\\overline{PR}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(\\sqrt{31}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(7\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\sqrt{47}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\sqrt{43}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Cannot be determined from the given information</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `The right angle is at \\(Q\\), so \\(\\overline{PR}\\) is the hypotenuse and the two given sides are the legs`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Square the legs and add: remember \\((\\sqrt{40})^2 = 40\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Take the square root and simplify if it comes out to a whole number",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri11781",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 6,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(DEF\\), \\(\\angle E\\) is a right angle. The length of \\(\\overline{DF}\\) is \\(\\sqrt{85}\\) meters, and the length of \\(\\overline{DE}\\) is \\(6\\) meters. What is the length, in meters, of \\(\\overline{EF}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(7\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\sqrt{53}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\sqrt{121}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\sqrt{79}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Cannot be determined from the given information</span>
        </div>
        </div>`,
        answer: "A",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri74589",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 7,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(ABC\\), the length of \\(\\overline{AB}\\) is \\(\\sqrt{52}\\) centimeters, and the length of \\(\\overline{BC}\\) is \\(5\\) centimeters. If it can be determined, what is the length, in centimeters, of \\(\\overline{AC}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\sqrt{52}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\sqrt{27}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\sqrt{77}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">E</span>
            <span>Cannot be determined from the given information</span>
        </div>
        </div>`,
        answer: "E",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `The Pythagorean theorem only applies to right triangles, and nothing in the problem says triangle \\(ABC\\) has a right angle`,
            note: "",
            gif: "",
            answer: "E",
            video: ""
        },
        {
            text: `Choices C and D are traps: \\(\\sqrt{52 - 25} = \\sqrt{27}\\) and \\(\\sqrt{52 + 25} = \\sqrt{77}\\) are what you'd get by assuming a right angle at \\(C\\) or at \\(B\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `With two sides and no angle, the third side can be anything between \\(\\sqrt{52} - 5\\) and \\(\\sqrt{52} + 5\\), so it cannot be determined`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri28866",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 7,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(PQR\\), \\(\\angle Q\\) is a right angle. The length of \\(\\overline{PQ}\\) is \\(\\sqrt{72}\\) inches, and the length of \\(\\overline{QR}\\) is \\(4\\) inches. What is the length, in inches, of \\(\\overline{PR}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(\\sqrt{56}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\sqrt{76}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(\\sqrt{88}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(12\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Cannot be determined from the given information</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `The right angle is at \\(Q\\), so \\(\\overline{PR}\\) is the hypotenuse and the two given sides are the legs`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Square the legs and add: remember \\((\\sqrt{72})^2 = 72\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Take the square root; it may not simplify to a whole number",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri65982",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 7,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In triangle \\(JKL\\), \\(\\angle K\\) is a right angle. The length of \\(\\overline{JL}\\) is \\(\\sqrt{130}\\) meters, and the length of \\(\\overline{JK}\\) is \\(7\\) meters. What is the length, in meters, of \\(\\overline{KL}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\(\\sqrt{81}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(\\sqrt{179}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(\\sqrt{123}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(\\sqrt{91}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>Cannot be determined from the given information</span>
        </div>
        </div>`,
        answer: "A",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri42135",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 8,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>An airplane is flying due east at a constant altitude of \\(8{,}000\\) feet and a speed of \\(250\\) feet per second. At a certain moment, the airplane is directly above point \\(D\\), which is \\(6{,}000\\) feet east of radar station \\(A\\). The straight-line distance between the airplane and station \\(A\\) is \\(10{,}000\\) feet.</p>
        <p>Which of the following is closest to the number of seconds it will take the airplane to reach the point directly above a radar station located \\(4{,}000\\) feet east of point \\(D\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(12\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(32\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(40\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[300,320],"C":[220,140],"D":[220,320],"E":[220,100],"F":[260,80],"G":[320,80]},"segments":[{"from":"A","to":"B"},{"from":"C","to":"A"},{"from":"A","to":"D"},{"from":"C","to":"D","style":"dotted"},{"from":"B","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"D","arms":["A","C"]},{"at":"D","arms":["A","C"]}],"labels":[{"text":"8,000 ft","on":["C","D"],"side":"right"},{"text":"6,000 ft","on":["A","D"]},{"text":"4,000 ft","on":["B","D"]}],"notToScale":true,"icons":[{"at":"E","kind":"plane","place":"above","flip":false,"size":44}],"arrows":[{"from":"F","to":"G","label":"250 ft/s"}]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch it: the plane is directly above \\(D\\), and the new station is \\(4{,}000\\) feet east of \\(D\\). Since the plane flies due east at constant altitude, the horizontal distance it must cover is exactly \\(4{,}000\\) feet`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `The altitude, the \\(6{,}000\\) feet to station \\(A\\), and the \\(10{,}000\\)-foot straight-line distance are all behind the plane; they form a \\(6\\)-\\(8\\)-\\(10\\) right triangle but aren't needed`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Time \\(= \\frac{\\text{distance}}{\\text{speed}} = \\frac{4{,}000}{250} = 16\\) seconds`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri40615",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 8,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>A helicopter is flying due west at a constant altitude of \\(5{,}000\\) feet and a speed of \\(200\\) feet per second. At a certain moment, the helicopter is directly above point \\(D\\). A radar station at point \\(A\\) is located west of \\(D\\), and the straight-line distance from the helicopter to the radar station is \\(13{,}000\\) feet.</p>
        <p>Which of the following is closest to the number of seconds it will take the helicopter to reach the point directly above radar station \\(A\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(25\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(40\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(50\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(60\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(65\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: {"size":[600,400],"points":{"A":[100,320],"C":[340,220],"D":[340,320],"B":[340,180],"E":[300,160],"F":[240,160]},"segments":[{"from":"C","to":"A"},{"from":"A","to":"D"},{"from":"C","to":"D","style":"dotted"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"D","arms":["A","C"]},{"at":"D","arms":["A","C"]}],"labels":[{"text":"5,000 ft","on":["C","D"],"side":"right"},{"text":"13,000 ft","on":["C","A"],"side":"above"}],"notToScale":true,"icons":[{"at":"B","kind":"helicopter","place":"above","flip":true,"size":44}],"arrows":[{"from":"E","to":"F","label":"200 ft/s"}],"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch a right triangle: the altitude is the vertical leg, the horizontal distance \\(AD\\) is the other leg, and the \\(13{,}000\\)-foot straight-line distance is the hypotenuse`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Use the Pythagorean theorem to find the horizontal leg \\(AD\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Divide that horizontal distance by the speed to get the time`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri55965",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 8,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>An airplane is flying due east at a constant altitude of \\(12{,}000\\) feet and a speed of \\(300\\) feet per second. At a certain moment, the airplane is directly above point \\(D\\), which lies between two radar stations, \\(A\\) and \\(B\\), on a level east-west line, with station \\(B\\) east of \\(D\\).</p>
        <p>The straight-line distance from the airplane to station \\(A\\) is \\(15{,}000\\) feet, and the straight-line distance to station \\(B\\) is \\(20{,}000\\) feet.</p>
        <p>Which of the following is closest to the number of seconds it will take the airplane to fly from its current position to the point directly above station \\(B\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(30\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(40\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(48\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(53\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(67\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: {"size":[600,400],"points":{"A":[100,320],"C":[220,180],"D":[220,320],"B":[400,320],"E":[220,120],"F":[260,100],"G":[300,100]},"segments":[{"from":"C","to":"A"},{"from":"A","to":"D"},{"from":"C","to":"D","style":"dotted"},{"from":"D","to":"B"},{"from":"C","to":"B"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"D","arms":["A","C"]},{"at":"D","arms":["A","C"]}],"labels":[{"text":"12,000 ft","on":["C","D"],"side":"right"},{"text":"15,000 ft","on":["C","A"],"side":"above"},{"text":"20,000 ft","on":["C","B"]}],"notToScale":true,"icons":[{"at":"E","kind":"plane","place":"above","flip":false,"size":32}],"arrows":[{"from":"F","to":"G","label":"300 ft/s"}],"hiddenLabels":[]},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri69886",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 9,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>Two cyclists leave the same intersection at the same time, traveling in directions that form a \\(90^\\circ\\) angle. One cyclist travels at a constant speed of \\(18\\) miles per hour, while the other travels at a constant speed of \\(24\\) miles per hour.</p>
        <p>After approximately how many hours will the cyclists be \\(105\\) miles apart?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(2.5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(3.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(3.5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(4.2\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(5.8\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `After \\(t\\) hours the cyclists have gone \\(18t\\) and \\(24t\\) miles along perpendicular paths, so those are the legs of a right triangle and the distance between them is the hypotenuse`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `Pythagorean theorem: \\(\\sqrt{(18t)^2 + (24t)^2} = \\sqrt{900t^2} = 30t\\). (Notice \\(18\\)-\\(24\\)-\\(30\\) is a \\(3\\)-\\(4\\)-\\(5\\) triangle scaled by \\(6\\).)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Set \\(30t = 105\\), so \\(t = 3.5\\) hours. Confirm in Desmos by graphing \\(y = 30x\\) and \\(y = 105\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri86150",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 9,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>Two boats depart from the same harbor at the same time. One travels due north at a constant speed of \\(15\\) miles per hour, while the other travels due east at a constant speed of \\(20\\) miles per hour.</p>
        <p>After \\(4\\) hours, approximately how many miles apart will the boats be?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(80\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(90\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(100\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(120\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(140\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Find how far each boat has traveled after \\(4\\) hours (distance \\(=\\) speed \\(\\times\\) time)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "North and east are perpendicular, so those two distances are the legs of a right triangle",
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Use the Pythagorean theorem to find the hypotenuse, which is the distance between the boats",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri91680",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 9,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>Two airplanes depart from the same airport at the same time, traveling along flight paths that form a \\(90^\\circ\\) angle. The first airplane travels at a constant speed of \\(300\\) miles per hour, while the second travels at a constant speed of \\(400\\) miles per hour.</p>
        <p>If the airplanes are \\(1{,}250\\) miles apart, how many miles has the slower airplane traveled?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(500\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(600\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(750\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(900\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(1{,}000\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri39360",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 10,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>A delivery driver leaves a warehouse and travels \\(60\\) miles due north to the first stop. The driver then travels \\(80\\) miles due east to the second stop. From the second stop, the driver returns directly to the warehouse without stopping.</p>
        <p>If the driver travels at a constant speed of \\(50\\) miles per hour on the return trip, how many hours does the return trip take?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{6}{5} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( \\frac{8}{5} \\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(2\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{12}{5} \\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\( \\frac{14}{5} \\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[100,320],"B":[360,140],"C":[100,140]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"C","arms":["B","A"]}],"labels":[{"text":"80 miles","on":["B","C"]},{"text":"60 miles","on":["C","A"]},{"text":"Return Trip","on":["A","B"]}],"notToScale":true,"hiddenLabels":[],"pointText":{"B":{"text":"2nd Stop"},"C":{"text":"1st Stop"},"A":{"text":"Warehouse"}}},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Sketch the route: \\(60\\) north then \\(80\\) east form the two legs of a right triangle, and the direct return path is the hypotenuse`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `Pythagorean theorem: \\(\\sqrt{60^2 + 80^2} = \\sqrt{10000} = 100\\) miles (a \\(3\\)-\\(4\\)-\\(5\\) triangle scaled by \\(20\\))`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Time \\(= \\frac{100}{50} = 2\\) hours`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri57279",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 10,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>A delivery truck leaves its distribution center and travels \\(45\\) miles due north to the first stop. The truck then travels \\(60\\) miles due east to the second stop, followed by \\(90\\) miles due south to the final stop.</p>
        <p>The driver returns directly from the final stop to the distribution center at a constant speed of \\(30\\) miles per hour.</p>
        <p>Which of the following is closest to the number of hours required for the return trip?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(1.5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(2.0\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(2.5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(3.0\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(3.5\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[100,280],"B":[260,360],"C":[100,80],"D":[260,80]},"segments":[{"from":"A","to":"B"},{"from":"C","to":"A"},{"from":"C","to":"D"},{"from":"B","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"C","arms":["A","D"]},{"at":"D","arms":["C","B"]}],"labels":[{"text":"45 miles","on":["C","A"]},{"text":"Return Trip","on":["A","B"]},{"text":"60 miles","on":["C","D"]},{"text":"90 miles","on":["B","D"]}],"notToScale":true,"hiddenLabels":[],"pointText":{"B":{"text":"2nd Stop"},"C":{"text":"1st Stop"},"A":{"text":"Distribution Center","side":"left"},"D":{"text":"2nd Stop"}}},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Find the truck's net displacement: combine the north and south legs into one vertical distance, and keep the east leg as the horizontal distance`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Those two net distances are the legs of a right triangle; use the Pythagorean theorem to find the direct return distance",
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Divide the return distance by the speed to get the time",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri30457",
        topic: "triangle",
        subtopic: "pythagorean-theorem",
        problem: 10,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>A delivery driver leaves a warehouse and travels \\(72\\) miles due west to the first stop. The driver then travels \\(96\\) miles due north to the second stop, followed by \\(144\\) miles due east to the final stop.</p>
        <p>The driver must return directly from the final stop to the warehouse in exactly \\(2\\) hours.</p>
        <p>What constant speed, in miles per hour, must the driver maintain on the return trip?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(48\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(54\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(60\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(72\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(84\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[180,240],"B":[340,240],"C":[180,80],"D":[440,80]},"segments":[{"from":"A","to":"B"},{"from":"C","to":"A"},{"from":"C","to":"D"},{"from":"B","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"C","arms":["A","D"]},{"at":"A","arms":["B","C"]}],"labels":[{"text":"96 miles","on":["C","A"]},{"text":"72 miles","on":["A","B"]},{"text":"144 miles","on":["C","D"]},{"text":"Return Trip","on":["B","D"],"italic":true}],"notToScale":true,"hiddenLabels":[],"pointText":{"B":{"text":"Warehouse"},"C":{"text":"2nd Stop"},"A":{"text":"1st Stop","side":"below"},"D":{"text":"Final Stop"}}},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri99860",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 11,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, one acute angle measures \\(30^\\circ\\), and the side adjacent to this angle has a length of \\(48\\sqrt{3}\\). What is the value of \\(x\\), the length of the side opposite the \\(30^\\circ\\) angle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(48\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(48\\sqrt{3}\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[180,240],"B":[340,240],"C":[180,120]},"segments":[{"from":"A","to":"B"},{"from":"C","to":"A"},{"from":"C","to":"B"}],"circles":[],"angles":[{"at":"B","arms":["A","C"],"label":"30","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"x","on":["C","A"]},{"text":"48√3","on":["A","B"]}],"notToScale":true,"hiddenLabels":["C"],"pointText":{"B":{"text":"Warehouse"},"A":{"text":"1st Stop","side":"below"}},"arrows":[],"icons":[],"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `A \\(30\\)-\\(60\\)-\\(90\\) triangle has sides in the ratio \\(x : x\\sqrt{3} : 2x\\), where \\(x\\) is opposite the \\(30^\\circ\\) angle and \\(x\\sqrt{3}\\) is the leg adjacent to it`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `The adjacent leg is \\(48\\sqrt{3}\\), so \\(x\\sqrt{3} = 48\\sqrt{3}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Divide both sides by \\(\\sqrt{3}\\): \\(x = 48\\). Confirm in Desmos by typing \\(48\\sqrt{3} \\cdot \\tan(30^\\circ)\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri93423",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 11,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, one acute angle measures \\(60^\\circ\\), and the side opposite this angle has a length of \\(35\\sqrt{3}\\). What is the value of \\(x\\), the length of the hypotenuse?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(35\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(35\\sqrt{3}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(70\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(105\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[240,240],"B":[340,240],"C":[340,100]},"segments":[{"from":"A","to":"B"},{"from":"C","to":"A"},{"from":"C","to":"B"}],"circles":[],"angles":[{"at":"A","arms":["B","C"],"label":"60","arcs":1}],"ticks":[],"rightAngles":[{"at":"B","arms":["A","C"]}],"labels":[{"text":"x","on":["C","A"]},{"text":"35√3","on":["C","B"]}],"notToScale":true,"hiddenLabels":["C"],"pointText":{"B":{"text":"Warehouse"},"A":{"text":"1st Stop","side":"below"}},"arrows":[],"icons":[],"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Identify which side of the \\(30\\)-\\(60\\)-\\(90\\) ratio is given: the side opposite \\(60^\\circ\\) is the long leg, \\(x\\sqrt{3}\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Solve for the short leg \\(x\\) by dividing out the \\(\\sqrt{3}\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "The hypotenuse is twice the short leg",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri71994",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 11,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In the right triangle shown, one acute angle measures \\(30^\\circ\\), and the hypotenuse has a length of \\(52\\). What is the value of \\(x\\), the length of the longer leg?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(26\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(26\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(52\\sqrt{3}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\(26\\sqrt{3}\\)</span>
        </div>
        </div>`,
        answer: "D",
        figure: {"size":[600,400],"points":{"A":[240,240],"B":[420,240],"C":[240,140]},"segments":[{"from":"A","to":"B"},{"from":"C","to":"A"},{"from":"C","to":"B"}],"circles":[],"angles":[{"at":"B","arms":["A","C"],"label":"30","arcs":1}],"ticks":[],"rightAngles":[{"at":"A","arms":["B","C"]}],"labels":[{"text":"52","on":["C","B"]},{"text":"x","on":["A","B"]}],"notToScale":true,"hiddenLabels":["C"],"pointText":{"B":{"text":"Warehouse"},"A":{"text":"1st Stop","side":"below"}},"arrows":[],"icons":[],"showPointLabels":false},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri60647",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 2,
        questionType: "WE",
        difficulty: 2,
        tags: [],
        text: `<p>The perimeter of an isosceles right triangle is \\(36 + 18\\sqrt{2}\\) centimeters. What is the length, in centimeters, of the hypotenuse of this triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(18\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(18\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(36\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(36\\sqrt{2}\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `An isosceles right triangle is a \\(45\\)-\\(45\\)-\\(90\\) triangle with sides \\(x\\), \\(x\\), and \\(x\\sqrt{2}\\), so its perimeter is \\(2x + x\\sqrt{2}\\)`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `Match to the given perimeter \\(36 + 18\\sqrt{2}\\): the whole-number part gives \\(2x = 36\\), so \\(x = 18\\) (and the radical part \\(18\\sqrt{2}\\) agrees)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `The hypotenuse is \\(x\\sqrt{2} = 18\\sqrt{2}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri99235",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 2,
        questionType: "GP",
        difficulty: 2,
        tags: [],
        text: `<p>The perimeter of an isosceles right triangle is \\(48 + 24\\sqrt{2}\\) inches. What is the length, in inches, of each of the two congruent legs?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(12\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(24\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(48\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Write the perimeter of a \\(45\\)-\\(45\\)-\\(90\\) triangle with leg \\(x\\) as an expression in \\(x\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Set it equal to \\(48 + 24\\sqrt{2}\\) and match the whole-number parts`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Solve for \\(x\\), the leg length`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri27105",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 2,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>The hypotenuse of an isosceles right triangle has a length of \\(15\\sqrt{2}\\) meters. What is the perimeter, in meters, of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(30\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(15 + 15\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(30 + 15\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(30\\sqrt{2}\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri79472",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 3,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>If the height of an equilateral triangle is \\(24\\) units and its perimeter is \\(a\\sqrt{3}\\) units, what is the value of \\(a\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(36\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(48\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(72\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `The height of an equilateral triangle splits it into two \\(30\\)-\\(60\\)-\\(90\\) triangles. If the side is \\(s\\), the short leg is \\(\\frac{s}{2}\\) and the height is \\(\\frac{s}{2}\\sqrt{3}\\)`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `Set \\(\\frac{s\\sqrt{3}}{2} = 24\\), so \\(s = \\frac{48}{\\sqrt{3}} = 16\\sqrt{3}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Perimeter \\(= 3s = 48\\sqrt{3}\\), so \\(a = 48\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri32341",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 3,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>The perimeter of an equilateral triangle is \\(54\\sqrt{3}\\) centimeters. If the height of the triangle is \\(h\\) centimeters, what is the value of \\(h\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(18\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(27\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(27\\sqrt{3}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(54\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: "Divide the perimeter by 3 to find the side length",
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Draw the height to form a \\(30\\)-\\(60\\)-\\(90\\) triangle; the height is the long leg, \\(\\frac{s}{2}\\sqrt{3}\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Substitute the side length and simplify, remembering \\(\\sqrt{3} \\cdot \\sqrt{3} = 3\\)`,
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri33244",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 3,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>An equilateral triangle has a height of \\(18\\) centimeters. If the area of the triangle is \\(a\\sqrt{3}\\) square centimeters, what is the value of \\(a\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(54\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(72\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(108\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(162\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri60804",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 4,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>The perimeter of an equilateral triangle is \\(450\\) centimeters. The three vertices of the triangle lie on a circle. The radius of the circle is \\(k\\sqrt{3}\\) centimeters. What is the value of \\(k\\)?</p>`,
        answer: "50",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `The side length is \\(450 \\div 3 = 150\\). The circle's center is the triangle's center, and a segment from the center to a vertex (the radius) makes a \\(30^\\circ\\) angle with the side`,
            note: "",
            gif: "",
            answer: "50",
            video: ""
        },
        {
            text: `Dropping a perpendicular from the center to a side forms a \\(30\\)-\\(60\\)-\\(90\\) triangle with long leg \\(\\frac{150}{2} = 75\\) and hypotenuse \\(R\\). Since long leg \\(= \\frac{R\\sqrt{3}}{2}\\), \\(R = \\frac{150}{\\sqrt{3}} = 50\\sqrt{3}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Match to \\(k\\sqrt{3}\\): \\(k = 50\\). Shortcut to remember: for an equilateral triangle, \\(R = \\frac{s}{\\sqrt{3}}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri21776",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 4,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>An equilateral triangle is inscribed in a circle with a radius of \\(18\\sqrt{3}\\) inches. If the perimeter of the triangle is \\(p\\) inches, what is the value of \\(p\\)?</p>`,
        answer: "162",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Use the relationship between an equilateral triangle's side and its circumradius: \\(R = \\frac{s}{\\sqrt{3}}\\), so \\(s = R\\sqrt{3}\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Substitute \\(R = 18\\sqrt{3}\\) and simplify to find the side length`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Multiply the side length by 3 for the perimeter",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri36770",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 4,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>An equilateral triangle is inscribed in a circle with a radius of \\(12\\sqrt{3}\\) units. If the area of the triangle is \\(a\\sqrt{3}\\) square units, what is the value of \\(a\\)?</p>`,
        answer: "108",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri37641",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 5,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>A triangular garden is designed in the coordinate plane with vertices at \\(A(0, 0)\\), \\(B(16, 0)\\), and \\(C(0, 12)\\). A sprinkler will be installed at a point that is equidistant from all three vertices.</p>
        <p>What are the coordinates of the sprinkler?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\((4, 3)\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\((8, 6)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\((8, 0)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\((6, 8)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\((16, 12)\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"A":[240,240],"R":[440,240],"C":[240,120]},"segments":[{"from":"A","to":"R"},{"from":"C","to":"A"},{"from":"C","to":"R"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"A","arms":["R","C"]}],"labels":[],"notToScale":true,"hiddenLabels":[],"pointText":{"A":{"text":"A(0,0)","side":"below"},"C":{"text":"C(0,12)","side":"right"},"R":{"text":"B(16,0)","side":"below"}},"arrows":[],"icons":[],"showPointLabels":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Plot the points: \\(\\overline{AB}\\) lies on the \\(x\\)-axis and \\(\\overline{AC}\\) on the \\(y\\)-axis, so the triangle has a right angle at \\(A\\) and \\(\\overline{BC}\\) is the hypotenuse`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `The point equidistant from all three vertices of a right triangle is the midpoint of the hypotenuse`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Midpoint of \\(B(16, 0)\\) and \\(C(0, 12)\\): \\(\\left(\\frac{16 + 0}{2}, \\frac{0 + 12}{2}\\right) = (8, 6)\\). Check in Desmos: its distance to each vertex is \\(10\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri50470",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 5,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>A triangular park has vertices at \\(P(2, 3)\\), \\(Q(14, 3)\\), and \\(R(2, 19)\\). A security camera will be installed at a point that is the same distance from all three vertices.</p>
        <p>What are the coordinates of the security camera?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\((8, 11)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\((6, 9)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\((8, 3)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\((2, 11)\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\((14, 19)\\)</span>
        </div>
        </div>`,
        answer: "A",
        figure: {"size":[600,400],"points":{"A":[240,240],"R":[340,240],"C":[240,80]},"segments":[{"from":"A","to":"R"},{"from":"C","to":"A"},{"from":"C","to":"R"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"A","arms":["R","C"]}],"labels":[],"notToScale":true,"hiddenLabels":[],"pointText":{"A":{"text":"P(2,3)","side":"below"},"C":{"text":"R(2,19)","side":"right"},"R":{"text":"Q(14,3)","side":"below"}},"arrows":[],"icons":[],"showPointLabels":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Plot the vertices and look for a horizontal and a vertical side meeting at one vertex; that vertex is the right angle`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Identify the hypotenuse (the side opposite the right angle)",
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Find the midpoint of the hypotenuse; that is the point equidistant from all three vertices",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri83887",
        topic: "triangle",
        subtopic: "special-right-triangles",
        problem: 5,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>A triangular recreational area has vertices at \\(D(-6, 0)\\), \\(E(18, 0)\\), and \\(F(-6, 10)\\). A water fountain will be placed at a point equidistant from all three vertices.</p>
        <p>What is the distance, in units, from the water fountain to vertex \\(D\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(5\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(12\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(13\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">E</span>
            <span>\\(26\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[180,240],"R":[440,240],"C":[180,120],"B":[280,280],"D":[280,80],"E":[120,240],"F":[500,240]},"segments":[{"from":"A","to":"R"},{"from":"C","to":"A"},{"from":"C","to":"R"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"A","arms":["R","C"]}],"labels":[],"notToScale":true,"hiddenLabels":[],"pointText":{"A":{"text":"D(-6,0)","side":"below"},"C":{"text":"F(-6,10)","side":"left"},"R":{"text":"E(18,0)","side":"below"}},"arrows":[{"from":"B","to":"D","label":"","side":"above"},{"from":"E","to":"F","label":""}],"icons":[],"showPointLabels":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri82682",
        topic: "triangle",
        subtopic: "area",
        problem: 1,
        questionType: "WE",
        difficulty: 1,
        tags: [],
        text: `<p>In the triangle shown, the length of the base is \\(18\\) centimeters. The area of the triangle is \\(171\\) square centimeters. What is the height, \\(h\\), in centimeters, of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(9\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(18\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(19\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(38\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"A":[180,240],"C":[440,240],"B":[280,100],"F":[280,240]},"segments":[{"from":"A","to":"C"},{"from":"B","to":"A"},{"from":"B","to":"C"},{"from":"B","to":"F","style":"dotted"},{"from":"F","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"F","arms":["B","A"]}],"labels":[{"text":"h","on":["B","F"],"italic":true},{"text":"18 cm","on":["A","C"],"side":"below"}],"notToScale":true,"hiddenLabels":["F"],"pointText":{},"arrows":[],"icons":[],"showPointLabels":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Area of a triangle: \\(A = \\frac{1}{2}bh\\). Substitute what's known: \\(171 = \\frac{1}{2}(18)h\\)`,
            note: "",
            gif: "",
            answer: "C",
            video: ""
        },
        {
            text: `Simplify: \\(171 = 9h\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Solve: \\(h = 19\\). Choice D (\\(38\\)) is the trap for forgetting the \\(\\frac{1}{2}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri24310",
        topic: "triangle",
        subtopic: "area",
        problem: 1,
        questionType: "GP",
        difficulty: 1,
        tags: [],
        text: `<p>The area of triangle \\(DEF\\) shown is \\(144\\) square inches. The perpendicular height from vertex \\(E\\) to side \\(\\overline{DF}\\) is \\(12\\) inches.</p>
        <p>What is the length, in inches, of \\(\\overline{DF}\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(12\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(18\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(36\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: {"size":[600,400],"points":{"D":[180,240],"F":[440,240],"E":[340,100],"Z":[340,240]},"segments":[{"from":"D","to":"F"},{"from":"E","to":"D"},{"from":"E","to":"F"},{"from":"E","to":"Z","style":"dotted"},{"from":"Z","to":"D"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"Z","arms":["E","D"]}],"labels":[{"text":"12 in","on":["E","Z"],"italic":false},{"text":"x","on":["D","F"],"side":"below"}],"notToScale":true,"hiddenLabels":["Z"],"pointText":{},"arrows":[],"icons":[],"showPointLabels":true},
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Write the area formula \\(A = \\frac{1}{2}bh\\) with \\(\\overline{DF}\\) as the base and \\(12\\) as the height`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Substitute the area \\(144\\) and simplify the right side`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Solve for the base",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri75040",
        topic: "triangle",
        subtopic: "area",
        problem: 1,
        questionType: "PR",
        difficulty: 2,
        tags: [],
        text: `<p>In the figure shown, triangle \\(JKL\\) has a base \\(\\overline{JL}\\) of length \\(20\\) units. The perpendicular distance from vertex \\(K\\) to the line containing \\(\\overline{JL}\\) is \\(15\\) units. The perpendicular segment intersects the extension of \\(\\overline{JL}\\) beyond vertex \\(L\\).</p>
        <p>What is the area, in square units, of triangle \\(JKL\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(75\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(150\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(175\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(300\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: {"size":[600,400],"points":{"J":[180,240],"M":[440,240],"K":[440,120],"L":[340,240]},"segments":[{"from":"J","to":"M","style":"dotted"},{"from":"K","to":"J"},{"from":"K","to":"M","style":"dotted"},{"from":"K","to":"L","style":"solid"},{"from":"L","to":"J"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"M","arms":["J","K"]}],"labels":[{"text":"20 Units","on":["L","J"]},{"text":"15 units","on":["K","M"]}],"notToScale":true,"hiddenLabels":[],"pointText":{},"arrows":[],"icons":[],"showPointLabels":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri69207",
        topic: "triangle",
        subtopic: "area",
        problem: 2,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>The area of a triangle is \\(208\\) square centimeters. The length of the base of the triangle is \\(10\\) centimeters greater than the height of the triangle. What is the height, in centimeters, of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(14\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(16\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(21\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(24\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Let the height be \\(h\\); then the base is \\(h + 10\\). Area: \\(\\frac{1}{2}h(h + 10) = 208\\)`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `Multiply by \\(2\\) and expand: \\(h^2 + 10h - 416 = 0\\). Factor: \\((h + 26)(h - 16) = 0\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Height must be positive, so \\(h = 16\\). Confirm in Desmos by graphing \\(y = \\frac{1}{2}x(x + 10)\\) and \\(y = 208\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri15913",
        topic: "triangle",
        subtopic: "area",
        problem: 2,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>The area of a triangle is \\(180\\) square inches. The height of the triangle is \\(9\\) inches less than the length of its base. What is the length, in inches, of the base?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(18\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(21\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(24\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(27\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Let the base be \\(b\\) and write the height in terms of \\(b\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Set \\(\\frac{1}{2}bh = 180\\), substitute, and rearrange into a quadratic equal to zero`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Solve (factor or graph in Desmos) and keep the positive root",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri75041",
        topic: "triangle",
        subtopic: "area",
        problem: 2,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>The area of a triangle is \\(294\\) square meters. The length of the base is \\(3\\) times the height of the triangle. What is the height, in meters, of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(7\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(14\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(7\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(14\\sqrt{2}\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },

        {
        id: "Tri88483",
        topic: "triangle",
        subtopic: "area",
        problem: 3,
        questionType: "WE",
        difficulty: 3,
        tags: [],
        text: `<p>The line segment shown in the \\(xy\\)-plane represents one of the legs of a right triangle. The area of this triangle is \\(30\\sqrt{5}\\) square units. What is the length, in units, of the other leg of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(5\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\(5\\sqrt{10}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\(10\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(6\\sqrt{5}\\)</span>
        </div>
        </div>`,
        answer: "B",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: `Read the segment's horizontal and vertical displacement from the graph and use the Pythagorean theorem to find its length: \\(\\sqrt{6^2 + 6^2} = 6\\sqrt{2}\\)`,
            note: "",
            gif: "",
            answer: "B",
            video: ""
        },
        {
            text: `The legs of a right triangle are its base and height, so \\(\\frac{1}{2}(6\\sqrt{2})(x) = 30\\sqrt{5}\\), giving \\(3\\sqrt{2}\\,x = 30\\sqrt{5}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        },
        {
            text: `Solve: \\(x = \\frac{10\\sqrt{5}}{\\sqrt{2}} = 5\\sqrt{10}\\). Confirm in Desmos by typing \\(30\\sqrt{5} / (3\\sqrt{2})\\) and \\(5\\sqrt{10}\\)`,
            note: "",
            gif: "",
            answer: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri89275",
        topic: "triangle",
        subtopic: "area",
        problem: 3,
        questionType: "GP",
        difficulty: 3,
        tags: [],
        text: `<p>The line segment shown in the \\(xy\\)-plane represents one of the legs of a right triangle. The area of the triangle is \\(50\\sqrt{2}\\) square units. What is the length, in units, of the other leg of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(5\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(10\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(10\\sqrt{2}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(20\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [
        {
            text: "Use the horizontal and vertical displacement of the segment to find its length with the Pythagorean theorem",
            note: "",
            gif: "",
            video: ""
        },
        {
            text: `Set \\(\\frac{1}{2} \\times (\\text{that leg}) \\times (\\text{other leg}) = 50\\sqrt{2}\\)`,
            note: "",
            gif: "",
            video: ""
        },
        {
            text: "Solve for the other leg",
            note: "",
            gif: "",
            video: ""
        }
        ],
        screenshot: "",
        videoId: ""
    },

    {
        id: "Tri50232",
        topic: "triangle",
        subtopic: "area",
        problem: 3,
        questionType: "PR",
        difficulty: 3,
        tags: [],
        text: `<p>The line segment shown in the \\(xy\\)-plane represents one of the legs of a right triangle. The area of this triangle is \\(45\\sqrt{13}\\) square units. What is the length, in units, of the other leg of the triangle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\(6\\sqrt{5}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\(9\\sqrt{13}\\)</span>
        </div>
        <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\(6\\sqrt{65}\\)</span>
        </div>
        <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\(15\\)</span>
        </div>
        </div>`,
        answer: "C",
        figure: null,
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },


];