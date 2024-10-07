const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/netflix')
.then(() => console.log('Connected!')).catch(e=>console.log(e));



const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());
//  app.use(cors());


const videoFolder = path.join(__dirname, 'videos');
app.use('/videos', express.static(path.join(__dirname, 'videos')));


//sighin
app.post('/signin',async(req,res)=>{
  const go= await user.create(req.body)
  res.json(go)
  console.log(go);
  })


//add data
app.post('/data',async(req,res)=>{
  const go= await show.create(req.body)
  res.json(go)
  console.log(go);
  })









//login
app.post('/Login',async(req,res)=>{
    console.log(req.body);
    const go= await user.find(req.body)
    res.json(go)
    console.log(go);
    })


    app.post('/search',async(req,res)=>{
     
      console.log(req.params.id);
        const regex = new RegExp(`^${req.body.name}`, 'i');
        const go = await show.find({name:regex})
        console.log(req.body.name);
      res.json(go)
      
      })

      app.get('/search/:id',async(req,res)=>{
        console.log(req.params.id);
        const regex = new RegExp(`^${req.params.id}`, 'i');
        const go = await show.find({name:regex})
        // const go= await show.find({name:req.params.id})
        res.json(go)
        console.log(go);
        })

//diclare variable
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;




//schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
const showsSchema=new Schema({
  link:String,
  name:String,
  type:String,
  subtype:String,
  
})





//diclare variable
const user = mongoose.model('user', userSchema);
const show = mongoose.model('show',showsSchema)

 
app.get("/show",async(req,res)=>{

  const god = await show.find({type:"Movies & Shows Dubbed in Tamil"})
  console.log(god);
  res.json(god)
})



app.get("/show1",async(req,res)=>{

  const god = await show.find({type:"Exciting TV Shows"})
  console.log(god);
  res.json(god)
})


app.get("/show2",async(req,res)=>{

  const god = await show.find({type:"Indian Crime Movies"})
  console.log(god);
  res.json(god)
})

app.get("/show3",async(req,res)=>{

  const god = await show.find({type:"Indian Comedy"})
  console.log(god);
  res.json(god)
})

app.get("/show4",async(req,res)=>{

  const god = await show.find({type:"US Movies Dubbed in Tamil"})
  console.log(god);
  res.json(god)
})

app.get("/show5",async(req,res)=>{

  const god = await show.find({type:"New on Netflix"})
  console.log(god);
  res.json(god)
})


app.get("/show6",async(req,res)=>{

  const god = await show.find({type:"Today's Top Picks For You"})
  console.log(god);
  res.json(god)
})


app.get("/show7",async(req,res)=>{

  const god = await show.find({type:"US TV Shows"})
  console.log(god);
  res.json(god)
})


app.get("/tv",async(req,res)=>{

  const god = await show.find({subtype:"TV Shows"})
  console.log(god);
  res.json(god)
})



app.get("/mo",async(req,res)=>{

  const god = await show.find({subtype:"Movies"})
  console.log(god);
  res.json(god)
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
