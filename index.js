class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    atacar(){
        if (this.tipo === 'mago'){
            this.ataque = 'magia'
        } else if (this.tipo === 'guerreiro'){
            this.ataque = 'espada'
        } else if (this.tipo === 'monge'){
            this.ataque = 'artes marciais'
        } else if (this.tipo === 'ninja'){
            this.ataque = 'shuriken'
        }

        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let heroico = new Heroi('jackie', 30, 'monge')

heroico.atacar()