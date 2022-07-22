const loadCountryData = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountry(data));

}

loadCountryData();
const displayCountry = counties => {
    // for (const country of counties) {
    //     console.log(country);
    // }
    // const countries = data
    // console.log(countries);
    counties.forEach(country => {
        // console.log(country);
        const countryDiv = document.getElementById("country");
        const div = document.createElement("div")
        // const h3 = document.createElement("h3");
        div.classList.add("countryStyle");
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement("p");
        // p.innerText = country.capital
        // div.appendChild(p);
        div.innerHTML = `
          <h2>${country.name.common}</h2>
          <p>${country.capital}</p>
          <button onClick="loadCountryByName('${country.name.common}')">Details</button>
        `
        countryDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country)
    const countryDiv = document.getElementById("country-details");
    countryDiv.innerHTML = `
    <h3>Area: ${country.area}</h3>
    <p>Name: ${country.name.common}</p>
    <img width="200px" src="${country.flags.png}">
    `;

}