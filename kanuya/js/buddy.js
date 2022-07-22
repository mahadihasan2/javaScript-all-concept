const loadDataOfBuddy = () => {
    fetch("https://randomuser.me/api/?results=100")
        .then(res => res.json())
        .then(data => dispalayDataOfBuddy(data));
}
loadDataOfBuddy();

const dispalayDataOfBuddy = data => {
    const buddies = data.results;
    console.log(buddies);
    const divElementBuddies = document.getElementById("buddies");
    for (const buddy of buddies) {
        console.log(buddy.email);
        const p = document.createElement('p');
        p.innerText = `Name:${buddy.name.first} ${buddy.name.last} ${buddy.name.title} and Email:${buddy.email}`;
        divElementBuddies.appendChild(p);
    }
}