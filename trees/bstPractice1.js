class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);

    if(this.root === null){ // If the root is null
      this.root = newNode; // make the root the new node
      return this;
    }

    let temp = this.root;

    while(true){
      if(newNode.value === temp.value) return undefined;

      if(newNode.value < temp.value){
        if(temp.left === null){
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if(temp.right === null){
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value){
    if(this.root === null) return false;

    let temp = this.root;

    while(temp){
      if(value < temp.value){
        temp = temp.left;
      }
      else if (value > temp.value){
        temp = temp.right;
      }
      else return true;
    }

    return false;
  }

  minValue(currentNode){
    while(currentNode.left){
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  bfs(){
    if(!this.root) return undefined;
    let currentNode = this.root;
    let queue = [];
    let result = [];

    queue.push(currentNode);

    while(queue.length){
      let temp = queue.shift();

      result.push(temp.value);

      if(temp.left){
        queue.push(temp.left);
      }

      if(temp.right){
        queue.push(temp.right);
      }
    }

    return result;
  }

  dfsPre(){
    let result = [];

    function traverse(currentNode){
      result.push(currentNode.value);
      if(currentNode.left){
        traverse(currentNode.left);
      }
      if(currentNode.right){
        traverse(currentNode.right);
      }
    }

    traverse(this.root);

    return result;
  }

  dfsPost(){
    let result = [];

    function traverse(currentNode){
      if(currentNode.left){
        traverse(currentNode.left);
      }
      if(currentNode.right){
        traverse(currentNode.right);
      }
      result.push(currentNode.value);
    }

    traverse(this.root);

    return result;
  }

  dfsInOrder(){
    let result = [];
    function traverse(currentNode){
      if(currentNode.left){
        traverse(currentNode.left);
      }
      result.push(currentNode.value);
      if(currentNode.right){
        traverse(currentNode.right);
      }
    }

    traverse(this.root);

    return result;
  }




}

let myTree = new BST();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

console.log(myTree);

console.log(myTree.contains(18));
console.log(myTree.contains(26));
console.log(myTree.contains(72));

console.log(myTree.bfs());
console.log(myTree.dfsPre());
console.log(myTree.dfsPost());
console.log(myTree.dfsInOrder());