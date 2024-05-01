// Function In Typescript Normal function

// normal function
function add(number1: number, number2: number): number {
  return number1 + number2;
}
// add(3,'33')

// arrow function

const AddArrow = (num1: number, num2: number): number => num1 + num2;

// Object method

const userAll = {
  Name: "manik",
  balance: 1,
  AddBalance(balance: number) {
    return `this is total ${this.balance + balance}`;
  },
};

// callBack Function
const arr: number[] = [2, 4];
const newArr: number[] = arr.map((elem: number) => elem * elem);
