const cellsContainer = document.getElementById("box-target");
const gridButton = document.getElementById("grid-button");
const difficultySelect = document.getElementById("difficulty");
let bombs = [];

// GENERAL ARRAY

function generateArray(from, to, step) {
  let whitelist = [];
  for (let i = from; i <= to; i += step) {
    whitelist.push(i);
  }
  return whitelist;
}

// GRILL + WHITELIST EVENTS

gridButton.addEventListener("click", () => {
  let totalCells = parseInt(difficultySelect.value);
  const whitelist = generateArray(1, totalCells, 1);
  generateGrid(totalCells, cellsContainer, whitelist);
  bombs = bombsArray(totalCells);
  console.log(bombs);
});
