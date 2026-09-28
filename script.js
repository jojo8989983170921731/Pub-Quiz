const questions = [
  {
    question: 'Who popularized the phrase “the American Dream” in his 1931 book The Epic of America?',
    options: ['James Truslow Adams', 'Frederick Jackson Turner', 'Walter Lippmann', 'John Steinbeck'],
    correct: 0
  },
  {
    question: 'In Adams’s definition, what was central to the American Dream?',
    options: ['A society where people can develop to their fullest potential', 'A guarantee that every household will own land', 'A return to inherited ranks and titles', 'A promise of equal income for all citizens'],
    correct: 0
  },
  {
    question: 'Which novel follows Jay Gatsby’s pursuit of wealth and status on Long Island?',
    options: ['The Great Gatsby', 'An American Tragedy', 'The Grapes of Wrath', 'The Age of Innocence'],
    correct: 0
  },
  {
    question: 'In The Great Gatsby, what does the green light across the water most strongly suggest?',
    options: ['Gatsby’s longing for an idealized future', 'Daisy’s rejection of her family’s wealth', 'Nick’s desire to leave the Midwest', 'The decline of New York’s suburbs'],
    correct: 0
  },
  {
    question: 'Which author wrote The Grapes of Wrath, depicting a family displaced during the Dust Bowl and Great Depression?',
    options: ['John Steinbeck', 'Upton Sinclair', 'Theodore Dreiser', 'Sinclair Lewis'],
    correct: 0
  },
  {
    question: 'What did the Homestead Act of 1862 offer eligible settlers who developed land in the West?',
    options: ['A claim to a parcel of public land', 'A federal loan for factory work', 'Free passage through Ellis Island', 'Automatic citizenship for their families'],
    correct: 0
  },
  {
    question: 'Which limitation of the Homestead Act is important when assessing its promise of opportunity?',
    options: ['Much of the land had already been taken from Indigenous peoples', 'It applied only to people who had inherited a farm', 'It barred settlers from cultivating the land', 'It was restricted to residents of eastern cities'],
    correct: 0
  },
  {
    question: 'What was one major purpose of the 1944 GI Bill?',
    options: ['To help eligible veterans pay for education and housing', 'To guarantee federal jobs to returning nurses', 'To provide land grants to all wartime factory workers', 'To establish Social Security for military families'],
    correct: 0
  },
  {
    question: 'Why did the GI Bill not provide equal benefits to all veterans in practice?',
    options: ['Local discrimination and segregated institutions restricted access', 'Only officers were eligible to apply', 'Benefits were limited to veterans born in the United States', 'Its education provisions ended before World War II veterans returned'],
    correct: 0
  },
  {
    question: 'What did “redlining” generally do to residents of neighborhoods marked as risky by lenders?',
    options: ['Restricted access to mortgages and other credit', 'Required them to insure homes through the federal government', 'Guaranteed them lower property-tax assessments', 'Reserved newly built homes for first-time buyers'],
    correct: 0
  },
  {
    question: 'Which law outlawed many forms of discrimination in public accommodations and employment in 1964?',
    options: ['Civil Rights Act', 'Voting Rights Act', 'Fair Housing Act', 'National Labor Relations Act'],
    correct: 0
  },
  {
    question: 'What was the Great Migration in twentieth-century U.S. history?',
    options: ['The movement of millions of Black Americans from the South to other regions', 'The relocation of Dust Bowl farmers to California', 'The westward movement prompted by the Homestead Act', 'The return of U.S. troops after World War II'],
    correct: 0
  },
  {
    question: 'Which group was excluded from Social Security coverage when it was first created in 1935, leaving many workers of color outside the system?',
    options: ['Many agricultural and domestic workers', 'Most public-school teachers', 'All railroad employees', 'Federal office workers'],
    correct: 0
  },
  {
    question: 'What changed with the Immigration and Nationality Act of 1965?',
    options: ['It ended the national-origins quota system', 'It established the first U.S. naturalization process', 'It limited immigration to Western Europe', 'It created Ellis Island as a federal port'],
    correct: 0
  },
  {
    question: 'Why are postwar suburbs such as Levittown often discussed in critiques of the American Dream?',
    options: ['Access to new homes was shaped by racial exclusion and discriminatory policies', 'They were built mainly for families displaced by the Dust Bowl', 'Federal law required every home to be sold to a veteran', 'They offered public housing rather than privately owned homes'],
    correct: 0
  },
  {
    question: 'In his 1963 “I Have a Dream” speech, Martin Luther King Jr. called for the nation to live up to which founding text’s promises?',
    options: ['The Declaration of Independence and the Constitution', 'The Articles of Confederation and the Northwest Ordinance', 'The Emancipation Proclamation and the Monroe Doctrine', 'The Federalist Papers and the Bill of Rights'],
    correct: 0
  },
  {
    question: 'What does “meritocracy” mean in debates about opportunity?',
    options: ['Positions and rewards are allocated according to ability and achievement', 'Wealth is distributed equally regardless of work', 'Public office is inherited within families', 'Economic outcomes are determined entirely by geography'],
    correct: 0
  },
  {
    question: 'What is intergenerational economic mobility?',
    options: ['A change in economic position between parents and their children', 'A worker changing jobs several times in one career', 'The movement of businesses between states', 'A household moving from a city to a suburb'],
    correct: 0
  },
  {
    question: 'Why can a college degree be both a route to opportunity and a source of financial risk in the United States?',
    options: ['Tuition can require substantial borrowing, even when a degree improves job prospects', 'Degrees are legally required for nearly every job, but federal loans are unavailable', 'College attendance generally prevents graduates from changing careers', 'Tuition is paid only after graduates reach a fixed income'],
    correct: 0
  },
  {
    question: 'Which statement best distinguishes income from wealth?',
    options: ['Income is money received over time; wealth is the value of assets minus debts', 'Income is property owned; wealth is a worker’s annual pay', 'Income counts investments; wealth counts only wages', 'Income and wealth are two names for household spending'],
    correct: 0
  },
  {
    question: 'Why is homeownership often treated as a marker of the American Dream, despite not being attainable or desirable for everyone?',
    options: ['It can represent stability and an asset that may appreciate over time', 'It is the only legal way to build savings in the United States', 'Federal law requires households to own rather than rent', 'Home values rise at the same rate in every community'],
    correct: 0
  },
  {
    question: 'Which factor has been linked to the lasting effects of mass incarceration on economic opportunity?',
    options: ['A criminal record can create barriers to employment and housing', 'A prison sentence automatically cancels student debt', 'People with convictions receive priority for public-sector jobs', 'Incarceration has no effect after a person is released'],
    correct: 0
  },
  {
    question: 'What did the Equal Pay Act of 1963 specifically target?',
    options: ['Wage differences based on sex for equal work', 'Hiring discrimination based on race in public businesses', 'Unequal access to mortgages by neighborhood', 'Different pay scales between federal and state workers'],
    correct: 0
  },
  {
    question: 'What is a key difference between the federal minimum wage and a “living wage” estimate?',
    options: ['A living-wage estimate reflects local costs for basic needs', 'The federal minimum changes automatically with local rent', 'A living wage is the same national rate set by Congress', 'The federal minimum applies only to salaried workers'],
    correct: 0
  },
  {
    question: 'Which genre helped popularize stories of poor boys rising to success in the late 19th century?',
    options: ['Horatio Alger’s “rags-to-riches” novels', 'Southern Gothic plantation novels', 'Transcendentalist nature essays', 'The Lost Generation’s war poetry'],
    correct: 0
  },
  {
    question: 'In Arthur Miller’s Death of a Salesman, what does Willy Loman’s story chiefly question?',
    options: ['Whether popularity and material success are reliable measures of worth', 'Whether rural life offers more opportunity than city life', 'Whether military service guarantees social status', 'Whether inherited wealth can strengthen family ties'],
    correct: 0
  },
  {
    question: 'In Langston Hughes’s poem “Harlem,” what question frames its reflection on deferred dreams?',
    options: ['What happens to a dream deferred?', 'Who owns the fields beyond the city?', 'Where does the wandering river end?', 'When will the promised train arrive?'],
    correct: 0
  },
  {
    question: 'Which interpretation best captures the tension often explored in American Dream stories?',
    options: ['The promise of self-made success can clash with unequal starting conditions', 'Economic growth eliminates the need for personal freedom', 'Family loyalty always prevents people from changing their status', 'Urban life makes social mobility impossible in every case'],
    correct: 0
  },
  {
    question: 'Why is the American Dream not a single, fixed definition shared by every generation?',
    options: ['Its meaning has shifted with changing ideas about freedom, security, and success', 'It has always referred only to owning a detached house', 'It is defined in one clause of the Constitution', 'It was used only by writers and never in public debate'],
    correct: 0
  },
  {
    question: 'Which is the strongest reason to distinguish “equal opportunity” from “equal outcomes” in this debate?',
    options: ['Opportunity concerns access to chances; outcomes concern where people ultimately end up', 'Opportunity measures income, while outcomes measure only education', 'Opportunity applies to individuals, while outcomes apply only to businesses', 'Opportunity and outcomes are interchangeable terms in U.S. law'],
    correct: 0
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
      copyLinkBtn.textContent = 'Link copied';
      setTimeout(() => {
        copyLinkBtn.textContent = 'Copy invite link';
      }, 1500);
    } catch (error) {
      copyLinkBtn.textContent = 'Copy not supported';
      setTimeout(() => {
        copyLinkBtn.textContent = 'Copy invite link';
      }, 1500);
    }
  });
}

setQrCode();

let currentIndex = 0;
let score = 0;
let answered = false;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[currentIndex];
  answered = false;
  nextBtn.classList.add('hidden');

  progressEl.textContent = `Question ${currentIndex + 1}/${questions.length}`;
  scoreEl.textContent = `Score: ${score}`;
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
  resultTitle.textContent = score >= 22 ? 'Excellent work!' : score >= 15 ? 'Strong performance!' : 'Good effort!';
  resultText.textContent = `You scored ${score} out of ${questions.length} points. Nice job!`;
}

if (startBtn) startBtn.addEventListener('click', startQuiz);
if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
if (restartBtn) restartBtn.addEventListener('click', startQuiz);
