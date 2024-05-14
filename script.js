 Sorting and searching algorithms:

function insertionSort(arr) {
    let l
  for (let i = 1; i < arr.length; i++) {
    let permetation = arr[i]
    for ( l = i - 1; l >= 0 && arr[l] > permetation; l--) {
      arr[l + 1] = arr[l]
    }
    arr[l + 1] = permetation
  }
  return arr
}
