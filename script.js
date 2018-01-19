
function d20(){
  var arr20 = [];
  var ant20 = document.getElementById('d6').value;
  
   for (var i = 0; i < ant20; i++ ){
  arr20.push(Math.floor(Math.random()*20)+1);
  }
  
  document.getElementById("dice20").innerHTML = arr20;
}

function d4(){
  arr4 = [];
  ant4 = document.getElementById('d6').value;
  
  for (var v = 0; v < ant4; v++){
    arr4.push(Math.floor(Math.random()*4)+1);
  }
  
  console.log(arr4);
  
  var sum4 = arr4.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }
  console.log(sum4);
  document.getElementById("dice4").innerHTML = arr4 + "=" + sum4;
  
}

function d6(){
  var arr6 = [];
  var ant6 = document.getElementById('d6').value;
 
  for (var i = 0; i < ant6; i++ ){
  arr6.push(Math.floor(Math.random()*6)+1);
  }
  
  console.log(arr6);
  
  var sum6 = arr6.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }
  console.log(sum6);
  document.getElementById("dice6").innerHTML = arr6 + "=" + sum6;
}

function d8(){
  var arr8 = [];
  var ant8 = document.getElementById('d6').value;
  
  for (var w = 0; w < ant8; w++){
    arr8.push(Math.floor(Math.random()*8)+1);
  }
  
  var sum8 = arr8.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }
  
  document.getElementById('dice8').innerHTML = arr8 + "=" + sum8;
}

function d12(){
  arr12 = [];
  ant12 = document.getElementById('d6').value;
  
  for (var b = 0; b < ant12; b++){
    arr12.push(Math.floor(Math.random()*12)+1);
  }
  
  console.log(arr12);
  
  var sum12 = arr12.reduce(add, 0);

  function add(a, b){
    return a + b;
  }
  console.log(sum12);
  document.getElementById("dice12").innerHTML = arr12 + "=" + sum12;
  
}
