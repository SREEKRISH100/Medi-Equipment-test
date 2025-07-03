const express=require('express');
const cors=require('cors');
const{userModel,userModel1,userModel2,orderModel,paymentModel}=require('./dataconfig')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app=express()
//multer
const {upload}=require('./multercodes/uploadfile')
app.use(express.static('productimage'));//image display

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.post("/addproduct",upload.single('image'),(req,res)=>{
    const{productname}=req.body;
    const{productquantity}=req.body;
    const{sellerid}=req.body;
    console.log(sellerid)
    const{productprice}=req.body;
    const{prod_used}=req.body;
    const{category}=req.body;
    const{description}=req.body;
    console.log(productname)
    console.log(productprice)
    const image=req.file.filename;
     userModel1.create({
        productname,
        productquantity,
        sellerid,
        productprice,
        prod_used,
        category,
        image,
        description
     })
    res.json("success")
})
app.post("/orderproduct",(req,res)=>{
    const{address,prodquantity,sellerid,userid,pid}=req.body;
     console.log(prodquantity,"order")
    const newOrder=new orderModel(req.body)
    newOrder.save()

    res.json("success")
})
app.get("/getAllOrder",async(req,res)=>{
    const result=await orderModel.find().populate("sellerid").populate("userid").populate("pid")
    res.json(result)
})
app.get("/getAllOrderbyuserid/:userid",async(req,res)=>{
    const userid=req.params.userid
    const result=await orderModel.find({'userid':userid}).populate("sellerid").populate("userid").populate("pid")
    res.json(result)
})
app.get("/getAllOrderbysellerid/:sellerid",async(req,res)=>{
    const sellerid=req.params.sellerid
    const result=await orderModel.find({'sellerid':sellerid}).populate("sellerid").populate("userid").populate("pid")
    res.json(result)
})
//userregister

app.post("/register",upload.single('image'),async(req,res)=>{
    const {fullname,email,phone,address,pass,conpass}=req.body;
    // const imageUrl=req.body.filename;
    const result=await userModel.find({"email":email})
    if(result.length>0){
        res.json({'status':0,'msg':'email already existing'})
    }
    else{
        bcrypt.hash(pass, saltRounds, function(err, pass) {
            // Store hash in your password DB.
            userModel.create({
                fullname,
                email,
                phone,
                address,
                pass,
                conpass,
                // imageUrl
            })
            res.json({'status':1,'msg':"Thank You For Register Here !"})
           
        });
 
}
   
})

//sellerregister 
app.post("/sellerregister",upload.single('image'),async(req,res)=>{
    const {fullname,email,phone,address,pass,conpass}=req.body;
    // const imageUrl=req.body.filename;
    const result=await userModel2.find({"email":email})
    if(result.length>0){
        res.json({'status':0,'msg':'email already existing'})
    }
    else{
        bcrypt.hash(pass, saltRounds, function(err, pass) {
            // Store hash in your password DB.
            userModel2.create({
                fullname,
                email,
                phone,
                address,
                pass,
                conpass,
                // imageUrl
            })
            res.json({'status':1,'msg':"Thank You For Register Here !"})
           
        });
 
}
   
})
//payment 
app.post("/paymentprocess/:orderid",async(req,res)=>{
    console.log(req.params.orderid)
     
     const order=await orderModel.find({_id:req.params.orderid}).populate('pid')
     const stock=order[0].pid.productquantity;
     const pid=order[0].pid._id
     const qty=order[0].prodquantity;

     await orderModel.updateOne({_id:req.params.orderid},{status:"payment completed"})
    
    
     console.log(qty)
    let newqty=stock-qty;
    console.log(newqty)
   
     await userModel1.updateOne({_id:pid},{productquantity:newqty})
   
    
    
    console.log(stock)
     res.json("continue to payment process")
     
})
app.get("/paymentpage/:orderid",async(req,res)=>{
    console.log(req.params.orderid)
     
     const order=await orderModel.find({_id:req.params.orderid}).populate('pid')
    //  const stock=order[0].pid.productquantity;
      const pid=order[0].pid._id
    //  const qty=order[0].prodquantity;
   //const prod=await orderModel.find({_id:req.params.orderid}).populate('user_tbl')
    
    
    //  console.log(qty)
    // let newqty=stock-qty;
    // console.log(newqty)
    const user= await userModel1.find({_id:pid})
    
    
    // console.log(stock)
    //  res.json({'prod':prod,'user':user})
    res.json({'prod':order,'user':user})
     
})

app.get("/paymentpage",async(req,res)=>{
    console.log(req.params.orderid)
     
     const order=await orderModel.find().populate('pid')
    //  const stock=order[0].pid.productquantity;
      const pid=order[0].pid._id
    //  const qty=order[0].prodquantity;
   //const prod=await orderModel.find({_id:req.params.orderid}).populate('user_tbl')
    
    
    //  console.log(qty)
    // let newqty=stock-qty;
    // console.log(newqty)
    const user= await userModel1.find({_id:pid})
    
    
    // console.log(stock)
    //  res.json({'prod':prod,'user':user})
    res.json({'prod':order,'user':user})
     
})

