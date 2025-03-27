interface IQueue<T>{
    size():number;
    enqueue(item:T):void;
    dequeue():T | undefined;
    peek():T | undefined;
}

class Queue<T> implements IQueue<T>{
    private storage:T[] = []
    constructor(private capacity = Infinity){}
    size():number{
        return this.storage.length;
    }
    enqueue(item:T):void{
        if(this.size() === this.capacity){
            throw new Error("The storage has reached to max")
        }
        this.storage.push(item)
    }
    dequeue():T | undefined{
        return this.storage.shift();
    }
    peek(): T | undefined {
        const length = this.size()
        return length > 0 ? this.storage[0]:undefined
    }
    clear():void{
        this.storage = []
    }
}