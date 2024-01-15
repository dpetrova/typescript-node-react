/* 
Linked List implementation:
head -> node -> node -> ... -> node -> null
[5 && next] -> [0 && next] -> [-1 && next] -> [3 && next] -> null

Node:
value && next

*/

import { Sorter } from "./Sorter"

class Node {
    next: Node | null = null;

    constructor(public value: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    /* get length of Linked List */
    get length(): number {
        if(!this.head) {            
            return 0
        }

        let length = 1
        let node = this.head
        while(node.next) {
            length++
            node = node.next            
        }

        return length
    }

    /* add data to Linked List */
    add(data: number): void {
        const node = new Node(data)

        // if there is no head -> create head and return
        if(!this.head) {
            this.head = node
            return
        }

        // get last element in list    
        let tail = this.head
        while(tail.next) {
            tail = tail.next
        }

        // add node to last element
        tail.next = node
    }

    /* get node by index */
    at(index: number): Node {       
        if(!this.head) {
            throw new Error("List is empty");            
        }

        let counter = 0
        let node: Node | null = this.head
        while(node) {
            if(counter === index) {
                return node
            }

            counter++
            node = node.next            
        }

        throw new Error("Index out of bounds");
    }

    /* compare two nodes */
    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error("List is empty");            
        }

        return this.at(leftIndex).value > this.at(rightIndex).value
    }

    /* swap values of two nodes */
    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex)
        const rightNode = this.at(rightIndex)

        const leftHand = leftNode.value
        leftNode.value = rightNode.value
        rightNode.value = leftHand
    }

    /* print Linked List */
    print(): void {
        if(!this.head) {
            return            
        }

        let node: Node | null = this.head
        while(node) {
            console.log(node.value)
            node = node.next            
        }
    }
}
