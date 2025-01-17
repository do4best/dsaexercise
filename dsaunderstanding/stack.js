class Stack{
    constructor(){
        this.stack = []
        this.maxSize = 100;
        this.top = -1;
    }
    isEmpty(){
        return this.top === -1
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.stack[this.top]
    }
    isFull(){
        return this.top === this.maxSize-1
    }
    push(value){
        if(this.isFull()){
            return "Stack is full"
        }
        this.top++;
         this.stack[this.top] = value;
         return true;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        this.top--;
        return this.stack.pop()
    }
}

const stack = new Stack();
stack.push(1)
stack.push(3)
stack.pop()
console.log(stack.peek())