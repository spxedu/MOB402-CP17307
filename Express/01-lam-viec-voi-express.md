## Khởi tạo Express
1. Tạo thư mục mới, mở cửa sổ lệnh và CD vào trong thư mục vừa tạo, chạy lệnh:  
```
npm init 
```
Tham khảo: https://expressjs.com/en/starter/hello-world.html 
2. Chạy lệnh để cài đặt module express về: 
```
npm install express --save 
``` 
 
3. Tạo file index.js và viết code:

```javascript
      var express = require('express');
      var app = express();

      app.get('/', (req,res)=>{
          res.send("<h1>Xin chao express </h1>");
      });

      app.get('/gioithieu.html', (req,res)=>{
          res.send("<h1>Trang giới thiệu</h1>");
      })


      app.listen(8080, (err)=>{
          if(err)
              console.log(err);

          console.log("Server đã chạy ");
      })
```
4. Chạy lệnh: node index.js và mở   trình duyệt web vào địa chỉ: http://localhost:8080 để xem kết quả
