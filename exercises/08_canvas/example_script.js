var canvas = document.getElementById('canvas');

// 1) Rendering the context of our canvas
var ctx = canvas.getContext('2d');

// 2) Beginn path
ctx.beginPath();

// 3) (optional:) Set the color and width of the line
ctx.strokeStyle = 'mediumaquamarine';
ctx.lineWidth = 10;

// 4) Move to a starting position
ctx.moveTo(250, 50);

// 5) Mapping the drawing points
ctx.lineTo(50, 200);
ctx.lineTo(50, 50);
ctx.lineTo(250, 50);
ctx.closePath();

// 6) Draw the map we supplied
ctx.stroke();

// 7) (optional:) Fill in what we drew
ctx.fillStyle = 'paleturquoise';
ctx.fill();

// Let's draw some circles
ctx.beginPath();
ctx.strokeStyle = 'rebeccapurple';
ctx.arc(300, 300, 60, 0, 2 * Math.PI); //arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.fill();
