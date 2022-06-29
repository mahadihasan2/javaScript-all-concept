document.getElementById("second-item").addEventListener("click", function (event) {
    console.log("Second Item Click");
    // event.stopPropagation();
    event.stopImmediatePropagation();

})
document.getElementById("second-item").addEventListener("click", function () {
    console.log("Second Item Click-1");
})
document.getElementById("second-item").addEventListener("click", function () {
    console.log("Second Item Click-2");
})
document.getElementById("second-item").addEventListener("click", function () {
    console.log("Second Item Click-3");
})

// Ul Clicked
document.getElementById("list-container").addEventListener("click", function () {
    console.log("Ul clicked");
})

// Section Clicked 
document.getElementById("section-clicked").addEventListener("click", function () {
    console.log("Section Clicked");
})