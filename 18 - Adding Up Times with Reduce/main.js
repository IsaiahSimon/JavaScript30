// Select all the nodes
const timeNodes = Array.from(document.querySelectorAll('[data-time]')); // convert NodeList into an Array of Strings

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat); // map strings to numbers
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds); // add up all seconds in the array

// Convert back into HH:MM:SS
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600); // only grab whole hours
  secondsLeft = secondsLeft % 3600; // remainder of seconds

  const mins = Math.floor(secondsLeft / 60); // only grab whole mins
  secondsLeft = secondsLeft % 60; // remainder of seconds

  console.log(hours, mins, secondsLeft); // final output