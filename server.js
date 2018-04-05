var express        = require('express');
var bodyParser     = require('body-parser');
var app            = express();
var alphabetical = require('is-alphabetical');

app.use(bodyParser.urlencoded({ extended: true }));
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
var letter = /^[0-9a-zA-Z]+$/;

// put the desired url below
 app.post('/api', function(req, res){
      var father = req.body.body;
  var son = req.body.title;
  var condition;
  var message;
  if(son.length != 1 || father.length!=1){
      condition= "not defined";
      message ="only one alphabet in input is allowed";
  } else if(alphabetical(son)!=1 || alphabetical(father)!=1 ) {
    condition="not defined";
    message="please input alphabet";
}
else if( son == "z" || son=="Z"){
    condition ="not true";
    message = "sorry but there is no father of Z ";
    
} else if ( father == "a" || father =="A") {
    condition = "not true";
    message = "there Aint any son of A "
    
} else if(nextChar(son)==father){
 condition = "true";
 message = "for "+son+" and "+father+" perfect father and son";
    
} else {
     condition = "not true";
     message = "for "+son+" and "+father+" ohhhh this aint true"
}
var sid = { 
    "son" : son,
    "father": father, 
    "condition" : condition,
    "message": message
};
    
res.json(sid);
  console.log(req.body)
  });

// app.get('/', function(req,res) {
//     res.render("search.ejs");
// })

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("API has started!!!");
});