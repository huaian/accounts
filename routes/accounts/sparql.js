var should = require('should');
var fs = require('fs');
var valcheck = require('core-util-is');
var testconfig = require('../etc/test-config-qa.js');
var marklogic = require('../');
var q = marklogic.queryBuilder;
var db = marklogic.createDatabaseClient(testconfig.restWriterConnection);
var dbAdmin = marklogic.createDatabaseClient(testconfig.restAdminConnection);

function (done) {
  this.timeout(10000);
  var myQuery = "PREFIX foaf: <http://xmlns.com/foaf/0.1/>" +
  "PREFIX ppl:  <http://people.org/>" +
  "describe <http://people.org/person11>";
  db.graphs.sparql({
    contentType: 'application/rdf+json',
    query: myQuery
  }).
  result(function (response) {
    response.should.have.property('http://people.org/person11');
    response['http://people.org/person11']['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'][0].should.have.property('value');
    response['http://people.org/person11']['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'][0].value.should.equal('http://people.org/Person');
    response['http://people.org/person11']['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'][0].type.should.equal('uri');
    response['http://people.org/person11']['http://xmlns.com/foaf/0.1/name'][0].value.should.equal('Person 11');
    done();
  }, done);
}
