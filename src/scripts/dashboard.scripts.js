import Dashboard from "../models/dashboard.models.js";
import ApiRequest from "../controller/Api.controller.js";
import DashboardActions from "../controller/dashboard.controller.js";
import { CreateHabitModal, CreateModal } from "../models/create.models.js";
import { UserEditLogout, CreateEditProfile, EditProfileModal } from "../models/userEdit_Logout.models.js";
import { EditModal, ModalEditHabit } from "../models/edit.models.js";
import DeleteHabitModal from "../controller/delete.habit.modal.js";
const allHabits = await DashboardActions.getAllHabits()
Dashboard.showTableHabits(allHabits)
DashboardActions.filterAllHabits()
DashboardActions.filterCompleteHabits()
DashboardActions.filterByCAtegory()


/* --------------------------------------------------------------------------------------------------------------------------------------------- */


UserEditLogout.btnLogout.addEventListener('click', () => UserEditLogout.logout())

UserEditLogout.userInfoHeader()

EditProfileModal.editModalCreator()
CreateHabitModal.modalCreator()

const botaoModal = document.querySelector('#buttons__button--create')

botaoModal.addEventListener('click', (event) => {
    event.preventDefault();
    CreateModal.modal.classList.remove('close__buttonCreate')


})

CreateModal.botaoSair.addEventListener('click', (event) => {
    event.preventDefault()
    CreateModal.modal.classList.add('close__buttonCreate')
})
CreateModal.btnCreate.addEventListener('click', async (event) => {
    event.preventDefault();
    await CreateModal.createHabit()
})


/* --------------------------------------------------------------------------------------------------------------------------------------------- */


CreateEditProfile.botaoModalEdit.addEventListener('click', (event) => {
    event.preventDefault();
    CreateEditProfile.modal.classList.remove('close__buttonCreate')
})

CreateEditProfile.botaoSair.addEventListener('click', (event) => {



    event.preventDefault()
    CreateEditProfile.modal.classList.add('close__buttonCreate')
})
CreateEditProfile.btnCreate.addEventListener('click', async (event) => {
    event.preventDefault();
    await CreateEditProfile.editProfile()
})


EditModal.botaoSair.addEventListener('click', () => {
    EditModal.modal.classList.add('display-none')
    DashboardActions.id = null;
})


/* --------------------------------------------------------------------------------------------------------------------------------------------- */


let buttonIdDelete = null

document.addEventListener('click', async (e) => {

    if (e.target.classList.contains('openModal')) {

        buttonIdDelete = e.target.id

    }

})

const deleteButton = document.querySelector('.deleteButton')

deleteButton.addEventListener('click', async (e) => {

    e.preventDefault()

    const modalInner = document.querySelector('.modal__inner')

    modalInner.classList.add('display-none')

    const clearSection = document.querySelector('.section__delete')

    DeleteHabitModal.create(buttonIdDelete, clearSection)

})

document.addEventListener('click', (e) => {

    e.preventDefault()

    const classList = e.target.classList

    if (classList.contains('close__button') || classList.contains('button__cancel')) {

        const modalEdit = document.querySelector('.modal--edit')

        modalEdit.classList.remove('display-none')

        const sectionDelete = document.querySelector('.section__delete')
        sectionDelete.remove()

        const modalInner = document.querySelector('.modal__inner')
        modalInner.classList.remove('display-none')

    }

})

document.addEventListener('click', async (e) => {

    if (e.target.classList.contains('button__delete')) {

        const modalEdit = document.querySelector('.modal--edit')

        modalEdit.classList.add('display-none')

        const response = await ApiRequest.deleteHabit(e.target.id)

        const allHabits = await ApiRequest.readAllHabits()
        Dashboard.showTableHabits(allHabits)

        const sectionDelete = document.querySelector('.section__delete')
        sectionDelete.remove()

        const modalInner = document.querySelector('.modal__inner')
        modalInner.classList.remove('display-none')

    }

})

/* document.addEventListener('click', async (e) => {

        if (e.target.classList.contains('openModal')) {
    
            ModalEditHabit.getId = e.target.id
    
        }
    
    }) */