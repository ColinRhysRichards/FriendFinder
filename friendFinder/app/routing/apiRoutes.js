// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendArray = require("../data/friends");
var path = require("path");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendArray array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    var friendScore = req.body.scores;
    var scores = [];
    var friendsCount = 0;
    var Match = 0;
    for (i = 0; i < friendArray.length; i++) { 
       var diffScores = 0;

    for(var j=0; j<friendScore.length; j++){
      diffScores += (Math.abs(parseInt(friendArray[i].scores[j])-parseInt(friendScore[j])));
    }
    scores.push(diffScores);
    } 

    for(var i=0; i<scores.length; i++){
      if(scores[i] <= scores[Match]){
        Match = i;
      }
    }
var finalFriend = friendArray[Match];
console.log(finalFriend)
res.json(finalFriend);

friendArray.push(req.body);

  });
};
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
