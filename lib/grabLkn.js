const rest = require("restler");//acquires the npm restler which grabs the linkedin api

class GrabLkn{//grabs the linkedin api for the users
    static grabDaStuff(){
        return new Promise(
            (resolve, reject) => {
                Linkedin.get("https://api.linkedin.com/v1/people/~?format=json").on("complete", function(result) {
                    if(result instanceof Error) {
                        console.log("There is an error", result.message);
                        reject(result);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
            }
        )
    }//gets data to create a session for users to look at their linkedin details
    static sessionStuff(){
        return new Promise(
            (resolve, reject) => {
                Linkedin.get("https://api.linkedin.com/v1/people/~:(id,industry,picture-url,specialties)?format=json").on("complete", function(result) {
                    if(result instanceof Error) {
                        console.log("There is an error", result.message);
                        reject(result);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
            }
        )
    }

}

module.exports = GrabLkn;