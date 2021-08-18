var express = require('express');
var app = express();
const webinarRouter = require('./routes/webinar')


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json({ extended: false }));

app.set('view engine', 'ejs');



app.use('/',webinarRouter)
  
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});