let tempScore = 0
let turn = 0
let xarray = []
let oarray = []
let checkArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', function () {
    resetBtn()
})

let h2 = document.querySelector('h2')
h2.innerHTML = "Let's play 😃"

function clickBtn(n) {
    h2.innerHTML = "Let's play 😃"

    let tempBtn = document.getElementById(`btn${n}`)
    tempBtn.disabled = true
    if (n >= 1 && n <= 3) {
        tempScore = 1
    } else if (n >= 4 && n <= 6) {
        tempScore = 2
    } else if (n >= 7 && n <= 9) {
        tempScore = 3
    }

    //insert icon 'X' and 'O' to buttons
    if (turn === 0) {
        xarray.push(n)
        // userx += tempScore
        tempScore = 0
        turn = 1
        tempBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else if (turn === 1) {
        oarray.push(n)
        // usero += tempScore
        tempScore = 0
        turn = 0
        tempBtn.innerHTML = '<i class="fa-solid fa-o"></i>'
    }

    //check
    console.log(xarray)
    console.log(oarray)
    let resultx = checkXOArray(checkArray, xarray)
    let resulto = checkXOArray(checkArray, oarray)

    if (resulto) {
        disableAllBtn()
        h2.innerHTML = 'User 🅾 Won😎'
    } else if (resultx) {
        disableAllBtn()
        h2.innerHTML = 'User ❌ Won 😎'
    }
}


//disable all btns
function disableAllBtn() {
    for (let i = 1; i < 10; i++) {
        let tempDb = document.getElementById(`btn${i}`)
        tempDb.disabled = true
    }
}

//re-enable all btns
function enableAllBtn() {
    for (let i = 1; i < 10; i++) {
        let tempDb = document.getElementById(`btn${i}`)
        tempDb.disabled = false
    }
}

function resetBtn() {
    for (let i = 1; i < 10; i++) {
        let tempDb = document.getElementById(`btn${i}`)
        tempDb.innerHTML = ''
    }
    enableAllBtn()
    xarray = []
    oarray = []
    resulto = false
    resultx = false
    turn = 0
    tempScore = 0
    h2.innerHTML = "Let's play 😃"

}

function checkXOArray(checkArray, xarray) {
    for (let i = 0; i < checkArray.length; i++) {
        let row = checkArray[i];
        let count = 0;
        for (let j = 0; j < xarray.length; j++) {
            if (row.includes(xarray[j])) {
                count++;
            }
        }
        if (count >= 3) {
            // console.log("At least three values of xarray exist in the following row of checkArray:", row);
            return true
        }
    }
}