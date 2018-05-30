console.log('Starting diceManager.js');

var getResults = function(ndice, facedice) {
    var results = [];
    for (var i = 0; i < ndice; i++) {
        var result = Math.floor(Math.random() * facedice + 1);
        results.push(result);
    }
    return results;
};

var rolld20 = function() {
    return getResults(1, 20);
};

var testUniformDistribution = function(ndice, facedice) {
    var distributionResults = new Array(facedice).fill(0);
    var normalizedDistributionResults = new Array(facedice).fill(0);
    
    for (var i = 0; i < ndice; i++) {
        var result = getResults(1, facedice);
        distributionResults[result - 1] ++;
        //console.log(i, result, distributionResults);
    }

    for(i = 0; i < facedice; i++){
        normalizedDistributionResults[i] = distributionResults[i] / ndice;
    }
    return normalizedDistributionResults;
};

module.exports = {
    getResults,
    rolld20,
    testUniformDistribution
};
