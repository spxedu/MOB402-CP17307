const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bh_07')
        .catch((err)=>{
            console.log('Loi ket noi CSDL');
            console.log(err);
        });

module.exports = { mongoose }; 
// Một số trường hợp báo lỗi timeout... 
// thì đổi chữ: localhost thành 127.0.0.1