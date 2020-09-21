var clock = document.querySelector("#clock");
var quotes = document.querySelector("#quotes");
var author = document.querySelector("#author");

fetch("//api.quotable.io/random?maxLength=75")
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

if(Cookies.get("color") == undefined){
    Cookies.set("color", "dark");
    document.querySelector("body").style.background = "#222";
    document.querySelector("body").style.color = "rgb(218, 197, 152)";
}

if(Cookies.get("color") == "light"){
    document.querySelector("body").style.background = "#fff";
    document.querySelector("body").style.color = "#222";
}

window.addEventListener("keyup", function(e){
    if(e.key == "ArrowRight" || e.key == "ArrowLeft"){
        if(Cookies.get("color") == "light"){
            Cookies.set("color", "dark");
            document.querySelector("body").style.background = "#222";
            document.querySelector("body").style.color = "rgb(218, 197, 152)";
        }else{
            Cookies.set("color", "light");
            document.querySelector("body").style.background = "#fff";
            document.querySelector("body").style.color = "#222";
        }
    }
})