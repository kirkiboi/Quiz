const questions = [
    {
        question: "unsay full name man nako bheps?",
        answers: [
            {text: "Rolimer Kirk Don Diango Zayas", correct: false},
            {text: "Rolemir Kirt Don Diango Zayas", correct: false},
            {text: "Rolemir Kirt Don Diango Zayas", correct: false},
            {text: "Rolemir Kirk Don Diango Zayas", correct: true}

        ]
    },{
        question: "kinsa akong love?",
        answers: [
            {text: "Chaeyoung", correct: false},
            {text: "Colay", correct: true},
            {text: "Selwyn", correct: false},
            {text: "Cabbage nga naay carrots hahhaha", correct: false}
        ]
    },
    {
        question: "what's my shoe size HAHHA?",
        answers: [
            {text: "42", correct: false},
            {text: "43", correct: false},
            {text: "44", correct: true},
            {text: "41", correct: false}
        ]
    },
    {
        question: "what year ko na in love nimo?",
        answers: [
            {text: "2021", correct: false},
            {text: "2022", correct: true},
            {text: "2033", correct: false},
            {text: "2024", correct: false}
        ]
    },
    {
        question: "unsay full name nimo (sayun ra)?",
        answers: [
            {text: "Cazandra Nicole (babynakin) Nambatac", correct: false},
            {text: "Cazandra Nicole (palanggingko) Nambatac", correct: false},
            {text: "Cazandra Nicole (cassie) Nambatac", correct: false},
            {text: "Cazandra Nicole (mybabyboopookiebear) Nambatac", correct: true}
        ]
    },
    {
        question: "pwede ko mo kiss (hardest question)?",
        answers: [
            {text: "yaur", correct: false},
            {text: "yas", correct: false},
            {text: "yes", correct: false},
            {text: "yehey mwamwa", correct: true}
        ]
    }   
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const readButton = document.getElementById("next-button");
const application = document.getElementById("app");
const loveLetter = document.getElementById("love-letter");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
readButton.addEventListener("click", () => {
    application.style.display = "none";
    loveLetter.style.display = "block";
})

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    readButton.style.display = "none";
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    readButton.innerHTML = "Rate Quiz";
    readButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();