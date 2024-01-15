/* 
Bubble Sort algorithm 
- traverse the collection of elements from left to right and compare each pair of elements
- if the element on the left hand side of this pair is greater than the right element, swap these two elements 
- in this way, the largest element is moved to the rightmost end at first iteration
- this process is then continued to find the second largest and moved it to the rightmost, and so on until the data is sorted
*/

// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean
//     swap(leftIndex: number, rightIndex: number): void 
// }

export abstract class Sorter {
    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        // destructure length of collection
        const { length } = this

        for (let i = 0; i < length; i++) {
            // nested for loop is -i, because the rightmost element will be in the correct location at each iteration and don't have to try to resort that again
            for (let j = 0; j < length - i - 1; j++) {
                if(this.compare(j, j+1)) {                   
                    this.swap(j, j+1)                    
                }
            }
            
        }
    }
}