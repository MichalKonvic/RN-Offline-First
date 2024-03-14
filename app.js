var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let alerts = [
  {
    "time": "2024-03-12T13:15:53.097Z",
    "title": "assumenda exercitationem ut",
    "description": "Optio exercitationem excepturi quaerat optio et eos repudiandae incidunt beatae.",
    "important": false,
    "id": "1"
  }
]

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: "*"
}));

app.post('/alerts', function (req, res) {
  console.log("POST /alerts");
  console.log("RECEIVED",req.body.data)
  alerts = req.body.data;
  console.log("SENDING",alerts)
  res.json(alerts).status(201);
})

app.get('/alerts', function (req, res) {
  console.log("GET /alerts");
  res.json(alerts).status(200);
})

app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
