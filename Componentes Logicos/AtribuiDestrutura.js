// // let a ='A';
// // let b ='B';
// // let c ='C';

// //let [a, b, c] = [1,2,3];
// //console.log(a,b,c)

// //atribui por desestruturação
// const numeros = [4,5,6]
// const [a,b,c] = numeros
// console.log(a,b,c)

//se fizer com const todas tem que ser const
//se for com let idem
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//const primeiroNumero = numeros[0]
//const [um, dois, tres, ...resto] = numeros;
//para puxar valor dos meios vc precisa deixar vazio , ,
const [um, ,dois, ,tres,...resto] = numeros
console.log(um, dois, tres, resto);

//lista com lista dentro(array)

const num = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
const [,[,,seis]] = num;
console.log(seis)
const [lista1, lista2,lista3] = num
console.log(lista1[0])