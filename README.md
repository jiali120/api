# api
* building RESTful API,  REST means REpresentational State Transfer
* user make a HTTP request to the server, HTTP means Hypertext Transfer Protocol Request.
* FTP request, means File Transfer protocol.
* HTTPs requst stands for each HTTP secure requst
* Client --> API --> Server (Client neet to send HTTP Request to the Server)
* REST is essentially just an Architectural Style, REST is an architectural style for designing APIs
* Using HTTP Request Verbs to make API RESTful, also using specific pattern of routers / endpoint URLs

### what exactly are the HTTP verbs? REST HTTP request verbs
1. Get    --- app.get(function(req, res){   });  same with Read
2. Post   --- app.post(function(req, res){  });  same with Create
3. Put    --- app.Put(function(req, res){  });  Put and Patch both update our database. Put request can upadating the database by sending an entire entry to replace the previous one (like put a new one cover older one); if you send Patch request to the server, you only sending the piece of data that needs to be updated.
4. Patch  --- app.Patch(function(req, res){  });    it came relatively recently in 2010, and it was added to the HTTP request language essentially very recently, it is update data.
5. Delete --- ---  app.delete(function(req, res){  });
##### these are the 5 HTTP verbs that we should be using in order to make our API RESTful.
##### it is a little same with database CRUD function: Create, Read, Update, Delete


### in order for our API to be RESTful we have to have a specific pattern of endpoints and routes. the routes or URLS in order to access cerain resources. the routes like /elephants or /course or /apple, we can through the / to go to the elephants topic page.


1. before we use Studio 3T for MongoDB, we need to let mongod running, and connect 3T to mongoDB, and then we can creat datacbase.
2. keep mongod running and then open another shell to code : cd Desktop/  --> mkdir Wiki-API/(file name) --> cd Wiki-API/  --> npm init -y  -->  npm i body-parser mongoos ejs funding (to install the packages)
3. touch app.js
4. ls -a  ----- to check the app.js already in wiki-api directory
5. code .  ----- to open VScode
6. write code on our app.js and also liston the port 3000
7. nodemon app.js   ------ to let server started on port 3000



* we have one server can speak with database, and we are exposing certain parts of our server throgh the APIs that we are building, so clints able to work with our server and with our database
* we can use postman to post data, and this is what is going to enable us to send data and test our API without having to worry about building an HTML form or building up the frontend at all.
