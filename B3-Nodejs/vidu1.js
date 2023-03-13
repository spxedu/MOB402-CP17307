var http = require('http');
var server = http.createServer( (req, res)=>{
    res.writeHead(200,"Ket noi thanh cong", {
        'Content-Type':'text/html',
        'abc':'xyz'
    } );

    res.write("xin chao <br> <h2>ABC</h2>");
    res.end(); 
} );

server.listen(8080, 'localhost',(err)=>{
    if(err)
        console.log(err);
    
    console.log("Server running http://localhost:8080 ");
});
// chạy lệnh:   node vidu.js

