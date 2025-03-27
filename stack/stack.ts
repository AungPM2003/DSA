interface IStack<T>{
    size():number;
    push(item:T):void;
    pop():T | undefined;
    peek():T | undefined;
    clear():void;
}

class Stack<T> implements IStack<T>{
    private storage:T[] = []
    constructor(private capacity:number= Infinity){}
    push(item:T):void{
        if(this.size() === this.capacity){
            throw new Error("The storage has reached to max capacity")
        }
        this.storage.push(item)
    }
    pop():T | undefined{
        return this.storage.pop()
    }
    size():number{
        return this.storage.length;
    }
    peek():T | undefined{
        const length = this.size()
        return length > 0 ? this.storage[length - 1] : undefined
    }
    clear():void{
        this.storage = []
    }

}