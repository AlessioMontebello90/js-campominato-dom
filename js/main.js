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

// GRILL

function generateGrid(totalCells, cellsContainer, whitelist) {
  cellsContainer.innerHTML = "";

  while (whitelist.length) {
    const randomIndex = generateRandomNumber(0, whitelist.length - 1);
    const randomValue = whitelist[randomIndex];
    whitelist.splice(randomIndex, 1);
    createCell(cellsContainer, randomValue, totalCells);
  }
}

// CELL

function createCell(cellsContainer, i, totalCells) {

    const myCell = document.createElement("div");
    // myCell.innerText = index;
    myCell.setAttribute("data-index", i)
    myCell.classList.add("cell");
    myCell.classList.add("cell-" + totalCells);


    // EVENT LISTENER CELL

    myCell.addEventListener("click", () => {
        const index = parseInt(myCell.getAttribute("data-index"));
        myCell.innerText = index;
        myCell.classList.add(index % 2 == 0 ? "background-even" : "background-odd");
        console.log("Hai cliccato il numero " + i);
        if (bombs.includes(i)) {
            alert ("Bomb");
        };
    });

    cellsContainer.append(myCell);
    return myCell;

    // RANDOM NUMBERS

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
};

// ARRAY BOMBS

function bombsArray (max) {
    const bombs = [];
    while (bombs.length < 16) {
      let randomNumber = generateRandomNumber (1, max);

      if (!bombs.includes(randomNumber))
      bombs.push(randomNumber)
    };

    return bombs;
};

function endGame () {};
