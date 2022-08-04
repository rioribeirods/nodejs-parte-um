const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lista = [];

const readlineAsync = () => {
    interface.question("Insira o nome de uma propriedade CSS: ", (item) => {

        if(item.toUpperCase() == "SAIR") {
            lista.sort();
            console.log(lista);
            return interface.close();
        }
        lista.push(item);
        readlineAsync();
    });
};

readlineAsync();