/*Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo
l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e
la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Le bombe dovranno essere generate nello stesso range delle caselle di gioco.*/

function Reset(){
    let result = document.getElementById("result");
    result.innerHTML = "";
    points = 0;
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
        cells[i].addEventListener("click", function () {
            points++;
            if (points >= cells.length-16){
                result.innerHTML = `<h1 class="green">Hai vinto! Punteggio: ${points}</h1>`;
            }
            this.style.color = "white";
            this.style.background = "#6495ed";
            this.style.cursor = "default";
        }
        )
    }
    for (i = 0; i < bombs.length; i++){
        bombs[i].addEventListener("click", function () {
            this.style.background = "red";
            this.style.cursor = "not-allowed";
            result.innerHTML = `<h1>Hai perso! Punteggio: ${points-1}</h1>`;
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
    for(i=0; i<16; i++){
        cells[rand[i]-1].classList.add("bomb");
        cells[rand[i]-1].classList.remove("normal");
    }
    return rand;
}

let play = document.getElementById("play");
let points = 0;

play.addEventListener("click", () => {
    Reset();
    diff = CheckDiff();
    num = Build(diff);
    bombs = AddBombs(num);
    AddEvent();
})