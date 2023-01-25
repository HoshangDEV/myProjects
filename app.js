let hs = document.querySelector('.home-score');
let gs = document.querySelector('.guest-score');

let h = 0
let g = 0

function ish1() {
    h += 1
    hs.innerHTML = h
}

function ish2() {
    h += 2
    hs.innerHTML = h
}

function ish3() {
    h += 3
    hs.innerHTML = h
}
// --------------------

function isg1() {
    g += 1
    gs.innerHTML = g
}

function isg2() {
    g += 2
    gs.innerHTML = g
}

function isg3() {
    g += 3
    gs.innerHTML = g
}