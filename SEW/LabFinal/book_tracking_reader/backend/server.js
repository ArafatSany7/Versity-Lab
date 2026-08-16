const cors = require('cors');
const express = require("express");
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.get("/api/books", (req, res) => {
    const books = [
        { id: 1, title: "Book One", author: "Author One", completed: true },
        { id: 2, title: "Book Two", author: "Author Two", completed: false },
        { id: 3, title: "Book Three", author: "Author Three", completed: true }
    ];
    res.json(books);
});