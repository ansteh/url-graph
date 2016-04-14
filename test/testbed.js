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
}];