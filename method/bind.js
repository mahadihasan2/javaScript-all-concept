const students = {
    id: 104,
    name: "Mahadi Hasan",
    money: 4000,
    treatDey: function (expanse) {
        this.money = this.money - expanse
        console.log(this)
        return this.money

    }
}

const heroAlom = {
    name: "Hero Alam",
    money: 5000,
    id: 120
}

const maadiHasan = {
    name: "Jamal",
    id: 450,
    money: 9000,
    work: "Web-development"
}

students.treatDey(100)

const heroAlomTratDey = students.treatDey.bind(heroAlom);
// console.log(heroAlomTratDey);
heroAlomTratDey(500)
heroAlomTratDey(500)
heroAlomTratDey(600)
students.treatDey(400)
const mahadiTearDey = students.treatDey.bind(maadiHasan)
mahadiTearDey(500)
mahadiTearDey(900)