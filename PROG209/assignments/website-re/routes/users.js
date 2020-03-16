var express = require('express');
var router = express.Router();

let serverReArray = []; // our "permanent storage" on the web server

// define a constructor to create RE objects
var reObject = function (pLink, pTitle, pAuthor, pPosition, pSection) {
  this.Link = pLink;
  this.Title = pTitle;  
  this.Author = pAuthor;
  this.Position = pPosition;
  this.Section = pSection;
}

/* POST to addMovie */
router.post('/addRE', function(req, res) {
  console.log(req.body);
  serverReArray.push(req.body);
  console.log(serverReArray);
  //res.sendStatus(200);
  res.status(200).send(JSON.stringify('success'));
});

/* GET movieList. */
router.get('/REList', function(req, res) {
  res.json(serverReArray);
});

/* DELETE to deleteMovie. */
router.delete('/deleteRE/:Title', function(req, res) {
  let Title = req.params.Title;
  Title = Title.toLowerCase();  // allow user to be careless about capitalization
  console.log('deleting ID: ' + Title);
  for (let i = 0; i < serverReArray.length; i++) {
    if (Title == (serverReArray[i].Title).toLowerCase()) {
      serverReArray.splice(i,1);
    }
  }
   res.status(200).send(JSON.stringify('deleted successfully'));
});

//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})
module.exports = router;
