const BODY = document.querySelector("body");
const PONTEIROHORA = document.querySelector(".hora");
const PONTEIROMINUTO = document.querySelector(".minuto");
const PONTEIROSEGUNDO = document.querySelector(".segundo");
const BOTAO = document.querySelector(".botao");

if(localStorage.getItem("modo") === "Modo Escuro")
{
    BODY.classList.add("escuro");
    BOTAO.textContent = "Modo Claro";
}
else
{
    BOTAO.textContent = "Modo Escuro";
}

BOTAO.addEventListener("click", () =>
{
    BODY.classList.toggle("escuro");
    const EMODOESCURO = BODY.classList.contains("escuro");
    BOTAO.textContent = EMODOESCURO ? "Modo Claro" : "Modo Escuro";
    localStorage.setItem("modo", EMODOESCURO ? "Modo Escuro" : "Modo Claro");
});

const atualizarHora = () =>
{
    let data = new Date(),
    segundoParaGrau = (data.getSeconds() / 60) * 360;
    minutoParaGrau = (data.getMinutes() / 60) * 360;
    horaParaGrau = (data.getHours() / 12) * 360;
    PONTEIROSEGUNDO.style.transform = `rotate(${segundoParaGrau}deg)`;
    PONTEIROMINUTO.style.transform = `rotate(${minutoParaGrau}deg)`;
    PONTEIROHORA.style.transform = `rotate(${horaParaGrau}deg)`;
};

setInterval(atualizarHora, 1000);
atualizarHora();