// console.log("Api js connected")
// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data));
}
function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayUser(data) {
    const ul = document.getElementById("users")
    // console.log(data);
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement("li");
        li.innerText = `userName: ${user.name} , E-mail: ${user.email}`;
        ul.appendChild(li);
    }

}

// Load Photos 
function loadPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => displayPhotos(data));
};

function displayPhotos(data) {
    // console.log(data);
    const div = document.getElementById("photos");
    for (photo of data) {
        // console.log(photo);
        const li = document.createElement("li");
        li.innerText = `photoAlbumId: ${photo.albumId} And PhotoTitle: ${photo.title}`
        div.appendChild(li);
    }
}

// CRUD Operation 

// Create a data // post data 
function addPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: "This is my new post",
            body: "Here is the body Section",
            userId: 01,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
        .then(res => res.json())
        .then(data => console.log(data));
};
addPost()