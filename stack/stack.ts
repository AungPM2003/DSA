interface Istack<T> {
    push(item:T):void;
    pop():T | undefined;
    peek():T | undefined;
    size():number;
}

class CreateStack<T> implements Istack<T>{
    private storage:T[] = [];
    constructor(private capacity:number=Infinity){}
    push(item:T):void{
        this.storage.push(item)
    }
    pop():T | undefined{
        return this.storage.pop();
    }
    peek():T | undefined{
        return this.storage[this.size() - 1]
    }
    size(): number {
        return this.storage.length    
    }
}

const newStack = new CreateStack<string>();
newStack.push("a")
newStack.push("b")
console.log(newStack.size())
console.log(newStack.peek())
console.log(newStack.pop())
console.log(newStack.size())

