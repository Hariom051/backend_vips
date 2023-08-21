const URL = 'mongodb+srv://admin1234:admin1234@cluster0.iwegm7o.mongodb.net/userdb?retryWrites=true&w=majority';
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error During DB Connection ', err);
})
export default mongoose;