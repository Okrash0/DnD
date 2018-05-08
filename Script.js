function d20(){
  var arr20 = [];
  var ant20 = document.getElementById('amount').value;
  
  for (var i = 0; i < ant20; i++ ){
    arr20.push(Math.floor(Math.random()*20)+1);
    
    if (arr20[i] == 20) {
      document.getElementById("butt20").style.background = "-webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet";
    }
    
    else if (arr20[i] == 1) {
      document.getElementById("dice20").style.color = "red";
      document.getElementById("butt20").style.background = "transparent";
    }
    
    else {
      document.getElementById("dice20").style.color = "#FFFFFF";
      document.getElementById("butt20").style.background = "transparent";
    }
    
  }
  
  
  document.getElementById("dice20").innerHTML = arr20;
}

function d12(){
  arr12 = [];
  ant12 = document.getElementById('amount').value;
  
  for (var b = 0; b < ant12; b++){
    arr12.push(Math.floor(Math.random()*12)+1);
  }
  
  var sum12 = arr12.reduce(add, 0);

  function add(a, b){
    return a + b;
  }
  
  if (ant12 == 1) {
    document.getElementById("dice12").innerHTML = arr12;
  }
  
  else {
    document.getElementById("dice12").innerHTML = arr12 + "=" + sum12;
  }
}

function d10(){
  var arr10 = [];
  var ant10 = document.getElementById('amount').value;
  
  for (var w = 0; w < ant10; w++){
    arr10.push(Math.floor(Math.random()*10)+1);
  }
  
  var sum10 = arr10.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }
  
  if (ant10 == 1) {
    document.getElementById('dice10').innerHTML = arr10;
  }
  
  else {
    document.getElementById('dice10').innerHTML = arr10 + "=" + sum10;
  }
}

function d8(){
  var arr8 = [];
  var ant8 = document.getElementById('amount').value;
  
  for (var w = 0; w < ant8; w++){
    arr8.push(Math.floor(Math.random()*8)+1);
  }
  
  var sum8 = arr8.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }
  
  if (ant8 == 1) {
    document.getElementById('dice8').innerHTML = arr8;
  }
  
  else {
    document.getElementById('dice8').innerHTML = arr8 + "=" + sum8;
  }
}

function d6(){
  var arr6 = [];
  var ant6 = document.getElementById('amount').value;
 
  for (var i = 0; i < ant6; i++ ){
  arr6.push(Math.floor(Math.random()*6)+1);
  }
  
  var sum6 = arr6.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }

  if (ant6 == 1) {
    document.getElementById("dice6").innerHTML = arr6;
  }
  
  else {
    document.getElementById("dice6").innerHTML = arr6 + "=" + sum6;
  }
}

function d4(){
  arr4 = [];
  ant4 = document.getElementById('amount').value;
  
  for (var v = 0; v < ant4; v++){
    arr4.push(Math.floor(Math.random()*4)+1);
  }
  
  var sum4 = arr4.reduce(add, 0);
  
  function add(a, b){
    return a + b;
  }

  if (ant4 == 1) {
    document.getElementById("dice4").innerHTML = arr4;
  }
  
  else {
    document.getElementById("dice4").innerHTML = arr4 + "=" + sum4;
  }
  
}

function closeTheme(){
  document.getElementById('change').style.display = 'none';
}

addEventListener("keydown", myFunction);

function myFunction(){
  key = event.keyCode;
  rightKey = key-48;
  //alert(key);
  if (key > 48 && key < 58 ){
    document.getElementById("amount").value = rightKey;
  }
  
  else if (key == 48){
    document.getElementById("amount").value = "10";
  }
  
  else if (key == 13){
    d20();
  }
 
  if (key == 81){d12();}
  else if (key == 87){d10();}
  else if (key == 69){d8();}
  else if (key == 82){d6();}
  else if (key == 84){d4();}
   
  if (key == 32){
    document.getElementById("dice20").innerHTML = 0;
    document.getElementById("dice12").innerHTML = 0;
    document.getElementById("dice10").innerHTML = 0;
    document.getElementById("dice8").innerHTML = 0;
    document.getElementById("dice6").innerHTML = 0;
    document.getElementById("dice4").innerHTML = 0;
  }
  
  if (event.shiftKey && key == 221){
    document.body.style.background = '#FF69B4';
    document.getElementByClassName("butt").style.background = '#FF69B4';
  }
   
  if (event.shiftKey && key == 222){
    window.open('https://okrash0.github.io/Trex/index.html');
  }
}
