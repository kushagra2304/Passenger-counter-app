

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("inc-btn")
let count = 0

function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    reset();
}

function reset() {
    count = 0;
    countEl.textContent = count;
}