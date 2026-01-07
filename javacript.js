const CONTAINER_SIZE = 960;
const containerDiv = document.querySelector(".container");

containerDiv.style.cssText = `width: ${CONTAINER_SIZE}px; height: ${CONTAINER_SIZE}px`

function createGrid(gridDimension) {
    for (let i = 0; i < gridDimension ** 2; i++) {
        let squareDiv = document.createElement("div");
        containerDiv.append(squareDiv);
        let squareSize = CONTAINER_SIZE / gridDimension;
        squareDiv.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
        squareDiv.style.border = "1px solid black"; // For debugging

        // Make the squares change their color when mouse cursor passes over them
        squareDiv.addEventListener("mouseenter", () => {squareDiv.style.backgroundColor = "black"});
    }
}

createGrid(16)