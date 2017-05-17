$(document).ready(function() {


    // Grab canvas element and set its width and height
    var canvas = document.getElementById('page');
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;

    // Get a context for the canvas
    var ctx = canvas.getContext('2d');


    // We want to draw a grid of specific dimension
    // I don't yet comprehend the need for the .5s
    var noOfLinesAcross = 10;
    var startingY = 0.5

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.setLineDash([1, 1]);

    for(var i = 0; i < canvas.scrollWidth; i++) {
        ctx.moveTo(0, startingY);
        ctx.lineTo(canvas.scrollWidth, startingY);
        startingY += 20;
    }
    
    // Now the vertical lines
    var startingX = 0.5;
    var noOfLinesDown = 10;

    for(var i = 0; i < canvas.scrollHeight; i++) {
        ctx.moveTo(startingX, 0);
        ctx.lineTo(startingX, canvas.scrollHeight);
        startingX += 20;
    }

    ctx.stroke();
    
});

