const swap = require('./swap')

// 选择排序-不稳定排序
function selectionSort (arr, len) {
  let min
  // 已排序部分
  for (let i = 0; i < len - 1; i++) {
    min = i
    // 在未排序部分找到最小的
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, min, i)
    }
  }
}
let array = [42,21,18,32,8]
selectionSort(array, 5)
console.log(array)
