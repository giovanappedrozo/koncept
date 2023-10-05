var homeBackground = $("#home-section");

var backgroundImages = new Array(
  "home-background.jpg",
  "home-background-2.jpg",
  "home-background-3.jpg"
);

var current = 0;

function setBackgroundImage(index) {
  homeBackground.css(
    "background-image",
    `url(assets/img/${backgroundImages[index]})`
  );
}

function nextBackground() {
  current++;
  current = current % backgroundImages.length;
  setBackgroundImage(current);
}

setInterval(nextBackground, 20000);

setBackgroundImage(0);
