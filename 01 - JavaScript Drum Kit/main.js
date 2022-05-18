function playSound(e){
  let audio;
  let key;

  if (e instanceof KeyboardEvent) {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  }

  if (e instanceof MouseEvent){
    const drumKeyCode = e.currentTarget.getAttribute("data-key");
    audio = document.querySelector(`audio[data-key="${drumKeyCode}"]`)
    key = document.querySelector(`.key[data-key="${drumKeyCode}"]`)
  }

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind audio to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return; //skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

let numOfDrumButtons = document.querySelectorAll(".key").length;
for (let i = 0; i<numOfDrumButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", playSound);
}
