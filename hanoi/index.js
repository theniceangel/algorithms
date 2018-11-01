function hanoi (n, from, via, to) {
  if (n === 1) {
    move(from, to)
  } else {
    hanoi(n - 1, from, to, via)
    move(from, to)
    hanoi(n - 1, via, from, to)
  }
}
let len = 0
function move (from, to) {
  console.log(`${from} ---> ${to}`)
  len++
}

hanoi(5, 'A', 'B', 'C')
console.log(len)