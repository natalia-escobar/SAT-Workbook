const parabola = {
  icon: "ti-line",
  name: "Parabola",
  meta: "",
  workedProblems: [
    // Problem 1
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = -0.004125x^2 + 16.842x - 17420\\)</p>
          <p>A planning committee at Beck College Prep is reviewing enrollment trends. The number of students expected to participate in September tutoring programs \\(f(x)\\) is estimated by the equation shown above, where \\(x\\) is the year. Using the model, determine the absolute change in the model's estimated enrollment between September \\(2021\\) and September \\(2022\\) to the nearest thousandth.</p>`,
        steps: [
          { text: "Declare the function into Desmos, exactly as it is shown in the question", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784124160/parabola1-step1_yq17rc.mov" },
          { text: "The question asks for the positive difference between \\(f(2022)\\) and \\(f(2021)\\), so type that into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784125469/parabola1-step2_hwpuf1.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(T(x) = -0.006x^2 + 24.3x - 24500\\)</p>
          <p>A landscaping company models the number of trees planted each year using the function \\(T(x)\\), where \\(x\\) represents a year. According to the model, what is the absolute change in the estimated number of trees planted from \\(2024\\) to \\(2026\\), to the nearest tenth?</p>`,
        guidedSteps: ["Declare the function into Desmos", "Find the positive difference between \\(T(2026)\\) and \\(T(2024)\\)"],
        guidedAnswer: "The Answer is 0", guidedAnswerValue: "0", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784125513/parabola1-gp_bvhpya.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(P(x) = -0.015x^2 + 60x - 59800\\)</p>
          <p>The monthly profit (in thousands of dollars) for a company is modeled by \\(P(x)\\), where \\(x\\) represents the year. By approximately how many thousand dollars does the model predict the monthly profit changes between \\(2027\\) and \\(2028\\)?</p>`, setup: "The Answer is 0.825", answer: "0.825", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784125513/parabola1-pp1_itdcwh.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(h(t) = 0.042t^2 + 3.6t + 12 \\)</p>
          <p>The average height of a species of plant is modeled by \\(h(t)\\), where \\(t\\) is measured in weeks. Between which two consecutive weeks is the greatest increase predicted?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>Weeks \\(3\\) and \\(4\\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>Weeks \\(4\\) and \\(5\\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>Weeks \\(5\\) and \\(6\\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">D</span>
              <span>Weeks \\(6\\) and \\(7\\)</span>
            </div>
          </div>`, setup: "The Answer is D", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784125515/parabola1-pp2_heehux.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(C(t) = 0.018t^2 - 1.24t + 56.8\\)</p>
          <p>A laboratory models the concentration of a chemical using the function \\(C(t)\\), where \\(t\\) is measured in hours. Which value is closest to the average rate of change of the concentration from \\(t = 8\\) to \\(t = 12\\)?</p>`, setup: "The Answer is \\(-0.88\\)", answer: "-0.88", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784125515/parabola1-pp3_m7lfv2.png" },
        ]
      },

      // Problem 2
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(4x(x-3) = 5\\)</p>
        <p>Which is one of the roots to the equation above?</p>
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( \\frac{3 - \\sqrt{16}}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( \\frac{-3 + \\sqrt{16}}{2}  \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( \\frac{3 - \\sqrt{14}}{2}  \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\(\\frac{-3 + \\sqrt{14}}{2} \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos. The \\(x\\)-value(s) where it crosses the \\(x\\)-axis is the solution", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784126575/parabola2-step1_lfbkaw.mov" },
          { text: "Type each answer choice into Desmos. The answer choice that is exactly the same as the \\(x\\)-value is the answer", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784126576/parabola2-step2_iqndme.mov" },
        ],
        guidedProblem: ``,
        guidedSteps: ["Type the expression into Desmos. The x-value(s) where it crosses the x-axis is the solution", "Type each answer choice into Desmos. Remember to note that the answer choices are the \\(k\\) values when plugging in."],
        guidedAnswer: "", guidedScreenshot: "",
        practice: [
          { text: ``, setup: "" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 3
      {
        problem: `If \\(196x^2 - 168x + 35 = 0\\), what is the value of \\(14x - 6\\), where \\(14x - 6 > 0\\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( - 1 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 0  \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 1 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 2 \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos. The \\(x\\)-values where it crosses the \\(x\\)-axis are two potential values for \\(x\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784127954/parabola3-step1_qlrj6s.mov" },
          { text: "Plug in both \\(x\\)-values, the one where \\(14x - 6 > 0\\) will give the correct value of \\(14x - 6\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784127955/parabola3-step2_nguhr4.mov" },
        ],
        guidedProblem: ``,
        guidedSteps: ["Type the expression into Desmos", "Type each answer choice into Desmos. The parabola that perfectly overlaps the given expression is the answer"],
        guidedAnswer: "", guidedScreenshot: "",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },
  
      // Problem 4
      {
        problem: `Which expression is equivalent to \\(4(x+\\frac{3}{2})(x-7) - 5x\\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4x^2 - 20x - 42 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 4x^2 - 27x - 42 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 - 31x - 42 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 20x - 21 \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784131954/parabola5-step1_thkq2v.mov" },
          { text: "Type each answer choice into Desmos. The parabola that perfectly overlaps the given expression is the answer", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784131955/parabola5-step2_elrgcu.mov" },
        ],
        guidedProblem: `Which expression is equivalent to \\(3(x-\\frac{5}{2})(x+4) + 7x\\)?
        <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 3x^2 + \\frac{23}{2}x - 30 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 3x^2 + \\frac{15}{2}x - 30 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 3x^2 + \\frac{23}{2}x  - 15 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3x^2 + \\frac{15}{2}x - 15 \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the expression into Desmos", "Type each answer choice into Desmos. The parabola that perfectly overlaps the given expression is the answer"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "", 
        guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784133239/parabola5-gp_pxpitn.png",
        practice: [
          { text: `Which expression is equivalent to \\(5(x - 6)(x + \\frac{1}{2}) - 4(x-3) \\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 5x^2 - \\frac{67}{2}x - 3 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 5x^2 - \\frac{63}{2}x - 3 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 5x^2 - \\frac{63}{2}x  + 12 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 5x^2 - \\frac{67}{2}x + 12 \\)</span>
            </div>
          </div>`, setup: "The Answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784133242/parabola5-pp1_irg9tr.png" },
          { text: `Which expression is equivalent to \\(4(x - \\frac{3}{2})^2 + 5 \\)?
        <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 4x^2 - 12x + 14 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 4x^2 -12x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 - 6x  + 14 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 6x + 9 \\)</span>
            </div>
          </div>`, setup: "The Answer is A", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784133245/parabola5-pp2_bqsypm.png" },
          { text: `Which expression is equivalent to \\(3(x - \\frac{1}{2})(x + 6) - 2(x-9) \\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 3x^2 + \\frac{33}{2}x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 3x^2 + \\frac{29}{2}x - 9 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 3x^2 + \\frac{29}{2}x  + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3x^2 + \\frac{25}{2}x - 9 \\)</span>
            </div>
          </div>`, setup: "The Answer is C", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784133247/parabola5-pp3_pxxvmx.png" },
        ]
      },

      // Problem 5
      {
        problem: `Which equation is NOT an equivalent form of \\(g(t)=40t² -8t-8\\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( g(t) = 8(5t^2-t-1) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( g(t) = 40(t-\\frac{1 + \\sqrt{21}}{10})(t-\\frac{1 - \\sqrt{21}}{10}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( g(t) = 40(t - \\frac{1}{10})^2-\\frac{42}{5} \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">D</span>
              <span>\\( g(t) = 40(t + \\frac{1}{10})^2 - frac{42}{5} \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "" },
          { text: "Type each answer choice into Desmos. The parabola that perfectly overlaps the given expression is the answer", note: "", gif: "", video: "" },
        ],
        guidedProblem: `Which equation is NOT an equivalent form of \\( f(x)=18x² -36x-90 \\)?
        <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( f(x) = 18(x^2 - 2x - 5) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( f(x) = 18(x - 1)^2 - 108 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( f(x) = 18(x + 1)^2 - 72 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( f(x) = 18(x - (1 + \\sqrt{6}))(x - (1 - \\sqrt{6})) \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the expression into Desmos", "Type each answer choice into Desmos. The parabola that perfectly overlaps the given expression is the answer"],
        guidedAnswer: "", guidedScreenshot: "",
        practice: [
          { text: ``
            , setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },
 
      // Problem 6
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(m(x) = \\frac{2}{5}x + 9 \\)<br><br>
          \\(n(x) = 3x - 4\\)
        </p>
        <p>The functions m and n are defined by the equations shown. Which expression is equivalent to \\(m(x) \\cdot n(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( \\frac{6}{5}x^2 - 36 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{6}{5}x^2 + 23x - 36 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{6}{5}x^2 + \\frac{127}{5}x - 36 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{6}{5}x^2 + \\frac{127}{5}x + 36 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type in \\(m(x)\\) and \\(n(x)\\) into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784138113/parabola6-step1_jubjg5.mov" },
          { text: "Type in \\(m(x) \\cdot n(x)\\)", note: "To avoid confusion, only graph this, remove m(x) and n(x) from being shown on the graph", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784138114/parabola6-step2_gophie.mov" },
          { text: "Type each answer choice, whichever one perfectly overlaps \\(m(x) \\cdot n(x)\\) is the answer", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784138118/parabola6-step3_viq3op.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = 5 - \\frac{2}{3}x\\)<br><br>
          \\(g(x) = 4x + 1 \\)
        </p>
        <p>The functions f and g are defined by the equations shown. Which expression is equivalent to \\(f(x) \\cdot g(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -\\frac{8}{3}x^2 + \\frac{58}{3}x - 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( -\\frac{8}{3}x^2 + \\frac{55}{3}x + 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{8}{3}x^2 + \\frac{58}{3}x + 5 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( -\\frac{8}{3}x^2 + \\frac{58}{3}x + 5 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type in \\(f(x)\\) and \\(g(x)\\) into Desmos", "Type in \\(f(x) \\cdot g(x)\\)", "Type each answer choice, whichever one perfectly overlaps \\(f(x) \\cdot g(x)\\) is the answer"],
        guidedAnswer: "The Answer is D", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784138107/parabola6-gp_i95vza.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(p(x) = \\frac{3}{4}x - 8 \\)<br><br>
          \\(q(x) = 2x - \\frac{5}{3} \\)
        </p>
        <p>The functions p and q are defined by the equations shown. Which expression is equivalent to \\(p(x) \\cdot q(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( \\frac{3}{2}x^2 - \\frac{69}{4}x + \\frac{40}{3} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{3}{2}x^2 - \\frac{73}{4}x + \\frac{40}{3} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{3}{2}x^2 - \\frac{69}{4}x - \\frac{40}{3} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -\\frac{3}{2}x^2 - \\frac{69}{4}x + \\frac{40}{3} \\)</span>
        </div>
        </div>`, setup: "The Answer is A", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784138108/parabola6-pp1_tiabzz.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(u(x) -\\frac{1}{2}x = 9 \\) <br><br>
          \\(v(x) + 5 = 2x \\)
        </p>
        <p>The functions u and v are defined by the equations shown. Which expression is equivalent to \\(u(x) \\cdot v(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( x^2 + \\frac{31}{2}x + 45 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x^2 + \\frac{13}{2}x - 45 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( x^2 + \\frac{31}{2}x - 45 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2x^2 + \\frac{31}{2}x^2 - 45 \\)</span>
        </div>
        </div>`, setup: "The Answer is C", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784138111/parabola6-pp2_bmbvzt.png" },
        ]
      },
 
      // Problem 7
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = 12x^2 - 84x + 155\\)
        </p>
        <p>The function \\(f(x)\\) models the average score gap between a student's current SAT Math score and a target score. For what value \\(x\\) does \\(f(x)\\) reach its minimum?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 3.5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 12 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type the given equation into Desmos. You can find the minimum visually on the graph", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784139931/parabola7-step1_nxbjoj.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = -2x^2 + 6x - 13\\)
        </p>
        <p>The depth of water is modeled by \\(f(x)\\), where \\(x\\) represents the number of hours after pumping begins. What is the number of hours that the greatest depth is predicted by the model?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -13 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( -8.5 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( 1.5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 26 \\)</span>
        </div>
        </div>`, 
        guidedSteps: ["Type the given equation into Desmos. You can find the maximum visually on the graph"],
        guidedAnswer: "The Answer is C", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784139923/parabola7-gp_c8q7lm.png",
        practice: [
          { text: `<p>For the quadratic function \\(f(x) = 6x^2 - 48x + 107\\), which value of \\(x\\) is associated with the minimum value of the function?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 4 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 11 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 24 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 48 \\)</span>
        </div>
        </div>`, setup: "The Answer is A", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784139925/parabola7-pp1_ugmi2u.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(M(x) = 6(x - 3)(x - 11) + 25\\)
        </p>
        <p>A manufacturing company models the average production cost by \\(M(x)\\), where \\(x\\) is the number of production cycles completed. For what value of \\(x\\) is the predicted production cost the least?</p>`, 
        setup: "The Answer is 7", answer:"7", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784139928/parabola7-pp2_qopig2.png" },
        ]
      },
 
      // Problem 8
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = x^2 - 10x + 9\\)
        </p>
        <p>Stella models a student’s grammar error count with the function \\(f(x)\\), where \\(x\\) is the number of grammar drills completed. Which of the following equivalent forms of the equation displays the minimum value of the function as a constant or coefficient?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( f(x) = x(x - 10) + 9 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( f(x) = (x-5)^2 - 16 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( f(x) = (x-1)(x - 9) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( f(x) = x^2 - 5(2x) + 9 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type the given function into Desmos. From the graph, you can find the minimum value", note: "The answer choice that includes the minimum value is the answer", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784142540/parabola8-step1_hwv7qm.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(R(x) = 2x^2 - 20x + 47\\)
        </p>
        <p>Marian models the average number of questions a student misses on weekly reading quizzes with the function, \\(R(x)\\), where \\(x\\) is the number of weeks since tutoring began. Which equivalent form of the equation displays the minimum predicted number of missed questions as a constant? </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( R(x) = 2(x - 5)(x - 5) - 6 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( R(x) = 2(x-5)^2 - 3 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( R(x) = x(2x - 20) + 47 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( R(x) = 2(x - 2)(x - 8) - 17 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type the given function into Desmos. From the graph, you can find the minimum value"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784142532/parabola8-gp_dziogs.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = -2x^2 + 12x + 8\\)
            </p>
                <p>Which of the following is an equivalent form of the equation of the graph shown above, from which the coordinates of the maximum point can be identified as constants in the equation?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( f(x) = -2(x + 3)^2 + 26 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( f(x) = -2(x - 3)^2 + 26 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( f(x) = -2(x - 0.6)(x - 6.6) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( f(x) = -2(x - 0.6)(x + 6.6) \\)</span>
            </div>
            </div>`, 
            graph: {
              expressions: [
                {latex: "y = -2x^2 + 12x + 8", color: "#1a1a1a"} 
              ], bounds: {left: - 6, right: 10 , bottom: -20 , top: 45}

          }, setup: "The correct answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784142535/parabola8-pp1_xtqfv7.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(g(x) = -3x^2 + 18x + 7\\)
            </p>
            <p>The function is defined by \\(g(x)\\). Which of the following equivalent forms of the equation displays the coordinates of the highest point as constants or coefficients? </p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( y = -3(x^2 - 6x) + 7 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( \\frac{1}{3}y - 10 = -(x - 3)^2 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( y - 34 = -3(x - 3)^2 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( y = -3x(x - 6) + 7 \\)</span>
            </div>
            </div>`
            , setup: "The correct answer is C", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784142538/parabola8-pp2_woxt1y.png" },
        ]
      },
 
      // Problem 9
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = 2x^2 - 20x + 61\\)
        </p>
        <p>The function \\(f\\) models a student's score gap from a target U.S. History EOC. A new model is defined by \\(g(x) = f(x+4)\\). What is the minimum value of \\(g(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 11 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 21 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 25 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 61 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type \\(f(x)\\) into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784144886/parabola9-step1_yfbhev.mov" },
          { text: "Type \\(g(x) = f(x+7)\\), you can visually see the minimum value from the graph produced", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784144886/parabola9-step1_yfbhev.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(h(x) = -2x^2 + 16x - 29\\)
        </p>
        <p>The function \\(h(x)\\) models a science experiment. A new function is defined by \\(k(x) = h(x + 3)\\). What is the maximum value of \\(k(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 1 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 3 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 29 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type \\(h(x)\\) into Desmos", "Type \\(k(x) = h(x+3)\\), you can visually see the maximum value from the graph produced"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784144877/parabola9-gp_s10vtl.png",
        practice: [
          { text: `The quadratic \\(t(x) = 2x^2 - 12x + 25 \\) is rewritten as \\(u(x) = t(x-1) + 4\\). What is the minimum value of \\(u(x)\\)?`, 
          setup: "The Answer is 11", answer: "11", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784144879/parabola9-pp1_zcvayy.png" },
          { text: `The function \\(r(x) = 5x^2 - 50x + 132 \\). A new function is \\(s(x) = r(x + 2) - 10\\). What is the y-value of the lowest point of \\(s(x)\\)?`, setup: "The Answer is -3", answer: "-3", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784144882/parabola9-pp2_weuxwf.png" },
        ]
      },
 
      // Problem 10
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(g(t) = 48t - 3t^2\\)
        </p>
        <p>Ingrid models the number of points a student earns above a baseline on a timed math section with \\(g(t)\\), where \\(t\\) is the number of completed review rounds. The function \\(h\\) is defined by \\(h(t) = g(t) - 5\\). Which expression represents the maximum value of \\(h(t)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( \\frac{48^2}{3*4} - 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{48^2}{3*4} + 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 5 - \\frac{48^2}{12} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (\\frac{48}{6})^2 - 5 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type \\(g(t)\\) into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784147899/parabola10-step1_a34mvn.mov" },
          { text: "Type \\(h(t) = g(t) - 5 \\) and from this, you can determine the minimum value", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784147902/parabola10-step2_fadt09.mov" },
          { text: "Plug in each answer choice. Pick the answer that matches the minimum value", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784147906/parabola10-step3_y7aalh.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(p(x) = 40x - 5x^2\\)
        </p>
        <p>Luis models the number extra questions a student answers correctly after x practice sessions with \\(p(x)\\). The function \\(q(x)\\) is defined by \\(q(x) = p(x + 2) + 7\\). Which expression represents the maximum value of \\(q(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\frac{40^2}{4*5} - 7 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( \\frac{40^2}{4*5} + 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (\\frac{40}{10})^2 + 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 7 - (\\frac{40}{20})^2 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type \\(p(x)\\) into Desmos", "Type \\(q(x) = p(x+ 2) + 7 \\) and from this, you can determine the minimum value", "Plug in each answer choice. Pick the answer that matches the minimum value"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784147881/parabola10-gp_zg0njk.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(p(x) = -4x^2 + 56x - 91\\)
        </p>
        <p>A tutoring center models the increase in a student's math score after attending review sessions with \\(p(x)\\), where \\(x\\) is the number of review sessions attended. A new model is defined by \\(q(x)\\) is defined by \\(q(x) = p(x) - 8\\). Which expression represents the maximum value of \\(q(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( \\frac{56^2}{4*4} - 91 - 8 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{56^2}{-4*4} - 91 - 8 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{56^2}{16} - 91 + 8 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (\\frac{56}{8})^2 - 91 - 8 \\)</span>
        </div>
        </div>`, setup: "The Answer is A", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784147887/parabola10-pp2_el4ure.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(v(m) = -4m^2 + 32m + 9\\)
        </p>
        <p>Ingrid models the number of points a student earns above a baseline on a timed math section with \\(v(m)\\). The function \\(w(m)\\) is defined by \\(w(m) = v(2m) - 3\\). Which expression represents the maximum value of \\(w(m)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -\\frac{(32 + 3)^2}{-4*4} + 9 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( -\\frac{(32 - 3)^2}{-4*4} + 9 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( -\\frac{32^2}{-4*4} + 9 - 3 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -\\frac{32^2}{-4*4} + 9 \\)</span>
        </div>
        </div>`, setup: "The Answer is C", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784147887/parabola10-pp2_el4ure.png" },
        ]
      },
 
      // Problem 11
      {
        problem: `The \\(y\\)-intercept of the graph \\( g(x) = \\frac{1}{4}(x - 6)^2 + 2\\) in the xy-plane is \\((0,y)\\). What is the value of \\(y\\)?`,
        steps: [
          { text: "Plug in \\(g(x)\\) into Desmos. You can determine the \\(y\\)-intercept by visually looking at the produced graph and see that it is 11", note: "", gif: "", answer: "11" , video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784151339/parabola11-step1_ltwuxv.mov" },
        ],
        guidedProblem: `The \\(y\\)-intercept of the graph \\(g(x) = -\\frac{3}{4}(x-8)^2 - 56\\) in the xy-plane is \\(0, g(0)\\). What is the value of the \\(g(0)\\)?`,
        guidedSteps: ["Plug in \\(z(x)\\). You can determine the y-intercept visually"],
        guidedAnswer: "The answer is -104", guidedAnswerValue:"-104", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784151277/parabola11-gp_fmnj5o.png",
        practice: [
          { text: `At a community science fair, the height \\(h\\), in feet, of a model rocket \\(t\\) after launch is modeled by \\(h(t) = -9t^2 + 72 \\). Based on the model, what was the height of the rocket at the moment it was launched??</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 0 \\) feet</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 9 \\) feet</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 63 \\) feet</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( 72 \\) feet</span>
            </div>
            </div>`
            , setup: "The Answer is D", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784151280/parabola11-pp1_sar5kk.png" },
          { text: `A firework is launched from a platform. Its height, \\(H\\), in meters, \\(t\\) seconds after launch is modeled by \\(H(t) = -4.9t^2 + 22.4t + 3.6 \\). What was the initial height, in meters, of the firework?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( -4.9 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 3.6 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 22.4 \\) </span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 26.0 \\)</span>
            </div>
            </div>`, setup: `The Answer is B`, screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784151284/parabola11-pp2_i1jlau.png"},
          { text: `The height, in centimeters, of a plant is modeled by \\(H(w) = -0.4w^2 + 6w + 14 \\), where \\(w\\) is the number of weeks after the plant was first measured. What was the height of the plant when the observations began?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 0 \\) cm </span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 6 \\) cm </span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( 14 \\) cm</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 20 \\) cm</span>
            </div>
            </div>`, setup: `The Answer is C`, screenshot:"https://res.cloudinary.com/dnyaptowc/image/upload/v1784151332/parabola11-pp3_vskha1.png"},
          { text: `The function \\(h(x) = 2x^2 + 7x - 4 \\) is transformed into \\(k(x) = 3h(x) - 8\\). What is the y-coordinate of the point where the graph of \\(k\\) intersects the y-axis?</p>
            <div class="mc-choices">
            <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\( -20 \\) </span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( -12 \\) </span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( -8 \\) </span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 4 \\) </span>
            </div>
            </div>`
            , setup: "The Answer is A", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784151335/parabola11-pp4_eroikg.png" }
            
        ]
      },
 
      // Problem 12
      {
        problem: `A parabolic function predicts the number of math practice problems a student solves during a tutoring session at Beck College Prep in terms of time, in minutes, after a tutor begins the teaching session. According to the function, the student had solved \\(0\\) problems at the start of the session and reached the most questions out of \\(200\\) problems \\(10\\) minutes after the session began. Based on the function, how many math problems did the student solve \\(6\\) minutes after the session began?`,
        steps: [
          { text: "Type \\(h = 10\\) and \\(k = 200\\) into Desmos, both on separate lines", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784154715/parabola12-step1_uxn4jp.mov" },
          { text: "Type \\(x_1 = 0\\) and \\(y_1 = 0\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784154718/parabola12-step2_b8s2ax.mov" },
          { text: "As you know the function is quadratic, you can use the vertex form of the quadratic function to determine the function, so type \\(y_1\\) ~ \\(a(x_1 - h)^2 + k\\) into Desmos. This gives you a, so now you know the function", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784154721/parabola12-step3_tbspfx.mov" },
          { text: "Declare the function in a new line, type \\(f(x) = a(x-h)^2+ k\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784154725/parabola12-step4_koqi7b.mov" },
          { text: "Plug 6 into the function by typing \\(f(6)\\) into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784154727/parabola12-step5_jngu0e.mov" },
        ],
        guidedProblem: "A parabolic function forecasts the number of diagnostic tests organized by Ingrid, the Beck College Prep proctor, depending on the number of student folders she prepares. When \\(5\\) folders are prepared, \\(150\\) diagnostics are ready. The model shows that the maximum number of diagnostics prepared is \\(200\\) when \\(10\\) folders are prepared. Based on the function, how many diagnostics are ready when 18 folders are prepared?",
        guidedSteps: [
          "Declare \\(h\\) and \\(k\\) into Desmos",
          "Declare \\(x_1\\) and \\(y_1\\) into Desmos",
          "Use the standard form of the quadratic function to determine a, the only missing parameter",
          "Now that you have a, declare the quadratic function in a new line",
          "Plug in \\(18\\) to the quadratic function and it will return the answer"
        ],
        guidedAnswer: "The Answer is \\(72\\)", guidedAnswerValue: "72", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784154705/parabola12-gp_zsmxn3.png",
        practice: [
          { text: `At Beck College Prep, a quadratic model estimates a student's study efficiency score based on the number of practice sets completed. The model predicts an efficiency score of 0 when no practice sets have been completed. The highest predicted efficiency score is \\(150\\) when \\(40\\) practice sets have been completed. According to the model, what is the predicted efficiency score when \\(4\\) practice sets have been completed?`, setup: "The Answer is 28.5", answer:"28.5", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784154708/parabola12-pp1_tj3amd.png" },
          { text: `<p>A quadratic model gives the height, in feet, of a skier above the ground \\(x\\) seconds after leaving a jump. The model predicts that the skier is at ground level when \\(x=0\\). The skier reaches a maximum height of \\(180\\) feet after \\(6\\) seconds. According to the model, what is the skier's height after \\(2\\) seconds?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 80 \\) feet</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 100 \\) feet</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 120 \\) feet</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 160 \\) feet</span>
            </div>
            </div>`, setup: "The Answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784154711/parabola12-pp2_ylnc8l.png" },
        ]
      },
 
 
      // Problem 13
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(5k^2 + 9k - m = 0\\)
        </p>
        <p>In the given equation, \\(m\\) is a constant. One solution is \\(\\frac{-9 + \\sqrt{481}}{10}\\). What is the value of \\(m\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>16</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>18</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>20</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>24</span>
        </div>
        </div>`,
        steps: [
          { text: "Declare the solution given in the equation, type \\(k_1 = \\frac{-9 + \\sqrt{481}}{10}\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784158305/parabola14-step1_whfvhg.mov" },
          { text: "When this solution is plugged into the equation above, it should return \\(0\\), so type \\(y_1 = 0\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784158341/parabola14-step2_zt1utp.mov" },
          { text: "Use ~ to determine \\(m\\), by typing into Desmos \\(y_1\\) ~ \\(5k_1^2+9k_1-m\\) which will return that \\(m\\) is \\(20\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784158408/parabola14-step3_dvybue.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(3t^2 + bt - 8 = 0 \\)
        </p>
        <p>The equation above has one solution that can be written as \\(\\frac{-11+\\sqrt{217}}{6}\\). What is the value of \\(b\\)?</p>`     
        , guidedSteps: ["Declare the solution given in the equation, using \\(b_1\\)", "Declare \\(y_1\\)", "Use ~ to determine \\(b\\)"],
        guidedAnswer: "The Answer is \\(11\\)", guidedAnswerValue: "11", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784158294/parabola14-gp_sr77gi.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(ax^2 + 9x - 4 = 0 \\)
            </p>
            <p>The equation shown has one solution that can be written as \\(\\frac{-9+\\sqrt{209}}{16}\\). What is the value of \\(a\\)?</p>`, setup: "The Answer is \\(8\\)", answer:"8", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784158298/parabola14-pp1_bnct6z.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(5x^2 - 7x + n = 0 \\)
            </p>
            <p>In the equation above, \\(n\\) is constant. One solution is \\(\\frac{7+\\sqrt{169}}{10}\\). What is the value of \\(n\\)?</p>`, setup: "The Answer is \\(-6\\)", answer: "-6", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784158301/parabola14-pp2_kco888.png", },  
      ]
      },
 
      // Problem 14
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(g(t) = -3t^2 + 126t - 240\\)
        </p>
        <p>The function \\(g\\) is defined by the equation above. Which of the following equations below displays the roots of the function as constants or coefficients?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( g(t) = -3(x - 2)(x - 40) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( g(t) = -3x(x - 42) - 240 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( g(t) = -3(x-21)^2 + 1083 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( g(t) = -3x^2 + 6x + 120x - 240\\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type the function into Desmos. From the graph produced, you can find the zeroes of the function", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784212603/parabola15-step1_dwjdok.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(f(x) = 2x^2 - 26x + 80\\)
        </p>
        <p>The function \\(f\\) is defined by the equation above. Which equation below displays the roots of \\(f\\) as constants or coefficients?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( f(x) = 2(x - 5)(x - 8) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( f(x) = 2(x - 4)(x - 10) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( f(x) = 2(x-6)(x - 8) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( f(x) = 2(x - 2)(x - 20)\\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type the function into Desmos. From the graph produced, you can find the zeroes of the function"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784212602/parabola15-gp_y2vsds.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(h(x) = 3x^2 - 42x + 126\\)
            </p>
            <p>The function \\(h\\) is defined by the equation above. Which equation below displays the roots of \\(h\\) as constants or coefficients?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( h(x) - 9 = 3x^2 - 42x + 135 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( h(x) = 3(x - 5)(x - 9) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( h(x) = 3x(x - 14) + 135 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( h(x) = 3(x - 7)^2 - 12\\)</span>
            </div>
            </div>`
            , setup: "The Answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784212602/parabola15-pp1_beuxj3.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(x - 3y^2 + 18y  - 15 = 0\\)
            </p>
            <p>The function in the \\(xy\\)-plane has the equation shown above. Which equation displays the roots of the quadratic function in \\(y\\) as coefficients or constants?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( y = \\frac{\\sqrt{x + 12}}{3} + 3\\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( x = 3(y - 1)(y-5) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( x = 3(y - 3)^2 + 12 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( x = 3y^2 - 18y + 15\\)</span>
            </div>
            </div>`, setup: "The Answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784212602/parabola15-pp2_bsnyao.png" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(p(x) = 2x^2 - 26x + 80\\)
            </p>
            <p>The function \\(p\\) is defined by the equation above. Which equation displays the solutions of \\(p\\) as constants or coefficients?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( p(x) = 2x^2 - 10x - 16x + 80 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( p(x) = (x - 5)(2x - 16) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( p(x) = 2x(x - 13) + 80 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( p(x) = 2(x - 6.5)^2 - \\frac{9}{2}\\)</span>
            </div>
            </div>`, setup: "The Answer is B", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784212602/parabola15-pp3_ejstuu.png" },
        ]
      },
 
      // Problem 15
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\((3x-8)^2 - 11(3x-8) + 28 = 0\\)
        </p>
        <p>THIS IS AN SAT QUESTION - NEED TO CHANGE What is a solution to the given equation?</p>`,
        steps: [
          { text: "Type the given equation into Desmos. From the graph produced, you can visually see that the solutions are at \\(x=4\\) and \\(x=5\\). Either answer is acceptable", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782158476/parabola13-step1_irmbst.mov" },
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 16
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\((x^2 - 5x - 24 = 0\\)
        </p>
        <p>THIS IS AN SAT QUESTION - NEED TO CHANGE What is the sum of the solutions to the given equation?</p>`,
        steps: [
          { text: "Type the given equation into Desmos. From the graph produced, you can visually see the solutions on the \\(x\\)-axis", note: "", gif: "", video: "" },
          { text: "Add the solutions to find the sum", note: "", gif: "", video: "" },
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 17
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\( -2x^2 + 20x + c = 0\\)
        </p>
        <p>THIS IS AN SAT QUESTION - NEED TO CHANGE In the given equation \\(c\\) is a constant. The equation has exactly one solution. What is the value of \\(c\\)?</p>
        <div class="mc-choices">
          <div class="mc-choice">
          <span class="mc-label">A</span>
          <span> \\( -68 \\)</span>
          </div>
          <div class="mc-choice correct">
          <span class="mc-label">B</span>
          <span>\\( -50\\)</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\( -32 \\)</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\( 0 \\)</span>
          </div>
          </div>`,
        steps: [
          { text: "Type the given equation into Desmos", note: "", gif: "", video: "" },
          { text: "Create a slider for \\(c\\)", note: "", gif: "", video: "" },
          { text: "Plug in each answer choice as a value for \\(c\\)", note: "The value that results in crossing the x-axis once is the solution", gif: "", video: "" },
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 18
      {
        problem: `<p>THIS IS AN SAT QUESTION - NEED TO CHANGE Which quadratic equation has exactly one distinct real solution?</p>
        <div class="mc-choices">
          <div class="mc-choice">
          <span class="mc-label">A</span>
          <span> \\( x^2 - 16 = 0 \\)</span>
          </div>
          <div class="mc-choice correct">
          <span class="mc-label">B</span>
          <span>\\( x^2 + 16 = 0 \\)</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>\\(x^2 - 16x + 56 = 0 \\)</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>\\( x^2 - 16x + 64 = 0 \\)</span>
          </div>
          </div>`,
        steps: [
          { text: "Type each answer choice into Desmos. From the graph produced, you can visually see the number of solutions produced", note: "", gif: "", video: "" },
          { text: "Add the solutions to find the sum", note: "", gif: "", video: "" },
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 19
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\( (x - 3)^2 + 10 = 0\\)
        </p>
        <p>How many distinct real solutions does the equation have?</p>`,
        steps: [
          { text: "Type equation into Desmos. The graph doesn't appear, so type in \\(y = (x-3)^2+10\\) to see the graph of the function. Notice that it never touches the x-axis, so there are \\(0\\) real solutions", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784156094/parabola13-step1_clu1wr.mov" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\( 4(2x - 3)^2 - 120 = -3(2x + 5)^2\\)
          </p>
          <p>How many distinct real solutions does the equation have?</p>
          <div class="mc-choices">
          <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>Exactly one</span>
          </div>
          <div class="mc-choice correct">
          <span class="mc-label">B</span>
          <span>Exactly two</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>Infinitely many</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>Zero</span>
          </div>
          </div>`,
        guidedSteps: ["Type function into desmos, exactly as it is written. You can determine the answer by seeing how many times it crosses the \\(x\\)-axis, if any"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784156054/parabola13-gp_dkb94b.png",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\( 4(x + 3) = 2(x - 1)(x + 4) \\)
          </p>
          <p>How many distinct real solutions does the equation have?</p>
          <div class="mc-choices">
          <div class="mc-choice">
          <span class="mc-label">A</span>
          <span>Zero</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>One</span>
          </div>
          <div class="mc-choice correct">
          <span class="mc-label">C</span>
          <span>Two</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>More than two</span>
          </div>
          </div>`, setup: "The Answer is C", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784156057/parabola13-pp1_ni44w1.png" },
        { text: `<p style="text-align:center;margin-bottom:12px">
          \\( \\sqrt{4x - 13} = x - 1 \\)
          </p>
          <p>How many distinct real solutions does the equation have?</p>
          <div class="mc-choices">
          <div class="mc-choice correct">
          <span class="mc-label">A</span>
          <span>Zero</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">B</span>
          <span>One</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>Two</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>More than two</span>
          </div>
          </div>`, setup: `The Answer is A`, screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1784156060/parabola13-pp2_wbqcxf.png",}
        ]
      },


 
      // Problem 20
      {
        problem: `<p>During a celebration along the Malecón Habanero in Havana, a firework is lit from the lobby. An AI creates a quadratic model, which tracks that \\(2.4\\) seconds after the firework is launched, it reaches the highest point in the air at \\(81\\) feet above the lobby. Which equation represents this model, where \\(h(s)\\) is the firework’s height, in feet, above the lobby, \\(s\\) seconds after it was lit?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( h(s) = -14(s - 2.4)^2 + 81 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( h(s) = 14(s + 2.4)^2 + 81 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( h(s) = -14(s + 2.4)^2 + 81 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( h(s) = 14(s - 2.4)^2 + 81 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "", note: "", gif: "", video: "" },
          { text: "", note: "", gif: "", video: "" },
          { text: "", note: "", gif: "", video: "" },
          { text: "", note: "", gif: "", video: "" },
        ],
        guidedProblem: `<p>During a nighttime drone show, a drone follows a parabolic path. The drone reaches its highest point \\(5\\) seconds after launch at a height of \\(120\\) feet. Which equation could represent the model, where \\(d(t)\\) is the drone’s height, in feet, \\(t\\) seconds after launch?</p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( d(t) = -6(t - 5)^2 + 120 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( d(t) = 6(t + 5)^2 + 120 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( d(t) = -6(t + 5)^2 + 120 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( d(t) = 6(t - 5)^2 + 120 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: `<p>A water fountain sprays a stream of water into the air. The stream reaches a maximum height of \\(64\\) inches when it is \\(3\\) feet horizontally from the fountain nozzle. Which equation could represent the model, where \\(w(x)\\) is the height, in inches, of the water when it is \\(x\\) feet from the nozzle?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( w(x) = 4(x - 3)^2 + 64 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( w(x)= -4(x + 3)^2+ 64 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( w(x) = -4(x - 3)^2 + 64 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( w(x) = 4(x + 3)^2 + 64 \\)</span>
        </div>
        </div>`
            , setup: "[Setup 1]" },
          { text: `<p>During a basketball game, a player shoots the ball toward the basket. The ball reaches its highest point \\(2.5\\) seconds after it leaves the player's hands, at a height of \\(18\\) feet. Which equation could represent this situation, where \\(b(t)\\) is the height, in feet, of the basketball \\(t\\) seconds after it is released?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( b(t)= -3(t + 2.5)^2 + 18 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( b(t) = 3(t - 2.5)^2 + 18 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( b(t) = -3(t - 2.5)^2 + 18 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( b(t) = 3(t + 2.5)^2 + 18 \\)</span>
        </div>
        </div>`
            , setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 21
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(h(t) = -16t^2 + 8t + a\\)
        </p>
        <p>The height of a launched firework is modeled by \\(h(t)\\). The firework reaches a maximum height of \\(97\\) feet. According to the model, how many seconds after ped at \\(t = 0\\). How many seconds after launch will the fireworks hit the ground?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 2.0 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 2.2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 2.5 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( 2.7 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "It is given that the maximum value is \\(97\\). Remember that the maximum value is equivalent to the vertex, so to find the x-value of the vertex use the formula \\(x = -b/2a\\), where \\(b = 8\\) and \\(a = -16\\) to find \\(x\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784227749/parabola18-step1_rtycfi.mov" },
          { text: "With the x-value of the vertex, declare the vertex using the variables \\(t_1\\) and \\(h_1\\), so \\(t_1 = 0.25\\) and \\(h_1 = 97\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784227750/parabola18-step2_u8n5u1.mov" },
          { text: "Use ~ to find \\(a\\), so type h_1 ~ -16t_1^2 + 8t_1 + a", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784227750/parabola18-step3_p7dcca.mov" },
          { text: "With \\(a\\), declare the function \\(h\\) in a new line and visually see the roots", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784227775/parabola18-step4_kb4fon.mov" },
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },
 
      // Problem 22
      {
        problem: `THIS IS AN SAT QUESTION NEED TO CHANGE - The function \\(g\\) is defined by \\(g(x) = (x+17)(t-x)\\), where \\(t\\) is a constant. In the xy-plane, the graph of \\(y = g(x)\\) passes through the point \\((23, 0)\\). What is the value of \\(g(0)\\)?`,
        steps: [
          { text: "Type the point \\((23,0)\\) into Desmos as separate variables, \\(x_1 = 23\\) and \\(y_1 = 0\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782159543/parabola15-step1_usml8e.mov" },
          { text: "Use ~ to find \\(t\\) by typing \\(y_1\\) ~ \\((x_1 + 17)(t-x_1)\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782159545/parabola15-step2_haaviu.mov" },
          { text: "With \\(t\\), declare the function in a new line as \\(g(x) = (x+17)(t-x)\\)", note: "Since \\(t\\) is declared earlier, you can leave it as t", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782159546/parabola15-step3_znklzi.mov" },
          { text: "Plug in \\(g(0)\\) to find the answer, which is 391", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782159547/parabola15-step4_licmbd.mov" },
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },
 
      // Problem 23
      {
        problem: `
        <table class="xy-table" style="margin:0 auto 16px auto">
            <tr><td>x</td><td>f(x)</td></tr>
            <tr><td>-3</td><td>14</td></tr>
            <tr><td>0</td><td>5</td></tr>
            <tr><td>4</td><td>21</td></tr>
        </table>
        The quadratic function passes through the following points. Which function passes through the points listed in the table above?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( x^2 + 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x^2 + 3x + 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( x^2 + 4x + 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2x^2 + 3x + 5\\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type 'table' into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233130/parabola20-step1_wfb4ww.mov" },
          { text: "Input the given values", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233130/parabola20-step2_tlt6dk.mov" },
          { text: "Click Add Regression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233133/parabola20-step3_bkks2k.mov" },
          { text: ". As the problem mentions they have a quadratic relationship, change the regression from linear to quadratic. The equation produced will give you the answer", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233131/parabola20-step4_nyol3s.mov" }
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },

      // Problem 24
      {
        problem: `
        The function \\(p\\) is a quadratic function. The graph of \\(y = p(x)\\) has a vertex at \\((-1,2)\\), contains the point \\((1,10)\\), and has a y-intercept at \\((0,m)\\). The graph of \\(y = 3p(x) - 5\\) has a y-intercept at \\((0,n)\\). What is the value of \\(m+n\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 7 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 11 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 15 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 19 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Declare the vertex, using \\(h = -1\\) and \\(k=2\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233133/parabola21-step1_tedqxl.mov" },
          { text: "Declare the point, using \\(x_1 = 1\\) and \\(y_1= 10\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233135/parabola21-step2_lprpja.mov" },
          { text: "Find the equation of the vertex, using ~ and typing \\(y_1\\) ~ \\(a(x_1-h)^2 + k\\) to find \\(a\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233137/parabola21-step3_ihuqyy.mov" },
          { text: "Declare the function in the new line and set \\(m = p(0)\\), as \\(m\\) is the \\(y\\)-intercept", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233139/parabola21-step4_jvdhf5.mov" },
          { text: "Declare \\(y\\) in a new line, using any function, the example uses \\(q\\). Set \\(n\\) to the y-intercept of this new function", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233140/parabola21-step5_w796dy.mov" },
          {text: "Type m+n to find the answer", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784233140/parabola21-step6_xmeuwx.mov"}
        ],
        guidedProblem: "[Guided problem for Topic 2]",
        guidedSteps: ["[Step 1]", "[Step 2]", "[Step 3]", "[Step 4]"],
        guidedAnswer: "[Desmos setup and answer]",
        practice: [
          { text: "[Problem 1]", setup: "[Setup 1]" },
          { text: "[Problem 2]", setup: "[Setup 2]" },
          { text: "[Problem 3]", setup: "[Setup 3]" },
          { text: "[Problem 4]", setup: "[Setup 4]" },
        ]
      },
  ]
};

export default parabola;