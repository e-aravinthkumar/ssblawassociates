//sidebar
let menuButton = document.querySelector("#menu-bar");
let sideBar = document.querySelector("#sideBar");
let overlay = document.querySelector("#overlay");
let topBar = document.querySelector("#topBar");
let closeMenu = document.querySelector("#close-menu");

overlay.addEventListener("click", () => {
  // sideBar.classList.add('left-[-1000px]')
  // sideBar.classList.remove('left-0');
  overlay.classList.add("hidden");
  topBar.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  // sideBar.classList.add('left-[-1000px]')
  // sideBar.classList.remove('left-0');
  overlay.classList.add("hidden");
  topBar.classList.add("hidden");
});

menuButton.addEventListener("click", () => {
  // overlay.classList.remove('hidden');
  // sideBar.classList.add('left-0');
  // sideBar.classList.remove('left-[-1000px]');
  overlay.classList.remove("hidden");
  topBar.classList.remove("hidden");
});

//theme
let switchTheme = document.querySelectorAll(".switchTheme");
for (let i = 0; i < switchTheme.length; i++) {
  switchTheme[i].addEventListener("click", function () {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme == "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
    }
  });

  if (
    localStorage.theme === "dark" ||
    (!"theme" in localStorage &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.querySelector("html").classList.add("dark");
  } else if (localStorage.theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
}
