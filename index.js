const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarHeroi() {
    rl.question("Digite o nome do Herói: ", (nome) => {
        rl.question("Digite a quantidade de bônus do Herói: ", (bônusInput) => {
            const bônus = parseInt(bônusInput);
            let nivel = "";

            if (bônus < 1000) {
                nivel = "Ferro";
            } else if (bônus >= 1001 && bônus <= 2000) {
                nivel = "Bronze";
            } else if (bônus >= 2001 && bônus <= 5000) {
                nivel = "Prata";
            } else if (bônus >= 5001 && bônus <= 7000) {
                nivel = "Ouro";
            } else if (bônus >= 7001 && bônus <= 8000) {
                nivel = "Platina";
            } else if (bônus >= 8001 && bônus <= 9000) {
                nivel = "Ascendente";
            } else if (bônus >= 9001 && bônus <= 10000) {
                nivel = "Imortal";
            } else if (bônus>=10001) {
                nivel = "Radiante";
            } else {
                nivel = "Desconhecido"
            }

            console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);

            rl.question("Deseja avaliar outro herói? (sim/não): ", (resposta) => {
                if (resposta.toLowerCase() === "sim") {
                    classificarHeroi(); 
                } else {
                    rl.close();
                }
            })
        })
    })
}

classificarHeroi();