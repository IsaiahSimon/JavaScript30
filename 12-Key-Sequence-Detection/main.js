const pressed = [];
const secretCode = 'mirsada';
const h1 = document.querySelector('h1');
const body = document.querySelector('body');


window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // trim the array to the length of the secret code

  if (pressed.join('').includes(secretCode)) {  // checks if the word in the array contains secret code
    cornify_add();
    body.classList.add('corns');
  }
  console.log(pressed);
  h1.innerText = pressed.join('-');

})

// Notes:

/*
// Algo:
// get name of the key the user pressed
// create an array to store pressed keys
// push key names into an array
// set the secret code we are looking for
// trim the array to the length of the secret code
// check if the word in the array contains secret code
// do something on screen when secret code matches

// create an array to store pressed keys
const pressed = [];
// set the secret code we are looking for
const secretCode = 'isimondev'

window.addEventListener('keyup', (e) => {

  // push names into an array
  pressed.push(e.key);

  // trim the array to the length of the secret code
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  // checks if the word in the array contains secret code
  if (pressed.join('').includes(secretCode)) {
    console.log('Hidden code was entered!');

    // do something on screen when secret code matches
    cornify_add();
  }

  // get name of the key the user pressed
  console.log(pressed);
})

// window.addEventListener('keyup', (e) => {
//   console.log(e.key);
//   pressed.push(e.key);
//   pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
//   console.log(pressed);
// })

*/