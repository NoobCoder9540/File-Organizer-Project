function add(a,b)
{
    console.log("The sum is : ",a+b)
}


function sub(a,b)
{
    console.log("The sub is : ",a-b)
}


function mult(a,b)
{
    console.log("The mult is : ",a*b)
}

function div(a,b)
{
    console.log("The div is : ",a/b)
}

module.exports={
    addition : add,
    subtraction : sub,
    multiply : mult,
    divide : div,   
}