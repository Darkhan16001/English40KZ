
"use strict";

const $ = id => document.getElementById(id);

const SAVE_KEY = "english40_premium_v10";
const MODEL_KEY = "english40_qwen_v10";
const DAY_TIME = 24 * 60 * 60 * 1000;

/* =====================================
   40-DAY COURSE
===================================== */

const RAW_LESSONS = [
  ["Daily routines","Present Simple vs Continuous",
    "Present Simple — это время привычек и фактов. Present Continuous — время действий, которые происходят сейчас.",
    "I study English every day.",
    "Я изучаю английский каждый день.",
    "study"],

  ["College life","Present Continuous",
    "Present Continuous — это настоящее длительное время. Оно обозначает действие сейчас или в текущий период.",
    "I'm preparing for an exam.",
    "Я готовлюсь к экзамену.",
    "study"],

  ["Personality","Comparatives",
    "Comparatives — это сравнительная степень прилагательных. Она нужна, чтобы сравнивать людей и предметы.",
    "She is more patient than me.",
    "Она терпеливее меня.",
    "study"],

  ["Hobbies","Enjoy and would like",
    "После enjoy используем -ing. После would like используем to и начальную форму глагола.",
    "I enjoy playing the guitar.",
    "Мне нравится играть на гитаре.",
    "music"],

  ["Travel plans","Going to and will",
    "Going to — это намерение или план. Will часто используется для прогнозов и решений.",
    "I'm going to travel next year.",
    "В следующем году я собираюсь путешествовать.",
    "travel"],

  ["Food and culture","Much and many",
    "Many означает «много» с исчисляемыми предметами. Much — с неисчисляемыми.",
    "There are many traditional dishes.",
    "Есть много традиционных блюд.",
    "food"],

  ["Review week one","Present and future review",
    "Повторяем привычки, текущие действия, сравнения и будущие планы.",
    "I usually study, but now I'm resting.",
    "Обычно я занимаюсь, но сейчас отдыхаю.",
    "study"],

  ["Past experiences","Past Simple",
    "Past Simple — это простое прошедшее время для завершённых действий.",
    "I visited a museum yesterday.",
    "Вчера я посетил музей.",
    "travel"],

  ["Childhood","Used to",
    "Used to обозначает привычку, которая существовала раньше.",
    "I used to play basketball.",
    "Раньше я играл в баскетбол.",
    "music"],

  ["Travel stories","Past Continuous",
    "Past Continuous — длительное действие в определённый момент прошлого.",
    "I was reading on the train.",
    "Я читал в поезде.",
    "travel"],

  ["Unexpected events","Past Simple vs Continuous",
    "Past Continuous описывает длительное действие, Past Simple — событие на его фоне.",
    "I was walking when it rained.",
    "Я шёл, когда начался дождь.",
    "travel"],

  ["Future ambitions","Future forms",
    "Будущие формы помогают говорить о планах, намерениях и прогнозах.",
    "I'm going to learn Chinese.",
    "Я собираюсь учить китайский.",
    "study"],

  ["Predictions","Might and may",
    "Might и may обозначают возможность без полной уверенности.",
    "It might rain tomorrow.",
    "Возможно, завтра пойдёт дождь.",
    "tech"],

  ["Past review","Narrative tenses",
    "Narrative tenses — прошедшие времена, которые помогают рассказывать истории.",
    "I was studying when she called.",
    "Я занимался, когда она позвонила.",
    "study"],

  ["Achievements","Present Perfect",
    "Present Perfect связывает прошлое действие или опыт с настоящим.",
    "I have finished my project.",
    "Я закончил свой проект.",
    "study"],

  ["Life experiences","Ever and never",
    "Ever означает «когда-либо», never — «никогда».",
    "Have you ever travelled abroad?",
    "Ты когда-нибудь путешествовал за границу?",
    "travel"],

  ["Recent activities","Already, just and yet",
    "Already — уже; just — только что; yet — ещё или уже.",
    "I have just finished my homework.",
    "Я только что закончил домашнее задание.",
    "study"],

  ["Advice","Should and shouldn't",
    "Should означает «следует», shouldn't — «не следует». Это способы давать советы.",
    "You should practise every day.",
    "Тебе следует заниматься каждый день.",
    "study"],

  ["Responsibilities","Must and have to",
    "Must и have to обозначают обязанность или необходимость.",
    "I have to finish my work.",
    "Мне нужно закончить работу.",
    "tech"],

  ["Comparisons","More and less",
    "More означает «более», less — «менее». С ними можно сравнивать качества.",
    "Online lessons are more flexible.",
    "Онлайн-уроки более гибкие.",
    "tech"],

  ["Real conditions","First Conditional",
    "First Conditional — условное предложение о реальной возможности в будущем.",
    "If I study, I will pass.",
    "Если я буду учиться, я сдам.",
    "study"],

  ["Imaginary plans","Second Conditional",
    "Second Conditional — условное предложение о воображаемой ситуации.",
    "If I had time, I would travel.",
    "Если бы у меня было время, я бы путешествовал.",
    "travel"],

  ["Relative clauses","Who, which and that",
    "Relative clauses — придаточные предложения, уточняющие человека или предмет.",
    "This is a book that I like.",
    "Это книга, которая мне нравится.",
    "study"],

  ["Passive voice","Passive",
    "Passive — пассивный залог. Главное в предложении — действие, а не исполнитель.",
    "The website was created last year.",
    "Сайт был создан в прошлом году.",
    "tech"],

  ["Reported speech","Reported statements",
    "Reported speech — косвенная речь, то есть пересказ слов другого человека.",
    "She said she was busy.",
    "Она сказала, что занята.",
    "study"],

  ["Grammar revision","B1 grammar review",
    "Повторение условных предложений, пассивного залога и косвенной речи.",
    "If I had time, I would practise.",
    "Если бы у меня было время, я бы занимался.",
    "study"],

  ["Giving opinions","Opinion phrases",
    "Opinion phrases — выражения для объяснения своего мнения.",
    "In my opinion, English is useful.",
    "По моему мнению, английский полезен.",
    "tech"],

  ["Arguments","Agreeing and disagreeing",
    "Agreeing — согласие. Disagreeing — несогласие. Важно выражать их вежливо.",
    "I see your point, but I disagree.",
    "Я понимаю твою точку зрения, но не согласен.",
    "tech"],

  ["Problem solving","Could and suggestions",
    "Could помогает предлагать решения вежливо, без приказа.",
    "We could try another method.",
    "Мы могли бы попробовать другой способ.",
    "tech"],

  ["Storytelling","Linking words",
    "Linking words — слова-связки, которые помогают соединять события.",
    "First I studied, then I rested.",
    "Сначала я учился, потом отдыхал.",
    "study"],

  ["Discussions","Although and however",
    "Although означает «хотя», however — «однако». Они показывают противопоставление.",
    "Although it was hard, I finished.",
    "Хотя это было трудно, я закончил.",
    "study"],

  ["Possibilities","May, might and could",
    "May, might и could помогают говорить о том, что возможно.",
    "I might study abroad.",
    "Возможно, я буду учиться за границей.",
    "travel"],

  ["B1 discussion","Reasons and examples",
    "Ответ B1 становится убедительнее, когда включает мнение, причину и пример.",
    "I believe practice helps because it builds confidence.",
    "Я считаю, что практика помогает, потому что даёт уверенность.",
    "study"],

  ["Job interviews","Strengths and examples",
    "На собеседовании называй свои сильные стороны и приводи примеры.",
    "I am reliable and organised.",
    "Я надёжный и организованный.",
    "tech"],

  ["Presentations","Introducing topics",
    "Во вступлении презентации нужно назвать тему и кратко объяснить план.",
    "Today I'd like to talk about education.",
    "Сегодня я хотел бы поговорить об образовании.",
    "study"],

  ["Debates","Evidence and examples",
    "Evidence — доказательства и примеры, которые поддерживают твоё мнение.",
    "For example, practice improves fluency.",
    "Например, практика улучшает беглость речи.",
    "tech"],

  ["Long conversations","Follow-up questions",
    "Follow-up questions — уточняющие вопросы, помогающие продолжить разговор.",
    "Could you tell me more?",
    "Можешь рассказать подробнее?",
    "music"],

  ["Complex ideas","Concession and contrast",
    "Concession — уступка: признаём одну сторону аргумента, но показываем другую.",
    "Although it is difficult, it is useful.",
    "Хотя это трудно, это полезно.",
    "travel"],

  ["Independent learning","Self-assessment",
    "Self-assessment — самооценка. Она помогает замечать успехи и слабые стороны.",
    "I evaluate my progress every week.",
    "Я оцениваю свой прогресс каждую неделю.",
    "study"],

  ["Final B1 review","Integrated B1 skills",
    "Для уровня B1 важно связывать грамматику, аргументы, примеры и личный опыт.",
    "I've become more confident in English.",
    "Я стал увереннее в английском.",
    "study"]
];

