function helpfn()
{
    console.log(`List of all commands -
                 1) Tree Command - node file.js tree <dirname>
                 2) Organize Command - node file.js organize <dirname>
                 3) Help Command - node file.js help`)
}


module.exports={
    helpkey : helpfn
}