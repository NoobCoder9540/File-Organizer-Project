
const cp =require('child_process')

//console.log('opening calculator')

//cp.execSync('calc')

// console.log('Opening VSCode')

// cp.execSync('code')
// console.log('opening browser')

// cp.execSync('start chrome https://www.google.com/')

const output = cp.execSync('node test.js')
console.log('output ->' + output) 