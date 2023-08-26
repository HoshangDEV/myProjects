import { useState, useEffect } from "react";
import Box from "./component/box";

function generateRandom2DArray(rows, cols, minValue, maxValue) {
  if (rows * cols > maxValue - minValue + 1) {
    throw new Error(
      "Not enough unique values to fill the array without duplicates."
    );
  }

  const result = [];
  const availableValues = Array.from(
    { length: maxValue - minValue + 1 },
    (_, i) => i + minValue
  );

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      if (availableValues.length === 0) {
        throw new Error("All unique values used up.");
      }

      const randomIndex = Math.floor(Math.random() * availableValues.length);
      const randomValue = availableValues.splice(randomIndex, 1)[0];
      row.push(randomValue);
    }
    result.push(row);
  }

  return result;
}

function App() {
  const [gridItem, setGridItem] = useState(generateRandom2DArray(4, 4, 1, 16));
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);

  const checkItemSurrounding = (row, col) => {
    const surrounding = [];
    // check top
    if (row > 0) {
      surrounding.push(gridItem[row - 1][col]);
    }
    //check bottom
    if (row < gridItem.length - 1) {
      surrounding.push(gridItem[row + 1][col]);
    }
    //check right
    if (col < gridItem.length - 1) {
      surrounding.push(gridItem[row][col + 1]);
    }
    //check left
    if (col > 0) {
      surrounding.push(gridItem[row][col - 1]);
    }
    return surrounding.sort((a, b) => a - b);
  };

  const swipeItem = (row, col) => {
    let tempRow = NaN;
    let tempCol = NaN;

    // check if number '16' is arround the 'clicked item'
    if (checkItemSurrounding(row, col).includes(16) && !gameOver) {
      // find index of number '16'
      for (let i = 0; i < gridItem.length; i++) {
        for (let j = 0; j < gridItem[i].length; j++) {
          if (gridItem[i][j] == 16) {
            tempRow = i;
            tempCol = j;
          }
        }
      }
      const tempArray = [...gridItem];

      [tempArray[row][col], tempArray[tempRow][tempCol]] = [
        tempArray[tempRow][tempCol],
        tempArray[row][col],
      ];
      setGridItem(tempArray);
      setMoves(moves + 1);
    }
  };
  
  const resetGame = () => {
    setGridItem(generateRandom2DArray(4, 4, 1, 16));
    setGameOver(false);
    setMoves(0);
  };

  useEffect(() => {
    let matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    let isEqual = true;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== gridItem[i][j]) {
          isEqual = false;
          break;
        }
      }
      if (!isEqual) {
        break;
      }
    }

    if (isEqual) {
      console.log("won");
      setGameOver(true);
    } else {
      console.log("lose");
    }
  }, [gridItem]);

  return (
    <div className="p-4 flex flex-col gap-10 ">
      <div className="grid grid-cols-4 gap-4 w-fit ">
        {gridItem.map((items, x) =>
          items.map((item, y) => (
            <Box
              key={item}
              item={item}
              id={item}
              swipeItem={() => swipeItem(x, y)}
            ></Box>
          ))
        )}
      </div>
      <div className="flex gap-4">
        <p className="text-[#1a1c28] bg-white w-52 p-3 rounded-lg font-bold text-center">
          Moves: {moves}
        </p>
        <button
          className="text-[#fff] bg-orange-600 w-52 p-3 rounded-lg font-bold"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
