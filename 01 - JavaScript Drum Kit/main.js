window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind audio to the start
  audio.play();

  key.classList.add('playing');
  // key.classList.remove('playing');
  // key.classList.toggle('playing');
  // setTimeout(function(){
  // }, 0.07)
});

function removeTransition(e){
  // console.log(e);
  if(e.propertyName !== 'transform') return; //skip it if it's not a transform
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// keys.addEventListener('transform');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));