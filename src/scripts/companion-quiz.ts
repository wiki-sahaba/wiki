interface Companion {
  clues: string[];
  options: string[];
  answer: number;
  slug: string;
}

interface CompState {
  data: Companion[];
  currentIndex: number;
  answered: boolean;
}

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

function initState(): CompState {
  const el = document.getElementById('companion-card');
  const data: Companion[] = JSON.parse(el?.dataset.companions ?? '[]');
  return {
    data,
    currentIndex: getDayOfYear() % data.length,
    answered: false,
  };
}

function renderCompanion(state: CompState): void {
  state.answered = false;
  const c = state.data[state.currentIndex];
  const cluesEl = document.getElementById('clues-box');
  const optsEl = document.getElementById('companion-options');
  const resEl = document.getElementById('companion-result');
  const cntEl = document.getElementById('comp-counter');

  if (cluesEl) {
    cluesEl.innerHTML = c.clues.map((cl) => `<div class="clue-item">🔍 ${cl}</div>`).join('');
  }
  if (optsEl) {
    const btns = optsEl.querySelectorAll<HTMLButtonElement>('.companion-opt');
    btns.forEach((btn, i) => {
      btn.textContent = c.options[i];
      btn.className = 'companion-opt';
      btn.disabled = false;
    });
  }
  if (resEl) resEl.style.display = 'none';
  if (cntEl) cntEl.textContent = `${state.currentIndex + 1} / ${state.data.length}`;
}

function initCompanionQuiz(): void {
  const state = initState();
  const optsEl = document.getElementById('companion-options');
  const resEl = document.getElementById('companion-result');

  renderCompanion(state);

  optsEl?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.companion-opt');
    if (!btn || state.answered || btn.disabled) return;
    state.answered = true;

    const selected = parseInt(btn.dataset.index ?? '0', 10);
    const c = state.data[state.currentIndex];
    const all = optsEl.querySelectorAll<HTMLButtonElement>('.companion-opt');

    all.forEach((b) => (b.disabled = true));
    all[c.answer].classList.add('correct');
    if (selected !== c.answer) btn.classList.add('wrong');

    if (resEl) {
      resEl.style.display = 'block';
      resEl.innerHTML =
        (selected === c.answer ? '✅ درست! ' : '❌ غلط! ') +
        `این صحابی <a href="/articles/${c.slug}" class="result-link">${c.options[c.answer]}</a> بود.`;
    }
  });

  document.getElementById('comp-prev')?.addEventListener('click', () => {
    state.currentIndex = (state.currentIndex - 1 + state.data.length) % state.data.length;
    renderCompanion(state);
  });

  document.getElementById('comp-next')?.addEventListener('click', () => {
    state.currentIndex = (state.currentIndex + 1) % state.data.length;
    renderCompanion(state);
  });
}

initCompanionQuiz();
