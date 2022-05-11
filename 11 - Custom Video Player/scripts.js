/* Get Our Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]'); // select by attribute
const ranges = document.querySelectorAll('.player__slider');

/* Build out functions */

// function togglePlay(){
//   if(video.paused){
//     video.play();
//   }else{
//     video.pause();
//   }
// }
// refactor
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle .textContent = icon;
  //console.log('update the button');
}

function skip(){
  //console.log('skipping')
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  video[this.name] = this.value;

  //console.log(this.value);
  //console.log(this.name);
}

// update progress bar in realtime using flex-basis value
function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100; // currentTime and duration are just properties on the video
  // update progress bar
  progressBar.style.flexBasis = `${percent}%`; // append the styles to progress bar
}

// Scrub: update video when progress bar is dragged
function scrub(e){
  //console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration // offsetX is position from mouse, offsetWidth is total width

  // update the video
  video.currentTime = scrubTime;

}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // listen to the video for whenever it is paused (more dynamic than just listening for togglePlay)
video.addEventListener('pause', updateButton); // listen to the video for whenever it is paused (more dynamic than just listening for togglePlay)
video.addEventListener('timeupdate', handleProgress); // listen for the timeupdate event to trigger handleProgress

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // TODO: add a flag for adjusting clickdown -> update property -> clickup

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // this checks mousedown 1st, before moving on to running scrub()
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// Challenge Feature: Add a working fullscreen button