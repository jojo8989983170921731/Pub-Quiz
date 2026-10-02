// DIFFICULTY LEVELS: 1 = EASY (1-10), 2 = MEDIUM (11-20)

const questions = [
  // ===== EASY MODE (Questions 1-10) =====
  {
    question: 'Who is the highest paid athlete in America right now?',
    options: ['Lionel Messi', 'Cristiano Ronaldo', 'Patrick Mahomes', 'Tom Brady'],
    correct: 2,
    difficulty: 1
  },
  {
    question: 'Which country has won the most FIFA World Cups?',
    options: ['Germany', 'Brazil', 'France', 'Italy'],
    correct: 1,
    difficulty: 1
  },
  {
    question: 'What sport is LeBron James famous for?',
    options: ['Football', 'Baseball', 'Basketball', 'Tennis'],
    correct: 2,
    difficulty: 1
  },
  {
    question: 'How many Super Bowls has Tom Brady won?',
    options: ['5', '7', '6', '8'],
    correct: 1,
    difficulty: 1
  },
  {
    question: 'Which tennis player has won the most Grand Slam titles?',
    options: ['Roger Federer', 'Novak Djokovic', 'Margaret Court', 'Rafael Nadal'],
    correct: 1,
    difficulty: 1
  },
  {
    question: 'What is the national sport of Japan?',
    options: ['Soccer', 'Sumo wrestling', 'Tennis', 'Badminton'],
    correct: 1,
    difficulty: 1
  },
  {
    question: 'How many players are on a basketball team on the court?',
    options: ['6', '8', '5', '7'],
    correct: 2,
    difficulty: 1
  },
  {
    question: 'Which NFL team has won the most Super Bowls?',
    options: ['Pittsburgh Steelers', 'New England Patriots', 'Dallas Cowboys', 'Green Bay Packers'],
    correct: 1,
    difficulty: 1
  },
  {
    question: 'In which year did Michael Jordan retire from the Chicago Bulls?',
    options: ['1991', '1998', '1999', '2001'],
    correct: 2,
    difficulty: 1
  },
  {
    question: 'What is the maximum break in snooker?',
    options: ['120', '180', '147', '150'],
    correct: 2,
    difficulty: 1
  },

  // ===== MEDIUM MODE (Questions 11-20) =====
  {
    question: 'Which country hosted the 2020 Summer Olympics?',
    options: ['China', 'Brazil', 'Japan', 'South Korea'],
    correct: 2,
    difficulty: 2
  },
  {
    question: 'How many times has Serena Williams won Wimbledon?',
    options: ['5', '7', '8', '9'],
    correct: 1,
    difficulty: 2
  },
  {
    question: 'What is the prize money for winning the FIFA World Cup?',
    options: ['$10 million', '$30 million', '$42 million', '$50 million'],
    correct: 2,
    difficulty: 2
  },
  {
    question: 'Which boxer is known as "The Greatest"?',
    options: ['Joe Frazier', 'Muhammad Ali', 'Mike Tyson', 'Floyd Mayweather'],
    correct: 1,
    difficulty: 2
  },
  {
    question: 'In Formula 1, which team has won the most constructors championships?',
    options: ['Ferrari', 'Mercedes', 'McLaren', 'Red Bull'],
    correct: 1,
    difficulty: 2
  },
  {
    question: 'How many holes are there in a standard golf course?',
    options: ['9', '18', '27', '36'],
    correct: 1,
    difficulty: 2
  },
  {
    question: 'What is the name of the annual cycling race in France?',
    options: ['Giro d\'Italia', 'Tour de France', 'Vuelta a España', 'Paris-Roubaix'],
    correct: 1,
    difficulty: 2
  },
  {
    question: 'Which swimmer won the most Olympic gold medals of all time?',
    options: ['Ryan Lochte', 'Michael Phelps', 'Mark Spitz', 'Katie Ledecky'],
    correct: 1,
    difficulty: 2
  },
  {
    question: 'In basketball, how many points is a three-pointer worth?',
    options: ['1 point', '2 points', '3 points', '4 points'],
    correct: 2,
    difficulty: 2
  },
  {
    question: 'Which country won the Euro 2020 football championship?',
    options: ['England', 'Italy', 'Spain', 'France'],
    correct: 1,
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

// Get current URL for QR code
function buildQrUrl(url) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`;
}

// Set QR code on page load
function setQrCode() {
  if (!qrCode) return;
  const currentUrl = window.location.href || 'https://jojo8989983170921731.github.io/Pub-Quiz/';
  qrCode.src = buildQrUrl(currentUrl);
}

// Copy link button handler
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

// Initialize QR code
setQrCode();

// Quiz state
let currentIndex = 0;
let score = 0;
let answered = false;
let scoresByDifficulty = { 1: 0, 2: 0 };

// Start quiz
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

// Render current question
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

  // Fisher-Yates shuffle
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

// Handle answer selection
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

// Go to next question
function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

// Show final result
function showResult() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  resultText.textContent = `You scored ${score} out of 20 points.`;

  let resultMessage = '';
  if (score >= 18) {
    resultMessage = 'Amazing! You\'re a trivia champion! 🏆';
  } else if (score >= 15) {
    resultMessage = 'Excellent! You really know your stuff! 🌟';
  } else if (score >= 12) {
    resultMessage = 'Great job! Pretty impressive knowledge! 👏';
  } else if (score >= 9) {
    resultMessage = 'Good effort! Not bad at all! 💪';
  } else {
    resultMessage = 'Nice try! Better luck next time! 🎯';
  }

  resultTitle.textContent = resultMessage;

  // Show breakdown by difficulty
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

// Event listeners
if (startBtn) startBtn.addEventListener('click', startQuiz);
if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
if (restartBtn) restartBtn.addEventListener('click', startQuiz);

