// Part 1: JavaScript Basics
// Variables and Data Types
let userName = "Rodgers Munene";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
let person = { firstName: "Lucy", lastName: "Makena", age: 30 };

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators - Simple Calculator Function
function performCalculation() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
        default:
            alert("Invalid operation! Use +, -, *, or /.");
            return;
    }
    
    alert(`Result: ${result}`);
}

// Functions - Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Part 2: JavaScript Control Structures
// If Statement - Voting Eligibility Check
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));

    if (isNaN(userAge)) {
        alert("Please enter a valid number!");
        return;
    }

    let message = userAge >= 18 ? "You are eligible to vote!" : "You are not eligible to vote.";
    document.getElementById("voting-message").textContent = message;
}

// Loops - Display Numbers from 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM
// Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript In Action!";

// Adding Dynamic Content
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
