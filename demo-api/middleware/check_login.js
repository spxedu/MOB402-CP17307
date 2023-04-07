exports.yeu_cau_login = (req, res, next)=>{
    if(req.session.userLogin){
        // có tồn tại session login (đã đăng nhập)
        next();
    }else{
        return res.redirect('/users/login');
    }
}

exports.khong_yc_login = (req, res, next)=>{
    if(!req.session.userLogin){
        next();
    }else{
        // đã login rồi thì về trang chủ hay quản trị gì đó
        return res.redirect('/users');
    }
}