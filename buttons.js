// Get modal elements
var controlsModal = document.getElementById("controls-modal");
var aboutModal = document.getElementById("about-modal");
var playButton = document.getElementById("play-button");

// Get close buttons
var controlsCloseButton = document.getElementsByClassName("close-button")[0];
var aboutCloseButton = document.getElementsByClassName("close-button")[1];

// Get buttons
var controlsButton = document.getElementById("controls-button");
var aboutButton = document.getElementById("about-button");

function startGame(){
    window.location.href = 'game.html';
}

// When the user clicks on the controls button, open the controls modal
controlsButton.onclick = function(){
  controlsModal.style.display = "block";
}

// When the user clicks on the about button, open the about modal
aboutButton.onclick = function() {
  aboutModal.style.display = "block";
}

// When the user clicks on the play button, start the game
playButton.onclick = function() {
  startGame();
}

// When the user clicks on the close button, close the modal
controlsCloseButton.onclick = function() {
  controlsModal.style.display = "none";
}

aboutCloseButton.onclick = function() {
  aboutModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == controlsModal) {
    controlsModal.style.display = "none";
  }
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
}