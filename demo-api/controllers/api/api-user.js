var md = require('../../models/user.model')
var objReturn = { // mẫu đối tượng trả về của api
    status: 1,
    msg: 'OK'
}
exports.listUser = async (req, res, next)=>{
    // các thao tác xử lý ở đây
    let list = [];
    try {
        list = await md.userModel.find();
        if(list.length> 0)
            objReturn.data = list;
        else
            {
                objReturn.status = 0;
                objReturn.msg = 'Không có dữ liệu phù hợp';
            }
    } catch (error) {
        objReturn.status = 0;
        objReturn.msg = error.message;
    }

    res.json( objReturn );
}
exports.addUser = (req, res, next)=>{
     // các thao tác xử lý ở đây
    objReturn.msg = "Chức năng thêm OK";

     res.json( objReturn );
}
exports.updateUser = (req, res, next)=>{
     // các thao tác xử lý ở đây


     res.json( objReturn );
}
exports.deleteUser = (req, res, next)=>{
     // các thao tác xử lý ở đây


     res.json( objReturn );
}