function quickSort (arr) {
  if (arr.length <=1) return arr
  const pivotIndex = arr.length / 2 | 0
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  for (const i of arr) {
    if (i < pivot) {
      left.push(i)
    } else {
      right.push(i)
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([2,9,8,5,3,10,23,21,24]))