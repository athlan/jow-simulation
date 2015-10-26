var request = require("request");
var q = require("q");

var DataGrabber = function(url) {
    this.url = url;
};

DataGrabber.prototype.fetchData = function() {
    var deferred = q.defer();

    console.log("Accessing %s", this.url);

    request(this.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            deferred.resolve(body);
        }
        else {
            if(response.statusCode != 200) {
                deferred.reject(new Error("Response code not 200 but " + response.statusCode));
            }
            else if(error) {
                deferred.reject(error);
            }
            else {
                deferred.reject(new Error("Unknown error"));
            }
        }
    });

    return deferred.promise;
};

module.exports.DataGrabber = DataGrabber;
