const quiz = [
    {
        question: "Which planet is known as the Red Planet?",
        ans1text: "Earth",
        ans2text: "Mars",
        ans3text: "Jupiter",
        ans4text: "Venus",
        answer: "Mars",
    },
    {
        question: "What is the capital of France?",
        ans1text: "Paris",
        ans2text: "Berlin",
        ans3text: "Rome",
        ans4text: "Madrid",
        answer: "Paris",
    },
    {
        question: "What is the largest mammal?",
        ans1text: "Elephant",
        ans2text: "Blue Whale",
        ans3text: "Giraffe",
        ans4text: "Ostrich",
        answer: "Blue Whale",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        ans1text: "China",
        ans2text: "Japan",
        ans3text: "South Korea",
        ans4text: "Vietnam",
        answer: "Japan",

    },
    {
        question: "What is the capital of Australia?",
        ans1text: "Sydney",
        ans2text: "Melbourne",
        ans3text: "Canberra",
        ans4text: "Brisbane",
        answer: "Canberra",
    },
    {
        question: "Which element has the chemical symbol *O*?",
        ans1text: "Oxygen",
        ans2text: "Gold",
        ans3text: "Iron",
        ans4text: "Silver",
        answer: "Oxygen",
    },
    {
        question: "In which year did the Titanic sink?",
        ans1text: "1905",
        ans2text: "1912",
        ans3text: "1920",
        ans4text: "1931",
        answer: "1912",
    },
    {
        question: "Who is known as the *Father of Computer Science*?",
        ans1text: "Bill Gates",
        ans2text: "Alan Turing",
        ans3text: "Steve Jobs",
        ans4text: "Mark Zuckerberg",
        answer: "Alan Turing",
    },
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);



question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


console.log("answer element", answerElement);

answerElement.forEach((answer) => {
    console.log(answer.checked);
})

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="checkbox"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});