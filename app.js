// 1. require all the installed packages

// Name you give name of the package you installed

const express = require ('express');

const app = express();

app.use(express.static('public'));

// '/' => localhost: 3000 on my computer
app.get('/', (reqeust, response, next) => {
  //console.log("Something will be display here in the browser.")
  //response.send('<p>Hello There, <b>IronHackers<b>!!!<p>')
  response.sendFile(__dirname + '/views/home.html');
}) 

app.get('/cat', (req, res, next) => {
  res.send('<img src="/images/cool-cat.jpg">')
})


app.listen(3000, () => console.log("My first express app running on port 3000 :)"));
