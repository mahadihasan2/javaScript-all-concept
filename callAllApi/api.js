// console.log("This is first javaScript Program")
const loadSingleUser = () => {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => displayseeUser(data.results[0]))
}

loadSingleUser()

const displayseeUser = user => {
    console.log(user)
    console.log(user.gender)
}

// Many data load one function 

const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)

        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}
loadMeals("fish")

const displayMeal = meals => {
    const container = document.getElementById("meals")
    meals.forEach(meal => {
        const div = document.createElement("div")
        div.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <button onClick="loadMEalDetails('${meal.strMeal}')">click Me </button>
    `

        container.appendChild(div);
    })
}

const loadMEalDetails = mealName => {
    console.log(mealName);
}