function isSafe(board, row, col) {
    // Check if it's safe to place a queen at board[row][col]
    for (let i = 0; i < col; i++) {
      if (
        board[i] === row ||
        board[i] - i === row - col ||
        board[i] + i === row + col
      ) {
        return false;
      }
    }
    return true;
  }
  
  function solveNQueens(n) {
    const solutions = [];
  
    function solve(board, col) {
      if (col === n) {
        solutions.push([...board]);
        return;
      }
      for (let row = 0; row < n; row++) {
        if (isSafe(board, row, col)) {
          board[col] = row;
          solve(board, col + 1);
        }
      }
    }
  
    solve(new Array(n).fill(-1), 0);
    return solutions;
  }

//   let queen = []
  
  function formatSolutionsAsObjects(solutions) {
    const formattedSolutions = [];
    for (let idx = 0; idx < solutions.length; idx++) {
      const solution = solutions[idx];
      const formattedSolution = {};
      for (let col = 0; col < solution.length; col++) {
        const row = solution[col];
        formattedSolution[`x${col}y${row}`] = `queen queen-${col + 1} pressure`;
      }
      formattedSolutions.push(formattedSolution);
    }
    return formattedSolutions;
  }
  
  const solutions = solveNQueens(8);
  const formattedSolutions = formatSolutionsAsObjects(solutions);
  
  // Print all 92 solutions
  for (let idx = 0; idx < formattedSolutions.length; idx++) {
    // console.log(`Solution ${idx + 1}:`);
    const solution = formattedSolutions[idx];
    for (const key in solution) {
      if (solution.hasOwnProperty(key)) {
        console.log(`${key}: ${solution[key]}`);
        // queen.push(`${key}: ${solution[key]}`)
      }
    }
    console.log("\n");
  }
  
console.log(queen)
 