/* ===========================
   ДАННЫЕ АДВЕНТА
   =========================== */

const adventData = {
  "2025-12-15": {
    dateLabel: "15.12.2025",
    question: "Какое транспортное средство использует Гринч для кражи подарков?",
    answers: ["сани"],
    giftUrl: "https://drive.google.com/file/d/15Ws-FihOM6pe0pejVdbqxKuJ5cLJqkfN/view?usp=sharing"
  },
  "2025-12-16": {
    dateLabel: "16.12.2025",
    question: "В какой стране на Новый год принято есть 12 виноградин под бой курантов, загадывая желание на каждый месяц?",
    answers: ["испания"],
    giftUrl: "https://drive.google.com/file/d/1Gq0gTz6OIIeFxqNUfeRG_0HQ3DkDCYwQ/view?usp=sharing"
  },
  "2025-12-17": {
    dateLabel: "17.12.2025",
    question: "Как зовут героя диснеевского мультика, кому принадлежат слова \"Ой, смотрите, я - шашлычок!\" ?",
    answers: ["олаф"],
    giftUrl: "https://open.spotify.com/playlist/3laBYMG32oGIpMmKNoFUDs"
  },
  "2025-12-18": {
    dateLabel: "18.12.2025",
    question: "В какой стране на Новый год (Новый год по лунному календарю) нельзя подметать пол, чтобы не вымести удачу?",
    answers: ["китай"],
    giftUrl: "https://drive.google.com/file/d/1YsunO894S2STDpmq020xCcDOu-388mMP/view?usp=sharing" 
  },
  "2025-12-19": {
    dateLabel: "19.12.2025",
    question: "Что в Исландии дети кладут на подоконник в рождественскую ночь, чтобы туда попали подарки от 13-ти местных Дедов Морозов?",
    answers: ["ботинок"],
    giftUrl: "https://www.youtube.com/watch?v=1Xn5p6fVzWI&list=RD1Xn5p6fVzWI&start_radio=1"
  },
  "2025-12-20": {
    dateLabel: "20.12.2025",
    question: "Кто из персонажей «Гарри Поттера» подарил Гарри на Рождество Мантию-невидимку?",
    answers: ["дамблдор"],
    giftUrl: "https://open.spotify.com/playlist/7bNg2XDsAQQ9fVv37lV9TA"
  },
  "2025-12-21": {
    dateLabel: "21.12.2025",
    question: "В какой стране на Рождество принято ставить на стол жареного... карпа?",
    answers: ["чехия"],
    giftUrl: "https://drive.google.com/file/d/1cGEqLKXtkD6i3eiJXWARiX0jRw77jsWa/view?usp=sharing"
  },
  "2025-12-22": {
    dateLabel: "22.12.2025",
    question: "Какой персонаж из «Властелина Колец» стал рождественским символом для фанатов ?",
    answers: ["гендальф"],
    giftUrl: "https://evgen1910.github.io/dima-workday-game/"
  },
  "2025-12-23": {
    dateLabel: "23.12.2025",
    question: "В какой европейской стране на Рождество принято прятать метлу — чтобы ведьмы не унесли её для своих полётов?",
    answers: ["норвегия"],
    giftUrl: "https://drive.google.com/file/d/1Xb02kf_3HeF7vxIFlRBh5FQmsPp7cdIl/view?usp=sharing"
  },
  "2025-12-24": {
    dateLabel: "24.12.2025",
    question: "Самый новогодний фильм с Брюссом Уиллисом: (в 2 слова)?",
    answers: ["крепкий орешек"],
    giftUrl: "https://drive.google.com/file/d/1FYMrOj9v5IgLeGXE1dEPpVNIkOhx_pdu/view?usp=sharing"
  },
  "2025-12-25": {
    dateLabel: "25.12.2025",
    question: "В какой стране главный зимний персонаж — козёл, а не Дед Мороз?",
    answers: ["финляндия"],
    giftUrl: "https://open.spotify.com/playlist/6ESOAs0TbqHaCpePLDnMTU"
  },
  "2025-12-26": {
    dateLabel: "26.12.2025",
    question: "В какой стране в новогоднюю ночь принято выбрасывать из окон старую мебель и ненужные вещи?",
    answers: ["италия"],
    giftUrl: "https://drive.google.com/file/d/1EnJEarD92D3esdQSyLXnCbisLlor28eq/view?usp=sharing"
  },
  "2025-12-27": {
    dateLabel: "27.12.2025",
    question: "Как зовут «злого» двойника Санты в австрийской и немецкой традициях, который наказывает непослушных детей?",
    answers: ["крампус"],
    giftUrl: "https://drive.google.com/file/d/19sBvPGZh1T0cX7gQtxe-yziUkk1z2SO9/view?usp=sharing"
  },
  "2025-12-28": {
    dateLabel: "28.12.2025",
    question: "В какой азиатской стране на Новый год принято отпускать живых карпов в реку, считая, что на них уплывают все беды?",
    answers: ["вьетнам"],
    giftUrl: "https://open.spotify.com/playlist/4IMcQvry1CFKrJwF2kgw3K"
  },
  "2025-12-29": {
    dateLabel: "29.12.2025",
    question: "Какой фрукт является обязательным подарком на китайский Новый год как пожелание богатства?",
    answers: ["мандарин"],
    giftUrl: "https://drive.google.com/file/d/1E1MhC06ub7Szh9vkmf3003xhjbRcs1Pa/view?usp=sharing"
  },
  "2025-12-30": {
    dateLabel: "30.12.2025",
    question: "Кого сыграл родной брат Маколея Калкина в фильме Один Дома?",
    answers: ["фуллер"],
    giftUrl: "https://open.spotify.com/playlist/6l6AKJhnRefQ1JlanzFf0R"
  },
  "2025-12-31": {
    dateLabel: "31.12.2025",
    question: "Кем был Мистер Хэнки из первого рождественского эпизода Южного парка?",
    answers: ["какашка"],
    giftUrl: "https://drive.google.com/file/d/1bygZpTNiGqbyCHQQewskRVoCdu69pcNM/view?usp=sharing"
  },
  "2026-01-01": {
    dateLabel: "01.01.2026",
    question: "Имя женщины, которая постоянно называет тебя жуком, потому что ты ЖУК",
    answers: ["Евгения"],
    giftUrl: "https://t.me/+KGirTgebLtQ5OGEy"
  }
};

