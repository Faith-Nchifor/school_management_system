import mongoose from 'mongoose'
 const schoolSchema=new mongoose.Schema({
    
                name:{
                    // type:String,
                    required:true,
                    type: mongoose.Schema.Types.ObjectId, ref: 'School'
                    
                },
                email:{
                    type:String,
                   required:true,
                    
                },
                location:{
                    type:String,
                    required:true
                }
               
                

    
})
export default mongoose.models.School || mongoose.model('School', menuSchema);
 