const GRAMMAR_FORMULAS = [
  "Present Simple: I study / She studies. Present Continuous: I am studying.",
  "am/is/are + verb-ing",
  "adjective-er + than / more + adjective + than",
  "enjoy + verb-ing / would like + to + verb",
  "am/is/are going to + verb / will + verb",
  "many + plural noun / much + uncountable noun",
  "Present Simple / Continuous / going to",
  "verb-ed / irregular past form",
  "used to + base verb",
  "was/were + verb-ing",
  "was/were + -ing + when + Past Simple",
  "going to + verb / will + verb",
  "might/may + base verb",
  "Past Continuous + when + Past Simple",
  "have/has + V3",
  "Have + subject + ever + V3?",
  "have/has + just/already + V3",
  "should/shouldn't + base verb",
  "must + verb / have to + verb",
  "more/less + adjective",
  "If + Present Simple, will + verb",
  "If + Past Simple, would + verb",
  "person + who / thing + which/that",
  "be + past participle (V3)",
  "said (that) + clause",
  "If + Past Simple, would + verb",
  "In my opinion, ... / I believe ...",
  "I agree because ... / I disagree because ...",
  "could/might + verb",
  "first → then → finally",
  "Although + clause / However, + clause",
  "may/might/could + verb",
  "opinion → because → example",
  "I am + adjective / I have experience in ...",
  "Introduction → Main points → Conclusion",
  "opinion → example → conclusion",
  "What ...? / Why ...? / How ...?",
  "although + clause / despite + noun",
  "I evaluate ... / I need to improve ...",
  "experience + opinion + example"
];

const WORDS = `
routine|распорядок|ру-ТИН
occasionally|иногда|э-КЕЙ-жэн-э-ли
efficient|эффективный|и-ФИ-шэнт
assignment|задание|э-САЙН-мэнт
deadline|срок сдачи|ДЭД-лайн
revise|повторять|ри-ВАЙЗ
reliable|надёжный|ри-ЛАЙ-э-бэл
outgoing|общительный|АУТ-гоу-ин
confident|уверенный|КОН-фи-дэнт
hobby|увлечение|ХОБ-и
prefer|предпочитать|при-ФЁР
improve|улучшать|им-ПРУВ
destination|место назначения|дэс-ти-НЕЙ-шэн
arrangement|договорённость|э-РЕЙНДЖ-мэнт
journey|путешествие|ДЖЁР-ни
recommend|рекомендовать|рэ-кэ-МЕНД
ingredient|ингредиент|ин-ГРИ-ди-энт
traditional|традиционный|трэ-ДИ-шэ-нэл
progress|прогресс|ПРОГ-рэс
achieve|достигать|э-ЧИВ
confidence|уверенность|КОН-фи-дэнс
experience|опыт|икс-ПИ-ри-энс
memorable|незабываемый|МЕМ-э-рэ-бэл
explore|исследовать|икс-ПЛОР
childhood|детство|ЧАЙЛД-худ
habit|привычка|ХЭ-бит
familiar|знакомый|фэ-МИЛЬ-яр
landscape|пейзаж|ЛЭНД-скейп
suddenly|внезапно|САД-эн-ли
meanwhile|тем временем|МИН-вайл
unexpected|неожиданный|ан-икс-ПЕК-тид
event|событие|и-ВЕНТ
occur|происходить|э-КЁР
ambition|стремление|эм-БИ-шэн
opportunity|возможность|о-пэ-ТЬЮ-ни-ти
goal|цель|ГОУЛ
predict|предсказывать|при-ДИКТ
likely|вероятный|ЛАЙК-ли
possibly|возможно|ПОС-э-бли
narrative|повествование|НЭ-рэ-тив
describe|описывать|ди-СКРАЙБ
sequence|последовательность|СИ-квэнс
achievement|достижение|э-ЧИВ-мэнт
accomplish|выполнять|э-КОМ-плиш
recently|недавно|РИ-сэнт-ли
abroad|за границей|э-БРОД
previously|ранее|ПРИ-ви-эсли
ever|когда-либо|ЭВ-эр
already|уже|ол-РЭ-ди
yet|ещё|ЙЕТ
just|только что|ДЖАСТ
advice|совет|эд-ВАЙС
suggest|предлагать|сэ-ДЖЕСТ
avoid|избегать|э-ВОЙД
responsibility|обязанность|ри-спон-сэ-БИ-ли-ти
requirement|требование|ри-КВАЙЭР-мэнт
necessary|необходимый|НЕ-сэ-сэ-ри
comparison|сравнение|кэм-ПЭ-ри-сэн
convenient|удобный|кэн-ВИ-ни-энт
flexible|гибкий|ФЛЕК-сэ-бэл
condition|условие|кэн-ДИ-шэн
consequence|последствие|КОН-си-квэнс
unless|если не|ан-ЛЕС
imagine|представлять|и-МЭ-джин
hypothetical|гипотетический|хай-пэ-ТЕ-ти-кэл
would|бы|ВУД
relative|относительный|РЕЛ-э-тив
clause|придаточное|КЛОЗ
which|который|УИЧ
passive|пассивный|ПЭ-сив
process|процесс|ПРО-сэс
created|созданный|кри-ЭЙ-тид
reported|пересказанный|ри-ПОР-тид
statement|утверждение|СТЕЙТ-мэнт
mention|упоминать|МЕН-шэн
revision|повторение|ри-ВИ-жэн
knowledge|знания|НО-лидж
accurate|точный|ЭК-ью-рэт
opinion|мнение|э-ПИН-йэн
worthwhile|стоящий усилий|вёрс-УАЙЛ
consider|рассматривать|кэн-СИ-дэр
argument|аргумент|АР-гью-мэнт
perspective|точка зрения|пэр-СПЕК-тив
disagree|не соглашаться|дис-э-ГРИ
solution|решение|сэ-ЛЮ-шэн
challenge|сложная задача|ЧЭЛ-эндж
manage|справляться|МЭ-нидж
eventually|в конце концов|и-ВЕН-чу-э-ли
initially|первоначально|и-НИ-шэ-ли
succeed|добиться успеха|сэк-СИД
although|хотя|ол-ЗОУ
however|однако|хау-ЭВ-эр
despite|несмотря на|ди-СПАЙТ
possibility|возможность|по-сэ-БИ-ли-ти
might|может быть|МАЙТ
perhaps|возможно|пэр-ХЭПС
independent|самостоятельный|ин-ди-ПЕН-дэнт
evaluate|оценивать|и-ВЭ-лью-эйт
strategy|стратегия|СТРЭ-тэ-джи
strength|сильная сторона|СТРЭНГС
motivated|мотивированный|МО-ти-вей-тид
qualification|квалификация|кво-ли-фи-КЕЙ-шэн
presentation|презентация|прэ-зэн-ТЕЙ-шэн
introduce|представлять|ин-трэ-ДЬЮС
conclusion|вывод|кэн-КЛЮ-жэн
evidence|доказательство|Э-ви-дэнс
benefit|польза|БЕН-э-фит
drawback|недостаток|ДРО-бэк
conversation|разговор|кон-вэ-СЕЙ-шэн
follow-up|уточняющий|ФО-лоу-ап
involved|вовлечённый|ин-ВОЛВД
concession|уступка|кэн-СЕ-шэн
advantage|преимущество|эд-ВАН-тидж
disadvantage|недостаток|дис-эд-ВАН-тидж
self-assessment|самооценка|селф-э-СЕС-мэнт
monitor|отслеживать|МО-ни-тэр
adjust|корректировать|э-ДЖАСТ
fluency|беглость речи|ФЛУ-эн-си
communication|общение|кэ-мью-ни-КЕЙ-шэн
maintain|поддерживать|мейн-ТЕЙН
`.trim().split("\n").map(line => line.split("|"));

function lesson() {
  const row = RAW_LESSONS[state.day - 1];

  return {
    topic: row[0],
    grammar: row[1],
    definition: row[2],
    example: row[3],
    translation: row[4],
    scene: row[5],
    formula: GRAMMAR_FORMULAS[state.day - 1]
  };
}

function todayWords() {
  return WORDS.slice(
    (state.day - 1) * 3,
    state.day * 3
  );
}

/* =====================================
   25 CHANGING PHOTOS
===================================== */

const PHOTOS = [
  "photo-1434030216411-0b793f4b4173",
  "photo-1522202176988-66273c2fd55f",
  "photo-1456513080510-7bf3a84b82f8",
  "photo-1513258496099-48168024aec0",
  "photo-1497633762265-9d179a990aa6",
  "photo-1455390582262-044cdead277a",
  "photo-1523240795612-9a054b0db644",
  "photo-1503676260728-1c00da094a0b",
  "photo-1523580494863-6f3031224c94",
  "photo-1516321318423-f06f85e504b3",
  "photo-1499750310107-5fef28a66643",
  "photo-1515378791036-0648a3ef77b2",
  "photo-1532012197267-da84d127e765",
  "photo-1523050854058-8df90110c9f1",
  "photo-1486312338219-ce68d2c6f44d",
  "photo-1517048676732-d65bc937f952",
  "photo-1531482615713-2afd69097998",
  "photo-1524178232363-1fb2b075b655",
  "photo-1506784983877-45594efa4cbe",
  "photo-1488190211105-8b0e65b80b4e",
  "photo-1461749280684-dccba630e2f6",
  "photo-1500534314209-a25ddb2bd429",
  "photo-1547592180-85f173990554",
  "photo-1511379938547-c1f69419868d",
  "photo-1488646953014-85cb44e25828"
];

function photoURL(index) {
  const number =
    (index + (state.day - 1) * 7) % PHOTOS.length;

  return (
    "https://images.unsplash.com/" +
    PHOTOS[number] +
    "?w=750&h=420&fit=crop&q=65"
  );
}

