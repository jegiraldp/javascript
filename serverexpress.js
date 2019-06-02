const express = require('express');
const app = express();
const cua = require('./cuadrado.js');
const bodyParser = require('body-parser');

//settings
app.set('appName','Server One');
app.set('views',__dirname+'/views')
app.set('view engine','ejs');
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));

app.use( (req,res,next)=>{
  //console.log("url: "+req.url);
  next();
})

app.get('/',(req,res)=> {
  //res.write('<b>hola</b><br/>');
  //res.end('finalice');
  res.render('index.ejs');
});

app.get('/login',(req,res)=> {
  res.write('<b>hola aqui va el login</b><br/>');
  res.end('finalice login');
});

app.get('/calcuadrado',(req,res)=> {
  //const nume=req.query.txtNum;
  const cuadrado=0;
  res.render('cuadrado.ejs',{cuadrado:cuadrado});
});


app.post('/calcuadrado',(req,res)=> {
  const nume = req.body.txtNum;
  const cuadrado=cua.calcular(nume);
  res.render('cuadrado.ejs',{cuadrado:cuadrado,numero:nume});
});

/*app.get('*',(req,res,next)=> {
  res.write('<b>Hola ---  Archivo no encontrado</b><br/>');
  res.end('Done');
});*/



const server = app.listen(3000,()=>{
    console.log("server ok -- :) -- "+app.get('appName')+' presiona Ctrl-C para terminar.' );
});
