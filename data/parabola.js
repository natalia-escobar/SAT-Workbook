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
          { text: "Type the expression into Desmos. The x-values where it crosses the x-axis are two potential values for x", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784127954/parabola3-step1_qlrj6s.mov" },
          { text: "Plug in both x-values, the one where \\(14x - 6 > 0\\) will give the correct value of \\(14x - 6\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1784127955/parabola3-step2_nguhr4.mov" },
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
        problem: `The square of a positive number is \\(9\\) greater than \\(10\\) times the number. What is the value of the positive number?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4.169 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 9.000 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 10.831 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 15.831 \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "On a scratch piece of paper, write the expression that matches the question <i>the square of positve number and a number that is \\(9\\) greater than \\(10\\) times the number</i>. Type that expression into Desmos, and where the x-values cross the x-axis are potential values for x, choose the answer choice that is 1 of these values", note: "", gif: "", video: "" },
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
 
 
      // Problem 5
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
          { text: "Type the expression into Desmos", note: "", gif: "", video: "" },
          { text: "Type each answer choice into Desmos. The parabola that perfectly overlaps the given expression is the answer", note: "", gif: "", video: "" },
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
        practice: [
          { text: `Which expression is equivalent to \\(5(x - 6)(x + \\frac{1}{2}) - 4(x-3) \\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 5x^2 - \\frac{67}{2}x - 3 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 5x^2 + \\frac{63}{2}x - 3 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 5x^2 - \\frac{63}{2}x  + 12 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 5x^2 - \\frac{67}{2}x + 12 \\)</span>
            </div>
          </div>`, setup: "The Answer is B" },
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
          </div>`, setup: "The Answer is A" },
          { text: `Which expression is equivalent to \\(3(x - \\frac{1}{2})(x + 6) - 2(x-9) \\)?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 3x^2 - \\frac{29}{2}x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 3x^2 + \\frac{29}{2}x - 9 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 3x^2 + \\frac{29}{2}x  - 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3x^2 + \\frac{25}{2}x - 9 \\)</span>
            </div>
          </div>`, setup: "The Answer is C" },
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
        <span>\\( \\frac{11}{5}x^2 + \\frac{127}{5}x - 36 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{6}{5}x^2 + \\frac{127}{5}x + 36 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type in \\(m(x)\\) and \\(n(x)\\) into Desmos", note: "", gif: "", video: "" },
          { text: "Type in \\(m(x) \\cdot n(x)\\)", note: "To avoid confusion, only graph this, remove m(x) and n(x) from being shown on the graph", gif: "", video: "" },
          { text: "Type each answer choice, whichever one perfectly overlaps \\(m(x) \\cdot n(x)\\) is the answer", note: "", gif: "", video: "" },
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
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -\\frac{8}{3}x^2 + \\frac{58}{3}x + 5 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type in \\(f(x)\\) and \\(g(x)\\) into Desmos", "Type in \\(f(x) \\cdot g(x)\\)", "Type each answer choice, whichever one perfectly overlaps \\(f(x) \\cdot g(x)\\) is the answer"],
        guidedAnswer: "The Answer is D", guidedScreenshot: "",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(p(x) = \\frac{3}{4}x - 8 \\)<br><br>
          \\(q(x) = 2x - frac{5}{3} \\)
        </p>
        <p>The functions p and q are defined by the equations shown. Which expression is equivalent to \\(p(x) \\cdot q(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
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
        </div>`, setup: "The Answer is A", screenshot: "" },
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
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( x^2 + \\frac{31}{2}x - 45 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( x^2 \\frac{31}{2}x^2 - 45 \\)</span>
        </div>
        </div>`, setup: "The Answer is C", screenshot: "" },
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
          { text: "Type the given equation into Desmos. You can find the minimum visually on the graph", note: "", gif: "", video: "" },
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
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 1.5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 26 \\)</span>
        </div>
        </div>`, 
        guidedSteps: ["Type the given equation into Desmos. You can find the maximum visually on the graph"],
        guidedAnswer: "The Answer is C", guidedScreenshot: "",
        practice: [
          { text: `<p>For the quadratic function \\(f(x) = 6x^2 - 48x + 107\\), which value of \\(x\\) is associated with the minimum value of the function?</p>
        <div class="mc-choices">
        <div class="mc-choice">
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
        </div>`, setup: "The Answer is A", screenshot: "" },
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(M(x) = 6(x - 3)(x - 11) + 25\\)
        </p>
        <p>A manufacturing company models the average production cost by \\(M(x)\\), where \\(x\\) is the number of production cycles completed. For what value of \\(x\\) is the predicted production cost the least?</p>`, 
        setup: "The Answer is 7", screenshot: "" },
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
          { text: "Type the given function into Desmos. From the graph, you can find the minimum value", note: "The answer choice that includes the minimum value is the answer", gif: "", video: "" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(R(x) = 2x^2 - 20x + 47\\)
        </p>
        <p>Marian models the average number of questions a student misses on weekly reading quizzes with the function, \\(R(x)\\), where \\(x\\) is the number of weeks since tutoring began. Which equivalent form of the equation displays the minimum predicted number of missed questions as a constant? </p>
        <div class="mc-choices">
        <div class="mc-choice">
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
        guidedAnswer: "The Answer is A", guidedScreenshot: "",
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
            <div class="mc-choice">
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

          }, setup: "The correct answer is B" },
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
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( y - 34 = -3(x - 3)^2 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( y = -3x(x - 6) + 7 \\)</span>
            </div>
            </div>`
            , setup: "The correct answer is C" },
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
          { text: "Type \\(f(x)\\) into Desmos", note: "", gif: "", video: "" },
          { text: "Type \\(g(x) = f(x+7)\\), you can visually see the minimum value from the graph produced", note: "", gif: "", video: "" },
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
        <div class="mc-choice">
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
        guidedAnswer: "The Answer is B", guidedScreenshot: "",
        practice: [
          { text: `The quadratic \\(t(x) = 2x^2 - 12x + 25 \\) is rewritten as \\(u(x) = t(x-1) + 4\\). What is the minimum value of \\(u(x)\\)?`, 
          setup: "The Answer is 11", screenshot: "" },
          { text: `The function \\(r(x) = 5x^2 - 50x + 132 \\). A new function is \\(s(x) = r(x + 2) - 10\\). What is the y-value of the lowest point of \\(s(x)\\)?`, setup: "The Answer is -3", screenshot: "" },
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
          { text: "Type \\(g(t)\\) into Desmos", note: "", gif: "", video: "" },
          { text: "Type \\(h(t) = g(t) - 5 \\) and from this, you can determine the minimum value", note: "", gif: "", video: "" },
          { text: "Plug in each answer choice. Pick the answer that matches the minimum value", note: "", gif: "", video: "" },
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
        <div class="mc-choice">
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
        guidedAnswer: "The Answer is B", guidedScreenshot: "",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
          \\(p(x) = -4x^2 + 56x - 91\\)
        </p>
        <p>A tutoring center models the increase in a student's math score after attending review sessions with \\(p(x)\\), where \\(x\\) is the number of review sessions attended. A new model is defined by \\(q(x)\\) is defined by \\(q(x) = p(x) - 8\\). Which expression represents the maximum value of \\(q(x)\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
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
        </div>`, setup: "The Answer is A" },
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
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( -\\frac{32^2}{-4*4} + 9 - 3 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -\\frac{(32 - 3)^2}{-4*4} + 9 \\)</span>
        </div>
        </div>`, setup: "The Answer is C" },
        ]
      },
 
      // Problem 11
      {
        problem: `The \\(y\\)-intercept of the graph \\( g(x) = \\frac{1}{4}(x - 6)^2 + 2\\) in the xy-plane is \\((0,y)\\). What is the value of \\(y\\)?`,
        steps: [
          { text: "Plug in \\(g(x)\\) into Desmos. You can determine the y-intercept by visually looking at the produced graph and see that it is 11", note: "", gif: "", video: "" },
        ],
        guidedProblem: `The y-intercept of the graph \\(g(x) = -\\frac{3}{4}(x-8)^2 - 56\\) in the xy-plane is \\(0, g(0)\\). What is the value of the \\(g(0)\\)?`,
        guidedSteps: ["Plug in \\(z(x)\\). You can determine the y-intercept visually"],
        guidedAnswer: "The answer is -104", guidedScreenshot: "",
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
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 72 \\) feet</span>
            </div>
            </div>`
            , setup: "The Answer is D", screenshot: "" },
          { text: `A firework is launched from a platform. Its height, \\(H\\), in meters, \\(t\\) seconds after launch is modeled by \\(H(t) = -4.9t^2 + 22.4t + 3.6 \\). What was the initial height, in meters, of the firework?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( -4.9 \\)</span>
            </div>
            <div class="mc-choice">
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
            </div>`, setup: `The Answer is B`},
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
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 14 \\) cm</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 20 \\) cm</span>
            </div>
            </div>`, setup: `The Answer is C`},
          { text: `The function \\(h(x) = 2x^2 + 7x - 4 \\) is transformed into \\(k(x) = 3h(x) - 8\\). What is the y-coordinate of the point where the graph of \\(k\\) intersects the y-axis?</p>
            <div class="mc-choices">
            <div class="mc-choice">
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
            , setup: "The Answer is A", screenshot: "" }
            
        ]
      },
 
      // Problem 12
      {
        problem: `A parabolic function predicts the number of math practice problems a student solves during a tutoring session at Beck College Prep in terms of time, in minutes, after a tutor begins the teaching session. According to the function, the student had solved \\(0\\) problems at the start of the session and reached the most questions out of \\(200\\) problems \\(10\\) minutes after the session began. Based on the function, how many math problems did the student solve \\(6\\) minutes after the session began?`,
        steps: [
          { text: "Type \\(h = 10\\) and \\(k = 200\\) into Desmos, both on separate lines", note: "", gif: "", video: "" },
          { text: "Type \\(x_1 = 0\\) and \\(y_1 = 0\\)", note: "", gif: "", video: "" },
          { text: "As you know the function is quadratic, you can use the vertex form of the quadratic function to determine the function, so type \\(y_1\\) ~ \\(a(x_1 - h)^2 + k\\) into Desmos. This gives you a, so now you know the function", note: "", gif: "", video: "" },
          { text: "Declare the function in a new line, type \\(f(x) = -2(x-h)^2+ k\\)", note: "", gif: "", video: "" },
          { text: "Plug 6 into the function by typing \\(f(6)\\) into Desmos to find the answer is 168", note: "", gif: "", video: "" },
        ],
        guidedProblem: "A parabolic function forecasts the number of diagnostic tests organized by Ingrid, the Beck College Prep proctor, depending on the number of student folders she prepares. When \\(5\\) folders are prepared, \\(150\\) diagnostics are ready. The model shows that the maximum number of diagnostics prepared is \\(200\\) when \\(10\\) folders are prepared. Based on the function, how many diagnostics are ready when 18 folders are prepared?",
        guidedSteps: [
          "Declare h and k into Desmos",
          "Declare \\(x_1\\) and \\(y_1\\) into Desmos",
          "Use the standard form of the quadratic function to determine a, the only missing parameter",
          "Now that you have a, declare the quadratic function in a new line",
          "Plug in 18 to the quadratic function and it will return the answer"
        ],
        guidedAnswer: "The Answer is 72", guidedScreenshot: "",
        practice: [
          { text: `At Beck College Prep, a quadratic model estimates a student's study efficiency score based on the number of practice sets completed. The model predicts an efficiency score of 0 when no practice sets have been completed. The highest predicted efficiency score is \\(150\\) when \\(40\\) practice sets have been completed. According to the model, what is the predicted efficiency score when \\(4\\) practice sets have been completed?`, setup: "The Answer is 28.5", screenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782513023/parabola8-pp3_swvv3b.png" },
          { text: `<p>A quadratic model gives the height, in feet, of a skier above the ground \\(x\\) seconds after leaving a jump. The model predicts that the skier is at ground level when \\(x=0\\). The skier reaches a maximum height of \\(180\\) feet after \\(6\\) seconds. According to the model, what is the skier's height after \\(2\\) seconds?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 80 \\) feet</span>
            </div>
            <div class="mc-choice">
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
            </div>`, setup: "The Answer is B", screenshot: "" },
        ]
      },
 
      // Problem 13
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\( (x - 3)^2 + 10 = 0\\)
        </p>
        <p>How many distinct real solutions does the equation have?</p>`,
        steps: [
          { text: "Type function into Desmos. The graph never touches the x-axis, so there are zero real solutions", note: "", gif: "", video: "" },
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
          <div class="mc-choice">
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
        guidedSteps: ["Type function into desmos, exactly as it is written. You can determine the answer by seeing how many times it crosses the x-axis, if any"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "https://res.cloudinary.com/dnyaptowc/image/upload/v1782685788/parabola9-gp_ap2pjk.png",
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
          <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>Two</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>More than two</span>
          </div>
          </div>`, setup: "The Answer is C", screenshot: "" },
        { text: `<p style="text-align:center;margin-bottom:12px">
          \\( \\sqrt{4x - 13} = x - 1 \\)
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
          <div class="mc-choice">
          <span class="mc-label">C</span>
          <span>Two</span>
          </div>
          <div class="mc-choice">
          <span class="mc-label">D</span>
          <span>More than two</span>
          </div>
          </div>`, setup: `The Answer is C`,}
        ]
      },
 
      // Problem 14
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
          { text: "Declare the solution given in the equation, type \\(k_1 = \\frac{-9 + \\sqrt{481}}{10}\\)", note: "", gif: "", video: "" },
          { text: "When this solution is plugged into the equation above, it should return 0, so type \\(y_1 = 0\\)", note: "", gif: "", video: "" },
          { text: "Use ~ to determine m, by typing into Desmos \\(y_1\\) ~ \\(5k_1^2+9k_1-m\\) which will return that m is 20", note: "", gif: "", video: "" },
        ],
        guidedProblem: `<p style="text-align:center;margin-bottom:12px">
          \\(3t^2 + bt - 8 = 0 \\)
        </p>
        <p>The equation above has one solution that can be written as \\(\\frac{-11+\\sqrt{217}}{6}\\). What is the value of \\(b\\)?</p>`     
        , guidedSteps: ["Declare the solution given in the equation, using \\(b_1\\)", "Declare \\(y_1\\)", "Use ~ to determine \\(b\\)"],
        guidedAnswer: "The Answer is 11", guidedScreenshot: "",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(ax^2 + 9x - 4 = 0 \\)
            </p>
            <p>The equation shown has one solution that can be written as \\(\\frac{-9+\\sqrt{209}}{16}\\). What is the value of \\(a\\)?</p>`, setup: "The Answer is 8", screenshot: "" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(5x^2 + 7x + n = 0 \\)
            </p>
            <p>In the equation above, \\(n\\) is constant. One solution is \\(\\frac{7+\\sqrt{169}}{10}\\). What is the value of \\(n\\)?</p>`, setup: "The Answer is -6" },  
      ]
      },
 
      // Problem 15
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
          { text: "Type the function into Desmos. From the graph produced, you can find the zeroes of the function", note: "", gif: "", video: "" },
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
        <span>\\( g(t) = 2(x - 2)(x - 20)\\)</span>
        </div>
        </div>`,
        guidedSteps: ["Type the function into Desmos. From the graph produced, you can find the zeroes of the function"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "",
        practice: [
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(h(x) = 3x^2 - 42x + 126\\)
            </p>
            <p>The function \\(h\\) is defined by the equation above. Which equation below displays the roots of \\(f\\) as constants or coefficients?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( h(x) - 9 = 3x^2 - 42x + 126 \\)</span>
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
            , setup: "The Answer is B" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(x - 3y^2 + 18y  - 15 = 0\\)
            </p>
            <p>The function in the xy-plane has the equation shown above. Which equation displays the roots of the quadratic function as coefficients or constants?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( y = \\frac{\\sqrt{x + 12}}{3} + 3\\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( x + 12 = 3(y - 3)^2 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( x = 3(y - 3)^2 + 12 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( x = 3y^2 - 18y + 15\\)</span>
            </div>
            </div>`, setup: "The Answer is D" },
          { text: `<p style="text-align:center;margin-bottom:12px">
            \\(h(x) = 2x^2 - 26x + 80\\)
            </p>
            <p>The function p is defined by the equation above. Which equation displays the solutions of \\(p\\) as constants or coefficients?</p>
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
            <span>\\( p(x) = 3x(x - 13) + 80 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( p(x) = 2(x - 6.5)^2 - \\frac{9}{2}\\)</span>
            </div>
            </div>`, setup: "The Answer is B" },
        ]
      },
 
      // Problem 16
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\( 4x(x - 3) = 5\\)
        </p>
        <p>Which of the following is a solution to the given equation?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\frac{3 - \\sqrt{16}}{2} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{-33 + \\sqrt{16}}{2}  \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( \\frac{3 - \\sqrt{14}}{2}  \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{-3 + \\sqrt{14}}{2} \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type the equation into Desmos. From the graph produced, you can visually see the two possible solutions", note: "", gif: "", video: "" },
          { text: "Type each answer choice into Desmos and the one that returns one of the solutions is the correct answer", note: "", gif: "", video: "" },
        ],
        guidedProblem: ``,
        guidedSteps: ["Type the equation into Desmos. From the graph produced, you can visually see the positive solution"],
        guidedAnswer: "The Answer is ", guidedScreenshot: "", 
        practice: [
          { text: ``, setup: "The Answer is ", screenshot: "" },
          { text: ``, setup: "The Answer is ", screenshot: "" }]
      },
 
      // Problem 17
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
 
      // Problem 18
      {
        problem: `<p style="text-align:center;margin-bottom:12px">
          \\(h(t) = -16t^2 + 8t + a\\)
        </p>
        <p>DOUBLE CHECK DESMOS SOLUTION - MIGHT NEED TO MODIFY QUESTION The height of a launched firework is modeled by \\(h(t)\\). The firework reaches a maximum height of \\(97\\) feet. According to the model, how many seconds after ped at \\(t = 0\\). How many seconds after launch will the fireworks hit the ground?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 2.0 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 2.2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 2.5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2.7 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Type the function into Desmos with b = 40.96. From the produced graph, you can see the solution is \\(x = 1.6\\)", note: "", gif: "", video: "" },
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
 
      // Problem 20
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
        <div class="mc-choice correct">
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
          { text: "Type 'table' into Desmos and input the given values", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782160436/parabola16-step1_fgver4.mov" },
          { text: "Click Add Regression. As the problem mentions they have a quadratic relationship, change the regression from linear to quadratic. The equation produced will give you the answer", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1782160548/parabola16-step2_nxdiw9.mov" },
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

      // Problem 21
      {
        problem: `
        The function \\(p\\) is a quadratic function. The graph of \\(y = p(x)\\) has a vertex at \\((-1,2)\\), contains the point \\((1,10)\\), and has a y-intercept at \\((0,m)\\). The graph of \\(y = 3p(x) - 5\\) has a y-intercept at \\((0,n)\\). What is the value of \\(m+n\\)?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( x^2 + 5 \\)</span>
        </div>
        <div class="mc-choice correct">
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
          { text: "Type 'table' into Desmos and input the given values", note: "", gif: "", video: "" },
          { text: "Click Add Regression. As the problem mentions they have a quadratic relationship, change the regression from linear to quadratic. The equation produced will give you the answer", note: "", gif: "", video: "" },
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