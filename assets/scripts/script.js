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
        for (i = 0; i < 49; i++) {
            container.innerHTML += `<div class="cell normal"><p>${i + 1}</p></div>`;
        }
        return 49;
    }
    else if (diff == "medium") {
        for (i = 0; i < 81; i++) {
            container.innerHTML += `<div class="cell normal"><p>${i + 1}</p></div>`;
        }
        return 81;
    }
    else {
        for (i = 0; i < 100; i++) {
            container.innerHTML += `<div class="cell normal"><p>${i + 1}</p></div>`;
        }
        return 100;
    }
}
function AddEvent() {
    let cells = document.getElementsByClassName("cell");
    let bombs = document.getElementsByClassName("bomb");
    let result = document.getElementById("result");
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function CellListener() {
            if (finish == false) {
                this.classList.add("clicked");
                points++;
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
                for(j=0; j<bombs.length; j++){
                    bombs[j].classList.add("bomb-clicked");
                }
                this.classList.add("bomb-clicked");
                this.innerHTML = `<i class="fa-solid fa-bomb bomb"></i>`;
                result.innerHTML = `<h1>Hai perso! Punteggio: ${points - 1}</h1>`;
                finish = true;
                for(j=0; j<cells.length; j++){
                    cells[j].style.cursor = "not-allowed";
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