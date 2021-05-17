const express=require("express")
const connectDB=require("./config/db")
const app=express()
var cors = require('cors')
app.use(cors()) 
// app.use((req, res, next) => {
//     //CORS
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS,DELETE');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin'
//     );
//     next();
//   });
// connect DB
connectDB()

// init middleware
app.use(express.json({extended:false}))

app.get("/",(req,res)=>{
    res.send("API is working")
})

// Define Routes
app.use("/api/users",require("./routes/api/users"))
app.use("/api/auth",require("./routes/api/auth"))
app.use("/api/post",require("./routes/api/posts"))
app.use("/api/profile",require("./routes/api/profile"))


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})







    