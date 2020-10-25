// This is a bassic model of clock. I just followed along with Daniel Shiffman, a wonderful programmer, a creative coder.
// https://www.youtube.com/thecodingtrain --> channel Daniel Shiffman
// https://www.youtube.com/watch?v=E4RyStef-gY&t=474s --> video link
// I am just starting out on JavaScript and wanted to learn p5.js

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sec = second();

    // strokeWeight(4);
    // stroke(255);
    // noFill();
    // ellipse(0, 0, 300, 300);

    strokeWeight(8);
    noFill();
    // second hand
    stroke(255, 100, 100);
    let secondhand = map(sec, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondhand);

    push();
    rotate(secondhand - 90);
    stroke(255, 100, 100);
    line(0, 0, 0, 75);
    pop();

    // minute hand
    stroke(100, 100, 255);
    let minutehand = map(mn, 0, 60, 0, 360)
    arc(0, 0, 280, 280, 0, minutehand);

    push();
    rotate(minutehand - 90);
    stroke(100, 100, 255);
    line(0, 0, 0, 100);
    pop();

    // hour hand
    stroke(100, 255, 100);
    let hourhand = map(hr % 12, 0, 12, 0, 360)
    arc(0, 0, 260, 260, 0, hourhand);

    push();
    rotate(hourhand - 90);
    stroke(100, 255, 100);
    line(0, 0, 0, 50);
    pop();

    // colorpoint = map(mouseX, 0, width, 0, 255);
    // stroke(colorpoint, colorpoint / 2, colorpoint);
    stroke(255);
    point(0, 0);

    // stroke(169, 169, 169);
    // arc(200, 200, 300, 300, 0, end * 2);

    // an idea is to map the mouseX to the color like the point to the hands of the clock
}
