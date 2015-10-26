var q = require("q");

var DataParser = function() {
    this.chunks = [];
};

DataParser.prototype.addChunk = function(chunk) {
    this.chunks.push(chunk);
};

DataParser.prototype.parseSingleChunk = function(chunk) {
    var result = {
        peoples: [],
        parties: []
    };

    var pattern = new RegExp(/<table(.*?)id="sejm_mem">[^]*?<\/table>/);
    var peopleTable = chunk.match(pattern);

    console.log(peopleTable);
    //console.log(chunk);
};

DataParser.prototype.parse = function() {
    var deferred = q.defer();

    var that = this;
    setTimeout(function() {
        that.chunks.forEach(function(chunk) {
            var chunkResult = that.parseSingleChunk(chunk);
            deferred.resolve(chunkResult);
        });
    });

    return deferred.promise;
};

module.exports.DataParser = DataParser;
