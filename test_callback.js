
function contador(num,callback){
  n=num+1;
  console.log("i:"+n);
  callback(nume);
}

contador(1,function(num){
  contador(num,function(nume){
    contador(nume,function(numer){
      contador(numer,function(numeri){
        console.log("fin");
      });
    });
  });


});
