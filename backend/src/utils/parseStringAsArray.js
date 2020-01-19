// /src/utils possui funções que são usadas mais de uma vez no código
//Essa recebe string e transforma em array, tirando virgulas e espaços

module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech=>tech.trim()); //Split divide a string quando ve , . O map mapeia a string e o trim remove espaços.
}