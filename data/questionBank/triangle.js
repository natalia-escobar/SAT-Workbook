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
        figure: {"size":[600,400],"points":{"A":[180,320],"B":[500,320],"C":[500,60]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"B","arms":["A","C"]}],"labels":[{"text":"28","on":["A","B"]},{"text":"x","on":["C","A"]}],"notToScale":true},
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
        figure: {"size":[600,400],"points":{"A":[140,320],"B":[500,320],"C":[500,160]},"segments":[{"from":"A","to":"B"},{"from":"B","to":"C"},{"from":"C","to":"A"}],"circles":[],"angles":[],"ticks":[],"rightAngles":[{"at":"B","arms":["A","C"]}],"labels":[{"text":"85","on":["C","A"]},{"text":"x","on":["B","C"]}],"notToScale":true},
        graph: null,
        graphChoices: null,
        steps: [],
        screenshot: "",
        videoId: ""
    },
];