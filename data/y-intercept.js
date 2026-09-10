const yIntercept = {
  name: "Y-Intercept",
  workedProblems: [
    
    // Problem 3

    
{
  problem: `<p>For the function \\(f\\) defined by</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(f(r) = 2r^2 + 7r + m\\),</p>
  <p>what does \\(m\\) represent?</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>A value of \\(r\\) for which \\(f(r) = 0\\)</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">B</span>
      <span>The value of \\(f(0)\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">C</span>
      <span>The greatest value of \\(f(r)\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">D</span>
      <span>The value of \\(f(r)\\) at the axis of symmetry</span>
    </div>
  </div>`,
  steps: [
    { text: "Type the function into Desmos", note: "", gif: "", video: "" },
    { text: "Identify what the constant term represents on the graph", note: "", gif: "", video: "" },
  ],

  guidedProblem: `<p>For the function \\(g\\) defined by</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(g(t) = -4t^2 + 20t + n\\),</p>
  <p>what does \\(n\\) represent?</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>The greatest value of \\(g(t)\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">B</span>
      <span>A value of \\(t\\) for which \\(g(t) = 0\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">C</span>
      <span>The value of \\(g(t)\\) at the axis of symmetry</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">D</span>
      <span>The value of \\(g(0)\\)</span>
    </div>
  </div>`,
  guidedSteps: [
    "Type the function into Desmos",
    "Identify what the constant term represents on the graph"
  ],
  guidedAnswer: "The Answer is D",
  guidedScreenshot: "",

  practice: [
    {
      text: `<p>For the function \\(p\\) defined by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(p(w) = 5w^2 - 30w + c\\),</p>
      <p>what does \\(c\\) represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The value of \\(p(0)\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The least value of \\(p(w)\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>A value of \\(w\\) for which \\(p(w) = 0\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The \\(y\\)-coordinate of the vertex</span>
        </div>
      </div>`
    },

    {
      text: `<p>For the function \\(q\\) defined by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(q(z) = -3z^2 - 18z + d\\),</p>
      <p>what does \\(d\\) represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>A value of \\(z\\) for which \\(q(z) = 0\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The greatest value of \\(q(z)\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The value of \\(q(0)\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The \\(x\\)-coordinate of the vertex</span>
        </div>
      </div>`
    },
  ],

  additionalPractice: [
    {
      text: `<p>Consider the quadratic function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(f(w) = 6w^2 - 18w + 18\\).</p>
      <p>What does the constant represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>A value of \\(w\\) where the graph crosses the horizontal axis</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The value of the function when \\(w = 0\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The input at which the graph changes direction</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The lowest point reached by the graph</span>
        </div>
      </div>`
    },

    {
      text: `<p>Consider the quadratic function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(g(m) = -3m^2 + 20m + 42\\).</p>
      <p>What does the constant represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The highest point reached by the graph</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>A value of \\(m\\) for which \\(g(m) = 0\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The input at the center of the graph's symmetry</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The value of the function when \\(m = 0\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>Consider the quadratic function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(h(q) = 8q^2 + 5q - 27\\).</p>
      <p>What does the constant represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The value of the function when \\(q = 0\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The lowest point reached by the graph</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>An input where the function has an output of 0</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The input corresponding to the vertex</span>
        </div>
      </div>`
    },

    {
      text: `<p>Consider the quadratic function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(k(v) = -7v^2 - 16v + 35\\).</p>
      <p>What does the constant represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>An input where the graph meets the horizontal axis</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The highest point reached by the graph</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The value of the function when \\(v = 0\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The input corresponding to the graph's turning point</span>
        </div>
      </div>`
    },
  ],
},

//Problem 4


{
  problem: `<p>A technology company models the number of active client accounts during an 8-month period with the equation</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(A(t) = 4(t + 3) - \\frac{1}{2}t^2 + 25\\),</p>
  <p>where \\(A(t)\\) is the estimated number of active client accounts \\(t\\) months after the company begins a tracking period.</p>
  <p>Which statement best describes the meaning of the \\(y\\)-intercept of the graph of this equation?</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>The company expects the number of active accounts to increase by 4 each month.</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">B</span>
      <span>The company had approximately 37 active client accounts when the tracking period began.</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">C</span>
      <span>The company will have 26 active accounts at the end of the tracking period.</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">D</span>
      <span>The company reaches its greatest number of active accounts after 3 months.</span>
    </div>
  </div>`,
  steps: [
    { text: "Substitute 0 for the input variable to find the y-intercept", note: "", gif: "", video: "" },
    { text: "Interpret the output in the context of the problem", note: "", gif: "", video: "" },
  ],

  guidedProblem: `<p>The number of machines operating at a manufacturing facility is modeled by</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(M(w) = -2(w - 5)^2 + 74\\),</p>
  <p>where \\(M(w)\\) is the estimated number of operating machines \\(w\\) weeks after a maintenance program begins.</p>
  <p>Which statement best interprets the \\(y\\)-intercept of the graph of this equation?</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>The facility has its greatest number of operating machines during week 5.</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">B</span>
      <span>The maintenance program causes 2 additional machines to operate each week.</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">C</span>
      <span>The facility will eventually have no operating machines.</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">D</span>
      <span>Approximately 24 machines were operating when the maintenance program began.</span>
    </div>
  </div>`,
  guidedSteps: [
    "Substitute 0 for the input variable to find the y-intercept",
    "Interpret the output in the context of the problem"
  ],
  guidedAnswer: "The Answer is D",
  guidedScreenshot: "",

  practice: [
    {
      text: `<p>A delivery company models the number of packages waiting at a distribution center with the equation</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(N(d) = \\frac{1}{4}(d + 8)^2 + 39\\),</p>
      <p>where \\(N(d)\\) is the estimated number of packages waiting \\(d\\) days after a new processing system is introduced.</p>
      <p>Which statement best describes the \\(y\\)-intercept of the graph of this equation?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>Approximately 55 packages were waiting when the new processing system was introduced.</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The distribution center processes 8 packages each day.</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The number of waiting packages reaches 39 after 8 days.</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The number of waiting packages increases by exactly one-fourth of a package each day.</span>
        </div>
      </div>`
    },

    {
      text: `<p>A company models the number of employees assigned to a temporary project with the equation</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(E(m) = 3(2m + 7) - \\frac{3}{4}m^2 + 41\\),</p>
      <p>where \\(E(m)\\) is the estimated number of employees assigned to the project \\(m\\) months after staffing begins.</p>
      <p>Which statement best interprets the \\(y\\)-intercept of the graph of this equation?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The project will have 41 employees when staffing is completed.</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The company assigns 7 new employees to the project each month.</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>Approximately 62 employees were assigned to the project when staffing began.</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The number of employees assigned to the project decreases by three-fourths each month.</span>
        </div>
      </div>`
    },
  ],

  additionalPractice: [
    {
      text: `<p>The number of electric scooters available through a transportation service \\(w\\) weeks after the beginning of a new operating period is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(S(w) = 18w^2 - 95w + 1{,}460\\),</p>
      <p>where \\(0 \\leq w \\leq 20\\).</p>
      <p>In this model, what does the value \\(1{,}460\\) represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The greatest number of scooters available during the operating period</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The estimated number of scooters available when the operating period began</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The number of scooters added to the service during the first week</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The estimated change in the number of available scooters over the entire period</span>
        </div>
      </div>`
    },

    {
      text: `<p>The amount of water, in gallons, stored in a reservoir \\(d\\) days after monitoring begins is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(W(d) = -24d^2 + 380d + 52{,}600\\),</p>
      <p>where \\(0 \\leq d \\leq 15\\).</p>
      <p>In this model, what does the value \\(52{,}600\\) represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The amount of water the reservoir gains during the first day</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The greatest amount of water predicted by the model</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The total change in the amount of stored water during the monitoring period</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The estimated amount of water in the reservoir when monitoring begins</span>
        </div>
      </div>`
    },

    {
      text: `<p>The number of packages processed at a shipping facility \\(h\\) hours after a new shift begins is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(P(h) = 65h^2 + 240h + 3{,}800\\),</p>
      <p>where \\(0 \\leq h \\leq 10\\).</p>
      <p>In this model, what does the value \\(3{,}800\\) represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The estimated number of packages processed at the beginning of the shift</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The increase in the number of packages processed during the first hour</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The number of packages processed at the end of the shift</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The average number of packages processed per hour during the shift</span>
        </div>
      </div>`
    },

    {
      text: `<p>The number of customers served at a restaurant \\(t\\) hours after it opens is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(C(t) = 48t^2 + 175t + 1{,}250\\),</p>
      <p>where</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(0 \\leq t \\leq 12\\).</p>
      <p>In this model, what does the value \\(1{,}250\\) represent?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>The average number of customers served per hour during the day</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>The number of customers served at the end of the day</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>The estimated number of customers served when the restaurant opens</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>The increase in the number of customers served during the first hour</span>
        </div>
      </div>`
    },
  ],
},

//Problem 5


{
  problem: `<p>The function \\(h\\) gives the height, in feet, of a basketball \\(s\\) seconds after it was thrown. Based on the function, what was the height, in feet, of the basketball at the moment it was thrown?</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(h(s) = -16\\left(s - \\frac{3}{4}\\right)^2 + 105\\)</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>\\(105\\)</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">B</span>
      <span>\\(96\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">C</span>
      <span>\\(99\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">D</span>
      <span>\\(114\\)</span>
    </div>
  </div>`,
  steps: [
    { text: "Type the function into Desmos", note: "", gif: "", video: "" },
    { text: "Find the value of the function when the input is 0", note: "", gif: "", video: "" },
  ],

  guidedProblem: `<p>The function \\(d\\) gives the height, in feet, of a diver above the surface of a pool \\(s\\) seconds after the diver jumped from a platform. Based on the function, what was the height, in feet, of the diver at the moment the diver jumped?</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(d(s) = -16\\left(s - \\frac{1}{2}\\right)^2 + 42\\)</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>\\(34\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">B</span>
      <span>\\(42\\)</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">C</span>
      <span>\\(38\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">D</span>
      <span>\\(46\\)</span>
    </div>
  </div>`,
  guidedSteps: [
    "Type the function into Desmos",
    "Find the value of the function when the input is 0"
  ],
  guidedAnswer: "The Answer is C",
  guidedScreenshot: "",

  practice: [
    {
      text: `<p>The function \\(p\\) gives the height, in feet, of a package above the ground \\(r\\) seconds after it was released from a moving drone. Based on the function, what was the height, in feet, of the package at the moment it was released?</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(p(r) = -16\\left(r - \\frac{5}{4}\\right)^2 + 150\\)</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(125\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(134\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(150\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(175\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The function \\(g\\) gives the height, in feet, of a volleyball above the ground \\(t\\) seconds after it was served. Based on the function, what was the height, in feet, of the volleyball at the moment it was served?</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(g(t) = -16\\left(t - \\frac{1}{4}\\right)^2 + 10\\)</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(10\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(8\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(11\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(9\\)</span>
        </div>
      </div>`
    },
  ],

  additionalPractice: [
    {
      text: `<p>The amount of water, in gallons, in a storage tank \\(t\\) hours after a pump is activated is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(W(t) = -\\frac{3}{8}t^2 + \\frac{11}{4}t + \\frac{47}{6}\\).</p>
      <p>How many gallons of water were in the tank when the pump was activated?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(\\frac{11}{4}\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(\\frac{47}{6}\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(\\frac{65}{8}\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(\\frac{3}{8}\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The temperature, in degrees Celsius, of a chemical solution \\(m\\) minutes after a heating process begins is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(T(m) = 0.0378m^2 + 2.058m + 18.475\\).</p>
      <p>What was the temperature of the solution at the start of the heating process?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(2.685^\\circ\\text{C}\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(21.197^\\circ\\text{C}\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(0.037^\\circ\\text{C}\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(18.475^\\circ\\text{C}\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The number of thousands of subscribers to an online service \\(y\\) years after a marketing campaign begins is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(S(y) = -4.2y^2 + 31.6y + 84\\).</p>
      <p>According to the model, how many thousand subscribers did the service have when the marketing campaign began?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(84\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(31.6\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(115.6\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(53.4\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The distance, in miles, a research vessel is from a monitoring station \\(h\\) hours after tracking begins is modeled by</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(D(h) = 12.75h^2 - 46.8h + 137.5\\).</p>
      <p>How far was the research vessel from the monitoring station when tracking began?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(46.8\\) miles</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(90.7\\) miles</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(137.5\\) miles</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(12.75\\) miles</span>
        </div>
      </div>`
    },
  ],
},

//Problem 8


{
  problem: `<p>The function</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(h(x) = 2x^2 + 7x - 4\\)</p>
  <p>is transformed into</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(k(x) = 3h(x) - 8\\).</p>
  <p>What is the \\(y\\)-coordinate of the point where the graph of \\(k\\) intersects the \\(y\\)-axis?</p>
  <div class="mc-choices">
    <div class="mc-choice correct">
      <span class="mc-label">A</span>
      <span>\\(-20\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">B</span>
      <span>\\(-12\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">C</span>
      <span>\\(-8\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">D</span>
      <span>\\(4\\)</span>
    </div>
  </div>`,
  steps: [
    { text: "Type the original function into Desmos", note: "", gif: "", video: "" },
    { text: "Apply the transformation and find the y-intercept of the new function", note: "", gif: "", video: "" },
  ],

  guidedProblem: `<p>The function</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(f(x) = -x^2 + 6x + 5\\)</p>
  <p>is transformed into</p>
  <p style="text-align:center;margin-bottom:12px">
    \\(g(x) = 2f(x) + 10\\).</p>
  <p>What is the \\(y\\)-coordinate of the point where the graph of \\(g\\) intersects the \\(y\\)-axis?</p>
  <div class="mc-choices">
    <div class="mc-choice">
      <span class="mc-label">A</span>
      <span>\\(0\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">B</span>
      <span>\\(10\\)</span>
    </div>
    <div class="mc-choice correct">
      <span class="mc-label">C</span>
      <span>\\(20\\)</span>
    </div>
    <div class="mc-choice">
      <span class="mc-label">D</span>
      <span>\\(30\\)</span>
    </div>
  </div>`,
  guidedSteps: [
    "Type the original function into Desmos",
    "Apply the transformation and find the y-intercept of the new function"
  ],
  guidedAnswer: "The Answer is C",
  guidedScreenshot: "",

  practice: [
    {
      text: `<p>The function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(p(x) = 3x^2 - 4x + 1\\)</p>
      <p>is transformed into</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(q(x) = -2p(x) + 6\\).</p>
      <p>What is the \\(y\\)-coordinate of the point where the graph of \\(q\\) intersects the \\(y\\)-axis?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(-8\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(2\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(4\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(8\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(r(x) = x^2 + 5x - 3\\)</p>
      <p>is transformed into</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(s(x) = 4r(x) - 12\\).</p>
      <p>What is the \\(y\\)-coordinate of the point where the graph of \\(s\\) intersects the \\(y\\)-axis?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(-24\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(-12\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(12\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(28\\)</span>
        </div>
      </div>`
    },
  ],

  additionalPractice: [
    {
      text: `<p>The function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(m(x) = -4x^2 + 8x + 6\\)</p>
      <p>is transformed into</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(n(x) = \\frac{1}{2}m(x) - 5\\).</p>
      <p>What is the \\(y\\)-coordinate of the point where the graph of \\(n\\) intersects the \\(y\\)-axis?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(-2\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(1\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(3\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(8\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(t(x) = 5x^2 - 10x - 7\\)</p>
      <p>is transformed into</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(u(x) = -3t(x) + 9\\).</p>
      <p>What is the \\(y\\)-coordinate of the point where the graph of \\(u\\) intersects the \\(y\\)-axis?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(-30\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(-21\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(30\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(21\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(v(x) = x^2 - 8x + 12\\)</p>
      <p>is transformed into</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(w(x) = 5v(x) - 20\\).</p>
      <p>What is the \\(y\\)-coordinate of the point where the graph of \\(w\\) intersects the \\(y\\)-axis?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(-140\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(-60\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(40\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(60\\)</span>
        </div>
      </div>`
    },

    {
      text: `<p>The function</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(d(x) = -2x^2 + 3x + 11\\)</p>
      <p>is transformed into</p>
      <p style="text-align:center;margin-bottom:12px">
        \\(e(x) = -4d(x) + 16\\).</p>
      <p>What is the \\(y\\)-coordinate of the point where the graph of \\(e\\) intersects the \\(y\\)-axis?</p>
      <div class="mc-choices">
        <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>\\(-28\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>\\(-12\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(12\\)</span>
        </div>
        <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\(60\\)</span>
        </div>
      </div>`
    },
  ],
},
  ],
};

export default yIntercept;