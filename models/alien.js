const mongoonse=require('mongoose');


const alienSchema=new mongoonse.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
});
module.exports=mongoonse.model('Alien',alienSchema);