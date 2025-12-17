/*
Ejercicio 4: Función que modifica objetos (similar a healCharacter)

    Crea una interface Account con:
        owner (string)
        balance (number)

    Crea una función deposit que:
        Reciba una cuenta y un monto.
        No retorne nada.
        Modifique el balance.

    Muestra el balance antes y después del depósito.
*/

interface Account {
    owner: string;
    balance: number;
}

function deposit (account: Account, amount: number): void {
    account.balance += amount;
}

const myAccount: Account = {
    owner: "Eduardo",
    balance: 20000
}

console.log(`El balance actual de la cuenta de ${myAccount.owner} es de: ${myAccount.balance}`);
deposit(myAccount, 1500);
console.log(`El balance actual de la cuenta de ${myAccount.owner} es de: ${myAccount.balance}`);