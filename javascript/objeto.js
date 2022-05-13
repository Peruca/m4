const pessoa = {
    // altura: "1,75"
    altura: 172,
    peso:65,
    olhos: "cego",
    aposentado: false,
    calculoIMC(){
        return this.peso/(this.altura + this.altura)
        // se nao colocar this vai entenderq o calculo ta dentro de pesso e nao do imc e va dar errado
    }
}

console.log(pessoa.altura)
console.log(pessoa.peso)
console.log(pessoa.calculoIMC())
// o console.log e pra mostra na tela se noa nao vai
pessoa.peso = 45
console.log(pessoa.peso)
// muda o valor
// pra mudaer o imc vc teria q colocar console.log(pessoa.calculoIMC()) aqui em baico

const pessoa2 = Object.create(pessoa)
// cria outro objeto pq se quisermos criar outro padra o const pessoa - pessoa nao funciona pq vai considerar como o mesmo e uma lateraço em um vai mudar a do outro
pessoa2.altura = 180
console.log(pessoa2.altura)
console.log(pessoa.altura)
// vemos no terminal, usando node nomdoarquivo.js, e ve q o sistema considera pessoa e pessoa2 como elementos diferentes o q e delica
// 180     I
// 172     I---> é oq aparece no terminal
console.log(pessoa2.peso)