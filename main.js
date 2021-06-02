noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/DZYnDmdW/Clown-Nose.png');
}

function setup()
{
    canvas = createCanvas (300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size (300,300);
    video.hide (300,300);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results [0].pose.nose.x-15;
        noseY = results [0].pose.nose.y-15;
        console.log("nose X = "+ noseX);
        console.log("nose Y = "+ noseY);
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY, 30, 30);
    fill(255, 0, 0);
    stroke(255, 0, 0);
}
function take_snapshot()
{
    save('my_filter_image.png');

}