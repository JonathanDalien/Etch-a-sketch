const grid = document.querySelectorAll(".griditem")

grid.forEach(element => {
    element.addEventListener("mousedown", (el) => {
        console.log(el.target)
        el.target.style.backgroundColor = "black"
    })
});

