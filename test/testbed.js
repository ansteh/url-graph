module.exports = [{
  name: "readme intro: treefy",
  options: {
    instruction: 'treefy',
    input: [
      'https://github.com/ansteh/url-graph',
      'https://github.com/lodash/lodash',
      'https://github.com/ansteh/shape-array',
      'https://github.com/sindresorhus/got',
      'https://github.com/ansteh/shape-json'
    ],
    output: [{
      "name":"github.com",
      "count":5,
      "branch":[{
        "name":"ansteh",
        "count":3,
        "branch":[
          {"name":"url-graph","count":1},
          {"name":"shape-array","count":1},
          {"name":"shape-json","count":1}
        ]
      },{
        "name":"lodash",
        "count":1,
        "branch":[
          {"name":"lodash","count":1}
        ]
      },{
        "name":"sindresorhus",
        "count":1,
        "branch":[
          {"name":"got","count":1}
        ]
      }]
    }]
  }
}, {
  name: "readme intro: linkDirectories",
  options: {
    instruction: 'linkDirectories',
    input: [
      'https://github.com/ansteh/shape-json/blob/master/lib/chain.js',
      'https://github.com/ansteh/shape-json/blob/master/lib/core.js',
      'https://github.com/ansteh/shape-json/blob/master/lib/parse.js',
      'https://github.com/ansteh/shape-json/blob/master/lib/scheme.js'
    ],
    output: [{
      "name":"github.com/ansteh/shape-json/blob/master/lib",
      "count":4,
      "branch":[
        { "name": "chain.js",  "count":1 },
        { "name": "core.js",   "count":1 },
        { "name": "parse.js",  "count":1 },
        { "name": "scheme.js", "count":1 }
      ]
    }]
  }
}];
