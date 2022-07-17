const sideBtn1 = document.getElementById("sideBtn-1");
const sideBtn2 = document.getElementById("sideBtn-2");
const sideBtn3 = document.getElementById("sideBtn-3");
const sideBtn4 = document.getElementById("sideBtn-4");
const sideBtn5 = document.getElementById("sideBtn-5");
const sideBtn6 = document.getElementById("sideBtn-6");
const sideBtn7 = document.getElementById("sideBtn-7");
const sideBtn8 = document.getElementById("sideBtn-8");

const main1 = document.getElementById("lt-screen_main-1");
const main2 = document.getElementById("lt-screen_main-2");
const main3 = document.getElementById("lt-screen_main-3");
const main4 = document.getElementById("lt-screen_main-4");
const main5 = document.getElementById("lt-screen_main-5");
const main6 = document.getElementById("lt-screen_main-6");
const main7 = document.getElementById("lt-screen_main-7");
const main8 = document.getElementById("lt-screen_main-8");

function Btn1backBlack() {
  sideBtn1.style.backgroundColor = "black";
  sideBtn1.style.color = "white";
}

function Btn1backWhite() {
  sideBtn1.style.backgroundColor = "white";
  sideBtn1.style.color = "black";
}

function Btn2backBlack() {
  sideBtn2.style.backgroundColor = "black";
  sideBtn2.style.color = "white";
}

function Btn2backWhite() {
  sideBtn2.style.backgroundColor = "white";
  sideBtn2.style.color = "black";
}

function Btn3backBlack() {
  sideBtn3.style.backgroundColor = "black";
  sideBtn3.style.color = "white";
}

function Btn3backWhite() {
  sideBtn3.style.backgroundColor = "white";
  sideBtn3.style.color = "black";
}

function Btn4backBlack() {
  sideBtn4.style.backgroundColor = "black";
  sideBtn4.style.color = "white";
}

function Btn4backWhite() {
  sideBtn4.style.backgroundColor = "white";
  sideBtn4.style.color = "black";
}

function Btn5backBlack() {
  sideBtn5.style.backgroundColor = "black";
  sideBtn5.style.color = "white";
}

function Btn5backWhite() {
  sideBtn5.style.backgroundColor = "white";
  sideBtn5.style.color = "black";
}

function Btn6backBlack() {
  sideBtn6.style.backgroundColor = "black";
  sideBtn6.style.color = "white";
}

function Btn6backWhite() {
  sideBtn6.style.backgroundColor = "white";
  sideBtn6.style.color = "black";
}

function Btn7backBlack() {
  sideBtn7.style.backgroundColor = "black";
  sideBtn7.style.color = "white";
}

function Btn7backWhite() {
  sideBtn7.style.backgroundColor = "white";
  sideBtn7.style.color = "black";
}

function Btn8backBlack() {
  sideBtn8.style.backgroundColor = "black";
  sideBtn8.style.color = "white";
}

function Btn8backWhite() {
  sideBtn8.style.backgroundColor = "white";
  sideBtn8.style.color = "black";
}

sideBtn1.addEventListener("click", () => {
  Btn1backWhite();
  Btn2backBlack(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "block";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "none";
  main5.style.display = "none";
  main6.style.display = "none";
  main7.style.display = "none";
  main8.style.display = "none";
});

sideBtn2.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backWhite(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "block";
  main3.style.display = "none";
  main4.style.display = "none";
  main5.style.display = "none";
  main6.style.display = "none";
  main7.style.display = "none";
  main8.style.display = "none";
});

sideBtn3.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backBlack(sideBtn2);
  Btn3backWhite(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "block";
  main4.style.display = "none";
  main5.style.display = "none";
  main6.style.display = "none";
  main7.style.display = "none";
  main8.style.display = "none";
});

sideBtn4.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backBlack(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backWhite(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "block";
  main5.style.display = "none";
  main6.style.display = "none";
  main7.style.display = "none";
  main8.style.display = "none";
});

sideBtn5.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backBlack(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backWhite(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "none";
  main5.style.display = "block";
  main6.style.display = "none";
  main7.style.display = "none";
  main8.style.display = "none";
});

sideBtn6.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backBlack(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backWhite(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "none";
  main5.style.display = "none";
  main6.style.display = "block";
  main7.style.display = "none";
  main8.style.display = "none";
});

sideBtn7.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backBlack(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backWhite(sideBtn7);
  Btn8backBlack(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "none";
  main5.style.display = "none";
  main6.style.display = "none";
  main7.style.display = "block";
  main8.style.display = "none";
});

sideBtn8.addEventListener("click", () => {
  Btn1backBlack(sideBtn1);
  Btn2backBlack(sideBtn2);
  Btn3backBlack(sideBtn3);
  Btn4backBlack(sideBtn4);
  Btn5backBlack(sideBtn5);
  Btn6backBlack(sideBtn6);
  Btn7backBlack(sideBtn7);
  Btn8backWhite(sideBtn8);

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "none";
  main5.style.display = "none";
  main6.style.display = "none";
  main7.style.display = "none";
  main8.style.display = "block";
});
