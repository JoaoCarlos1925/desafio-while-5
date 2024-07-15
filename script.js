function exibirNumerosPares() {
    let numero = 2; // Começa com o primeiro número par, que é 2
    let contador = 0;

    while (contador < 5) {
        console.log(numero);
        numero += 2; // Incrementa para o próximo número par
        contador++;
    }
}