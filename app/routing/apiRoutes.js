var friendArray = require("../data/friends");
var path = require("path");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function (req, res) {

    var friendScore = req.body.scores;
    var scores = [];
    var friendsCount = 0;
    var Match = 0;
    for (i = 0; i < friendArray.length; i++) {
      var diffScores = 0;

      for (var j = 0; j < friendScore.length; j++) {
        diffScores += (Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(friendScore[j])));
      }
      scores.push(diffScores);
    }

    for (var i = 0; i < scores.length; i++) {
      if (scores[i] <= scores[Match]) {
        Match = i;
      }
    }
    var finalFriend = friendArray[Match];
    console.log(finalFriend)
    res.json(finalFriend);

    friendArray.push(req.body);

  });
};
