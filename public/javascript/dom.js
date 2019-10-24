const launch = document.querySelectorAll(".launch");
const status = document.querySelectorAll(".status");
const reset = document.querySelector("#reset");


for (let x = 0; x< launch.length; x++){
    let button = launch[x]
    button.addEventListener("click", function(){
        if(status[x].id == "online"){
            status[x].innerHTML = "offline";
            status[x].id = "offline"
        }

        else if (status[x].id == "offline"){
            status[x].innerHTML = "malfunction";
            status[x].id = "malfunction"
        }
    })
}

reset.addEventListener("click", function(){
    for (let x = 0; x< status.length; x++){
       status[x].id = "online";
       status[x].innerHTML = "online";
}
})