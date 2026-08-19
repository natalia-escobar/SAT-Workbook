const quizBank = [

  // ── MULTIPLE CHOICE ──
  {
    id: "PAR-001",
    topic: "parabola",
    difficulty: "easy",
    problem: `<p style="text-align:center;margin-bottom:12px">
      \\(f(x) = x^2 - 6x + 8\\)
    </p>
    <p>What is the minimum value of the function?</p>
    <div class="mc-choices">
      <div class="mc-choice"><span class="mc-label">A</span><span>\\(-1\\)</span></div>
      <div class="mc-choice correct"><span class="mc-label">B</span><span>\\(-2\\)</span></div>
      <div class="mc-choice"><span class="mc-label">C</span><span>\\(3\\)</span></div>
      <div class="mc-choice"><span class="mc-label">D</span><span>\\(8\\)</span></div>
    </div>`,
    correctChoice: "B",
    answer: "The answer is B. The minimum value is -2.",
  },

  // ── MULTIPLE CHOICE WITH TABLE ──
  {
    id: "PAR-002",
    topic: "parabola",
    difficulty: "medium",
    problem: `<table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>x</td><td>y</td></tr>
      <tr><td>0</td><td>5</td></tr>
      <tr><td>2</td><td>-3</td></tr>
      <tr><td>5</td><td>0</td></tr>
    </table>
    <p>The variables x and y have a quadratic relationship. Which equation represents this relationship?</p>
    <div class="mc-choices">
      <div class="mc-choice correct"><span class="mc-label">A</span><span>\\(y = x^2 - 6x + 5\\)</span></div>
      <div class="mc-choice"><span class="mc-label">B</span><span>\\(y = -x^2 + 5\\)</span></div>
      <div class="mc-choice"><span class="mc-label">C</span><span>\\(y = 2x^2 - 6x + 5\\)</span></div>
      <div class="mc-choice"><span class="mc-label">D</span><span>\\(y = x^2 + 5\\)</span></div>
    </div>`,
    correctChoice: "A",
    answer: "The answer is A.",
  },

  // ── FREE RESPONSE (write-in) ──
  {
    id: "PAR-003",
    topic: "parabola",
    difficulty: "hard",
    problem: `<p style="text-align:center;margin-bottom:12px">
      \\(g(x) = (x+12)(t-x)\\)
    </p>
    <p>The function g is defined above, where t is a constant. In the xy-plane, the graph of y = g(x) passes through the point (20, 0). What is the value of g(0)?</p>`,
    correctAnswer: "240",
    answer: "The answer is 240.",
  },

  // ── MULTIPLE CHOICE WITH GRAPH ──
  {
    id: "PAR-004",
    topic: "parabola",
    difficulty: "medium",
    problem: `<p>The graph of the quadratic function f is shown. Which equation could define f?</p>
    <div class="mc-choices">
      <div class="mc-choice"><span class="mc-label">A</span><span>\\(f(x) = (x-3)^2 + 2\\)</span></div>
      <div class="mc-choice correct"><span class="mc-label">B</span><span>\\(f(x) = (x-3)^2 - 2\\)</span></div>
      <div class="mc-choice"><span class="mc-label">C</span><span>\\(f(x) = (x+3)^2 - 2\\)</span></div>
      <div class="mc-choice"><span class="mc-label">D</span><span>\\(f(x) = (x+3)^2 + 2\\)</span></div>
    </div>`,
    graph: {
      expressions: [
        { latex: "y = (x-3)^2 - 2", color: "#1a1a1a" },
        { latex: "(3, -2)", color: "#1a1a1a" },
      ],
      bounds: { left: -2, right: 8, bottom: -5, top: 10 },
    },
    correctChoice: "B",
    answer: "The answer is B.",
  },

  // ── HARD — finding a constant ──
  {
    id: "PAR-005",
    topic: "parabola",
    difficulty: "hard",
    problem: `<p style="text-align:center;margin-bottom:12px">
      \\(2w^2 + 7w - c = 0\\)
    </p>
    <p>In the given equation, c is a constant. A solution to the equation is \\(\\frac{-7+\\sqrt{129}}{4}\\). What is the value of c?</p>`,
    correctAnswer: "10",
    answer: "The answer is 10.",
  },

];

export default quizBank;