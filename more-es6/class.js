class Support {
    name;
    role = "support secessions";
    address = 'mirpur-10';
    salary;
    constructor(name, address, salary) {
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
    startSecession() {
        console.log(this.name, "start the support Secession");
    }

}

const amirKhan = new Support("Amir khan", "BD", 150000);
const solaimanKhan = new Support("Solaiman Khan", "Dubai", 30000);
const srk = new Support("Sarukh Khan", "India", 34000);
console.log(solaimanKhan);
console.log(amirKhan)
console.log(srk);
amirKhan.startSecession();
solaimanKhan.startSecession();
