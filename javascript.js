const container = document.getElementById("container");

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

