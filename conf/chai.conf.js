
var chai     = require('chai');
var promised = require('chai-as-promised');
//var sinonChai = require("sinon-chai"); //for mocking
//chai.use(sinonChai);
chai.use(promised);
module.exports = chai.expect;