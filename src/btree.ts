class BTreeNode<T> {
    value: T;
    left: BTreeNode<T> | null = null;
    right: BTreeNode<T> | null = null;

    constructor(value : T) {
        this.value = value;
    }
}

export default class BinarySearchTree<T> {
    private root : BTreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value : T) : void{
        const newNode = new BTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node : BTreeNode<T>, newNode : BTreeNode<T>) : void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    find(value : T) : BTreeNode<T> | null{
        return this._findNode(this.root, value);
    }

    _findNode(node : BTreeNode<T> | null, value : T) : BTreeNode<T> | null{
        if (node === null) {
            return null;
        }
        if (value === node.value) {
            return node;
        }
        return value < node.value ?
            this._findNode(node.left, value) :
            this._findNode(node.right, value);
    }

    remove(value : T) : void {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node : BTreeNode<T> | null, value : T) : BTreeNode<T> | null{
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            const minRight = this._findMinNode(node.right);
            node.value = minRight.value;
            node.right = this._removeNode(node.right, minRight.value);
            return node;
        }
    }

    _findMinNode(node : BTreeNode<T>) : BTreeNode<T>{
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    update(oldValue : T, newValue : T) : void {
        this.remove(oldValue);
        this.insert(newValue);
    }

    height() : number {
        return this._calcHeight(this.root);
    }

    _calcHeight(node : BTreeNode<T> | null) : number{
        if (node === null) {
            return -1;
        }
        const leftHeight = this._calcHeight(node.left);
        const rightHeight = this._calcHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}