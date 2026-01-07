const CONTAINER_SIZE = 600;
const containerDiv = document.querySelector(".container");

containerDiv.style.cssText = `width: ${CONTAINER_SIZE}px; height: ${CONTAINER_SIZE}px`

function createGrid(gridDimension) {
    for (let i = 0; i < gridDimension ** 2; i++) {
        let squareDiv = document.createElement("div");
        containerDiv.append(squareDiv);
        let squareSize = CONTAINER_SIZE / gridDimension;
        squareDiv.style.cssText = `box-sizing: border-box; width: ${squareSize}px; height: ${squareSize}px;`;
        squareDiv.style.border = "1px solid black"; // For debugging

        // Make the squares change their color when mouse cursor passes over them
        squareDiv.addEventListener("mouseenter", () => {squareDiv.style.backgroundColor = "black"});
    }
}

function resetGrid() {
    // Prompt user for grid's dimension and check validity
    let dimension = Number(prompt("Number of squares per side (1-100)"));
    if (!Number.isInteger(dimension) || dimension < 1 || dimension > 100) {
        alert("Please input a valid number");
        return;
    }

    // Rewrite the grid
    containerDiv.innerHTML = "";
    createGrid(dimension);
}

document.querySelector("button").onclick = resetGrid;

createGrid(16)