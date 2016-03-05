"using strict";

var path = require('path');

var express = require('express');
var expresshb = require('express-handlebars');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', expresshb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index', {
    title: "Drake Main",
    header_title: "Drake E. Main",
    jumbotron_title: "Space To Use",
    sidebar: sidebar
  });
});

var sidebar = {
  "Me": {
    "About": "#",
    "Goals": "#",
    "Resume": "#"
  },

  "Projects": {
    "Steamsig": "#",
    "Unreal 4": "#",
    "This website": "#",
  }
}

process.env.NODE_ENV = process.env.NODE_ENV || "development"

console.log(process.env.NODE_ENV);

app.listen(3001);