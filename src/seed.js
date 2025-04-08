import { addSnippet } from './models/snippetModel.js';

const seedData = [
    { id: 1, title: "Hello World", code: "console.log('Hello, World!');", language: "JavaScript" },
    { id: 2, title: "Python Print", code: "print('Hello, World!')", language: "Python" },
    { id: 3, title: "HTML Example", code: "<h1>Hello, World!</h1>", language: "HTML" }
];

seedData.forEach(snippet => addSnippet(snippet));

console.log("Seed data added successfully!");