/* равномерно по экрану */
const ornamentLayout = [
  { key:"2025-12-15", x: 10, y: 18 },
  { key:"2025-12-16", x: 22, y: 42 },
  { key:"2025-12-17", x: 36, y: 16 },
  { key:"2025-12-18", x: 46, y: 40 },
  { key:"2025-12-19", x: 62, y: 18 },
  { key:"2025-12-20", x: 74, y: 42 },
  { key:"2025-12-21", x: 88, y: 20 },

  { key:"2025-12-22", x: 92, y: 62 },
  { key:"2025-12-23", x: 82, y: 74 },
  { key:"2025-12-24", x: 66, y: 84 },
  { key:"2025-12-25", x: 50, y: 72 },
  { key:"2025-12-26", x: 36, y: 86 },
  { key:"2025-12-27", x: 18, y: 74 },
  { key:"2025-12-28", x: 8,  y: 58 },

  { key:"2025-12-29", x: 50, y: 10 },
  { key:"2025-12-30", x: 30, y: 58 },
  { key:"2025-12-31", x: 58, y: 56 },
  { key:"2026-01-01", x: 70, y: 12 }
];

/* ===========================
   ХЕЛПЕРЫ
   =========================== */

const STORAGE_KEY = "advent2025_opened_v2";

function loadOpened() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveOpened(map) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

