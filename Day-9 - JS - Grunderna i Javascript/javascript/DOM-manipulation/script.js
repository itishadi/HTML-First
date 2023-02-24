// document.getElementById("app").innerText = "Hadi";
//DOM manipolation
//

//

//två olika sätt att hämta id
//stoppa in eller hämta ut innehåll från ett element via id=""
// document.getElementById("displayName").innerText = "Joakim"
// document.getElementById("displayName").innerText = <h1>Joakim</h1>

// document.querySelector("#displayName").innerText = "Anna"
// document.getElementById("displayName").innerText = <h1>Anna</h1>
// document.getElementsByClassName("label")

//[exemple]
// document.getElementById("result").innerText = <h1>Joakim</h1>


/*
id      firstName, lastName, displayName
Name    firstName, lastName,
class   form-control, mb-3
element input, div, span
*/ 




//DOM manipulation
// document.getElementById("firtName").value= "Anna"
// document.querySelector("firstName")
console.log(document.getElementById("firstName").value)
console.log(document.querySelector("#firstName").value)
// var firstName = document.getElementById("firstName")
// console.log(firstName)


console.log(document.getElementsByName("firstName")[0].value)

console.log(document.getElementsByTagName("input"))
//queryselector hämtar bara en rad
console.log(document.querySelectorAll("input"))

console.log(document.getElementsByClassName(".form-control"))
console.log(document.getElementsByClassName(".form-control"))

document.getElementById("displayName").innerText = "Hans"
document.getElementById("displayName").innerHTML = "<strong> Hans</strong>"