const functions = require("firebase-functions");
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const resNames = ["파티의 중심,<br> 나는야 인간 미러볼", "나는 생각한다,<br>고로 존재한다", '팔방 x 팔방 = <br>64방미인','단호박 먹은 CEO<br><br>','세계 4대 성인<br>그리고 바로 당신','21세기 콜롬버스<br><br>','"숙제 있었는데요?"<br>모범생 반장','해바라기 말고<br>친구바라기'];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.engine('ejs', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  res.render('index.html');
});

app.get('/question', function(req,res){
  res.render('question');
});

app.get('/result/:id', function(req,res){
  res.render('result', {resid: req.params.id});
});

app.get('/all', function(req,res){
  res.render('all', {resNames : resNames});
});

exports.app = functions.https.onRequest(app);