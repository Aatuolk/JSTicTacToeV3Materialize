import "./styles.css";

let counter = 0;
var elem = document.getElementById("innerBar");
let width = 0;
let id;

function createTable() {
  const table = document.getElementById("board");
  for (let i = 0; i < 5; i++) {
    let row = table.insertRow();

    for (let j = 0; j < 5; j++) {
      row.insertCell();
    }
  }
  oncclick(table);
}

function populateCell(tableCell, table) {
  if (counter % 2 === 0) {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "X";
      tableCell.style.backgroundColor = "rgb(124, 252, 0)";
      counter++;
    } else {
      alert("Pick other cell");
    }
  } else {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "O";
      tableCell.style.backgroundColor = "rgb(250, 128, 114)";
      counter++;
    } else {
      alert("Pick other cell");
    }
  }
}

function oncclick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        populateCell(this, table);
        clearBarWidth();
        moveBar();
        if (counter > 8) {
          handleResultValidation();
        }
      };
    }
  }
}
createTable();

function clearTable() {
  document.getElementById("board").innerHTML = "";
  createTable();
}

function handleResultValidation() {
  let roundWon = false;
  let table = document.getElementById("board");
  for (let i = 0; i <= 4; i++) {
    let a = table.rows[i].cells[0].innerHTML;
    let b = table.rows[i].cells[1].innerHTML;
    let c = table.rows[i].cells[2].innerHTML;
    let d = table.rows[i].cells[3].innerHTML;
    let e = table.rows[i].cells[4].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWon = true;

      break;
    }
  }
  for (let i = 0; i <= 4; i++) {
    let a = table.rows[0].cells[i].innerHTML;
    let b = table.rows[1].cells[i].innerHTML;
    let c = table.rows[2].cells[i].innerHTML;
    let d = table.rows[3].cells[i].innerHTML;
    let e = table.rows[4].cells[i].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWon = true;

      break;
    }
  }
  let a = table.rows[0].cells[0].innerHTML;
  let b = table.rows[1].cells[1].innerHTML;
  let c = table.rows[2].cells[2].innerHTML;
  let d = table.rows[3].cells[3].innerHTML;
  let e = table.rows[4].cells[4].innerHTML;

  if (a === b && b === c && c === d && d === e) {
    roundWon = true;
  }
  let f = table.rows[0].cells[4].innerHTML;
  let g = table.rows[1].cells[3].innerHTML;
  let h = table.rows[2].cells[2].innerHTML;
  let i = table.rows[3].cells[1].innerHTML;
  let j = table.rows[4].cells[0].innerHTML;

  if (f === g && g === h && h === i && i === j) {
    roundWon = true;
  }

  if (roundWon === true) {
    if (counter % 2 === 0) {
      counter = 0;
      alert("Player 2 won!");
      clearTable();
    } else {
      counter = 0;
      alert("Player 1 won!");
      clearTable();
    }
    return;
  }
}

function moveBar() {
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      counter++;
      clearBarWidth();
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

function clearBarWidth() {
  width = 0;
  clearInterval(id);
  elem.style.width = width + "%";
}
