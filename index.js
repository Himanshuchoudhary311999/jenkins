const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Gaurav</title>
        <style>
          body {
            color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 14px;
            background-color: #73A53E;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-shadow: none;
          }
          .content {
            background-color: #33342D;
            padding: 2em;
            border-radius: 10px;
            text-align: center;
          }
          h1 {
            color: #ffffff;
            font-size: 3em;
            font-weight: normal;
            margin-bottom: 0.5em;
          }
          p, ul {
            color: #ffffff;
            font-size: 1.2em;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin: 0.5em 0;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>Hello Gaurav</h1>
          <p>Welcome! Here are your pending items:</p>
          <ul>
            <li>Burger</li>
            <li>Gift</li>
          </ul>
          <p>Remember, friends are like stars. You can't always see them, but you know they're always there.</p>
          <p>Life is better with true friends by your side.</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
