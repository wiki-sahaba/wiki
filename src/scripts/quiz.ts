interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface QuizState {
  questions: Question[];
  currentIndex: number;
  answered: boolean;
  score: number;
  total: number;
}

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

function initState(): QuizState {
  const el = document.getElementById('quiz-card');
  const questions: Question[] = JSON.parse(el?.dataset.questions ?? '[]');
  const dayOfYear = getDayOfYear();
  return {
    questions,
    currentIndex: dayOfYear % questions.length,
    answered: false,
    score: parseInt(localStorage.getItem('quizScore') ?? '0', 10),
    total: parseInt(localStorage.getItem('quizTotal') ?? '0', 10),
  };
}

function renderQuestion(state: QuizState): void {
  state.answered = false;
  const q = state.questions[state.currentIndex];
  const questionEl = document.getElementById('quiz-question');
  const optionsEl = document.getElementById('quiz-options');
  const resultEl = document.getElementById('quiz-result');
  const counterEl = document.getElementById('quiz-counter');

  if (questionEl) questionEl.textContent = q.question;
  if (optionsEl) {
    const btns = optionsEl.querySelectorAll<HTMLButtonElement>('.quiz-option');
    btns.forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.className = 'quiz-option';
      btn.disabled = false;
    });
  }
  if (resultEl) resultEl.style.display = 'none';
  if (counterEl) counterEl.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
}

function initQuiz(): void {
  const state = initState();
  const optionsEl = document.getElementById('quiz-options');
  const resultEl = document.getElementById('quiz-result');

  renderQuestion(state);

  optionsEl?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.quiz-option');
    if (!btn || state.answered || btn.disabled) return;
    state.answered = true;

    const selected = parseInt(btn.dataset.index ?? '0', 10);
    const q = state.questions[state.currentIndex];
    const allBtns = optionsEl.querySelectorAll<HTMLButtonElement>('.quiz-option');

    allBtns.forEach((b) => (b.disabled = true));
    allBtns[q.answer].classList.add('correct');
    if (selected !== q.answer) btn.classList.add('wrong');

    state.total++;
    if (selected === q.answer) state.score++;
    localStorage.setItem('quizScore', String(state.score));
    localStorage.setItem('quizTotal', String(state.total));

    if (resultEl) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = (selected === q.answer ? '✅ درست! ' : '❌ غلط! ') + q.explanation;
    }
  });

  document.getElementById('prev-btn')?.addEventListener('click', () => {
    state.currentIndex = (state.currentIndex - 1 + state.questions.length) % state.questions.length;
    renderQuestion(state);
  });

  document.getElementById('next-btn')?.addEventListener('click', () => {
    state.currentIndex = (state.currentIndex + 1) % state.questions.length;
    renderQuestion(state);
  });
}

initQuiz();
