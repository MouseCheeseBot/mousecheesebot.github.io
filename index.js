const floaters = [{ top: "13%", left: "67%", size: 96, glow: "var(--mouse-glow-strong)" }, { top: "25%", left: "54%", size: 44, glow: "var(--mouse-glow-soft)" }, { top: "43%", left: "61%", size: 70, glow: "var(--mouse-glow-strong)" }, { top: "32%", left: "76%", size: 58, glow: "var(--mouse-glow-strong)" }, { top: "57%", left: "53%", size: 40, glow: "var(--mouse-glow-soft)" }, { top: "63%", left: "70%", size: 64, glow: "var(--mouse-glow-strong)" }, { top: "72%", left: "62%", size: 48, glow: "var(--mouse-glow-soft)" }];
if (window.location.search) {
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.hash}`);
}
function mouseIcon(size) { return `<img src="assets/mouse.svg" width="${size}" height="${size}" alt="" aria-hidden="true">`; }
const getSunIcon = () => '<img class="utility-button-icon" src="assets/sun.svg" alt="" aria-hidden="true">';
const getMoonIcon = () => '<img class="utility-button-icon" src="assets/moon.svg" alt="" aria-hidden="true">';
const translations = {
  en: {
    title: "Mouse&Cheese - Discord Game Bot",
    description: "Mouse&Cheese is a fully customizable, completely free multi-purpose Discord bot.",
    mainNav: "Main navigation",
    brandHome: "Mouse&Cheese home",
    changeLanguage: "Change language",
    languageMenu: "Choose language",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    home: "Home",
    about: "About",
    status: "Status",
    premium: "Premium",
    addToDiscord: "Add to Discord",
    heroLine1: "Fun mini game bot",
    heroLine2: "Collect cheese, dodge bombs",
    heroLine3: "Play solo or with friends in multiplayer",
    featureOverview: "Feature overview",
    discordGame: "Discord Game",
    discordGameDescription: "Play solo in single player or with friends in multiplayer. Dodge bombs and other players shots and be the first to collect the cheese",
    leaderboard: "Global Leaderboard",
    leaderboardDescription: "Compete with top cheese and cup leaders to become the top one",
    serverActivity: "Server Activity",
    serverActivityDescription: "Keep your server active with mini-games & battles to increase member activity and user engagement.",
    moreContent: "More content below the wave",
    aboutEyebrow: "ABOUT MOUSE&CHEESE",
    aboutTitle: "A game bot for your Discord server",
    aboutLead: "Mouse&Cheese brings quick mini-games, competition and server activity together in one place.",
    faqTitle: "Frequently asked questions",
    faqQuestion1: "What is Mouse&Cheese?",
    faqAnswer1: "Mouse&Cheese is a Discord game bot with mini-games, battles and friendly competition.",
    faqQuestion2: "Can I play with my friends?",
    faqAnswer2: "Yes. Invite Mouse&Cheese to your server and play together with your community.",
    faqQuestion3: "How do I add the bot?",
    faqAnswer3: "Use the Add to Discord button at the top of the page to invite the bot to your server."
  },
  ru: {
    title: "Mouse&Cheese — игровой бот для Discord",
    description: "Mouse&Cheese — бесплатный игровой бот для Discord с мини-играми, соревнованиями и настройками сервера.",
    mainNav: "Главная навигация",
    brandHome: "На главную Mouse&Cheese",
    changeLanguage: "Изменить язык",
    languageMenu: "Выберите язык",
    switchToLight: "Переключить на светлую тему",
    switchToDark: "Переключить на тёмную тему",
    home: "Главная",
    about: "О нас",
    status: "Статус",
    premium: "Премиум",
    addToDiscord: "Добавить в Discord",
    heroLine1: "Весёлый игровой бот",
    heroLine2: "Собирайте сыр, уворачивайтесь от бомб",
    heroLine3: "Играйте в одиночку или с друзьями",
    featureOverview: "Возможности",
    discordGame: "Игра в Discord",
    discordGameDescription: "Играйте в одиночку или с друзьями. Уворачивайтесь от бомб и выстрелов других игроков и соберите сыр первым.",
    leaderboard: "Общий рейтинг",
    leaderboardDescription: "Соревнуйтесь за первое место в рейтингах сыра и кубков.",
    serverActivity: "Активность сервера",
    serverActivityDescription: "Поддерживайте активность сервера с помощью мини-игр и сражений.",
    moreContent: "Другие разделы ниже",
    aboutEyebrow: "О MOUSE&CHEESE",
    aboutTitle: "Игровой бот для вашего сервера Discord",
    aboutLead: "Mouse&Cheese объединяет быстрые мини-игры, соревнования и активность сервера.",
    faqTitle: "Часто задаваемые вопросы",
    faqQuestion1: "Что такое Mouse&Cheese?",
    faqAnswer1: "Mouse&Cheese — игровой бот для Discord с мини-играми, сражениями и дружескими соревнованиями.",
    faqQuestion2: "Можно играть с друзьями?",
    faqAnswer2: "Да. Пригласите Mouse&Cheese на сервер и играйте вместе с сообществом.",
    faqQuestion3: "Как добавить бота?",
    faqAnswer3: "Нажмите кнопку «Добавить в Discord» вверху страницы, чтобы пригласить бота на сервер."
  },
  uk: {
    title: "Mouse&Cheese — ігровий бот для Discord",
    description: "Mouse&Cheese — безкоштовний ігровий бот для Discord із мінііграми, змаганнями та налаштуваннями сервера.",
    mainNav: "Головна навігація",
    brandHome: "На головну Mouse&Cheese",
    changeLanguage: "Змінити мову",
    languageMenu: "Виберіть мову",
    switchToLight: "Перемкнути на світлу тему",
    switchToDark: "Перемкнути на темну тему",
    home: "Головна",
    about: "Про нас",
    status: "Статус",
    premium: "Преміум",
    addToDiscord: "Додати до Discord",
    heroLine1: "Веселий ігровий бот",
    heroLine2: "Збирайте сир, ухиляйтеся від бомб",
    heroLine3: "Грайте самі або з друзями",
    featureOverview: "Можливості",
    discordGame: "Гра в Discord",
    discordGameDescription: "Грайте самі або з друзями. Ухиляйтеся від бомб і пострілів інших гравців та зберіть сир першими.",
    leaderboard: "Загальний рейтинг",
    leaderboardDescription: "Змагайтеся за перше місце в рейтингах сиру та кубків.",
    serverActivity: "Активність сервера",
    serverActivityDescription: "Підтримуйте активність сервера за допомогою мініігор і битв.",
    moreContent: "Інші розділи нижче",
    aboutEyebrow: "ПРО MOUSE&CHEESE",
    aboutTitle: "Ігровий бот для вашого сервера Discord",
    aboutLead: "Mouse&Cheese поєднує швидкі мініігри, змагання та активність сервера.",
    faqTitle: "Поширені запитання",
    faqQuestion1: "Що таке Mouse&Cheese?",
    faqAnswer1: "Mouse&Cheese — ігровий бот для Discord із мінііграми, битвами та дружніми змаганнями.",
    faqQuestion2: "Чи можна грати з друзями?",
    faqAnswer2: "Так. Запросіть Mouse&Cheese на свій сервер і грайте разом зі спільнотою.",
    faqQuestion3: "Як додати бота?",
    faqAnswer3: "Натисніть кнопку «Додати до Discord» угорі сторінки, щоб запросити бота на сервер."
  },
  be: {
    title: "Mouse&Cheese — гульнявы бот для Discord",
    description: "Mouse&Cheese — бясплатны гульнявы бот для Discord з міні-гульнямі, спаборніцтвамі і наладамі сервера.",
    mainNav: "Галоўная навігацыя",
    brandHome: "На галоўную Mouse&Cheese",
    changeLanguage: "Змяніць мову",
    languageMenu: "Абярыце мову",
    switchToLight: "Пераключыць на светлую тэму",
    switchToDark: "Пераключыць на цёмную тэму",
    home: "Галоўная",
    about: "Пра нас",
    status: "Статус",
    premium: "Прэміум",
    addToDiscord: "Дадаць у Discord",
    heroLine1: "Вясёлы гульнявы бот",
    heroLine2: "Збірайце сыр, ухіляйцеся ад бомбаў",
    heroLine3: "Гуляйце самі або з сябрамі",
    featureOverview: "Магчымасці",
    discordGame: "Гульня ў Discord",
    discordGameDescription: "Гуляйце самі або з сябрамі. Ухіляйцеся ад бомбаў і стрэлаў іншых гульцоў ды збярыце сыр першымі.",
    leaderboard: "Агульны рэйтынг",
    leaderboardDescription: "Змагайцеся за першае месца ў рэйтынгах сыру і кубкаў.",
    serverActivity: "Актыўнасць сервера",
    serverActivityDescription: "Падтрымлівайце актыўнасць сервера з дапамогай міні-гульняў і бітваў.",
    moreContent: "Іншыя раздзелы ніжэй",
    aboutEyebrow: "ПРА MOUSE&CHEESE",
    aboutTitle: "Гульнявы бот для вашага сервера Discord",
    aboutLead: "Mouse&Cheese аб'ядноўвае хуткія міні-гульні, спаборніцтвы і актыўнасць сервера.",
    faqTitle: "Частыя пытанні",
    faqQuestion1: "Што такое Mouse&Cheese?",
    faqAnswer1: "Mouse&Cheese — гульнявы бот для Discord з міні-гульнямі, бітвамі і сяброўскімі спаборніцтвамі.",
    faqQuestion2: "Ці можна гуляць з сябрамі?",
    faqAnswer2: "Так. Запрасіце Mouse&Cheese на свой сервер і гуляйце разам са сваёй супольнасцю.",
    faqQuestion3: "Як дадаць бота?",
    faqAnswer3: "Націсніце кнопку «Дадаць у Discord» уверсе старонкі, каб запрасіць бота на сервер."
  },
  pl: {
    title: "Mouse&Cheese — bot do gier na Discordzie",
    description: "Mouse&Cheese to darmowy, wszechstronny bot na Discorda z minigrami, rywalizacją i ustawieniami serwera.",
    mainNav: "Menu główne",
    brandHome: "Strona główna Mouse&Cheese",
    changeLanguage: "Zmień język",
    languageMenu: "Wybierz język",
    switchToLight: "Przełącz na jasny motyw",
    switchToDark: "Przełącz na ciemny motyw",
    home: "Strona główna",
    about: "O nas",
    status: "Status",
    premium: "Premium",
    addToDiscord: "Dodaj do Discorda",
    heroLine1: "Zabawny bot z minigrami",
    heroLine2: "Zbieraj ser, unikaj bomb",
    heroLine3: "Graj solo lub ze znajomymi",
    featureOverview: "Funkcje",
    discordGame: "Gra na Discordzie",
    discordGameDescription: "Graj solo lub ze znajomymi. Unikaj bomb i strzałów innych graczy, aby jako pierwszy zebrać ser.",
    leaderboard: "Globalny ranking",
    leaderboardDescription: "Rywalizuj o pierwsze miejsce w rankingach sera i pucharów.",
    serverActivity: "Aktywność serwera",
    serverActivityDescription: "Zwiększaj aktywność serwera dzięki minigrom i bitwom.",
    moreContent: "Więcej treści poniżej",
    aboutEyebrow: "O MOUSE&CHEESE",
    aboutTitle: "Bot z grami na Twój serwer Discord",
    aboutLead: "Mouse&Cheese łączy szybkie minigry, rywalizację i aktywność serwera.",
    faqTitle: "Często zadawane pytania",
    faqQuestion1: "Czym jest Mouse&Cheese?",
    faqAnswer1: "Mouse&Cheese to bot z grami na Discorda, minigrami, bitwami i przyjazną rywalizacją.",
    faqQuestion2: "Czy mogę grać ze znajomymi?",
    faqAnswer2: "Tak. Zaproś Mouse&Cheese na swój serwer i graj razem ze swoją społecznością.",
    faqQuestion3: "Jak dodać bota?",
    faqAnswer3: "Użyj przycisku „Dodaj do Discorda” u góry strony, aby zaprosić bota na serwer."
  }
};
const languageToggle = document.querySelector("[data-language-toggle]");
const languageMenu = document.querySelector("#language-menu");
let currentLanguage = localStorage.getItem("mousecheese-language");
if (!Object.prototype.hasOwnProperty.call(translations, currentLanguage)) {
  currentLanguage = "en";
}
const applyLanguage = (language) => {
  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').content = dictionary.description;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = dictionary[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", dictionary[element.dataset.i18nAria]);
  });
  languageMenu.querySelectorAll("[data-language]").forEach((button) => {
    const isSelected = button.dataset.language === language;
    button.disabled = isSelected;
    button.setAttribute("aria-pressed", String(isSelected));
  });
  themeToggle?.setAttribute("aria-label", document.documentElement.classList.contains("theme-light") ? dictionary.switchToDark : dictionary.switchToLight);
};
const themeToggle = document.querySelector("[data-theme-toggle]");
const applyTheme = (isLight) => {
  document.documentElement.classList.remove("theme-light", "dark");
  document.documentElement.classList.add(isLight ? "theme-light" : "dark");
  themeToggle?.setAttribute("aria-label", isLight ? translations[currentLanguage].switchToDark : translations[currentLanguage].switchToLight);
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  if (themeToggle) {
    themeToggle.innerHTML = isLight ? getMoonIcon() : getSunIcon();
  }
};
applyLanguage(currentLanguage);
const savedTheme = localStorage.getItem("mousecheese-theme");
const prefersLightTheme = savedTheme ? savedTheme === "light" : window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(prefersLightTheme);
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = !document.documentElement.classList.contains("theme-light");
    applyTheme(isLight);
    localStorage.setItem("mousecheese-theme", isLight ? "light" : "dark");
  });
}
languageToggle?.addEventListener("click", () => {
  const isExpanded = languageToggle.getAttribute("aria-expanded") === "true";
  languageToggle.setAttribute("aria-expanded", String(!isExpanded));
  languageMenu.hidden = isExpanded;
  if (!isExpanded) {
    languageMenu.querySelector("[data-language]:not(:disabled)").focus();
  }
});
languageMenu?.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
    localStorage.setItem("mousecheese-language", currentLanguage);
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
    languageToggle.focus();
  });
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-control")) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !languageMenu.hidden) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
    languageToggle.focus();
  }
});
document.querySelectorAll("[data-mouse-size]").forEach((element) => { element.innerHTML = mouseIcon(Number(element.dataset.mouseSize)); });
const floaterContainer = document.querySelector(".floaters");
floaters.forEach((floater, index) => { const element = document.createElement("div"); element.className = "floater"; element.style.top = floater.top; element.style.left = floater.left; element.style.filter = `drop-shadow(0 0 28px ${floater.glow}) drop-shadow(0 0 12px ${floater.glow})`; element.style.animationDuration = `${3 + (index % 3)}s`; element.innerHTML = mouseIcon(floater.size); floaterContainer.appendChild(element); });
const navLinks = [...document.querySelectorAll(".nav-link")];
const homeContent = document.querySelector(".home-content");
const aboutContent = document.querySelector(".about-content");

const showPage = (page) => {
  const isAbout = page === "About";
  homeContent.hidden = isAbout;
  aboutContent.hidden = !isAbout;
};

const getBasePath = () => {
  const pathname = new URL(window.location.href).pathname;

  if (pathname.endsWith("/about")) {
    return pathname.slice(0, -"/about".length) || "/";
  }

  if (pathname.endsWith("/index.html")) {
    return pathname.slice(0, -"/index.html".length) || "/";
  }

  return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
};

const updateUrl = (tab) => {
  if (tab === "About") {
    window.history.replaceState({}, "", "/about");
    return;
  }

  const url = new URL(window.location.href);
  const origin = url.origin;
  const nextUrl = url.protocol === "file:" ? `${origin}/index.html` : `${origin}/`;
  window.history.replaceState({}, "", nextUrl);
};

const activateTab = (label) => {
  navLinks.forEach((link) => {
    const isActive = link.dataset.page === label;
    link.classList.toggle("is-active", isActive);
  });
};

document.querySelector(".brand")?.addEventListener("click", (event) => {
  event.preventDefault();
  activateTab("Home");
  showPage("Home");
  updateUrl("Home");
});

navLinks.forEach((link) => {
  if (link.classList.contains("is-disabled")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      link.classList.remove("is-unavailable-feedback");
      void link.offsetWidth;
      link.classList.add("is-unavailable-feedback");
    });
    link.addEventListener("mouseenter", () => {
      link.style.cursor = "not-allowed";
      link.style.color = "var(--muted-foreground)";
    });
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();

    const page = link.dataset.page;
    if (page === "Home") {
      activateTab("Home");
      showPage("Home");
      updateUrl("Home");
      return;
    }

    if (page === "About") {
      activateTab("About");
      showPage("About");
      updateUrl("About");
    }
  });
});

if (window.location.href.endsWith("/about") || window.location.href.endsWith("/index.html/about")) {
  activateTab("About");
  showPage("About");
} else {
  activateTab("Home");
  showPage("Home");
}