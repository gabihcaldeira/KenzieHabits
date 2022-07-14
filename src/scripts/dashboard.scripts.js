import Dashboard from "../models/dashboard.models.js";
import DashboardActions from "../controller/dashboard.controller.js";
import {CreateHabitModal,CreateModal} from "../models/create.models.js";
import {UserEditLogout,CreateEditProfile,EditProfileModal} from "../models/userEdit_Logout.models.js";
import EditModal from "../models/edit.models.js";
const allHabits = await DashboardActions.getAllHabits()
Dashboard.showTableHabits(allHabits)
DashboardActions.filterAllHabits()
DashboardActions.filterCompleteHabits()
EditModal.updateModal()







































UserEditLogout.btnLogout.addEventListener('click', () => UserEditLogout.logout())

UserEditLogout.userInfoHeader()

EditProfileModal.editModalCreator()
CreateHabitModal.modalCreator()

const botaoModal = document.querySelector('#buttons__button--create')

        botaoModal.addEventListener('click', (event)=>{
            event.preventDefault();
            CreateModal.modal.classList.remove('close__buttonCreate')
            
        
        })

CreateModal.botaoSair.addEventListener('click', (event)=>{
    event.preventDefault()
    CreateModal.modal.classList.add('close__buttonCreate')
})
CreateModal.btnCreate.addEventListener('click', async (event)=>{
    event.preventDefault();
    console.log(await CreateModal.createHabit())
})






CreateEditProfile.botaoModalEdit.addEventListener('click', (event)=>{
    event.preventDefault();
    CreateEditProfile.modal.classList.remove('close__buttonCreate')
})

CreateEditProfile.botaoSair.addEventListener('click', (event)=>{
event.preventDefault()
CreateEditProfile.modal.classList.add('close__buttonCreate')
})
CreateEditProfile.btnCreate.addEventListener('click', async (event)=>{
event.preventDefault();
console.log(await CreateEditProfile.editProfile())
})








console.log(CreateEditProfile.form)




