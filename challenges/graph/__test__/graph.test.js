"use strict";

let Graph = require("../graph.js");



describe("Graph moudel", () => {


  it("Node can be successfully added to the graph", () => {
    let newGraph = new Graph();
    newGraph.AddNode(5);
    newGraph.AddNode(2);

    expect(newGraph.Size()).toBe(2);
  });
  it("An edge can be successfully added to the graph", () => {
    let newGraph = new Graph();
    newGraph.AddNode(1);
    newGraph.AddNode(2);
    newGraph.AddEdge(1, 2, 3);
    newGraph.AddNode(4);
    newGraph.AddNode(5);
    newGraph.AddEdge(4, 5, 6);

    expect(newGraph.GetNeighbors(1)[0].weight).toBe(3);
    expect(newGraph.GetNeighbors(4)[0].weight).toBe(6);
  });
  it("A collection of all nodes can be properly retrieved from the graph", () => {
    let newGraph = new Graph();
    newGraph.AddNode(1);
    newGraph.AddNode(2);
    newGraph.AddNode(3);

    expect(newGraph.GetNodes()).toBeDefined();
  });

  it("All appropriate neighbors can be retrieved from the graph", () => {
    let newGraph = new Graph();
    newGraph.AddNode(1);
    newGraph.AddNode(2);
    newGraph.AddNode(4);
    newGraph.AddNode(5);
    newGraph.AddEdge(1, 3, 1);

    expect(newGraph.GetNeighbors(1)[0].vertex).toBe(3);

  });

  it("Neighbors are returned with the weight between nodes included", () => {
    let newGraph = new Graph();
    newGraph.AddNode(1);
    newGraph.AddNode(2);
    newGraph.AddNode(4);
    newGraph.AddNode(5);
    newGraph.AddEdge(1, 2, 3);

    expect(newGraph.GetNeighbors(1)[0].weight).toBe(3);
  });

  it("The proper size is returned, representing the number of nodes in the graph", () => {
    let newGraph = new Graph();
    newGraph.AddNode(1);
    newGraph.AddNode(2);
    newGraph.AddNode(3);
    newGraph.AddNode(4);
    newGraph.AddEdge(1, 2);

    expect(newGraph.Size()).toEqual(4);
  });

  it("A graph with only one node and edge can be properly returned", () => {
    let newGraph = new Graph();
    newGraph.AddNode(1);
    newGraph.AddEdge(1,1,2);

    expect(newGraph.Size()).toEqual(1);
  });

  it("An empty graph properly returns null", () => {
    let newGraph = new Graph();

    expect(newGraph.isEmpty()).toBeNull();
  });
});
