// usa array pra krl
let frutas = ["tomate","tomate2","tomate, mas é rosa","saia fantasiada de tomate"]
// no array cada um tem um indece comçando pelo zer, e tipo um alista mesmo, q nem a gente via me python

let tamanho = frutas.length
console.log(tamanho)
// mostra no terminal o tabanho desse array no caso 4
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
// vao mostra o array ne usando o indice

frutas.push("Tomate <3")
console.log(frutas.length)
// mostra q almentou a lista ficou 5

frutas.pop()
// remove o ultimo item da lista

frutas.splice(1,1)
// vai excluir so o tomate2, se colocase 1,2 ia deletar o tomate2 e o tomate, mas e rosa e assim por diante
frutas.forEach((fruta,index)=>{console.log(fruta,index)})
// a foreach clama por uma funcao, ent o escrevemos a li em cimma e tipo o q fizemos mais cedo:
// function funcaofruta(fruta,index){
    // console.log(fruta,index)
// e ai fariamos frutas.forEach(funcaofruta)
// mas a forma q fizemos e mai facil

console.log(frutas.includes("abacaxi xixi xi?"))
// serve pra inteiro e string
// mostra se o q escrevesmpos esta na correçao ou nao 
