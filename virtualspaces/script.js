console.log("script attached to frontpage");

const cursor = document.getElementById("cursor");
let clickcounter = 0;

document.addEventListener("click", function() {
  if (clickcounter === 0) {
    document.getElementsByClassName("typewriter-text")[0].innerHTML =
      "WANNA GO MEET YOUR E-BUDDIES? 💦💕🌈";
    clickcounter += 1;
  } else {
    document.getElementsByClassName("typewriter-text")[0].innerHTML =
      '<a href="/virtualspaces/video-conferencing.html" class="newlink">click here</a>';
  }
});
