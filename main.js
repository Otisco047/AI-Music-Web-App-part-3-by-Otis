peter_pan = "";
harry_potter = "";
lwx = "";
lwy = "";
rwx = "";
rwy = "";

function preload() {
    peter_pan = loadSound("music2.mp3")
    harry_potter = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play() {
    peter_pan.play();
}

function play_harry_potter() {
    harry_potter.play();
}

function modelLoaded() {
    console.log("Pose Net Is Initialized");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        lwx = result[0].pose.leftWrist.x;
        lwy = result[0].pose.leftWrist.y;
        rwx = result[0].pose.rightWrist.x;
        rwy = result[0].pose.rightWrist.y;
    }
}

function pause_song_1() {
    peter_pan.pause();
}

function pause_song_2() {
    harry_potter.pause();
}

function stop_song_1() {
    peter_pan.stop();
}

function stop_song_2() {
    harry_potter.stop();
}