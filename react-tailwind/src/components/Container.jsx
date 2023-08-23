import React, { useEffect, useState } from "react";
import Box from "./Box";
function calculateWinner(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function Container() {
  const [boxData, setBoxValue] = useState([
    { id: 0, value: null, clicked: false, user: null },
    { id: 1, value: null, clicked: false, user: null },
    { id: 2, value: null, clicked: false, user: null },
    { id: 3, value: null, clicked: false, user: null },
    { id: 4, value: null, clicked: false, user: null },
    { id: 5, value: null, clicked: false, user: null },
    { id: 6, value: null, clicked: false, user: null },
    { id: 7, value: null, clicked: false, user: null },
    { id: 8, value: null, clicked: false, user: null },
  ]);

  const [toggle, setToggle] = useState(false);
  const [winnder, setWinnder] = useState(null);

  useEffect(() => {
    let tempArray = [null, null, null, null, null, null, null, null, null];

    boxData.forEach((prevData) => {
      if (prevData.clicked) {
        tempArray[prevData.id] = prevData.user;
      }
    });

    if (calculateWinner(tempArray) != null) {
      setWinnder(calculateWinner(tempArray));
      boxData.forEach((prevData) => {
        prevData.clicked = true;
      });
    }
  }, [boxData]);

  function putIcon(event) {
    let clickedId = parseInt(event.currentTarget.id);
    const circle = '<i class="far fa-circle text-white text-5xl"></i>';
    const mark = '<i class="fas fa-times text-white text-5xl"></i>';

    if (!boxData[clickedId].clicked) {
      let newToggle = !toggle;
      setToggle(!toggle);
      setBoxValue((prevData) =>
        prevData.map((data) =>
          data.id === clickedId && data.clicked === false
            ? {
                ...data,
                value: newToggle ? circle : mark,
                clicked: true,
                user: newToggle ? "O" : "X",
              }
            : data
        )
      );
    }
  }

  function resetGame() {
    const newBoxData = boxData.map((item) => ({
      ...item,
      value: null,
      clicked: false,
      user: null,
    }));
    setBoxValue(newBoxData);
    setWinnder(null);
  }

  return (
    <div className="w-fit bg-[#1e2131] rounded-md grid text-white grid-cols-3 gap-4 p-8">
      {boxData.map((box) => (
        <Box key={box.id} id={box.id} boxValue={box.value} putIcon={putIcon} />
      ))}

      <h1>{winnder ? `Winner is: ${winnder}` : ""}</h1>
      <button
        type="button"
        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
}

export default Container;
