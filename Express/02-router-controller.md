## 1.Tạo controller
- Tạo thư mục controllers trong thư mục ứng dụng
- Tạo file sanpham.controller.js 

```javascript
exports.getListSanPham = (req,res,next)=>{
    res.render( 'sanpham/list', { tieuDe: "Danh sách SP đã bán" } )
}
```
## 2. Tạo view
- Tạo thư mục là sanpham ở trong thư mục /views
- Trong thư mục sanpham  vừa tạo, hãy tạo thêm file list.ejs 
```
<h1>Danh sách sản phẩm</h1>
Biến truyền từ Controller: <%= tieuDe  %>
```

## 3. Tạo router
- Tạo thêm file sanpham.js trong thư mục routers/
```javascript
var express = require('express');
var router = express.Router();
// nhúng controller 
var sanphamController = require('../controllers/sanpham.controller');
router.get('/list', sanphamController.getListSanPham  );
module.exports = router;
// http://localhost:3000/sp/list
```

## 4. Khai  báo router trong file app.js

Viết lệnh sau ở phía trước dòng var app = express();
```
var sanphmRouter = require('./routes/sanpham');
```

 Viết lệnh sau ở phía dưới lệnh app.use('/', indexRouter);
```
app.use('/sp', sanphmRouter);
```
## 5. Chạy ung dung 

http://localhost:3000/sp/list
