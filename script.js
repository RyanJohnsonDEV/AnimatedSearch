const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const icon = document.querySelector(".fas");
const label = document.querySelector(".label");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  icon.classList.toggle("fa-search");
  icon.classList.toggle("fa-xmark");
  if (label.textContent.includes("Searched")) {
    label.textContent = "Perform a search...";
  } else {
    input.focus();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    label.textContent = `Searched for: "${input.value}"`;
  }
});
