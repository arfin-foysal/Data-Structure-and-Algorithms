// babblesorte
const arr = [1, 5, 21, 5, 3, 56, 56, 52, 356,80, 855];

function babblesorte(arra) {
  for (let i = 0; i < arra.length - 1; i++) {
    for (let j = 0; j < arra.length - 1; j++) {
      if (arra[j] > arra[j + 1]) {
        [arra[j], arra[j + 1]] = [arra[j + 1], arra[j]];
      }
    }
  }
}
console.log("[unsorted]", arr);
babblesorte(arr);
console.log("[sorted]", arr);
console.log(arr);
