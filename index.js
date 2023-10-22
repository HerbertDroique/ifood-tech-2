console.log("\t\t\t\tCalculadora Rankeada")


let saldo = calcularSaldo(120,15)


if (saldo < 11){
    let nome = "Ferro"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}

else if (saldo >= 11 && saldo < 21){
    let nome = "Bronze"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}

else if (saldo >= 21 && saldo < 51){
    let nome = "Prata"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}

else if (saldo >= 51 && saldo < 81){
    let nome = "Ouro"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}

else if (saldo >= 81 && saldo < 91){
    let nome = "Diamante"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}

else if (saldo >= 91 && saldo < 101){
    let nome = "Lendário"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}

else if (saldo >= 101){
    let nome = "Imortal"
    console.log("O Herói tem saldo de: " + saldo, "vitórias. Está no nível: " +nome)

}


function calcularSaldo (vitoria, derrota){
    let resultado = vitoria - derrota
    return resultado

}


    
