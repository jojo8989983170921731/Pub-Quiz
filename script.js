// DIFFICULTY LEVELS: 1 = EASY (1-10), 2 = MEDIUM (11-20)

const questions = [
  // ===== EASY MODE (Questions 1-10) =====
  {
    question: 'What country is most closely connected with the American Dream?',
    options: ['United States', 'Canada', 'Mexico', 'France'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which of these is a symbol of the American Dream?',
    options: ['Owning a home', 'Taking a nap', 'Watching TV all day', 'Skipping school'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does the American Dream usually mean?',
    options: ['A chance to build a better life', 'Winning the lottery', 'Never working again', 'Living in a castle'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does "self-made" usually mean?',
    options: ['You made your success through hard work', 'You were born rich', 'You got everything free', 'You never had to try'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Who gave the famous "I Have a Dream" speech?',
    options: ['Martin Luther King Jr.', 'Abraham Lincoln', 'Steve Jobs', 'Tom Hanks'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which of these is part of the American Dream?',
    options: ['Getting a good job', 'Never leaving home', 'Avoiding all effort', 'Going to bed early every night'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What is one reason many people move to America?',
    options: ['For more opportunity', 'To avoid all weather', 'To never work', 'To buy a yacht'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does "opportunity" mean in the American Dream?',
    options: ['A chance to improve your life', 'A free trip around the world', 'A promise to avoid problems', 'A hidden treasure map'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which of these is NOT part of the traditional American Dream?',
    options: ['Living in poverty forever', 'Having a successful career', 'Owning a home', 'Raising a family'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What is something people often hope for in the American Dream?',
    options: ['A better future for themselves and their family', 'No responsibilities at all', 'A free house forever', 'An endless vacation'],
    correct: 0,
    difficulty: 1
  },

  // ===== MEDIUM MODE (Questions 11-20) =====
  {
    question: 'Who wrote The Great Gatsby, a famous American Dream story?',
    options: ['F. Scott Fitzgerald', 'J.K. Rowling', 'Mark Twain', 'Ernest Hemingway'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'In The Great Gatsby, what does Gatsby dream about?',
    options: ['Winning back his lost love', 'Becoming a famous singer', 'Going to space', 'Opening a bakery'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What does success often mean in the American Dream?',
    options: ['Doing well and building a stable life', 'Never making mistakes', 'Being famous overnight', 'Having a huge mansion only'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What does education usually help people do in the American Dream?',
    options: ['Get better opportunities', 'Sleep more', 'Skip work forever', 'Avoid all responsibilities'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What is one big idea behind the American Dream?',
    options: ['Anyone can work hard and improve their life', 'Only rich people can succeed', 'Success happens by luck alone', 'You should never try something new'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'Which of these is a common goal in the American Dream?',
    options: ['Having a safe, comfortable life', 'Never paying bills', 'Avoiding all stress', 'Living without goals'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What does the word "dream" mean in this quiz?',
    options: ['A hope for a better future', 'A random idea you forget', 'A movie you watch', 'A dream you have while sleeping'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What is one thing people often want to do to reach the American Dream?',
    options: ['Work hard and keep trying', 'Give up quickly', 'Avoid learning', 'Stop taking chances'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'Which of these best matches the American Dream?',
    options: ['Building a better life through effort', 'Winning without trying', 'Doing nothing and hoping', 'Getting rich instantly'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What does a person usually need to succeed in the American Dream?',
    options: ['Hard work, hope, and opportunity', 'Only money from family', 'A perfect life from the start', 'No effort at all'],
    correct: 0,
    difficulty: 2
  }
];

// Get DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');
const scoreEl = document.getElementById('score');
const resultTitle = document.getElementById('result-title');
const resultText = document.getElementById('result-text');
const qrCode = document.getElementById('qr-code');
const copyLinkBtn = document.getElementById('copy-link-btn');
const resultBreakdown = document.getElementById('result-breakdown');

function buildQrUrl(url) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`;
}

function setQrCode() {
  if (!qrCode) return;
  const currentUrl = window.location.href || 'https://jojo8989983170921731.github.io/Pub-Quiz/';
  qrCode.src = buildQrUrl(currentUrl);
}

if (copyLinkBtn) {
  copyLinkBtn.addEventListener('click', async () => {
    const inviteUrl = window.location.href || 'https://jojo8989983170921731.github.io/Pub-Quiz/';
    try {
      await navigator.clipboard.writeText(inviteUrl);
      copyLinkBtn.textContent = '✅ Link copied!';
      setTimeout(() => {
        copyLinkBtn.textContent = '📋 Copy invite link';
      }, 1500);
    } catch (error) {
      copyLinkBtn.textContent = 'Copy not supported';
      setTimeout(() => {
        copyLinkBtn.textContent = '📋 Copy invite link';
      }, 1500);
    }
  });
}

setQrCode();

let currentIndex = 0;
let score = 0;
let answered = false;
let scoresByDifficulty = { 1: 0, 2: 0 };

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  scoresByDifficulty = { 1: 0, 2: 0 };
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[currentIndex];
  answered = false;
  nextBtn.classList.add('hidden');

  progressEl.textContent = `Question ${currentIndex + 1}/20`;
  scoreEl.textContent = `Score: ${score}`;

  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = '';

  const shuffledOptions = currentQuestion.options
    .map((text, index) => ({ text, isCorrect: index === currentQuestion.correct }));

  for (let index = shuffledOptions.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledOptions[index], shuffledOptions[randomIndex]] = [shuffledOptions[randomIndex], shuffledOptions[index]];
  }

  shuffledOptions.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.type = 'button';
    button.dataset.correct = String(option.isCorrect);
    button.textContent = `${String.fromCharCode(65 + index)}) ${option.text}`;
    button.addEventListener('click', () => handleAnswer(index));
    answersEl.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const buttons = [...answersEl.querySelectorAll('.answer-btn')];
  const currentQuestion = questions[currentIndex];

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    if (index === selectedIndex && button.dataset.correct !== 'true') {
      button.classList.add('wrong');
    }
  });

  if (buttons[selectedIndex].dataset.correct === 'true') {
    score += 1;
    scoresByDifficulty[currentQuestion.difficulty] += 1;
    scoreEl.textContent = `Score: ${score}`;
  }

  nextBtn.classList.remove('hidden');
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  resultText.textContent = `You scored ${score} out of 20 points.`;

  let resultMessage = '';
  if (score >= 18) {
    resultMessage = 'Amazing! You nailed the American Dream quiz! 🏆';
  } else if (score >= 15) {
    resultMessage = 'Excellent! You know your stuff! 🌟';
  } else if (score >= 12) {
    resultMessage = 'Great job! Nice one! 👏';
  } else if (score >= 9) {
    resultMessage = 'Good effort! You’re getting there! 💪';
  } else {
    resultMessage = 'Nice try! Keep learning and come back! 🚀';
  }

  resultTitle.textContent = resultMessage;

  resultBreakdown.innerHTML = `
    <div class="score-breakdown">
      <div class="breakdown-item">
        <span class="difficulty-badge easy-badge">Easy Questions</span>
        <span class="breakdown-score">${scoresByDifficulty[1]}/10</span>
      </div>
      <div class="breakdown-item">
        <span class="difficulty-badge medium-badge">Medium Questions</span>
        <span class="breakdown-score">${scoresByDifficulty[2]}/10</span>
      </div>
    </div>
  `;
}

if (startBtn) startBtn.addEventListener('click', startQuiz);
if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
if (restartBtn) restartBtn.addEventListener('click', startQuiz);

