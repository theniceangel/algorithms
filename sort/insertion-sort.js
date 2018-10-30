const swap = require('./swap')

// 插入排序-稳定排序
function insertionSort (arr, len) {
  if (len <= 1) return
  for (let i = 1; i < len; i++) {
    const current = arr[i] // 当前抓到的牌
    let prev = i - 1 // 已排序好的牌最大索引
    // 从右至左查询当前抓到的牌插入的位置
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev]
      prev--
    }
    arr[prev + 1] = current
  }
}
let array = [42,21,18,32,8]
insertionSort(array, 5)
console.log(array)
