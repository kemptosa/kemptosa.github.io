const http = require('http')
const hostname = 'localhost'
const port = 3001

const site = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: aliceblue;
            margin: 0;
            background-color: black;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        #bg {
            position: absolute;
            width: 100%;
            height: 100%;
            filter: blur(2em);
            z-index: -1;
        }
        #bg > div {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle 600vw at top 125% left -25%, #000, purple);
        }
        #projects {
            flex: 1 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        a {
            text-decoration: none;
        }
        .proj {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .proj img {
            margin: auto;
            width: 90%;
            height: 90%;
            transition: width 0.3s ease-out, width 0.3s ease-out;
            box-shadow: black 0px 0px 4px;
        }
        .proj:hover img {
            width: 100%;
            height: 100%;
        }
        .proj p {
            font-size: larger;
            color: aliceblue;
            text-shadow: #003cff8f 1px 1px;
        }
    </style>
    <title>rvo.lv</title>
</head>
<body>
    <div id='bg'>
        <div></div>
    </div>
    <div id='projects'>
        <!-- <h1>check this one out</h1> -->
        <a class='proj' href="https://rvo.lv/regex-gallery">
            <img src='assets/regex-gallery.png'>
            <p>[ regex-gallery ]</p>
        </a>
    </div>
</body>
</html>
`

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(site)
});
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});