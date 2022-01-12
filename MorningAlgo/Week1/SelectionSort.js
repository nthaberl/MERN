/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
//             i
//                         j
//                     m
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){ 
    for (let i = 0; i < arr.length - 1; i++){
        let minIdx = i;
        for (let j = i + 1; j <= arr.length - 1; j++){
            if (arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        // check arr[i] with arr[min]
        // swap
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

console.log(selectionSort(myArr));


/* const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++) { // we need to loop through the array
        let minIdx = i; // we want to find the smallest element, but we're more concerned with its 
        // INDEX than its value. So we'll keep tack of a minIdx, and set it to i at the beginning
        // of each iteration

        for(let j = i+1;  j < arr.length; j++) { // we'll loop through the remaining values
            if(arr[j] < arr[minIdx]){ // if we find a number that's less than our current minimum
                minIdx = j; // set that number's index as minIdx
            }
        }

        if(arr[minIdx] !== arr[i]){ // if, after checking everything, we found a new minimum
            const temp = arr[i]; // swap the new minimum
            arr[i] = arr[minIdx]; // with the value at i
            arr[minIdx] = temp; 
        }
        // and then bring it back to the top and run it again!
    }

    return arr; // by now, everything is sorted!
} */