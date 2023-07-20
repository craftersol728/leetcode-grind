class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }


    //insert 1st node
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++
    }


    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        //if empty make head
        if(!this.head){
            this.head = node;
        } else{
            current = this.head;


        while(current.next){
            current = current.next
        }
        current.next = node;
        }
        this.size++
    }

    //insert index

    insertAt(data, index){
        //if index is out of range do nothing
        if(index > 0 && index> this.size){
            return;
        } 

        //if 1st index
        if (index === 0){
            this.insertFirst(data)
        }

    }


    //get at index


    //renive at index


    //clear list


    //print list data
printListData(){
    let current = this.head;

    while(current){
        console.log(current.data);
        current = current.next
    }
}
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.printListData();








// const n1 = {
//     data:100
// }
// 
// const n2 = {
//     data:200
// };
// 
// n1.next = n2;
// 
// console.log(n1);