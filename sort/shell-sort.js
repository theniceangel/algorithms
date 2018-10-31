const swap = require('./swap')

// 希尔排序 - 不稳定
function shellSort(arr, len) {
  let gap = len / 2 | 0

  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      let prev = i - gap
      let current = arr[i]
      while (prev >= 0 && arr[prev] > current) {
        arr[prev + gap] = arr[prev]
        prev -= gap
      }
      arr[prev + gap] = current
    }
    gap = gap / 2 | 0
  }
}
let array = [80, 93, 60, 12, 42, 30, 68, 85, 10]
shellSort(array, 9)
console.log(array)