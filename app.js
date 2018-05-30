
console.log('Starting app.js');

const yargs = require('yargs');

const diceManager = require('./diceManager.js');

const argv = yargs
.command('roll', 'Roll a dice', {
    number:{
        describe: 'Number of dices',
        demand: true,
        alias: 'n'
    },
    faces:{
        description: 'Number of faces',
        demand: true,
        alias: 'f'
    }
})
.help()
.argv;

var ndice = argv.number;
var facedice = argv.faces;

console.log('You rolled', ndice, "d" + facedice);
var results = diceManager.getResults(ndice, facedice);
//console.log(JSON.stringify(results));

//console.log(JSON.stringify(results));
var distributionResults = diceManager.testUniformDistribution(ndice, facedice);
console.log("Distribution:", distributionResults);
