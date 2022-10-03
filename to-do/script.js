const todoForm = document.getElementById('todo-form')
const toDos = []

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const toDoInput = document.querySelector('#todo')
    toDos.push(toDoInput.value)
    console.log(toDos)
    toDoInput.value = ''
    imprimeToDos()
})


function imprimeToDos(){
    const todoListSection = document.querySelector('#todos-list')
    todoListSection.innerHTML = ''
    for (const tarefa of toDos) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body','d-flex','align-item-center')

        const pToDoText = document.createElement('p')
        pToDoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pToDoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', "delete-todo")
        btnDelete.addEventListener('click', () => {
            const index = toDos.indexOf(tarefa)
            toDos.splice(index, 1)
            imprimeToDos()
         } )

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'
        

        btnDelete.appendChild(spanIcon)
        divCardBody.append(pToDoText, btnDelete)
        divCard.appendChild(divCardBody)
        todoListSection.appendChild(divCard)

 
    }
}


