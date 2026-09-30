const input = document.querySelector("#estudo");
const botaoAdicionar = document.querySelector("#adicionar");
const botaoOrdenar = document.querySelector("#ordenar");
const lista = document.querySelector("#lista");

let estudos = [];

botaoAdicionar.addEventListener("click", function () {

    const novoEstudo = input.value;

    estudos.push(novoEstudo);

    mostrarEstudos();

    input.value = "";

});


function mostrarEstudos() {

    lista.innerHTML = "";

    estudos.forEach(function (estudo) {

        const item = document.createElement("li");

        item.textContent = estudo;

        lista.appendChild(item);

    });

}


botaoOrdenar.addEventListener("click", function () {

    estudos = _.sortBy(estudos);

    mostrarEstudos();

});