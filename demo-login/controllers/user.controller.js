const myMD = require('../models/user.model');

exports.Login = async (req, res, next)=>{
    let msg = '';
    if(req.method == 'POST'){
        try {
            let objU = await myMD.userModel.findOne({username: req.body.username});
            console.log(objU);
            if(objU != null ){
                // tồn tại username ==> kiểm tra passwd
                if(objU.passwd == req.body.passwd){
                    // đúng thông tin tài khoản ==> lưu vào session
                    req.session.userLogin = objU; 
                    // chuyển trang về trang quản trị
                    return res.redirect('/users');
                }else{
                    msg = 'Sai password';
                }

            }else{
                msg = 'Không tồn tại tài khoản: ' + req.body.username;
            }

        } catch (error) {
            msg = error.message;
        }
    } 

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