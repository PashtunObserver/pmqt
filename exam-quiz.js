/* Online Exam Quiz - Host this file on GitHub (via GitHub Pages or jsDelivr) */
(function(){
  "use strict";

  // ---------------------------------------------------------
  // Subjects configuration
  // ---------------------------------------------------------
  const subjectsData = {
    "Biology": {
      color: "#16a085",
      icon: "🧬",
      questions: [
        {"Q.No":"1","Question":"What is biodiversity?","Option A":"Variety of life on Earth","Option B":"Only plants diversity","Option C":"Only animal diversity","Option D":"Only microbial diversity","Correct Option":"A","Explanation":"Biodiversity refers to the variety of all life forms on Earth, including plants, animals, fungi, and microorganisms."},
        {"Q.No":"2","Question":"Which organelle is known as the powerhouse of the cell?","Option A":"Nucleus","Option B":"Mitochondria","Option C":"Ribosome","Option D":"Golgi apparatus","Correct Option":"B","Explanation":"Mitochondria generate most of the cell's supply of ATP, used as a source of chemical energy."},
        {"Q.No":"3","Question":"What gas do plants absorb from the atmosphere for photosynthesis?","Option A":"Oxygen","Option B":"Nitrogen","Option C":"Carbon Dioxide","Option D":"Hydrogen","Correct Option":"C","Explanation":"Plants absorb carbon dioxide and use it along with sunlight and water to produce glucose and oxygen."}
      ]
    },
    "Chemistry": {
      color: "#8e44ad",
      icon: "⚗️",
      questions: [
        {"Q.No":"1","Question":"What is the chemical symbol for Gold?","Option A":"Gd","Option B":"Go","Option C":"Au","Option D":"Ag","Correct Option":"C","Explanation":"Gold's chemical symbol 'Au' comes from its Latin name 'Aurum'."},
        {"Q.No":"2","Question":"What is the pH of a neutral solution?","Option A":"0","Option B":"7","Option C":"14","Option D":"1","Correct Option":"B","Explanation":"A pH of 7 is considered neutral, neither acidic nor basic."}
      ]
    },
    "Physics": {
      color: "#2980b9",
      icon: "⚛️",
      questions: [
        {"Q.No":"1","Question":"What is the SI unit of Force?","Option A":"Joule","Option B":"Watt","Option C":"Newton","Option D":"Pascal","Correct Option":"C","Explanation":"The Newton (N) is the SI unit of force, defined as the force needed to accelerate 1 kg at 1 m/s²."},
        {"Q.No":"2","Question":"Who proposed the theory of relativity?","Option A":"Isaac Newton","Option B":"Albert Einstein","Option C":"Niels Bohr","Option D":"Galileo Galilei","Correct Option":"B","Explanation":"Albert Einstein proposed the theory of relativity in the early 20th century."}
      ]
    },
    "Mathematics": {
      color: "#d35400",
      icon: "📐",
      questions: [
        {"Q.No":"1","Question":"What is the value of π (Pi) approximately?","Option A":"3.14","Option B":"2.71","Option C":"1.61","Option D":"4.13","Correct Option":"A","Explanation":"Pi (π) is approximately equal to 3.14159, representing the ratio of a circle's circumference to its diameter."},
        {"Q.No":"2","Question":"What is the square root of 144?","Option A":"10","Option B":"11","Option C":"12","Option D":"14","Correct Option":"C","Explanation":"12 × 12 = 144, so the square root of 144 is 12."}
      ]
    },
    "English": {
      color: "#c0392b",
      icon: "📖",
      questions: [
        {"Q.No":"1","Question":"Which word is a synonym for 'Happy'?","Option A":"Sad","Option B":"Joyful","Option C":"Angry","Option D":"Tired","Correct Option":"B","Explanation":"'Joyful' means feeling, expressing, or causing great pleasure and happiness."},
        {"Q.No":"2","Question":"Identify the noun in: 'The cat sat on the mat.'","Option A":"sat","Option B":"on","Option C":"cat","Option D":"the","Correct Option":"C","Explanation":"'Cat' and 'mat' are nouns; 'cat' is the subject noun performing the action."}
      ]
    },
    "Computer Science": {
      color: "#2c3e50",
      icon: "💻",
      questions: [
        {"Q.No":"1","Question":"What does 'CPU' stand for?","Option A":"Central Processing Unit","Option B":"Computer Personal Unit","Option C":"Central Processor Utility","Option D":"Control Processing Unit","Correct Option":"A","Explanation":"CPU stands for Central Processing Unit, the primary component that executes instructions."},
        {"Q.No":"2","Question":"Which language is primarily used for styling web pages?","Option A":"HTML","Option B":"CSS","Option C":"JavaScript","Option D":"Python","Correct Option":"B","Explanation":"CSS (Cascading Style Sheets) is used to control the visual presentation of web pages."}
      ]
    },
    "History": {
      color: "#a0522d",
      icon: "🏛️",
      questions: [
        {"Q.No":"1","Question":"In which year did World War II end?","Option A":"1943","Option B":"1945","Option C":"1947","Option D":"1950","Correct Option":"B","Explanation":"World War II ended in 1945 with the surrender of Japan in September."},
        {"Q.No":"2","Question":"Who was the first President of the United States?","Option A":"Thomas Jefferson","Option B":"Abraham Lincoln","Option C":"George Washington","Option D":"John Adams","Correct Option":"C","Explanation":"George Washington served as the first President of the United States from 1789 to 1797."}
      ]
    },
    "Geography": {
      color: "#27ae60",
      icon: "🌍",
      questions: [
        {"Q.No":"1","Question":"Which is the largest continent by area?","Option A":"Africa","Option B":"Asia","Option C":"Europe","Option D":"Antarctica","Correct Option":"B","Explanation":"Asia is the largest continent, covering about 30% of Earth's total land area."},
        {"Q.No":"2","Question":"Which river is the longest in the world?","Option A":"Amazon","Option B":"Yangtze","Option C":"Nile","Option D":"Mississippi","Correct Option":"C","Explanation":"The Nile River, flowing through northeastern Africa, is generally considered the longest river in the world."}
      ]
    }
  };

  // ---------------------------------------------------------
  // State
  // ---------------------------------------------------------
  let currentSubject = null;
  let currentColor = null;
  let currentQuestions = [];
  let userAnswers = [];
  let answeredQuestions = [];
  let timerInterval = null;
  let timeLeft = 0;
  let totalTime = 0;

  let subjectScreen, quizScreen, resultScreen, subjectGrid, questionsContainer;

  const checkSvg = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 12L9 17L20 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const crossSvg = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M18 6L6 18M6 6L18 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>';
  const chevronUpSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  const chevronDownSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  // ---------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------
  function hexToRgba(hex, alpha){
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function formatTime(seconds){
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }

  function getElements(){
    subjectScreen = document.getElementById('subjectScreen');
    quizScreen = document.getElementById('quizScreen');
    resultScreen = document.getElementById('resultScreen');
    subjectGrid = document.getElementById('subjectGrid');
    questionsContainer = document.getElementById('questionsContainer');
  }

  // ---------------------------------------------------------
  // Render subject cards
  // ---------------------------------------------------------
  function renderSubjects(){
    if (!subjectGrid) return;
    subjectGrid.innerHTML = '';
    Object.keys(subjectsData).forEach(function(name){
      const subj = subjectsData[name];
      const color = subj.color;
      const count = subj.questions.length;

      const card = document.createElement('div');
      card.style.cssText =
        "position:relative;display:flex;flex-direction:column;justify-content:space-between;" +
        "border-radius:14px;padding:20px;min-height:150px;overflow:hidden;" +
        "background:linear-gradient(135deg, " + hexToRgba(color, 0.18) + ", " + hexToRgba(color, 0.04) + ");" +
        "border:1px solid " + hexToRgba(color, 0.35) + ";" +
        "transition:var(--trans-2);box-sizing:border-box;";

      card.onmouseover = function(){
        card.style.transform = 'translateY(-3px)';
        card.style.boxShadow = '0 10px 20px -8px ' + hexToRgba(color, 0.45);
      };
      card.onmouseout = function(){
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      };

      card.innerHTML =
        '<div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin:0 0 10px 0;">' +
            '<span style="font-size:30px;line-height:1;">' + subj.icon + '</span>' +
            '<span style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;background:' + color + ';color:#fff;white-space:nowrap;">' + count + ' MCQs</span>' +
          '</div>' +
          '<div style="font-size:17px;font-weight:700;margin:0 0 4px 0;">' + name + '</div>' +
          '<div style="font-size:12px;opacity:.7;">Test your knowledge in ' + name + '</div>' +
        '</div>' +
        '<button class="startBtn" style="margin-top:16px;width:100%;border:0;outline:0;cursor:pointer;padding:11px 14px;border-radius:var(--linkR);font-size:14px;font-weight:600;font-family:var(--fontB);color:#fff;background:' + color + ';transition:var(--trans-2);">Start Test</button>';

      const startBtn = card.querySelector('.startBtn');
      startBtn.onmouseover = function(){ startBtn.style.opacity = '.88'; };
      startBtn.onmouseout = function(){ startBtn.style.opacity = '1'; };
      startBtn.addEventListener('click', function(e){
        e.stopPropagation();
        startQuiz(name);
      });

      card.addEventListener('click', function(){ startQuiz(name); });
      subjectGrid.appendChild(card);
    });
  }

  // ---------------------------------------------------------
  // Start quiz
  // ---------------------------------------------------------
  function startQuiz(subjectName){
    currentSubject = subjectName;
    currentColor = subjectsData[subjectName].color;
    currentQuestions = subjectsData[subjectName].questions;
    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredQuestions = new Array(currentQuestions.length).fill(false);

    document.getElementById('quizSubjectTitle').textContent = subjectName;
    document.getElementById('progressBar').style.background = currentColor;
    document.getElementById('submitBtn').style.background = currentColor;

    subjectScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';

    totalTime = currentQuestions.length * 45;
    timeLeft = totalTime;
    createStickyTimer();
    startTimer();

    renderAllQuestions();
  }

  // ---------------------------------------------------------
  // Sticky Timer
  // ---------------------------------------------------------
  function createStickyTimer(){
    let timerEl = document.getElementById('stickyTimer');
    if (!timerEl){
      timerEl = document.createElement('div');
      timerEl.id = 'stickyTimer';
      timerEl.style.cssText =
        'position:sticky;top:0;z-index:100;background:var(--contentB);' +
        'border-bottom:1px solid var(--contentL);padding:10px 14px;margin:0 0 16px 0;' +
        'display:flex;align-items:center;justify-content:space-between;gap:12px;';
      timerEl.innerHTML =
        '<div style="display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;font-family:var(--fontB);">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
          '<span id="timerDisplay">00:00</span>' +
        '</div>' +
        '<div style="flex:1;height:8px;background:var(--contentBs);border-radius:10px;overflow:hidden;">' +
          '<div id="timerProgress" style="height:100%;width:100%;background:' + currentColor + ';border-radius:10px;transition:width 1s linear;"></div>' +
        '</div>';
      quizScreen.insertBefore(timerEl, quizScreen.children[1]);
    } else {
      timerEl.style.display = 'flex';
      timerEl.querySelector('#timerProgress').style.background = currentColor;
    }
    document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
    document.getElementById('timerProgress').style.width = '100%';
  }

  function startTimer(){
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(function(){
      timeLeft--;
      document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
      const pct = (timeLeft / totalTime) * 100;
      document.getElementById('timerProgress').style.width = pct + '%';

      if (timeLeft <= 0){
        clearInterval(timerInterval);
        showResults();
      }
    }, 1000);
  }

  function stopTimer(){
    if (timerInterval){
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // ---------------------------------------------------------
  // Render all questions
  // ---------------------------------------------------------
  function renderAllQuestions(){
    if (!questionsContainer) return;
    questionsContainer.innerHTML = '';
    const optionKeys = ['Option A', 'Option B', 'Option C', 'Option D'];
    const letters = ['A','B','C','D'];

    currentQuestions.forEach(function(q, qIdx){
      const qCard = document.createElement('div');
      qCard.style.cssText = "background:var(--contentB);border:1px solid var(--contentL);border-radius:12px;padding:10px;width:100%;box-sizing:border-box;";

      let html = '<div style="font-size:16px;line-height:1.6em;font-weight:600;margin:0 0 14px 0;">' + (qIdx + 1) + '. ' + q['Question'] + '</div>';
      html += '<div style="display:flex;flex-direction:column;gap:10px;width:100%;" id="options-' + qIdx + '">';

      optionKeys.forEach(function(key, idx){
        const letter = letters[idx];
        html += '<div class="opt-' + qIdx + '-' + letter + '" data-letter="' + letter + '" data-qidx="' + qIdx + '" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border:1px solid var(--contentL);border-radius:var(--linkR);cursor:pointer;transition:var(--trans-2);background:#fdfcff;">' +
          '<span class="badge-' + qIdx + '-' + letter + '" style="flex-shrink:0;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;border:1px solid var(--contentL);font-size:12px;font-weight:600;">' + letter + '</span>' +
          '<span style="font-size:14px;line-height:1.5em;">' + q[key] + '</span>' +
        '</div>';
      });

      html += '</div>';

      html += '<div style="margin:12px 0 0 0;">' +
        '<button class="expToggle-' + qIdx + '" style="cursor:pointer;font-size:13px;padding:8px 14px;margin:0;display:inline-flex;align-items:center;gap:8px;border:1px solid var(--contentL);border-radius:var(--linkR);background:var(--contentBs);font-family:var(--fontB);color:var(--bodyC);">' +
          '<span class="expIcon-' + qIdx + '">' + chevronDownSvg + '</span>' +
          '<span class="expText-' + qIdx + '">Show Explanation</span>' +
        '</button>' +
        '<div class="expBox-' + qIdx + '" style="display:none;margin-top:10px;font-size:13px;line-height:1.6em;padding:12px 14px;background:var(--contentBs);border-radius:var(--linkR);border:1px solid var(--contentL);">' + q['Explanation'] + '</div>' +
      '</div>';

      qCard.innerHTML = html;
      questionsContainer.appendChild(qCard);

      optionKeys.forEach(function(key, idx){
        const letter = letters[idx];
        const optEl = qCard.querySelector('.opt-' + qIdx + '-' + letter);
        optEl.addEventListener('click', function(){
          if (answeredQuestions[qIdx]) return;
          handleOptionClick(qIdx, letter);
        });
      });

      const expToggle = qCard.querySelector('.expToggle-' + qIdx);
      const expBox = qCard.querySelector('.expBox-' + qIdx);
      const expIcon = qCard.querySelector('.expIcon-' + qIdx);
      const expText = qCard.querySelector('.expText-' + qIdx);
      expToggle.addEventListener('click', function(){
        const isHidden = expBox.style.display === 'none';
        expBox.style.display = isHidden ? 'block' : 'none';
        expIcon.innerHTML = isHidden ? chevronUpSvg : chevronDownSvg;
        expText.textContent = isHidden ? 'Hide Explanation' : 'Show Explanation';
      });
    });

    updateProgress();
  }

  // ---------------------------------------------------------
  // Handle option click
  // ---------------------------------------------------------
  function handleOptionClick(qIdx, selectedLetter){
    answeredQuestions[qIdx] = true;
    userAnswers[qIdx] = selectedLetter;
    const correctLetter = currentQuestions[qIdx]['Correct Option'];
    const letters = ['A','B','C','D'];

    letters.forEach(function(letter){
      const optEl = document.querySelector('.opt-' + qIdx + '-' + letter);
      const badgeEl = document.querySelector('.badge-' + qIdx + '-' + letter);
      if (!optEl || !badgeEl) return;

      optEl.style.cursor = 'default';

      if (letter === correctLetter){
        optEl.style.borderColor = '#16a085';
        optEl.style.background = 'rgba(22,160,133,0.1)';
        badgeEl.style.borderColor = '#16a085';
        badgeEl.style.background = '#16a085';
        badgeEl.style.color = '#fff';
        badgeEl.innerHTML = checkSvg;
      } else if (letter === selectedLetter && letter !== correctLetter){
        optEl.style.borderColor = '#be2e3c';
        optEl.style.background = 'rgba(190,46,60,0.1)';
        badgeEl.style.borderColor = '#be2e3c';
        badgeEl.style.background = '#be2e3c';
        badgeEl.style.color = '#fff';
        badgeEl.innerHTML = crossSvg;
      } else {
        optEl.style.opacity = '0.6';
        optEl.style.cursor = 'not-allowed';
      }
    });

    updateProgress();
  }

  // ---------------------------------------------------------
  // Update progress bar
  // ---------------------------------------------------------
  function updateProgress(){
    const answered = answeredQuestions.filter(function(a){ return a; }).length;
    const pct = (answered / currentQuestions.length) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
  }

  // ---------------------------------------------------------
  // Navigation handlers
  // ---------------------------------------------------------
  function bindNavHandlers(){
    document.getElementById('backToSubjectsBtn').addEventListener('click', function(){
      stopTimer();
      quizScreen.style.display = 'none';
      resultScreen.style.display = 'none';
      subjectScreen.style.display = 'block';
    });

    document.getElementById('submitBtn').addEventListener('click', function(){
      stopTimer();
      showResults();
      setTimeout(function(){
        document.getElementById('resultScreen').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });

    document.getElementById('retryBtn').addEventListener('click', function(){
      startQuiz(currentSubject);
      setTimeout(function(){
        document.getElementById('quizScreen').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });

    document.getElementById('homeBtn').addEventListener('click', function(){
      resultScreen.style.display = 'none';
      subjectScreen.style.display = 'block';
    });
  }

  // ---------------------------------------------------------
  // Results
  // ---------------------------------------------------------
  function showResults(){
    stopTimer();

    let correct = 0, wrong = 0;
    currentQuestions.forEach(function(q, i){
      if (userAnswers[i] === q['Correct Option']) correct++;
      else wrong++;
    });

    const total = currentQuestions.length;
    const pct = Math.round((correct / total) * 100);

    document.getElementById('resultSubject').textContent = currentSubject;
    document.getElementById('resultTime').textContent = '';
    document.getElementById('scoreCorrect').textContent = correct;
    document.getElementById('scoreWrong').textContent = wrong;
    document.getElementById('scorePercent').textContent = pct + '%';
    document.getElementById('scorePercent').style.color = pct >= 50 ? '#127a5b' : '#be2e3c';

    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    const optionKeys = { A:'Option A', B:'Option B', C:'Option C', D:'Option D' };

    currentQuestions.forEach(function(q, i){
      const userAns = userAnswers[i];
      const correctAns = q['Correct Option'];
      const isCorrect = userAns === correctAns;

      const item = document.createElement('div');
      item.className = 'alert ' + (isCorrect ? 'success' : 'error');

      let html = '<strong>Q' + (i+1) + '. ' + q['Question'] + '</strong>';
      html += '<div style="margin-bottom:4px;">Your answer: ' + (userAns ? (userAns + '. ' + q[optionKeys[userAns]]) : 'Not answered') + '</div>';
      if (!isCorrect){
        html += '<div style="margin-bottom:4px;">Correct answer: ' + correctAns + '. ' + q[optionKeys[correctAns]] + '</div>';
      }
      html += '<div style="opacity:.85;font-size:13px;">' + q['Explanation'] + '</div>';

      item.innerHTML = html;
      reviewList.appendChild(item);
    });

    document.getElementById('progressBar').style.width = '100%';
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
  }

  // ---------------------------------------------------------
  // Init
  // ---------------------------------------------------------
  function init(){
    getElements();
    bindNavHandlers();
    renderSubjects();
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
