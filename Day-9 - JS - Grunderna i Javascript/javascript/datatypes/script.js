/*
    DEKLARERING AV VARIABLER
    --------------------------------------------------------------------------------------------------------------------
    Javascript använder sig av camelCase

    camelCase       firstName           js, java, c, c++
    PacalCase       firstName           pascal, vb, c#
    snake_case      first-Name          pyton
    kebab-case      first-Name          css, powershell

    var     =   global variabel                       var firstName = "Hans"  
    let     =   lokalt scoped deklarerad variabel     let firstName = "Hans" kan delareras en gång och göra om för varie variabler
    const   =   är constant och kan inte deklareras    const firstName = "Hans"


    // firstName = "Hans"
// console.log(firstName)
// // var firstName = "Toomy"

// // function test() {
// //     var firstName = "Tommy"
// // }
// // test() 
// if(true){
//     var firstName = "Tommy"
//     console.log(firstName)
// }


// console.log(firstName)





    DATATYPER
    ----------------------------------------------------------------------------------------------------------------------
    nvarchar(50)
    varchar(50)

    n           =   unicode/utf-8/åäö
    var         =   0 till 50, 0 till 150
    char        =   string/tecken

    char(10)    =   10          B O - - - - - - - - 10 bytes
    varchar(10) =   0-10        B O                 2 bytes + 2 bytes = 4

    nchar(10)   =   10          B O - - - - - - - - 20 bytes
    nvarchar(10)=   0-10        B O                 4 bytes + 2 bytes = 6


    DataTyper
    JS                             C#                                                      SQL
    -----------------------------------------------------------------------------------------------------------------------------------
    String                          String                                                 Char, varchar, nvarchar, nchar, text, ntext
    Number                          byte, sbyte, short, ushort, int, long, uint, ulong      tinyint, smallint, int, bigint
    Number                          float, double, decimal                                  real, decimal, money
    Boolean                         bool                                                    bit
    Object                          object      
    underfind                       ---
    null                            null

                                    int -2 147 483 647 till 2 147 483 647 
                                    uint 0 till 4 294 967 294


    0.1 + 0.1 + 0.1 = 0.3? eller?

*/

/*
 String = till för text
------------------------------
""   citat                      "";  =>  text
''   enkelfnuttar               '';  =>  enkelt tecken
``back-ticks (shift + `)        $""; =>  placeholder

*/

let firstName = "Hans"
let lastName = 'Mattin-Lassei'
let address = `Nordkapsvägen 1`
let city = 'Vega';

var sentence = "Hej jag heter ... och jag bor på ... i ...."
var sentence = "Hej jag heter " + firstName + " " + lastName + " och jag bor på " + address + " i " + city + "."
var sentence = `Hej jag heter ${firstName} ${lastName} och jag bor på ${address} i ${city}.`

let category = "Computers"
let subCategory = "Laptops"
var apiUrl = "http://localhost:7071/api/products?category=" + category
var apiUrl = "http://localhost:7071/api/products?category=" + category +"&subcategory=" + subCategory
var apiUrl = ` http://localhost:7071/api/products?category=${category}&subcategory=${subCategory}`
// console.log(apiUrl);

var modifiedApiUrl = apiUrl.toLocaleUpperCase()
var modifiedApiUrl = apiUrl.toLocaleLowerCase()
// console.log(modifiedApiUrl)

var count = apiUrl.length
var trimmed = apiUrl.trim()
// console.log(count)
// console.log(trimmed)

//number - till för tal
var value = 1
var value = 1.1
var value = 123e-5
var value = 123e5
var value = 0.12324534546456
var value = 92333453456464
var value = 9999999999999

// console.log(value)

//Boolean - sant eller false
var isActive = true
var isActive = false

// NULL och underfind
var ref                     //      <= underfind
var ref = null              //      <= object
var ref = underfind         //      <= underfind
console.log(typeof ref)


