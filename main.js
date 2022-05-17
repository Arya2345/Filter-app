function preload(){

}

function setup(){    
canvas=createCanvas(500,500);
canvas.position(400,300);
video=createCapture(VIDEO);
video.hide();
tint_colour="";
}

function draw(){
image(video,0,0,500,500);
tint(tint_colour);
}

function filter1(){
tint_colour=document.getElementById("colour").value;
}

function take_snapshot(){
    save("mypic.png");
}