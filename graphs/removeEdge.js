class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
        .filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
        .filter(v => v !== vertex1);
      
      return true;
    }
    return false;
  }


}

let myGraph = new Graph();

console.log(myGraph.addVertex("A"));
console.log(myGraph.addVertex("B"));
console.log(myGraph.addVertex("C"));
console.log(myGraph);
console.log(myGraph.addEdge("A", "B"));
console.log(myGraph.addEdge("B", "C"));
console.log(myGraph.addEdge("C", "A"));
console.log(myGraph);
console.log(myGraph.removeEdge("A", "B"));
console.log(myGraph.removeEdge("A", "D"));
console.log(myGraph);
