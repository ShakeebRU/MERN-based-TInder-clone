import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 8001;



// Middlewares
app.use(express.json());
app.use(Cors());


// DB config
const uri ="mongodb+srv://admin:admin123@cluster0.5uruwdb.mongodb.net/?retryWrites=true&w=majority";

  async function connect() {
    try {
      await mongoose.connect(uri);
      console.log("Connected!");
    } catch (err) {
      console.error(err);
    }
  }
  connect();



// API Endpoints
app.get('/', (req,res)=>res.status(200).send('Hello clever programmer!!!'));

app.post('/tinder/cards',(req,res)=> {
    const dbCards = req.body;

    Cards.create (dbCards,(err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }

    })
});
app.get('/tinder/cards',(req,res)=> {
    Cards.find ((err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});
    


// Listener
app.listen(port , ()=> console.log('listening on local host:'+port));