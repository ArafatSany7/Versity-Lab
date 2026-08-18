const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello home")
    }else if (req.url =="/about"){
        res.end("About page");
        
    }
    else{
        res.statusCode = 404;
        res.end("Not found")
    }
})