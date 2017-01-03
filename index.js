const express = require('express');
const bodyParser = require('body-parser');

let shows = [
  { title: 'Breaking Bad', rating: 9.8 },
  { title: 'Parks and Rec', rating: 9.1 },
  { title: 'Game of Thrones', rating: 9.9 }

]




const app = express();

app.use(bodyParser.json())

app.get('/shows', function (req, res, next) { // these are express parameters
  res.status(200).json(shows)
})

app.post('/shows', function (req, res, next) {

  shows.push(req.body)
  res.status(200).json(shows)
})

app.delete('/shows', function (req, res, next) {
  let deletedShow = shows.pop()
  res.status(200).json(deletedShow)
})





app.listen(3000, function () {
  console.log('listening at port 3000, press ctrl-c to stop');
});