/* =====================================
   STORAGE
===================================== */

function initialState() {
  return {
    day: 1,
    xp: 0,
    days: {},
    quizzes: {},
    chats: { en: [], ru: [] },
    voice: true,
    eco: false
  };
}

let state;

try {
  state = {
    ...initialState(),
    ...JSON.parse(localStorage.getItem(SAVE_KEY))
  };
} catch {
  state = initialState();
}

state.day = Math.max(
  1, Math.min(40, Number(state.day) || 1)
);

state.days ||= {};
state.quizzes ||= {};
state.chats ||= {en: [], ru: []};
state.chats.en ||= [];
state.chats.ru ||= [];

function save() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.warn("Save error:", error);
  }
}

function dayInfo() {
  state.days[state.day] ||= {
    started: 0,
    cards: 0,
    solved: {},
    finished: false
  };

  return state.days[state.day];
}

function startDay() {
  if (!dayInfo().started) {
    dayInfo().started = Date.now();
    save();
  }
}

function timeLeft() {
  return dayInfo().started
    ? Math.max(
        0,
        DAY_TIME - (Date.now() - dayInfo().started)
      )
    : DAY_TIME;
}

function formatTime(ms) {
  const s = Math.ceil(ms / 1000);

  return [
    Math.floor(s / 3600),
    Math.floor(s / 60) % 60,
    s % 60
  ].map(x => String(x).padStart(2, "0")).join(":");
}

function quizData(bonus) {
  const key =
    state.day + "_" + (bonus ? "bonus" : "main");

  state.quizzes[key] ||= {
    step: 0,
    score: 0,
    answer: null,
    finished: false
  };

  return state.quizzes[key];
}

/* =====================================
   NAVIGATION
===================================== */

let cardIndex = 0;
let bonusMode = false;
let helpContext = null;
let recording = null;

function go(page) {
  if (page !== "english") stopRecording();

  if (page !== "lesson") {
    $("videoFrame").replaceChildren();
  }

  document.querySelectorAll(".screen").forEach(el => {
    el.classList.toggle("active", el.id === page);
  });

  document.querySelectorAll("[data-page]").forEach(el => {
    el.classList.toggle(
      "selected",
      el.dataset.page === page
    );
  });

  if (page === "home") renderHome();
  if (page === "lesson") renderLesson();
  if (page === "english") renderChat("en");
  if (page === "russian") renderChat("ru");

  window.scrollTo(0, 0);
}

document.querySelectorAll("[data-page]").forEach(btn => {
  btn.onclick = () => go(btn.dataset.page);
});

/* =====================================
   HOME
===================================== */

function renderHome() {
  const finished = Object.values(state.days)
    .filter(d => d.finished).length;

  $("xp").textContent = `⭐ ${state.xp} XP`;
  $("today").textContent = state.day;
  $("cardsStat").textContent = `${dayInfo().cards}/25`;
  $("questionsStat").textContent =
    `${Math.min(15, quizData(false).step)}/15`;

  $("courseLevel").textContent =
    state.day <= 20
      ? "A2+ · Pre-Intermediate"
      : "B1 · Intermediate";

  $("courseBar").style.width =
    `${finished / 40 * 100}%`;

  $("courseInfo").textContent =
    `${finished} из 40 дней завершено`;

  const grid = $("days");
  grid.replaceChildren();

  for (let i = 1; i <= 40; i++) {
    const b = document.createElement("button");

    b.textContent = i;
    b.disabled = i !== state.day;

    if (state.days[i]?.finished) {
      b.classList.add("done");
    } else if (i === state.day) {
      b.classList.add("current");
    }

    b.onclick = () => {
      startDay();
      cardIndex = Math.min(24, dayInfo().cards);
      go("lesson");
    };

    grid.appendChild(b);
  }

  updateTimer();
}

function updateTimer() {
  $("timer").textContent = formatTime(timeLeft());

  const d = dayInfo();

  if (!d.started) {
    $("timerInfo").textContent =
      "Отсчёт начнётся с первого урока.";
  } else if (!d.finished) {
    $("timerInfo").textContent =
      "Сначала заверши 25 мини-игр и 15 заданий.";
  } else if (state.day === 40) {
    $("timerInfo").textContent =
      "🎓 Курс завершён!";
  } else if (timeLeft() > 0) {
    $("timerInfo").textContent =
      "День завершён. Следующий день пока закрыт.";
  } else {
    $("timerInfo").textContent =
      "✅ Следующий день открыт!";
  }

  $("nextDay").disabled = !(
    state.day < 40 &&
    d.finished &&
    timeLeft() === 0
  );
}

setInterval(() => {
  if ($("home").classList.contains("active")) {
    updateTimer();
  }
}, 1000);

$("start").onclick = () => {
  startDay();
  cardIndex = Math.min(24, dayInfo().cards);
  go("lesson");
};

$("nextDay").onclick = () => {
  if (!dayInfo().finished || timeLeft() > 0) return;
  if (state.day >= 40) return;

  state.day++;
  cardIndex = 0;
  helpContext = null;

  save();
  go("home");
};

/* =====================================
   EXPLANATION CARDS
===================================== */

function makeCard(
  title, body, example, translation,
  question, answer, wrong1, wrong2
) {
  return {
    title,
    body,
    example,
    translation,
    question,
    answer,
    options: [answer, wrong1, wrong2]
  };
}

