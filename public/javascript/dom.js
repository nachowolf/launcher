const launch = document.querySelectorAll(".launch");
const status = document.querySelectorAll(".status");
const reset = document.querySelector("#reset");
const missle = document.querySelectorAll(".missle");


for (let x = 0; x< launch.length; x++){
    let button = launch[x]
    let s = missle[x].innerHTML
    button.addEventListener("click", function(){
        if(status[x].id == "online"){
            status[x].innerHTML = "offline";
            status[x].id = "offline"
                //`$(missle[x].innerHTML) has been launched`
            alert(`${s} missle has been launched`);
        }

        else if (status[x].id == "offline"){
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
}
})