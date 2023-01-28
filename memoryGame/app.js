const btn = document.querySelector('button')
const con = document.getElementById('con')
const h2 = document.querySelector('h2')
const startBtn = document.getElementById('startBtn')




function start() {

    //generate random number
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomNumbers = [];
    while (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers.splice(randomIndex, 1)[0];
        randomNumbers.push(randomNumber);
    }

    h2.innerHTML = 'Lets Go 😉'

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
            disableBtn(false)
        }
    }, 1500);

}

//start the game when page loaded
window.onload = function () {
    start()
}


//show with click
let temp = 1

function btnPress(n) {
    let tempH = document.getElementById(`h${n}`)
    tempH.style.visibility = 'visible'
    if (temp === n) {
        if (temp > 0 && temp >= 3) {
            h2.innerHTML = 'Good 😃'
        } else if (temp > 3 && temp >= 6) {
            h2.innerHTML = 'WOW 😎'
        } else if (temp > 6 && temp >= 8) {
            h2.innerHTML = 'Almost There 🤯'
        }
        temp += 1
    } else if (temp === 10) {
        h2.innerHTML = 'YOU WON!! 👏'
    } else if(temp > n){

    }else {
        h2.innerHTML = 'You lose 😓'
        disableBtn(true)
        temp = 1
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