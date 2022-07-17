const btnClick = function () {
  const hiddenBoxShow = document.getElementById("ts_fea-hidden");
  hiddenBoxShow.style.display = "block";
};

const imgClick = function () {
  const imgClose = document.getElementById("ts_fea-hidden");
  imgClose.style.display = "none";
};

const btnClick2 = function () {
  const hiddenBoxShow2 = document.getElementById("ts_fea-hidden-2");
  hiddenBoxShow2.style.display = "block";
};

const imgClick2 = function () {
  const imgClose2 = document.getElementById("ts_fea-hidden-2");
  imgClose2.style.display = "none";
};

const btnClick3 = function () {
  const hiddenBoxShow3 = document.getElementById("ts_fea-hidden-3");
  hiddenBoxShow3.style.display = "block";
};

const imgClick3 = function () {
  const imgClose3 = document.getElementById("ts_fea-hidden-3");
  imgClose3.style.display = "none";
};

const btnClick4 = function () {
  const hiddenBoxShow4 = document.getElementById("ts_fea-hidden-4");
  hiddenBoxShow4.style.display = "block";
};

const imgClick4 = function () {
  const imgClose4 = document.getElementById("ts_fea-hidden-4");
  imgClose4.style.display = "none";
};

const iconNone = function () {
  const NoIcon = document.querySelector(".third-screen-icon");
  NoIcon.style.display = "none";
  const NoIcon2 = document.querySelector(".third-screen-icon-2");
  NoIcon2.style.display = "none";
  const NoIcon3 = document.querySelector(".third-screen-icon-3");
  NoIcon3.style.display = "none";
  const NoIcon4 = document.querySelector(".third-screen-icon-4");
  NoIcon4.style.display = "none";
};

const iconView = function () {
  const UpIcon = document.querySelector(".third-screen-icon");
  UpIcon.style.display = "inline";
  const UpIcon2 = document.querySelector(".third-screen-icon-2");
  UpIcon2.style.display = "inline";
  const UpIcon3 = document.querySelector(".third-screen-icon-3");
  UpIcon3.style.display = "inline";
  const UpIcon4 = document.querySelector(".third-screen-icon-4");
  UpIcon4.style.display = "inline";
};

const backblur = function () {
  const backgrBlur = document.querySelector(".ccc");
  backgrBlur.style.filter = "blur(7px)";
};

const backNONOblur = function () {
  const backnnnblur = document.querySelector(".ccc");
  backnnnblur.style.filter = "blur(0px)";
};

const iiconClick = document.getElementById("iicon");
const iiconClick2 = document.getElementById("iicon-2");
const iiconClick3 = document.getElementById("iicon-3");
const iiconClick4 = document.getElementById("iicon-4");
const textClick = document.getElementById("ts_fea-hidden");
const textClick2 = document.getElementById("ts_fea-hidden-2");
const textClick3 = document.getElementById("ts_fea-hidden-3");
const textClick4 = document.getElementById("ts_fea-hidden-4");
const backgroundBlack = document.querySelector(".ccc");

// iiconClick.addEventListener("click", () => {
//   backgroundBlack.classList.add("backBlack");
// });

iiconClick.addEventListener("click", () => {
  backgroundBlack.classList.add("backBlack");
});

textClick.addEventListener("click", () => {
  backgroundBlack.classList.remove("backBlack");
});

iiconClick2.addEventListener("click", () => {
  backgroundBlack.classList.add("backBlack");
});

textClick2.addEventListener("click", () => {
  backgroundBlack.classList.remove("backBlack");
});

iiconClick3.addEventListener("click", () => {
  backgroundBlack.classList.add("backBlack");
});

textClick3.addEventListener("click", () => {
  backgroundBlack.classList.remove("backBlack");
});

iiconClick4.addEventListener("click", () => {
  backgroundBlack.classList.add("backBlack");
});

textClick4.addEventListener("click", () => {
  backgroundBlack.classList.remove("backBlack");
});
