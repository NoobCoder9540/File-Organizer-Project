//File Sytem module


 /*--- files---*/

const fp = require('fs')


const path = require('path')

// let file = fp.readFileSync('f1.txt')
// console.log('this is f1 data : ' + file )   // reading data from file


// fp.writeFileSync('f2.txt', 'this data will be written in F2') //writting data in the file
// console.log('data written')



// fp.appendFileSync('f2.txt',' this is new data') //append add new data in the file
// console.log('new data added')



// fp.unlinkSync('f2.txt')   //deleting the files
// console.log('F2 deleted')











/*--- directories---*/


//Creating the directory

// fp.mkdirSync('myDirectory')
// console.log('Directory created')


// fp.rmdirSync('myDirectory')    // removing the directory
// console.log('DIrectory removed')


// let doesexist = fp.existsSync('myDirectory') // check the directory exist or not and return a boolean value
// console.log(doesexist);


// let statsDir = fp.lstatSync('myDirectory')               // getting the stats of the file
// console.log(statsDir)


// console.log('isFile?' , statsDir.isFile())                 // check whether is file or not

// console.log('isFile?' , statsDir.isDirectory())          //// check whether is directory or not




// let folderpath = 'C:\\Users\\hp\\Documents\\webdev\\JSIntro\\myDirectory'       //fetch the files in the directories
// let foldercontent = fp.readdirSync(folderpath)
// console.log('directory Content ' + foldercontent)



//Copying Files






// let srcpath = 'C:\\Users\\hp\\Documents\\webdev\\JSIntro\\f1.txt'

// let destinationPath = 'C:\\Users\\hp\\Documents\\webdev\\JSIntro\\myDirectory\\'

// let copiedfilepath = path.basename(srcpath)
// console.log(copiedfilepath) 


// let destpath = path.join(destinationPath,copiedfilepath)
// console.log(destpath) 

// fp.copyFileSync(srcpath,destpath)
// console.log('File copied')



// let exten = path.extname('C:\\Users\\hp\\Documents\\webdev\\JSIntro\\f1.txt')
// console.log(exten)


let base = path.basename('C:\\Users\\hp\\Documents\\webdev\\JSIntro\\f1.txt')
console.log('Basename -> ' + base)

console.log(__dirname)
console.log(__filename)

