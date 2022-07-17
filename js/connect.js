"use strict";

const highLight = document.getElementById("highlight");
const Service = document.getElementById("service");

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");

Service.addEventListener("click", () => {
  container2.style.display = "block";
  container1.style.display = "none";
});

highLight.addEventListener("click", () => {
  container1.style.display = "block";
  container2.style.display = "none";
});
