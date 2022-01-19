// given two sorted arrays that may have duplicate values, merge them to create a new sorted array and remove any duplicates
function mergeDedupe(arr1, arr2) {}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//      a -> 
//     [1, 3, 3, 5, 8, 10]
//      b
//     [1, 3, 4, 5]

function mergeDedupe(arr1, arr2) {
    const newArr = [];
    let i = 0
    let j = 0 
    while (i < arr1.length && j < arr2.length) {
        // if arr1[i] is less AND not equal to value at last index of new array - push to new array  
        if (arr1[i] < arr2[j] && arr1[i] !== newArr[newArr.length-1]){
            newArr.push(arr1[i])
            i++
        // if arr2[j] is less AND not equal to value at last index of new array - push to new array
        } else if (arr2[j] < arr1[i] && arr2[j] !== newArr[newArr.length-1]){
            newArr.push(arr2[j])
            j++
        } else if  //if arr1[i] is equal to value at last index of new array - increment i
            (arr1[i] === newArr[newArr.length-1]){
            i++
        } else if //if arr2[j] is equal to value at last index of new array - increment j
            ( arr2[j] === newArr[newArr.length-1]){
                j++
        } else { // push arr1[i] and increment both i and j
            newArr.push(arr1[i])
            i++
            j++
        }
        }  /// End first while loop

        while (i < arr1.length) {
            if (arr1[i] !== newArr[newArr.length-1]){
            newArr.push(arr1[i])}
            i++
        }
        while (j < arr2.length) {
            if (arr2[j] !== newArr[newArr.length-1]){
            newArr.push(arr2[j])}
            j++
        }
        return newArr;
    }


    // create new array
    // compare values at index
    // push lower value to new array
    //


// try out some other tests
// mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
// mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//      a -> 
//     [1, 3, 3, 5, 8, 10]
//      b
//     [1, 3, 4, 5]
console.log(mergeDedupe([2,3,3,5,8,8,8,8,10,12,12,12], [1,3,4,4,5,5,5,5,5,5,6]))
