const container = document.getElementById("container");
const reset = document.getElementById("reset")

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            square.classList.add("drawn");
        });
        container.appendChild(square);
    };
};


reset.addEventListener("click", () => {
    let userInput;
    do {
        prompt("Set the new width as squares. The allowed maximum is 100 squares")
    }
    while (isNaN(userInput) || userInput.trim() === "" || userInput > 100);

})

