// getting a reference to our HTML element
const canvas = document.querySelector('canvas')

// initiating 2D context on it
const c = canvas.getContext('2d')

function draw2(){
    c.strokeStyle = 'white'
    c.fillStyle = 'blue'
    c.rect(100, 20, 150, 100)
    c.stroke()
    c.fill()
    
    // Uncomment to remove the first two blocks
    //c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "rgba(200, 0, 0)";
    c.fillRect(canvas.width/4, canvas.height/4, 200, 200)

    c.fillStyle = "rgba( 0, 200, 0, 0.5)";
    c.fillRect(250, 100, 300, 250)
}

function draw3(){
    c.beginPath();
    c.moveTo(75, 50);
    c.lineTo(100, 75);
    c.lineTo(100, 25)
    c.fill();
}

function draw(){
    c.beginPath();
    c.arc(75,75,50,0, Math.PI * 2, true); // Outer Circle
    c.moveTo(110,75);
    c.arc(75,75,35,0, Math.PI, false); //Mouth (Clockwise)
    c.moveTo(65,65);
    c.arc(60,65,5,0, Math.PI * 2, true); // Left Eye
    c.moveTo(95,65);
    c.arc(90,65,5,0, Math.PI * 2, true) // Right Eye
    c.stroke();
}

function drawSmiles(x, y){
    console.log("Draw Smile")
    c.beginPath();
    c.arc(x,y,50,0, Math.PI * 2, true); // Outer Circle
    c.moveTo(x+35,y);
    c.arc(x,y,35,0, Math.PI, false); //Mouth (Clockwise)
    c.moveTo(x-10,y-10);
    c.arc(x-15,y-10,5,0, Math.PI * 2, true); // Left Eye
    c.moveTo(x+20,y-10);
    c.arc(x+15,y-10,5,0, Math.PI * 2, true) // Right Eye
    c.stroke();
    c.lineWidth = 2;
}

function drawHeart(context, x, y, width, height){
    context.save();
    context.beginPath();

    var topCurveHeight = height * 0.3;
    context.moveTo(x, y + topCurveHeight);

    // top left curve
    context.bezierCurveTo(
        x, y, 
        x - width / 2, y, 
        x - width / 2, y + topCurveHeight
    );

    // bottom left curve
    context.bezierCurveTo(
        x - width / 2, y + (height + topCurveHeight) / 2, 
        x, y + (height + topCurveHeight) / 2, 
        x, y + height
    );

    // bottom right curve
    context.bezierCurveTo(
        x, y + (height + topCurveHeight) / 2, 
        x + width / 2, y + (height + topCurveHeight) / 2, 
        x + width / 2, y + topCurveHeight
    );

    // top right curve
    context.bezierCurveTo(
        x + width / 2, y, 
        x, y, 
        x, y + topCurveHeight
    );
            
    context.closePath();
    context.fillStyle = "red";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
    context.fill();
    context.restore();
    setTimeout(drawHeart,100);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

canvas.addEventListener('mousedown', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
    drawHeart(c, mousePos.x, mousePos.y, 64, 64);
}, false);