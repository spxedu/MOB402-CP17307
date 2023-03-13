var http = require('http');
var fs = require('fs');
var server = http.createServer( (req, res)=>{
   
    // chỉnh sửa ở đây
    console.log("Url:  " + req.url);
    // kiểm tra nếu truy cập vào ảnh nào đó thì hiển thị ra ảnh
    switch(req.url){
        case '/logo.png':
            // // đọc file và trả về trình duyệt
        
            fs.readFile('images/logo.png', (err, data)=>{
                if(err)
                    throw err;
                console.log(data); // log ra dạng byte
                // header xuống image thì không viết  writeHead...
                return res.end(data); 
            })

            break;
        default:
            res.writeHead(404,"Dia chi website khong ton tai");
            
            break;
    }

    //res.end(); // lệnh này sẽ làm kết thúc kết nối khi chưa đọc xong file dữ liệu
} );
 
server.listen(8080, 'localhost',(err)=>{
    if(err)
        console.log(err);
    
    console.log("Server running http://localhost:8080 ");
});
// chạy lệnh:   node vd3-image.js

// vào trình duyệt web với địa chỉ: http://localhost:8080/logo.png   ==> không hiện ảnh