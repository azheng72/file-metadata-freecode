var express=require("express");
var app=express();
var multer  = require('multer');
var upload = multer({ dest: './uploads/' }).any();// .single() cannot use!!!


app.route('/')
.get(function(req,res){
    app.set('views','./views');
    app.set('view engine','pug');
    res.render('index',{date:new Date().toDateString()});
})
.post(upload,function(req,res){

    if(req.files[0]!==undefined)
        res.locals.data=JSON.stringify(req.files[0]['size']);//send locals for pug template
  
    res.render('index');
    res.end();
    
});

app.listen(process.env.PORT || 8080, function(err){
    if(err) throw err;
    console.log("listen to port : process.env.PORT ||8080");
});