[![Build Status](https://api.travis-ci.org/ansteh/url-graph.svg?branch=master)](https://travis-ci.org/ansteh/url-graph)

## Installation

Using npm:

```js
npm install url-graph
```
In Node.js:

```js
const graph = require('url-graph');
```

## Example
make a graph from a set of urls

```js
let urls = [
  'https://github.com/ansteh/url-graph',
  'https://github.com/lodash/lodash',
  'https://github.com/ansteh/shape-array',
  'https://github.com/sindresorhus/got',
  'https://github.com/ansteh/shape-json'
];

let domains = graph.treefy(urls);
console.log(domains);
```
```json
[{
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
```
## License

MIT © [Andre Stehle](https://github.com/ansteh)
