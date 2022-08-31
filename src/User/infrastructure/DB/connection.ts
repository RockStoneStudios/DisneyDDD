import mongoose from 'mongoose';


export default mongoose.connect(process.env.DB||'mongodb://localhost:27017/DDDisney')
                               .then(()=> console.log('Connected MongoDB Database Successfull'))
                               .catch(error=>{console.log(error)})