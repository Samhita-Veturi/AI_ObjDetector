Object_Detector = "";
Input_Status = "";
Input = "";
function preload(){}
function setup(){
    Canvas = createCanvas(500, 400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}
function draw(){
    image(Video, 0, 0, 500, 400);
}
function Start(){
    Object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Model Status: Detecting Objects";
    Input = document.getElementById("User").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    Input_Status = true;
}