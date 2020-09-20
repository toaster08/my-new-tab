var clock = document.querySelector("#clock");
var quotes = document.querySelector("#quotes");
var author = document.querySelector("#author");

fetch("http://api.quotable.io/random?maxLength=75")
    .then((resp) => resp.json())
    .then(function(data){
        quotes.innerText = '"' + data.content + '"';
        author.innerText = "- " + data.author;
    });

function currentTime(){
    var date = new Date();
    var h = timeChange(date.getHours());
    var m = timeChange(date.getMinutes());
    clock.innerText = h + ":" + m;
    setTimeout(currentTime, 1000);
}

function timeChange(num){
    if(num < 10){
        return "0" + num;
    }else{return num;}
}

currentTime();