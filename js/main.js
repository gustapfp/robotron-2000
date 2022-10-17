const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]")

function somatorioAtributos(tipoDeoperação, controle) {
    const valor = controle.querySelector("[data-contador]");
    if(tipoDeoperação == "+") {
        valor.value = parseInt(valor.value) + 1;
        
    }
    else {
        valor.value = parseInt(valor.value) - 1;
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        somatorioAtributos(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    })
});


function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

