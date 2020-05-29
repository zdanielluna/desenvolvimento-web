let fatorial = (num) => {
  let result = 1

  if (num == 0) return 1
  for (let i = num; i >= 1; i--) {
    result = result * i
  }
  return result
}

console.log(fatorial(0))
console.log(fatorial(5))
console.log(fatorial(10))
