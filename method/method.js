// Object is the Method of JavaSCript 
const Student = {
    id: 1230,
    name: "Mahadi Hasan",
    money: 5600,
    age: 24,
    major: "Mathematics",
    isRich: true,
    subjects: ["English", "Chemistry", "Physics", "Bangla", "Ict"],
    bestFriend: {
        name: "Ibrahim",
        age: 22,
        work: "MM Fashion Dhaka Ltd",
        salary: 20000

    },
    takeExam: function () {
        console.log(this.name, "Taking Exam");

    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money
    }

}

Student.takeExam()

const remaining1 = Student.treatDey(2100, 100);
const remaining2 = Student.treatDey(400, 20);
console.log(remaining2);