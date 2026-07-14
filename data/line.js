const line = {
    icon: "ti-line",
    name: "Line",
    meta: "",
 
    workedProblems: [

    
 
      // ── Problem 1 ──
      {
        problem: `
          <p style="text-align:center;font-size:17px;margin-bottom:12px">$$7x - 4y = -84$$</p>
          <p>For the given equation, which table gives three values of x and their corresponding values of y?</p>
          <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <table class="xy-table">
                <tr><td>x</td><td>0</td><td>4</td><td>8</td></tr>
                <tr><td>y</td><td>21</td><td>28</td><td>35</td></tr>
              </table>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <table class="xy-table">
                <tr><td>x</td><td>0</td><td>4</td><td>8</td></tr>
                <tr><td>y</td><td>35</td><td>28</td><td>21</td></tr>
              </table>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <table class="xy-table">
                <tr><td>x</td><td>21</td><td>28</td><td>35</td></tr>
                <tr><td>y</td><td>0</td><td>4</td><td>8</td></tr>
              </table>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <table class="xy-table">
                <tr><td>x</td><td>21</td><td>28</td><td>35</td></tr>
                <tr><td>y</td><td>8</td><td>4</td><td>0</td></tr>
              </table>
            </div>
          </div>`,
        steps: {
        "Approach 1": [
            { text: "Type given equation into Desmos", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1781657975/line-step1better_psmzc4.mov" },
            { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1781659746/line-step2_ddtjf3.mov" },
            { text: "Input the x and y values from one of the answer choices into the table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1781659747/line-step3_r3s5lm.mov" },
            { text: "Click Add Regression Symbol", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1781659747/line-step4_tohq3u.mov" },
            { text: "Compare each answer choice's line with the original equation's line. The one that perfectly overlaps is the answer", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781659748/line-step5_zorh6t.mov" },
            ], 
        "Approach 2": [  
            { text: "Type 'table' into Desmos", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
            { text: "On scratch paper, rewrite the equation from standard form to slope-intercept form. Type the slope-intercept form of the equation into the y-column of the table, as \\(\\frac{7}{4}x_1 + 21\\)", note: 'Standard form is \\(Ax+By=C\\) and slope-intercept form is \\(y=mx+b\\), where \\(m\\) is the slope and \\(b\\) is the y-intercept', video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782839337/line1ap2-step2_kxhzbp.mov"},
            { text: "Notice that all the answer choices use the same x-values, so plug them into the x-column of the table. Notice how the y-values automatically fill in. The answer choice that has the same y values is the correct answer", video:"https://res.cloudinary.com/dnyaptowc/video/upload/v1782839337/line1ap2-step3_nmi3gi.mov"}
            ] 
        }, 
        guidedProblem: "[Guided problem for question type 1 — paste a similar table-matching problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1 for this question type]", setup: "[Desmos setup and answer]" },
          { text: "[Practice problem 2]", setup: "[Desmos setup and answer]" },
          { text: "[Practice problem 3]", setup: "[Desmos setup and answer]" },
          { text: "[Practice problem 4]", setup: "[Desmos setup and answer]" },
        ]
      },
 
      // ── Problem 2 ──
      {
        problem: `<p>The y-intercept of the graph of \\(5x + 2y = -18\\) in the xy-plane is \\((0, y)\\). What is the value of \\(y\\)?</p>`,
        steps: [
          { text: "Type equation into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781702841/line2-step1_gf8ooi.mov" },
          { text: "Visually see y-intercept on the graph", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781702841/line2-step2_e5yxsx.mov" },
        ],
        guidedProblem: "[Guided problem for question type 2 — paste a similar y-intercept problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1 for this question type]", setup: "[Desmos setup and answer]" },
          { text: "[Practice problem 2]", setup: "[Desmos setup and answer]" },
          { text: "[Practice problem 3]", setup: "[Desmos setup and answer]" },
          { text: "[Practice problem 4]", setup: "[Desmos setup and answer]" },
        ]
      },
 
      // ── Problem 3 ──
      {
        problem: `<p>The function \\(f\\) is defined by \\(f(x)=9x-301\\) if the point \\((k, 2k)\\) lies on the graph of \\(y=f(x)\\), where \\(k\\) is a constant. What is the value of \\(k\\)?</p>`,
        steps: [
          { text: "Type the given function into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781720246/line3-step1_g7ioun.mov" },
          { text: "Type the point plugged in f(k)~2k", note: "Using = would define the variable, we want to <i>approximate</i> what k is so use ~.", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781720243/line3-step2_knqyjn.mov" },
        ],
        guidedProblem: "[Guided problem for question type 3 — paste a similar constant-finding problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 4 ──
      {
        problem: `
    <table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>x</td><td>h(x)</td></tr>
      <tr><td>4</td><td>17</td></tr>
      <tr><td>6</td><td>23</td></tr>
    </table>
    <p>The table shows two values of \\(x\\) and their corresponding values of \\(h(x)\\) for the linear function \\(h\\). Which equation defines \\(h\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( h(x) = \\frac{1}{3}x - \\frac{5}{3} \\)</span>
      </div>
      <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( h(x) = 3x + 5 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( h(x) = 4x + 17 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( h(x) = 6x + 23 \\)</span>
      </div>
    </div>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input values from data table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730558/line4-step2_vaizpy.mov" },
          { text: "Click Add Regression", note: "This gives you the equation of the line for the line of best fit, which is the answer.", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730558/line4-step3_ebjiwj.mov" },
        ],
        guidedProblem: `<table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>x</td><td>y</td></tr>
      <tr><td>0</td><td>95</td></tr>
      <tr><td>1</td><td>105</td></tr>
      <tr><td>2</td><td>115</td></tr>
    </table>
    <p>For a linear relationship between \\(x\\) and \\(y\\), the table gives three values of \\(x\\) and their corresponding values of \\(y\\). Which equation represents their relationship?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = 10x + 95 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = x + 105 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = x + 10 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = 10x \\)</span>
      </div>
    </div>`,
        guidedSteps: ["Step 1. Type 'table' into Desmos", "Step 2. Input values from data table", "Step 3. Click Add Regression"],
        guidedAnswer: "The answer is A.", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782494373/line4-gp_fxn9gp.png",
        practice: [
          { text: `<table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>x</td><td>y</td></tr>
      <tr><td>0</td><td>22</td></tr>
      <tr><td>1</td><td>23</td></tr>
      <tr><td>2</td><td>24</td></tr>
    </table>
    <p>The table shows three values of \\(x\\) and their corresponding values of \\(y\\). There is a linear relationship \\(x\\) and \\(y\\). Which of the following equations represents this relationship?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = x + 22 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = 24x \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = 24x + 2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = 22x \\)</span>
      </div>
    </div>`, setup: "The Answer is A", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782497384/line4-pp1_xinczw.png" },
          { text: `<table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>Area (square feet)</td><td>Water (gallons)</td></tr>
      <tr><td>2520</td><td>4536</td></tr>
      <tr><td>3780</td><td>6804</td></tr>
      <tr><td>5040</td><td>9072</td></tr>
    </table>
    <p>The roofs on the building of a public garden are designed to allow water to drain into the garden. The table shows the relationship between the area \\(x\\), in square feet, of a roof and the amount of water \\(f(x)\\), in gallons, drained from the roof into the garden over a certain period of time. Which equation could define \\(f\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = 0.6x \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = 1.8x \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = 2268x \\)</span>
      </div>
    </div>`, setup: "The Answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782497587/line4-pp2_pratjw.png" },
        ]
      },
 
      // ── Problem 5 ──
      {
        problem: `
    <table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>x</td><td>g(x)</td></tr>
      <tr><td>1</td><td>46</td></tr>
      <tr><td>2</td><td>43</td></tr>
      <tr><td>3</td><td>40</td></tr>
      <tr><td>4</td><td>37</td></tr>
    </table>
    <p>For the linear function \\(g\\), the table shows four values of \\(x\\) and their corresponding values of \\(g(x)\\). The function can be written as \\(g(x)=mx+b\\), where \\(m\\) and \\(b\\) are constants. What is the value of \\(b\\)?</p>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input values from data table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781899256/line5-step2_fvd1uu.mov" },
          { text: "Click Add Regression", note: "This gives you the equation of the line for the line of best fit, you can see the y-intercept on the equation or find it on the graph.", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781899257/line5-step3_jg2fd9.mov" },
        ],
        guidedProblem: "[Guided problem for question type 5 — paste a similar b-value problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 6 ──
      {
        problem: `
          <p>The graph of the linear function f is shown, where \\(y = f(x)\\). Which equation defines f?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( f(x) = \\frac{3}{7}x - 5 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( f(x) = \\frac{7}{3}x - 5 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( f(x) = -\\frac{3}{7}x - 5 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( f(x) = -\\frac{7}{3}x - 5 \\)</span>
            </div>
          </div>`,
        graph: {
          expressions: [
            { latex: "(0, -5)", color: "#1a1a1a" },
            { latex: "(7, -8)", color: "#1a1a1a" },
            { latex: "y = -\\frac{3}{7}x - 5", color: "#1a1a1a" },
          ],
          bounds: { left: -2, right: 12, bottom: -11, top: 2 }
        },
        steps: [
          { text: "The slope of the graph is negative, so immediately eliminate answer choice A & B. Then, graph answer choice C & D in Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781798224/line6-step1_pkmfuh.mov" },
          { text: "Visually compare and see which answer choice best matches", note: "Use the two points shown in the graph as comparison points", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781798224/line6-step2_ejul2d.mov" },
        ],
        guidedGraph: {
          expressions: [
            { latex: "y = -4x - 2", color: "#1a1a1a"}, 
            { latex: "(-1, 2)", color: "#1a1a1a"},
            { latex: "(0, -2)", color: "#1a1a1a"}
          ],
          bounds: { left: -4, right: 4, bottom: -6 , top: 6}
        },
        guidedProblem: `
          <p>The graph of y = f(x)-11 is shown. Which equation defines the linear function \\(f\\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( f(x) = -15x - 11 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( f(x) = -4x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( f(x) = -15x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( f(x) = -4x-11 \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type 'table' into Desmos", "Input two points shown on the graph into the table", "Add regression to determine y", "Based on the slope of y, eliminate two answer choices. Then, in a new line declare type out the linear equation given + 11 to find F. If unsure, graph the two remaining answer choices to see which overlaps"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782501914/line6-gp_vh8ewk.png",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 7 ──
      {
        problem: `<p>The graph of the line in the xy-plane passes through the point \\((1,8)\\) and crosses the x-axis at the point \\((7,0)\\). The line crosses the x-axis at the point \\((0, b)\\). What is the value of \\(b\\)?</p>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input points as values into the table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781798773/line7-step1_uqd5vh.mov" },
          { text: "Click Add Regression. This gives you the equation for the line of best fit, which gives you the y-intercept", note: "In this case, you see that the y-intercept is 9.3333, but since 0.333 = 1/3, you can convert this to the mixed number 9 1/3. Convert this mixed number to an improper fraction to get your answer.", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781798773/line7-step2_knqipc.mov" },
        ],
        guidedProblem: "[Guided problem for question type 8 — paste a similar two-points problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 8 ──
      {
        problem: `
          <p>The graph of the linear function f is shown, where \\(y = f(x)\\). Which equation defines f?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 7x - 8y = 189\\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 8x - 7y = 189 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 49x - 56y = 189 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 56x - 49y = 189 \\)</span>
            </div>
          </div>`,
        graph: {
          expressions: [
            { latex: "(-3, -6)", color: "#1a1a1a" },
            { latex: "(5, 1)", color: "#1a1a1a" },
            { latex: "y = 0.875x - 3.375", color: "#1a1a1a" },
          ],
          bounds: { left: -6, right: 6, bottom: -7, top: 7 }
        },
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input points as values in the table", note: "In this case, use the points (-3, -6) and (5, 1)", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781882292/line8-step2_b7ybbc.mov" },
          { text: "Click Add Regression, which gives you the line of best fit and graphs it", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781882292/line8-step3_dtlslt.mov" },
          { text: "Input each answer choice and see which one perfectly overlaps the line of best fit graphed from the table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781882313/line8-step4_gfy9ak.mov" },
        ],
        guidedGraph: {
          expressions: [
            { latex: "y = (5/3)x - 5", color: "#1a1a1a"}, 
            { latex: "(0, -5)", color: "#1a1a1a"},
            { latex: "(3, 0)", color: "#1a1a1a"}
          ],
          bounds: { left: -2, right: 9, bottom: -9 , top: 1}
        },
        guidedProblem: `
          <p>What is an equation of the graph shown?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 5x - 3y = 15\\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 5x - 3y = -15 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 3x - 5y = 15 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3x - 5y = -15 \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type 'table' into Desmos", "Input points as values in the table, use at least 2 points", "Click Add Regression", "Input each answer choice and see which one perfectly overlaps the line of best fit from the table"],
        guidedAnswer: "The Answer is A", guidedScreenshot:"https://res.cloudinary.com/dnyaptowc/image/upload/v1782501914/line8-gp_teysx9.png",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 9 ──
      {
        problem: `<p>A line in the xy-plane passes through the points \\((7,1)\\),\\((0,4)\\), and \\((c,0)\\). What is the value of \\(c\\)?</p>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input points as values into the table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781892285/line9-step2_bqdrro.mov" },
          { text: "Click Add Regression. This gives you the equation for the line of best fit. This question is asking you for the x-intercept, which you can find visually on the graph", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781892453/line9-step3_w3zgee.mov" },
        ],
        guidedProblem: "[Guided problem for question type 10 — paste a similar x-intercept problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 10 ──
      {
        problem: `
    <table class="xy-table" style="margin:0 auto 16px auto">
      <tr><td>x</td><td>f(x)</td></tr>
      <tr><td>-37</td><td>4</td></tr>
      <tr><td>-9</td><td>0</td></tr>
      <tr><td>33</td><td>6</td></tr>
    </table>
    <p>The table shows three values of \\(x\\) and the corresponding values of \\(f(x)\\), where \\(f(x) = \\frac{kx+45}{x+2}\\) and \\(k\\) is a constant. What is the value of \\(k\\)?</p>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input values from data table", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781893494/line10-step2_odsn8e.mov" },
          { text: "Click Add Regression. This defaults to linear regression, however, the line does <b>not</b> fit all of the points. Change it from linear regression to quadratic regression - now you should see the parabola fit all of the points.", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781893497/line10-step3_tg9hws.mov" },
          { text: "Declare the given equation as a function in a new line", note: "Type f(x) = the equation given from the quadratic regression", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781893493/line10-step4_paqirq.mov" },
          { text: "Now use ~ to approximate k. Type \\(f(x_1)\\) ~ \\(\\frac{kx_1+45}{x_1+2}\\) and this will return the value of k", note: "You NEED to type it as \\(x_1\\), this will return an error if you only input x", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781893494/line10-step5_dmr5n3.mov" },
        ],
        guidedProblem: "[Guided problem for question type 11 — paste a similar rational function / constant problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]", "[Step 5]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 11 ──
      {
        problem: `<p>A linear model estimates the population of a city from \\(1993\\) to \\(2017\\). The model estimates the population was \\(52\\) thousand in \\(1993\\) and \\(219\\) thousand in \\(2013\\), and \\(x\\) thousand in \\(2017\\). To the nearest whole number, what is the value of \\(x\\)?</p>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input points as values into the table", note: "In this case, the points are (1993, 52) and (2013, 219)", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781894460/line11-step2_p3f4yx.mov" },
          { text: "Click Add Regression. This gives you the equation for the line of best fit", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781894460/line11-step3_albwgm.mov" },
          { text: "Declare the given equation as a function in a new line", note: "Type f(x) = the equation given from the linear regression", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781894444/line11-step4_pty8qm.mov" },
          { text: "Type \\(f(2017)\\) which gives you the answer 252.4, but since the question asked to round to the nearest whole number, the answer is 252", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781894450/line11-step5_vldeqa.mov" },
        ],
        guidedProblem: '<p>A linear model estimates the population of a city from \\(1995\\) to \\(2019\\). The model estimates the population was \\(55\\) thousand in \\(1995\\), \\(217\\) thousand in \\(2015\\), and \\(x\\) thousand in \\(2019\\). To the nearest whole number, what is the value of \\(x\\)?',
        guidedSteps: ["Type 'table' into Desmos", "Input points as values into the table", "Click Add Regression. This gives you the equation for the line of best fit", "Declare the given equation as a function in a new line", "Plug in 2019 into the function"],
        guidedAnswer: "The Answer is 249", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782502324/line11-gp_vizue9.png",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 12 ──
      {
        problem: `<p>The scatterplot shows 5 measurements of the body length, in centimeters (cm), of a New Zealand fur seal from an age of 1 year to 6 years old. A line of best fit is also shown. For a New Zealand fur seal at an age of 3 years old, what is the body length predicted by the line of best fit, to the nearest 10 cm?</p>`,
        graph: {
          expressions: [
            { latex: "(1, 80)", color: "#1a1a1a" },
            { latex: "(2, 103)", color: "#1a1a1a" },
            { latex: "(4, 100)", color: "#1a1a1a" },
            { latex: "(5, 120)", color: "#1a1a1a" },
            { latex: "(6, 124)", color: "#1a1a1a" },
            { latex: "y = 9.5x + 68", color: "#1a1a1a" },
          ],
          bounds: { left: -1, right: 7, bottom: 0, top: 150 }
        },
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input points as values in the table", note: "Do not use points from the line of best fit, choose individual points like (1, 80) and (6,124)", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781895292/line12-step2_u6hxht.mov" },
          { text: "Click Add Regression, which gives you the line of best fit", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781895289/line12-step3_r69xbq.mov" },
          { text: "Declare the given equation as a function in a new line", note: "Type f(x) = the equation given from the linear regression", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781895291/line12-step4_rzqxmw.mov" },
          { text: "Type \\(f(3)\\) which gives you the answer 97.6, but since the question asked to round to nearest cm, the answer is 100", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781895292/line12-step5_ivetds.mov" },
        ],
        guidedProblem: "[Guided problem for question type 13 — paste a similar scatterplot / line of best fit prediction problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]", "[Step 5]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
      // ── Problem 13 ──
      {
        problem: `
          <p>Which of the following is closest to the slope of the line of best fit shown?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( -11.19 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( -0.84 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 0.84 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 11.19 \\)</span>
            </div>
          </div>`,
        graph: {
          expressions: [
            { latex: "(1, 10.4)", color: "#1a1a1a" },
            { latex: "(2, 9.8)", color: "#1a1a1a" },
            { latex: "(4, 7.9)", color: "#1a1a1a" },
            { latex: "(5, 7)", color: "#1a1a1a" },
            { latex: "(6, 6)", color: "#1a1a1a" },
            { latex: "(7, 5.5)", color: "#1a1a1a" },
            { latex: "y = -0.84x + 11.2", color: "#1a1a1a" },
          ],
          bounds: { left: -1, right: 9, bottom: 0, top: 16 }
        },
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781730557/line4-step1_lqdgnm.mov" },
          { text: "Input points as values in the table", note: "Do not use points from the line of best fit, choose individual points like (5,7) and (6,6)", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781896752/line13-step2_qky9nh.mov" },
          { text: "Click Add Regression, which gives you the line of best fit. This gives you the slope, so choose the answer choice that is closest to the slope", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/q_auto/f_auto/v1781896754/line13-step3_wnuhcy.mov" },
        ],
        guidedProblem: "[Guided problem for question type 14 — paste a similar slope-identification problem here]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Practice problem 1]", setup: "[Setup]" },
          { text: "[Practice problem 2]", setup: "[Setup]" },
        ]
      },
 
    ],
}

export default line;