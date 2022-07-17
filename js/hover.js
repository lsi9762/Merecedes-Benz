const msOverIcon = document.getElementById("fr-icon_button");
// const msOverText = document.getElementById("fr-hidden-text");
const backgrOver = document.getElementById("fr-screen");
const msOverIcon2 = document.getElementById("fr-icon_button-2");
const msOverIcon3 = document.getElementById("fr-icon_button-3");
const msOverIcon4 = document.getElementById("fr-icon_button-4");
const msOverIcon5 = document.getElementById("fr-icon_button-5");

msOverIcon.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon2.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon2.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon3.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon3.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon4.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon4.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon5.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon5.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

$(() => {
  $(".fr-icon").mouseover(() => {
    $(".fourth-screen_feature-text").slideDown();
    // $(".fr-icon").slideUp();
    $(".fr-icon").addClass("disNone");
    $(".fr-icon-2").addClass("disNone");
    $(".fr-icon-3").addClass("disNone");
    $(".fr-icon-4").addClass("disNone");
    $(".fr-icon-5").addClass("disNone");
  });

  $(".fr-icon").mouseleave(() => {
    $(".fourth-screen_feature-text").slideUp();
    $(".fr-icon").removeClass("disNone");
    $(".fr-icon-2").removeClass("disNone");
    $(".fr-icon-3").removeClass("disNone");
    $(".fr-icon-4").removeClass("disNone");
    $(".fr-icon-5").removeClass("disNone");
  });

  $(".fr-icon-2").mouseover(() => {
    $(".fourth-screen_feature-text-2").slideDown();
    $(".fr-icon").addClass("disNone");
    $(".fr-icon-2").addClass("disNone");
    $(".fr-icon-3").addClass("disNone");
    $(".fr-icon-4").addClass("disNone");
    $(".fr-icon-5").addClass("disNone");
  });

  $(".fr-icon-2").mouseleave(() => {
    $(".fourth-screen_feature-text-2").slideUp();
    $(".fr-icon").removeClass("disNone");
    $(".fr-icon-2").removeClass("disNone");
    $(".fr-icon-3").removeClass("disNone");
    $(".fr-icon-4").removeClass("disNone");
    $(".fr-icon-5").removeClass("disNone");
  });

  $(".fr-icon-3").mouseover(() => {
    $(".fourth-screen_feature-text-3").slideDown();
    $(".fr-icon").addClass("disNone");
    $(".fr-icon-2").addClass("disNone");
    $(".fr-icon-3").addClass("disNone");
    $(".fr-icon-4").addClass("disNone");
    $(".fr-icon-5").addClass("disNone");
  });

  $(".fr-icon-3").mouseleave(() => {
    $(".fourth-screen_feature-text-3").slideUp();
    $(".fr-icon").removeClass("disNone");
    $(".fr-icon-2").removeClass("disNone");
    $(".fr-icon-3").removeClass("disNone");
    $(".fr-icon-4").removeClass("disNone");
    $(".fr-icon-5").removeClass("disNone");
  });

  $(".fr-icon-4").mouseover(() => {
    $(".fourth-screen_feature-text-4").slideDown();
    $(".fr-icon").addClass("disNone");
    $(".fr-icon-2").addClass("disNone");
    $(".fr-icon-3").addClass("disNone");
    $(".fr-icon-4").addClass("disNone");
    $(".fr-icon-5").addClass("disNone");
  });

  $(".fr-icon-4").mouseleave(() => {
    $(".fourth-screen_feature-text-4").slideUp();
    $(".fr-icon").removeClass("disNone");
    $(".fr-icon-2").removeClass("disNone");
    $(".fr-icon-3").removeClass("disNone");
    $(".fr-icon-4").removeClass("disNone");
    $(".fr-icon-5").removeClass("disNone");
  });

  $(".fr-icon-5").mouseover(() => {
    $(".fourth-screen_feature-text-5").slideDown();
    $(".fr-icon").addClass("disNone");
    $(".fr-icon-2").addClass("disNone");
    $(".fr-icon-3").addClass("disNone");
    $(".fr-icon-4").addClass("disNone");
    $(".fr-icon-5").addClass("disNone");
  });

  $(".fr-icon-5").mouseleave(() => {
    $(".fourth-screen_feature-text-5").slideUp();
    $(".fr-icon").removeClass("disNone");
    $(".fr-icon-2").removeClass("disNone");
    $(".fr-icon-3").removeClass("disNone");
    $(".fr-icon-4").removeClass("disNone");
    $(".fr-icon-5").removeClass("disNone");
  });
});

const linkHover = document.querySelector(".link-screen_section1");
const linkHover2 = document.querySelector(".link-screen_section2");
const linkHover3 = document.querySelector(".link-screen_section3");
const linkHover4 = document.querySelector(".link-screen_section4");
const link = document.getElementById("section_link1");
const link2 = document.getElementById("section_link2");
const link3 = document.getElementById("section_link3");
const link4 = document.getElementById("section_link4");

linkHover.addEventListener("mouseover", () => {
  link.style.textDecoration = "underline";
});

linkHover.addEventListener("mouseleave", () => {
  link.style.textDecoration = "none";
});

linkHover2.addEventListener("mouseover", () => {
  link2.style.textDecoration = "underline";
});

linkHover2.addEventListener("mouseleave", () => {
  link2.style.textDecoration = "none";
});

linkHover3.addEventListener("mouseover", () => {
  link3.style.textDecoration = "underline";
});

linkHover3.addEventListener("mouseleave", () => {
  link3.style.textDecoration = "none";
});

linkHover4.addEventListener("mouseover", () => {
  link4.style.textDecoration = "underline";
});

linkHover4.addEventListener("mouseleave", () => {
  link4.style.textDecoration = "none";
});
