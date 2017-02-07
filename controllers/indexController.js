const Grab = require("../lib/grabLkn");

class IndexController{
    static index(req,res){
        res.render("view");
    }
}


module.exports = IndexController;