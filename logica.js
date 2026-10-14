const prompt = require('prompt-sync')()

// function solicitarNums() {
//     let num = Number(prompt("Ingresa un numero: "))
//     return num
// }

let list = []

for (let n = 1; n < 3+1; n++) {
    let num = Number(prompt(`Ingresa el numero ${n}: `))
    list.push(num)
}
// let num1 = solicitarNums()
// let num2 = solicitarNums()
// let num3 = solicitarNums()

function analizarNumeros(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        if (num2 > num3) {
            return `${num1}, ${num2}, ${num3} \n${num3}, ${num2}, ${num1}`
        }
        return `${num1}, ${num3}, ${num2} \n${num2}, ${num3}, ${num1}`
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 > num3) {
            return `${num2}, ${num1}, ${num3} \n${num3}, ${num1}, ${num2}`
        }
        return `${num2}, ${num3}, ${num1} \n${num1}, ${num3}, ${num2}`
    } else {
        if (num2 > num1) {
            return `${num3}, ${num2}, ${num1} \n${num1}, ${num2}, ${num3}`
        }
        return `${num3}, ${num1}, ${num2} \n${num2}, ${num1}, ${num3}`
    }
}
function verificarIgualdad(num1, num2, num3) {
    if (num1 == num2 && num1 == num3) {
        return "3 iguales"
    } else if (num1 == num2) {
        return "1 y 2 son iguales"
    } else if (num1 == num3) {
        return `1 y 3 son iguales`
    } else if (num2 == num3) {
        return `2 y 3 son iguales`
    } else {
        return `No hay iguales`
    }
}

console.log("\n")
console.log(verificarIgualdad(list[0], list[1], list[2]))
console.log(analizarNumeros(list[0], list[1], list[2]))


// Version 2
const listaOrdenada = list.toSorted((a, b) => b - a); // ordena de mayor a menor
const listaOrdenada2 = list.toSorted((a, b) => a - b); // ordena de menor a mayor
// const menorAmayor = listaOrdenada.toReversed();
// const listaOrdenada2 = list.sort((a, b) => b - a); // ordena de mayor a menor modificando el mismo array

console.log("\n")
if (listaOrdenada[0] === listaOrdenada[2]) {
    console.log("todos son iguales")
} else if (listaOrdenada[0] === listaOrdenada[1]) {
    console.log("1 y 2 iguales")
} else if (listaOrdenada[1] === listaOrdenada[2]) {
    console.log("2 y 3 iguales")
} else {
    console.log("No hay iguales")
}

console.log(listaOrdenada.join(", "))
console.log(listaOrdenada2.join(", "))
