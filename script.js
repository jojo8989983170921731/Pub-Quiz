// DIFFICULTY LEVELS: 1 = EASY (1-10), 2 = MEDIUM (11-20), 3 = HARDCORE (21-30)

const questions = [
  // ===== EASY MODE (Questions 1-10) =====
  {
    question: 'What country's Dream are we talking about?',
    options: ['The United States of America', 'Canada', 'Mexico', 'United Kingdom'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which of these is a symbol of the American Dream?',
    options: ['Owning your own home', 'Working in a factory', 'Taking a vacation', 'Playing video games'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What year did the phrase "American Dream" become popular?',
    options: ['1931', '1776', '1950', '1995'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Who wrote the novel "The Great Gatsby," a famous story about the American Dream?',
    options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain', 'John Steinbeck'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which of these is NOT part of the traditional American Dream?',
    options: ['Living in poverty forever', 'Having a successful career', 'Owning a car', 'Raising a family'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does "opportunity" mean in the American Dream?',
    options: ['A chance to succeed and improve your life', 'Free money from the government', 'A job you must keep forever', 'Something only rich people get'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'In "The Great Gatsby," what does Gatsby dream about?',
    options: ['Winning back his lost love', 'Becoming a scientist', 'Moving to Europe', 'Joining the military'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which American leader spoke about having a "dream" for the future?',
    options: ['Martin Luther King Jr.', 'Abraham Lincoln', 'George Washington', 'Thomas Jefferson'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'What does "self-made" mean in the American Dream?',
    options: ['Succeeding through your own hard work', 'Making your own clothes', 'Building your own house', 'Creating your own business from nothing'],
    correct: 0,
    difficulty: 1
  },
  {
    question: 'Which of these is a real opportunity in the American Dream?',
    options: ['Attending school and getting an education', 'Waiting for success to come', 'Avoiding hard work', 'Ignoring new skills'],
    correct: 0,
    difficulty: 1
  },

  // ===== MEDIUM MODE (Questions 11-20) =====
  {
    question: 'James Truslow Adams popularized the phrase "American Dream" in which book?',
    options: ['The Epic of America', 'The Wealth of Nations', 'Democracy in America', 'The American Spirit'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What act of 1862 offered land to settlers who would develop it?',
    options: ['Homestead Act', 'Civil Rights Act', 'Land Grant Act', 'Expansion Doctrine'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'The 1944 GI Bill primarily helped which group achieve the American Dream?',
    options: ['Returning military veterans', 'Factory workers', 'Immigrants', 'Farmers'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What was "redlining" in American housing policy?',
    options: ['Restricting access to mortgages in certain neighborhoods', 'Painting houses with red lines', 'Creating neighborhood organizations', 'Offering special discounts'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'Which movement of the 20th century involved millions of Black Americans relocating?',
    options: ['The Great Migration', 'The Gold Rush', 'The California Dream', 'The Industrial Revolution'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What is "meritocracy"?',
    options: ['Rewards based on ability and achievement', 'Wealth passed from parents to children', 'Government control of businesses', 'A type of government'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'The Immigration and Nationality Act of 1965 abolished what system?',
    options: ['National-origins quota system', 'Citizenship requirements', 'Passport regulations', 'Border controls'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'In Arthur Miller's "Death of a Salesman," what does Willy Loman question?',
    options: ['Whether success equals self-worth', 'Whether he should move', 'Whether cars are safe', 'Whether cities are better'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'What is "intergenerational economic mobility"?',
    options: ['Change in economic position between parents and children', 'Moving to a different country', 'Changing jobs frequently', 'Inheriting family wealth'],
    correct: 0,
    difficulty: 2
  },
  {
    question: 'According to Langston Hughes, what happens to a dream deferred?',
    options: ['It may wither or explode', 'It becomes stronger', 'It disappears forever', 'It returns the next day'],
    correct: 0,
    difficulty: 2
  },

  // ===== HARDCORE MODE (Questions 21-30) =====
  {
    question: 🔥 Which historical factor most directly undermined the promise of the Homestead Act for Black Americans and Indigenous peoples?',
    options: ['Systemic exclusion from land claims and prior Indigenous dispossession', 'Lack of transportation to western territories', 'Language barriers preventing settlement', 'Absence of agricultural knowledge'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 Why did discriminatory practices in mortgage lending (redlining) create persistent generational wealth gaps even after explicit bans?',
    options: ['Missed decades of home equity accumulation and community investment', 'Affected only individual borrowers temporarily', 'Was completely reversed by the Fair Housing Act', 'Only prevented Black Americans from owning homes once'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 How did Social Security\'s original exclusion of agricultural and domestic workers disproportionately impact opportunity?',
    options: ['Left millions of workers of color without retirement security', 'Increased factory employment', 'Made education more affordable', 'Encouraged westward migration'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 What paradox did the GI Bill exemplify regarding American opportunity?',
    options: ['Its benefits were conditioned on local segregation and discrimination', 'It was offered to all veterans equally', 'It eliminated all racial barriers immediately', 'It prevented future generations from attending college'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 In contemporary debates, why is the relationship between education and debt essential to understanding the American Dream?',
    options: ['Education investment increasingly requires borrowing that may outweigh economic gains', 'All college graduates become wealthy', 'Student loans have no impact on long-term wealth', 'Education eliminates all financial risk'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 Which structural distinction reveals why "equal opportunity" differs fundamentally from "equal outcomes"?',
    options: ['Access to chances ≠ where people ultimately end up due to compounding advantages/disadvantages', 'Opportunity and outcomes are identical', 'Only rich people have opportunities', 'Everyone achieves the same outcome automatically'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 How does mass incarceration specifically undermine the American Dream\'s premise of self-improvement?',
    options: ['Criminal records create barriers to employment, housing, and civic participation', 'Incarceration has no economic consequences', 'Prison sentences eliminate all debt', 'Convicted individuals can easily find housing'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 What makes the distinction between "income" and "wealth" crucial for analyzing whether the American Dream is achievable?',
    options: ['Income is temporary earnings; wealth (assets minus debts) provides long-term security and intergenerational transfer', 'Income and wealth are the same thing', 'Wealth comes only from high income', 'Income determines wealth immediately'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 How did practices like redlining and discriminatory lending simultaneously limit both wealth and opportunity for generations?',
    options: ['Prevented home ownership (primary wealth vehicle), reduced neighborhood investment, and created cycles of disadvantage', 'Only affected prices temporarily', 'Was reversed by individual effort alone', 'Created equal opportunities regardless of neighborhood'],
    correct: 0,
    difficulty: 3
  },
  {
    question: '🔥 In the context of the American Dream, why do scholars distinguish between "aspiration" and "actual mobility"?',
    options: ['Many believe in upward mobility but structural barriers prevent it, revealing gap between ideology and reality', 'All aspirations become reality', 'Actual mobility is guaranteed regardless of circumstances', 'There is no difference between the two'],
    correct: 0,
    difficulty: 3
  }
];

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
const hardcoreBadge = document.getElementById('hardcore-badge');
const difficultyLabel = document.getElementById('difficulty-label');
const resultBreakdown = document.getElementById('result-breakdown');
const resultScore = document.getElementById('result-score');

function buildQrUrl(url) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`;
}

function setQrCode() {
  if (!qrCode) return;
  const currentUrl = window.location.href || 'http://localhost:8000';
  qrCode.src = buildQrUrl(currentUrl);
}

if (copyLinkBtn) {
  copyLinkBtn.addEventListener('click', async () => {
    const inviteUrl = window.location.href || 'http://localhost:8000';
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
let scoresByDifficulty = { 1: 0, 2: 0, 3: 0 };

function getDifficultyLabel(difficulty) {
  if (difficulty === 1) return 'Easy Mode ⭐';
  if (difficulty === 2) return 'Medium Challenge ⭐⭐';
  if (difficulty === 3) return 'Hardcore Mode 🔥';
  return '';
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  scoresByDifficulty = { 1: 0, 2: 0, 3: 0 };
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[currentIndex];
  answered = false;
  nextBtn.classList.add('hidden');

  progressEl.textContent = `Question ${currentIndex + 1}/30`;
  scoreEl.textContent = `Score: ${score}`;
  difficultyLabel.textContent = getDifficultyLabel(currentQuestion.difficulty);
  
  // Show hardcore badge for difficulty 3
  if (currentQuestion.difficulty === 3) {
    hardcoreBadge.classList.remove('hidden');
  } else {
    hardcoreBadge.classList.add('hidden');
  }

  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = '';

  const shuffledOptions = currentQuestion.options
    .map((text, index) => ({ text, isCorrect: index === currentQuestion.correct }))

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
  
  resultScore.textContent = `You scored ${score} out of 30 points`;
  
  let resultMessage = '';
  if (score >= 25) {
    resultMessage = 'INCREDIBLE! You've mastered the American Dream! 🏆';
  } else if (score >= 20) {
    resultMessage = 'Excellent! You truly understand the American Dream! 🌟';
  } else if (score >= 15) {
    resultMessage = 'Great job! You know a lot about the American Dream! 👏';
  } else if (score >= 10) {
    resultMessage = 'Good effort! You're learning the way! 💪';
  } else {
    resultMessage = 'Keep learning! The journey is the real American Dream! 🚀';
  }
  
  resultTitle.textContent = resultMessage;

  // Show breakdown by difficulty
  resultBreakdown.innerHTML = `
    <div class="score-breakdown">
      <div class="breakdown-item">
        <span class="difficulty-badge easy-badge">Easy Mode</span>
        <span class="breakdown-score">${scoresByDifficulty[1]}/10</span>
      </div>
      <div class="breakdown-item">
        <span class="difficulty-badge medium-badge">Medium Challenge</span>
        <span class="breakdown-score">${scoresByDifficulty[2]}/10</span>
      </div>
      <div class="breakdown-item">
        <span class="difficulty-badge hardcore-badge-result">Hardcore Mode 🔥</span>
        <span class="breakdown-score">${scoresByDifficulty[3]}/10</span>
      </div>
    </div>
  `;
}

if (startBtn) startBtn.addEventListener('click', startQuiz);
if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
if (restartBtn) restartBtn.addEventListener('click', startQuiz);
