var express = require('express');
var router = express.Router();
var api_u = require('../controllers/api/api-user') ;


router.get('/users', api_u.listUser); // ds u:  /api/users
router.post('/users', api_u.addUser); // thêm mới:  POST: /api/users

router.put('/users/:idu', api_u.updateUser); // sửa:   PUT: /api/user/123456789
router.delete('/users/:idu', api_u.listUser); // xóa  DELETE:  /api/user/123456789 


module.exports = router;
