var express = require("express"),
    router  = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

router.use(bodyParser.urlencoded())
router.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
   }
}))

router.route('/')
  .get(function(req, res, next) {
    mongoose.model('Blob').find({}, function(err, blobs) {
      if (err) {
        return console.error(err);
      } else {
        res.format({
          html: function() {
            res.render('blobs/index', {
              title: "All my blobs",
              "blobs": blobs
            });
          },
          json: function() {
            res.json(infophotos);
          }
        });
      }
    });
  })
  .post(function(req, res) {
    var name = req.body.name;
    var badge = req.body.badge;
    var dob = req.body.dob;
    var company = req.body.company;
    var isloved = req.body.isloved;
    mongoose.model("Blob").create({
      name: name,
      badge: badge,
      dob: dob,
      isloved: isloved
    }, function (err, blob) {
      if (err) {
        res.send("There was a problem adding the information to the database")
      } else {
        console.log("Creating new blob:" + blob);
        res.format({
          html: function(){
            res.location('blobs');
            res.redirect("/blobs")
          },
          json: function() {
            res.json(blob);
          }
        });
      }
    })
  });

router.get("/new", function(req, res) {
  res.render("blobs/new", {title: "Add New Blob"});
});

router.param('id', function(req, res, next, id) {
  mongoose.model("Blob").findById(id, function(err, blob) {
    if (err) {
      console.log(id + "was not found");
      res.status(404);
      var err = new Error("Not Found");
      err.status = 404;
      res.format({
        html: function() {
          next(err);
        },
        json: function() {
          res.json({ message: err.status + " " + err});
        }
      });
    } else {
      req.id = id;
      next();
    }
  });
});
