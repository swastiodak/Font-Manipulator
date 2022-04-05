rightwristx=0;
leftwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(450, 500);
    canvas=createCanvas(950, 600);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("model has loaded");
}

function gotPoses(results){
    if (results.length>0){
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}

function draw(){
    background("lightgrey");
    textSize(difference);
    fill("blue");
    text('Swasti', 50, 300);
}