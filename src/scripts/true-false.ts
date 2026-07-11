interface Fact {
  statement: string;
  answer: boolean;
  explanation: string;
}

interface TFState {
  facts: Fact[];
  currentIndex: number;
  answered: boolean;
}

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

function initState(): TFState {
  const el = document.getElementById('tf-card');
  const facts: Fact[] = JSON.parse(el?.dataset.facts ?? '[]');
  return {
    facts,
    currentIndex: getDayOfYear() % facts.length,
    answered: false,
  };
}

function renderTF(state: TFState): void {
  state.answered = false;
  const f = state.facts[state.currentIndex];
  const stmtEl = document.getElementById('tf-statement');
  const trueBtn = document.getElementById('tf-true');
  const falseBtn = document.getElementById('tf-false');
  const resEl = document.getElementById('tf-result');
  const cntEl = document.getElementById('tf-counter');

  if (stmtEl) stmtEl.textContent = f.statement;
  if (trueBtn) {
    trueBtn.className = 'tf-btn tf-true';
    (trueBtn as HTMLButtonElement).disabled = false;
  }
  if (falseBtn) {
    falseBtn.className = 'tf-btn tf-false';
    (falseBtn as HTMLButtonElement).disabled = false;
  }
  if (resEl) resEl.style.display = 'none';
  if (cntEl) cntEl.textContent = `${state.currentIndex + 1} / ${state.facts.length}`;
}

function initTrueFalse(): void {
  const state = initState();
  const trueBtn = document.getElementById('tf-true');
  const falseBtn = document.getElementById('tf-false');
  const resEl = document.getElementById('tf-result');

  renderTF(state);

  function checkAnswer(userAnswer: boolean): void {
    if (state.answered) return;
    state.answered = true;
    const f = state.facts[state.currentIndex];

    if (trueBtn) (trueBtn as HTMLButtonElement).disabled = true;
    if (falseBtn) (falseBtn as HTMLButtonElement).disabled = true;

    if (f.answer === true) {
      trueBtn?.classList.add('correct');
      falseBtn?.classList.add('wrong');
    } else {
      falseBtn?.classList.add('correct');
      trueBtn?.classList.add('wrong');
    }

    if (resEl) {
      resEl.style.display = 'block';
      resEl.innerHTML = (userAnswer === f.answer ? '✅ درست! ' : '❌ غلط! ') + f.explanation;
    }
  }

  trueBtn?.addEventListener('click', () => checkAnswer(true));
  falseBtn?.addEventListener('click', () => checkAnswer(false));

  document.getElementById('tf-prev')?.addEventListener('click', () => {
    state.currentIndex = (state.currentIndex - 1 + state.facts.length) % state.facts.length;
    renderTF(state);
  });

  document.getElementById('tf-next')?.addEventListener('click', () => {
    state.currentIndex = (state.currentIndex + 1) % state.facts.length;
    renderTF(state);
  });
}

initTrueFalse();
