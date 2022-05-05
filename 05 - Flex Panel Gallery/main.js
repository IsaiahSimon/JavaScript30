// grab all the panels
const panels = document.querySelectorAll('.panel');

// toggle the .open class
function toggleOpen() {
  //console.log('Hello');
  this.classList.toggle('open');
}

// loop over all panels, and listen for a click on each one, then run the toggle function.
// note: its not 'toggleOpen' because that would run on Page Load, we want it to only run when panel is clicked!
panels.forEach(panel => panel.addEventListener('click', toggleOpen));


// Step 2: Bring in words from top and bottom

// toggle the .open-active
function toggleActive(e){
  // see all transitions that are happening in the class .open (font-size AND flex-grow)
  //console.log(e.propertyName);

  // check if properName incldes 'flex', then toggle .open-active
  // note: safari says 'flex', which others say 'flex-grow', so .includes() is used instead of e.propertyName === 'flex-grow'
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    this.classList.toggle('color-full');
  }
}

// listen for the transitionend event, toggle class .open-active
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
