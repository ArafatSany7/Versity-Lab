const express = require("express")
const cors = require("cors");
app.use(cors());

app.get("/message", (req, res) => {
    res.json({ message: "Cors is enable" })
})

app.listen(30000)