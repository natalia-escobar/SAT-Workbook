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


];