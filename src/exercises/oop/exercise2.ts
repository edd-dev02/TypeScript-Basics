/**

🧩 Ejercicio 2: Propiedades privadas + getters

    Crea una clase BankAccount:

        owner (string)
        private balance (number)

    Implementa:

        Método deposit(amount: number) que sume al balance
        Método withdraw(amount: number) que reste si hay suficiente
        Getter getBalance() que retorne el balance

    📌 Extra: Regresa un error si withdraw deja el balance negativo.
 */

export class BankAccount {
    constructor(
        public owner: string,
        private balance: number
    ) {}

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {

        if(this.balance === 0 && amount > this.balance) {
            console.log("No hay suficientes fondos para pagar");
            return;
        }

        this.balance -= amount;
    }

    GetBalance() {
        return this.balance;
    }
}