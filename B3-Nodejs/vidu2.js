const http = require('http')
const server = http.createServer( (req,res)=>{
    // demo tương tác route
    console.log("URL: " + req.url);
    switch(req.url){
        case '/':     home (req, res);   break;
        case '/gioithieu.html': about(req, res);   break;
        default:
            res.writeHead(404, "Ban truy cap sai");
            res.end();
        break;
    }

});
const home = (req,res)=>{
    res.writeHead(200, {
        'Content-Type': "text/html"
    });
    res.write("<meta charset='utf-8'/> <h2>Trang Home </h2> ");
    res.end();
}
const about = (req,res)=>{
    res.writeHead(200, {
        'Content-Type': "text/html"
    });
    res.write("<meta charset='utf-8'/> <h2>Trang giới thiệu </h2> ");
    res.end();
}

server.listen(8080);
console.log("Server dang chay 8080");