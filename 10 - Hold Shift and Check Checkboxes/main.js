//select all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//check that we have all the inputs
//console.log(checkboxes);

// keeps track of 1st click on checkbox while checking 2nd checkbox
let lastChecked; //gets reassigned constantly

function handleCheck(e){
  //console.log(e)
  //check if they had the shift key down
  // AND check that they are checking a box

  let inBetween = false;

  if(e.shiftKey && this.checked) {
    // go ahead and do what we please

    //loop through every checkbox everytime, look for 1st checked
    checkboxes.forEach(checkbox => {
      console.log(checkbox);

      //set inBetween to true
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween //makes it a toggle, it will get set to the opposite of its current state.
        console.log('starting to check them inBetween!');
      }

      // actually checksoff a box if our "flag variable" inBetween become true
      if(inBetween){
        checkbox.checked = true;
      }
    });

    //checkoff all the boxes in between 1st and last
    //inBetween variable is only true when the loop in bestween 1st click and 2nd click.


  }

  lastChecked = this;
}


// Listen for when a checkbox gets clicked or changed, calls handleCheck function
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
