interface IsCircularQueue<T>{
    enqueue(item:T):void;
    dequeue():void;
    getFront():T | undefined;
    getRear():T | undefined;
    isFull():Error | null;
    isEmpty():Error | null;
    clear():void;
}

class CircularQueue<T> implements IsCircularQueue<T>{
    private size:number= 0;
    private front:number =0;
    private storage:(T | undefined)[] = [];
    private capacity:number;
    constructor(capacity){
        this.capacity = capacity;
        this.storage = new Array(capacity);
    }
    isFull():Error | null{
        if(this.size === this.capacity){
            throw new Error("Queue is already full")
        }
        return null;
    }
    isEmpty(): Error | null{
        if(this.size === 0){
            throw new Error("Queue is already empty");
        }
        return null;  
    }
    enqueue(item:T): void {
        this.isFull();
        const rear = (this.front + this.size) % this.capacity;
        this.storage[rear] = item;
        this.size ++;
    }

    dequeue(): void {
        this.isEmpty();
        this.storage[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
    }

    getFront(): T | undefined {
        return this.storage[this.front];
    }

    getRear(): T | undefined {
        const rear = (this.front + this.size) % this.capacity;
        return this.storage[rear];
    }
    clear(): void {
        this.storage = [];
        this.front = 0;
        this.size = 0;
    }
}