const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//settings
app.set('appName','Server_Color');
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use( (req,res,next)=>{
  //console.log("url: "+req.url);
  next();
})

app.get('/inicio',(req,res)=> {
  res.render('color.ejs');
});

const server = app.listen(3000,()=>{
    console.log("server color ok");
});
