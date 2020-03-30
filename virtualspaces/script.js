console.log("script attached to frontpage");

const cursor = document.getElementById("cursor");

document.addEventListener("click", function() {
  document.getElementsByClassName("typewriter-text")[0].innerHTML =
    "WANNA GO MEET YOUR E-BUDDIEs? 💦💕🌈";
});

// document.addEventListener("mouseover", function(event) {
//   var mouseX = Math.round(event.clientX);
//   var mouseY = Math.round(event.clientY);
//   console.log(event.clientX, cursor.style.left);
//   cursor.style.left = mouseX + "px";
//   cursor.style.top = mouseY + "px";
//
//   console.log(event.clientX, cursor.style.left);
// });

function updateCursor(event) {
  var mouseX = Math.round(event.clientX);
  var mouseY = Math.round(event.clientY);
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  console.log(mouseX, mouseY);
}
