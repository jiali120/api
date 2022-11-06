# api
### what exactly are the HTTP verbs? REST HTTP request verbs
1. Get    --- app.get(function(req, res){   });  same with Read
2. Post   --- app.post(function(req, res){  });  same with Create
3. Put    --- app.Put(function(req, res){  });  Put and Patch both update our database. Put request can upadating the database by sending an entire entry to replace the previous one (like put a new one cover older one); if you send Patch request to the server, you only sending the piece of data that needs to be updated.
4. Patch  --- app.Patch(function(req, res){  });    it came relatively recently in 2010, and it was added to the HTTP request language essentially very recently, it is update data.
5. Delete --- ---  app.delete(function(req, res){  });
##### these are the 5 HTTP verbs that we should be using in order to make our API RESTful.
##### it is a little same with database CRUD function: Create, Read, Update, Delete


### in order for our API to be RESTful we have to have a specific pattern of endpoints and routes. the routes or URLS in order to access cerain resources. the routes like /elephants or /course or /apple, we can through the / to go to the elephants topic page.
