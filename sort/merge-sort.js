// 归并排序 - 稳定
function mergeSort(arr, first, last) {
  if (first < last) {
    const mid = (first + last) / 2 | 0
    mergeSort(arr, first, mid)
    mergeSort(arr, mid + 1, last)
    merge(arr, first, mid, last)
  }
}

function merge (arr, first, mid, last, temp = []) {
  let i = first
  let j = mid + 1
  let k = 0
  while (i <= mid && j <= last) {
    if(arr[i]<=arr[j]){
        temp[k++] = arr[i++];
    }else {
        temp[k++] = arr[j++];
    }
  }
  while(i <= mid){//将左边剩余元素填充进temp中
      temp[k++] = arr[i++];
  }
  while(j <= last){//将右序列剩余元素填充进temp中
      temp[k++] = arr[j++];
  }
  k = 0
  //将temp中的元素全部拷贝到原数组中
  while(first <= last){
      arr[first++] = temp[k++];
  }
}
let array = [80, 93, 60, 12, 2, 30, 68, 85, 10,28,3]
mergeSort(array, 0, 10)
console.log(array)