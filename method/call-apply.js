const kibriya = {
    id: 450,
    name: "kibriya Hasan",
    money: 7000,
    takaDey: function (expanse, boksis, tax) {
        this.money = this.money - expanse - boksis - tax
        console.log(this)
        return this.money
    }
}

const hasan = {
    name: "Hasan",
    id: 450,
    money: 9000,
    job: "Seo expert"
}

const ibrahim = {
    name: "Ibrahim",
    id: 670,
    money: 5000,
    job: "BussinessMan"
}

// Call 

/* kibriya.takaDey.call(hasan, 1000, 200, 100)
kibriya.takaDey.call(hasan, 100, 10, 5)
kibriya.takaDey.call(ibrahim, 100, 10, 5) */
// takaDey()

// Apply 
kibriya.takaDey.apply(hasan, [300, 60, 20])
kibriya.takaDey.apply(ibrahim, [400, 70, 30])