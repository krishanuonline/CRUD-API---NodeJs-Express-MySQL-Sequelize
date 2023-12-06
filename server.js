const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "https://localhost:8001"
}

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//testing API
app.get("/",(req,res)=>{
    res.json({msg:"hello from test api"})
});

//PORT

const PORT = process.env.PORT || 8080;

//SERVER
app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
})