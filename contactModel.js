const mongoose= require('mongoose');
//  setup schema 
// mongoose.set('strictQuery', false)
const hubSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        gender:String,
        phone:String,
        create_date: {
            type: Date,
            default: Date.now
        }
    }
)
// expoet contact model

module.exports=mongoose.model('hubs',hubSchema);
// don't need to exports schema because schema already use in model 