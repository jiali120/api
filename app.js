//jshint esversion:6
//we required 4 modules that we installed a little bit earlier on.
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

//we creat new app instant using Express
const app = express();

//we setting our view engine to use EJS our templating engine
app.set('view engine', 'ejs');

//and then we are going to use body-parser in order to pass our requests
app.use(bodyParser.urlencoded({
  extended: true
}));

//finally we are going to use the public directory to store our static files such as images and CSS code
app.use(express.static("public"));


//connect our database and we need to add property--userNewUrlParser in order to get rid of the errors tha mongoDB likes to throw up
mongoose.connect("mongodb://localhost:27017/wikiDB", {userNewUrlParser: true});

//creat schema for our articles collection
const articleSchema = {
    title: String,
    content: String
};

//we created our article model using Mongoose
// the first letter always capitalized
//mongoose will automatically change the first letter into a lowercase a
// and make this plural in quite a smart way
const Article = mongoose.model("Article", articleSchema);


//TODO
/*
//GET method
app.get("/articles", function(req, res){
    Article.find(function(err, foundArticles){
        //console.log(foundArticles);

        if(!err){
          res.send(foundArticles) //send to usrs, send back
        } else{
          res.send(err);
        }
    });
});

//POST method
//open postman and creat new workspace, put :localhost:3000/articles on POST part, and chose body, the key should wirte title and content, in the value part write wahtever you want.
//last step is send the req on postman
//after sending we are confirmed that we can make requests through Postman we can go ahead and add the rest ot the code which saves body.title and body.content in to our MongoDB
app.post("/articles", function(req, res){ 

  //and then go to Postman click send again, and then we go to Robo 3T, refresh article collection by click View Documents, and now we can see new data in our database
    const newArticle = new Article({
      title: req.body.title,
      content:req.body.content
    });
    newArticle.save(function(req, res){
      if(!err){
        res.send("successfully")
      }else{
        res.send(err);
      }
    });
  });

//DELETE method
//go to Postman to test delete data
app.delete("/articles", function(req, res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("successfully")
    }else{
      res.send(err);
    }
  });
});*/


/////////////////////////////////////Requsts Targetting All  Articles//////////////////////////////////////////////////////////////////
//we can go doc express to see the route part, 
//there are the app.route method, and it allows you to create changeable route handlers by using app.route()
//and then you use the path as the same locaton so that you reduce redundancy and typos 
//which is our aim as always when we are refactoring our code and maintaning our code
app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticles){
      //console.log(foundArticles);
      if(!err){
        res.send(foundArticles) //send to usrs, send back
      } else{
        res.send(err);
      }
  });
})
.post(function(req, res){ 
    const newArticle = new Article({
      title: req.body.title,
      content:req.body.content
    });
    newArticle.save(function(req, res){
      if(!err){
        res.send("successfully")
      }else{
        res.send(err);
      }
    });
  })
  .delete(function(req, res){
    Article.deleteMany(function(err){
      if(!err){
        res.send("successfully")
      }else{
        res.send(err);
      }
    });
  });



//////////////////////////////////////////////////Requsts Targetting Specific Articles/////////////////////////////////////////
app.route("/articles/:articleTitle")
//localhost:3000/articles/jack-Bauer
//req.params.articleTitle = "Jack-Bauer"

.get(function(req, res){
  
  Article.findOne({title: req.params.articleTitle, function(err, foundArticle){
    if(foundAriticle){
      res.send(foundArticle)
    } else{
      res.send("Not successfully")
    }
  }
})
});

.put(function(req, res){
  Article.updateMany(
    {title: req.params.articleTitle},
    //postman's key should same with title and content
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
      if(!err){
        res.send("successfully updated")
      }
    }

  )
})

.patch(function(req, res){

  Article.update(
    {title:req.params.articleTitle},
    //if user only want to change title or content to it, will display chuck or ye
    //{$set:{title: "Chuck", content:"ye"}}

    {$set: req.body}, //include title and content
    function(err){
    if(!err){
      res.send("successfully")
    }else{
      res.send("no successfully")
    }
  }
  )

})

.delete(function(req, res){
  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
      if(!err){
        res.send("successfully")
      } else{
        res.send(err);
      }
    }
  )
})



//sets up our app to listen on port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});