function cardsForDay() {
  const l = lesson();
  const w = todayWords();

  // 25 explicit explanations for Day 1.
  if (state.day === 1) {
    return [
      makeCard(
        "Что такое Present Simple?",
        "Present Simple — это простое настоящее время. Оно используется для привычек, расписания и постоянных фактов.",
        "I study English every day.",
        "Я изучаю английский каждый день.",
        "Когда используется Present Simple?",
        "Для привычек и фактов",
        "Только для событий вчера",
        "Только для действий сейчас"
      ),
      makeCard(
        "Что такое Present Continuous?",
        "Present Continuous — это настоящее длительное время. Оно используется для действий, происходящих сейчас или временно.",
        "I am studying English now.",
        "Я сейчас изучаю английский.",
        "Когда используется Present Continuous?",
        "Когда действие происходит сейчас",
        "Только в прошлом",
        "Только для постоянных привычек"
      ),
      makeCard(
        "Что такое привычка?",
        "Привычка — это то, что ты делаешь регулярно. Для таких действий часто нужен Present Simple.",
        "I go to college every day.",
        "Я каждый день хожу в колледж.",
        "Какое выражение показывает привычку?",
        "every day",
        "right now",
        "yesterday"
      ),
      makeCard(
        "Что означает now?",
        "Now — это «сейчас». Часто показывает, что требуется Present Continuous.",
        "I am reading now.",
        "Я сейчас читаю.",
        "Перевод слова now?",
        "сейчас",
        "обычно",
        "вчера"
      ),
      makeCard(
        "Present Simple: I, you, we, they",
        "С I, you, we, they в Present Simple используй основную форму глагола.",
        "We study English.",
        "Мы изучаем английский.",
        "Как правильно?",
        "We study English.",
        "We studies English.",
        "We studying English."
      ),
      makeCard(
        "Present Simple: he, she, it",
        "После he, she, it добавь к глаголу -s или -es. Study превращается в studies.",
        "She studies English.",
        "Она изучает английский.",
        "Как правильно?",
        "She studies English.",
        "She study English.",
        "She studying English."
      ),
      makeCard(
        "Что означает don't?",
        "Don't — сокращение от do not. Используется для отрицания с I, you, we, they.",
        "I don't work on Sundays.",
        "Я не работаю по воскресеньям.",
        "Правильное отрицание?",
        "I don't work.",
        "I doesn't work.",
        "I don't works."
      ),
      makeCard(
        "Что означает doesn't?",
        "Doesn't — сокращение от does not. Используется с he, she, it. После него основной глагол остаётся без -s.",
        "He doesn't work today.",
        "Он сегодня не работает.",
        "Как правильно?",
        "He doesn't work.",
        "He don't work.",
        "He doesn't works."
      ),
      makeCard(
        "Вопросы с Do",
        "Do ставится в начале вопросов Present Simple с I, you, we, they.",
        "Do you study English?",
        "Ты изучаешь английский?",
        "Правильный вопрос?",
        "Do you study English?",
        "Does you study English?",
        "Are you study English?"
      ),
      makeCard(
        "Вопросы с Does",
        "Does используется в вопросах с he, she, it. Основной глагол не получает -s.",
        "Does she study English?",
        "Она изучает английский?",
        "Правильный вопрос?",
        "Does she study English?",
        "Do she study English?",
        "Does she studies English?"
      ),
      makeCard(
        "Что означает am?",
        "Am — форма глагола be с I. В Present Continuous используем I am + глагол с -ing.",
        "I am learning English.",
        "Я сейчас учу английский.",
        "Как правильно?",
        "I am learning.",
        "I is learning.",
        "I learning."
      ),
      makeCard(
        "Что означает is?",
        "Is используется с he, she, it. Например, She is reading — она сейчас читает.",
        "She is reading now.",
        "Она сейчас читает.",
        "Как правильно?",
        "She is reading.",
        "She are reading.",
        "She reading."
      ),
      makeCard(
        "Что означает are?",
        "Are используется с you, we, they перед глаголом с -ing.",
        "They are studying now.",
        "Они сейчас занимаются.",
        "Как правильно?",
        "They are studying.",
        "They is studying.",
        "They studying."
      ),
      makeCard(
        "Отрицание с not",
        "Чтобы сказать, что действие сейчас не происходит, добавь not после am, is или are.",
        "I am not sleeping now.",
        "Я сейчас не сплю.",
        "Как правильно?",
        "I am not sleeping.",
        "I not am sleeping.",
        "I don't sleeping."
      ),
      makeCard(
        "Вопросы в Present Continuous",
        "В вопросе am, is или are ставится перед человеком или предметом.",
        "Are you learning English?",
        "Ты сейчас учишь английский?",
        "Правильный вопрос?",
        "Are you learning?",
        "Do you learning?",
        "You are learning?"
      ),
      makeCard(
        "Что означает usually?",
        "Usually — это «обычно». Оно помогает описывать регулярные действия.",
        "I usually study after college.",
        "Я обычно занимаюсь после колледжа.",
        "Перевод usually?",
        "обычно",
        "прямо сейчас",
        "вчера"
      ),
      makeCard(
        "Что означает occasionally?",
        "Occasionally — это «иногда», «время от времени».",
        "I occasionally study at a café.",
        "Я иногда занимаюсь в кафе.",
        "Перевод occasionally?",
        "иногда",
        "всегда",
        "сейчас"
      ),
      makeCard(
        "Что означает routine?",
        "Routine — распорядок. Daily routine — твои обычные повседневные действия.",
        "My morning routine is simple.",
        "Мой утренний распорядок простой.",
        "Перевод routine?",
        "распорядок",
        "каникулы",
        "путешествие"
      ),
      makeCard(
        "Сравним два времени",
        "Every day обычно показывает привычку. Now показывает действие сейчас.",
        "I read every day. I am reading now.",
        "Я читаю каждый день. Я читаю сейчас.",
        "Что происходит сейчас?",
        "I am reading now.",
        "I read every day.",
        "I read on Mondays."
      ),
      makeCard(
        "Слушай и повторяй",
        "I'm — сокращение от I am. Послушай фразу и повтори её вслух.",
        "I'm practising English now.",
        "Я сейчас практикую английский.",
        "Как правильно?",
        "I'm practising English now.",
        "I'm practise English now.",
        "I practising English now."
      ),
      makeCard(
        "Найди ошибку",
        "После Does используется начальная форма глагола. Правильно: Does she study?",
        "Does she study English?",
        "Она изучает английский?",
        "Правильный вопрос?",
        "Does she study?",
        "Does she studies?",
        "Do she studies?"
      ),
      makeCard(
        "Реальный диалог",
        "Расскажи о своей привычке и о том, что делаешь прямо сейчас.",
        "I usually work, but today I'm resting.",
        "Обычно я работаю, но сегодня отдыхаю.",
        "Что означает usually?",
        "обычно",
        "сейчас",
        "никогда"
      ),
      makeCard(
        "Тренируем произношение",
        "Прочитай предложение. Потом нажми кнопку прослушивания и повтори.",
        "I usually study, but now I'm resting.",
        "Обычно я занимаюсь, но сейчас отдыхаю.",
        "Как правильно?",
        "Now I'm resting.",
        "Now I resting.",
        "Now I am rest."
      ),
      makeCard(
        "Повторение главного",
        "Present Simple описывает привычки. Present Continuous описывает действия сейчас.",
        "I work every day. I am working now.",
        "Я работаю каждый день. Я сейчас работаю.",
        "Что означает действие сейчас?",
        "I am working now.",
        "I work every day.",
        "I work on Mondays."
      ),
      makeCard(
        "Готов к основному тесту",
        "Ты разобрал главные правила, примеры и новые слова. Заверши мини-игру и переходи к 15 заданиям.",
        "I usually study, but now I'm resting.",
        "Я обычно занимаюсь, но сейчас отдыхаю.",
        "Как переводится now?",
        "сейчас",
        "обычно",
        "вчера"
      )
    ];
  }

  // 25 learning steps for Days 2–40.
  const b = (
    title, body, example, translation,
    question, answer, wrong1, wrong2
  ) => makeCard(
    title, body, example, translation,
    question, answer, wrong1, wrong2
  );

  return [
    b("Что такое " + l.grammar + "?",
      l.definition, l.example, l.translation,
      "Какую грамматику изучаем?", l.grammar,
      "The English alphabet", "Basic numbers"),

    b("Когда это используется?",
      l.definition, l.example, l.translation,
      "Что описывает правило?",
      l.definition, "Только буквы", "Только числа"),

    b("Главная формула",
      "Формула — это порядок слов. " + l.formula,
      l.example, l.translation,
      "Какая формула относится к теме?",
      l.formula, "will + yesterday", "did + will"),

    b("Разберём пример",
      "Прочитай пример и обрати внимание на форму глагола.",
      l.example, l.translation,
      "Какой пример правильный?", l.example,
      "He can to goes.", "I am has studying."),

    b("Понимаем перевод",
      "Переводи смысл, а не каждое английское слово отдельно.",
      l.example, l.translation,
      "Какой перевод верный?", l.translation,
      "Это другой урок.", "Мы вчера завтра."),

    b("Что такое подлежащее?",
      "Подлежащее — это человек или предмет, о котором говорится: I, you, he, she, we, they.",
      l.example, l.translation,
      "Что такое подлежащее?",
      "Тот, о ком говорится в предложении",
      "Любая цифра", "Название страны"),

    b("Что такое глагол?",
      "Глагол — слово действия или состояния: study, work, read, be.",
      l.example, l.translation,
      "Что такое глагол?",
      "Слово действия или состояния",
      "Название города", "Цифра"),

    b("Форма глагола",
      "Правило дня определяет, какую форму глагола нужно использовать. " +
      l.formula, l.example, l.translation,
      "Какая формула верная?", l.formula,
      "am + will + yesterday", "did + will + verb"),

    b("Английский порядок слов",
      "В простом утверждении обычно сначала подлежащее, затем глагол.",
      l.example, l.translation,
      "Какой пример относится к уроку?",
      l.example, "She have went.", "I am will yesterday."),

    b("Слово №1: " + w[0][0],
      `${w[0][0]} — это «${w[0][1]}». Произношение: ${w[0][2]}.`,
      w[0][0], w[0][1],
      "Как переводится " + w[0][0] + "?",
      w[0][1], w[1][1], w[2][1]),

    b("Слово №2: " + w[1][0],
      `${w[1][0]} — это «${w[1][1]}». Произношение: ${w[1][2]}.`,
      w[1][0], w[1][1],
      "Как переводится " + w[1][0] + "?",
      w[1][1], w[0][1], w[2][1]),

    b("Слово №3: " + w[2][0],
      `${w[2][0]} — это «${w[2][1]}». Произношение: ${w[2][2]}.`,
      w[2][0], w[2][1],
      "Как переводится " + w[2][0] + "?",
      w[2][1], w[0][1], w[1][1]),

    b("Повторяем новые слова",
      "Попробуй вспомнить перевод слов без подсказки.",
      w[0][0], w[0][1],
      "Как переводится " + w[0][0] + "?",
      w[0][1], w[1][1], w[2][1]),

    b("Что такое контекст?",
      "Контекст — ситуация, которая помогает понять значение фразы.",
      l.example, l.translation,
      "Что такое контекст?",
      "Ситуация и смысл вокруг фразы",
      "Только одна буква", "Название времени"),

    b("Учимся слушать",
      "Нажми «Слушать пример». Попробуй понять смысл до просмотра перевода.",
      l.example, l.translation,
      "Какую фразу изучаем?", l.example,
      "We is go.", "He do can."),

    b("Ответ в диалоге",
      "Сначала ответь коротко, затем добавь одну подробность.",
      l.example, l.translation,
      "Какое предложение подходит?",
      l.example, "I is not can.", "She have went."),

    b("Как работает because?",
      "Because означает «потому что». Используй его, чтобы объяснять причину.",
      "I study because I want to improve.",
      "Я занимаюсь, потому что хочу стать лучше.",
      "Как переводится because?",
      "потому что", "но", "вчера"),

    b("Как работает but?",
      "But означает «но». Это слово соединяет противоположные мысли.",
      "It is difficult, but useful.",
      "Это сложно, но полезно.",
      "Как переводится but?",
      "но", "потому что", "каждый день"),

    b("Как работает and?",
      "And означает «и». Оно соединяет слова и мысли.",
      "I read and write in English.",
      "Я читаю и пишу на английском.",
      "Как переводится and?",
      "и", "но", "хотя"),

    b("Видеоурок",
      "Посмотри учебное видео по теме. Затем повтори правило и пример.",
      l.example, l.translation,
      "Какой пример относится к теме?",
      l.example, "I was will go.", "He is can."),

    b("Ищем ошибки",
      "Чтобы исправлять грамматику, сначала проверяй правило: " +
      l.definition, l.example, l.translation,
      "Какой пример правильный?",
      l.example, "They is has.", "She can to go."),

    b("Создай собственную фразу",
      "Измени человека, место или время, но сохрани правильную грамматику.",
      l.example, l.translation,
      "Что важно сохранить?",
      "Правильную грамматическую форму",
      "Случайный порядок слов",
      "Неверное окончание"),

    b("Разговорная практика",
      "Прочитай английский пример. Попробуй произнести похожую мысль своими словами.",
      l.example, l.translation,
      "Что улучшает Speaking?",
      "Регулярная практика",
      "Только молчание", "Только перевод букв"),

    b("Повторение дня",
      `${l.grammar} — ${l.definition} Формула: ${l.formula}`,
      l.example, l.translation,
      "Какая грамматика изучалась?",
      l.grammar, "Basic alphabet", "Numbers only"),

    b("Готов к тесту",
      "Ты закончил объяснения. Дальше будут 15 обязательных вопросов.",
      l.example, l.translation,
      "Что будет дальше?",
      "15 основных заданий",
      "Сразу 1000 заданий",
      "Конец приложения")
  ];
}

