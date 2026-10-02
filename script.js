// DIFFICULTY LEVELS: 1 = EASY (1-10), 2 = MEDIUM (11-20)

const questions = [
  // ===== EASY MODE (Questions 1-10) =====
  {
    question: 'What is the American Dream?',
    options: ['The idea that everyone can be successful', 'A movie', 'A holiday', 'A city'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What do you need for the American Dream?',
    options: ['Hard work', 'Luck only', 'Famous parents', 'A lot of followers'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Where does the American Dream come from?',
    options: ['USA', 'Germany', 'France', 'Canada'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Why did many people move to America?',
    options: ['For a better life', 'For the weather', 'For free food', 'For Hollywood'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What is a typical part of the American Dream?',
    options: ['Having your own house', 'Never working', 'Being famous', 'Having a private jet'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does "from rags to riches" mean?',
    options: ['Going from poor to rich', 'Buying new clothes', 'Losing your money', 'Going shopping'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which statue is a symbol of freedom in America?',
    options: ['Statue of Liberty', 'Eiffel Tower', 'Big Ben', 'Colosseum'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Where is the Statue of Liberty?',
    options: ['New York', 'Los Angeles', 'Miami', 'Chicago'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What is important in the American Dream?',
    options: ['Freedom', 'Being lazy', 'Sleeping a lot', 'Being famous'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does freedom mean?',
    options: ['Being able to make your own choices', 'Getting everything for free', 'Never going to school', 'Never following rules'],
    correct: 0,
    difficulty: 1
  },

  // ===== MEDIUM MODE (Questions 11-20) =====
  {
    question: 'Can poor people achieve the American Dream?',
    options: ['Yes, that\'s part of the idea', 'No', 'Only in New York', 'Only if they\'re famous'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What is a common goal of the American Dream?',
    options: ['Getting a good job', 'Becoming an actor', 'Buying a sports car', 'Meeting the president'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'Who gave the "I Have a Dream" speech?',
    options: ['Martin Luther King Jr.', 'George Washington', 'Taylor Swift', 'Elon Musk'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What did Martin Luther King Jr. want?',
    options: ['Equal rights', 'More money', 'A bigger house', 'To become an actor'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What is another important part of the American Dream?',
    options: ['Having a family and a good life', 'Being on TV', 'Being a millionaire', 'Living in Hollywood'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'Can the American Dream be different for different people?',
    options: ['Yes', 'No', 'Only for adults', 'Only for Americans'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What can the American Dream give people hope for?',
    options: ['A better future', 'Free money', 'No school', 'Becoming famous'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What colors are on the American flag?',
    options: ['Red, white and blue', 'Black, red and yellow', 'Green and white', 'Blue and yellow'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'How many stars are on the American flag?',
    options: ['50', '20', '100', '13'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What do the 50 stars on the American flag represent?',
    options: ['The 50 states', '50 presidents', '50 cities', '50 years'],
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
    resultMessage = 'Excellent! You know your stuff! ⭐';
  } else if (score >= 12) {
    resultMessage = 'Great job! Nice one! 👏';
  } else if (score >= 9) {
    resultMessage = 'Good effort! You\'re getting there! 💪';
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
