/*
variabler
-------------------------
firstName = "Hans"                  <=  GÖR INTE SÅ HÄR
var firstName = "Hans"              <=  GLOBALT DEKLARERAD + ÖVERSKRIVNINGSBAR
let firstName = "Hans"              <=  LOKALT KODBLOCKS DEKLARERAD
const firstName = "Hans"            <=  ÄR STSTISK OCH MÅSTE HA ETT KONSTANT VÄRDE VARS


DATATYPER
--------------------------
String
Number
Object
null
Underfind
(any)


OPERANDER
--------------------------
==      LIKA MED
===     LIKA MED OCH SAMMA DATATYPE
!=      INTE LIKA MED
!==     INTE LIKA MED OCH INTE SAMMA DATATYPE
<       MINDRE ÄN
>       STÖRRE ÄN
<=      MINDRE ELLER LIKA MED
>=      STÖRRE ELLER LIKA MED
&&      OCH
||      ELLER
!       INTE
( ??      NULL-COALESCING)
( ??=     NULL-COALESCING)

var name = Query.Name ?? Body.Name
var name = null ?? Body.Name



var user = _context.User.FirstOrDefault();
if (user == null)
{
    user = new User();
}

var user ??= _context.User.FirstOrDefault() ?? new User();




NaN = NOT a NUMBER
*/

// VARIABLER

// let firstName = "Hans"
// console.log(firstName)

// if(true) {
//     let firstName = "Anna"
//     console.log(firstName)
// }

// // function setFirstName(){
// //     var firstName = "Kalle"
// //     console.log(firstName)
// // }
// // setFirstName()

// console.log(firstName)


// // private readonly string _connectionString;


// var value = date()




// DATATYPER + typescript
var text = "Här har vi text."
var text = 'Här har vi text.'
var text = `Här har vi text.`

var person = "jag"
var text = `Här har ${person} en text`
console.log(text)

var sum = 0
sum += 12
sum += 15
sum += 6.5
console.log(sum)

var stringage = "12"
var age = Number(stringage)
console.log(age)


// oprerander

// let password = 1234
// let comparePassword = "1234"

// if (password == comparePassword) 
// console.log(true)
// else
// console.log(false)


// let password = 1234
// let comparePassword = "1234"

// if (password === comparePassword) 
// console.log(true)
// else
// console.log(false)


// let password = 1234
// let comparePassword = "1234"

// if (password != comparePassword) 
// console.log(true)
// else
// console.log(false)

// varpassword = 20
// var comparePassword = "20"

// if (password < comparePassword) 
// console.log(true)
// else
// console.log(false)


var password = 20
var comparePassword = "20"
console.log(typeof(password))

// if (password == password && typeof(password) == typeof(comparePassword)) 
// console.log(true)
// else
// console.log(false)

if (password === comparePassword) 
console.log(true)
else
console.log(false)
