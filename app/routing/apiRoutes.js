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
      res.send(friendslove[yomath(friendslove)]);
  });
};

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
    
/* var friend1 = newfriend.length.scores[-1];
 var friend2 = newfriend.scores[-1];
 var friendNum = 0;      
 var friendArr1 = [];

    for(var i = 0 ; i < friend1.length; i++){
        friendNum += friend1[i];
    }
    friendArr1.push(friendNum);
    friendArr1.sort((a,b)=>a-b);
      if(friendArr1[0]===newfriend.chartAt()){
      res.send(friendslove
      }*/

function yomath(a){
      var yoger = 0;
      yoger = Math.floor(Math.random()*(a.length));
    return yoger;
    }
