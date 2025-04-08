import { init, addSnippet } from './models/snippetModel.js';

const seedData = [
    { title: "Hello World", code: "console.log('Hello, World!');", language: "JavaScript" },
    { title: "Python Print", code: "print('Hello, World!')", language: "Python" },
    { title: "HTML Example", code: "<h1>Hello, World!</h1>", language: "HTML" }
];

(async () => {
    await init(); // Initialize the database connection
    for (const snippet of seedData) {
        await addSnippet(snippet);
    }
    console.log("Seed data added successfully!");
})();