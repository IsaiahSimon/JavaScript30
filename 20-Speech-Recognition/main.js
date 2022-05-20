window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; // populates while speaking instead of afterwards
recognition.lang = 'en-US'

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p); // add words to the DOM

 // listen for a result, must be run through a server
recognition.addEventListener('result', e => {
  // console.log(e.results);

  // convert the recognition events into 1 large string
  const transcript = Array.from(e.results)
    .map(result => result[0]) // grab 1st element from each rec event
    .map(result => result.transcript)
    .join(''); // join all substrings together

  p.textContent = transcript; // visualizes speech in the DOM (note it gets overwritten)

  //check if result is Final, appends new paragraphs instead of overwriting
  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  // **
  // console.log(transcript);
})

// Start the fn again when there is a pause
recognition.addEventListener('end', recognition.start);

// prevents running on pageload, to prompt user for microphone access
recognition.start();


// Challenge: find something cool to do with this code
// - listen for specific words to run a function, like getting the weather

// **
// if(transript.includes('get the weather')) {
//   console.log('Getting the weather...');
// }