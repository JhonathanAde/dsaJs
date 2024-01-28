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

    if(this.root === null){
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while(true){
      if(temp.value === newNode.value) return undefined;

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
      else if(value > temp.value){
          temp = temp.right;
      }
      else return true;
    }

    return false;
  }
}

let myTree = new BST();

myTree.insert(24);
myTree.insert(48);
myTree.insert(13);
myTree.insert(12);
myTree.insert(19);
myTree.insert(30);
myTree.insert(25);

console.log(myTree);
console.log(myTree.contains(19));
console.log(myTree.contains(30));
console.log(myTree.contains(10));