"use strict";

const bannerBox = document.querySelector("#bannerBox > ul");
const bannerItem = document.querySelectorAll(".banner_item");

const bannerBox2 = document.querySelector("#bannerBox2 > ul");
const bannerItem2 = document.querySelectorAll(".banner_item2");

const bannerBox3 = document.querySelector("#bannerBox3 > ul");
const bannerItem3 = document.querySelectorAll(".banner_item3");

const bannerBox4 = document.querySelector("#bannerBox4 > ul");
const bannerItem4 = document.querySelectorAll(".banner_item4");

const bannerBox5 = document.querySelector("#bannerBox5 > ul");
const bannerItem5 = document.querySelectorAll(".banner_item5");
//배열 반환

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

const prevBtn3 = document.getElementById("prevBtn3");
const nextBtn3 = document.getElementById("nextBtn3");

const prevBtn4 = document.getElementById("prevBtn4");
const nextBtn4 = document.getElementById("nextBtn4");

const prevBtn5 = document.getElementById("prevBtn5");
const nextBtn5 = document.getElementById("nextBtn5");

const size = bannerItem[0].clientWidth;
//패딩을 포함한 넓이를 가지고 오는 기능
//해당요소의 길이를 가지고 온다.
let counter = 0;

//addEventListener : 이벤트를 동작시킨다
//function(){} === ()=>{}
//cclick, wheel, mouseover, mouseleave, mousedbclick, keyress.....

//2. 자동으로 지나가는 것

nextBtn.addEventListener("click", () => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

nextBtn2.addEventListener("click", () => {
  if (counter < bannerItem2.length - 1) {
    counter++;
    bannerBox2.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem2.length - 1) {
    counter = 0;
    bannerBox2.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn2.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox2.style.transform = "translateX(" + -size * counter + "px)";
  }
});

nextBtn3.addEventListener("click", () => {
  if (counter < bannerItem3.length - 1) {
    counter++;
    bannerBox3.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem3.length - 1) {
    counter = 0;
    bannerBox3.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn3.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox3.style.transform = "translateX(" + -size * counter + "px)";
  }
});

nextBtn4.addEventListener("click", () => {
  if (counter < bannerItem4.length - 1) {
    counter++;
    bannerBox4.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox4.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn4.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox4.style.transform = "translateX(" + -size * counter + "px)";
  }
});

nextBtn5.addEventListener("click", () => {
  if (counter < bannerItem5.length - 1) {
    counter++;
    bannerBox5.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 5 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem5.length - 1) {
    counter = 0;
    bannerBox5.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn5.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox5.style.transform = "translateX(" + -size * counter + "px)";
  }
});

/*
setInterval : 반복

ex)
setInterval(()=>{
    실행할 문장
}, 반복할 시간)
*/

setInterval(() => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);

setInterval(() => {
  if (counter < bannerItem2.length - 1) {
    counter++;
    bannerBox2.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem2.length - 1) {
    counter = 0;
    bannerBox2.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);

setInterval(() => {
  if (counter < bannerItem3.length - 1) {
    counter++;
    bannerBox3.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem3.length - 1) {
    counter = 0;
    bannerBox3.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);

setInterval(() => {
  if (counter < bannerItem4.length - 1) {
    counter++;
    bannerBox4.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem4.length - 1) {
    counter = 0;
    bannerBox4.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);

setInterval(() => {
  if (counter < bannerItem5.length - 1) {
    counter++;
    bannerBox5.style.transform = "translateX(" + -size * counter + "px)";
  }
  //1. 배너 4 --> 1 처음으로 돌아가는 것
  else if (counter === bannerItem5.length - 1) {
    counter = 0;
    bannerBox5.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);
//1000m/s = 1s
