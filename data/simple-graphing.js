const simpleGraphing = {
  name: "Simple Graphing",
  workedProblems: [

    // Problem 1
    {
        problem: `<p>The height, \\(y\\) meters, is modeled by the graph, where \\(y = 0\\) represents ground level. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
            <div class="mc-choices">
            <div class="mc-choice">
                <span class="mc-label">A</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                    <tr><td>\\(0\\)</td><td>\\(108\\)</td></tr>
                    <tr><td>\\(2.25\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(4.50\\)</td><td>\\(108\\)</td></tr>
                </table>
                </span>
            </div>
            <div class="mc-choice correct">
                <span class="mc-label">B</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                    <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(2.25\\)</td><td>\\(108\\)</td></tr>
                    <tr><td>\\(4.50\\)</td><td>\\(0\\)</td></tr>
                </table>
                </span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">C</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                    <tr><td>\\(1.125\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(2.25\\)</td><td>\\(108\\)</td></tr>
                    <tr><td>\\(3.375\\)</td><td>\\(0\\)</td></tr>
                </table>
                </span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">D</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                    <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(2.25\\)</td><td>\\(54\\)</td></tr>
                    <tr><td>\\(4.50\\)</td><td>\\(0\\)</td></tr>
                </table>
                </span>
            </div>
            </div>`,
        graph: {
            expressions: [
            { latex: "y = -21.33x(x-4.5)", color: "#2563eb" },
            ],
            bounds: { left: -0.5, right: 5, bottom: -10, top: 120 },
        },
        steps: [
            { text: "Type 'table' into Desmos", note: "", gif: "", video: "" },
            { text: "Plug in the values of each answer choice into the table and match with the given graph", note: "", gif: "", video: "" },
        ],

        guidedProblem: `<p>The height, \\(y\\) feet, is modeled by the graph, where \\(y = 0\\) represents ground level. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
            <div class="mc-choices">
            <div class="mc-choice">
                <span class="mc-label">A</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                    <tr><td>\\(0.5\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(3.5\\)</td><td>\\(90\\)</td></tr>
                    <tr><td>\\(6.5\\)</td><td>\\(0\\)</td></tr>
                </table>
                </span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">B</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                    <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(3.5\\)</td><td>\\(81\\)</td></tr>
                    <tr><td>\\(7.0\\)</td><td>\\(0\\)</td></tr>
                </table>
                </span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">C</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                    <tr><td>\\(0.5\\)</td><td>\\(81\\)</td></tr>
                    <tr><td>\\(3.5\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(6.5\\)</td><td>\\(81\\)</td></tr>
                </table>
                </span>
            </div>
            <div class="mc-choice correct">
                <span class="mc-label">D</span>
                <span>
                <table class="xy-table">
                    <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                    <tr><td>\\(0.5\\)</td><td>\\(0\\)</td></tr>
                    <tr><td>\\(3.5\\)</td><td>\\(81\\)</td></tr>
                    <tr><td>\\(6.5\\)</td><td>\\(0\\)</td></tr>
                </table>
                </span>
            </div>
            </div>`,
        guidedGraph: {
            expressions: [
            { latex: "y = -9(x-0.5)(x-6.5)", color: "#2563eb" },
            ],
            bounds: { left: -0.5, right: 7.5, bottom: -30, top: 100 },
        },
        guidedSteps: [
            "Type 'table' into Desmos",
            "Plug in the values of each answer choice into the table and match with the given graph",
        ],
        guidedAnswer: "Answer: D",
        guidedScreenshot: "",

        practice: [
            {
            text: `<p>The water level, \\(y\\) meters, is modeled by the graph, where \\(y = 0\\) represents the spillway level. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
                <div class="mc-choices">
                <div class="mc-choice correct">
                    <span class="mc-label">A</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(6\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(-4.8\\)</td></tr>
                        <tr><td>\\(8\\)</td><td>\\(6\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(-4.8\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(8\\)</td><td>\\(-4.8\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(1.33\\)</td><td>\\(6\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(-4.8\\)</td></tr>
                        <tr><td>\\(6.67\\)</td><td>\\(6\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(2.4\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(-4.8\\)</td></tr>
                        <tr><td>\\(8\\)</td><td>\\(2.4\\)</td></tr>
                    </table>
                    </span>
                </div>
                </div>`,
            graph: {
                expressions: [
                { latex: "y = 0.675(x-4)^2-4.8", color: "#2563eb" },
                { latex: "y = 0", color: "#1a1a1a", lineStyle: "DASHED" },
                ],
                bounds: { left: -0.5, right: 8.5, bottom: -6, top: 8 },
            },
            setup: "Answer: A",
            screenshot: "",
            },
            {
            text: `<p>The temperature, \\(y\\) °C, is modeled by the graph. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(650\\)</td></tr>
                        <tr><td>\\(2.35\\)</td><td>\\(923.5\\)</td></tr>
                        <tr><td>\\(4.70\\)</td><td>\\(650\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(0.47\\)</td><td>\\(650\\)</td></tr>
                        <tr><td>\\(2.35\\)</td><td>\\(950\\)</td></tr>
                        <tr><td>\\(4.23\\)</td><td>\\(650\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">C</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(650\\)</td></tr>
                        <tr><td>\\(2.35\\)</td><td>\\(950\\)</td></tr>
                        <tr><td>\\(4.70\\)</td><td>\\(650\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(623.5\\)</td></tr>
                        <tr><td>\\(2.35\\)</td><td>\\(923.5\\)</td></tr>
                        <tr><td>\\(4.70\\)</td><td>\\(623.5\\)</td></tr>
                    </table>
                    </span>
                </div>
                </div>`,
            graph: {
                expressions: [
                { latex: "y = -54.32(x-2.35)^{2} + 950", color: "#2563eb" },
                ],
                bounds: { left: -0.5, right: 5, bottom: 550, top: 1050 },
            },
            setup: "Answer: C",
            screenshot: "",
            },

            ],
        
            additionalPractice: [
            {
            text: `<p>The height, \\(y\\) meters, is modeled by the graph, where \\(y = 0\\) represents ground level. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
                <div class="mc-choices">
                <div class="mc-choice correct">
                    <span class="mc-label">A</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(7\\)</td><td>\\(135\\)</td></tr>
                        <tr><td>\\(14\\)</td><td>\\(0\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(3.5\\)</td><td>\\(135\\)</td></tr>
                        <tr><td>\\(7\\)</td><td>\\(0\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(135\\)</td></tr>
                        <tr><td>\\(7\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(14\\)</td><td>\\(135\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(7\\)</td><td>\\(68\\)</td></tr>
                        <tr><td>\\(14\\)</td><td>\\(0\\)</td></tr>
                    </table>
                    </span>
                </div>
                </div>`,
            graph: {
                expressions: [
                { latex: "y = -1.378x(x-14)", color: "#2563eb" },
                ],
                bounds: { left: -1, right: 15, bottom: -10, top: 150 },
            },
            },
            {
            text: `<p>The height, \\(y\\) feet, is modeled by the graph, where \\(y = 0\\) represents ground level. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(5\\)</td><td>\\(160\\)</td></tr>
                        <tr><td>\\(10\\)</td><td>\\(0\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(160\\)</td></tr>
                        <tr><td>\\(5\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(10\\)</td><td>\\(160\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                        <tr><td>\\(2.5\\)</td><td>\\(80\\)</td></tr>
                        <tr><td>\\(5\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(7.5\\)</td><td>\\(80\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">D</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (seconds)</td><td>\\(y\\) (feet)</td></tr>
                        <tr><td>\\(2.5\\)</td><td>\\(80\\)</td></tr>
                        <tr><td>\\(5\\)</td><td>\\(160\\)</td></tr>
                        <tr><td>\\(7.5\\)</td><td>\\(80\\)</td></tr>
                    </table>
                    </span>
                </div>
                </div>`,
            graph: {
                expressions: [
                { latex: "y = -6.4x(x-10)", color: "#2563eb" },
                { latex: "y = 0", color: "#1a1a1a", lineStyle: "DASHED" },
                ],
                bounds: { left: -1, right: 11, bottom: -50, top: 200 },
            },
            },
            {
            text: `<p>The water level, \\(y\\) meters, is modeled by the graph, where \\(y = 0\\) represents the spillway level. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
                <div class="mc-choices">
                <div class="mc-choice correct">
                    <span class="mc-label">A</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(50\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(-10\\)</td></tr>
                        <tr><td>\\(8\\)</td><td>\\(50\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(50\\)</td></tr>
                        <tr><td>\\(2\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(-10\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(50\\)</td></tr>
                        <tr><td>\\(8\\)</td><td>\\(0\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (hours)</td><td>\\(y\\) (meters)</td></tr>
                        <tr><td>\\(2\\)</td><td>\\(0\\)</td></tr>
                        <tr><td>\\(4\\)</td><td>\\(-10\\)</td></tr>
                        <tr><td>\\(6\\)</td><td>\\(0\\)</td></tr>
                    </table>
                    </span>
                </div>
                </div>`,
            graph: {
                expressions: [
                { latex: "y = 3.75(x-4)^2-10", color: "#2563eb" },
                { latex: "y = 0", color: "#1a1a1a", lineStyle: "DASHED" },
                ],
                bounds: { left: -0.5, right: 8.5, bottom: -15, top: 60 },
            },
            },
            {
            text: `<p>The temperature, \\(y\\) °C, is modeled by the graph. Which table gives values of \\(x\\) and their corresponding values of \\(y\\) based on the model?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(100\\)</td></tr>
                        <tr><td>\\(3\\)</td><td>\\(220\\)</td></tr>
                        <tr><td>\\(6\\)</td><td>\\(100\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(0\\)</td><td>\\(220\\)</td></tr>
                        <tr><td>\\(3\\)</td><td>\\(100\\)</td></tr>
                        <tr><td>\\(6\\)</td><td>\\(220\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">C</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(1.5\\)</td><td>\\(160\\)</td></tr>
                        <tr><td>\\(3\\)</td><td>\\(220\\)</td></tr>
                        <tr><td>\\(4.5\\)</td><td>\\(160\\)</td></tr>
                    </table>
                    </span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>
                    <table class="xy-table">
                        <tr><td>\\(x\\) (minutes)</td><td>\\(y\\) (°C)</td></tr>
                        <tr><td>\\(1.5\\)</td><td>\\(220\\)</td></tr>
                        <tr><td>\\(3\\)</td><td>\\(160\\)</td></tr>
                        <tr><td>\\(4.5\\)</td><td>\\(220\\)</td></tr>
                    </table>
                    </span>
                </div>
                </div>`,
            graph: {
                expressions: [
                { latex: "y = -13.33(x-3)^{2} + 220", color: "#2563eb" },
                ],
                bounds: { left: -0.5, right: 6.5, bottom: 0, top: 250 },
            },
            },
      ],
    },

    // Problem 2

    {
      problem: `<p style="text-align:center;margin-bottom:12px">\\(f(x) = (x-2)^2 + 1\\)</p>
        <p>The function f is defined as shown. Which of the following graphs in the xy-plane could be the graph of \\(y = f(x)\\)?</p>`,
      graphChoices: [
        {
          label: "A",
          correct: false,
          graph: {
            expressions: [{ id: "1", latex: "y = (x+2)^2 + 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
        {
          label: "B",
          correct: false,
          graph: {
            expressions: [{ id: "1", latex: "y = (x-2)^2 - 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
        {
          label: "C",
          correct: true,
          graph: {
            expressions: [{ id: "1", latex: "y = (x-2)^2 + 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
        {
          label: "D",
          correct: false,
          graph: {
            expressions: [{ id: "1", latex: "y = (x+2)^2 - 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
      ],
      steps: [
        { text: "Type the given equation into Desmos and match each answer choice to the graph produced", note: "", gif: "", video: "" },
      ],

      guidedProblem: `<p style="text-align:center;margin-bottom:12px">\\(f(x) = x^2 - 4x + 1\\)</p>
        <p>The function f is defined as shown. Which of the following graphs in the xy-plane could be the graph of \\(y = f(x)\\)?</p>`,
      guidedGraphChoices: [
        {
          label: "A",
          correct: false,
          graph: {
            expressions: [{ id: "1", latex: "y = x^2 + 4x + 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
        {
          label: "B",
          correct: false,
          graph: {
            expressions: [{ id: "1", latex: "y = -x^2 + 4x - 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
        {
          label: "C",
          correct: false,
          graph: {
            expressions: [{ id: "1", latex: "y = (x+2)^2 - 3", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
        {
          label: "D",
          correct: true,
          graph: {
            expressions: [{ id: "1", latex: "y = x^2 - 4x + 1", color: "#1a1a1a" }],
            bounds: { left: -8, right: 8, bottom: -5, top: 9 },
          },
        },
      ],
      guidedSteps: [
        "Type the given equation into Desmos and match each answer choice to the graph produced",
      ],
      guidedAnswer: "Answer: D",
      guidedScreenshot: "",

      practice: [
        {
          text: `<p style="text-align:center;margin-bottom:12px">\\(f(x) = (x+3)(x-1)\\)</p>
            <p>The function f is defined as shown. Which of the following graphs in the xy-plane could be the graph of \\(y = f(x)\\)?</p>`,
          graphChoices: [
            {
              label: "A",
              correct: true,
              graph: {
                expressions: [{ id: "1", latex: "y = (x+3)(x-1)", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
            {
              label: "B",
              correct: false,
              graph: {
                expressions: [{ id: "1", latex: "y = (x-3)(x+1)", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
            {
              label: "C",
              correct: false,
              graph: {
                expressions: [{ id: "1", latex: "y = -(x+3)(x-1)", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
            {
              label: "D",
              correct: false,
              graph: {
                expressions: [{ id: "1", latex: "y = (x+3)(x+1)", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
          ],
        },
        {
          text: `<p style="text-align:center;margin-bottom:12px">\\(f(x) = -(x+1)^2 + 5\\)</p>
            <p>The function f is defined as shown. Which of the following graphs in the xy-plane could be the graph of \\(y = f(x)\\)?</p>`,
          graphChoices: [
            {
              label: "A",
              correct: false,
              graph: {
                expressions: [{ id: "1", latex: "y = (x+1)^2 + 5", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
            {
              label: "B",
              correct: true,
              graph: {
                expressions: [{ id: "1", latex: "y = -(x+1)^2 + 5", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
            {
              label: "C",
              correct: false,
              graph: {
                expressions: [{ id: "1", latex: "y = -(x-1)^2 + 5", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
            {
              label: "D",
              correct: false,
              graph: {
                expressions: [{ id: "1", latex: "y = (x-1)^2 - 5", color: "#1a1a1a" }],
                bounds: { left: -8, right: 8, bottom: -5, top: 9 },
              },
            },
          ],
        },
      ],
    },

    // Problem 3

    {
        problem: `<p>The graph shows the soccer ball's height above the ground, in feet, \\(t\\) seconds after the motion begins. Which statement is the best interpretation of the marked point \\((3,72)\\) in this context?</p>
            <div class="mc-choices">
            <div class="mc-choice">
                <span class="mc-label">A</span>
                <span>The object reaches a maximum height of \\(72\\) feet.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">B</span>
                <span>The object travels \\(72\\) feet in \\(3\\) seconds.</span>
            </div>
            <div class="mc-choice correct">
                <span class="mc-label">C</span>
                <span>Three seconds after the motion begins, the object is \\(72\\) feet above the ground.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">D</span>
                <span>The object is \\(3\\) feet above the ground after \\(72\\) seconds.</span>
            </div>
            </div>`,

        graph: {
            expressions: [
            { latex: "y=-7.2(x-1)(x-8)", color: "#2563eb" },
            { latex: "(3,72)", color: "#2563eb" },
            ],
            bounds: { left: 0, right: 8, bottom: 0, top: 140 },
        },

        steps: [
            {
            text: "",
            note: "",
            gif: "",
            video: ""
            },
        ],

        guidedProblem: `<p>The graph shows the model rocket's height above the ground, in meters, \\(t\\) seconds after the motion begins. Which statement is the best interpretation of the marked point \\((5,110)\\) in this context?</p>
            <div class="mc-choices">
            <div class="mc-choice">
                <span class="mc-label">A</span>
                <span>The model rocket reaches a maximum height of \\(110\\) meters.</span>
            </div>
            <div class="mc-choice correct">
                <span class="mc-label">B</span>
                <span>Five seconds after launch, the model rocket is \\(110\\) meters above the ground.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">C</span>
                <span>The model rocket travels upward at \\(110\\) meters per second for \\(5\\) seconds.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">D</span>
                <span>The model rocket is \\(5\\) meters above the ground after \\(110\\) seconds.</span>
            </div>
            </div>`,

        guidedGraph: {
            expressions: [
            { latex: "y=-5(x-7)^2+130", color: "#2563eb" },
            { latex: "(5,110)", color: "#2563eb" },
            ],
            bounds: { left: 0, right: 10, bottom: 0, top: 180 },
        },

        guidedSteps: [
            "",
        ],

        guidedAnswer: "Answer: B",
        guidedScreenshot: "",

        practice: [
            {
            text: `<p>The graph shows the firework's height above the ground, in meters, \\(t\\) seconds after the motion begins. Which statement is the best interpretation of the marked point \\((4,96)\\) in this context?</p>
                <div class="mc-choices">
                <div class="mc-choice correct">
                    <span class="mc-label">A</span>
                    <span>Four seconds after launch, the firework is \\(96\\) meters above the ground.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The firework reaches its maximum height after \\(96\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The firework rises at \\(96\\) meters per second for \\(4\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The maximum height of the firework is \\(4\\) meters.</span>
                </div>
                </div>`,

            graph: {
                expressions: [
                { latex: "y=-6.4(x-1)(x-9)", color: "#2563eb" },
                { latex: "(4,96)", color: "#2563eb" },
                ],
                bounds: { left: 0, right: 8, bottom: 0, top: 150 },
            },

            setup: "Answer: A",
            screenshot: "",
            },

            {
            text: `<p>The graph shows the baseball's height above the ground, in feet, \\(t\\) seconds after the motion begins. Which statement is the best interpretation of the marked point \\((2.5,65)\\) in this context?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The baseball reaches a maximum height of \\(65\\) feet after \\(2.5\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The baseball travels at \\(65\\) feet per second after \\(2.5\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The baseball falls \\(2.5\\) feet during the first \\(65\\) seconds.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">D</span>
                    <span>At \\(2.5\\) seconds, the baseball is \\(65\\) feet above the ground.</span>
                </div>
                </div>`,

            graph: {
                expressions: [
                { latex: "y=-10(x-3.5)^2+75", color: "#2563eb" },
                { latex: "(2.5,65)", color: "#2563eb" },
                ],
                bounds: { left: 0, right: 7, bottom: 0, top: 120 },
            },

            setup: "Answer: D",
            screenshot: "",
            },
        ],

        additionalPractice: [
            {
            text: `<p>The graph shows the height above the bottom of the half-pipe, in feet, at a horizontal distance \\(x\\) feet from the center. Which statement is the best interpretation of the marked point \\((3,2.7)\\) in this context?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The half-pipe is \\(3\\) feet high at a horizontal distance of \\(2.7\\) feet from the center.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">B</span>
                    <span>At a horizontal distance of \\(3\\) feet from the center, the half-pipe is \\(2.7\\) feet above the bottom.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The skateboarder moves \\(3\\) feet horizontally every \\(2.7\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The half-pipe has a minimum height of \\(2.7\\) feet at its center.</span>
                </div>
                </div>`,

            graph: {
                expressions: [
                { latex: "y=0.3x^2", color: "#2563eb" },
                { latex: "(3,2.7)", color: "#2563eb" },
                ],
                bounds: { left: -5, right: 5, bottom: 0, top: 8 },
            },
            },

            {
            text: `<p>The graph shows the player's distance from the midfield line, in yards, \\(t\\) seconds after the drill begins. Which statement is the best interpretation of the marked point \\((6,5.2)\\) in this context?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The player is \\(6\\) yards from midfield \\(5.2\\) seconds after the drill begins.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The player runs at a speed of \\(5.2\\) yards per second for \\(6\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The player's minimum distance from midfield is \\(5.2\\) yards.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">D</span>
                    <span>Six seconds after the drill begins, the player is \\(5.2\\) yards from the midfield line.</span>
                </div>
                </div>`,

            graph: {
                expressions: [
                { latex: "y=1.05(x-4)^2+1", color: "#2563eb" },
                { latex: "(6,5.2)", color: "#2563eb" },
                ],
                bounds: { left: 0, right: 8, bottom: 0, top: 20 },
            },
            },

            {
            text: `<p>The graph shows the height above the bottom of the bowl, in feet, at horizontal position \\(x\\) feet from the left edge. Which statement is the best interpretation of the marked point \\((2.5,3.0)\\) in this context?</p>
                <div class="mc-choices">
                <div class="mc-choice correct">
                    <span class="mc-label">A</span>
                    <span>At a horizontal position \\(2.5\\) feet from the left edge, the bowl is \\(3.0\\) feet above its bottom.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>At a height of \\(2.5\\) feet, the rider is \\(3.0\\) feet from the left edge.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The rider travels \\(3.0\\) feet every \\(2.5\\) seconds.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The lowest point of the bowl is \\(3.0\\) feet above the bottom.</span>
                </div>
                </div>`,

            graph: {
                expressions: [
                { latex: "y=0.4(x-5)^2+0.5", color: "#2563eb" },
                { latex: "(2.5,3)", color: "#2563eb" },
                ],
                bounds: { left: 0, right: 10, bottom: 0, top: 12 },
            },
            },

            {
            text: `<p>The graph shows the player's distance from the baseline, in feet, \\(t\\) seconds after the drill begins. Which statement is the best interpretation of the marked point \\((4.5,3.125)\\) in this context?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The player is \\(4.5\\) feet from the baseline \\(3.125\\) seconds after the drill begins.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The player moves away from the baseline at \\(3.125\\) feet per second for \\(4.5\\) seconds.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">C</span>
                    <span>At \\(4.5\\) seconds, the player is \\(3.125\\) feet from the baseline.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The player's minimum distance from the baseline is \\(3.125\\) feet.</span>
                </div>
                </div>`,

            graph: {
                expressions: [
                { latex: "y=0.5(x-3)^2+2", color: "#2563eb" },
                { latex: "(4.5,3.125)", color: "#2563eb" },
                ],
                bounds: { left: 0, right: 6, bottom: 0, top: 8 },
            },
            },
        ],
        },

    // Problem 4

    {
        problem: `<p>A runner's distance from the starting line during the first several minutes of a training drill is modeled by</p>
            <p style="text-align:center">\\(f(x)=-4x^2+40x\\),</p>
            <p>where \\(x\\) represents the number of minutes since the drill began and \\(f(x)\\) represents the runner's distance, in meters, from the starting line.</p>
            <p>What is the best interpretation of</p>
            <p style="text-align:center">\\(f(3)=84\\)?</p>
            <div class="mc-choices">
            <div class="mc-choice">
                <span class="mc-label">A</span>
                <span>After \\(84\\) minutes, the runner is \\(3\\) meters from the starting line.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">B</span>
                <span>The greatest distance the runner reaches from the starting line is \\(84\\) meters.</span>
            </div>
            <div class="mc-choice correct">
                <span class="mc-label">C</span>
                <span>After \\(3\\) minutes, the runner is \\(84\\) meters from the starting line.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">D</span>
                <span>The runner finishes the drill after \\(3\\) minutes.</span>
            </div>
            </div>`,

        steps: [
            {
            text: "",
            note: "",
            gif: "",
            video: ""
            },
        ],

        guidedProblem: `<p>A drone's distance from a landing platform is modeled by</p>
            <p style="text-align:center">\\(f(x)=3(x-5)^2\\),</p>
            <p>where \\(x\\) represents the number of seconds since the drone passed directly above the platform and \\(f(x)\\) represents its distance, in meters, from the platform.</p>
            <p>What is the best interpretation of</p>
            <p style="text-align:center">\\(f(7)=12\\)?</p>
            <div class="mc-choices">
            <div class="mc-choice correct">
                <span class="mc-label">A</span>
                <span>Seven seconds after passing above the platform, the drone is \\(12\\) meters from it.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">B</span>
                <span>Twelve seconds after passing above the platform, the drone is \\(7\\) meters from it.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">C</span>
                <span>The drone reaches the platform after \\(12\\) seconds.</span>
            </div>
            <div class="mc-choice">
                <span class="mc-label">D</span>
                <span>The greatest distance of the drone from the platform is \\(12\\) meters.</span>
            </div>
            </div>`,

        guidedSteps: [
            ""
        ],

        guidedAnswer: "Answer: A",
        guidedScreenshot: "",

        practice: [
            {
            text: `<p>The total number of tiles used in a patio design is modeled by</p>
                <p style="text-align:center">\\(f(x)=2x^2+18\\),</p>
                <p>where \\(x\\) represents the side length, in feet, of the central square section and \\(f(x)\\) represents the total number of tiles required.</p>
                <p>What is the best interpretation of</p>
                <p style="text-align:center">\\(f(4)=50\\)?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>A patio requiring \\(4\\) tiles has a central section with a side length of \\(50\\) feet.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">B</span>
                    <span>When the central section has a side length of \\(4\\) feet, \\(50\\) tiles are required.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The greatest possible number of tiles is \\(50\\).</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The patio has a total area of \\(50\\) square feet.</span>
                </div>
                </div>`,
            setup: "Answer: B",
            screenshot: "",
            },

            {
            text: `<p>A theater's ticket revenue during the first several hours of an event is modeled by</p>
                <p style="text-align:center">\\(f(x)=-2x^2+24x+5\\),</p>
                <p>where \\(x\\) represents the number of hours since ticket sales began and \\(f(x)\\) represents the revenue, in hundreds of dollars.</p>
                <p>What is the best interpretation of</p>
                <p style="text-align:center">\\(f(2)=45\\)?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The theater earns \\(\\$45\\) after \\(2\\) hours.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The theater sells \\(45\\) tickets in \\(2\\) hours.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The greatest possible revenue is \\(\\$4{,}500\\).</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">D</span>
                    <span>Two hours after ticket sales began, the revenue is \\(\\$4{,}500\\).</span>
                </div>
                </div>`,
            setup: "Answer: D",
            screenshot: "",
            },
        ],

        additionalPractice: [
            {
            text: `<p>The volume of water displaced by a machine part is modeled by</p>
                <p style="text-align:center">\\(f(x)=5(x-2)^2\\),</p>
                <p>where \\(x\\) represents the machine's operating speed, in meters per second, and \\(f(x)\\) represents the volume of water displaced, in liters.</p>
                <p>What is the best interpretation of</p>
                <p style="text-align:center">\\(f(6)=80\\)?</p>
                <div class="mc-choices">
                <div class="mc-choice correct">
                    <span class="mc-label">A</span>
                    <span>When the machine operates at \\(6\\) meters per second, it displaces \\(80\\) liters of water.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>When the machine operates at \\(80\\) meters per second, it displaces \\(6\\) liters of water.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The machine's greatest operating speed is \\(80\\) meters per second.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The machine displaces water for \\(6\\) seconds.</span>
                </div>
                </div>`,
            setup: "Answer: A",
            screenshot: "",
            },

            {
            text: `<p>The number of photographs transferred to a device during the first several minutes is modeled by</p>
                <p style="text-align:center">\\(f(x)=4x^2+12x\\),</p>
                <p>where \\(x\\) represents the number of minutes since the transfer began and \\(f(x)\\) represents the total number of photographs transferred.</p>
                <p>What is the best interpretation of</p>
                <p style="text-align:center">\\(f(3)=72\\)?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The transfer takes a total of \\(72\\) minutes.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>After \\(72\\) minutes, \\(3\\) photographs have been transferred.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">C</span>
                    <span>After \\(3\\) minutes, \\(72\\) photographs have been transferred.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>The greatest number of photographs that can be transferred is \\(72\\).</span>
                </div>
                </div>`,
            setup: "Answer: C",
            screenshot: "",
            },

            {
            text: `<p>The height of a decorative arch is modeled by</p>
                <p style="text-align:center">\\(f(x)=-3x^2+75\\),</p>
                <p>where \\(x\\) represents the horizontal distance, in feet, from the center of the arch and \\(f(x)\\) represents the height of the arch, in feet.</p>
                <p>What is the best interpretation of</p>
                <p style="text-align:center">\\(f(4)=27\\)?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>The arch is \\(4\\) feet high at a horizontal distance \\(27\\) feet from its center.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The maximum height of the arch is \\(27\\) feet.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">C</span>
                    <span>The arch has a total width of \\(27\\) feet.</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">D</span>
                    <span>At a horizontal distance of \\(4\\) feet from the center, the arch is \\(27\\) feet high.</span>
                </div>
                </div>`,
            setup: "Answer: D",
            screenshot: "",
            },

            {
            text: `<p>A student's progress during a review session is modeled by</p>
                <p style="text-align:center">\\(f(x)=-6x^2+54x\\),</p>
                <p>where \\(x\\) represents the number of minutes since the session began and \\(f(x)\\) represents the number of questions answered correctly.</p>
                <p>What does the statement</p>
                <p style="text-align:center">\\(f(3)=108\\)</p>
                <p>best indicate about the student's progress?</p>
                <div class="mc-choices">
                <div class="mc-choice">
                    <span class="mc-label">A</span>
                    <span>\\(108\\) minutes after the session began, the student has answered \\(3\\) questions correctly.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">B</span>
                    <span>The greatest number of questions the student can answer correctly is \\(108\\).</span>
                </div>
                <div class="mc-choice correct">
                    <span class="mc-label">C</span>
                    <span>\\(3\\) minutes after the session began, the student answered \\(108\\) questions correctly.</span>
                </div>
                <div class="mc-choice">
                    <span class="mc-label">D</span>
                    <span>Roughly \\(3\\) minutes after the session begins, the student finishes the review session.</span>
                </div>
                </div>`,
            setup: "Answer: C",
            screenshot: "",
            },
        ],
        },
  ],
};

export default simpleGraphing;