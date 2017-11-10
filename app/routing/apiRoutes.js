//request data.friends
var friendslove = require("../data/friends");

//export module
module.exports = function(app) {

app.get('/api/friends', function(req, res){
    res.json(friendslove);
    });

// Create New friend - takes in JSON input
  app.post("/api/friends", function(req, res) {
  var newfriend = req.body;
      
      friendslove.push(newfriend);
      res.send(friendslove[1]);
});

//calculation and sorting out the matching info 
/*function calculate(allFriend){
    var friArr = [];
    for (var i = 0 ; i < allFriend.length; i++){
        friArr.push(friendScore(allFriend[i]));
    }
console.log(friArr);
};
    
function friendScore(seleFriend){
    var scoreA= 0;
    for (var i = 0 ; i < seleFriend.scores.length; i++){
        scoreA += seleFriend.scores[i];

    }
console.log(scoreA);
    }  */  
};

