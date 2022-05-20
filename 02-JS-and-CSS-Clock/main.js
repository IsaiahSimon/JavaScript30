// Select clock hands
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function moveClockHands(){
  const now = new Date(); // get current date

  // Second Hand
  let seconds = now.getSeconds(); // get seconds of current minute
  let secondsDegrees = ((seconds / 60) * 360) + 90; // convert %seconds to % degrees, fix CSS 90deg rotation offset
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // position the second-hand every second

  // Minute Hand
  let mins = now.getMinutes(); // get minutes of current hour
  let minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; // convert %mins to % degrees, allow hand to "creep", fix CSS 90deg rotation offset
  minHand.style.transform = `rotate(${minsDegrees}deg)`; // position the min-hand every minute

  // Hour Hand
  let hours = now.getHours; // get hours of current day
  let hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90; // convert %hours to % degrees, allow hand to "creep", fix CSS 90deg rotation offset
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // position the hour-hand every hour

  // Remove "stutter" when hand reaches 12 'o clock position
  if(seconds === 0){
    secondsDegrees = 90;
    secondHand.classList.add('no-transition');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    setTimeout( function () {secondHand.classList.remove('no-transition');},1000)
  }

  if(mins === 0){
    minsDegrees = 90;
    minHand.classList.add('no-transition');
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    setTimeout( function () {minHand.classList.remove('no-transition');},1000)
  }

  if(hours === 12){
    hoursDegrees = 90;
    hourHand.classList.add('no-transition');
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    setTimeout( function () {hourHand.classList.remove('no-transition');},1000)
  }
}

// Set function call interval
setInterval(moveClockHands, 1000);


/* OLD CODE
const secondHand = document.querySelector('.second-hand'); //select second-hand element
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date(); // gets current date

  // Second Hand
  const seconds = now.getSeconds(); // get seconds of current minute
  // const secondsDegrees = (seconds / 60) // get percentage of seconds
  // const secondsDegrees = (seconds / 60) * 360 // % seconds used for % of 360 degrees
  // const secondsDegrees = ((seconds / 60) * 360);
  const secondsDegrees = ((seconds / 60) * 360) + 90; // account for the 90deg rotation offset to turn hands vertical
  // secondHand.style.transform = `rotate(100deg)`; // apply styles to second-hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // move the second-hand every second

  // Minute Hand
  const mins = now.getMinutes();
  // const minsDegrees = ((mins / 60) * 360) + 90;
  // const minsDegrees = ((mins / 60) * 360) + 90;
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; // ((seconds/60)*6) allows hand to "creep up" as seconds go by
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  // Hour Hand
  const hours = now.getHours();
  // const hoursDegrees = ((hours / 12) * 360) + 90;
  // const hoursDegrees = ((hours / 12) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90; // ((mins/60)*30) allows hand to "creep up" as seconds go by
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
*/