var fs = require('fs');
const myMD = require('../models/sanpham.model');

exports.list = async (req, res, next)=>{

    var listSP = await myMD.spModel.find()
                    .sort( { name: 1 }  );// sắp xếp theo tên

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