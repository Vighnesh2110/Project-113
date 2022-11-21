function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 60, 40, 400, 300);
    fill(255, 0, 0);
    circle(20, 20, 40, 16);
    fill(255, 0, 0);
    circle(500, 20, 40, 16);
    fill(255, 0, 0);
    circle(500, 370, 40, 16);
    fill(255, 0, 0);
    circle(20, 370, 40, 16);
    fill(100, 255, 150);
    rect(40, 10, 440, 20);
    fill(100, 255, 150);
    rect(40, 360, 440, 20);
    fill(100, 255, 150);
    rect(10, 40, 20, 310);
    fill(100, 255, 150);
    rect(490, 40, 20, 310);
    tint(tint_color);
}

function take_snapshot() {
    save('vighnesh_name.png')
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}