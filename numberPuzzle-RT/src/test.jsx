import React, { useState } from "react";

const Grid = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: 4 }, (_, row) =>
      Array.from({ length: 4 }, (_, col) => row * 4 + col + 1)
    )
  );

  const findSurroundingNumbers = (row, col) => {
    const surroundings = [];

    // Check west
    if (col > 0) {
      surroundings.push(grid[row][col - 1]);
    }

    // Check north
    if (row > 0) {
      surroundings.push(grid[row - 1][col]);
    }

    // Check east
    if (col < 3) {
      surroundings.push(grid[row][col + 1]);
    }

    // Check south
    if (row < 3) {
      surroundings.push(grid[row + 1][col]);
    }

    return surroundings;
  };

  const handleNumberClick = (row, col) => {
    const selectedNumber = grid[row][col];
    const surroundingNumbers = findSurroundingNumbers(row, col);
    console.log(`Selected number: ${selectedNumber}`);
    console.log(`Surrounding numbers: ${surroundingNumbers}`);
  };

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((number, colIndex) => (
            <div
              key={colIndex}
              className="grid-cell"
              onClick={() => handleNumberClick(rowIndex, colIndex)}
            >
              {number}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
