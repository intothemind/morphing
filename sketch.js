//x positions
var x1 = [0, 2, 4, 7, 9, 12, 16, 19, 21, 24, 26, 28];

//x positions to morh to
var x2 = [0, 2, 4, 7, 9, 12, 16, 19, 21, 24, 26, 28];

//y positions
var y1 = [0, 0, 0, -1, -2, -3, -3, -2, -1, 0, 0, 0];

//y positions to morph to
var y2 = [-1, 0, 0, 1, 2, 3, 3, 2, 1, 0, 0, -1];

var points1 = [];
var points2 = [];


var slider;

function setup() {
    createCanvas(800, 600);

    slider = createSlider(0, 1, 0, 0);
    slider.position(50, 50);

    //create vectors and scale the points to make shape more evident
    var yscale = 10;
    var xscale = 10;
    for (var i = 0; i < x1.length; i++) {
        var p1 = createVector(xscale * x1[i], yscale * y1[i]);
        points1.push(p1);

        var p2 = createVector(xscale * x2[i], yscale * y2[i]);
        points2.push(p2);
    }

}

function draw() {
    background(255);

    //morphing
    var morphAmt = slider.value();

    var morphed = [];
    for (var i = 0; i < points1.length; i++) {
        var p1 = points1[i];
        var p2 = points2[i];
        var morphedPoint = p5.Vector.lerp(p1, p2, morphAmt);
        morphed.push(morphedPoint);
    }

    push();
    translate(200,200);
    noFill();
    stroke(0);
    beginShape();
    for (var i = 0; i < morphed.length; i++) {
    	var p = morphed[i];
    	vertex(p.x,p.y);
    }
    endShape();
    pop();

    //example with curveVertex
    // push();
    // translate(200, 200);
    // noFill();
    // stroke(0);
    // beginShape();
    // var p = morphed[0];
    // vertex(p.x, p.y);

    // for (var i = 0; i < morphed.length; i++) {
    //     p = morphed[i];
    //     curveVertex(p.x, p.y);
    // }
    // p = morphed[morphed.length-1];
    // vertex(p.x, p.y);
    // endShape();
    // pop();


}