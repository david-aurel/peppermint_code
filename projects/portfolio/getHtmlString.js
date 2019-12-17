const fs = require('fs');

module.exports = getHtmlString;

function getHtmlString(path) {
    let files = fs.readdirSync(path);

    let html = `<!DOCTYPE html>
                        <html lang="en" dir="ltr">
                        <head>
                            <meta charset="utf-8">
                            <title>Portfolio</title>
                        </head>
                        <body>
                            <h1>Portfolio</h1>
                            <h4>Projects:</h4>
                            <ul>`;

    for (let i in files) {
        if (files[i] == 'portfolio') {
            html += `<li><a href="/">${files[i]}</a></li>`;
        } else {
            html += `<li><a href="/${files[i]}">${files[i]}</a></li>`;
        }
    }
    html += `       </ul>
                    <img src="portfolio/smith.png" style="width: 211px; position: absolute; transform: scaleX(-1); top: 100px;left: 225px;">
                        </body>
                    </html>`;
    return html;
}
