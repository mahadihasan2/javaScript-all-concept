document.getElementById("delete-post").addEventListener("click", function () {
    document.getElementById("secreat-info").style.display = "none";
})

// focus
document.getElementById("delete-confirm").addEventListener("focus", function () {
    document.body.style.backgroundColor = "red";
})

// Blur
document.getElementById("delete-confirm").addEventListener("blur", function () {
    document.body.style.backgroundColor = "white";
})


// Keydown
// document.getElementById("delete-confirm").addEventListener("keydown", function () {
//     const keyDown = document.getElementById("delete-confirm")
//     console.log(keyDown.value);
// })


// Keypress
// document.getElementById("delete-confirm").addEventListener("keypress", function () {
//     const keypress = document.getElementById("delete-confirm")
//     console.log(keypress.value);
// })



// Keyup
document.getElementById("delete-confirm").addEventListener("keyup", function (event) {

    // console.log(event.target.value)
    // const keyUp = document.getElementById("delete-confirm")
    // console.log(keyUp.value);
    const deletebtn = document.getElementById("delete-post")
    if (event.target.value == "delete") {
        deletebtn.removeAttribute("disabled")
    }
    else {
        deletebtn.setAttribute("disabled", true)
    }
})