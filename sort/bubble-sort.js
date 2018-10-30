const swap = require('./swap')

// 冒泡排序 - 稳定排序
function bubbleSort (arr, len) {
  for(let i = 0; i < len - 1; i++) {
    let sortChanged = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        sortChanged = true
      }
    }
    // 如果一次冒泡没有任何数据交换，证明数组已经有序。
    if (!sortChanged) break;
  }
}
let array = [42,21,18,32,8]
bubbleSort(array, 5)
console.log(array)