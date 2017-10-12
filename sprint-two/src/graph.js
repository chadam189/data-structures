

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var temp = {
    value: node,
    edges: []
  };
  this.nodes.push(temp);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === target) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeIndex = -1;
  var toNodeIndex = -1;
  // find indexes of the two nodes
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      fromNodeIndex = i;
    }
    if (this.nodes[i].value === toNode) {
      toNodeIndex = i;
    }
  }
  // check if both exist or it's the same node
  if (fromNodeIndex === -1 || toNodeIndex === -1 || fromNodeIndex === toNodeIndex) {
    return false;
  }
  if (this.nodes[fromNodeIndex].edges.includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromNodeIndex = -1;
  var toNodeIndex = -1;
  // find indexes of the two nodes
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      fromNodeIndex = i;
    }
    if (this.nodes[i].value === toNode) {
      toNodeIndex = i;
    }
  }
  // check if both exist or it's the same node
  if (fromNodeIndex === -1 || toNodeIndex === -1 || fromNodeIndex === toNodeIndex) {
    return;
  }
  // check if edge already exists between the two nodes
  // we assume edges are bidirectional so only one check is required
  if (this.nodes[fromNodeIndex].edges.includes(toNode)) {
    return;
  }
  this.nodes[fromNodeIndex].edges.push(toNode);
  this.nodes[toNodeIndex].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = -1;
  var toNodeIndex = -1;
  // find indexes of the two nodes
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      fromNodeIndex = i;
    }
    if (this.nodes[i].value === toNode) {
      toNodeIndex = i;
    }
  }
  // check if both exist or it's the same node
  if (fromNodeIndex === -1 || toNodeIndex === -1 || fromNodeIndex === toNodeIndex) {
    return;
  }
  if (this.nodes[fromNodeIndex].edges.includes(toNode)) {
    var fromNodeEdgeToRemove = this.nodes[fromNodeIndex].edges.indexOf(toNode);
    var toNodeEdgeToRemove = this.nodes[toNodeIndex].edges.indexOf(fromNode);
    this.nodes[fromNodeIndex].edges.splice(fromNodeEdgeToRemove, 1);
    this.nodes[toNodeIndex].edges.splice(toNodeEdgeToRemove, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


