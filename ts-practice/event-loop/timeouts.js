setTimeout(() => console.log('timeout 0'), 0)
setTimeout(() => console.log('timeout 200'), 200)
setTimeout(() => console.log('timeout 100'), 100)

Promise.resolve().then(() => console.log('promise'))

console.log('sync')

//sync promise timeout0 timeout100 timeout200
