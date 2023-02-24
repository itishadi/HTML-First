/* 
Events / EventsHandlers
--------------------------------------------------------
Triggers: click, focus, blur, keydown, keyup, change, mouseover.....



DOM (Document Object Model) - hemsidan      =   document

DOM
------------------------------------------------------------





BOM (Browser Object Model)  - Webbläsaren   =   window

BOM
------------------------------------------------------------
console.log(window.innerWidth + "px")

window.localStorage.setItem("name", "Hans")
window.sessionStorage.setItem("name", "Hans")

document.getElementById('localstorage').innerText =
 window.localStorage.getItem("name")
document.getElementById('sessionstorage').innerText =
 window.sessionstorage.getItem("name")

*/
// console.log(window.innerWidth + "px")
// console.log(window.outerWidth + "px")

//när jag trycker på knappen sparas informationen   callback
// document.getElementById('btn-save').addEventListener("click", function () {
//     window.localStorage.setItem("name", "Hans")
//     window.sessionStorage.setItem("name", "Hans")
// })

 document.getElementById('btn-save').addEventListener("click", function () {
        window.localStorage.setItem("name", "Hans")
        window.sessionStorage.setItem("name", "Hans")
    })

    function addStorage() {
        window.localStorage.setItem("name", "Hans")
        window.sessionStorage.setItem("name", "Hans")
    }

    function ShowValue (event) {
     console.log(event.target.valeu)
    }