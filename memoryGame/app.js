const btn = document.querySelector('button')
const con = document.getElementById('con')
const h2 = document.querySelector('h2')
const startBtn = document.getElementById('startBtn')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomNumbers = [];

h2.innerHTML = "😉 دەست بکە بەیاری"


function start() {
    h2.innerHTML = "😉 دەست بکە بەیاری"

    //generate random number
    randomNumbers = generateRandomArray()

    //apply value to boxs
    let tempBtn = ""
    for (let i = 0; i < 9; i++) {
        tempBtn += `<button id="btn${randomNumbers[i]}" onclick="btnPress(${randomNumbers[i]})"><h1 id="h${randomNumbers[i]}">${randomNumbers[i]}</h1></button>`
    }
    con.innerHTML = tempBtn
    disableBtn(true)

    //hide after 1.5s
    setTimeout(function () {
        const h1Elements = document.getElementsByTagName("h1");
        for (let i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.visibility = "hidden";
        }
        disableBtn(false)
    }, 2000);
}


//show with click
let temp = 1
let timeOfLose = 0

function btnPress(n) {
    let tempBtn = document.getElementById(`btn${n}`)
    let tempH = document.getElementById(`h${n}`)
    tempH.style.visibility = 'visible'
    if (temp === n) {
        if (temp === 9) {
            h2.innerHTML = '🎉😍 نانا لێێ دەزانی'
        } else if (temp > 6 && temp <= 8) {
            h2.innerHTML = '😁 بدۆڕێی دەعوەتم'
        } else if (temp > 3 && temp <= 6) {
            h2.innerHTML = '🙂 بە هیوای دۆڕان'
        } else if (temp > 0 && temp <= 3) {
            h2.innerHTML = '😃 ئاگام لێتە شێرەکەم'
        }
        temp += 1
    } else if (n < temp) {

    } else {
        tempBtn.style.background = 'red'
        if (timeOfLose === 0) {
            h2.innerHTML = '😂 ئەک داوەشێی'
        } else if (timeOfLose === 1) {
            h2.innerHTML = '😂 حەیامان چووو'
        } else if (timeOfLose === 2) {
            h2.innerHTML = '😂 بمری باشترە'
        }
        disableBtn(true)
        temp = 1
        timeOfLose += 1
        if (timeOfLose === 3) {
            timeOfLose = 0
        }
    }
}

//restart the game by Btn
startBtn.addEventListener('click', function () {
    start()
})

//a function to disable buttons
function disableBtn(isTrue) {
    for (let i = 1; i < 10; i++) {
        let tempBtn = document.getElementById(`btn${i}`)
        if (isTrue) {
            tempBtn.disabled = true
        } else {
            tempBtn.disabled = false
        }
    }
}

//gen random num
function generateRandomArray() {
    var randomArray = []
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (nums.length > 0) {
        var randomIndex = Math.floor(Math.random() * nums.length);
        var randomNum = nums[randomIndex];
        randomArray.push(randomNum);
        nums.splice(randomIndex, 1);
    }
    return randomArray;
}