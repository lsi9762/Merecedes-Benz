"use strict";

const fiveMain = document.getElementById("five-main_ullist");
const mainItem = document.querySelectorAll(".five-list");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const size = mainItem[0].clientWidth;

let counter = 0;

nextBtn.addEventListener("click", () => {
  if (counter < mainItem.length - 1) {
    counter++;
    fiveMain.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === mainItem.length - 1) {
    counter = 0;
    fiveMain.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    fiveMain.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// setInterval(() => {
//   if (counter < mainItem.length - 1) {
//     counter++;
//     fiveMain.style.transform = "translateX(" + -size * counter + "px)";
//   } else if (counter === mainItem.length - 1) {
//     counter = 0;
//     fiveMain.style.transform = "translateX(" + -size * counter + "px)";
//   }
// }, 4000);
