const items = document.getElementsByClassName("item");
// 1st Way 
for (const item of items) {
    // console.log(items)
    item.addEventListener("click", function (e) {
        // console.log('Removed item');
        // document.getElementById("list-item-container").removeChild(item);
        // 2nd way
        e.target.parentNode.removeChild(e.target);
    })
}

// add the list item and click button 
document.getElementById("add-item").addEventListener("click", function () {
    const li = document.createElement("li");
    li.innerText = 'Brand New item';
    li.classList.add('item');
    const parent = document.getElementById("list-item-container");
    parent.appendChild(li);

    // for (const item of items) {
    //     // console.log(items)
    //     item.addEventListener("click", function (e) {
    //         // console.log('Removed item');
    //         // document.getElementById("list-item-container").removeChild(item);
    //         // 2nd way
    //         e.target.parentNode.removeChild(e.target);
    //     })
    // }

    document.getElementById("list-item-container").addEventListener("click", function (event) {
        console.log(event.target);
        event.target.parentNode.removeChild(event.target);
    })
})