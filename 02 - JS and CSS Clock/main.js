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