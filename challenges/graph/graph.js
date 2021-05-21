"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  AddNode(vertex) {
    this._adjacencyList.set(vertex, []);
  }


  AddEdge(start, end, weight) {
    if (!this._adjacencyList.has(start)){
      return this._adjacencyList.has(start);
    }else{
      const newAdjacencies = this._adjacencyList.get(start);
      newAdjacencies.push(new Edge(end, weight));
    }

  }


  GetNodes() {
    if (this._adjacencyList.entries()) {
      return this._adjacencyList.entries();
    }
  }


  GetNeighbors(vertex) {
    if (this._adjacencyList.has(vertex)) {
      return this._adjacencyList.get(vertex);
    }else{
      return 'Vertex does not exist';
    }
  }


  Size() {
    if (this._adjacencyList.size) {
      return this._adjacencyList.size;
    }
  }


  isEmpty() {
    if (!this._adjacencyList.size > 0 ) {
      return null;
    }
  }
}

module.exports = Graph;
