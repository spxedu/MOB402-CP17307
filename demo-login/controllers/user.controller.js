const myMD = require('../models/user.model');

exports.Login = (req, res, next)=>{
    let msg = '';

    res.render('user/login', {msg:msg})
}
exports.Reg = async (req, res, next)=>{
    let msg = '';

    if(req.method=='POST'){
        console.log(req.body);
        //kiểm tra hợp lệ
        if(req.body.passwd != req.body.passwd2){
            msg = 'Xác nhận password không đúng';
            return res.render('user/reg', {msg:msg});
        }
        // nếu có kiểm tra khác thì viết ở đây...

        //lưu CSDL
        try {
            let objU = new myMD.userModel();
            objU.username = req.body.username;
            objU.passwd = req.body.passwd;
            objU.email = req.body.email;

            await objU.save();
            msg = 'Đăng ký thành công';

        } catch (error) {
            msg = "Lỗi: " + error.message;
        }

    }


    res.render('user/reg', {msg:msg})

}
exports.Logout = (req, res, next)=>{
    
}