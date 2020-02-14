let inputBox = document.querySelector("#enterCity");
const list = document.querySelector(".list-of-cities");
const placeCount = document.querySelector("span#number-of-cities");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

inputBox.addEventListener("keyup", displayMatches);

function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, "ig");
  return cities.filter(place => {
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  if (this.value === "") {
    placeCount.innerHTML = `Count: 0`;
    list.style.display = "none";
    placeCount.style.display = "none";
    
  } else {
    list.style.display = "block";
    placeCount.style.display = "block";
    const numberOfPlaces = matchArray.length;
    const html = matchArray
      .map(place => {
        return `
          <li class="city">${place.city}, ${place.state}</li>
          `;
      })
      .join("");
    list.innerHTML = html;
    placeCount.innerHTML = `Count: ${numberOfPlaces}`;
  }
}
