const express = require("express");
const app = express();

const note = [];
app.use(express.json());

app.get("/notes",(req,res)=>res.json());
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.status(201).json(req.body);
})