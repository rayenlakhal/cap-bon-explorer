
var annee = document.getElementById("current-year");
if (annee) {
  annee.textContent = new Date().getFullYear();
}


var boutonTheme = document.getElementById("btn-theme");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  boutonTheme.textContent = "Mode Clair";
}

boutonTheme.onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    boutonTheme.textContent = "Mode Clair";
  } else {
    localStorage.setItem("theme", "light");
    boutonTheme.textContent = "Mode Sombre";
  }
};
