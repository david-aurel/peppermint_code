var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(165, 215, 50, 0, 2 * Math.PI); //arc(x, y, radius, startAngle, endAngle)
ctx.stroke();

ctx.beginPath();
ctx.arc(165, 215, 100, 0 * Math.PI, 0.5 * Math.PI); //arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
