import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
username : {
  type : String,
  requiried : true,
  unique : true,
  lowercase : true
},
email : {
  type : String,
  requiried : true,
  unique : true,
  lowercase : true
},
password : {
  type : String,
  required : true
}
},{timestamps : true});

export const User = mongoose.model("User",userSchema);
