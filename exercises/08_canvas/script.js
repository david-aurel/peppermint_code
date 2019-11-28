var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

//man head
ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(165, 215, 50, 0, 2 * Math.PI); //arc(x, y, radius, startAngle, endAngle)
ctx.stroke();

//man arm
ctx.beginPath();
ctx.arc(170, 195, 100, 0.05 * Math.PI, 0.5 * Math.PI); //arc(x, y, radius, startAngle, endAngle)
ctx.stroke();

//man body and leg
ctx.beginPath();
ctx.moveTo(165, 265);
ctx.lineTo(185, 420);
ctx.lineTo(80, 420);
ctx.lineTo(70, 435);
ctx.stroke();

//man second leg
ctx.beginPath();
ctx.moveTo(175, 350);
ctx.lineTo(235, 350);
ctx.lineTo(245, 425);
ctx.lineTo(265, 430);
ctx.stroke();
