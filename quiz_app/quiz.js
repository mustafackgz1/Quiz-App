const quizData = [
    {
        question: "what year is javascript launched?",
        a : "1996",
        b : "1995",
        c : "1994",
        d : "1997",
        correct : "b",
        wrong : ["a","c","d"]
    },
    {
        question: "Who is the current president of USA?",
        a : "Donald Trump",
        b : "Barrack Obama",
        c : "Joe Biden",
        d : "Hillary Clinton",
        correct : "c"
    },
    {
        question: "What is most used programming language?",
        a : "Java",
        b : "Javascript",
        c : "Python",
        d : "C",
        correct : "b"
    },
    {
        question: "Which year Russia started war against Ukraine?",
        a : "2022",
        b : "2021",
        c : "2020",
        d : "2019",
        correct : "a",
    },
    {
        question: "5-4?",
        a : "1",
        b : "2",
        c : "3",
        d : "4",
        correct : "a"
    }
]

const quizEl = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const a_textEl = document.getElementById("a_text")
const b_textEl = document.getElementById("b_text")
const c_textEl = document.getElementById("c_text")
const d_textEl = document.getElementById("d_text")
const submitBtnEl = document.getElementById("submitBtn")
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_textEl.innerText = currentQuizData.a;
    b_textEl.innerText = currentQuizData.b;
    c_textEl.innerText = currentQuizData.c;
    d_textEl.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
   });
   return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
        })
   };


submitBtnEl.addEventListener("click", () => { 
    
    const answer = getSelected();

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quizEl.innerHTML = `<h1>Congrats! You finished the exam.<br>
            You answered ${score}/${quizData.length} true questings.</h1>
            <button class="btn reloadBtn" onclick="location.reload()">Reload</button>`
        }            
    }   
       
});