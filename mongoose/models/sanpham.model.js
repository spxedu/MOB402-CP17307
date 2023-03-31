var db = require('./db');
const spSchema = new db.mongoose.Schema(
    {// đối tượng này định nghĩa cấu trúc của model
        name: { type: String , required: true },
        price: { type: Number, required: true },
        description: {type: String, required: false },
        id_theloai: {type: db.mongoose.Schema.Types.ObjectId, ref: 'theLoaiModel'}
    },
    {  collection: 'san_pham'}
  );
// nếu muốn làm thêm về thể loại thì có thể định nghĩa ở đây.
const theLoaiScheme = new db.mongoose.Schema( {
    name: { type: String , required: true}
}, 
{collection: 'the_loai'});
//Tạo model
let spModel = db.mongoose.model('spModel', spSchema );
let theLoaiModel  = db.mongoose.model('theLoaiModel', theLoaiScheme );

module.exports = { spModel, theLoaiModel };