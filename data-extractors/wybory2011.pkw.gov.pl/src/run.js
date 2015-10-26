var rekuire = require('rekuire');
var async = rekuire('async');

var DataGrabberModule = rekuire('src/DataGrabber');
var DataParserModule = rekuire('src/DataParser');

async.waterfall([
    function(done) {
        var dataUrl = "http://wybory2011.pkw.gov.pl/wsw/pl/000000.html";
        var dataGrabber = new DataGrabberModule.DataGrabber(dataUrl);

        dataGrabber.fetchData().then(function(data) {
            done(null, data);
        }, function(error) {
            done(error, null);
        });
    },

    function(data, done) {
        var dataParser = new DataParserModule.DataParser();

        dataParser.addChunk(data);

        dataParser.parse().then(function(parsed) {
            done(null, parsed);
        }, function(error) {
            done(error, null);
        });
    }
], function(err, result) {

});
