class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque indefinido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);

    }
}

const heroi1 = new Heroi("Alexandre", 50, "mago");
heroi1.atacar();
const heroi2 = new Heroi("João", 80, "monge");
heroi2.atacar();
const heroi3 = new Heroi("Sandro", 25, "ninja");
heroi3.atacar();
const heroi4 = new Heroi("Carlos", 30, "guerreiro");
heroi4.atacar();