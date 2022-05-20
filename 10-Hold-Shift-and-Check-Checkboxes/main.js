// Select all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; //gets reassigned constantly

function handleCheck(e){
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;

  if(e.shiftKey && this.checked) {
    // Loop through every checkbox everytime, look for 1st checked
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      // Toggle inBetween
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween //makes it a toggle, it will get set to the opposite of its current state.
        console.log('starting to check them inBetween!');
      }

      // Checks off a box if "flag variable" inBetween becomes true
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

// Listen for when a checkbox gets clicked or changed, calls handleCheck function
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
