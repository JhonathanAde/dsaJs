class Node {
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while(true){

      if(newNode.val  === temp.val) return undefined;

      if(newNode.val < temp.val){
        if(temp.left === null){
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null){
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);

myTree.insert(52);
myTree.insert(82);

console.log(myTree);