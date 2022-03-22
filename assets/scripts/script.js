function CheckDiff() {
    let diff = document.getElementById("difficulty").value;
    return diff;
}

function Build(diff) {
    let container = document.getElementById("container")
    container.innerHTML = ``;

    if (diff == "easy") {
        let rand = Math.ceil(Math.random() * 49);
        for (i = 0; i < rand; i++) {
            container.innerHTML += `<div class="cell"><p>${i + 1}</p></div>`;
        }
        return rand;
    }
    else if (diff == "medium") {
        let rand = Math.ceil(Math.random() * 81);
        for (i = 0; i < rand; i++) {
            container.innerHTML += `<div class="cell"><p>${i + 1}</p></div>`;
        }
        return rand;
    }
    else {
        let rand = Math.ceil(Math.random() * 100);
        for (i = 0; i < rand; i++) {
            container.innerHTML += `<div class="cell"><p>${i + 1}</p></div>`;
        }
        return rand;
    }
}
function AddEvent(){
    let cells = document.getElementsByClassName("cell");
    for (j=0; j<cells.length; j++){
        cells[j].addEventListener("click", function (){
            this.style.color = "white"
            this.style.background = "#6495ed"
            this.style.cursor = "default"
    }
    )}
}

let play = document.getElementById("play");

play.addEventListener("click", () => {
    diff = CheckDiff();
    num = Build(diff);
    AddEvent();
});