const readline = require('readline');
//entrada de dados usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//função calcular saldo e nível
function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";

    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";

    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) 
    {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendario";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`;

}

// Função Principal que usa a entrada do jogador
function iniciarPrograma() {
    rl.question("Digite a quantidade de vitórias: ", (vitoriasStr) => {
        rl.question("Digite a quantidade de derrotas: ", (derrotasStr) => {
            const vitorias = parseInt(vitoriasStr);
            const derrotas = parseInt(derrotasStr);

            if (isNaN(vitorias) || isNaN(derrotas)) {
                console.log("Por favor, digite somente números inteiros.");
                rl.close();
                return;
            }

            const resultado = calcularNivel(vitorias, derrotas);
            console.log("\n" + resultado + "\n");

            rl.question("Deseja consultar outro jogador? (s/n): ", (resposta) => {
                if (resposta.trim().toLowerCase() === "s") {
                    iniciarPrograma(); //inicia novamente
                } else {
                    console.log("Encerrando o programa. Até a próxima!");
                    rl.close(); //Fim da consulta
                }
            });
        });
    });
}

// Inicio do programa
iniciarPrograma();