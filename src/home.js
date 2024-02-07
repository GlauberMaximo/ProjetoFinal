let btn_matricula = document.getElementById("button1Left");

btn_matricula.addEventListener("click", matricule_se);

let area_de_matricula = document.getElementById("div_matricula");

function matricule_se() {
    area_de_matricula.style.display = "block"
    //area_de_matricula.style.filter = "blur(4px)"
}

let btn_sair_matricula = document.getElementById("btn_sair_matricula");

btn_sair_matricula.addEventListener("click", sair_matricula);

function sair_matricula() {
    area_de_matricula.style.display = "none"
}