app.get("/cancelorder/:orderid",async(req,res)=>{
    console.log(req.params.orderid)

    await orderModel.updateOne({_id:req.params.orderid},{status:"Cancelled"})
    res.json("Order Cancelled.Amount will be deducted in 3 banking days")
})


//login
app.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    console.log(email,pass)
    const result=await userModel.find({"email":email})
    if(result.length>0){
        const pwd=result[0].pass;
        const idn=result[0]._id;
        const name=result[0].fullname;
        bcrypt.compare(pass, pwd).then(function(result) {
            // result == true
            if(result==true){
                res.json({'status':1,'msg':"successfully login","userid":idn,"username":name})
            }
            else{
                res.json({'status':0,'msg':"Incorrect Password"})
            }
        });
        
    }
    else{
       
            res.json({'status':0,'msg':"User Not Found"})
 
}
   
})

app.post("/sellerlogin",async(req,res)=>{
    const {email,pass}=req.body;
    console.log(email,pass)
    const result=await userModel2.find({"email":email})
    if(result.length>0){
        const pwd=result[0].pass;
        const idn=result[0]._id;
        const name=result[0].fullname;
        bcrypt.compare(pass, pwd).then(function(result) {
            // result == true
            if(result==true){
                res.json({'status':1,'msg':"successfully login","userid":idn,"username":name})
            }
            else{
                res.json({'status':0,'msg':"Incorrect Password"})
            }
        });
        
    }
    else{
       
            res.json({'status':0,'msg':"User Not Found"})
 
}
   
})

app.get("/fetchAllemp",async(req,res)=>{
 const result=await userModel.find();
 if(result.length>0)
 {
    res.json(result)
 }   
 else
 {
    res.json([])
 }
})
 //fetch all product 
app.get("/fetchAllprd",async(req,res)=>{
    const result=await userModel1.find();
    if(result.length>0)
    {
       res.json(result)
    }   
    else
    {
       res.json([])
    }
   })

//fetchbyid user
   app.get("/fetchByid/:idn",async(req,res)=>{
    const idno=req.params.idn;
    const result=await userModel.find({'_id':idno});
    if(result.length>0)
    {
       res.json(result)
    }   
    else
    {
       res.json([])
    }
   })

   app.put("/updateData/:idn",async(req,res)=>{
     const {fullname,email,address,phone}=req.body
    
    console.log(fullname)
    console.log(email)
    console.log(req.params.idn)
    const  dt={
        fullname:fullname,
        email:email,
        address:address,
        phone:phone
    }
   await userModel.updateOne({'_id':req.params.idn},dt)
res.json("update successfully")

   })

   app.post("/updateProduct/:productid",async(req,res)=>{
    const {productname,productquantity,productprice}=req.body
   
   console.log(productname)
   console.log(productquantity)
   const  dt={
    productname:productname,
    productquantity:productquantity,
    productprice:productprice,
   }
  await userModel1.updateOne({'_id':req.params.productid},dt)
res.json("update successfully")

  })

   app.get("/fetchAlluser",async (req,res)=>{
    const record=await userModel.find()
    if(record.length>0){
      res.json(record)
    }
    else{
      res.json([])
    }
  })

  
  app.get("/deleteusers/:id",async (req,res)=>{
   await userModel.deleteOne({'_id':req.params.id})
      res.json("data delete successfull")
  
  }) 

  app.get("/fetchAllseller",async (req,res)=>{
    const record=await userModel2.find()
    if(record.length>0){
      res.json(record)
    }
    else{
      res.json([])
    }
  })

  app.get("/deletesellers/:id",async (req,res)=>{
   await userModel2.deleteOne({'_id':req.params.id})
      res.json("data delete successfull")
  
  }) 


  app.get("/deleteproducts/:id",async (req,res)=>{
    await userModel1.deleteOne({'_id':req.params.id})

       res.json("data delete successfull")
   
   })

   app.get("/deleteorder/:id",async (req,res)=>{
    await orderModel.deleteOne({'_id':req.params.id})

       res.json("data delete successfull")
   
   })

   app.get("/editByid/:id",async(req,res)=>{
    const idno=req.params.id;
    const result=await userModel.find({'_id':idno});
    if(result.length>0)
    {
       res.json(result)
    }   
    else
    {
       res.json([])
    }
   })
//product by id
   app.get("/editByid1/:id",async(req,res)=>{
    const idno=req.params.id;
    const result=await userModel1.find({'_id':idno});
    if(result.length>0)
    {
       res.json(result)
    }   
    else
    {
       res.json([])
    }
   })
   
//    app.put("/updateProfile/$id",async(req,res)=>{
//     const idno=req.params.id;

//    })
   

app.listen(9000,()=>{
    console.log("server running http://localhost:9000")
})  