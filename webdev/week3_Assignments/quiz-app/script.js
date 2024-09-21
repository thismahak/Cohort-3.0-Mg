import { quizData } from "./data.js";

console.log(quizData);
document.addEventListener('DOMContentLoaded', function () {
const quizContainer = document.querySelector('#quiz');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('#result');

let currentQuestion = 0;
let answers = Array(quizData.length).fill(null);

function loadQuestion() {
    
   const quizObj = quizData[currentQuestion];

    
        quizContainer.innerHTML = `
            <div class="quiz-question">
                <h1>${currentQuestion+1}. ${quizObj.question}</h1>
                <ul class="quiz-options">
                    <li>
                    <label><input type="radio" name="answer" value="a">${quizObj.a}</label>
                    </li>
                    <li>
                    <label><input type="radio" name="answer" value="b">${quizObj.b}</label>
                    </li>
                    <li>
                    <label><input type="radio" name="answer" value="c">${quizObj.c}</label>
                    </li>
                    <li>
                    <label><input type="radio" name="answer" value="d">${quizObj.d}</label>
                    </li>
                </ul>
            </div>
        `;
        submitBtn.innerText = currentQuestion === quizData.length-1 ? "Submit Quiz" : "Submit";
    }
    
    function saveAns() {
        
        
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if(selectedOption){
                answers[currentQuestion] = selectedOption.value;
            }
    }

    function CalcAndShowResult() {
        let score = 0;
        quizData.forEach((quizObj , index) => {
            if(answers[index] === quizObj.correct){
                score++;
            }
        });

        result.innerHTML = `You scored ${score} out of ${quizData.length}`

    }

    submitBtn.addEventListener('click' , () => {
        saveAns();

        if(answers[currentQuestion] === null){
            alert('Please select an answer before proceeding!');
            return;
        }
        
        if(currentQuestion < quizData.length){
            currentQuestion++;
            loadQuestion();
        }
        else{
            quizContainer.innerHTML = " ";
            submitBtn.style.display = 'none';
            CalcAndShowResult();
        }
    });

    loadQuestion();

    });
    



