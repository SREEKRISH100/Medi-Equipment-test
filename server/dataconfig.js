const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/webapp');
   console.log("data base connected....");
}

//schema

const userSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    phone:Number,
 address:String,
 pass:String,
 conpass:String,
 imageUrl:String
},{timestamps:true});
 
const userSchema1=new mongoose.Schema({
   
    productname:String,
    productprice:Number,
    productquantity:Number,
    prod_used:String,
    sellerid:String,
    category:String,
    image:String,
    description:String

   
},{timestamps:true});
const userSchema2=new mongoose.Schema({
    fullname:String,
    email:String,
    phone:Number,
 address:String,
 pass:String,
 conpass:String,
 imageUrl:String
},{timestamps:true});

const orderSchema=new mongoose.Schema({
    address:String,
    prodquantity:Number,
    pid:{type:mongoose.Schema.Types.ObjectId, ref:'pro_add'},
    sellerid:{type:mongoose.Schema.Types.ObjectId, ref:'seller_reg'},
    userid:{type:mongoose.Schema.Types.ObjectId, ref:'user_reg'},
    status:{type:String, default:'nill'},

},{timestamps:true});
const paymenSchema=new mongoose.Schema({
   
    orderid:{type:mongoose.Schema.Types.ObjectId, ref:'order'},
},)
//model

const userModel=new mongoose.model('user_reg',userSchema)
const userModel1=new mongoose.model('pro_add',userSchema1)
const userModel2=new mongoose.model('seller_reg',userSchema)
const orderModel=new mongoose.model('order',orderSchema)
const paymentModel=new mongoose.model('payment_tbl',paymenSchema)
module.exports={
    userModel,
    userModel1,
    userModel2,
    orderModel,
    paymentModel

}