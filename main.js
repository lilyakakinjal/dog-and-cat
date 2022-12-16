img = "";
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center(); 
}
function preload(){
img = loadImage("dog_cat.jpg")
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#472183");
    text("Dog", 45, 75);
    noFill();
    stroke("#472183");
    rect(30, 60, 450, 350);

    fill("#472183")
    text("Cat", 320, 120);
    noFill();
    stroke("#472183")
    rect(300, 90, 270, 320);
}



