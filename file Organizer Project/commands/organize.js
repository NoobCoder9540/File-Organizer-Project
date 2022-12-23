const fp = require('fs')

const path = require('path')

let types = {
    media : ["mp4","mp3","mkv"],
    archives : ["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents : ["docx","doc","pdf","xlsx","xls","odt","ods","odg","odf","txt","ps","tex"],
    app : ["exe","dmg","pkg","deb"],
};

function organizefn(dirpath){
    //console.log(dirpath)
 
    //input of the directory path
    let destpath
 
    if(dirpath == undefined)  // check whether dirpath exist or not
    {
     console.log('Please enter valid Directory Path')
     return;
    }
    else
    {
     let doesexist = fp.existsSync(dirpath)  // this will tell whether the dirpath exists or not
     //console.log(doesexist)
    
 
    if(doesexist == true)
    {
          destpath = path.join(dirpath,'organized_files')   //C:\Users\hp\Documents\webdev\test_folder + organized_files
             
          if(fp.existsSync(destpath) == false)    // we will only create a folder if it does not already exists
          {
              fp.mkdirSync(destpath)
          }
          else{
             console.log('This folder is already exist')
          }
    }
    else{
     console.log('Please Enter a valid path')
    }
    }
 
    organizeHelper(dirpath,destpath)
 }
 
 
 //we are writting this function to categorize our files
 function organizeHelper(src , dest){
   
     let childname = fp.readdirSync(src) // get all the files and folder inside the source
     //console.log(childname)
      
     for(let i=0;i<childname.length;i++)
     {
         let childAddress = path.join(src,childname[i])
         //console.log(childAddress)
         
         let isFile = fp.lstatSync(childAddress).isFile()  // chech whether it is file or directory
         //console.log(childAddress + " " + isFile)
         
         if(isFile == true)
         {
             let fileCategory = getCategory(childname[i])
             //console.log(childname[i] + " belong to " + fileCategory)
 
             //we took out all the category type of the differnt files 
 
             sendFiles(childAddress,dest,fileCategory)
         }
     }
 }
 
 function getCategory(name)
 {
     let exten = path.extname(name)
     //  console.log(exten)
     exten = exten.slice(1) // for removing .
     //console.log(exten)
 
 
     for(let type in types)
     {
         let cTypeArr = types[type]
         //console.log(cTypeArr)
 
         for(let i=0;i<cTypeArr.length;i++)
         {
                 if(exten == cTypeArr[i])
                 {
                     return type;
                 }
         }
     }
 
     return 'others'
 }
 
 function sendFiles(srcfilePath,dest,fileCategory)
 {
 let catpath = path.join(dest,fileCategory)
 
 if(fp.existsSync(catpath)== false)  // checkign for categories folder path
 {
     fp.mkdirSync(catpath)
 }
   let filename = path.basename(srcfilePath) // we took out name of the file
 
   let destfilePath = path.join(catpath,filename) // create path for the file int he category folder
 
   fp.copyFileSync(srcfilePath,destfilePath) //copied file from src to dest
 
   fp.unlinkSync(srcfilePath) // for delting the src file
 
   console.log(filename + " is copied to " + fileCategory)
 }


 module.exports={
    organizekey : organizefn
 }