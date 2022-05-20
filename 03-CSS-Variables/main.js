// select all inputs on the page
const inputs = document.querySelectorAll('.controls input');

// main function
function handleUpdate(){
  // grab dataset of elements with a suffix "px", OR Nothing (to handle undefined)
  const suffix = this.dataset.sizing || ''; // get a suffix to concat

  // access root, style, set property of current variable to current value, append suffix 'px' if needed
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

// interate over each input and place smurfs, call main function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));






/* OLD CODE
// select all inputs on the page
const inputs = document.querySelectorAll('.controls input');

// main function
function handleUpdate(){
  // console.log(this.value);
  // grab dataset of elements with a suffix "px", OR Nothing (to handle undefined)
  const suffix = this.dataset.sizing || ''; // get a suffix to concat
  // console.log(suffix);

  // console.log(this.name); //access the HTML 'name' attribute of each input

  // access root, style, set property of current variable to current value, append suffix 'px' if needed
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

// interate over each input and place smurfs, call main function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
*/