/* =====================================
   MINI-GAMES
===================================== */

function shuffle(items, seed) {
  const arr = [...items];
  let x = seed >>> 0;

  for (let i = arr.length - 1; i > 0; i--) {
    x = (Math.imul(x, 1664525) + 1013904223) >>> 0;

    const j = x % (i + 1);

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function renderMiniGame() {
  const c = cardsForDay()[cardIndex];
  const passed = !!dayInfo().solved[cardIndex];

  $("miniQuestion").textContent = c.question;
  $("miniOptions").replaceChildren();

  const options = shuffle(
    c.options,
    state.day * 131 + cardIndex * 71
  );

  options.forEach(option => {
    const button = document.createElement("button");

    button.className = "option";
    button.textContent = option;
    button.disabled = passed;

    if (passed && option === c.answer) {
      button.classList.add("correct");
    }

    button.onclick = () => {
      checkMiniGame(option);
    };

    $("miniOptions").appendChild(button);
  });

  $("miniFeedback").classList.toggle("hidden", !passed);

  if (passed) {
    $("miniFeedback").textContent =
      "✅ Правильно! " + c.body;
  }

  $("continue").disabled = !passed;
}

function checkMiniGame(answer) {
  const d = dayInfo();

  if (d.solved[cardIndex]) return;

  const c = cardsForDay()[cardIndex];

  if (answer === c.answer) {
    d.solved[cardIndex] = true;

    d.cards = Object.values(d.solved)
      .filter(Boolean).length;

    state.xp += 3;

    save();
    renderMiniGame();

  } else {
    $("miniFeedback").classList.remove("hidden");
    $("miniFeedback").textContent =
      "❌ Попробуй ещё раз.\nПодсказка: " + c.body;
  }
}

/* =====================================
   LESSON PAGE
===================================== */

function renderLesson() {
  startDay();

  const l = lesson();
  const c = cardsForDay()[cardIndex];

  $("dayLabel").textContent =
    `DAY ${state.day}/40 · ${state.day <= 20 ? "A2+" : "B1"}`;

  $("topic").textContent = l.topic;
  $("step").textContent = `${cardIndex + 1}/25`;
  $("lessonBar").style.width =
    `${(cardIndex + 1) * 4}%`;

  $("cardTitle").textContent = c.title;
  $("cardBody").textContent = c.body;
  $("englishExample").textContent = c.example;
  $("russianExample").textContent = c.translation;

  // Different photo for each card.
  const image = $("lessonPhoto");

  image.style.display = "block";
  image.onerror = () => {
    image.style.display = "none";
  };

  image.src = photoURL(cardIndex);
  image.alt = c.title;

  $("photoCaption").textContent =
    `📷 Карточка ${cardIndex + 1}/25`;

  $("previous").disabled = cardIndex === 0;

  $("continue").textContent =
    cardIndex === 24
      ? "🎮 Перейти к 15 заданиям"
      : "Продолжить →";

  renderMiniGame();
  renderWords();
  renderVideo();
}

function renderWords() {
  const root = $("words");
  root.replaceChildren();

  todayWords().forEach(w => {
    const row = document.createElement("div");
    row.className = "word";

    const text = document.createElement("div");

    const strong = document.createElement("strong");
    strong.textContent = w[0];

    const small = document.createElement("small");
    small.textContent = `${w[1]} · ${w[2]}`;

    text.append(strong, small);

    const button = document.createElement("button");
    button.textContent = "🔊";
    button.onclick = () => speak(w[0], true);

    row.append(text, button);
    root.append(row);
  });
}

$("continue").onclick = () => {
  if (!dayInfo().solved[cardIndex]) return;

  if (cardIndex === 24) {
    openQuiz(false);
  } else {
    cardIndex++;
    renderLesson();
  }
};

$("previous").onclick = () => {
  cardIndex = Math.max(0, cardIndex - 1);
  renderLesson();
};

$("sayExample").onclick = () => {
  speak(cardsForDay()[cardIndex].example, true);
};

$("helpCard").onclick = () => {
  helpContext = {
    type: "card",
    card: cardsForDay()[cardIndex]
  };

  go("russian");
  askRussian("Объясни текущую карточку");
};

$("helpMini").onclick = () => {
  helpContext = {
    type: "mini",
    card: cardsForDay()[cardIndex]
  };

  go("russian");
  askRussian("Как решить мини-задание?");
};

/* =====================================
   VIDEO LESSONS
===================================== */

function renderVideo() {
  const isVideoCard = cardIndex === 19;

  $("video").classList.toggle(
    "hidden",
    !isVideoCard
  );

  $("videoFrame").replaceChildren();

  $("videoText").textContent =
    state.day === 1
      ? "BBC Learning English: Present Simple and Present Continuous"
      : "Найди видео BBC Learning English по текущей теме.";

  $("videoBtn").textContent =
    state.day === 1
      ? "▶ Смотреть видео"
      : "🔎 Найти видео по теме";
}

$("videoBtn").onclick = () => {
  if (state.day !== 1) {
    const query = encodeURIComponent(
      "BBC Learning English " + lesson().grammar
    );

    window.open(
      "https://www.youtube.com/results?search_query=" + query,
      "_blank",
      "noopener,noreferrer"
    );

    return;
  }

  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.youtube-nocookie.com/embed/xFsYrTIndhI";

  iframe.title =
    "BBC Learning English Present Simple Present Continuous";

  iframe.allowFullscreen = true;
  iframe.loading = "lazy";

  $("videoFrame").replaceChildren(iframe);
};

/* =====================================
   15 + 25 GAME QUESTIONS
===================================== */

const GRAMMAR = [
  ["She ___ English every day.","studies","study","studying","studied"],
  ["I ___ reading now.","am","is","are","be"],
  ["He ___ his work yesterday.","finished","finish","finishing","finishes"],
  ["We ___ when he arrived.","were studying","study","are study","studied now"],
  ["You ___ practise regularly.","should","should to","must to","are should"],
  ["I have ___ been abroad.","never","yesterday","ago","last"],
  ["I enjoy ___ English.","learning","learn","to learning","learned"],
  ["I'd like ___ tomorrow.","to travel","travelling to","travel to","traveled"],
  ["She ___ going to visit us.","is","am","are","be"],
  ["I haven't finished it ___.","yet","ago","yesterday","last"],
  ["I used ___ play football.","to","for","at","by"],
  ["If it rains, I ___ at home.","will stay","would stayed","stayed will","stay will"],
  ["This is ___ than that one.","easier","easy","easiest","most easy"],
  ["He ___ swim well.","can","can to","cans","is can"],
  ["We have studied ___ two years.","for","since","ago","when"],
  ["If I had time, I ___ more.","would practise","will practise","practised","am practise"],
  ["The website ___ yesterday.","was created","created was","is create","has creating"],
  ["The person ___ helped me was kind.","who","which","where","whose is"],
  ["Despite ___ tired, she continued.","being","be","was","to be"],
  ["He asked where I ___.","lived","do live","am live","living"],
  ["She suggested ___ earlier.","leaving","to leave","leave","left"],
  ["I look forward to ___ from you.","hearing","hear","heard","to hear"],
  ["We succeeded ___ solving it.","in","on","to","at"],
  ["He avoided ___ the question.","answering","to answer","answer","answered"],
  ["They ___ already left when I arrived.","had","have","were","are"]
];

const SCENES = {
  study: "I enjoy learning English",
  travel: "I would like to travel abroad",
  food: "I enjoy trying traditional food",
  music: "Music helps me relax",
  tech: "Technology can improve education"
};

function generateQuiz(isBonus) {
  const total = isBonus ? 25 : 15;
  const result = [];

  const seed =
    state.day * 467 + (isBonus ? 7003 : 0);

  const words = todayWords();
  const l = lesson();

  for (let i = 0; i < total; i++) {
    const type = i % 5;

    if (type === 0) {
      const source =
        GRAMMAR[(seed + i * 3) % GRAMMAR.length];

      result.push({
        type: "choice",
        title: source[0],
        answer: source[1],
        choices: shuffle(
          source.slice(1), seed + i
        ),
        explain: "Правильный ответ: " + source[1]
      });
    }

    if (type === 1 || type === 2) {
      const word =
        words[Math.floor(i / 5) % 3];

      const wrong = shuffle(
        WORDS.filter(w =>
          w[0] !== word[0] && w[1] !== word[1]
        ),
        seed + i
      ).slice(0, 3);

      const listening = type === 2;

      result.push({
        type: "choice",
        title: listening
          ? "🎧 Послушай слово и выбери перевод"
          : "📚 Переведи: " + word[1],
        answer: listening ? word[1] : word[0],
        choices: shuffle(
          [word, ...wrong],
          seed + i * 7
        ).map(w => listening ? w[1] : w[0]),
        audio: listening ? word[0] : "",
        explain: `${word[0]} — ${word[1]}`
      });
    }

    if (type === 3) {
      const answer = SCENES[l.scene];

      const wrong = shuffle(
        Object.values(SCENES).filter(x =>
          x !== answer
        ),
        seed + i
      ).slice(0, 3);

      result.push({
        type: "choice",
        title: "🖼️ Выбери описание картинки",
        answer,
        choices: shuffle(
          [answer, ...wrong],
          seed + i * 9
        ),
        scene: l.scene,
        explain: answer
      });
    }

    if (type === 4) {
      const text = l.example;

      result.push({
        type: "build",
        title: "🧩 Собери предложение",
        answer: text,
        tokens: shuffle(
          text.replace(/[.!?]/g, "").split(" "),
          seed + i * 11
        ),
        explain: text
      });
    }
  }

  return result;
}

function normalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

let chosenTokens = [];

function openQuiz(bonus) {
  if (dayInfo().cards < 25) {
    go("lesson");
    return;
  }

  bonusMode = bonus;

  go("quiz");
  renderQuiz();
}

function renderQuiz() {
  const progress = quizData(bonusMode);
  const questions = generateQuiz(bonusMode);

  if (progress.step >= questions.length) {
    finishQuiz();
    return;
  }

  const q = questions[progress.step];

  $("quizTag").textContent =
    bonusMode ? "⚡ BONUS" : "🎯 DAILY CHALLENGE";

  $("quizProgress").textContent =
    `${progress.step + 1}/${questions.length}`;

  $("quizBar").style.width =
    `${progress.step / questions.length * 100}%`;

  $("quizQuestion").textContent = q.title;

  $("listen").classList.toggle(
    "hidden", !q.audio
  );

  $("quizPhoto").classList.toggle(
    "hidden", !q.scene
  );

  if (q.scene) {
    $("quizImage").src = photoURL(
      Object.keys(SCENES).indexOf(q.scene) * 5
    );
  }

  $("answers").replaceChildren();
  $("quizFeedback").classList.add("hidden");
  $("quizNext").classList.add("hidden");

  chosenTokens = [];

  if (q.type === "build") {
    renderBuild(q);
  } else {
    q.choices.forEach(choice => {
      const b = document.createElement("button");

      b.className = "option";
      b.textContent = choice;

      b.onclick = () => answerQuiz(choice);

      $("answers").appendChild(b);
    });
  }

  if (progress.answer !== null) {
    showQuizFeedback(progress.answer, q);
  }
}

function renderBuild(q) {
  const area = $("answers");
  area.replaceChildren();

  const selected = document.createElement("div");
  selected.className = "build";

  const bank = document.createElement("div");
  bank.className = "build";

  chosenTokens.forEach((item, i) => {
    const b = document.createElement("button");

    b.textContent = item.word;
    b.onclick = () => {
      chosenTokens.splice(i, 1);
      renderBuild(q);
    };

    selected.appendChild(b);
  });

  q.tokens.forEach((word, index) => {
    const b = document.createElement("button");

    b.textContent = word;

    b.disabled = chosenTokens.some(item =>
      item.index === index
    );

    b.onclick = () => {
      chosenTokens.push({word, index});
      renderBuild(q);
    };

    bank.appendChild(b);
  });

  const check = document.createElement("button");

  check.className = "btn primary full";
  check.textContent = "✅ Проверить предложение";

  check.disabled = chosenTokens.length === 0;

  check.onclick = () => {
    answerQuiz(
      chosenTokens.map(x => x.word).join(" ")
    );
  };

  area.append(selected, bank, check);
}

function answerQuiz(answer) {
  const progress = quizData(bonusMode);

  if (progress.answer !== null) return;

  const q =
    generateQuiz(bonusMode)[progress.step];

  progress.answer = answer;

  if (normalize(answer) === normalize(q.answer)) {
    progress.score++;
    state.xp += 5;
  } else {
    state.xp++;
  }

  save();
  showQuizFeedback(answer, q);
}

function showQuizFeedback(answer, q) {
  const right =
    normalize(answer) === normalize(q.answer);

  $("quizFeedback").textContent =
    (right ? "✅ Верно!" : "❌ Запомни ответ.") +
    "\n" + q.explain;

  $("quizFeedback").classList.remove("hidden");
  $("quizNext").classList.remove("hidden");

  $("answers").querySelectorAll("button").forEach(b => {
    b.disabled = true;

    if (q.type === "choice") {
      if (b.textContent === q.answer) {
        b.classList.add("correct");
      } else if (b.textContent === answer) {
        b.classList.add("wrong");
      }
    }
  });
}

$("listen").onclick = () => {
  const q =
    generateQuiz(bonusMode)[quizData(bonusMode).step];

  if (q.audio) speak(q.audio, true);
};

$("quizNext").onclick = () => {
  const progress = quizData(bonusMode);

  if (progress.answer === null) return;

  progress.step++;
  progress.answer = null;

  save();
  renderQuiz();
};

$("quizHelp").onclick = () => {
  helpContext = {
    type: "quiz",
    question: generateQuiz(bonusMode)[
      quizData(bonusMode).step
    ]
  };

  go("russian");
  askRussian("Объясни текущее задание");
};

function finishQuiz() {
  const progress = quizData(bonusMode);

  if (!progress.finished) {
    progress.finished = true;
    state.xp += bonusMode ? 75 : 60;
    save();
  }

  go("finish");

  $("resultTitle").textContent = bonusMode
    ? "⚡ Бонус пройден!"
    : "🏆 Основной тест завершён!";

  $("resultScore").textContent =
    `${progress.score}/${bonusMode ? 25 : 15} правильных ответов`;

  $("bonusBtn").disabled = quizData(true).finished;
}

$("finishBtn").onclick = () => {
  if (!quizData(false).finished) return;

  dayInfo().finished = true;

  save();
  go("home");
};

$("bonusBtn").onclick = () => openQuiz(true);

/* =====================================
   SPEECH
===================================== */

function stopVoiceAudio() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
}

function speak(text, manual = false) {
  if (!manual && !state.voice) return;
  if (!("speechSynthesis" in window)) return;

  stopVoiceAudio();

  const message =
    new SpeechSynthesisUtterance(String(text));

  message.lang = "en-US";
  message.rate = 0.87;

  speechSynthesis.speak(message);
}

/* =====================================
   OPTIONAL LOCAL AI
===================================== */

let aiWorker = null;
let aiReady = false;
let aiLoading = false;
let aiRequest = 0;

const aiPending = new Map();

function stopModel() {
  aiWorker?.terminate();
  aiWorker = null;

  aiReady = false;
  aiLoading = false;

  for (const request of aiPending.values()) {
    clearTimeout(request.timer);
    request.reject(
      new Error("AI stopped")
    );
  }

  aiPending.clear();

  $("loadModel").disabled = false;
  $("loadModel").textContent =
    "🧠 Запустить локальный ИИ";
}

function loadModel() {
  if (aiReady || aiLoading || state.eco) return;

  aiLoading = true;
  $("loadModel").disabled = true;

  $("modelStatus").textContent =
    "Подготавливаю модель. Первая загрузка может быть большой...";

  const workerSource = `
    let generator = null;

    self.onmessage = async event => {
      const data = event.data || {};

      try {
        if (data.type === "load") {
          const {pipeline, env} = await import(
            "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1"
          );

          env.allowLocalModels = false;
          env.useBrowserCache = true;

          if (env.backends?.onnx?.wasm) {
            env.backends.onnx.wasm.numThreads = 1;
          }

          generator = await pipeline(
            "text-generation",
            "onnx-community/Qwen2.5-0.5B-Instruct",
            {
              device: "wasm",
              dtype: "q4"
            }
          );

          self.postMessage({type: "ready"});
        }

        if (data.type === "ask") {
          const output = await generator(
            data.messages,
            {
              max_new_tokens: 85,
              do_sample: false,
              repetition_penalty: 1.15
            }
          );

          const raw = output?.[0]?.generated_text;

          const answer = Array.isArray(raw)
            ? raw.at(-1)?.content
            : raw;

          self.postMessage({
            type: "reply",
            id: data.id,
            text: String(answer || "")
          });
        }
      } catch (error) {
        self.postMessage({
          type: "error",
          id: data.id,
          message: String(error.message || error)
        });
      }
    };
  `;

  try {
    const url = URL.createObjectURL(
      new Blob(
        [workerSource],
        {type: "text/javascript"}
      )
    );

    aiWorker = new Worker(url, {
      type: "module"
    });

    URL.revokeObjectURL(url);

    aiWorker.onmessage = event => {
      const data = event.data;

      if (data.type === "ready") {
        aiReady = true;
        aiLoading = false;

        $("loadModel").disabled = false;
        $("loadModel").textContent =
          "✅ ИИ запущен";

        $("modelProgress").style.width = "100%";

        $("modelStatus").textContent =
          "✅ Модель готова. Оба помощника могут её использовать.";

        try {
          localStorage.setItem(MODEL_KEY, "1");
        } catch {}
      }

      if (data.type === "error" && !data.id) {
        stopModel();

        $("modelStatus").textContent =
          "Модель недоступна: " + data.message;
      }

      if (
        data.type === "reply" ||
        (data.type === "error" && data.id)
      ) {
        const request = aiPending.get(data.id);

        if (!request) return;

        clearTimeout(request.timer);
        aiPending.delete(data.id);

        if (data.type === "reply") {
          request.resolve(data.text);
        } else {
          request.reject(
            new Error(data.message)
          );
        }
      }
    };

    aiWorker.onerror = () => {
      stopModel();

      $("modelStatus").textContent =
        "Не удалось запустить локальную модель.";
    };

    aiWorker.postMessage({type: "load"});

  } catch (error) {
    stopModel();

    $("modelStatus").textContent =
      String(error.message || error);
  }
}

function askModel(messages) {
  if (!aiReady || !aiWorker) {
    return Promise.reject(
      new Error("AI model not ready")
    );
  }

  return new Promise((resolve, reject) => {
    const id = ++aiRequest;

    const timer = setTimeout(() => {
      aiPending.delete(id);

      reject(new Error("AI timeout"));
      stopModel();
    }, 65000);

    aiPending.set(id, {
      resolve,
      reject,
      timer
    });

    aiWorker.postMessage({
      type: "ask",
      id,
      messages
    });
  });
}

$("loadModel").onclick = loadModel;

function renderEco() {
  $("eco").textContent = state.eco
    ? "🌿 Эко-режим включён — выключить"
    : "🌿 Включить эко-режим";
}

$("eco").onclick = () => {
  state.eco = !state.eco;
  save();

  if (state.eco) stopModel();

  renderEco();

  $("modelStatus").textContent = state.eco
    ? "🌿 Нейросеть отключена."
    : "Можно запустить локальную модель.";
};

/* =====================================
   CHAT HISTORY
===================================== */

function displayMessage(side, role, text) {
  const root = $(side === "en" ? "enLog" : "ruLog");

  const bubble = document.createElement("div");

  bubble.className =
    "bubble" + (role === "user" ? " me" : "");

  const heading = document.createElement("small");

  heading.textContent =
    role === "user"
      ? "YOU"
      : side === "en"
        ? "🤖 ENGLISH AI"
        : "🇷🇺 ПОМОЩНИК";

  const content = document.createElement("div");
  content.textContent = text;

  bubble.append(heading, content);
  root.appendChild(bubble);

  root.scrollTop = root.scrollHeight;
}

function addChat(side, role, text) {
  state.chats[side].push({role, text});

  // Limit stored history, not the number of messages.
  if (state.chats[side].length > 30) {
    state.chats[side].splice(
      0, state.chats[side].length - 30
    );
  }

  save();
  displayMessage(side, role, text);
}

function renderChat(side) {
  const root = $(side === "en" ? "enLog" : "ruLog");
  root.replaceChildren();

  displayMessage(
    side,
    "assistant",
    side === "en"
      ? "Hello! I'm English40 AI. What would you like to talk about today?"
      : "Привет! Я объясняю уроки, задания, переводы и произношение. Спроси, что непонятно."
  );

  for (const msg of state.chats[side]) {
    displayMessage(side, msg.role, msg.text);
  }

  if (side === "ru") {
    $("ruContext").textContent =
      `Урок ${state.day}: ${lesson().topic}`;
  }
}

/* =====================================
   ENGLISH AI
===================================== */

function basicGrammarCheck(text) {
  let result = text;

  const notes = [];

  const rules = [
    [/\bI is\b/gi, "I am", "Use I am."],
    [/\bI has\b/gi, "I have", "Use I have."],
    [/\bI am agree\b/gi, "I agree", "Say I agree."],
    [/\bI didn't went\b/gi, "I didn't go", "After didn't, use go."],
    [/\bShe go\b/gi, "She goes", "Use she goes."],
    [/\bI want learn\b/gi, "I want to learn", "Use want to learn."]
  ];

  for (const [pattern, replacement, note] of rules) {
    if (pattern.test(result)) {
      result = result.replace(
        pattern, replacement
      );

      notes.push(note);
    }
  }

  return {result, notes};
}

function basicEnglishReply(text, check = false) {
  const result = basicGrammarCheck(text);

  if (result.notes.length) {
    return (
      "Possible correction:\n" +
      result.result + "\n" +
      result.notes.join("\n")
    );
  }

  if (check) {
    return (
      "I didn't detect a familiar grammar mistake, " +
      "but the basic checker cannot verify every sentence."
    );
  }

  const q = text.toLowerCase();

  if (/who created you|who made you|your creator/.test(q)) {
    return "The English40 website was created by Darkhan. I'm its English learning assistant.";
  }

  if (/what is your name|who are you/.test(q)) {
    return "I'm English40 AI. What would you like to discuss?";
  }

  if (/\bhello\b|\bhi\b/.test(q)) {
    return "Hello! How has your day been?";
  }

  if (/music|guitar/.test(q)) {
    return "Which kind of music do you enjoy?";
  }

  if (/travel|country/.test(q)) {
    return "Where would you like to travel, and why?";
  }

  return "Tell me more! Can you explain why or give an example?";
}

let englishBusy = false;
let russianBusy = false;

async function englishReply(text, mode) {
  if (mode === "hint" && !aiReady) {
    return (
      "You can start with: 'I think ... because ...'. " +
      "Try making your own sentence."
    );
  }

  // Exact identity responses must not be invented.
  if (/who created you|who made you|your creator/i.test(text)) {
    return "The English40 website was created by Darkhan. I'm an English practice assistant.";
  }

  if (/what is your name|who are you/i.test(text)) {
    return "I'm English40 AI.";
  }

  if (!aiReady || state.eco) {
    return basicEnglishReply(
      text,
      mode === "check"
    );
  }

  // Avoid duplicating current user message.
  const history = state.chats.en
    .slice(0, mode === "hint" ? undefined : -1)
    .slice(-6)
    .map(msg => ({
      role: msg.role,
      content: msg.text.slice(0, 250)
    }));

  const prompt =
    mode === "check"
      ? "Check the grammar of this text and explain real errors briefly in English: " + text
      : mode === "hint"
        ? "Help me build an answer in English. Give an example."
        : text;

  const response = await askModel([
    {
      role: "system",
      content:
        "You are English40 AI. " +
        "Reply only in English. " +
        "Adapt to the learner's level naturally. " +
        "Do not copy the student's message. " +
        "Do not invent your identity. " +
        "Use 1-3 helpful sentences."
    },
    ...history,
    {
      role: "user",
      content: prompt
    }
  ]);

  const answer = String(response || "").trim();

  if (
    !answer ||
    answer.toLowerCase() === text.toLowerCase() ||
    /[а-яё]/i.test(answer)
  ) {
    return basicEnglishReply(
      text,
      mode === "check"
    );
  }

  return answer.slice(0, 550);
}

async function sendEnglish(mode = "dialog") {
  if (englishBusy || (russianBusy && aiReady)) return;

  const text = $("enInput").value.trim();

  if (!text && mode !== "hint") return;

  englishBusy = true;

  $("enSend").disabled = true;
  $("enCheck").disabled = true;
  $("enHint").disabled = true;

  stopVoiceAudio();

  if (mode !== "hint") {
    addChat("en", "user", text);
    $("enInput").value = "";
  }

  try {
    const reply = await englishReply(text, mode);

    addChat("en", "assistant", reply);
    speak(reply);

  } catch (error) {
    addChat(
      "en",
      "assistant",
      basicEnglishReply(text, mode === "check")
    );

    console.warn(error);

  } finally {
    englishBusy = false;

    $("enSend").disabled = false;
    $("enCheck").disabled = false;
    $("enHint").disabled = false;
  }
}

$("enSend").onclick = () => {
  stopRecording();
  sendEnglish("dialog");
};

$("enCheck").onclick = () => {
  stopRecording();
  sendEnglish("check");
};

$("enHint").onclick = () => {
  stopRecording();
  sendEnglish("hint");
};

$("stopVoice").onclick = () => {
  stopVoiceAudio();
  stopRecording();
};

$("newChat").onclick = () => {
  state.chats.en = [];
  save();
  renderChat("en");
};

/* =====================================
   RUSSIAN HELPER
===================================== */

function explanation() {
  const l = lesson();

  return (
    `📘 Тема: ${l.topic}\n\n` +
    `${l.grammar} — ${l.definition}\n\n` +
    `Формула:\n${l.formula}\n\n` +
    `Пример:\n${l.example}\n\n` +
    `Перевод:\n${l.translation}`
  );
}

function explainCurrentTask() {
  if (helpContext?.type === "mini") {
    const c = helpContext.card;

    return (
      `🎮 Мини-задание: ${c.question}\n\n` +
      `Объяснение:\n${c.body}\n\n` +
      `Пример: ${c.example}\n` +
      `Перевод: ${c.translation}`
    );
  }

  if (helpContext?.type === "quiz") {
    const q = helpContext.question;

    return (
      `🎮 Задание: ${q.title}\n\n` +
      `Подсказка:\n${q.explain}\n\n` +
      explanation()
    );
  }

  const c = cardsForDay()[cardIndex];

  return (
    `Карточка: ${c.title}\n\n` +
    `${c.body}\n\n` +
    `Пример:\n${c.example}\n` +
    `Перевод:\n${c.translation}`
  );
}

function findWord(text) {
  return WORDS.find(w =>
    w[0].toLowerCase() === text.toLowerCase() ||
    w[1].toLowerCase() === text.toLowerCase()
  );
}

async function translate(text) {
  const word = text.trim().slice(0, 200);

  if (!word) return "Напиши слово для перевода.";

  const local = findWord(word);

  if (local) {
    return (
      `${local[0]} — ${local[1]}\n` +
      `Примерное чтение: ${local[2]}`
    );
  }

  try {
    const isRussian = /[а-яё]/i.test(word);

    const pair = isRussian ? "ru|en" : "en|ru";

    const url =
      "https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(word) +
      "&langpair=" + encodeURIComponent(pair);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Translation service error");
    }

    const result = await response.json();

    if (
      Number(result.responseStatus) >= 400 ||
      !result.responseData?.translatedText
    ) {
      throw new Error("Translation limit");
    }

    return (
      `${word} — ${result.responseData.translatedText}\n\n` +
      "Можешь попросить пример со словом."
    );

  } catch {
    return (
      "Не удалось получить онлайн-перевод. " +
      "Проверь интернет. У бесплатного переводчика есть ограничения."
    );
  }
}

async function pronunciation(word) {
  const local = findWord(word);

  if (local) {
    return (
      `${local[0]} — ${local[1]}\n` +
      `Произношение: ${local[2]}`
    );
  }

  if (!/^[a-z'-]+$/i.test(word)) {
    return "Введи одно английское слово латиницей.";
  }

  try {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" +
      encodeURIComponent(word)
    );

    const data = await response.json();

    const ipa =
      data?.[0]?.phonetic ||
      data?.[0]?.phonetics?.find(p => p.text)?.text;

    return ipa
      ? `Произношение ${word}: ${ipa} (транскрипция IPA)`
      : "Транскрипция не найдена.";

  } catch {
    return "Не получилось получить произношение.";
  }
}

async function russianReply(text) {
  const q = text.trim().toLowerCase();

  // Specific help with exercises first.
  if (
    /как выполнить|как решить|мини-?задани|мини-?игр|объясни текущее задание|объясни текущую карточку/.test(q)
  ) {
    return explainCurrentTask();
  }

  // Translation before general lesson routing.
  let match = text.match(
    /^(?:переведи|как переводится|перевод)\s+(.+)/i
  );

  if (!match) {
    match = text.match(
      /^(.+?)\s+(?:что значит|что означает|что это)\??$/i
    );
  }

  if (match) {
    return translate(
      match[1].replace(/\?$/, "")
    );
  }

  if (
    /объясни правило|объясни тему|тема урока|правило урока|почему здесь|почему используется|не понял правило/.test(q)
  ) {
    return explanation();
  }

  if (/новые слова|слова дня|слова урока/.test(q)) {
    return todayWords()
      .map(w => `${w[0]} — ${w[1]} (${w[2]})`)
      .join("\n");
  }

  if (/дай пример|покажи пример/.test(q)) {
    return explanation();
  }

  match = text.match(
    /(?:как произносится|как читается|произношение)\s+(.+)/i
  );

  if (match) {
    return pronunciation(
      match[1].replace(/[?.!]/g, "")
    );
  }

  if (/^[a-z][a-z\s'-]{0,80}$/i.test(text)) {
    return translate(text);
  }

  // Optional generative explanation.
  if (aiReady && !state.eco) {
    const result = await askModel([
      {
        role: "system",
        content:
          "Ты русский преподаватель английского English40. " +
          "Пиши только по-русски. " +
          "Объясняй вопрос понятными словами. " +
          "Давай определения, формулы и примеры. " +
          "Не выдумывай факты."
      },
      {
        role: "user",
        content:
          "Контекст: " + explanation() +
          "\nВопрос ученика: " + text
      }
    ]);

    if (String(result).trim()) {
      return String(result).trim().slice(0, 1100);
    }
  }

  return (
    "Я могу подробно объяснить текущий урок:\n\n" +
    explanation() +
    "\n\nДля свободных ответов по другим темам " +
    "запусти локальную модель."
  );
}

async function askRussian(command = "") {
  if (russianBusy || (englishBusy && aiReady)) return;

  const text = command || $("ruInput").value.trim();

  if (!text) return;

  russianBusy = true;
  $("ruSend").disabled = true;

  addChat("ru", "user", text);
  $("ruInput").value = "";

  try {
    const answer = await russianReply(text);

    // Russian assistant never speaks.
    addChat("ru", "assistant", answer);

  } catch (error) {
    addChat(
      "ru",
      "assistant",
      explanation()
    );

  } finally {
    russianBusy = false;
    $("ruSend").disabled = false;
  }
}

$("ruSend").onclick = () => askRussian();

document.querySelectorAll("[data-help]").forEach(b => {
  b.onclick = () => {
    const action = {
      explain: "Объясни правило урока",
      example: "Дай пример",
      words: "Новые слова дня",
      task: "Как выполнить текущее задание",
      pronounce: "Как произносится " + todayWords()[0][0]
    };

    askRussian(action[b.dataset.help]);
  };
});

/* =====================================
   MICROPHONE — AUTO SEND AFTER 6 SEC
===================================== */

let recognition = null;
let silenceTimer = null;
let counterTimer = null;

function stopRecording() {
  const rec = recognition;

  recognition = null;
  recording = null;

  clearTimeout(silenceTimer);
  clearInterval(counterTimer);

  $("record").textContent = "🎙️ Говорить";

  try {
    rec?.abort();
  } catch {}
}

async function microphonePermission() {
  if (!window.isSecureContext) {
    $("micNotice").textContent =
      "Нужен localhost или HTTPS.";

    return false;
  }

  try {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true
      });

    stream.getTracks().forEach(t => t.stop());

    $("micNotice").textContent =
      "✅ Микрофон разрешён.";

    return true;

  } catch (error) {
    $("micNotice").textContent =
      "Нет доступа: " + error.name;

    return false;
  }
}

