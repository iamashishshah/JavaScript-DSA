class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    inOrder(root){
        // TC: O(N) SC: O(N) + O(N)
        if(!root) return 
        this.inOrder(root.left)
        console.log(root.val)
        this.inOrder(root.right)
    }
    inOderUsingStack(root){
        // TC: O(N) SC: O(N) + O(h)
        if(!root) return []
        const result = []
        const stack = []
        let currentNode = root
        while(true){
            if(currentNode){
                stack.push(currentNode)
                currentNode = currentNode.left
            }else {
                if(!stack.length) break
                currentNode = stack.pop()
                result.push(currentNode.data)
                currentNode = currentNode.right
            }
        }
        return result
    }

    preOrder(root, arr){
        if(!root) return
        arr.push(root.data)
        this.preOrder(root.left, arr)
        this.preOrder(root.right, arr)
    }

    preOrderUsingStack(root){
         // using iterative method
        if(!root) return []
        const stack =  []
        const result = []
        let currentNode = root
        while(true){
            if(currentNode){
                stack.push(currentNode)
                result.push(currentNode.data)
                currentNode = currentNode.left
            }else{
                if(!stack.length) break
                currentNode = stack.pop()
                currentNode = currentNode.right
            }
        }
        return result
    }

    postOrder(root, arr){
        if(!root) return;
        this.postOrder(root.left, arr)
        this.postOrder(root.right, arr)
        arr.push(root.data)
    }
    postOrderUsingStack(root){
        // postorder using stack
       if(!root) return []
        const stack =  []
        const result = []
        stack.push(root)
        while(stack.length > 0){
            let currentNode = stack.pop()
            result.push(currentNode.data)
            if(currentNode.left) stack.push(currentNode.left)
            if(currentNode.right) stack.push(currentNode.right)
        }
        return result.reverse()
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
console.log(root)

