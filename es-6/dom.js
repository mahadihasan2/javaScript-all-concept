document.getElementById("add-border").addEventListener("click", function () {
    const friendContainer = document.getElementById("friend-container");
    friendContainer.style.border = "2px solid yellow";
    friendContainer.style.padding = "10px"
});

function addbackgroundColor() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
    }
};

document.getElementById("add-friend").addEventListener("click", function () {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
    friendDiv.innerHTML = `
               <h3>New Friend</h3>
               <p>Blanditiis, eum!</p>`;
    container.appendChild(friendDiv)
})
