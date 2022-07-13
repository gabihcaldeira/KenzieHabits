import UserEditLogout from "./models/userEdit_Logout.models.js";
import {CreateModal, CreateHabitModal} from "./models/create.models.js";

UserEditLogout.btnLogout.addEventListener('click', () => UserEditLogout.logout())


addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    if (targetId === 'evento de editar'){
        UserEditLogout.popUpEdit.classList.remove("display-none")
    setTimeout(() => {
    UserEditLogout.popUpEdit.classList.add("display-none")
    }, 2000); 
    }if (targetId === 'evento de criar'){
        UserEditLogout.popUpCreate.classList.remove("display-none")
    setTimeout(() => {
    UserEditLogout.popUpCreate.classList.add("display-none")
    }, 2000); 
    }
   
}) 

CreateHabitModal.modalCreator()

const botaoModal = document.querySelector('#openModal')

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
