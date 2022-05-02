const secondHand = document.querySelector('.second-hand'); //select second-hand element

function setDate(){
  const now = new Date(); // gets current date
  const seconds = now.getSeconds(); // get seconds of current minute
  // const secondsDegrees = (seconds / 60) // get percentage of seconds
  // const secondsDegrees = (seconds / 60) * 360 // % seconds used for % of 360 degrees
  // const secondsDegrees = ((seconds / 60) * 360);
  const secondsDegrees = ((seconds / 60) * 360) + 90; // account for the 90deg rotation offset to turn hands vertical


  // secondHand.style.transform = `rotate(100deg)`; // apply styles to second-hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // move the second-hand every second
}

setInterval(setDate, 1000);