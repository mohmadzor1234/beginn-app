var countDown = new Date();
countDown = new Date(countDown.getFullYear() + 1 ,countDown.getMonth() - 6 , 1);

setInterval(function(){
   var now  = new Date();
   var deff = countDown - now;
   var month = document.getElementById('month').innerHTML = Math.floor(deff / (30 * 24 * 60 * 60 * 1000))
   var days  = document.getElementById('days').innerHTML = Math.floor(deff % (30 * 24 * 60 * 60 * 1000) / ( 24 * 60 * 60 * 1000))
   var hours  =document.getElementById('hours').innerHTML =  Math.floor(deff % ( 24 * 60 * 60 * 1000) / (  60 * 60 * 1000))
   var mint  = document.getElementById('mint').innerHTML = Math.floor(deff % ( 60 * 60 * 1000) / ( 60 * 1000))
   var seconds  = document.getElementById('seconds').innerHTML = Math.floor(deff %  ( 60 * 1000) / 1000 )

//    console.log(seconds)
},1000)