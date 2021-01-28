const functions = require("firebase-functions");
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

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
  res.render('all');
});

exports.app = functions.https.onRequest(app);