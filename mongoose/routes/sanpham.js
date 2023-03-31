var express = require('express');
var router = express.Router();
var spCtrl = require('../controllers/sanpham.controller');

router.get('/', spCtrl.list);
router.get('/add', spCtrl.add);


var multer = require('multer');
var objUpload = multer({ dest: './tmp' });
router.post('/add',objUpload.single("file_anh"), spCtrl.add);

router.get('/add-sp', spCtrl.addSanPham);
router.post('/add-sp', spCtrl.addSanPham);

router.get('/edit/:idsp', spCtrl.editSP);
router.post('/edit/:idsp', spCtrl.editSP);


module.exports = router;