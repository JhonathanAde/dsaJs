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

  // ---- Methods ----//

  insert(value){
    const newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while(true){
      if(newNode.value === temp.value) return undefined;

      // Left
      if(newNode.value < temp.value){
        if(temp.left === null){
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      // Right 
      else {

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

  minVal(currentNode){
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

let myTree = new BST();

myTree.insert(35);
myTree.insert(25);
myTree.insert(30);
myTree.insert(15);
myTree.insert(45);
myTree.insert(50);

console.log(myTree);

console.log(myTree.contains(15));
console.log(myTree.contains(45));
console.log(myTree.contains(32));

console.log(myTree.minVal(myTree.root));
console.log(myTree.minVal(myTree.root.right));
