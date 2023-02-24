/*
Callbacks Functions
-----------------------------------------



// error function
// const getTodo = (id, callback) => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json())
//     .then(data => {
//         for (var item of data)
//         console.log(item.title)
//     })
// }

const getTodoUsingPromise = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        for (var item of data)
        console.log(item.title)
    })
}

const getTodosAsync = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()

    for(var item of data)
    console.log(item.log)
}




getTodoUsingPromise()
getTodosAsync()
// getTodo()
------------------------------------------------------------

function getTodo (id, callback) {
        fetch("https://jsonplaceholder.typicode.com/todos" + id)
        .then(res => res.json())
        .then(data => callback(data))
}


getTodo(2, (data) => displayTodo(data))

    function displayTodo(data) {
        document.getElementById('title').innerText = data.title
        document.querySelector('#comleted').innerText = data.completed
    }
    -------------------------------------------------------------
*/



// getTodo(2, (data) => displayTodo(data))


// getTodo(2, myCallback{

// })

// function myCallback(data) {

// }


function getTodo (callback) {
    fetch("https://jsonplaceholder.typicode.com/todos/"
    .then(res => res.json())
    .then(data => callback(data))
)}


getTodo((data) => displayTodos(data))

function displayTodos(data) {
   todosElement = document.getElementById('todos')
    // document.getElementById('title').innerText = data.title
    // document.querySelector('#comleted').innerText = data.completed
    for (todo in data) {
        todosElement.innreHTML += 
        `<div >
        ${todo.title}
        <div>`
    }
}

