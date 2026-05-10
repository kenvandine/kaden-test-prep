/* ===== NC STATE PLACEMENT PREP — APP ===== */

const App = (() => {
  /* ----- STATE ----- */
  const state = {
    subject: null,
    mode: 'quiz',
    topicId: null,
    questions: [],
    qi: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    answered: false,
    fiIndex: 0,
    fiFlipped: false,
    fiMastered: new Set(),
    progress: loadProgress(),
  };

  /* ----- PERSISTENCE ----- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem('ncstate-prep') || '{}'); }
    catch { return {}; }
  }

  function saveProgress() {
    localStorage.setItem('ncstate-prep', JSON.stringify(state.progress));
  }

  function getStats() {
    const p = state.progress;
    const xp = Object.values(p).reduce((s, v) => s + (v.xp || 0), 0);
    const answered = Object.values(p).reduce((s, v) => s + (v.answered || 0), 0);
    const bestStreak = Object.values(p).reduce((s, v) => s + (v.bestStreak || 0), 0);
    return { xp, answered, bestStreak };
  }

  function updateGlobalStats() {
    const { xp, answered, bestStreak } = getStats();
    setText('stat-xp', xp);
    setText('stat-answered', answered);
    setText('stat-best-streak', bestStreak);
  }

  /* ----- UTILS ----- */
  function $(id) { return document.getElementById(id); }
  function setText(id, val) { const el = $(id); if (el) el.textContent = val; }
  function addClass(el, cls) { if (el) el.classList.add(cls); }
  function removeClass(el, cls) { if (el) el.classList.remove(cls); }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ----- SCREEN MANAGEMENT ----- */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
    });
    const el = $(id);
    if (el) {
      el.classList.add('active');
      el.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  /* ----- HOME SCREEN ----- */
  function goHome() {
    updateGlobalStats();
    showScreen('screen-welcome');
  }

  function selectSubject(subj) {
    state.subject = subj;
    state.mode = 'quiz';
    showSubjectScreen();
  }

  /* ----- SUBJECT SCREEN ----- */
  function showSubjectScreen() {
    const s = SUBJECTS[state.subject];
    setText('subj-name', s.name);
    setText('subj-icon', s.icon);

    const subjectProgress = state.progress[state.subject] || {};
    setText('subj-xp', subjectProgress.xp || 0);

    setMode(state.mode);
    showScreen('screen-subject');
  }

  function setMode(mode) {
    state.mode = mode;

    // Toggle mode buttons
    ['quiz', 'flash', 'ref'].forEach(m => {
      const btn = $(`mode-${m}`);
      if (btn) btn.classList.toggle('active-mode', m === mode);
    });

    // Toggle content panels
    ['quiz', 'flash', 'ref'].forEach(m => {
      const panel = $(`mode-${m}-content`);
      if (panel) panel.classList.toggle('hidden', m !== mode);
    });

    if (mode === 'quiz') renderTopicGrid();
    if (mode === 'flash') renderFlashPreview();
    if (mode === 'ref') renderReference();
  }

  /* ----- TOPIC GRID ----- */
  function renderTopicGrid() {
    const topics = SUBJECTS[state.subject].topics;
    const grid = $('topic-grid');
    if (!grid) return;
    grid.innerHTML = '';

    topics.forEach(topic => {
      const prog = state.progress[`${state.subject}-${topic.id}`] || {};
      const answered = prog.answered || 0;
      const total = topic.qs.length;
      const pct = total > 0 ? Math.min(100, Math.round((answered / total) * 100)) : 0;

      const card = document.createElement('button');
      card.className = 'topic-card';
      card.innerHTML = `
        <span class="topic-icon">${topic.icon}</span>
        <div class="topic-name">${topic.name}</div>
        <div class="topic-qcount">${total} questions</div>
        <div class="topic-progress-bar">
          <div class="topic-progress-fill" style="width: ${pct}%"></div>
        </div>
      `;
      card.onclick = () => startQuiz(topic.id);
      grid.appendChild(card);
    });
  }

  /* ----- QUIZ ENGINE ----- */
  function startQuiz(topicId) {
    state.topicId = topicId;
    state.qi = 0;
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.answered = false;

    if (topicId === 'all') {
      const allQs = SUBJECTS[state.subject].topics.flatMap(t =>
        t.qs.map(q => ({ ...q, topicName: t.name, topicId: t.id }))
      );
      state.questions = shuffle(allQs).slice(0, 15);
    } else {
      const topic = SUBJECTS[state.subject].topics.find(t => t.id === topicId);
      state.questions = shuffle(topic.qs.map(q => ({
        ...q, topicName: topic.name, topicId: topic.id
      })));
    }

    renderQuestion();
    showScreen('screen-quiz');
  }

  function renderQuestion() {
    const q = state.questions[state.qi];
    const total = state.questions.length;

    // Header
    setText('quiz-score', state.score);
    updateStreakDisplay();

    // Progress
    const pct = (state.qi / total) * 100;
    const fill = $('progress-fill');
    if (fill) fill.style.width = `${pct}%`;
    setText('q-counter', `${state.qi + 1} / ${total}`);

    // Question
    setText('q-topic-label', q.topicName || '');
    const qText = $('question-text');
    if (qText) qText.innerHTML = q.q;

    // Options
    const grid = $('options-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${labels[i]}</span><span class="option-text">${opt}</span>`;
      btn.onclick = () => selectAnswer(i);
      grid.appendChild(btn);
    });

    // Explanation & next btn
    const expBox = $('explanation-box');
    const nextBtn = $('next-btn');
    if (expBox) { expBox.className = 'explanation-box hidden'; expBox.innerHTML = ''; }
    if (nextBtn) nextBtn.classList.add('hidden');
    hideXpPopup();

    state.answered = false;
  }

  function selectAnswer(idx) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.qi];
    const correct = idx === q.a;
    const btns = document.querySelectorAll('.option-btn');

    btns.forEach(b => b.disabled = true);
    btns[idx].classList.add(correct ? 'correct' : 'wrong');
    if (!correct) btns[q.a].classList.add('correct');

    // Scoring
    if (correct) {
      state.streak++;
      state.maxStreak = Math.max(state.maxStreak, state.streak);
      const bonus = state.streak >= 5 ? 20 : state.streak >= 4 ? 15 : state.streak >= 3 ? 10 : state.streak >= 2 ? 5 : 0;
      const pts = 10 + bonus;
      state.score += pts;
      showXpPopup(pts, bonus);
    } else {
      state.streak = 0;
    }

    setText('quiz-score', state.score);
    updateStreakDisplay();

    // Explanation
    const expBox = $('explanation-box');
    const expLabel = $('exp-label');
    const expText = $('exp-text');
    if (expBox && expLabel && expText) {
      expBox.className = `explanation-box ${correct ? 'correct' : 'wrong'}`;
      expLabel.className = `exp-label ${correct ? 'correct' : 'wrong'}`;
      expLabel.textContent = correct ? '✓ Correct!' : '✗ Incorrect';
      expText.innerHTML = q.exp;
    }

    const nextBtn = $('next-btn');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }

  function nextQuestion() {
    state.qi++;
    if (state.qi >= state.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function exitQuiz() {
    showSubjectScreen();
  }

  /* ----- STREAK DISPLAY ----- */
  function updateStreakDisplay() {
    const display = $('streak-display');
    const icon = $('streak-icon');
    const count = $('streak-count');
    if (!display || !icon || !count) return;

    count.textContent = state.streak;

    if (state.streak >= 5) {
      icon.textContent = '🔥';
      display.style.color = '#ff4500';
    } else if (state.streak >= 3) {
      icon.textContent = '🔥';
      display.style.color = '#fd7e14';
    } else if (state.streak >= 2) {
      icon.textContent = '⚡';
      display.style.color = '#ffc107';
    } else {
      icon.textContent = '💪';
      display.style.color = '#adb5bd';
    }

    if (state.streak > 0) {
      display.classList.add('active');
      setTimeout(() => display.classList.remove('active'), 400);
    }
  }

  /* ----- XP POPUP ----- */
  function showXpPopup(pts, bonus) {
    const popup = $('xp-popup');
    if (!popup) return;
    popup.textContent = bonus > 0 ? `+${pts} XP (🔥 ×${state.streak} Streak!)` : `+${pts} XP`;
    popup.className = 'xp-popup';
    setTimeout(() => { popup.className = 'xp-popup hidden'; }, 1200);
  }

  function hideXpPopup() {
    const popup = $('xp-popup');
    if (popup) popup.className = 'xp-popup hidden';
  }

  /* ----- RESULTS ----- */
  function showResults() {
    const total = state.questions.length;
    const maxScore = total * 10;
    const pct = Math.round((state.score / maxScore) * 100);

    // Save progress
    const key = `${state.subject}-${state.topicId}`;
    const prev = state.progress[key] || {};
    state.progress[key] = {
      answered: (prev.answered || 0) + total,
      xp: (prev.xp || 0) + state.score,
      bestStreak: Math.max(prev.bestStreak || 0, state.maxStreak),
    };

    const subjectKey = state.subject;
    const sprev = state.progress[subjectKey] || {};
    state.progress[subjectKey] = {
      xp: (sprev.xp || 0) + state.score,
      answered: (sprev.answered || 0) + total,
      bestStreak: Math.max(sprev.bestStreak || 0, state.maxStreak),
    };

    saveProgress();

    // Emoji + title
    let emoji, title, message;
    if (pct >= 90) {
      emoji = '🏆'; title = 'Outstanding!';
      message = 'You\'re crushing it! You\'re well-prepared for the NC State placement test.';
    } else if (pct >= 75) {
      emoji = '🎉'; title = 'Great Job!';
      message = 'Solid performance! Keep reviewing your weak spots and you\'ll be ready.';
    } else if (pct >= 60) {
      emoji = '👍'; title = 'Good Effort!';
      message = 'You\'re on the right track. Review the explanations and practice more.';
    } else {
      emoji = '💪'; title = 'Keep Going!';
      message = 'Don\'t give up — every attempt builds understanding. Review and retry!';
    }

    setText('results-emoji', emoji);
    setText('results-title', title);
    setText('results-message', message);
    setText('ring-pct', `${pct}%`);
    setText('ring-sub', `${state.score} / ${maxScore}`);
    setText('r-score', state.score);
    setText('r-streak', state.maxStreak);
    setText('r-xp', state.score);

    // Animate ring
    const ring = $('ring-fill');
    if (ring) {
      const circumference = 314;
      const offset = circumference - (pct / 100) * circumference;
      ring.classList.remove('success-ring', 'warning-ring');
      if (pct >= 75) ring.classList.add('success-ring');
      else if (pct >= 50) ring.classList.add('warning-ring');
      setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
    }

    showScreen('screen-results');
    if (pct >= 70) launchConfetti();
  }

  /* ----- FLASHCARDS ----- */
  function renderFlashPreview() {
    const cards = FLASHCARDS[state.subject] || [];
    const preview = $('flash-preview');
    if (!preview) return;
    preview.innerHTML = '';
    cards.forEach(card => {
      const chip = document.createElement('div');
      chip.className = 'flash-chip';
      chip.textContent = card.front;
      preview.appendChild(chip);
    });
  }

  function startFlashcards() {
    state.fiIndex = 0;
    state.fiFlipped = false;
    state.fiMastered = new Set();
    renderFlashcard();
    showScreen('screen-flashcards');
  }

  function renderFlashcard() {
    const cards = FLASHCARDS[state.subject] || [];
    const total = cards.length;
    const card = cards[state.fiIndex];
    if (!card) return;

    setText('fc-counter', `${state.fiIndex + 1} / ${total}`);
    setText('card-front', card.front);
    $('card-back').innerHTML = card.back.replace(/\n/g, '<br>');

    const inner = $('card-inner');
    if (inner) {
      inner.classList.remove('flipped');
      state.fiFlipped = false;
    }

    renderFcDots(total);
    updateFcProgress(total);
  }

  function renderFcDots(total) {
    const dotsEl = $('fc-dots');
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    const show = Math.min(total, 20);
    for (let i = 0; i < show; i++) {
      const dot = document.createElement('div');
      dot.className = 'fc-dot';
      if (i === state.fiIndex) dot.classList.add('current');
      else if (state.fiMastered.has(i)) dot.classList.add('mastered');
      dotsEl.appendChild(dot);
    }
  }

  function updateFcProgress(total) {
    const mastered = state.fiMastered.size;
    setText('fc-progress-text', `Mastered: ${mastered} of ${total}`);
  }

  function flipCard() {
    const inner = $('card-inner');
    if (!inner) return;
    state.fiFlipped = !state.fiFlipped;
    inner.classList.toggle('flipped', state.fiFlipped);
  }

  function nextCard() {
    const total = (FLASHCARDS[state.subject] || []).length;
    state.fiIndex = (state.fiIndex + 1) % total;
    renderFlashcard();
  }

  function prevCard() {
    const total = (FLASHCARDS[state.subject] || []).length;
    state.fiIndex = (state.fiIndex - 1 + total) % total;
    renderFlashcard();
  }

  function markCard(mastered) {
    const total = (FLASHCARDS[state.subject] || []).length;
    if (mastered) state.fiMastered.add(state.fiIndex);
    else state.fiMastered.delete(state.fiIndex);
    renderFcDots(total);
    updateFcProgress(total);
    nextCard();
  }

  function goBack() {
    goHome();
  }

  /* ----- REFERENCE SHEET ----- */
  function renderReference() {
    const sections = REFERENCE[state.subject] || [];
    const container = $('reference-content');
    if (!container) return;
    container.innerHTML = '';

    sections.forEach((section, si) => {
      const div = document.createElement('div');
      div.className = 'ref-section';

      const header = document.createElement('div');
      header.className = 'ref-section-header';
      header.innerHTML = `<h3>${section.title}</h3><span class="ref-toggle">▼</span>`;
      header.onclick = () => {
        header.classList.toggle('open');
        body.classList.toggle('open');
      };

      const body = document.createElement('div');
      body.className = 'ref-section-body' + (si === 0 ? ' open' : '');
      if (si === 0) header.classList.add('open');

      const table = document.createElement('table');
      table.className = 'ref-table';
      table.innerHTML = `<thead><tr><th>Formula / Concept</th><th>Value / Details</th><th>Notes</th></tr></thead>`;

      const tbody = document.createElement('tbody');
      section.rows.forEach(([name, val, note]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="ref-formula">${name}</td>
          <td>${val}</td>
          <td style="color:var(--text-muted);font-size:0.83rem">${note || ''}</td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      body.appendChild(table);
      div.appendChild(header);
      div.appendChild(body);
      container.appendChild(div);
    });
  }

  /* ----- CONFETTI ----- */
  function launchConfetti() {
    const canvas = $('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#CC0000', '#ffd700', '#003366', '#28a745', '#fd7e14', '#fff'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: 2 + Math.random() * 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 6,
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
      });
    }

    let frame = 0;
    const maxFrames = 180;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
        if (p.shape === 'rect') {
          ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.rotation += p.rotationSpeed;
      });

      frame++;
      if (frame < maxFrames) {
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    draw();
  }

  /* ----- KEYBOARD NAVIGATION ----- */
  document.addEventListener('keydown', e => {
    const screen = document.querySelector('.screen.active');
    if (!screen) return;
    const id = screen.id;

    if (id === 'screen-quiz') {
      if (!state.answered) {
        const keys = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        if (keys[e.key] !== undefined) selectAnswer(keys[e.key]);
      } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        nextQuestion();
      }
    }

    if (id === 'screen-flashcards') {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === ' ') { e.preventDefault(); flipCard(); }
      if (e.key === 'y' || e.key === 'k') markCard(true);
      if (e.key === 'n' || e.key === 'j') markCard(false);
    }
  });

  /* ----- INIT ----- */
  function init() {
    updateGlobalStats();
  }

  init();

  /* ----- PUBLIC API ----- */
  return {
    state,
    goHome,
    goBack,
    selectSubject,
    showSubjectScreen,
    setMode,
    startQuiz,
    nextQuestion,
    exitQuiz,
    startFlashcards,
    flipCard,
    nextCard,
    prevCard,
    markCard,
  };
})();
