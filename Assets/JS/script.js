const startButton = document.getElementById("start-button")
const questcontEl = document.getElementById("questcontainer")

const answerButton = document.getElementById("option-buttons")
const questionsEl = document.getElementById("question") 

var score = 0;

let mixedQuestion, currentQuestionindex;

const questions = [

    {

        question: "What is 2+2 ?",
        answers: [
            {text: "64", correct: false},
            {text: "12", correct: false},
            {text: "4", correct: true},
            {text: "31", correct: false}
        ]
    },
    {   

        question: "What is a data type present in Javascript? ",
        answers: [
            {text: "string", correct: true}
            {text: "prompt", correct: false}
            {text: "var", correct: false}
            {text: "object", correct: false}
        ]

    },
    {


            question: "What is a type of loop in Javascript? ",
            answers: [
                {text: "confirm", correct: false}
                {text: "value", correct: false}
                {text: "binding", correct: false}
                {text: "for", correct: true}
            ]

    },
    {

        question: "What does HTML stand for? ",
            answers: [
                {text: "High Tech Manual Language", correct: false}
                {text: "Hypertext Markup Language", correct: true}
                {text: "Hyper Touch Markup List", correct: false}
                {text: "Hardware Tech Margin Language", correct: false}
            ]


    },
    {


        question: "What color is a school bus? ",
            answers: [
                {text: "Red", correct: false}
                {text: "Yellow", correct: true}
                {text: "Green", correct: false}
                {text: "Teal", correct: false}
            ]

    }

]

startButton.addEventListener("click",startQuiz)

function startTime(duration, display)




