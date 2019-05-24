(function() {
    const myQuestions = [
      {
        question: "Match the Following", 
        answers: {apple: "red", banana: "yellow", 
          mango: "orange", grape: "purple", kiwi: "brown", lime: "green"},
        correctAnswer: "d",
        type: "M"
      },  
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
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
                </br>`
              );
            }  
            answers.push(`<br>`) 
        }

        if (currentQuestion.type === "M") {
          // and for each available answer...
          //Randomize the values in an array
          var val = Object.values(currentQuestion.answers);
          shuffle(val);
          
          var counter = 0;

          answers.push(`              
          <table style="width:100%">
          <tr>
            <th> Match This </th>
            <th> With This </th>
          </tr>
          `)

          for (key in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
              `<tr>
              <td> 
                  ${key} 
              </td>
              <td>
                ${counter + 1}: ${val.pop()}
              </td>
            </tr>
           `
            );
            counter = counter + 1;
          }   
          answers.push(`</table> <br>`)
      }

        if (currentQuestion.type === "TF") {
          // and for each available answer...
          for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
              `<label>
                ${currentQuestion.answers[letter]}
            </label>
            </br>`
            );
          }   
          answers.push(`<br>`)
      }

      if (currentQuestion.type === "SA") {
        // and for each available answer...

          answers.push(
            `<label>
              <p> Text response</p>
            </label>
            <br>
            <br>`
          );
        
    }
        // add this question and its answers to the output
        output.push(
          //class = "jumbotron"
          `<div class = "container"> 
             <div class="jumbotron"> 
                <div class="row">
                    <div class="col-md-8">
                        <div class="question"> <b> <input type="checkbox" name="question1" value="question"> ${questionNumber+1}. ${currentQuestion.question}</b> </div>
                             <div class="answers"> ${answers.join("")} </div>
                         </div>
                     </div>
                </div>           
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

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
  
    const quizContainer = document.getElementById("TestBank");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();

    //submitButton.addEventListener("click", showResults);

  })();