function normalizeText(s) {
  return (s ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/* принимает: 8 цифр DDMMYYYY / DD.MM.YYYY / YYYY-MM-DD */
function parseUserDate(input) {
  const v = (input || "").trim();

  const digits = v.replace(/\D/g, "");
  if (digits.length === 8) {
    const dd = digits.slice(0,2);
    const mm = digits.slice(2,4);
    const yyyy = digits.slice(4,8);
    return `${yyyy}-${mm}-${dd}`;
  }

  const iso = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;

  const ru = v.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (ru) return `${ru[3]}-${ru[2]}-${ru[1]}`;

  return null;
}

function formatDateLabel(iso) {
  const d = adventData[iso]?.dateLabel;
  if (d) return d;
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? `${m[3]}.${m[2]}.${m[1]}` : iso;
}

function ballColorClass(idx){
  const palette = ["ball--red","ball--gold","ball--blue","ball--green","ball--pink","ball--violet"];
  return palette[idx % palette.length];
}

/* маска ввода: 15122025 -> 15.12.2025 */
function maskDateInput(el){
  el.addEventListener("input", () => {
    const digits = el.value.replace(/\D/g, "").slice(0, 8);
    let out = digits;
    if (digits.length > 2) out = digits.slice(0,2) + "." + digits.slice(2);
    if (digits.length > 4) out = digits.slice(0,2) + "." + digits.slice(2,4) + "." + digits.slice(4);
    el.value = out;
  });
}

/* ===========================
   DOM
   =========================== */

const ornamentsEl = document.querySelector(".ornaments");

// modal
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBadge = document.getElementById("modalBadge");

const stepDate = document.getElementById("stepDate");
const stepQuestion = document.getElementById("stepQuestion");
const stepGift = document.getElementById("stepGift");

const dateInput = document.getElementById("dateInput");
const btnCheckDate = document.getElementById("btnCheckDate");
const btnCancel = document.getElementById("btnCancel");
const dateNote = document.getElementById("dateNote");

const letterDate = document.getElementById("letterDate");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const btnCheckAnswer = document.getElementById("btnCheckAnswer");
const btnBack = document.getElementById("btnBack");
const answerNote = document.getElementById("answerNote");

const giftActions = document.getElementById("giftActions");
const btnCloseAfterGift = document.getElementById("btnCloseAfterGift");

// how modal
const howOverlay = document.getElementById("howOverlay");
const btnHow = document.getElementById("btnHow");
const howClose = document.getElementById("howClose");
const howOk = document.getElementById("howOk");

// reset
const btnReset = document.getElementById("btnReset");

let openedMap = loadOpened();
let activeKey = null;

/* ===========================
   РЕНДЕР ШАРОВ
   =========================== */

function createOrnaments() {
  ornamentsEl.innerHTML = "";

  ornamentLayout.forEach((item, idx) => {
    const data = adventData[item.key];
    if (!data) return;

    const wrap = document.createElement("button");
    wrap.className = "ornament";
    wrap.type = "button";
    wrap.style.left = `${item.x}%`;
    wrap.style.top = `${item.y}%`;
    wrap.style.transform = `translate(-50%, -50%)`;
    wrap.setAttribute("aria-label", `Шарик ${data.dateLabel}`);

    const ball = document.createElement("div");
    ball.className = "ball " + ballColorClass(idx);

    if (openedMap[item.key]) {
      ball.classList.add("ball--opened");
    }

    const label = document.createElement("div");
    label.className = "ballLabel";
    label.textContent = data.dateLabel;

    wrap.appendChild(ball);
    wrap.appendChild(label);

    wrap.addEventListener("click", () => openForDate(item.key));

    ornamentsEl.appendChild(wrap);
  });
}

/* ===========================
   МОДАЛКА
   =========================== */

function openModal() {
  modalOverlay.classList.add("isOpen");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("isOpen");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeKey = null;

  setStep("date");
  dateInput.value = "";
  answerInput.value = "";
  dateNote.textContent = "";
  answerNote.textContent = "";
  giftActions.innerHTML = "";
}

function setStep(step) {
  stepDate.classList.add("hidden");
  stepQuestion.classList.add("hidden");
  stepGift.classList.add("hidden");

  if (step === "date") stepDate.classList.remove("hidden");
  if (step === "question") stepQuestion.classList.remove("hidden");
  if (step === "gift") stepGift.classList.remove("hidden");
}

function openForDate(key) {
  activeKey = key;
  const data = adventData[key];

  modalBadge.textContent = "Шарик";
  modalTitle.textContent = `Дата: ${data.dateLabel}`;
  modalSubtitle.textContent = openedMap[key]
    ? "Этот шарик уже открывали — но ты можешь пройти вопрос ещё раз."
    : "Проверим, что ты открываешь его в правильный день.";

  dateNote.textContent = "";
  answerNote.textContent = "";
  setStep("date");
  openModal();
  setTimeout(() => dateInput.focus(), 60);
}

/* ===========================
   ПРОВЕРКА ДАТЫ
   =========================== */

function checkDate() {
  if (!activeKey) return;
  const userIso = parseUserDate(dateInput.value);

  if (!userIso) {
    dateNote.textContent = "Не распознала дату. Можно 8 цифр: 15122025";
    dateNote.style.color = "rgba(255,255,255,0.78)";
    return;
  }

  if (userIso !== activeKey) {
    dateNote.textContent = `Этот шарик ждёт: ${formatDateLabel(activeKey)} ❄️`;
    dateNote.style.color = "rgba(255,170,170,0.95)";
    return;
  }

  const data = adventData[activeKey];
  modalBadge.textContent = "Письмо";
  modalTitle.textContent = `Шарик ${data.dateLabel}`;
  modalSubtitle.textContent = "Открываем письмо…";

  letterDate.textContent = data.dateLabel;
  questionText.textContent = data.question;

  answerInput.value = "";
  answerNote.textContent = "";
  setStep("question");
  setTimeout(() => answerInput.focus(), 60);
}

/* ===========================
   ПРОВЕРКА ОТВЕТА + ПОДАРОК
   =========================== */

function checkAnswer() {
  if (!activeKey) return;
  const data = adventData[activeKey];

  const user = normalizeText(answerInput.value);
  if (!user) {
    answerNote.textContent = "Нужно написать ответ 🙂";
    answerNote.style.color = "rgba(255,255,255,0.80)";
    return;
  }

  const ok = (data.answers || []).map(normalizeText).includes(user);

  if (!ok) {
    answerNote.textContent = "Почти! Попробуй ещё раз ✨";
    answerNote.style.color = "rgba(255,170,170,0.95)";
    return;
  }

  openedMap[activeKey] = true;
  saveOpened(openedMap);
  createOrnaments();

  showGift(data);
}

function showGift(data) {
  modalBadge.textContent = "Подарок";
  modalTitle.textContent = `Открыто: ${data.dateLabel}`;
  modalSubtitle.textContent = "Сюрприз внутри 🎁";

  giftActions.innerHTML = "";

  const a = document.createElement("a");
  a.className = "linkBtn";
  a.href = data.giftUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Открыть подарок";
  giftActions.appendChild(a);

  setStep("gift");
}

/* ===========================
   СЛУШАТЕЛИ
   =========================== */

btnCheckDate.addEventListener("click", checkDate);
btnCancel.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

btnBack.addEventListener("click", () => setStep("date"));
btnCheckAnswer.addEventListener("click", checkAnswer);
btnCloseAfterGift.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (modalOverlay.classList.contains("isOpen")) closeModal();
    if (howOverlay.classList.contains("isOpen")) closeHow();
  }
  if (e.key === "Enter" && modalOverlay.classList.contains("isOpen")) {
    if (!stepDate.classList.contains("hidden")) checkDate();
    else if (!stepQuestion.classList.contains("hidden")) checkAnswer();
  }
});

// how modal
function openHow() {
  howOverlay.classList.add("isOpen");
  howOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeHow() {
  howOverlay.classList.remove("isOpen");
  howOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
btnHow.addEventListener("click", openHow);
howClose.addEventListener("click", closeHow);
howOk.addEventListener("click", closeHow);
howOverlay.addEventListener("click", (e) => {
  if (e.target === howOverlay) closeHow();
});

// reset
btnReset.addEventListener("click", () => {
  openedMap = {};
  saveOpened(openedMap);
  createOrnaments();
  alert("Прогресс сброшен. Все шарики снова «закрыты» ❄️");
});

/* init */
maskDateInput(dateInput);
createOrnaments();



