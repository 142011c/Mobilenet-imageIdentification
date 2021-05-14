Webcam.set({
width:310,
height:310,
image_format:'jpeg',
jpeg_quality:100,
constraints:{
    facingMode:"environment"
}
});
cam=document.getElementById("cam");
Webcam.attach("#cam");

function photo(){
 Webcam.snap(function(data_uri){
     document.getElementById("Result").innerHTML='<img id="image" src="'+data_uri+'">'

 });
}
console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelload );

function modelload(){
    console.log("model loaded");
}
function cheak(){
    img=document.getElementById("image");
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
    }
}