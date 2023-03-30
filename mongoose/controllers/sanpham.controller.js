var fs = require('fs');
const myMD = require('../models/sanpham.model');

exports.list = async (req, res, next)=>{
        // thêm chức năng lọc
    let dieu_kien_loc = null;
    //giả sử lọc theo giá tiền
    if(typeof( req.query.price) != 'undefined') {
        dieu_kien_loc = { price: req.query.price  };
    } // chạy thử: ?price=20000

    var listSP = await myMD.spModel.find(  dieu_kien_loc   )
                    .sort( { name: 1 }  );// sắp xếp theo tên

    // nếu lấy 1sp;  
    // var obj = await myMD.spModel.findById()

    console.log(listSP[0]);
    res.render('sanpham/list', { listSP: listSP });
}

exports.add = (req, res, next)=>{

    console.log(req.file, req.body);
    if(req.method =='POST'){
        // xử lý file upload
        // di chuyển file từ thư mục tmp sang public/uploads
        //fs.rename(đường dẫn gốc, đường dẫn mới, callback)
        fs.rename(req.file.path,
                 './public/uploads/'+ req.file.originalname,
                 (err)=>{
                    if(err)
                        console.log(err);
                    else{
                        // không có lỗi, tạo url, bỏ chữ public/
                    console.log("Url: http://localhost:3000/uploads/" +req.file.originalname );
                    }
                 }) 
    }
    res.render('sanpham/add');
}

exports.addSanPham = async (req, res, next)=>{
    // xử lý post:
    let msg = ''; // biến để truyền thông báo ra màn hình
    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu ở đây

        // tạo đối tượng model và gán dữ liệu
        let objSP = new myMD.spModel ();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        // thực hiện Ghi vào CSDL
        try {
            let new_sp = await objSP.save();
            console.log( new_sp );
            msg = 'Đã thêm thành công';
        } catch (error) {
            msg ='Lỗi '+ error.message;
            console.log(error);
        }

    }

    res.render('sanpham/add-san-pham', { msg: msg});
}

