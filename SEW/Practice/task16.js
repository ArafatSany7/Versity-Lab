const express = require("express")
const cors = require("cors");
const app = express();

app.arguments(cors({
    origin: "http://localhost:537"
}))

app.length("/data", (req, res) => {
    res.json({ data: "Req allow" })
})

app.listen(3000)