const floaters = [{ top: "13%", left: "67%", size: 96, glow: "var(--mouse-glow-strong)" }, { top: "25%", left: "54%", size: 44, glow: "var(--mouse-glow-soft)" }, { top: "43%", left: "61%", size: 70, glow: "var(--mouse-glow-strong)" }, { top: "32%", left: "76%", size: 58, glow: "var(--mouse-glow-strong)" }, { top: "57%", left: "53%", size: 40, glow: "var(--mouse-glow-soft)" }, { top: "63%", left: "70%", size: 64, glow: "var(--mouse-glow-strong)" }, { top: "72%", left: "62%", size: 48, glow: "var(--mouse-glow-soft)" }];
if (window.location.search) {
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.hash}`);
}
function mouseIcon(size) { return `<img src="assets/mouse.svg" width="${size}" height="${size}" alt="" aria-hidden="true">`; }
const getSunIcon = () => `
  <svg class="utility-button-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle class="sun-core" cx="12" cy="12" r="3.8"></circle>
    <g stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <line x1="12" y1="1.7" x2="12" y2="4.4"></line>
      <line x1="12" y1="19.6" x2="12" y2="22.3"></line>
      <line x1="1.7" y1="12" x2="4.4" y2="12"></line>
      <line x1="19.6" y1="12" x2="22.3" y2="12"></line>
      <line x1="4.2" y1="4.2" x2="6.1" y2="6.1"></line>
      <line x1="17.9" y1="17.9" x2="19.8" y2="19.8"></line>
      <line x1="4.2" y1="19.8" x2="6.1" y2="17.9"></line>
      <line x1="17.9" y1="6.1" x2="19.8" y2="4.2"></line>
    </g>
  </svg>
`;
const getMoonIcon = () => `
  <svg class="utility-button-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.4 14.7A8.8 8.8 0 0 1 9.3 3.6a8.7 8.7 0 1 0 11.1 11.1Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></path>
  </svg>
`;
const themeToggle = document.querySelector("[data-theme-toggle]");
const applyTheme = (isLight) => {
  document.documentElement.classList.remove("theme-light", "dark");
  document.documentElement.classList.add(isLight ? "theme-light" : "dark");
  themeToggle?.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  if (themeToggle) {
    themeToggle.innerHTML = isLight ? getMoonIcon() : getSunIcon();
  }
};
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
    const isActive = link.textContent.trim() === label;
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

    const label = link.textContent.trim();
    if (label === "Home") {
      activateTab("Home");
      showPage("Home");
      updateUrl("Home");
      return;
    }

    if (label === "About") {
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