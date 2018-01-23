var redSlider, greenSlider, blueSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    textSize(100);
    
    redSlider = createSlider(0,255,0);
    redSlider.position(20,20);
    
    greenSlider = createSlider(0,255,0);
    greenSlider.position(20,50);
    
    blueSlider = createSlider(0,255,0);
    blueSlider.position(20,80);
}

function draw(){
    rojoValue = redSlider.value();
    verdeValue = greenSlider.value();
    azulValue = blueSlider.value();
    
    background(rojoValue, verdeValue, azulValue);
}