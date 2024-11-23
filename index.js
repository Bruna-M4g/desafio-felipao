let xp = 10000; 
let classificacao;

if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp <= 2000) {
    classificacao = "Bronze";
} else if (xp <= 5000) {
    classificacao = "Prata";
} else if (xp <= 7000) {
    classificacao = "Ouro";
} else if (xp <= 8000) {
    classificacao = "Platina";
} else if (xp <= 9000) {
    classificacao = "Ascendente";
} else if (xp <= 10000) {
    classificacao = "Imortal";
}

console.log("O herói de nome Corvo está no nível de " + classificacao);

