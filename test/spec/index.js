'use strict';
const graph = require('../../index.js');
const links = require('../links.js');

describe("example", function() {
  it("readme intro", function() {
    //console.log(links, graph);
    console.log(JSON.stringify(graph.treefy(links)));
    /*let person = get('person');
    let scheme = shape.scheme(person.scheme);
    expect(scheme(person.input)).toEqual(person.output);*/
  });
});