$("allowMic").onclick = microphonePermission;

function scheduleSend(session) {
  clearTimeout(silenceTimer);
  clearInterval(counterTimer);

  const deadline = Date.now() + 6000;

  counterTimer = setInterval(() => {
    if (recording !== session) return;

    const seconds = Math.max(
      0,
      Math.ceil((deadline - Date.now()) / 1000)
    );

    $("speechStatus").textContent =
      `⏱ Автоотправка через ${seconds} сек.`;

  }, 400);

  silenceTimer = setTimeout(() => {
    if (recording !== session) return;

    const text = $("enInput").value.trim();

    stopRecording();

    if (text && !englishBusy) {
      sendEnglish("dialog");
    }
  }, 6000);
}

async function recordSpeech() {
  if (recording) {
    stopRecording();
    return;
  }

  if (englishBusy) return;

  const SpeechAPI =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechAPI) {
    $("speechStatus").textContent =
      "Распознавание речи недоступно.";
    return;
  }

  if (!await microphonePermission()) return;

  stopVoiceAudio();

  const rec = new SpeechAPI();

  const session = {
    base: $("enInput").value.trim(),
    last: ""
  };

  recording = session;
  recognition = rec;

  rec.lang = "en-US";
  rec.continuous = true;
  rec.interimResults = true;

  rec.onstart = () => {
    $("record").textContent = "⏹ Остановить";
    $("speechStatus").textContent =
      "🔴 Говори на английском...";
  };

  rec.onresult = event => {
    if (recording !== session) return;

    let text = "";

    for (let i = 0; i < event.results.length; i++) {
      text += " " +
        (event.results[i][0]?.transcript || "");
    }

    text = text.trim();

    if (!text || text === session.last) return;

    session.last = text;

    $("enInput").value =
      [session.base, text].filter(Boolean).join(" ");

    scheduleSend(session);
  };

  rec.onerror = event => {
    if (recording !== session) return;

    if (!session.last) {
      stopRecording();

      $("speechStatus").textContent =
        "Ошибка распознавания: " + event.error;
    }
  };

  rec.onend = () => {
    if (recording !== session) return;

    recognition = null;
    $("record").textContent = "🎙️ Говорить";

    if (!session.last) {
      stopRecording();
    }
  };

  try {
    rec.start();
  } catch (error) {
    stopRecording();

    $("speechStatus").textContent =
      error.message;
  }
}

$("record").onclick = recordSpeech;

/* =====================================
   SETTINGS AND SHARING
===================================== */

$("voice").checked = state.voice;

$("voice").onchange = event => {
  state.voice = event.target.checked;
  save();

  if (!state.voice) stopVoiceAudio();
};

$("siteLink").textContent =
  location.protocol === "https:"
    ? location.href
    : "Опубликуй сайт на GitHub Pages для получения HTTPS-ссылки.";

$("share").onclick = async () => {
  if (location.protocol !== "https:") {
    alert("Сначала опубликуй сайт по HTTPS.");
    return;
  }

  try {
    if (navigator.share) {
      await navigator.share({
        title: "English40 Premium",
        url: location.href
      });
    } else {
      await navigator.clipboard.writeText(location.href);
      alert("Ссылка скопирована!");
    }
  } catch {}
};

/* =====================================
   INITIALIZE
===================================== */

renderEco();
renderHome();
