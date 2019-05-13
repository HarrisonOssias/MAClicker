(function() {
    const myQuestions = [
        {
            question: "What is 2 + 2?", 
            answers: {a: "1", b: "2", c: "3", d: "4"},
            correctAnswer: "d",
            type: "MC"
        },
    
        {
          question: "Dogs can fly", 
          answers: {a: "True", b: "False"},
          correctAnswer: "b",
          type: "TF"
        },

        {
          question: "What is the meaning of life?", 
          answers: {a: "Bye", b: "Hey", c: "Hi", d: "What's up"},
          correctAnswer: "a",
          type: "SA" //long answer
      },
    
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
        if (currentQuestion.type === "MC") {
            // and for each available answer...
            for (letter in currentQuestion.answers) {
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
                </br>`
              );
            }   
        }

        if (currentQuestion.type === "TF") {
          // and for each available answer...
          for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${currentQuestion.answers[letter]}
              </label>
              </br>`
            );
          }   
      }

      if (currentQuestion.type === "SA") {
        // and for each available answer...

          answers.push(
            `<label>
              <input type="text" name="question${questionNumber}" >
            </label>
            </br>`
          );
        
    }


  
        // add this question and its answers to the output
        output.push(
          //class = "jumbotron"
          `<div > 
             <div class="question"> <b> ${currentQuestion.question}</b> </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        localStorage.setItem(questionNumber, userAnswer);
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });

      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();

    submitButton.addEventListener("click", showResults);

  })();