console.log("\t\t\t\tCalculadora Rankeada")


let saldo = calcularSaldo(20,10)

if (saldo<11){
    let nome = "Ferro"
    console.log("Seu nível é: " + saldo, "Seu status é: " +nome)

}



function calcularSaldo (vitoria, derrota){
    let resultado = vitoria - derrota
    return resultado

}


    
