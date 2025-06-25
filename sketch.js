let questions = [
  {
    question: "Qual é uma característica típica do campo?",
    options: ["Trânsito intenso", "Arranha-céus", "Tranquilidade", "Shopping centers"],
    answer: 2
  },
  {
    question: "O que é mais comum encontrar na cidade?",
    options: ["Pastos e plantações", "Fazendas", "Trânsito e poluição", "Rios limpos"],
    answer: 2
  },
  {
    question: "Qual atividade é mais comum no campo?",
    options: ["Pecuária", "Tecnologia da informação", "Publicidade", "Tráfego aéreo"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let buttons = [];
let quizFinished = false;

function setup() {
  createCanvas(600, 400);
  textSize(18);
  textAlign(LEFT, TOP);
  showQuestion();
}

function showQuestion() {
  // Remove os botões anteriores
  for (let btn of buttons) {
    btn.remove();
  }
  buttons = [];

  if (currentQuestion < questions.length) {
    let q = questions[currentQuestion];

    for (let i = 0; i < q.options.length; i++) {
      let btn = createButton(q.options[i]);
      btn.position(50, 150 + i * 40);
      btn.size(500, 30);
      btn.mousePressed(() => checkAnswer(i));
      buttons.push(btn);
    }
  } else {
    quizFinished = true;
  }
}

function draw() {
  background(200);

  fill(0);
  if (!quizFinished) {
    text("Pergunta " + (currentQuestion + 1) + " de " + questions.length, 50, 30);
    text(questions[currentQuestion].question, 50, 80);
  } else {
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Quiz finalizado!", width / 2, height / 2 - 30);
    text("Você acertou " + score + " de " + questions.length + " perguntas.", width / 2, height / 2 + 10);
  }
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}

 