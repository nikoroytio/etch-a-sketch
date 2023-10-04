const container = document.getElementById("container");
const reset = document.getElementById("reset")
let isDrawing = false;

function colorSquare(event) {
    if (!isDrawing) return;
    let square = event.target;
    if (!square.classList.contains("square")) return;  // Additional safety check

    square.classList.add("drawn");
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = "#" + randomNumber.padStart(6, 0);   
    square.style.backgroundColor = randColor;
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", colorSquare);
        container.appendChild(square);

    };
};


container.addEventListener("mousedown", () => isDrawing = true);
container.addEventListener("mouseup", () => isDrawing = false);
container.addEventListener("mouseleave", () => isDrawing = false);


reset.addEventListener("click", () => {
    let userInput;
    do {
       userInput = prompt("Set the new width as squares. The allowed maximum is 100 squares");

    } while (isNaN(userInput) || userInput.trim() === "" || userInput > 100);

    // this is for clearing the container //
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mousemove", colorSquare);
            container.appendChild(square);
            };

    };

});

