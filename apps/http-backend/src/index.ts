import express from 'express';


const app = express();


app.listen(3001, () => {
    console.log("Server start at 3001")
})


app.post("/signin", (req, res) => {
    
})