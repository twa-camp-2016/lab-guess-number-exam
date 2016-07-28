const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const AnswerGeneration = require('./src/answer-generation');
const CompareNum = require('./src/compare-number');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const answer = AnswerGeneration.generate();
  res.send(answer);
});

app.post('/compare', (req, res) => {
  const result = CompareNum.compare(req.body.input, req.body.answer);
  res.send(result);
});

app.listen(8000, () => {
  console.log('server start in port 8000');
});