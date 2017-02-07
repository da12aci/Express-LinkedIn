const Grab = require("../lib/grabLkn");

class IndexController{
    static index(req,res){
        res.render("view");
    }
//static method that gets the results for the object of linkedin info
    static linkedData(req, res){
        Grab.grabDaStuff()
            .then(results => {
                res.status(200).send({
                    results: results
                });
            })
            .catch(err =>{
                res.status(400).send(err.message);
            });
        }
//creates a session in order to host the linkedin object data
    static createSessionStore(req, res){
        Grab.sessionStuff()
            .then(results => {
                req.session.data = results;
                res.status(200).send({
                    results: results
                });
            })
            .catch(err =>{
                res.status(400).send(err.message);
            });
    }
}


module.exports = IndexController;