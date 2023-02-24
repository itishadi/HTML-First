/*
function    =   fristående och globalt deklarerad
metod       =   ingår i en instansierad klass
const       =   statisk deklarerad - dvs global

DEKLARERING AV FUNKTIONER
--------------------------------------------------------------
function() {}            =   anonymous function
function name() {}       =   function

() => {}                 =   anonymous arrow function (ES6)
const name = () => {}    =   arrow function (ES 6)  //lamda function i c#kallas


function welcomMessage(name)
{
    console.log(`välkommen ${name}`)
}

const welcomMessage = (name) => {
    console.log(`välkommen ${name}`)
}

const welcomMessage = (name) =>  console.log(`välkommen ${name}`)


function doWork(){
    console.log("spara saker till databasen...")
}

const doWork = () => {
    console.log("spara saker till databasen...")
}

const doWork = () => console.log("spara saker till databasen...")

function getDisplayName(fristName, lastName) {
    return `${fristName} ${lastName}`
}

const getDisplayName = (fristName, lastName) => {
    return `${fristName} ${lastName}`
}

const getDisplayName = (fristName, lastName) => `${fristName} ${lastName}`


*/




// const welcomMessage = (name) => {
//     console.log(`välkommen ${name}`)
// }

// welcomMessage ("Hans")

// function welcomMessage(name)
// {
//     console.log(`Du är välkommen här ${name}`)
// }


// function isVisible() 
// {
//     console.log(`välkommen det är det`)
// }

// const welcomMessage = (name) =>  console.log(`välkommen ${name}`)
//  welcomMessage("haja")


// function doWork(){
//     console.log("spara saker till databasen...")
// }

// const doWork = () => {
//     console.log("spara saker till databasen...")
// }

// const doWork = () => console.log("spara saker till databasen...")

const getDisplayName = (fristName, lastName) => `${fristName} ${lastName}`


let displayName = getDisplayName("Hans", "mattin-Lassei")
console.log(displayName)