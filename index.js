const express = require('express')
const cors = require('cors')


const app = express();
app.use(express.json())

app.use(cors());

app.get("/data", (req,res) => {
    res.json({nsg:"hello from srver"})
});


app.post("/post", (req,res) => {
    const data = req.body
    console.log(data);
    res.json(data)
    
})

app.listen(3000, () => {
    console.log("server running");
    
})




