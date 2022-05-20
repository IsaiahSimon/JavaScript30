const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Remove the articles from the front of band names (a, the, an)
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim(); // regex carat ^ means "starts with"
}

// Sort by stripped band names
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1); // manually implement comparison for sort

// Update the HTML in DOM
document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);