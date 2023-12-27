import mongoose from 'mongoose'
 const studentSchema=new mongoose.Schema({
    
                school:{
                    // type:String,
                    required:true,
                    type: mongoose.Schema.Types.ObjectId, ref: 'School'
                    
                },
                matricule:{
                    type:String,
                   required:true,
                    
                },
                name:{
                    type:String,
                    required:true
                },
                department:{
                    type:String
                }
                

    
})
export default mongoose.models.Student || mongoose.model('Student', menuSchema);
 