import Dashboard from "../models/dashboard.models.js";
import DashboardActions from "../controller/dashboard.controller.js";


const allHabits = await DashboardActions.getAllHabits()
Dashboard.showTableHabits(allHabits)
DashboardActions.filterAllHabits()
DashboardActions.filterCompleteHabits()















































import { EditProfileModal, CreateEditProfile } from "../models/userEdit_Logout.models.js";

EditProfileModal.editModalCreator()

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

