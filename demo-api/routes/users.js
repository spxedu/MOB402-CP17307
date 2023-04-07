var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
var check_login = require('../middleware/check_login');

// middleware cho toàn bộ các router phía dưới
router.use( (req, res, next)=>{
    console.log("---> Đã gọi middleware .....");
    next();
});


/* GET users listing. */
router.get('/', check_login.yeu_cau_login ,function(req, res, next) {
  res.send('respond with a resource');
});

// route login
router.get('/login', check_login.khong_yc_login ,userCtrl.Login);
router.post('/login',check_login.khong_yc_login ,userCtrl.Login);

router.get('/reg',check_login.khong_yc_login ,userCtrl.Reg);
router.post('/reg',check_login.khong_yc_login ,userCtrl.Reg);

router.get('/logout',check_login.yeu_cau_login,userCtrl.Logout);




module.exports = router;
