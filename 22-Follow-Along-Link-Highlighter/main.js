const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
  // console.log('Highlight!!');
  // console.log(this);

  // Get the coordinates of current anchor element
  const linkCoords = this.getBoundingClientRect();
  // console.log(linkCoords);

  // Adjust coordinates for user scrolling
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  // Apply the styles
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  // Apply transitions to move the span
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // x,y

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

// Note: This is the base for the Stripe project later on..