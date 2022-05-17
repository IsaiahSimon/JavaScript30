// Select elements
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // get existing items on page load or fallback to empty array

function addItem(e) {
  e.preventDefault(); // prevent default behavior of forms (reloading)
  // get the value of the input element within form
  const text = (this.querySelector('[name=item]')).value; // "this" refers to the form element

  // create an object
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // clears out the form
}

// Create the HTML
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

// Persist the toggle state
function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index; // access the data-index of each checkbox
  items[index].done = !items[index].done; // toggle
  localStorage.setItem('items', JSON.stringify(items)); // make persistent
  populateList(items, itemsList); // visually update page
}

// Event Listeners
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);


// Challenge:
// Add Buttons 'delete all', 'check all', 'uncheck all'