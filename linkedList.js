class Node {
    constructor (value) {
        this.value = value;
        this.next =  null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push (value){
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }  else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
     }
     interate(cb){
        cb(this.head)
     }}

const list = new LinkedList()
list.push(5);
list.push(10);
list.push(15);
list.interate ((Element)=>{
    
})
