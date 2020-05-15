$(document).ready(function () {
  // fix menu when passed
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function () {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function () {
      $(".fixed.menu").transition("fade out");
    },
  });

  // create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

  $(".special.cards .image").dimmer({
    on: "hover",
  });
//added event listener to the project cards
  let projects = document.querySelector("#work");
  projects.addEventListener("mouseenter", function () {
    $(".special.cards .card").transition({
      animation: "jiggle",
      duration: 600,
      interval: 100,
    });
  });

  //added event listener to the skills bar
  let skills = document.querySelector("#skills-section");
  skills.addEventListener("mouseenter", function () {
    $("li .bar").transition({
      animation: "html 2s",
    });
  });

  //closing tag for document.ready
});
