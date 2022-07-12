import DeleteHabitModal from "../controller/delete.habit.modal.js"

const deleteButton = document.querySelector('.delete__button')

deleteButton.addEventListener('click', async (e) => {

    const id = e.target.value

    DeleteHabitModal.create(id)

})

document.addEventListener('click', (e) => {

    const classList = e.target.classList

    if (classList.contains('close__button') || classList.contains('button__cancel')) {

        const sectionDelete = document.querySelector('.section__delete')
        sectionDelete.remove()

    }

})