const express = require('express');
const app = express.Router();
const Linkedin = require('node-linkedin')('77j2duonv5o4oz', '3CBHTieSASZmwUAJ');
const rest = require("restler");//acquires the npm restler which grabs the linkedin api
// let isSet = false;

//sets the fields that want to be called in the scope
let scope = ['r_basicprofile'];


Linkedin.auth.setCallback('http://localhost:3000/oauth/linkedin/callback');

//this makes a call containing the protocol, host headers and a callback url
app.get('/oauth/linkedin', (req, res) => {
    console.log("Redirect to LinkedIN");
    Linkedin.auth.authorize(res, scope);
})
//gets the access token for the callback url, makes a request and then redirects it to the index
app.get('/oauth/linkedin/callback', function(req, res){
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, (err, results) => {
        if (err)
            return console.error(err);
        //returns the results and redirects them.
        console.log(results);
        req.session.accessToken = results.access_token;
        //isSet = true;
        return res.redirect('/');
    });
});

//posts an object of the Linkedin data and uses a session to get the access token
app.post("/get-profile", (req,res) => {
    if (req.session.accessToken){
        var linkedin = Linkedin.init(req.session.accessToken);
        linkedin.people.me(function(err, $in) {
            if (err){
                res.send(err.message);
            } else {
                res.send($in);
            }
        });
    } else {
        res.send("Nothing");
    }

});

/* GET home page. */
app.get('/', function(req, res, next) {
  console.log(req.session.data);
  res.render('view', { 
      title: 'Personal Website Generator'
    });
});



module.exports = app;
