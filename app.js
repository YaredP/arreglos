let azar = [];

for (let i = 0; i < 10; i++) {
    azar[i] = Math.floor(Math.random() * (20 - 1) + 1);
}

console.log(azar);

let palabras = prompt("Escribe algunas palabras separadas por una coma");

console.log(palabras.split(","));


let numeros = [10, 40, 30, 20, 15, 5];

function orden(lista) {
    let tmp;
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1; j++) {
        if (lista[j] > lista[j + 1]) {
            tmp = lista[j];
            lista[j] = lista[j + 1];
            lista[j + 1] = tmp;
        }
    }
  }
}

orden(numeros);

console.log(numeros);
