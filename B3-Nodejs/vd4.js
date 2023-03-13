const http = require('http')
const fs = require('fs');


const server = http.createServer((req,res)=>{
    // ghi log url
    console.log(req.url);
    switch(req.url){
        
        case '/logo.png':
            fs.readFile('images/logo.png', (err, data)=>{
                if(err)
                    throw err;
                console.log(data); // log ra dạng byte
                // header xuống image thì không viết  writeHead...
                return res.end(data);
            })

        break;
        
        default:
            // câu thông báo của header không chấp nhận tiếng Việt có dấu
            res.writeHead(404,"Dia chi website khong ton tai");
            res.end();
        break;
    }
})
 
server.listen(8080, 'localhost',(err)=>{
    if(err)
        console.log(err);
    
    console.log("Server running http://localhost:8080 ");
});
// chạy lệnh:   node vd4.js
// vào trình duyệt web với địa chỉ: http://localhost:8080/logo.png  ==> có hiện ảnh
