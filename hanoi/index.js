function hanoi (n, from, via, to) {
  if (n === 1) {
    move(from, to)
  } else {
    hanoi(n - 1, from, to, via)
    move(from, to)
    hanoi(n - 1, via, from, to)
  }
}

function move (from, to) {
  console.log(`${from} ---> ${to}`)
}

hanoi(5, 'A', 'B', 'C')