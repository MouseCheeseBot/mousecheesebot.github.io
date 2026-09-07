const floaters = [{ top: "13%", left: "67%", size: 96, glow: "rgba(255, 255, 255, .55)" }, { top: "25%", left: "54%", size: 44, glow: "rgba(255, 255, 255, .55)" }, { top: "43%", left: "61%", size: 70, glow: "rgba(255, 255, 255, .55)" }, { top: "32%", left: "76%", size: 58, glow: "rgba(255, 255, 255, .55)" }, { top: "57%", left: "53%", size: 40, glow: "rgba(255, 255, 255, .5)" }, { top: "63%", left: "70%", size: 64, glow: "rgba(255, 255, 255, .55)" }, { top: "72%", left: "62%", size: 48, glow: "rgba(255, 255, 255, .5)" }];
if (window.location.search) {
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.hash}`);
}
function mouseIcon(size) { return `<img src="assets/mouse.svg" width="${size}" height="${size}" alt="" aria-hidden="true">`; }
document.querySelectorAll("[data-mouse-size]").forEach((element) => { element.innerHTML = mouseIcon(Number(element.dataset.mouseSize)); });
const floaterContainer = document.querySelector(".floaters");
floaters.forEach((floater, index) => { const element = document.createElement("div"); element.className = "floater"; element.style.top = floater.top; element.style.left = floater.left; element.style.filter = `drop-shadow(0 0 28px ${floater.glow})`; element.style.animationDuration = `${3 + (index % 3)}s`; element.innerHTML = mouseIcon(floater.size); floaterContainer.appendChild(element); });
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