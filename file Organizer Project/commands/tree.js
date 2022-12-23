const fp = require('fs')

const path = require('path')



function treefn(dirpath)
{
   if(dirpath == undefined)  // check whether dirpath exist or not
   {
    console.log('Please enter valid Directory Path')
    return;
   }
   else
   {
    let doesexist = fp.existsSync(dirpath) 

    if(doesexist == true)
    {
        treehelper(dirpath," ")
    }
   }
}


function treehelper(targetPath ,indent)
{
    let isFile = fp.lstatSync(targetPath).isFile()

    if(isFile == true)
    {
        let filename = path.basename(targetPath)
        console.log(indent + "├── " + filename)  //symbol - inculde symbol (tree command) 
    }
    else{

        let dirname = path.basename(targetPath)
        console.log(indent + '└──'  + dirname)

        let children = fp.readdirSync(targetPath) // here we took out all the childeren of test folder
        //console.log(children)

        for(let i=0;i<children.length;i++)
        {
            let childpath = path.join(targetPath,children[i])

            treehelper(childpath,indent+'\t')
        }
    }
}



module.exports={
    treekey : treefn
}