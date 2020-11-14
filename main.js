function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Hv049KMG8/model.json",modeloaded)
}

function modeloaded(){
    console.log("Model has Been Loaded.");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, Getresults);
}

function Getresults(error, results){
    if (error){
        console.log(error);
    }
    if (results){
            console.log(results);
            member = results[0].label;
            console.log(member);
            accuracy = results[0].confidence.toFixed(3);
            console.log(accuracy);
            document.getElementById("membername").innerHTML=member;
            document.getElementById("Accuracy").innerHTML=accuracy;
        }
    }