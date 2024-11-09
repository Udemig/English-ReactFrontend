let currentAnswer;
let score = 0;

function generateQuestion() {
  // Clear previous result
  document.getElementById("result").textContent = "";

  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Choose random operation (addition or multiplication)
  const operations = ["+", "×"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  // Calculate correct answer
  currentAnswer = operation === "+" ? num1 + num2 : num1 * num2;

  // Display question
  document.getElementById(
    "question"
  ).textContent = `${num1} ${operation} ${num2} = ?`;

  // Generate answer buttons
  const answerButtons = document.getElementById("answer-buttons");
  answerButtons.innerHTML = "";

  // Generate 4 options including the correct answer
  const options = [currentAnswer];
  while (options.length < 4) {
    const wrongAnswer = Math.floor(Math.random() * 100) + 1;
    if (!options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Create buttons for each option
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    answerButtons.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const resultElement = document.getElementById("result");
  if (selectedAnswer === currentAnswer) {
    resultElement.textContent = "Correct! 🎉";
    resultElement.style.color = "green";
    score++;
  } else {
    resultElement.textContent = `Wrong! The correct answer was ${currentAnswer}`;
    resultElement.style.color = "red";
    score = Math.max(0, score - 1);
  }
  document.getElementById("score").textContent = `Score: ${score}`;

  // Generate new question after a short delay
  setTimeout(generateQuestion, 2000);
}

// Initialize first question
generateQuestion();
