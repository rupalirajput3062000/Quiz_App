const questionBank = [
  [
    "Hypertext Machine language.",
    "Hypertext and links markup language.",
    "Hypertext Markup Language.",
    "Hightext machine language.",
    "What does HTML stands for?",
    "ans3",
  ],
  [
    "Cascading Style Sheet.",
    "Cascade Style Sheet.",
    "Cascading Stylish Sheet.",
    "Cascading Style SheetNumber.",
    "What does CSS stands for?",
    "ans1",
  ],
  [
    "Javascript Object Notation.",
    "Java special Object Notation.",
    "Javascript Objectable Notation.",
    "Javascript Object Notationable.",
    "What does JSON stands for?",
    "ans1",
  ],
  [
    "Frontend.",
    "Database.",
    "Server-side.",
    "Cleint-side.",
    "For What purspose MongoDB is used?",
    "ans2",
  ],
  [
    "Frontend.",
    "Backend.",
    "Server-side.",
    "Cleint-side.",
    "For What purspose React is used?",
    "ans1",
  ],
];
let quesCount = -1;
let score = 0;
let question = document.querySelector("#question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let options = document.querySelectorAll(".option");
let submit = document.querySelector("#submit");
let play_again = document.querySelector("#play_again");

submit.addEventListener("click", () => {
  if (quesCount == questionBank.length - 1) {
    checkedAnswer(questionBank[quesCount][5]);
    let scoreStr = document.querySelector("#score_str");
    let answer_container = document.querySelectorAll(".answer_container");
    document.querySelector("#question").style.display = "none";
    answer_container.forEach((ele) => {
      ele.style.display = "none";
    });
    submit.style.display = "none";
    scoreStr.classList.remove("hidden");
    document.querySelector("#text").innerText = `Your Score is ${score}`;
    score = 0;
    quesCount = -1;
  } else {
    checkedAnswer(questionBank[quesCount][5]);
    uncheckedAnswer();
  }
});
play_again.addEventListener("click", () => {
  let scoreStr = document.querySelector("#score_str");
  submit.style.display = "block";
  scoreStr.classList.add("hidden");
  let answer_container = document.querySelectorAll(".answer_container");
  document.querySelector("#question").style.display = "block";
  answer_container.forEach((ele) => {
    ele.style.display = "block";
  });
  score = 0;
  quesCount = -1;
  loadingQues();
});
const checkedAnswer = (ans) => {
  let answers = document.querySelectorAll(".ans");
  answers.forEach((currEle, idx) => {
    if (currEle.checked) {
      if (currEle.id === ans) {
        score++;
      }
    }
  });
  loadingQues();
};

const uncheckedAnswer = () => {
  let answers = document.querySelectorAll(".ans");
  answers.forEach((currEle) => {
    currEle.checked = false;
  });
};

const loadingQues = () => {
  uncheckedAnswer();
  ++quesCount;
  if (quesCount >= questionBank.length) return;
  let currQues = questionBank[quesCount];
  question.innerText = currQues[4];
  options.forEach((currEle, idx) => {
    currEle.innerText = currQues[idx];
  });
};

loadingQues();
