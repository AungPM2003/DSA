var CreateStack = /** @class */ (function () {
    function CreateStack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    CreateStack.prototype.push = function (item) {
        this.storage.push(item);
    };
    CreateStack.prototype.pop = function () {
        return this.storage.pop();
    };
    CreateStack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    CreateStack.prototype.size = function () {
        return this.storage.length;
    };
    return CreateStack;
}());
var newStack = new CreateStack();
newStack.push("a");
newStack.push("b");
console.log(newStack.size());
console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack.size());
