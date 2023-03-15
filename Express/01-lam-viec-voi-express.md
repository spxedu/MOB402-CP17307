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

## Sử dụng nodemon để tự động khởi động lại server khi sửa file js
https://www.npmjs.com/package/nodemon 

Chạy lệnh:
``` 
npm install nodemon -g --save

sau đó chạy lệnh dưới để kiểm tra, nếu có phiên bản hiện lên là thanh công:
nodemon -v 

```
sau đó chạy lệnh sau để  khởi động server

```
nodemon node index.js
```


## Sử dụng Express generator

Chạy lệnh sau để cài express về máy tính
```
npm install -g express-generator 
```
chạy lệnh sau để tạo project 
```
express --view=ejs thuc-hanh-exp
```
trong đó: thuc-hanh-exp là tên project bạn  muốn tạo
Tiếp theo chạy lệnh để cài node module
```
npm install
```
Chạy lệnh sau để bắt đầu start project
```
 npm start
// nếu có nodemon thì bạn thêm nodemon vào  trước
nodemon npm start
```

## View template engine 
https://ejs.co/ 


