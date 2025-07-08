/********* Variables *********/
let gameType = "";
let direction = "";
let robot = $(".robot");
/********* Variables *********/

$(".sp").click(function () {
  const position = $(this).offset();
  let off = { top: 0, left: 0 };

  if ($(this)[0].parentNode.classList.contains("sf__line1")) {
    off.top = 60;
    off.left = 75;
  } else if ($(this)[0].parentNode.classList.contains("sf__line2")) {
    off.top = 30;
    off.left = 75;
  }

  $(".robot").css("top", `${position.top + off.top}px`);
  $(".robot").css("left", `${position.left + off.left}px`);
});

$("#game").on("change", function () {
  gameType = $(this).val();
});

$("#direction").on("change", function () {
  direction = $(this).val();

  if (direction === "Clockwise") {
    $(".robot").removeClass("clockwise");
  } else {
    $(".robot").addClass("clockwise");
  }
});

console.log(robot[0]);
