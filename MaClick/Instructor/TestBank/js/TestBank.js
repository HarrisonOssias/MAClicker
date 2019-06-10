(function() {
    const myQuestions = [
      {
        question: "Match the Following", 
        answers: {apple: "red", banana: "yellow", 
          mango: "orange", grape: "purple", kiwi: "brown", lime: "green"},
        correctAnswer: "d",
        type: "M",
        qID: "0"
      },  
      {
            question: "What is 2 + 2?", 
            answers: {a: "1", b: "2", c: "3", d: "4"},
            correctAnswer: "d",
            type: "MC",
            qID: "1"
        },
    
        {
          question: "Dogs can fly", 
          answers: {a: "True", b: "False"},
          correctAnswer: "b",
          type: "TF",
          qID: "2"
        },

        {
          question: "What is the meaning of life?", 
          answers: {a: "Bye", b: "Hey", c: "Hi", d: "What's up"},
          correctAnswer: "a",
          type: "SA", //long answer
          qID: "3"
      },

      {
        question: "When an object is in free fall,", 
        answers: {a: "Acceleration", b: "Speed", c: "Velocity", d: "Slope"},
        correctAnswer: "a",
        type: "MC", //long answer,
        qID: "4"
    },

    {
      question: "Which of the following is not true of gases, as compared to liquids or solids?", 
      answers: {a: "Gas molecules are in constant, rapid motion",
       b: "Molecules in a gas are tightly bound to each other by strong attractive forces.", 
       c: "The kinetic energy of a gas is directly proportional to its temperature.", 
       d: "The volume of a gas molecule itself is very small compared to the space the gas occupies."},
      correctAnswer: "a",
      type: "MC", //long answer,
      qID: "5"
  },
  
    ];
    const output = [];
    function buildQuiz() {
      // we'll need a place to store the HTML output
      
  
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
             <div class="jumbotron questionjumbo" style="background: lightgrey" id="${questionNumber}"> 
                <div class="row">
                    <div class="col-md-8">
                        <div class="question"> <b>  ${questionNumber+1}. ${currentQuestion.question}</b> </div>
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

    //To keep track of selected questions
    const selectedQuestions = new Set();
  
    // display quiz right away
    buildQuiz();

    $(".questionjumbo").click(function(){
        bg = document.getElementById(this.id).style.backgroundColor 
        
        if (bg == 'lightgreen'){
            document.getElementById(this.id).style.backgroundColor = "lightgrey"
            element = this.id
            //console.log(selectedQuestions)
            selectedQuestions.delete(myQuestions[this.id])
            console.log(selectedQuestions)

        }
        else {
          document.getElementById(this.id).style.backgroundColor = "lightgreen";
          selectedQuestions.add(myQuestions[this.id]);
          console.log(selectedQuestions)

        }
        //console.log(myQuestions[this.id])

    });

    $("#submit").click(function(){

      const selectedQuestionsArray = Array.from(selectedQuestions)
      console.log(selectedQuestionsArray)
      localStorage.setItem("questions",JSON.stringify(selectedQuestionsArray))
      localStorage.getItem("questions")
    })

    $("#AddQuestionBtn").click(function(){

      console.log(hello)
    })

    //submitButton.addEventListener("click", createNewQuiz);

  })();