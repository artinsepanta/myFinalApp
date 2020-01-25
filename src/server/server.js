const express = require("express");
const bodyParser = require("body-parser");
const serviceReportRouter = require('./routers/serviceReport');


const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/serviceReport', serviceReportRouter)

app.use(express.static('public'))
  
app.get('/', (req, res) => {
   res.send('Welcome to our server!') 
})
app.post('/api/post',verifyToken,(req,res)=>{
  jwt.verify(req.token,'secretkey',(err,authData)=> {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message:'post created...',
        authData
      });
    }
  });
});

app.post('/api/logger',(req,res)=>{
  const user= {
    id : 1,
    username: "testuser",
    password: "password"
 }
  jwt.sign({user},'secretkey',{expiresIn: '30'}, (err,token) =>{
    res.json({
      token
    });
  });
});

function verifyToken(req, res, next) {
  const bearerHeader=req.headers['authorization'];
  if(typeof bearerHeader !=='undefined') {
    const bearer = bearerHeader.split(' ');
   const bearerToken = bearer[1];
   req.token = bearerToken;
   next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});