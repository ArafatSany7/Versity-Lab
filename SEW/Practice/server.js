const http = require("http")
const server = http.createServer((req,res)=>{
    if (req.url ==="/"){
        res.end("home")
    }
})

server.listen(3000)