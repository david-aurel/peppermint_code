var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

//man head
ctx.beginPath();
ctx.lineWidth = 6;
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

//woman head
ctx.beginPath();
ctx.arc(445, 120, 50, 0, 2 * Math.PI);
ctx.stroke();

//woman hair
ctx.beginPath();
ctx.moveTo(425, 74);
ctx.bezierCurveTo(520, 40, 500, 200, 540, 175);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420, 76);
ctx.bezierCurveTo(510, 45, 500, 200, 530, 185);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(410, 84);
ctx.bezierCurveTo(500, 46, 500, 200, 515, 190);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(404, 90);
ctx.bezierCurveTo(500, 46, 490, 200, 500, 190);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(404, 90);
ctx.bezierCurveTo(510, 80, 470, 200, 485, 190);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 70);
ctx.bezierCurveTo(420, 140, 505, 90, 505, 190);
ctx.stroke();

//woman arm
ctx.beginPath();
ctx.moveTo(455, 215);
ctx.bezierCurveTo(445, 235, 400, 235, 370, 228);
ctx.stroke();

//woman body
ctx.beginPath();
ctx.moveTo(452, 170);
ctx.lineTo(462, 290);
ctx.lineTo(465, 430);
ctx.stroke();

//woman second leg
ctx.beginPath();
ctx.moveTo(462, 290);
ctx.bezierCurveTo(442, 310, 410, 400, 410, 430);
ctx.stroke();

//heart
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.bezierCurveTo(250, 50, 250, 130, 300, 160);
ctx.bezierCurveTo(350, 130, 350, 50, 300, 100);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();
