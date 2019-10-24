const launch = document.querySelectorAll(".launch");
const status = document.querySelectorAll(".status");
const reset = document.querySelector("#reset");
const missle = document.querySelectorAll(".missle");
const timer = document.querySelectorAll(".timer");


for (let x = 0; x< launch.length; x++){
    let button = launch[x]
    let s = missle[x].innerHTML
    button.addEventListener("click", function(){
        if(status[x].id == "online"){
            status[x].innerHTML = "offline";
            status[x].id = "offline"
            alert(`${s} missle has been launched`);
            let count = (missle[x].innerHTML.length * 5)/2
            console.log(count);
            countdown(count, timer[x], x);
        }

        else if (status[x].id == "offline" && timer[x] != "00"){
            alert(`${s} missle has malfunctioned`);
            status[x].innerHTML = "malfunction";
            status[x].id = "malfunction";
           
        }
    })
}

reset.addEventListener("click", function(){
    for (let x = 0; x< status.length; x++){
       status[x].id = "online";
       status[x].innerHTML = "online";
       timer[x].innerHTML = "00";
}
alert(`missles has be reloaded`);
})

function countdown(duration, disp, i){
    var time = duration, minutes, seconds;
    var interval = setInterval(function(){
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        disp.innerHTML = seconds;

        if(status[i].id == "malfunction"){
            status[i].id = "malfunction";
            status[i].innerHTML = "malfunction";
            clearInterval(interval);
        }

        if (--time < 0) {
            status[i].id = "online";
            status[i].innerHTML = "online";
            clearInterval(interval);
        }
    }, 1000);
    
}