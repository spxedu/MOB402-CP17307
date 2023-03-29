var db = require('./db');
const spSchema = new db.mongoose.Schema(
    {// đối tượng này định nghĩa cấu trúc của model
        name: { type: String , required: true },
        price: { type: Number, required: true },
        description: {type: String, required: false }
    },
    {  collection: 'san_pham'}
  );
// nếu muốn làm thêm về thể loại thì có thể định nghĩa ở đây.

//Tạo model
let spModel = db.mongoose.model('spModel', spSchema );
module.exports = { spModel };