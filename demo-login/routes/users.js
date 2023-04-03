var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// route login
router.get('/login',userCtrl.Login);
router.post('/login',userCtrl.Login);

router.get('/reg',userCtrl.Reg);
router.post('/reg',userCtrl.Reg);

router.get('/logout',userCtrl.Logout);




module.exports = router;
