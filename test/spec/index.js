'use strict';
const lib     = require('../../index.js');
const testbed = require('../testbed.js');
const _       = require('lodash');

describe("example", function() {
  _.forEach(testbed, function(test){
    it(test.name, function() {
      let operation = lib[test.options.instruction];
      let input = test.options.input;
      let output = test.options.output;

      expect(operation(input)).toEqual(output);
    });
  });
});
