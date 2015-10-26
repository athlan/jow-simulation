var rekuire = require('rekuire');
var DataGrabberModule = rekuire('src/DataGrabber');

var dataUrl = "http://wybory2011.pkw.gov.pl/wsw/pl/000000.html";
var dataGrabber = new DataGrabberModule.DataGrabber(dataUrl);

dataGrabber.fetchData().then(function(data) {
    console.log(data);
}, function(error) {
    console.error(error);
});
