function preload(){
mustache=loadImage("download.png")

}
xnose=0
ynose=0

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
image(video,0,0,300,300)
image(mustache,xnose-65,ynose,130,70)
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
        xnose=(result[0].pose.nose.x)
        ynose=(result[0].pose.nose.y)

    }
    
}