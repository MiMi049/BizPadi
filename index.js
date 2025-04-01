const express = require("express")
const app = express()
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json());


app.get('/', async(req, res) =>{
        const client = await pool.connect()

        try {
            
            const result = await client.query 
            res.json(result);

        } catch (error) {
            console.log(error)
        }finally{
            client.release();
        }
    res.status(404)
})

app.listen(3001, console.log("Server Running"))
