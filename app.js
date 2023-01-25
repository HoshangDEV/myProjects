let hs = document.querySelector('.home-score');
let gs = document.querySelector('.guest-score');

let h = 0
let g = 0

function ish(num) {
    h += num
    hs.innerHTML = h
}

// --------------------

function isg(num) {
    g += num
    gs.innerHTML = g
}
