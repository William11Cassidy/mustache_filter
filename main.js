function preload(){
mustache=loadImage("mustache.avif")

}


function   setup(){
canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResult)
}


function  draw(){
image(mustache,50,50,100,70)
}
function takesnapshot(){
    save("mustachefilter.png")
}

function modelLoaded() {
    console.log("poseNet is loaded");
}


function gotResult(result) {
    if (result.length>0) {

        console.log(result);
        console.log("x= " + result[0].pose.nose.x + " \n y= " + result[0].pose.nose.y);
    }
}