const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch JSON data
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data)) // spread into push method


function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi') // global, insensitive flags

    // check if either condition is true
    return place.city.match(regex) || place.state.match(regex) // runtime pattern matching, versus on page load
  })
}

// just a function to add commas in numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// display function
function displayMatches(){
  // call findMatches
  const matchArray = findMatches(this.value, cities);

  // map over array and generate HTML
  const html = matchArray.map(place => {
    // add highlighting by replacing matched word with a span with class .hl and matched word
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)  // replace with span after found
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)  // replace with span after found

    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `
  }).join('');        // convert from an array into 1 big string

  // update the inner HTML of .suggesstions class
  suggestions.innerHTML = html;

}

// select HTML elements
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// display matches when the <input> changes
searchInput.addEventListener('change', displayMatches);
// also display matches on keyup
searchInput.addEventListener('keyup', displayMatches);