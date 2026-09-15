let enter = document.querySelector("#enter");

function leesInput(){
    welkomTitel.innerHTML += naam.value;
}

enter.addEventListener("click", leesInput);



let klik = 0;
let body = document.body;

document.getElementById("clickme").onclick = function(){
    klik++;

    if (klik == 1)
    {
        body.style.backgroundColor = "red";
    } 
    else if (klik == 2)
    {
        body.style.backgroundColor = "blue";
    }
    else if (klik == 3)
    {
        body.style.backgroundColor = "yellow";
    }
    else if (klik == 4)
    {
        body.style.backgroundColor = "green";
        klik = 0;
    }
}