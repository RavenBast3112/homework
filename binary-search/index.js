function binarySearch(arr, elem) {
  let start = 0 
  let end = arr.length - 1
  let index = -1
  if (arr.length != 0){
    while (start <= end) {
      index = Math.floor((start + end)/2)
      if (arr[index] == elem)
        return index
      else if (arr[index] < elem)
        start = index + 1
      else end = index - 1
    }
  }
  return -1
};
module.exports = binarySearch;