const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');
const router = express.Router();

//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
  
app.use('/styles', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/app/view/about.html'));
});

  
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');