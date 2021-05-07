fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesContainer = document.getElementById("countries");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement("div");
        countryDiv.className = 'country';

        // const h3 = document.createElement("h3");
        // h3.innerText = country.name;
        // const p = document.createElement("p");
        // p.innerText = country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="country-capital">Capital: ${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesContainer.appendChild(countryDiv);
    }
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))

}
const renderCountryInfo = country => {
    const countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `
} 