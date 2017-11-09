var friends = require("../data/friends");

module.exports = function(app) {
//get all info
app.get('/api/friends', function(req, res){
    res.json(friends);
    });

//search specific friend
app.get('/api/:friends?', function(req, res){
    var chosen = req.params.friends;
    
    if(chosen){
        console.log(chosen);
    
        for(var i = 0 ; i < friends.length; i++){
            if(chosen === friends[i].friendName){
                return res.json(friends[i]);
            }                                   
        }
        return res.json(false);
     }
    return res.json(friends);
   });

// Create New friend - takes in JSON input
  app.post("/api/friends", function(req, res) {

  var newfriend = req.body;
  newfriend.friendName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  console.log(newfriend);
  characters.push(newfriend);
  res.json(newfriend);
});
    
};