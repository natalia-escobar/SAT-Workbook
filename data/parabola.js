const parabola = {
  icon: "ti-line",
  name: "Parabola",
  meta: "",
  workedProblems: [

    // Problem 1
      {
        problem: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\(3(x^2 - 2x + 4) + (2x^2 + 5x - 7)\\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 5x^2 + x + 5 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 5x^2 - x + 1 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 5x^2 - x + 5 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3x^2 - x + 5 \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787947333/problem1-step1_h3pbti.mov" },
          { text: "Type each answer choice and match it to the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787947333/problem1-step2_ylozed.mov" },
        ],
        guidedProblem: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\((6x^2 - 3x + 8) - (2x^2 + 5x - 4)\\)?</p>
          <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 4x^2 - 8x + 4 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 8x^2 - 8x + 4 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 + 2x + 12 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 8x + 4 \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the given expression into Desmos", "Type each answer choice and match it to the given expression"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "",
        practice: [ 
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\(4(2x^2 + x - 3) - (3x^2 - 6)\\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 5x^2 + 4x - 18 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 8x^2 + 4x - 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 11x^2 + 4x - 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 5x^2 + 4x - 6 \\)</span>
            </div>
          </div>` },
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\( (3x^2 - 5x + 7) + (2x^2 + 4) - ( x^2 - 3x + 2)\\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 6x^2 - 8x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 4x^2 - 2x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 - 8x + 13 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 2x + 13 \\)</span>
            </div>
          </div>` },
        ], 
        additionalPractice: [
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\( 4(2x^2 - 3x + 5) + (3x^2 + 7x - 8) \\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 11x^2 - 5x + 12 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 11x^2 + 4x + 12 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 11x^2 - 5x + 28 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 8x^2 - 5x + 12 \\)</span>
            </div>
          </div>` }, 
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\( (9x^2 - 4x + 6) - (5x^2 + 7x - 3) \\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4x^2 + 3x + 3 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 14x^2 - 11x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 - 11x + 9 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 11x + 3 \\)</span>
            </div>
          </div>` },
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\( 5(3x^2 + 2x - 4) - (4x^2 - 6x + 7) \\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 11x^2 + 4x - 27 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 11x^2 + 16x - 27 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 19x^2 + 16x - 13 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 11x^2 + 16x - 13 \\)</span>
            </div>
          </div>` },
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\( (7x^2 - 5x + 9) + 3(x^2 + 4x - 2) - (2x^2 - 3) \\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 8x^2 + 7x \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 8x^2 + 7x + 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 12x^2 + 7x + 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 8x^2 - 17x + 6 \\)</span>
            </div>
          </div>` },
          { text: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">
          \\( -3(2x^2 - 5x + 4) + (8x^2 - 7x + 6) \\)?</p>
          <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 2x^2 + 8x - 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 14x^2 + 8x - 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 2x^2 - 22x - 6 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 2x^2 + 8x + 18 \\)</span>
            </div>
          </div>` },
        ],
      },

      // Problem 2
      {
        problem: `<p>Which expression is equivalent to </p>
        <p style="text-align:center;margin-bottom:12px">\\(4(x + \\frac{3}{2})(x - 7) - 5x\\)?</p>
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4x^2 - 20x - 42 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 4x^2 - 27x - 42  \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 - 31x - 42  \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 20x - 21 \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787948685/problem2-step1_ozs7wu.mov" },
          { text: "Type each answer choice and match it to the original expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787948685/problem2-step2_lxxgi1.mov" },
        ],
        guidedProblem: `<p>Which expression is equivalent to</p>
        <p style="text-align:center;margin-bottom:12px">\\( 3(x - \\frac{5}{2})(x + 6) + 4x \\)?</p>
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 3x^2 + \\frac{21}{2}x - 45 \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 3x^2 + \\frac{29}{2}x - 45 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 3x^2 + \\frac{21}{2}x + 45 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3x^2 + \\frac{37}{2}x - 45 \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the given expression into Desmos", "Type each answer choice and match it to the given expression"],
        guidedAnswer: "", guidedScreenshot: "",
        practice: [
          {text: `<p>Which expression is equivalent to</p>
                   <p style="text-align:center;margin-bottom:12px">\\( 5(x + \\frac{4}{3})(x - 2) - 3x \\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice correct">
                          <span class="mc-label">A</span>
                          <span>\\( 5x^2 - \\frac{19}{3}x - \\frac{40}{3} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 5x^2 - \\frac{10}{3}x - \\frac{40}{3}  \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 5x^2 + \\frac{19}{3}x - \\frac{40}{3}  \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 5x^2 - \\frac{19}{3}x + \\frac{40}{3}  \\)</span>
                        </div>
                      </div>`},
          { text: `<p>Which expression is equivalent to</p>
                  <p style="text-align:center;margin-bottom:12px"> \\( 2(x - \\frac{7}{4})(x - 5) + 6x \\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 2x^2 - \\frac{27}{2}x + \\frac{35}{2} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 2x^2 + \\frac{15}{2}x + \\frac{35}{2}  \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 2x^2 - \\frac{15}{2}x - \\frac{35}{2}  \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">D</span>
                          <span>\\( 2x^2 - \\frac{15}{2}x + \\frac{35}{2}  \\)</span>
                        </div>
                      </div>`},
        ],
        additionalPractice: [
          { text: `<p>Which expression is equivalent to</p>
                  <p style="text-align:center;margin-bottom:12px"> \\( 3(x - \\frac{7}{2})(x + 4) + 5x \\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 3x^2 + \\frac{13}{2}x - 42 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 3x^2 + \\frac{7}{2}x - 42 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 3x^2 + \\frac{13}{2}x + 42 \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">D</span>
                          <span>\\( 3x^2 + \\frac{23}{2}x + 42  \\)</span>
                        </div>
                      </div>`},
          { text: `<p>Which expression is equivalent to</p>
                  <p style="text-align:center;margin-bottom:12px"> \\( 4(x + \\frac{5}{3})(x - 3) - 2x \\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 4x^2 - \\frac{16}{3}x - 20 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 4x^2 - \\frac{22}{3}x + 20 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 4x^2 - \\frac{22}{3}x - 20 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 4x^2 - \\frac{10}{3}x - 20  \\)</span>
                        </div>
                      </div>`},
          { text: `<p>Which expression is equivalent to</p>
                  <p style="text-align:center;margin-bottom:12px"> \\( 2(x - \\frac{5}{4})(x - 6) + 3x \\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 2x^2 - \\frac{23}{2}x + \\frac{15}{2} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 2x^2 - \\frac{29}{2}x + 15 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 2x^2 - \\frac{17}{2}x - 15 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 2x^2 - \\frac{23}{2}x + 15  \\)</span>
                        </div>
                      </div>`},
                      { text: `<p>Which expression is equivalent to</p>
                  <p style="text-align:center;margin-bottom:12px"> \\( 5(x + \\frac{3}{2})(x + 2) - 4x \\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 5x^2 + \\frac{27}{2}x + 15 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 5x^2 + \\frac{35}{2}x + 15 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 5x^2 - \\frac{27}{2}x - 15 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 5x^2 + \\frac{19}{2}x + 15  \\)</span>
                        </div>
                      </div>`},
        ]
      },

      // Problem 3
      {
        problem: `Which of the following is equivalent to
        <p style="text-align:center;margin-bottom:12px">\\((3x + \\frac{1}{2})^2 - (x - \\frac{3}{4}) + 2(x + \\frac{1}{4})\\)?</p>
        <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 9x^2 + 4x + \\frac{3}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 9x^2 + 3x + \\frac{3}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 9x^2 + 4x + \\frac{5}{4} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 9x^2 + 3x + \\frac{5}{4} \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the given expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787949102/problem3-step1_hocwbj.mov" },
          { text: "Type each answer choice and match it to the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787949103/problem3-step2_efc7vk.mov" },
        ],
        guidedProblem: `<p>Which of the following is equivalent to</p>
        <p style="text-align:center;margin-bottom:12px">\\((2x - \\frac{3}{2})^2 + 3(x + \\frac{1}{4}) - (x - \\frac{1}{2})\\)?</p>
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4x^2 - 6x + \\frac{7}{2} \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 4x^2 - 4x + \\frac{7}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4x^2 - 4x + \\frac{7}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4x^2 - 6x + \\frac{5}{2} \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the given expression into Desmos", "Type each answer choice and match it to the given expression"],
        guidedAnswer: "", guidedScreenshot: "",
        practice: [ { text: `<p>Which of the following is equivalent to</p>
                    <p style="text-align:center;margin-bottom:12px">\\((4x + \\frac{1}{2})^2 - 2(x - \\frac{3}{4}) + (x + \\frac{1}{4})\\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 16x^2 + 3x + \\frac{7}{4} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 16x^2 + 5x + 2 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">C</span>
                          <span>\\( 16x^2 + 3x + 2 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 16x^2 + 5x + \\frac{7}{4} \\)</span>
                        </div>
                      </div>`},
          { text: `<p>Which of the following is equivalent to</p>
                    <p style="text-align:center;margin-bottom:12px">\\((3x + \\frac{1}{2})^2 - (x + \\frac{3}{4}) + 3(x - \\frac{1}{4})\\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 9x^2 - x - \\frac{5}{4} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 9x^2 - 3x - \\frac{5}{4} \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">C</span>
                          <span>\\( 9x^2 - x - \\frac{3}{4} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 9x^2 - 3x - \\frac{3}{4} \\)</span>
                        </div>
                      </div>`
          }], 
        additionalPractice: [
          { text: `<p>Which of the following is equivalent to</p>
                    <p style="text-align:center;margin-bottom:12px">\\((2x + \\frac{3}{2})^2 - (x - \\frac{1}{4}) + 2(x + \\frac{1}{2})\\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 4x^2 + 7x + \\frac{7}{2} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 4x^2 + 5x + \\frac{7}{2} \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">C</span>
                          <span>\\( 4x^2 + 7x + \\frac{5}{2} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 4x^2 + 5x + \\frac{5}{2} \\)</span>
                        </div>
                      </div>`
          },
          { text: `<p>Which of the following is equivalent to</p>
                    <p style="text-align:center;margin-bottom:12px">\\((3x - \\frac{1}{2})^2 + 2(x + \\frac{3}{4}) - (x - \\frac{1}{4})\\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 9x^2 - 3x + 2 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 9x^2 - 2x + \\frac{7}{4} \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">C</span>
                          <span>\\( 9x^2 - 2x + 2 \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 9x^2 - 4x + 2 \\)</span>
                        </div>
                      </div>`
          },
          { text: `<p>Which of the following is equivalent to</p>
                    <p style="text-align:center;margin-bottom:12px">\\((4x + \\frac{1}{2})^2 - 3(x + \\frac{1}{4}) + (x + \\frac{3}{4})\\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 16x^2 + 2x + \\frac{7}{4} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 16x^2 + 4x + \\frac{7}{4} \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">C</span>
                          <span>\\( 16x^2 + 2x + \\frac{5}{4} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 16x^2 + 6x + \\frac{7}{4} \\)</span>
                        </div>
                      </div>`
          },
          { text: `<p>Which of the following is equivalent to</p>
                    <p style="text-align:center;margin-bottom:12px">\\((2x - \\frac{5}{2})^2 - (x + \\frac{1}{2}) + 3(x - \\frac{3}{4})\\)?</p>
                    <div class="mc-choices">
                        <div class="mc-choice">
                          <span class="mc-label">A</span>
                          <span>\\( 4x^2 - 10x + \\frac{7}{2} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">B</span>
                          <span>\\( 4x^2 - 8x + \\frac{7}{2} \\)</span>
                        </div>
                        <div class="mc-choice correct">
                          <span class="mc-label">C</span>
                          <span>\\( 4x^2 - 8x + \\frac{9}{2} \\)</span>
                        </div>
                        <div class="mc-choice">
                          <span class="mc-label">D</span>
                          <span>\\( 4x^2 - 12x + \\frac{7}{2} \\)</span>
                        </div>
                      </div>`
          }
        ]
      },

      // Problem 4
      {
        problem: `<p>The equation</p>
        <p style="text-align:center;margin-bottom:12px">\\( y = 2(\\frac{x^2}{9} - 9) \\)?</p>
        is equivalent to which of the following?
        <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( y = \\frac{2}{9}(x + 9)(x - 9) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( y = \\frac{2}{9}(x + 3)(x - 3) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( y = \\frac{2}{3}(x + 3\\sqrt{2})(x - 3\\sqrt{2}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( y = \\frac{2}{9}(x + 9)(x - 2) \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787949875/problem4-step1_bvpbzf.mov" },
          { text: "Type each answer choice and match it to the original expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787949876/problem4-step2_cvbovx.mov" },
        ],
        guidedProblem: `<p>The equation</p>
        <p style="text-align:center;margin-bottom:12px">\\( y = 4x^2 - 3x^2 - 45 \\)?</p>
        is equivalent to which of the following?
        <div class="mc-choices">
            <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( y = (x + 3\\sqrt{5})(x - 3\\sqrt{5}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( y = (x + 45)(x - 45) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( y = (x + 9)(x - 9) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( y = (x + 5\\sqrt{3})(x - 5\\sqrt{3}) \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the expression into Desmos", "Type each answer choice and match it to the original expression"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "", 
        guidedScreenshot: "",
        practice: [
          { text: `<p>The equation</p>
        <p style="text-align:center;margin-bottom:12px">\\( y = \\frac{1}{3}(3x^2 - 84) \\)?</p>
        is equivalent to which of the following?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( y = (x + 2\\sqrt{7})(x - 2\\sqrt{7}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( y = (x + 14)(x - 14) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( y = (x + 7\\sqrt{2})(x - 7\\sqrt{2}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( y = (x + 4\\sqrt{7})(x - 4\\sqrt{7}) \\)</span>
            </div>
          </div>`, },
          { text: `<p>The equation</p>
        <p style="text-align:center;margin-bottom:12px">\\( y = 3(\\frac{x^2}{3} - 20) + 8 \\)?</p>
        is equivalent to which of the following?
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( y = (x + 4\\sqrt{3})(x - 4\\sqrt{3}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( y = (x + 2\\sqrt{13})(x - 2\\sqrt{13}) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( y = (x + 13)(x - 13) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( y = (x + 6)(x - 6) \\)</span>
            </div>
          </div>`,  },
        ],
        additionalPractice: [
  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = 4\\left(\\frac{x^2}{4} - 8\\right) \\)</p>
    <p>is equivalent to which of the following?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + 8)(x - 8) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + 4\\sqrt{2})(x - 4\\sqrt{2}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 2\\sqrt{2})(x - 2\\sqrt{2}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 4)(x - 4) \\)</span>
      </div>
    </div>` },

  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = 6x^2 - 5x^2 - 63 \\)</p>
    <p>is equivalent to which of the following?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + 3\\sqrt{7})(x - 3\\sqrt{7}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + 7)(x - 7) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 3\\sqrt{3})(x - 3\\sqrt{3}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 7\\sqrt{3})(x - 7\\sqrt{3}) \\)</span>
      </div>
    </div>` },

  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = \\frac{1}{4}(4x^2 - 160) \\)</p>
    <p>is equivalent to which of the following?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + 20)(x - 20) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + 4\\sqrt{10})(x - 4\\sqrt{10}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 2\\sqrt{10})(x - 2\\sqrt{10}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 10)(x - 10) \\)</span>
      </div>
    </div>` },

  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = 5\\left(\\frac{x^2}{5} - 12\\right) + 12 \\)</p>
    <p>is equivalent to which of the following?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + 4\\sqrt{3})(x - 4\\sqrt{3}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + 12)(x - 12) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 2\\sqrt{3})(x - 2\\sqrt{3}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 4\\sqrt{6})(x - 4\\sqrt{6}) \\)</span>
      </div>
    </div>` },
],
      },
  
      // Problem 5
      {
        problem: `<p>Which of the following is an equivalent form of the expression</p>
        <p style="text-align:center;margin-bottom:12px">\\( (3x - 4)^2 - 5(3x - 4) - 24 \\)?</p>
        <div class="mc-choices">
            <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( (3x - 10)(3x - 3) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( (3x - 8)(3x - 7) \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( (3x - 12)(3x - 1) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( (3x - 4)(3x - 9) \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787950352/problem5-step1_myedw6.mov" },
          { text: "Type each answer choice and match it to the original expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787950353/problem5-step2_abdkr9.mov" },
        ],
        guidedProblem: `<p>Which of the following is an equivalent form of the expression </p>
                        <p style="text-align:center;margin-bottom:12px">\\((4x + 1)^2 + 3(4x + 1) - 28\\)?
                        <div class="mc-choices">
                            <div class="mc-choice correct">
                              <span class="mc-label">A</span>
                              <span>\\( (4x - 3)(4x + 8) \\)</span>
                            </div>
                            <div class="mc-choice">
                              <span class="mc-label">B</span>
                              <span>\\( (4x - 6)(4x + 6) \\)</span>
                            </div>
                            <div class="mc-choice">
                              <span class="mc-label">C</span>
                              <span>\\( (4x - 2)(4x + 7) \\)</span>
                            </div>
                            <div class="mc-choice">
                              <span class="mc-label">D</span>
                              <span>\\( (4x + 1)(4x - 3) \\)</span>
                            </div>
                          </div>`,
        guidedSteps: ["Type the expression into Desmos", "Type each answer choice and match it to the original expression"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "", 
        guidedScreenshot: "",
        practice: [
          { text: `<p>Which of the following is an equivalent form of the expression </p>
                        <p style="text-align:center;margin-bottom:12px">\\((5x - 2)^2 - (5x - 2) - 20\\)?</p>
                        <div class="mc-choices">
                            <div class="mc-choice">
                              <span class="mc-label">A</span>
                              <span>\\( (5x - 2)(5x - 3) \\)</span>
                            </div>
                            <div class="mc-choice">
                              <span class="mc-label">B</span>
                              <span>\\( (5x - 10)(5x + 3) \\)</span>
                            </div>
                            <div class="mc-choice">
                              <span class="mc-label">C</span>
                              <span>\\( (5x - 6)(5x + 1) \\)</span>
                            </div>
                            <div class="mc-choice correct">
                              <span class="mc-label">D</span>
                              <span>\\( (5x - 7)(5x + 2) \\)</span>
                            </div>
                          </div>`, },
          { text: `Which of the following is an equivalent form of the expression
            <p style="text-align:center;margin-bottom:12px">\\((6x + 5)^2 - 2(6x + 5) - 35 \\)?</p>
            <div class="mc-choices">
                <div class="mc-choice">
                  <span class="mc-label">A</span>
                  <span>\\( (6x + 5)(6x + 3) \\)</span>
                </div>
                <div class="mc-choice correct">
                  <span class="mc-label">B</span>
                  <span>\\( (6x - 2)(6x + 10) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">C</span>
                  <span>\\( (6x - 5)(6x + 10) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">D</span>
                  <span>\\( (6x + 1)(6x + 8) \\)</span>
                </div>
              </div>`,  },
        ],
        additionalPractice: [
  { text: `<p>Which of the following is an equivalent form of the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\left(5x - \\frac{5}{2}\\right)^2 - 3\\left(5x - \\frac{5}{2}\\right) - 24 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\left(5x - \\frac{13}{2}\\right)\\left(5x + \\frac{7}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\left(5x - \\frac{13}{2}\\right)\\left(5x + \\frac{5}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\left(5x - \\frac{17}{2}\\right)\\left(5x + \\frac{1}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\left(5x - \\frac{7}{2}\\right)\\left(5x + \\frac{13}{2}\\right) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following is an equivalent form of the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( (4x + \\sqrt{2})^2 + 2(4x + \\sqrt{2}) - 15 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (4x + \\sqrt{2} - 5)(4x + \\sqrt{2} + 3) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (4x + \\sqrt{2} - 3)(4x + \\sqrt{2} + 5) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (4x + \\sqrt{2} - 5)(4x + \\sqrt{2} - 3) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (4x + \\sqrt{2} + 5)(4x + \\sqrt{2} + 3) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following is an equivalent form of the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\left(5x + \\frac{3}{2}\\right)^2 - 4\\left(5x + \\frac{3}{2}\\right) - 21 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\left(5x - \\frac{17}{2}\\right)\\left(5x + \\frac{5}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\left(5x - \\frac{5}{2}\\right)\\left(5x + \\frac{17}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\left(5x - \\frac{11}{2}\\right)\\left(5x + \\frac{9}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\left(5x - \\frac{19}{2}\\right)\\left(5x + \\frac{7}{2}\\right) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following is an equivalent form of the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( (6x - \\sqrt{3})^2 - (6x - \\sqrt{3}) - 20 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (6x - \\sqrt{3} - 4)(6x - \\sqrt{3} + 5) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (6x - \\sqrt{3} - 5)(6x - \\sqrt{3} - 4) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (6x - \\sqrt{3} + 5)(6x - \\sqrt{3} + 4) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (6x - \\sqrt{3} - 5)(6x - \\sqrt{3} + 4) \\)</span>
      </div>
    </div>` },
],
      },

      // Problem 6
      {
        problem: `Which of the following expressions is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( 2(3x - 5)^2 - 98 \\)?</p>
            <div class="mc-choices">
                <div class="mc-choice correct">
                  <span class="mc-label">A</span>
                  <span>\\( 2(3x - 12)(3x + 2) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">B</span>
                  <span>\\( 2(3x - 7)(3x - 3) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">C</span>
                  <span>\\( 2(3x - 12)(3x - 2) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">D</span>
                  <span>\\( 2(3x + 12)(3x - 2) \\)</span>
                </div>
              </div>`,
        steps: [
          { text: "Type the expression into Desmos", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787951629/problem6-step1_am6bjo.mov" },
          { text: "Type each answer choice and match it to the original expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787951630/problem6-step2_sxqe51.mov" },
        ],
        guidedProblem: `Which of the following expressions is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( 4(2x + 3)^2 - 144 \\)?</p>
        <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4(2x - 9)(2x + 3) \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">B</span>
              <span>\\( 4(2x - 3)(2x + 9) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4(2x - 6)(2x + 6) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4(2x + 3)(2x + 9) \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Type the expression into Desmos", "Type each answer choice and match it to the original expression"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "",
        practice: [
          { text: `Which of the following expressions is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( 5(4x - 1)^2 - 405 \\)?</p>
        <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 5(4x - 10)(4x + 8) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 5(4x - 9)(4x + 9) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 5(4x - 10)(4x - 8) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 5(4x - 8)(4x + 10) \\)</span>
            </div>
          </div>` },
          { text: `Which of the following expressions is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( 3(5x + 2)^2 - 192 \\)?</p>
        <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 3(5x - 10)(5x + 6) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 3(5x - 6)(5x - 10) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 3(5x - 6)(5x + 10) \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 3(5x + 6)(5x + 10) \\)</span>
            </div>
          </div>` },
        ],
        additionalPractice: [
  { text: `<p>Which of the following expressions is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 6\\left(3x - \\frac{5}{2}\\right)^2 - 433? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 6\\left(3x - \\frac{5}{2} - 5\\sqrt{2}\\right)\\left(3x - \\frac{5}{2} + 5\\sqrt{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 6\\left(3x - \\frac{17}{2}\\right)\\left(3x + \\frac{7}{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6\\left(3x - \\frac{5}{2} - 6\\sqrt{2}\\right)\\left(3x - \\frac{5}{2} + 6\\sqrt{2}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6\\left(3x - \\frac{5}{2} - 12\\right)\\left(3x - \\frac{5}{2} + 12\\right) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following expressions is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 8(5x + 8)^2 - 968? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 8(5x - 8)(5x + 14) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 8(5x - 11)(5x + 17) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 8(5x - 8)(5x + 11) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 8(5x - 6)(5x + 12) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following expressions is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 5\\left(4x - \\frac{3}{2}\\right)^2 - 300? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 5(4x - 1 - 3\\sqrt{3})(4x - 1 + 3\\sqrt{3}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 5(4x - \\frac{3}{2} - 6\\sqrt{3})(4x - \\frac{3}{2} + 6\\sqrt{3}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 5(4x - \\frac{3}{2} - 6)(4x - \\frac{3}{2} + 6) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 5(4x - \\frac{3}{2} - 4\\sqrt{3})(4x - \\frac{3}{2} + 4\\sqrt{3}) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following expressions is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 7(4x - 4)^2 - 1575? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 7(4x - 15)(4x + 15) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 7(4x - 11)(4x + 19) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 7(4x - 19)(4x + 15) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 7(4x - 19)(4x + 11) \\)</span>
      </div>
    </div>` },
],
      },

      //Problem 7

      {
        problem: `The function \\(f\\) is defined by
            <p style="text-align:center;margin-bottom:12px"> \\(f(x)=6(x-\\frac{2}{5})^2+\\frac{7}{3}\\) </p>
            What is the value of \\(f(\\frac{7}{10})\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\frac{19}{6} \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( \\frac{431}{150} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{91}{30} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{47}{15} \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Declare the function \\(f(x)\\) into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952051/problem7-step1_e6ygig.mov" },
          { text: "Plug in \\( \\frac{7}{10}\\) into the function in Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952052/problem7-step2_z2es0x.mov" },
          { text: "Match the value the function returns to an answer choice", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952053/problem7-step3_qczgm1.mov" },
        ],

        guidedProblem: `The function \\(g\\) is defined by
            <p style="text-align:center;margin-bottom:12px"> \\( g(x)=4\\left(x+\\frac{1}{3}\\right)^2+\\frac{5}{2} \\) </p>
            What is the value of \\( g(\\frac{1}{6}) \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\frac{10}{3} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{19}{6} \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( \\frac{7}{2} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{23}{6} \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Declare the function \\(g(x)\\) into Desmos",
          "Plug in \\( \\frac{1}{6} \\) into Desmos",
          "Match the value Desmos returns to an answer choice"
        ],

        guidedAnswer: "The answer is C",
        guidedScreenshot: "",

        practice: [
          {
            text: `The function \\(h\\) is defined by
                <p style="text-align:center;margin-bottom:12px"> \\( h(x)=8(x-\\frac{1}{4})^2+\\frac{11}{6} \\) </p>
                What is the value of \\(h(\\frac{5}{6}) \\)? </p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\frac{37}{9} \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( \\frac{41}{9} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( \\frac{43}{9} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\frac{47}{9} \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>The function \\(f\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(x) = 6\\left(x - \\frac{1}{3}\\right)^2 + 2\\left(x - \\frac{1}{4}\\right) + \\frac{5}{4}. \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f\\left(\\frac{5}{6}\\right)? \\)</p>` },

  { text: `<p>The function \\(g\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g(x) = 8\\left(x + \\frac{1}{4}\\right)^2 - 3\\left(x - \\frac{1}{2}\\right) + \\frac{7}{6}. \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g\\left(\\frac{3}{4}\\right)? \\)</p>` },

  { text: `<p>The function \\(h\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( h(x) = 5\\left(x - \\frac{2}{5}\\right)^2 + 4\\left(x + \\frac{1}{5}\\right) + \\frac{3}{2}. \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( h\\left(\\frac{6}{5}\\right)? \\)</p>` },

  { text: `<p>The function \\(k\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( k(x) = 9\\left(x - \\frac{1}{6}\\right)^2 - 2\\left(x + \\frac{1}{3}\\right) + \\frac{5}{4}. \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( k\\left(\\frac{5}{6}\\right)? \\)</p>` },
],
      },

      // Problem 8
      {
        problem: `The function \\(f\\) is defined by
            <p style="text-align:center;margin-bottom:12px"> \\( f(x)=4(3x-2)(20-2x) \\) </p>
            What is the value of \\( f(5) \\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 416 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 520 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 560 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 624 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Declare the function \\(f(x)\\) into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952425/problem8-step1_txkmhq.mov" },
          { text: "Plug in \\(5\\) into the function in Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952426/problem8-step2_pjtg0k.mov" },
        ],

        guidedProblem: `The function \\(g\\) is defined by
            <p style="text-align:center;margin-bottom:12px"> \\( g(x)=6(2x+1)(18-3x) \\) </p>
            What is the value of \\( g(4) \\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 270 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 288 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( 324 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 378 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Type the function \\(g(x)\\) into Desmos",
          "Plug in \\(4\\) into the function in Desmos",
        ],

        guidedAnswer: "The answer is C",
        guidedScreenshot: "",

        practice: [
          {
            text: `The function \\(h\\) is defined by
                <p style="text-align:center;margin-bottom:12px"> \\( h(x)=5(4x-1)(15-2x) \\) </p>
                What is the value of \\( h(3) \\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 440 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 495 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 550 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 605 \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>The function \\(f\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(x) = 5(2x + 3)(16 - 2x). \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(3)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(360\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(400\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(450\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(480\\)</span>
      </div>
    </div>` },

  { text: `<p>The function \\(g\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g(x) = 8(3x - 1)(17 - 2x). \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g(4)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(704\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(792\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(816\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(864\\)</span>
      </div>
    </div>` },

  { text: `<p>The function \\(h\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( h(x) = 4(4x + 1)(21 - 3x). \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( h(2)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(540\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(576\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(612\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(648\\)</span>
      </div>
    </div>` },

  { text: `<p>The function \\(k\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( k(x) = 9(2x - 5)(19 - x). \\)</p>
    <p>What is the value of</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( k(5)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(756\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(810\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(864\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(882\\)</span>
      </div>
    </div>` },
],
      },
 
      // Problem 9
      {
        problem: `Which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( (2n + \\frac{3}{2})^2 - (n - \\frac{1}{4}) + 2(n + \\frac{3}{4})\\)?</p>
        <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4n^2 + 5n + 4 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 4n^2 + 7n + \\frac{15}{4} \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">C</span>
              <span>\\( 4n^2 + 7n + 4 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4n^2 + 5n + \\frac{15}{4} \\)</span>
            </div>
          </div>`,
        steps: [
          { text: "Create a slider for the variable \\(n\\) and invent a number", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952758/problem9-step1_k6k2ke.mov" },
          { text: "Type the given expression", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952759/problem9-step2_qslpqe.mov" },
          { text: "Type each answer choice and match", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787952765/problem9-step3_f0nhik.mov" },
        ],
        guidedProblem: `Which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( (3r - \\frac{1}{2})^2 + 2(r + \\frac{3}{4}) - (r - \\frac{1}{2})\\)?</p>
        <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 9r^2 - 4r + \\frac{9}{4} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 9r^2 - 2r + \\frac{7}{4} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 9r^2 - 4r + \\frac{7}{4} \\)</span>
            </div>
            <div class="mc-choice correct">
              <span class="mc-label">D</span>
              <span>\\( 9r^2 - 2r + \\frac{9}{4} \\)</span>
            </div>
          </div>`,
        guidedSteps: ["Create a slider for the variable \\(r\\) and invent a number", "Declare the given expression", "Type each answer choice and match"],
        guidedAnswer: "The Answer is D", guidedScreenshot: "",
        practice: [
          { text: `Which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( (2t - \\frac{5}{2})^2 - (t + \\frac{1}{4}) + 3(t - \\frac{1}{2})\\)?</p>
        <div class="mc-choice">
              <span class="mc-label">A</span>
              <span>\\( 4t^2 - 12t + \\frac{9}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 4t^2 - 8t + \\frac{9}{2} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 4t^2 - 8t + \\frac{19}{4} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 4t^2 - 12t + \\frac{19}{4} \\)</span>
            </div>
          </div>`, },
          { text: `Which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px">\\( (4k + \\frac{1}{2})^2 - 2(k - \\frac{3}{4}) + (k + \\frac{1}{4})\\)?</p>
        <div class="mc-choice correct">
              <span class="mc-label">A</span>
              <span>\\( 16k^2 + 5k + 2 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">B</span>
              <span>\\( 16k^2 + 3k + \\frac{7}{4} \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">C</span>
              <span>\\( 16k^2 + 3k + 2 \\)</span>
            </div>
            <div class="mc-choice">
              <span class="mc-label">D</span>
              <span>\\( 16k^2 + 5k + \\frac{7}{4} \\)</span>
            </div>
          </div>`, },
        ],
        additionalPractice: [
  { text: `<p>Which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\left(3a + \\frac{1}{2}\\right)^2 - \\left(a - \\frac{3}{4}\\right) + 2\\left(a + \\frac{1}{4}\\right)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 9a^2 + 3a + \\frac{3}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 9a^2 + 4a + \\frac{3}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 9a^2 + 4a + \\frac{5}{4} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 9a^2 + 3a + \\frac{5}{4} \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\left(2b - \\frac{3}{2}\\right)^2 + 3\\left(b + \\frac{1}{4}\\right) - \\left(b - \\frac{1}{2}\\right)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 4b^2 - 6b + \\frac{7}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 4b^2 - 4b + \\frac{5}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4b^2 - 6b + \\frac{5}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 4b^2 - 4b + \\frac{7}{2} \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\left(4c - \\frac{1}{2}\\right)^2 + 2\\left(c + \\frac{3}{4}\\right) - \\left(c - \\frac{1}{4}\\right)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 16c^2 - 3c + 2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 16c^2 - 5c + 2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 16c^2 - 3c + \\frac{7}{4} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 16c^2 - 5c + \\frac{7}{4} \\)</span>
      </div>
    </div>` },

  { text: `<p>Which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\left(5d + \\frac{3}{2}\\right)^2 - \\left(d + \\frac{1}{4}\\right) + 3\\left(d - \\frac{1}{2}\\right)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 25d^2 + 17d + \\frac{3}{4} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 25d^2 + 13d + \\frac{1}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 25d^2 + 17d + \\frac{1}{2} \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 25d^2 + 13d + \\frac{3}{4} \\)</span>
      </div>
    </div>` },
],
      },
 
      // Problem 10
      {
        problem: `The equation
            <p style="text-align:center;margin-bottom:12px">\\( y = 2(\\frac{x^2}{2} - 5a)\\)?</p>
            is equivalent to which of the following where \\(a\\) is a positive constant?
            <div class="mc-choice correct">
                  <span class="mc-label">A</span>
                  <span>\\( y = (x + \\sqrt{10a})(x - \\sqrt{10a}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">B</span>
                  <span>\\(  y = (x + \\sqrt{5a})(x - \\sqrt{5a}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">C</span>
                  <span>\\(  y = (x + 10a)(x - 10a) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">D</span>
                  <span>\\( y = (x + 5a)(x - 5a) \\)</span>
                </div>
              </div>`,
        steps: [
          { text: "Create a slider for the variable \\(a\\) and invent a number", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787953426/problem10-step1_o9io54.mov" },
          { text: "Declare the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787953427/problem10-step2_r87boc.mov" },
          { text: "Type each answer choice and match", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787953430/problem10-step3_blr2mc.mov" },
        ],
        guidedProblem: `The equation
            <p style="text-align:center;margin-bottom:12px">\\( y = 4x^2 - 3x^2 - 18b)\\)?</p>
            is equivalent to which of the folllowing where \\(b\\) is a positive constant?
            <div class="mc-choice correct">
                  <span class="mc-label">A</span>
                  <span>\\( y = (x + \\sqrt{9b})(x - \\sqrt{9b}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">B</span>
                  <span>\\(  y = (x + \\sqrt{6b})(x - \\sqrt{6b}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">C</span>
                  <span>\\(  y = (x + 18b)(x - 18b) \\)</span>
                </div>
                <div class="mc-choice correct">
                  <span class="mc-label">D</span>
                  <span>\\( y = (x + 3\\sqrt{2b})(x - 3\\sqrt{2b}) \\)</span>
                </div>
              </div>`, 
        guidedSteps: ["Create a slider for the variable \\(b\\) and invent a number", "Declare the given expression", "Type each answer choice and match"],
        guidedAnswer: "The Answer is D", guidedScreenshot: "",
        practice: [
          { text: `The equation
            <p style="text-align:center;margin-bottom:12px">\\( y = \\frac{1}{5}(5x^2 - 60c) \\)?</p>
            is equivalent to which of the folllowing where \\(c\\) is a positive constant?
            <div class="mc-choice">
                  <span class="mc-label">A</span>
                  <span>\\( y = (x + 2\\sqrt{3c})(x - 2\\sqrt{3c}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">B</span>
                  <span>\\(  y = (x + \\sqrt{6c})(x - \\sqrt{6c}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">C</span>
                  <span>\\(  y = (x + 12c)(x - 12c) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">D</span>
                  <span>\\( y = (x + 6\\sqrt{3c})(x - 6\\sqrt{3c}) \\)</span>
                </div>
              </div>`, },
          { text: `The equation
            <p style="text-align:center;margin-bottom:12px">\\( y = 3(\\frac{x^2}{3} - 7d) + 2d \\)?</p>
            is equivalent to which of the folllowing where \\(d\\) is a positive constant?
            <div class="mc-choice">
                  <span class="mc-label">A</span>
                  <span>\\( y = (x + \\sqrt{19d})(x - \\sqrt{19d}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">B</span>
                  <span>\\(  y = (x + \\sqrt{21d})(x - \\sqrt{21d}) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">C</span>
                  <span>\\(  y = (x + 19d)(x - 19d) \\)</span>
                </div>
                <div class="mc-choice">
                  <span class="mc-label">D</span>
                  <span>\\( y = (x + \\sqrt{7d})(x - \\sqrt{7d}) \\)</span>
                </div>
              </div>`, 
          },
        ],
        additionalPractice: [
  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = 3\\left(\\frac{x^2}{3} - 8a\\right) \\)</p>
    <p>is equivalent to which of the following, where \\(a\\) is a positive constant?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + \\sqrt{24a})(x - \\sqrt{24a}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + \\sqrt{8a})(x - \\sqrt{8a}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 24a)(x - 24a) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 4\\sqrt{3a})(x - 4\\sqrt{3a}) \\)</span>
      </div>
    </div>` },

  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = 7x^2 - 6x^2 - 320 \\)</p>
    <p>is equivalent to which of the following, where \\(b\\) is a positive constant?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + \\sqrt{160})(x - \\sqrt{160}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + 8\\sqrt{20})(x - 8\\sqrt{20}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 4\\sqrt{20})(x - 4\\sqrt{20}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + \\sqrt{80})(x - \\sqrt{80}) \\)</span>
      </div>
    </div>` },

  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = \\frac{1}{4}(4x^2 - 80c) \\)</p>
    <p>is equivalent to which of the following, where \\(c\\) is a positive constant?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + 2\\sqrt{5c})(x - 2\\sqrt{5c}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + \\sqrt{5c})(x - \\sqrt{5c}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + 4\\sqrt{5c})(x - 4\\sqrt{5c}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 20c)(x - 20c) \\)</span>
      </div>
    </div>` },

  { text: `<p>The equation</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( y = 5\\left(\\frac{x^2}{5} - 9d\\right) + 13d \\)</p>
    <p>is equivalent to which of the following, where \\(d\\) is a positive constant?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( y = (x + \\sqrt{45d})(x - \\sqrt{45d}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( y = (x + 4\\sqrt{2d})(x - 4\\sqrt{2d}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( y = (x + \\sqrt{13d})(x - \\sqrt{13d}) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( y = (x + 8d)(x - 8d) \\)</span>
      </div>
    </div>` },
],
      },
 
      // Problem 11
      {
        problem: `Which expression is equivalent to
        <p style="text-align:center;margin-bottom:12px"> \\( (2a - \\frac{b}{3})^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 4a^2 - \\frac{2ab}{3} + \\frac{b^2}{9} \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 4a^2 - \\frac{4ab}{3} + \\frac{b^2}{9} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4a^2 - \\frac{4ab}{3} + \\frac{b^2}{3} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2a^2 - \\frac{4ab}{3} + \\frac{b^2}{9} \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Create a slider for the variables \\(a\\) and \\(b\\) and invent numbers", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787953947/problem11-step1_gl3lm3.mov" },
          { text: "Type the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787953948/problem11-step2_xtljs1.mov" },
          { text: "Type each answer choice and match", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787953951/problem11-step3_hfv3mv.mov" },
        ],
        guidedProblem: `Which expression is equivalent to
        <p style="text-align:center;margin-bottom:12px"> \\( (\\frac{3m}{2} + 2n)^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( \\frac{9}{4}m^2 + 6mn + 4n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{9}{4}m^2 + 3mn + 4n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{9}{4}m^2 + 12mn + 4n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{3}{2}m^2 + 6mn + 4n^2 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Create a slider for the variables \\(m\\) and \\(n\\) and invent numbers", "Declare the given expression", "Type each answer choice and match"],
        guidedAnswer: "The Answer is A", guidedScreenshot: "",
        practice: [
          { text: `Which expression is equivalent to
        <p style="text-align:center;margin-bottom:12px"> \\( (\\frac{m}{4} - 5n)^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( \\frac{m^2}{16} - \\frac{5mn}{2} + 25n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{m^2}{16} - \\frac{5mn}{4} - 25n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{m^2}{8} - \\frac{5mn}{2} + 25n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{m^2}{16} + 6mn + 4n^2 \\)</span>
        </div>
        </div>`, 
        },
        { text: `Which expression is equivalent to
        <p style="text-align:center;margin-bottom:12px"> \\( ( 4p - \\frac{3q}{2})^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 16p^2 - 12pq - \\frac{9q^2}{4} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 16p^2 - 6pq + \\frac{9q^2}{4} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 16p^2 + 12pq + \\frac{9q^2}{4} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 8p^2 - 12pq + \\frac{9q^2}{4} \\)</span>
        </div>
        </div>`, 
        },

        ],
        additionalPractice: [
  { text: `<p>The expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\frac{1}{6}(3p^2 - 450) \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\frac{1}{2}(p-r)(p+r), \\)</p>
    <p>where \\(r\\) is a positive constant.</p>
    <p>What is the value of \\(r\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(5\\sqrt{3}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(10\\sqrt{2}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(5\\sqrt{2}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(5\\sqrt{6}\\)</span>
      </div>
    </div>` },

  { text: `<p>The expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\frac{1}{4}(4r^2 - 320) \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( (r-t)(r+t), \\)</p>
    <p>where \\(t\\) is a positive constant.</p>
    <p>What is the value of \\(t\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(4\\sqrt{5}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(8\\sqrt{2}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(2\\sqrt{10}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(4\\sqrt{3}\\)</span>
      </div>
    </div>` },

  { text: `<p>The expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\frac{1}{5}(10m^2 - 600) \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 2(m-r)(m+r), \\)</p>
    <p>where \\(r\\) is a positive constant.</p>
    <p>What is the value of \\(r\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(5\\sqrt{3}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(2\\sqrt{15}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(2\\sqrt{10}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(5\\sqrt{2}\\)</span>
      </div>
    </div>` },

  { text: `<p>The expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\frac{1}{8}(2n^2 - 224) \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\frac{1}{4}(n-r)(n+r), \\)</p>
    <p>where \\(r\\) is a positive constant.</p>
    <p>What is the value of \\(r\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(2\\sqrt{14}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(4\\sqrt{7}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(4\\sqrt{5}\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(2\\sqrt{10}\\)</span>
      </div>
    </div>` },
],
      },
 
      // Problem 12
      {
        problem: `<p style="text-align:center;margin-bottom:12px"> \\( ( 18n^2 - 42np + 30p^2) \\) </p>
        Which expression is equivalent to the expression above?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 6(3n^2 - 7np + 5p^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 3(6n^2 - 7np + 10p^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6n(3n - 7p + 5p^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2(9n^2 - 14np + 15p^2) \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Create a slider for the variables \\(n\\) and \\(p\\) and invent numbers", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787954505/problem12-step1_qqu001.mov" },
          { text: "Declare the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787954506/problem12-step2_spdscq.mov" },
          { text: "Type each answer choice and match", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787954510/problem12-step3_j0pocv.mov" },
        ],
        guidedProblem: `Which expression is equivalent to
        <p style="text-align:center;margin-bottom:12px"> \\( ( 20a^2 - 32ab + 12b^2) \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 2(10a^2 - 8ab + 6b^2) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 4(5a^2 - 8ab + 3b^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4a(5a - 8b + 3b^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 8(5a^2 - 4ab + 3b^2) \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Create a slider for the variables \\(a\\) and \\(b\\) and invent numbers", "Declare the given expression", "Type each answer choice and match"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "",
        practice: [
          { text: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( ( 27m^2 - 45mn + 18n^2) \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3(9m^2 - 5mn + 6n^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 9m(3m - 5n + 2n^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 9(3m^2 - 5mn + 2n^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6(4m^2 - 7mn + 3n^2) \\)</span>
        </div>
        </div>` },
          { text: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( ( 28p^2 + 44pq - 16q^2) \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 2(14p^2 + 11pq - 8q^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 4p(7p + 11q - 4q^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 8(7p^2 + 11pq - 4q^2) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 4(7p^2 + 11pq - 4q^2) \\)</span>
        </div>
        </div>` },
        ]
      },
 
      // Problem 13
      {
        problem: `If \\( m = \\frac{1}{9}p^2 + \\frac{1}{9}q^2 \\) and \\( n = \\frac{1}{9}pq \\), which of the following is equivalent to \\( 36m - 72n \\)?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (2p - 2q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (2p + 2q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (4p - 4q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (p - q)^2 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Create a slider for the variables \\(p\\) and \\(q\\) and invent numbers", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787955499/problem13-step1_i1uivh.mov" },
          { text: "Declare the expression for \\( m \\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787955501/problem13-step2_nuv6n4.mov" },
          { text: "Declare the expression for \\( n \\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787955504/problem13-step3_wtdcmv.mov" },
          { text: "Type the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787955507/problem13-step4_hwqk0e.mov" },
          { text: "Type each answer choice and match to the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787955509/problem13-step5_narsif.mov" },
        ],
        guidedProblem: `If \\( m = \\frac{3}{8}p^2 + \\frac{3}{8}q^2 \\) and \\( n = \\frac{3}{8}pq \\), which of the following is equivalent to \\( 8m - 16n \\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3(p + q)^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 3(p - q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6(p - q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6(p + q)^2 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Create a slider for the variables \\(p\\) and \\(q\\) and invent numbers", "Declare the expression for \\( m \\)", "Declare the expression for \\( n \\)", "Type the given expression", "Type each answer choice and match to the given expression"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "",
        practice: [

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m = \\frac{1}{4}p^2 + \\frac{1}{4}q^2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n = \\frac{1}{4}pq, \\)</p>
    <p>which of the following is equivalent to \\(12m - 24n\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3(p + q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 6(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 3(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (3p - 3q)^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m = \\frac{2}{5}p^2 + \\frac{2}{5}q^2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n = \\frac{2}{5}pq, \\)</p>
    <p>which of the following is equivalent to \\(15m - 30n\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 6(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 3(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6(p + q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (6p - 6q)^2 \\)</span>
      </div>
    </div>` },
        ] ,
        additionalPractice: [
          
  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m = \\frac{5}{7}p^2 + \\frac{5}{7}q^2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n = \\frac{5}{7}pq, \\)</p>
    <p>which of the following is equivalent to \\(14m - 28n\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 10(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 5(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 10(p + q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (5p - 5q)^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m = \\frac{1}{6}p^2 + \\frac{1}{6}q^2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n = \\frac{1}{6}pq, \\)</p>
    <p>which of the following is equivalent to \\(30m - 60n\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 10(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 5(p + q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 5(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (5p - 5q)^2 \\)</span>
      </div>
    </div>` },
          
  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m = \\frac{4}{9}p^2 + \\frac{4}{9}q^2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n = \\frac{4}{9}pq, \\)</p>
    <p>which of the following is equivalent to \\(9m - 18n\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 2(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 8(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4(p + q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 4(p - q)^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m = \\frac{3}{10}p^2 + \\frac{3}{10}q^2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n = \\frac{3}{10}pq, \\)</p>
    <p>which of the following is equivalent to \\(20m - 40n\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 6(p - q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6(p + q)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (6p - 6q)^2 \\)</span>
      </div>
    </div>` },
],
      },
 
 
      // Problem 14
      {
        problem: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 25x^2 - 49y^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (5x - 7y)(5x + 7y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (25x - 49y)(25x + 49y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (5x - 49y)(5x + 49y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (25x - 7y)(25x + 7y) \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Note that you cannot use \\(x\\) and \\(y\\) as variables for sliders. Create sliders using two other variables and invent numbers for them", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787956045/problem14-step1_oajb7k.mov" },
          { text: "Declare the given expression using the new slider variables", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787956046/problem14-step2_d25d0p.mov" },
          { text: "Type each answer choice and match to the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1787956052/problem14-step3_ojvxqk.mov" },
        ],
        guidedProblem: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 64m^2 - 121n^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (8m - 121n)(8m + 121nq) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (64m - 11n)(64m + 11n) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( (8m - 11n)(8m + 11n) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (8m - 11n)^2 \\)</span>
        </div>
        </div>`,
        guidedSteps: [
          "Create a slider for the variables \\(m\\) and \\(n\\) and invent numbers",
          "Type the given expression",
          "Type each answer choice and match to the given expression",
        ],
        guidedAnswer: "The Answer is C", guidedAnswerValue: "", guidedScreenshot: "",
        practice: [
          { text: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 144p^2 - 169q^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (12p - 169q)(12p + 169q) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (12p - 13q)(12p + 13q) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( (144p - 13q)(144p + 13q) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (12p + 13q)^2 \\)</span>
        </div>
        </div>` },
          { text: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 225r^2 - 196s^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (15r - 196s)(15r + 196s) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (225r - 14s)(225r + 14s) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( (15r - 14s)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (15r - 14s)(15r + 14s) \\)</span>
        </div>
        </div>` },
        ],
        additionalPractice: [
  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 196a^2 - 225b^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (14a - 15b)(14a + 15b) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (196a - 15b)(196a + 15b) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (14a - 225b)(14a - 225b) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (14a - 15b)^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 324m^2 - 121n^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (18m - 121n)(18m - 121n) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (18m - 11n)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (18m - 11n)(18m + 11n) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (324m - 11n)(324m - 11n) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 169p^2 - 256q^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (13p - 256q)(13p + 256q) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (13p - 16q)(13p + 16q) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (169p - 16q)(169p + 16q) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (13p + 16q)^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 400r^2 - 289s^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (20r - 289s)(20r + 289s) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (400r - 17s)(400r + 17s) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (20r - 17s)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (20r - 17s)(20r + 17s) \\)</span>
      </div>
    </div>` },
],
      },
 
 
      // Problem 15
      {
        problem: `If \\(m = \\frac{1}{9}p^2 + \\frac{1}{9}q^2\\) and \\( n = \\frac{1}{9}pq\\), which of the following is equivalent to \\(36m - 72n\\)?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span> \\((2p - 2q)^2 \\) </span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span> \\((2p + 2q)^2 \\) </span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span> \\((4p - 4q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span> \\((p - q)^2 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Create a slider for the variables \\(p\\) and \\(q\\) and invent numbers", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788021925/problem15-step1_h0elbu.mov" },
          { text: "Declare the expressions \\(m\\) and \\(n\\)", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788021926/problem15-step2_cxpvs4.mov" },
          { text: "Declare the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788021931/problem15-step3_bbluaz.mov" },
          { text: "Type each answer choice and match to the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788021933/problem15-step4_yjh1ei.mov" },
        ],
        guidedProblem: `If \\(m = \\frac{3}{8}p^2 + \\frac{3}{8}q^2\\) and \\( n = \\frac{3}{8}pq\\), which of the following is equivalent to \\(8m - 16n\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span> \\( 3(p + q)^2 \\) </span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span> \\( 3(p + q)^2 \\) </span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span> \\( 6(p - q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span> \\( 6(p + q)^2 \\)</span>
        </div>
        </div>`     
        , guidedSteps: ["Create a slider for the variables \\(p\\) and \\(q\\) and invent numbers", "Declare the expressions \\(m\\) and \\(n\\)", "Declare the given expression", "Type each answer choice and match to the given expression"],
        guidedAnswer: "The Answer is B", guidedScreenshot: "",
        practice: [
          { text: `` },
          { text: `` },  
      ]
      },

 
      // Problem 16
      {
        problem: `Which expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( c^2x^2 - a^2y^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (cx - ay)(cx + ay) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (c^2x - ay)(c^2x + ay) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (cx - a^2y)(cx + a^2y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (cx - ay)^2 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Create a slider for the variables \\(c\\), \\(a\\), \\(x\\), and \\(y\\) and invent numbers", note: "Note that you cannot use \\(x\\) and \\(y\\) as variables for sliders", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788022427/problem16-step1_hijquq.mov" },
          { text: "Declare the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788022428/problem16-step2_actxyg.mov" },
          { text: "Type each answer choice and match to the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788022433/problem16-step3_vtytpj.mov" },
        ],

        guidedProblem: `Which expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( m^2p^2 - n^2q^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (mp - nq)^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( (mp - nq)(mp + nq) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (m^2p - nq)(m^2p + nq) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (mp - n^2q)(mp + n^2q) \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Create a slider for the variables \\(m\\), \\(n\\), \\(p\\), and \\(q\\) and invent numbers",
          "Declare the given expression",
          "Type each answer choice and match to the given expression"
        ],

        guidedAnswer: "The answer is B",
        guidedScreenshot: "",

        practice: [
          {
            text: `Which expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( r^2u^2 - s^2v^2 \\) </p>
            <div class="mc-choices">
            <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\( (ru - sv)(ru + sv) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( (r^2u - sv)(r^2u + sv) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( (ru - s^2v)(ru + s^2v) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( (ru + sv)^2 \\)</span>
            </div>
            </div>`
          },

          {
            text: `Which expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( b^2h^2 - d^2k^2 \\) </p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( (bh - dk)^2 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( (b^2h - dk)(b^2h + dk) \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( (bh - d^2k)(bh + d^2k) \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( (bh - dk)(bh + dk) \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( c^2m^2 - f^2n^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (cm - fn)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (cm + fn)(cm - fn) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (c^2m - fn)(cm + fn) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (cm + f^2n)(cm - f^2n) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( r^2s^2 - v^2w^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (rs)^2 - (vw)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (rs - vw)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( rs(rs - vw) + vw(rs - vw) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( r(rs - vw)(s + vw) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g^2j^2 - t^2u^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (gj - tu)(gj + tu) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( g^2j^2 - 2gjtu + t^2u^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (g^2j - tu)(j + tu) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( gj(gj - tu) - tu(gj - tu) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( a^2k^2 - c^2z^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (ak - cz)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( ak(ak + cz) + cz(ak + cz) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (a^2k - cz)(k + cz) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( ak(ak - cz) + cz(ak - cz) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( p^2d^2 - h^2q^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( pd(pd - hq) - hq(pd - hq) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( pd(pd - hq) + hq(pd - hq) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (pd + hq)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (p^2d - hq)(d + hq) \\)</span>
      </div>
    </div>` },

  { text: `<p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( x^2r^2 - y^2s^2 \\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (xr - ys)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x^2r^2 + 2xrys + y^2s^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (xr + ys)(xr - ys) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( xr(xr - ys) - ys(xr + ys) \\)</span>
      </div>
    </div>` },
],
      },

      // Problem 17
      {
        problem: `If 
            <p style="text-align:center;margin-bottom:12px"> \\( m^2 = p + \\frac{q}{2} \\) </p>
            and 
            <p style="text-align:center;margin-bottom:12px"> \\( n^2 = p - \\frac{3r}{2} \\) </p>
            which of the following is equal to
            <p style="text-align:center;margin-bottom:12px"> \\( 4 ( m^2 - n^2)^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( q^2 - 6qr + 9r^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 4q^2 + 12qr + 9r^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( q^2 + 3qr + 9r^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( q^2 + 6qr + 9r^2 \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Create a slider for the variables \\(p\\), \\(q\\), and \\(r\\) and invent numbers", note: "", gif: "", answer: "" , video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788022942/problem17-step1_melodb.mov" },
          { text: "Recognize that you can subsitute the equations for \\(m^2\\) and \\(n^2\\) into the given expression", note: "", gif: "", answer: "" , video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788022945/problem17-step2_dhjzcl.mov" },
          { text: "Type each answer choice and match to the given expression", note: "", gif: "", answer: "" , video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788022949/problem17-step3_wgiae0.mov" },
        ],
        guidedProblem: `If 
            <p style="text-align:center;margin-bottom:12px"> \\( u^2 = s + \\frac{3t}{2} \\) </p>
            and 
            <p style="text-align:center;margin-bottom:12px"> \\( v^2 = s - \\frac{w}{2} \\) </p>
            which of the following is equal to
            <p style="text-align:center;margin-bottom:12px"> \\( 4 ( u^2 - v^2)^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 9t^2 + 6tw + w^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 9t^2 - 6tw + w^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 9t^2 + 3tw + w^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( 36t^2 + 12tw + w^2 \\)</span>
        </div>
        </div>`,
        guidedSteps: ["Create a slider for the variables \\(s\\), \\(t\\), and \\(w\\) and invent numbers", "Recognize that you can subsitute the equations for \\(u^2\\) and \\(v^2\\) into the given expression", "Type each answer choice and match to the given expression"],
        guidedAnswer: "The answer is A", guidedScreenshot: "",
        practice: [
          { text: `If 
            <p style="text-align:center;margin-bottom:12px"> \\( h^2 = k + \\frac{r}{3} \\) </p>
            and 
            <p style="text-align:center;margin-bottom:12px"> \\( j^2 = k - \\frac{2s}{3} \\) </p>
            which of the following is equal to
            <p style="text-align:center;margin-bottom:12px"> \\( 9(h^2 - j^2)^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( r^2 - 4rs + 4s^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( r^2 + 2rs + 4s^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( r^2 + 4rs + 4s^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 9r^2 + 12rs + 4s^2 \\)</span>
        </div>
        </div>` },
          { text: `If 
            <p style="text-align:center;margin-bottom:12px"> \\( f^2 = g + \\frac{2m}{5} \\) </p>
            and 
            <p style="text-align:center;margin-bottom:12px"> \\( h^2 = g - \\frac{3m}{5} \\) </p>
            which of the following is equal to
            <p style="text-align:center;margin-bottom:12px"> \\( 25(f^2 - h^2)^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 4m^2 - 12mn + 9n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 4m^2 + 12mn + 9n^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( 4m^2 + 6mn + 9n^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 20m^2 + 12mn + 15n^2 \\)</span>
        </div>
        </div>`},
        ],
        additionalPractice: [
  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( a^2 = k + \\frac{r}{4} \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( b^2 = k - \\frac{s}{2}, \\)</p>
    <p>which of the following is equal to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 16(a^2 - b^2)^2? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( r(r + 4s) + 4s^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (r - 2s)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( r^2 + 2rs + 4s^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 4(r + s)^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m^2 = p + \\frac{2q}{5} \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n^2 = p - \\frac{r}{5}, \\)</p>
    <p>which of the following is equal to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 25(m^2 - n^2)^2? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (2q - r)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 4q(q + r) + r^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (q + r)(4q + r) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2q(2q + r) + r^2 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( v^2 = t + \\frac{z}{3} \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( w^2 = t - \\frac{2z}{3}, \\)</p>
    <p>which of the following is equal to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 9(v^2 - w^2)^2? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( z^2 + 2z^2 + 4z^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (z - 2z)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( z(z + 4z) + 4z^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (z + z)(z + 4z) \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g^2 = a + \\frac{3b}{8} \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( h^2 = a - \\frac{c}{8}, \\)</p>
    <p>which of the following is equal to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 64(g^2 - h^2)^2? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3b(3b + c) + c^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 9b^2 + 3bc + c^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (3b - c)^2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (3b + c)^2 \\)</span>
      </div>
    </div>` },
],
      },
 
      // Problem 18
      {
        problem: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 25x^2 - 49y^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (5x - 7y)(5x + 7y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (25x - 49y)(25x + 49y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (5x - 49y)(5x + 49y) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (25x - 7y)(25x + 7y) \\)</span>
        </div>
        </div>`,
        steps: [
          { text: "Create sliders using two other variables and invent numbers for them", note: "Note that you cannot use \\(x\\) and \\(y\\) as variables for sliders", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788026165/problem18-step1_vezxgf.mov" },
          { text: "Type the given expression using the new slider variables", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788026165/problem18-step2_su9f6j.mov" },
          { text: "Type each answer choice and match to the given expression", note: "", gif: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788026165/problem18-step3_gunsai.mov" },
        ],
        guidedProblem: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 64m^2 - 121n^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (8m - 121n)(8m + 121nq) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (64m - 11n)(64m + 11n) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( (8m - 11n)(8m + 11n) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (8m - 11n)^2 \\)</span>
        </div>
        </div>`,
        guidedSteps: [
          "Create a slider for the variables \\(m\\) and \\(n\\) and invent numbers",
          "Type the given expression",
          "Type each answer choice and match to the given expression",
        ],
        guidedAnswer: "The Answer is C", guidedAnswerValue: "", guidedScreenshot: "",
        practice: [
          { text: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 144p^2 - 169q^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (12p - 169q)(12p + 169q) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (12p - 13q)(12p + 13q) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( (144p - 13q)(144p + 13q) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (12p + 13q)^2 \\)</span>
        </div>
        </div>` },
          { text: `Which expression is equivalent to 
            <p style="text-align:center;margin-bottom:12px"> \\( 225r^2 - 196s^2 \\) </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (15r - 196s)(15r + 196s) \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (225r - 14s)(225r + 14s) \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( (15r - 14s)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (15r - 14s)(15r + 14s) \\)</span>
        </div>
        </div>` },
        ]
      },
 
      // Problem 19
      {
        problem: `The functions are defined by
            <p style="text-align:center;margin-bottom:12px"> \\( g(x) = \\frac{4}{5}x - 2 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( h(x) = 5x + 6 \\) </p>
            Which expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( 2g(x) \\cdot h(x) \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 8x^2 - \\frac{52}{5}x - 24 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 8x^2 + \\frac{52}{5}x - 24 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4x^2 - \\frac{52}{5}x - 24 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 8x^2 - \\frac{26}{5}x - 24 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Declare the functions \\(g(x)\\) and \\(h(x)\\) into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788024280/problem19-step1_pdoqfm.mov" },
          { text: "Type the given expression into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788024282/problem19-step2_qrw0ji.mov" },
          { text: "Type each answer choice and match it to the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788024286/problem19-step3_korlxr.mov" },
        ],

        guidedProblem: `The functions are defined by
            <p style="text-align:center;margin-bottom:12px"> \\( g(x) = \\frac{3}{5}x + 4 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( h(x) = 10x - 3 \\) </p>
            Which expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( 3g(x) \\cdot h(x) \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 18x^2 + \\frac{313}{5}x - 36 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 18x^2 + \\frac{253}{5}x + 36 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( 18x^2 + \\frac{573}{5}x - 36 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 9x^2 + \\frac{381}{5}x - 36 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Type the functions \\(g(x)\\) and \\(h(x)\\) into Desmos",
          "Type the given expression into Desmos",
          "Type each answer choice and match it to the given expression"
        ],

        guidedAnswer: "The answer is C",
        guidedScreenshot: "",

        practice: [
          {
            text: `The functions are defined by
                <p style="text-align:center;margin-bottom:12px"> \\( p(x) = \\frac{5}{6}x - 2 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( q(x) = 12x + 9 \\) </p>
                Which expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( 2p(x) \\cdot q(x) \\)? </p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 20x^2 - 15x - 36 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 10x^2 - 33x - 36 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 20x^2 - 33x + 36 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( 20x^2 - 33x - 36 \\)</span>
            </div>
            </div>`
          },

          {
            text: `The functions are defined by
                <p style="text-align:center;margin-bottom:12px"> \\( r(x) = \\frac{7}{4}x + 1 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( s(x) = 8x - 6 \\) </p>
                Which expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( 4r(x) \\cdot s(x) \\)? </p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 56x^2 + 10x - 24 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 56x^2 - 10x - 24 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 56x^2 - 10x + 24 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 28x^2 - 10x - 24 \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>The functions are defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(x) = \\frac{5}{3}x + 2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g(x) = 6x - 8. \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 3[f(x) \\cdot g(x)]? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (5x + 6)(6x - 8) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 30x^2 - 6x - 24 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 3(10x^2 - 3x - 16) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 30x^2 + 6x - 24 \\)</span>
      </div>
    </div>` },

  { text: `<p>The functions are defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( p(x) = \\frac{3}{4}x - 2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( q(x) = 8x + 5. \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 4p(x) \\cdot q(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 24x^2 - 48x - 40 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 3x(8x + 5) - 8(8x + 5) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (3x - 2)(8x + 5) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 8(3x^2 - 2x - 5) \\)</span>
      </div>
    </div>` },

  { text: `<p>The functions are defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( r(x) = \\frac{7}{5}x + 3 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( s(x) = 10x - 4. \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 5r(x) \\cdot s(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 70x^2 + 60x - 60 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 2(35x^2 + 61x - 30) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (7x + 3)(10x - 4) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 14x(5x + 11) - 88 \\)</span>
      </div>
    </div>` },

  { text: `<p>The functions are defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m(x) = \\frac{4}{3}x - 5 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n(x) = 9x + 2. \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 3m(x) \\cdot n(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 36x^2 - 127x - 30 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 3(12x^2 - 37x - 10) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (4x - 15)(9x + 2) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 4x(9x + 2) - 15(9x - 2) \\)</span>
      </div>
    </div>` },
],
      },

      // Problem 20
      {
        problem: `The functions \\(r\\) and \\(s\\) are defined by the equations shown.
            <p style="text-align:center;margin-bottom:12px"> \\( r(x) = 2(3x - 1)(x + 4) \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( s(x) = \\left(\\frac{5}{2}x + 3\\right)(2x - 5) \\) </p>
            Which expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( r(x) - s(x) \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( x^2 + \\frac{57}{2}x - 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 11x^2 + \\frac{57}{2}x + 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( x^2 + \\frac{31}{2}x + 7 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( x^2 + \\frac{57}{2}x + 7 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Type the functions \\(r(x)\\) and \\(s(x)\\) into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030024/problem20-step1_emj7ro.mov" },
          { text: "Type the given expression into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030024/problem20-step2_gtnuhs.mov" },
          { text: "Type each answer choice and match it to the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030024/problem20-step2_gtnuhs.mov" },
        ],

        guidedProblem: `The functions \\(f\\) and \\(g\\) are defined by the equations shown.
            <p style="text-align:center;margin-bottom:12px"> \\( f(x) = \\left(\\frac{5}{6}x - 3\\right)(3x + 6) \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( g(x) = 4(2x + 7)(x - 8) \\) </p>
            Which expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( f(x) + g(x) \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( \\frac{9}{2}x^2 - 13x - 74 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\frac{21}{2}x^2 + 32x - 242 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\frac{21}{2}x^2 - 40x - 206 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( \\frac{21}{2}x^2 - 40x - 242 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Type the functions \\(f(x)\\) and \\(g(x)\\) into Desmos",
          "Type the given expression into Desmos",
          "Type each answer choice and match it to the given expression"
        ],

        guidedAnswer: "The answer is D",
        guidedScreenshot: "",

        practice: [
          {
            text: `The functions \\(f\\) and \\(g\\) are defined by the equations shown.
                <p style="text-align:center;margin-bottom:12px"> \\( f(x) = 3\\left(x - \\frac{5}{2}\\right)^2 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( g(x) = 2(2x + 1)(x - 4) \\) </p>
                Which expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( f(x) + g(x) \\)? </p>
            <div class="mc-choices">
            <div class="mc-choice correct">
            <span class="mc-label">A</span>
            <span>\\( 7x^2 - 29x + \\frac{43}{4} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 7x^2 - 29x + \\frac{107}{4} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 11x^2 - 29x + \\frac{43}{4} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 7x^2 - x + \\frac{43}{4} \\)</span>
            </div>
            </div>`
          },

          {
            text: `The functions \\(p\\) and \\(q\\) are defined by the equations shown.
                <p style="text-align:center;margin-bottom:12px"> \\( p(x) = 5\\left(x + \\frac{3}{2}\\right)^2 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( q(x) = 3(x - 2)(x + 5) \\) </p>
                Which expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( p(x) - q(x) \\)? </p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 2x^2 + 18x + \\frac{165}{4} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 8x^2 + 6x + \\frac{165}{4} \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( 2x^2 + 6x + \\frac{165}{4} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 2x^2 + 6x - \\frac{165}{4} \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>The functions \\(r\\) and \\(s\\) are defined by the equations shown.</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( r(x) = 3(2x - 1)(x + 5) \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( s(x) = \\left(\\frac{5}{2}x - 2\\right)(2x + 3) \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( r(x) - s(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( x^2 + \\frac{47}{2}x + 9 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x\\left(x + \\frac{47}{2}\\right) - 9 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 2x^2 + \\frac{47}{2}x - 9 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( x\\left(x + \\frac{43}{2}\\right) - 9 \\)</span>
      </div>
    </div>` },

  { text: `<p>The functions \\(f\\) and \\(g\\) are defined by the equations shown.</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(x) = 2(3x + 2)(x - 4) \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g(x) = \\left(\\frac{5}{2}x + 1\\right)(2x - 6) \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(x) - g(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( x^2 - 7x + 10 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x(x - 5) - 10 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( x(x - 7) - 10 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( x^2 - 13x - 10 \\)</span>
      </div>
    </div>` },

  { text: `<p>The functions \\(p\\) and \\(q\\) are defined by the equations shown.</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( p(x) = 4(x - 3)(2x + 1) \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( q(x) = \\left(\\frac{3}{2}x - 5\\right)(4x + 2) \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( p(x) - q(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( (2x - 1)(x + 2) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 2x(x - 1) - x - 2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 2x^2 + 3x - 2 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (2x + 1)(x - 2) \\)</span>
      </div>
    </div>` },

  { text: `<p>The functions \\(m\\) and \\(n\\) are defined by the equations shown.</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m(x) = 2(4x - 1)(x + 3) \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( n(x) = \\left(\\frac{7}{2}x + 2\\right)(2x - 5) \\)</p>
    <p>Which expression is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( m(x) - n(x)? \\)</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( x^2 + \\frac{71}{2}x + 4 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x\\left(x + \\frac{71}{2}\\right) - 4 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( x^2 + \\frac{35}{2}x + 4 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2x^2 + \\frac{71}{2}x + 4 \\)</span>
      </div>
    </div>` },
],
      },

      // Problem 21
      {
        problem: `If 
            <p style="text-align:center;margin-bottom:12px"> \\( u = 3x - 5 \\) </p>
            which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( \\sqrt{u^2 + 10u + 25} \\) </p>
            for all \\(x \\geq \\frac{5}{3}\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3x - 5 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 3x \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 3x + 5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6x \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Create a slider that follows the given constraints for \\(x\\)", note: "Note that you cannot use \\(x\\) as a slider so you need to choose another variable", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030684/problem21-step1_lq1lw2.mov" },
          { text: "Declare the expression for \\(u\\)", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030685/problem21-step2_rrfpq3.mov" },
          { text: "Declare the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030685/problem21-step3_xjeyw5.mov" },
          { text: "Type each answer choice and match it to the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788030685/problem21-step4_zzmshj.mov" },
        ],

        guidedProblem: `The function \\(f\\) is defined by
            <p style="text-align:center;margin-bottom:12px"> \\( f(x) = \\sqrt{(2x - 7)^2} \\) </p>
            If \\(x \\geq \\frac{7}{2}\\), which of the following is equivalent to \\(f(x)\\)?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( 2x - 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 7 - 2x \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 2x + 7 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 4x - 7 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Create a slider that follows the given constraint for \\(x\\)",
          "Declare the expression for \\(f(x)\\) using the corresponding slider",
          "Type each answer choice and match it to the given expression"
        ],

        guidedAnswer: "The answer is A",
        guidedScreenshot: "",

        practice: [
          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( g(x) = x^2 + 8x \\) </p>
                which of the following is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\sqrt{g(x) + 16} \\) </p>
                for all \\(x \\geq -4\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( x + 2 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 2x + 4 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( x + 4 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( x + 8 \\)</span>
            </div>
            </div>`
          },

          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( a = x^2 + 6x + 9 \\) </p>
                which of the following is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\sqrt{4a} \\) </p>
                for all \\(x \\geq -3\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 2x + 3 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 2x + 6 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( x + 3 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 4x + 6 \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( p = 4x - 7, \\)</p>
    <p>which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\sqrt{p^2 + 14p + 49} \\)</p>
    <p>for all \\(x \\geq \\frac{7}{4}\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 4x - 7 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 2(2x + 7) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4x \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 2x \\)</span>
      </div>
    </div>` },

  { text: `<p>The function \\(f\\) is defined by</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( f(x) = \\sqrt{(5x - 8)^2} \\)</p>
    <p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( x \\geq \\frac{8}{5}, \\)</p>
    <p>which of the following is equivalent to \\(f(x)\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 8 - 5x \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 5x - 8 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 5\\left(x + \\frac{8}{5}\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 10x - 8 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( g(x) = x^2 + 12x, \\)</p>
    <p>which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\sqrt{g(x) + 36} \\)</p>
    <p>for all \\(x \\geq -6\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 2(x + 3) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( x + 12 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6\\left(\\frac{x}{6} + 1\\right) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( x - 6 \\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( q = x^2 - 10x + 25, \\)</p>
    <p>which of the following is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( \\sqrt{9q} \\)</p>
    <p>for all \\(x \\geq 5\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3x - 15 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 3(x + 5) \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 9x - 45 \\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( \\frac{3}{2}(2x - 5) \\)</span>
      </div>
    </div>` },
],
      },

      // Problem 22

      {
        problem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( p=2x+3 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( q=3x-4 \\), </p>
            the expression
            <p style="text-align:center;margin-bottom:12px"> \\( pq+2p-q \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( 6x^2+kx-2 \\), </p>
            where \\(k\\) is a constant. What is the value of \\(k\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 4 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Create a slider for \\(k\\)", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788031562/problem22-step1_mrdneo.mov" },
          { text: "Declare the expressions for \\(p\\) and \\(q\\) into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788031563/problem22-step2_sdmdf5.mov" },
          { text: "Type the given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788031563/problem22-step3_swxex1.mov" },
          { text: "Type the second given expression", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788031564/problem22-step4_dly0ls.mov" },
          { text: "Adjust \\(k\\) using the answer choices until the expressions match", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788031568/problem22-step5_forxe7.mov" },
        ],

        guidedProblem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( a=5x+2 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( b=2x-3 \\), </p>
            the expression
            <p style="text-align:center;margin-bottom:12px"> \\( ab+a-2b \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( 10x^2+kx+2 \\). </p>
            What is the value of \\(k\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -14 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( -12 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( -10 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -8 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Create a slider for \\(k\\)",
          "Declare the expressions for \\(p\\) and \\(q\\) into Desmos",
          "Type the given expression",
          "Adjust \\(k\\) using the answer choices until the expressions match"
        ],

        guidedAnswer: "The answer is C",
        guidedScreenshot: "",

        practice: [
          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( r=4x-1 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( s=x+6 \\), </p>
                the expression
                <p style="text-align:center;margin-bottom:12px"> \\( rs-r+3s \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( 4x^2+kx+13 \\). </p>
                What is the value of \\(k\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 18 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 20 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( 22 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 26 \\)</span>
            </div>
            </div>`
          },

          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( u=3x-5 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( v=4x+1 \\), </p>
                the expression
                <p style="text-align:center;margin-bottom:12px"> \\( uv-2u+v \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( 12x^2+kx+6 \\). </p>
                What is the value of \\(k\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( -23 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( -21 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( -19 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( -17 \\)</span>
            </div>
            </div>`
          }
        ],
        additionalPractice: [
  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( p = 3x + 2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( q = 2x - 5, \\)</p>
    <p>the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( pq + 2p - q \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 6x^2 + cx - 1, \\)</p>
    <p>where \\(c\\) is a constant. What is the value of \\(c\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(-11\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(-9\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(-7\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(-5\\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( r = 5x - 2 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( s = 2x + 3, \\)</p>
    <p>the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( rs - 2r + s \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 10x^2 + dx + 1, \\)</p>
    <p>where \\(d\\) is a constant. What is the value of \\(d\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(1\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(3\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(5\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(7\\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( a = 4x + 1 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( b = 3x - 2, \\)</p>
    <p>the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( ab - a + 2b \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 12x^2 + kx - 7, \\)</p>
    <p>where \\(k\\) is a constant. What is the value of \\(k\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(-9\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(-7\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(-5\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(-3\\)</span>
      </div>
    </div>` },

  { text: `<p>If</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( u = 2x - 3 \\)</p>
    <p>and</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( v = 5x + 4, \\)</p>
    <p>the expression</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( uv + 3u - v \\)</p>
    <p>is equivalent to</p>
    <p style="text-align:center;margin-bottom:12px">
      \\( 10x^2 + jx - 25, \\)</p>
    <p>where \\(j\\) is a constant. What is the value of \\(j\\)?</p>
    <div class="mc-choices">
      <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\(-6\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\(-4\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\(-2\\)</span>
      </div>
      <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\(2\\)</span>
      </div>
    </div>` },
],
      },


      // Problem 23

      {
        problem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( m=\\frac{1}{9}p^2+\\frac{1}{9}q^2 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( n=\\frac{1}{9}pq \\), </p>
            which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( 36m-72n \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( (2p-2q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( (2p+2q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( (4p-4q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( (p-q)^2 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Create sliders for the variables \\(p\\) and \\(q\\) and invent numbers", note: "", gif: "", answer: "", video: "" },
          { text: "Substitute the equations for \\(m\\) and \\(n\\) into the given expression", note: "", gif: "", answer: "", video: "" },
          { text: "Type each answer choice and match it to the given expression", note: "", gif: "", answer: "", video: "" },
        ],

        guidedProblem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( m=\\frac{3}{8}p^2+\\frac{3}{8}q^2 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( n=\\frac{3}{8}pq \\), </p>
            which of the following is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( 8m-16n \\)? </p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 3(p+q)^2 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 3(p-q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 6(p-q)^2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6(p+q)^2 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Create sliders for the variables \\(p\\) and \\(q\\) and invent numbers",
          "Substitute the equations for \\(m\\) and \\(n\\) into the given expression",
          "Type each answer choice and match it to the given expression"
        ],

        guidedAnswer: "The answer is B",
        guidedScreenshot: "",

        practice: []
      },

      // Problem 24
      {
        problem: `The expression
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{1}{4}(2t^2 - 144) \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{1}{2}(t-r)(t+r) \\), </p>
            where \\(r\\) is a positive constant.
            <p style="margin-bottom:12px">What is the value of \\(r\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 12 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( 6\\sqrt{2} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( \\sqrt{72} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Create a slider for \\(r\\)", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788032731/problem24-step1_vnnkqa.mov" },
          { text: "Type both expressions into Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788032732/problem24-step2_oqx26v.mov" },
          { text: "Adjust \\(r\\) until the two expressions are equivalent, then match the value to an answer choice", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788032732/problem24-step3_bswodm.mov" },
        ],

        guidedProblem: `The expression
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{1}{5}(5y^2 - 900) \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( (y-r)(y+r) \\), </p>
            where \\(r\\) is a positive constant.
            <p style="margin-bottom:12px">What is the value of \\(r\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 30 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( \\sqrt{180} \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( 6\\sqrt{5} \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 3\\sqrt{5} \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Create a slider for \\(r\\)",
          "Type both expressions into Desmos",
          "Adjust \\(r\\) until the two expressions are equivalent, then match the value to an answer choice"
        ],

        guidedAnswer: "The answer is C",
        guidedScreenshot: "",

        practice: [
          {
            text: `The expression
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{1}{3}(3z^2 - 216) \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( (z-r)(z+r) \\), </p>
                where \\(r\\) is a positive constant.
                <p style="margin-bottom:12px">What is the value of \\(r\\)?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 12 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 6\\sqrt{2} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 18 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( \\sqrt{72} \\)</span>
            </div>
            </div>`
          },

          {
            text: `The expression
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{1}{8}(4w^2 - 352) \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{1}{2}(w-r)(w+r) \\), </p>
                where \\(r\\) is a positive constant.
                <p style="margin-bottom:12px">What is the value of \\(r\\)?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( \\sqrt{176} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 22 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( 2\\sqrt{22} \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 4\\sqrt{11} \\)</span>
            </div>
            </div>`
          }
        ]
      },

      // Problem 25
      {
        problem: `The functions are defined by
            <p style="text-align:center;margin-bottom:12px"> \\( f(x)=\\frac{5}{4}x-3 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( g(x)=8x+6 \\). </p>
            The product
            <p style="text-align:center;margin-bottom:12px"> \\( f(x)g(x) \\) </p>
            can be written in the form
            <p style="text-align:center;margin-bottom:12px"> \\( ax^2+bx+c \\), </p>
            where \\(a\\), \\(b\\), and \\(c\\) are constants.
            <p style="margin-bottom:12px">What is the value of \\(b-c\\)?</p>`,

        steps: [ 
          { text: "This question cannot be done on Desmos", note: "", gif: "", answer: "", video: "" },
        ],

        guidedProblem: `The functions are defined by
            <p style="text-align:center;margin-bottom:12px"> \\( p(x)=\\frac{3}{4}x+5 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( q(x)=12x-8 \\). </p>
            The product
            <p style="text-align:center;margin-bottom:12px"> \\( p(x)q(x) \\) </p>
            can be written in the form
            <p style="text-align:center;margin-bottom:12px"> \\( ax^2+bx+c \\), </p>
            where \\(a\\), \\(b\\), and \\(c\\) are constants.
            <p style="margin-bottom:12px">What is the value of \\(a+b\\)?</p>`,

        guidedSteps: [
          ""
        ],

        guidedAnswer: "The answer is 63",
        guidedScreenshot: "",

        practice: [
          {
            text: `The functions are defined by
                <p style="text-align:center;margin-bottom:12px"> \\( r(x)=\\frac{7}{6}x-4 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( s(x)=18x+3 \\). </p>
                The product
                <p style="text-align:center;margin-bottom:12px"> \\( r(x)s(x) \\) </p>
                can be written in the form
                <p style="text-align:center;margin-bottom:12px"> \\( ax^2+bx+c \\), </p>
                where \\(a\\), \\(b\\), and \\(c\\) are constants.
                <p style="margin-bottom:12px">What is the value of \\(a+c\\)?</p>`
          },

          {
            text: `The functions are defined by
                <p style="text-align:center;margin-bottom:12px"> \\( u(x)=\\frac{2}{5}x+7 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( v(x)=15x-10 \\). </p>
                The product
                <p style="text-align:center;margin-bottom:12px"> \\( u(x)v(x) \\) </p>
                can be written in the form
                <p style="text-align:center;margin-bottom:12px"> \\( ax^2+bx+c \\), </p>
                where \\(a\\), \\(b\\), and \\(c\\) are constants.
                <p style="margin-bottom:12px">What is the value of \\(a-b\\)?</p>`
          }
        ]
      },
 
      // Problem 26
      {
        problem: `A quadratic expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{p}{3}x^2 + \\frac{q}{3}x + \\frac{r}{3} \\) </p>
            where \\(p\\), \\(q\\), and \\(r\\) are constants. If the original expression is
            <p style="text-align:center;margin-bottom:12px"> \\( 6\\left[(2x-5)^2-(2x+1)(2x-3)\\right] \\), </p>
            what is the value of \\(p+q+r\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( 72 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( 288 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 144 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">D</span>
        <span>\\( 216 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Declare the given expression as \\(f(x)\\) in Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788033621/problem26-step1_ri7txu.mov" },
          { text: "Recognize that \\(f(1)=\\frac{p+q+r}{3}\\) and type \\(3f(1)\\) into Desmos to find \\(p+q+r\\)", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788033622/problem26-step2_zbtlit.mov" },
        ],

        guidedProblem: `A quadratic expression is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{p}{5}x^2 + \\frac{q}{5}x + \\frac{r}{5} \\) </p>
            where \\(p\\), \\(q\\), and \\(r\\) are constants. If the original expression is
            <p style="text-align:center;margin-bottom:12px"> \\( 10(2x-3)^2-5(2x+1)(2x-7) \\), </p>
            what is the value of \\(p+q+r\\)?`,

        guidedSteps: [
          "Declare the given expression in Desmos",
          "Recognize that \\(f(1)=\\frac{p+q+r}{5}\\) and type \\(5f(1)\\) into Desmos to find \\(p+q+r\\)",
        ],

        guidedAnswer: "The answer is 425", 
        guidedAnswerValue: "425",
        guidedScreenshot: "",

        practice: [
          {
            text: `A quadratic expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{d}{2}x^2 + \\frac{e}{2}x + \\frac{f}{2} \\) </p>
                where \\(d\\), \\(e\\), and \\(f\\) are constants. If the original expression is
                <p style="text-align:center;margin-bottom:12px"> \\( 8(3x-1)(3x+5)-4(3x+2)^2 \\), </p>
                what is the value of \\(d+e+f\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 84 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 72 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( 56 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 28 \\)</span>
            </div>
            </div>`
          },

          {
            text: `A quadratic expression is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{d}{8}x^2 + \\frac{e}{8}x + \\frac{f}{8} \\) </p>
                where \\(d\\), \\(e\\), and \\(f\\) are constants. If the original expression is
                <p style="text-align:center;margin-bottom:12px"> \\( 12(x-2)^2-8(x+3)(x-1)+4(x+5) \\), </p>
                what is the value of \\(d+e+f\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 216 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">B</span>
            <span>\\( 288 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( 324 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 72 \\)</span>
            </div>
            </div>`
          }
        ]
      },

      // Problem 27
      {
        problem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( 7(x+5)(x-4)-3(x-2)^2 \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{a}{2}x^2+\\frac{b}{2}x+\\frac{c}{2} \\), </p>
            what is the value of \\(a-b+c\\)?
        <div class="mc-choices">
        <div class="mc-choice correct">
        <span class="mc-label">A</span>
        <span>\\( -334 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( -328 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( -346 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -340 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "Declare the given expression as \\(f(x)\\) in Desmos", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788033902/problem27-step1_ovyolv.mov" },
          { text: "Recognize that \\(f(-1)=\\frac{a-b+c}{2}\\) and type \\(2f(-1)\\) into Desmos to find \\(a-b+c\\)", note: "", gif: "", answer: "", video: "https://res.cloudinary.com/dnyaptowc/video/upload/v1788033903/problem27-step2_u0mqva.mov" },
        ],

        guidedProblem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( 11(x+8)(x-5)-6(x-1)^2 \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( \\frac{a}{4}x^2+\\frac{b}{4}x+\\frac{c}{4} \\), </p>
            what is the value of \\(a-b+c\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -1950 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( -1944 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( -1938 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( -1956 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "Declare the given expression as \\(f(x)\\) in Desmos",
          "Recognize that \\(f(-1)=\\frac{a-b+c}{4}\\) and type \\(4f(-1)\\) into Desmos to find \\(a-b+c\\)"
        ],

        guidedAnswer: "The answer is B",
        guidedScreenshot: "",

        practice: [
          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( 10(x-6)(x+4)-8(x+2)^2 \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{a}{3}x^2+\\frac{b}{3}x+\\frac{c}{3} \\), </p>
                what is the value of \\(a-b+c\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( -648 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( -666 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">C</span>
            <span>\\( -660 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">D</span>
            <span>\\( -654 \\)</span>
            </div>
            </div>`
          },

          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( 18(x-8)(x+5)-13(x+3)^2 \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{a}{5}x^2+\\frac{b}{5}x+\\frac{c}{5} \\), </p>
                what is the value of \\(a-b+c\\)?
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( -3510 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( -3490 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( -3500 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( -3520 \\)</span>
            </div>
            </div>`
          }
        ]
      },

      // Problem 28

      {
        problem: `If
            <p style="text-align:center;margin-bottom:12px"> \\( r=3x+2 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( s=2x-5 \\), </p>
            the expression
            <p style="text-align:center;margin-bottom:12px"> \\( rs+2r-s \\) </p>
            is equivalent to
            <p style="text-align:center;margin-bottom:12px"> \\( ax^2+bx+c \\), </p>
            where \\(a\\), \\(b\\), and \\(c\\) are constants.
            <p style="margin-bottom:12px">What is the value of \\(a+b+c\\)?</p>
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -7 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">B</span>
        <span>\\( -2 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">C</span>
        <span>\\( 1 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 6 \\)</span>
        </div>
        </div>`,

        steps: [
          { text: "This question cannot be done on Desmos", note: "", gif: "", answer: "", video: "" },
        ],

        guidedProblem: `The function \\(f\\) is defined by
            <p style="text-align:center;margin-bottom:12px"> \\( f(x)=uv+u-3v \\), </p>
            where
            <p style="text-align:center;margin-bottom:12px"> \\( u=4x-3 \\) </p>
            and
            <p style="text-align:center;margin-bottom:12px"> \\( v=x+2 \\). </p>
            If
            <p style="text-align:center;margin-bottom:12px"> \\( f(x)=ax^2+bx+c \\), </p>
            where \\(a\\), \\(b\\), and \\(c\\) are constants, what is the value of \\(a+b+c\\)?
        <div class="mc-choices">
        <div class="mc-choice">
        <span class="mc-label">A</span>
        <span>\\( -15 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">B</span>
        <span>\\( -9 \\)</span>
        </div>
        <div class="mc-choice correct">
        <span class="mc-label">C</span>
        <span>\\( -5 \\)</span>
        </div>
        <div class="mc-choice">
        <span class="mc-label">D</span>
        <span>\\( 5 \\)</span>
        </div>
        </div>`,

        guidedSteps: [
          "",
        ],

        guidedAnswer: "The answer is C",
        guidedScreenshot: "",

        practice: [
          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( m=2x+1 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( n=x+4 \\), </p>
                the expression
                <p style="text-align:center;margin-bottom:12px"> \\( mn-m+3n \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{a}{4}x^2+\\frac{b}{4}x+\\frac{c}{4} \\), </p>
                where \\(a\\), \\(b\\), and \\(c\\) are integers.
                <p style="margin-bottom:12px">What is the value of \\(a+b+c\\)?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( 96 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( 102 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( 108 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( 112 \\)</span>
            </div>
            </div>`
          },

          {
            text: `If
                <p style="text-align:center;margin-bottom:12px"> \\( p=5x+1 \\) </p>
                and
                <p style="text-align:center;margin-bottom:12px"> \\( q=2x-3 \\), </p>
                the expression
                <p style="text-align:center;margin-bottom:12px"> \\( pq-2p+q \\) </p>
                is equivalent to
                <p style="text-align:center;margin-bottom:12px"> \\( \\frac{ax^2+bx+c}{5} \\), </p>
                where \\(a\\), \\(b\\), and \\(c\\) are integers.
                <p style="margin-bottom:12px">What is the value of \\(a+b+c\\)?</p>
            <div class="mc-choices">
            <div class="mc-choice">
            <span class="mc-label">A</span>
            <span>\\( -105 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">B</span>
            <span>\\( -100 \\)</span>
            </div>
            <div class="mc-choice correct">
            <span class="mc-label">C</span>
            <span>\\( -95 \\)</span>
            </div>
            <div class="mc-choice">
            <span class="mc-label">D</span>
            <span>\\( -90 \\)</span>
            </div>
            </div>`
          }
        ]
      }

  ]
};

export default parabola;