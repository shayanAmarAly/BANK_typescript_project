import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const response = await inquirer.prompt([
    {
        name: "bank_mangement_system",
        type: "list",
        choices: [{ name: 'Deposit money', value: 'DM' }, { name: 'Credit money', value: 'CM' }, { name: 'Check details', value: 'CD' }],
        message: "Select operation"
    },
]);

class abc{
    first_name!: string;
    last_name!: string;
    gender!: string;
    age!: number;
    pin!: number;
    mobile!: string; 
    amount: number = 0;

    constructor(first_name: string, last_name: string, gender: string, age: number, mobile: string, pin: number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.mobile = mobile;
        this.pin = pin;
    }
        // deposit function
        async deposit(){
            const usersPIN = await inquirer.prompt([
                {
                    name: "pin",
                    type: "number",
                    message: "Enter your pin"
                },
            ]);
            if (usersPIN.pin == this.pin) {
                const amount = await inquirer.prompt([
                    {
                        name: "deposit",
                        type: "number",
                        message: "Enter amount you want to deposit"
                    },
                ]);
                this.amount += Number(amount.deposit);
                console.log(`You deposited ${amount.deposit},Now your total amount is ${this.amount}`)
            }else{
                console.log("Wrong Pin enter");
                this.deposit();
            }
        }
        // Credit function 
        async credit(){
            const usersPIN = await inquirer.prompt([
                {
                    name: "pin",
                    type: "number",
                    message: "Enter your pin"
                },
            ]);
            if (usersPIN.pin == this.pin) {
                const amount = await inquirer.prompt([
                    {
                        name: "credit",
                        type: "number",
                        message: "Enter amount you want to credit"
                    },
                ]);
                if (Number(amount.credit) < this.amount) {
                    this.amount -= Number(amount.credit);
                    console.log(`You credited ${amount.credit} money, Now remaining balance is ${this.amount}`)
                } else {
                    console.log("Your debit is less than your credit");
                }
            } else {
                console.log("Incorrect user pin");
            }
        }
        details(){
            console.log(`Name: ${this.first_name}\nYour total amount in the bank: ${this.amount}`);
        }
        
       
}
let abc1 = new abc("shayan", "ali", "male", 21,"03468754593", 124);

switch (response.bank_mangement_system) {
    case "DM":
        abc1.deposit();
        break;
    case "CM":
        abc1.credit();
        break;
    case "CD":
        abc1.details();
        break;
}