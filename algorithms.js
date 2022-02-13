
const arr = [1, 5, 21, 5, 3, 56, 56, 52, 356, 80, 855];

// babblesorte
// function babblesorte(arra) {

//   for (let i = 0; i < arra.length - 1; i++) {
//     for (let j = 0; j < arra.length - 1; j++) {
//       if (arra[j] > arra[j + 1]) {
//         [arra[j], arra[j + 1]] = [arra[j + 1], arra[j]];
//       }
//     }
//   }
// }
// console.log("[unsorted]", arr);
// babblesorte(arr);
// console.log("[sorted]", arr);
// console.log(arr);

// insertionSort

// function insertionSort(inputArr) {
//     let n = inputArr.length;
//         for (let i = 1; i < n; i++) {
//             // Choosing the first element in our unsorted subarray
//             let current = inputArr[i];
//             // The last element of our sorted subarray
//             let j = i-1;
//             while ((j > -1) && (current < inputArr[j])) {
//                 inputArr[j+1] = inputArr[j];
//                 j--;
//             }
//             inputArr[j+1] = current;
//         }
//     return inputArr;
// }

// insertionSort(arr)

// console.log(arr);

// selectionSort

function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}

selectionSort(arr);

console.log(arr);

// binarySearch

// function binarySearch(sortedArray, key){
//   let start = 0;
//   let end = sortedArray.length - 1;

//   while (start <= end) {
//       let middle = Math.floor((start + end) / 2);
//       if (sortedArray[middle] === key) {
//           return middle;
//       } else if (sortedArray[middle] < key) {
//           start = middle + 1;
//       } else {
//           end = middle - 1;
//       }
//   }
// // key wasn't found
//   return -1;
// }

// linearSearch
function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}


// $$$$$$$$$$$$$$$$$$$ arfin foysal$$$$$$$$$$$$$$$$$$
