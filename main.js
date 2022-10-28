const dropdown = document.querySelectorAll(".dropdown");
const icon = document.querySelectorAll(".dropdown > img");
const menu = document.querySelector(".menu");
const nav = document.querySelector("header nav");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", () => {
    dropdown[i].classList.toggle("show");
    icon[i].classList.toggle("rotate");
  });
}

menu.addEventListener("click", () => {
  menu.classList.toggle("opened");
  nav.classList.toggle("active");
});
