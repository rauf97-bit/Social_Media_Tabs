let modeSwap = document.querySelector(".mode-circle");
let modeToggler = document.querySelector(".mode-toggler");

modeSwap.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (modeSwap.classList.contains("light-mode")) {
    modeSwap.classList.remove("light-mode");
    modeSwap.classList.add("dark-mode");

    modeToggler.classList.remove("bg-secondary");
    modeToggler.classList.add("green-bcg");
  } else {
    modeSwap.classList.remove("dark-mode");
    modeSwap.classList.add("light-mode");
    modeToggler.classList.remove("green-bcg");
    modeToggler.classList.add("bg-secondary");
  }
});
