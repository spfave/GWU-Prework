function getBox(){
    return document.getElementById("box");
}


function reset(){
    box = getBox();
    box.style.backgroundColor  = "orange";
    box.style.border = "none";
    box.style.margin = "25px";
    box.style.opacity = 1;
    box.style.height = "150px";
    box.style.width = "150px";
    box.classList.remove("fade-out");
    box.classList.remove("spin");
}

function blue(){
    box = getBox();
    box.style.backgroundColor  = "blue";
}

function border(){
    box = getBox();
    box.style.border = "solid black thick";
}

function fade(){
    box = getBox();
    box.style.opacity = 0.25;
}

function fadeOut(){
    box = getBox();
    box.classList.add("fade-out");
    fade()
}

function grow(){
    box = getBox();
    box.style.height = "300px";
    box.style.width = "300px";

}

function spin(){
    box = getBox();
    box.classList.add("spin");
}