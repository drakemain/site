"using strict";

var express = require('express');
var expresshb = require('express-handlebars');

var app = express();
app.engine('handlebars', expresshb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index', {
    title: "BPE",
    header_title: "Bakery Production Equipment, Inc.",
    jumbotron_title: "Bakery Production Equipment",
    sidebar: sidebar
  });
})

var sidebar = {
  "Wot up mang": {
    "A cool site": "http://www.steamsig.drakemain.com",
    Reports: "#",
    Analytics: "#",
    Export: "#"
  },

  "group 2": {
    "Nav item": "#",
    "Nav item again": "#",
    "One more nav": "#",
    "Another nav item": "#",
    "More navigation": "#"
  },

  "group 3": {
    "Nav item again": "#",
    "One more nav": "#",
    "Another nav item": "#"
  }
}

process.env.NODE_ENV = process.env.NODE_ENV || "development"

console.log(process.env.NODE_ENV);

app.listen(3001);