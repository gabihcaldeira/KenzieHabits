import Dashboard from "../models/dashboard.models.js";
import DashboardActions from "../controller/dashboard.controller.js";
import UserEditLogout from "../models/userEdit_Logout.models.js";
import {CreateModal, CreateHabitModal} from "../models/create.models.js";
const allHabits = await DashboardActions.getAllHabits()
Dashboard.showTableHabits(allHabits)
DashboardActions.filterAllHabits()
DashboardActions.filterCompleteHabits()
















/**************************/

UserEditLogout.btnLogout.addEventListener('click', () => UserEditLogout.logout())

UserEditLogout.userInfoHeader()

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
