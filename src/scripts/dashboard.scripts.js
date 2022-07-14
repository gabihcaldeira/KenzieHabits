import Dashboard from "../models/dashboard.models.js";
import ApiRequest from "../controller/Api.controller.js";
import DashboardActions from "../controller/dashboard.controller.js";
import {CreateHabitModal,CreateModal} from "../models/create.models.js";
import {UserEditLogout,CreateEditProfile,EditProfileModal} from "../models/userEdit_Logout.models.js";
import {EditModal, ModalEditHabit} from "../models/edit.models.js";
const allHabits = await DashboardActions.getAllHabits()
Dashboard.showTableHabits(allHabits)
DashboardActions.filterAllHabits()
DashboardActions.filterCompleteHabits()


















































































































































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







































// let id = null;

EditModal.botaoSair.addEventListener('click',()=>{EditModal.modal.classList.add('display-none')
DashboardActions.id = null;})


// botaoModalEdit.forEach(el => {
//     el.addEventListener('click', async ()=>{
//         id = el.id;
//         console.log(id)
//         EditModal.modal.classList.remove('display-none')
        
//         EditModal.formElements[5].addEventListener('click', async (event)=>{
//         event.preventDefault();
//         console.log(await EditModal.updateHabit(id))
            
//     })


//     const usersData = await ApiRequest.readAllHabits()
//     const userData = await usersData.filter((el)=>{
//         if(el.habit_id == id){
//             return el
//         }
//     })
    
//     console.log(userData)
//     EditModal.formElements[0].value = await userData[0].habit_title
//     EditModal.formElements[1].value = await userData[0].habit_description
//     EditModal.formElements[2].value = await userData[0].habit_category
// })
// })

