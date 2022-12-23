// let input = process.argv[2]  // to get input in command line 

const help = require('./commands/help')

const organize = require('./commands/organize')

const tree = require('./commands/tree')



let inputArr = process.argv.slice(2);
// console.log(inputArr)

//[node file.js tree folderpath]

let command = inputArr[0]
// output - [tree implemented] as it is at 0 position in the array
// and folderpath is at 1



switch (command) {

    case 'tree': console.log('Tree Implemented')
        tree.treekey(inputArr[1])
        break;

    case 'organize': console.log('organize Implemented')
        organize.organizekey(inputArr[1])
        break;

    case 'help': help.helpkey()
        break;

    default: console.log('please enter valid command')
        break;
}














