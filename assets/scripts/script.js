function Reset() {
    let result = document.getElementById("result");
    result.innerHTML = "";
    points = 0;
    finish = false;
}

function CheckDiff() {
    let diff = document.getElementById("difficulty").value;
    return diff;
}

function Build(diff) {
    let min = 16;
    let container = document.getElementById("container")
    container.innerHTML = ``;

    if (diff == "easy") {
        let rand = Math.ceil(Math.random() * 33 + min);
        for (i = 0; i < rand; i++) {
            container.innerHTML += `<div class="cell normal"><p>${i + 1}</p></div>`;
        }
        return rand;
    }
    else if (diff == "medium") {
        let rand = Math.ceil(Math.random() * 65 + min);
        for (i = 0; i < rand; i++) {
            container.innerHTML += `<div class="cell normal"><p>${i + 1}</p></div>`;
        }
        return rand;
    }
    else {
        let rand = Math.ceil(Math.random() * 84 + min);
        for (i = 0; i < rand; i++) {
            container.innerHTML += `<div class="cell normal"><p>${i + 1}</p></div>`;
        }
        return rand;
    }
}
function AddEvent() {
    let cells = document.getElementsByClassName("cell");
    let bombs = document.getElementsByClassName("bomb");
    let result = document.getElementById("result");
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function CellListener() {
            if (finish == false) {
                points++;
                this.style.color = "white";
                this.style.background = "#6495ed";
                this.style.cursor = "default";
            }
            
            if (points >= cells.length - 16) {
                result.innerHTML = `<h1 class="green">Hai vinto! Punteggio: ${points}</h1>`;
                finish = true;
            }
        }
        )
    }
    for (i = 0; i < bombs.length; i++) {
        bombs[i].addEventListener("click", function BombListener() {
            if (finish == false) {
                this.style.background = "red";
                this.style.cursor = "not-allowed";
                this.innerHTML = `<i class="fa-solid fa-bomb bomb"></i>`;
                result.innerHTML = `<h1>Hai perso! Punteggio: ${points - 1}</h1>`;
                finish = true;
                for(i=0; i<cells.length; i++){
                    cells[i].style.cursor = "not-allowed";
                }
            }
        }
        )
    }
}

function AddBombs(num) {
    let rand = [];
    let cells = document.getElementsByClassName("cell");
    while (rand.length < 16) {
        let randnum = Math.floor(Math.random() * num) + 1;
        if (rand.indexOf(randnum) === -1) rand.push(randnum);
    }
    for (i = 0; i < 16; i++) {
        cells[rand[i] - 1].classList.add("bomb");
        cells[rand[i] - 1].classList.remove("normal");
    }
    return rand;
}

let play = document.getElementById("play");
let points = 0;
let finish = false;

play.addEventListener("click", () => {
    Reset();
    diff = CheckDiff();
    num = Build(diff);
    bombs = AddBombs(num);
    AddEvent();
})