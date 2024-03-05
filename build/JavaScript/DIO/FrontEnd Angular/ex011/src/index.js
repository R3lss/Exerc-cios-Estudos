"use strict";
class personagem {
    constructor(força, skill) {
        this.força = força;
        this.skill = skill;
    }
    ataque() {
        console.log(`ataque com ${this.força} pontos`);
    }
}
const p1 = new personagem(10, 5);
console.log(p1.ataque());
