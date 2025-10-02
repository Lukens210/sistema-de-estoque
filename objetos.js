

//Criando objetos

let carro = {
    cor: "Amarelo",
    marca: "Chevrolet",
    modelo: "Camaro",
    ano: 2010,
    velocidade: 0,

    acelerar: function (valor){
    this.velocidade += valor
}
}


console.log(carro.modelo)
carro.velocidade = 10
carro.acelerar(50)
console.log(carro.velocidade)