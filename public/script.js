let squares = [],
  queenClassNames = [1, 2, 3, 4, 5, 6, 7, 8].map(i => "queen-" + i);

let squaresDom = document.getElementsByClassName("square");
for (let i = 0; i < 8; i++) {
  squares[i] = [];
  for (let j = 0; j < 8; j++) {
    squares[i][j] = squaresDom[i * 8 + j];
    squares[i][j].onclick = onSquareClick.bind(null, i, j);
  }
}



// Contains indices of queens on the board
queenIndices = new Set();

function getNextQueenIndex() {
  for (let i=1; i<=8; i++) {
    if (!queenIndices.has(i)) {
      queenIndices.add(i);
      return i;
    }
  }
  return -1;
}

function removeQueenIndex(index) {
  queenIndices.delete(index); 
}



function getSquare(x, y) {
  return squares && squares[x][y];
}

function getLinkedSquares(x, y) {
  let linked = [];

  // Rank
  for (let j = 0; j < 8; j++) {
    linked.push(getSquare(x, j));
  }

  // File
  for (let i = 0; i < 8; i++) {
    // Don't duplicate
    if (i != x) linked.push(getSquare(i, y));
  }

  // Function that returns true, if arguments lie between 0 and 7
  let betw07 = (x, y) => x >= 0 && x <= 7 && (y >= 0 && y <= 7);

  //Diagonals
  for (let dist = 1; dist < 8; dist++) {
    if (betw07(x - dist, y - dist)) linked.push(getSquare(x - dist, y - dist));
    if (betw07(x - dist, y + dist)) linked.push(getSquare(x - dist, y + dist));
    if (betw07(x + dist, y - dist)) linked.push(getSquare(x + dist, y - dist));
    if (betw07(x + dist, y + dist)) linked.push(getSquare(x + dist, y + dist));
  }

  return linked;
}

function hasQueen(x, y) {
  return getSquare(x, y).classList.contains("queen");
}

function hasQueenPressure(x, y) {
  let sqs = getLinkedSquares(x, y);
  for (let sq of sqs) {
    if (sq.classList.contains("queen")) return true;
  }
  return false;
}

function addQueenPressureSquare(square) {
  square.classList.add("pressure");
}

function addQueenSquare(x, y, number) {
  let sq = getSquare(x, y);

  sq.classList.add("queen");
  sq.classList.add("queen-" + number);
  addQueenPressureSquare(sq);
}

function addQueen(x, y) {
  let qind = getNextQueenIndex();
  addQueenSquare(x, y, qind);

  let affectedSquares = getLinkedSquares(x, y);
  for (let sq of affectedSquares) {
    addQueenPressureSquare(sq);
  }
}

function tryRemoveQueenPressure(x, y) {
  if (hasQueenPressure(x, y)) return;
  getSquare(x, y).classList.remove("pressure");
}

function removeQueenSquare(x, y) {
  let queenSquare = getSquare(x, y);
  queenSquare.classList.remove("queen");

  let affectedSquares = getLinkedSquares(x, y);
  for (let sq of affectedSquares) {
    let sx = parseInt(sq.getAttribute("x")),
      sy = parseInt(sq.getAttribute("y"));
    tryRemoveQueenPressure(sx, sy);
  }

  for (let cn of queenClassNames) {
    if (queenSquare.classList.contains(cn)) {
      queenSquare.classList.remove(cn);
      return cn.split("-")[1];
    }
  }
}

function removeQueen(x, y) {
  let qind = parseInt(removeQueenSquare(x, y));
  removeQueenIndex(qind);
  let affectedSquares = getLinkedSquares(x, y);
  for (let sq of affectedSquares) {
    removeQueenSquare(x, y);
  }
}

function onSquareClick(x, y) {
  if (hasQueen(x, y)) {
    removeQueen(x, y);
    return;
  }

  if (hasQueenPressure(x, y)) return;
  addQueen(x, y);
}