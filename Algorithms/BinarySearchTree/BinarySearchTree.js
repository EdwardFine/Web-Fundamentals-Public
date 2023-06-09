/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        while (current.left != null) {
            current = current.left;
        } return current.data;
    }

    /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    minRecursive(current = this.root) {
        if (this.isEmpty()) {
            return null;
        } if (current.left == null) {
            return current.data;
        } return this.minRecursive(current.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        while (current.right != null) {
            current = current.right;
        } return current.data;
    }

    /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
    maxRecursive(current = this.root) {
        if (this.isEmpty()) {
            return null;
        } if (current.right == null) {
            return current.data;
        } return this.maxRecursive(current.right);
    }

    /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
    contains(searchVal) {
        if (this.isEmpty()) {
            return false;
        }
        let current = this.root;
        while (current != null) {
            if (current.data == searchVal) {
                return true;
            } else if (current.data > searchVal) {
                current = current.left;
            } else {
                current = current.right;
            }
        } return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (this.isEmpty()) {
            return false;
        } if (current == null) {
            return false;
        } else if (current.data == searchVal) {
            return true;
        } else if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left);
        }
        return this.containsRecursive(searchVal, current.right);
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range() {
        if (this.isEmpty()) {
            return null;
        }
        return (this.max() - this.min());
    }

    /**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @returns {BinarySearchTree} This tree.
 */
    insert(newVal) {
        if(this.isEmpty()){
            this.root = new BSTNode(newVal);
            return this;
        }let current = this.root;
        while(true){
            if(current.data > newVal){
                if(current.left == null){
                    current.left = new BSTNode(newVal);
                    return this;
                }current = current.left;
            }else{
                if(current.right == null){
                    current.right = new BSTNode(newVal);
                    return this;
                }current = current.right;
            }
        }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        if(curr === null){
            this.root = new BSTNode(newVal);
            return this;
        }if(curr.data > newVal){
            if(curr.left === null){
                curr.left = new BSTNode(newVal);
                return this;
            }
            return this.insertRecursive(newVal,curr.left);
        }if(curr.right === null){
            curr.right = new BSTNode(newVal);
            return this;
        }
        return this.insertRecursive(newVal,curr.right);
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();

const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

console.log(emptyTree.min());
console.log(emptyTree.max());
console.log(emptyTree.minRecursive());
console.log(emptyTree.maxRecursive());
console.log(emptyTree.contains(10));
console.log(emptyTree.containsRecursive(42));
console.log(emptyTree.range());

console.log("");

console.log(twoLevelTree.min());
console.log(twoLevelTree.max());
console.log(twoLevelTree.minRecursive());
console.log(twoLevelTree.maxRecursive());
console.log(twoLevelTree.contains(10));
console.log(twoLevelTree.containsRecursive(42));
console.log(twoLevelTree.range());

console.log("");

console.log(threeLevelTree.min());
console.log(threeLevelTree.max());
console.log(threeLevelTree.minRecursive());
console.log(threeLevelTree.maxRecursive());
console.log(threeLevelTree.contains(10));
console.log(threeLevelTree.containsRecursive(42));
console.log(threeLevelTree.range());

//threeLevelTree.print()

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
        /
       11
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
.insertRecursive(25)
.insertRecursive(15)
.insertRecursive(10)
.insertRecursive(22)
.insertRecursive(4)
.insertRecursive(12)
.insertRecursive(18)
.insertRecursive(24)
.insertRecursive(50)
.insertRecursive(35)
.insertRecursive(70)
.insertRecursive(31)
.insertRecursive(44)
.insertRecursive(66)
.insertRecursive(90)
.insertRecursive(11).print();