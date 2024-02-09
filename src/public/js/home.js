let btn_matricula = document.getElementById("button1Left");
let btn_agendamento = document.getElementById("button2Left")
let header = document.querySelector("header")
let section = document.querySelector("section")

let area_de_matricula = document.getElementById("div_matricula");
let btn_sair_matricula = document.getElementById("btn_sair_matricula");

let area_de_agendamento = document.getElementById("div_agendamento");
let btn_sair_agendamento = document.getElementById("btn_sair_agendamento");
//Parte da Matricula

btn_matricula.addEventListener("click", matricule_se);

function matricule_se() {
    area_de_matricula.style.display = "block"
    header.style.filter = "blur(4px)"
    section.style.filter = "blur(4px)"

    section.style.pointerEvents = "none"
    header.style.pointerEvents = "none"
}

btn_sair_matricula.addEventListener("click", sair_matricula);

function sair_matricula() {
    area_de_matricula.style.display = "none"
    section.style.filter = "none"
    header.style.filter = "none"

    section.style.pointerEvents = "all"
    header.style.pointerEvents = "all"
}

// Parte do Agendamento

btn_agendamento.addEventListener("click", agendar);

function agendar() {
    area_de_agendamento.style.display = "block"

    section.style.filter = "blur(4px)"
    header.style.filter = "blur(4px)"

    section.style.pointerEvents = "none"
    header.style.pointerEvents = "none"
}

btn_sair_agendamento.addEventListener("click", sair_agendamento);

function sair_agendamento() {
    area_de_agendamento.style.display = "none"
    section.style.filter = "none"
    header.style.filter = "none"

    section.style.pointerEvents = "all"
    header.style.pointerEvents = "all"
}