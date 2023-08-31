"use strict";

const headingTertiary = document.querySelectorAll(".heading-tertiary");
const popularTitle = document.querySelectorAll(".popular__title");
const header = document.querySelector(".header");
const navMobile = document.querySelector(".nav-mobile");
const btnClose = document.querySelector(".icon-close");
const btnOpen = document.querySelector(".icon-open");

const hoverState = function (event) {
  event.target.style.color = "hsl(35, 77%, 62%)";
  setTimeout(() => (event.target.style.color = ""), 500);
};

headingTertiary.forEach((el) => el.addEventListener("mouseover", hoverState));
popularTitle.forEach((el) => el.addEventListener("mouseover", hoverState));

navMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  btnClose.classList.toggle("hidden");
  btnOpen.classList.toggle("hidden");
});
