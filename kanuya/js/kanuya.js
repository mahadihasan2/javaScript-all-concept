const loadQuoutes = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayLoadQuotes(data))
}

// loadQuoutes();
const displayLoadQuotes = (quotes) => {
    // console.log(quotes);
    // for(const quote for )
    const qouteElement = document.getElementById("post");
    qouteElement.innerText = quotes.quote;

}