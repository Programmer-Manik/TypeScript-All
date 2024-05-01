"use strict";
// Function In Typescript Normal function
// normal function
function add(number1, number2) {
    return number1 + number2;
}
// arrow function
const AddArrow = (num1, num2) => num1 + num2;
// Object method
const userAll = {
    Name: "manik",
    balance: 1,
    AddBalance(balance) {
        return `this is total ${this.balance + balance}`;
    },
};
// callBack Function
const arr = [2, 4];
const newArr = arr.map((elem) => elem * elem);
