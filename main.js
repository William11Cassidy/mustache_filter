function preload(){
mustache=loadImage("mustache.avif")
}


function   setup(){
canvas=createCanvas(300,300)
canvas.center()
}


function  draw(){
image(mustache,50,50,100,70)
}
function takesnapshot(){
    save("clownfilter.png")
}