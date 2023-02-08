song = "";

function preload()
{
    song = loadSound("mixit-dreaming-big-31.mp3");
    song = loadSound("mixit-beautiful-dream-493.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}