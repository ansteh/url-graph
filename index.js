'use strict';
const url         = require('url');
const _           = {
  map:        require('lodash/map'),
  trimStart:  require('lodash/trimStart'),
  sortBy:     require('lodash/sortBy'),
  isString:   require('lodash/isString'),
  forEach:    require('lodash/forEach'),
  remove:     require('lodash/remove'),
  has:        require('lodash/has'),
  groupBy:    require('lodash/groupBy'),
  split:      require('lodash/split'),
  findIndex:  require('lodash/findIndex')
};

exports.treefy = treefy;
exports.domain = domain;
exports.treefyByPathname = treefyByPathname;

function treefy(urls){
  let domains = exports.domain(urls);
  return _.map(domains, function(domain){
    return exports.treefyByPathname(domain);
  });
};

function domain(links){
  links = _.map(links, parse);

  let domains = _.groupBy(links, function(link){
    return _.trimStart(link.hostname, 'www.');
  });

  domains = _.sortBy(domains, function(node){
    return -node.length;
  });

  return domains;
};

function parse(link){
  if(_.isString(link)){
    return url.parse(link);
  }
  return url.parse(link.url);
};

function treefyByPathname(urls){
  let host = urls[0].host;
  let tree = {
    branch: []
  };

  _.forEach(urls, function(urlObj){
    let pathparts = _.split(urlObj.pathname, '/');
    _.remove(pathparts, function(name) {
      return name === '';
    });
    pathparts.unshift(host);

    let node = tree;
    _.forEach(pathparts, function(name){
      node = expandTree(node, name);
    });
  });

  return tree.branch[0];
};

function expandTree(node, name){
  if(_.has(node, 'branch') === false){
    node.branch = [];
  }

  let index = _.findIndex(node.branch, function(o) { return o.name === name; });
  if(index === -1){
    index = node.branch.push({
      name: name,
      count: 0
    }) - 1;
  }

  let branchNode =  node.branch[index];
  branchNode.count += 1;

  return branchNode;
};
