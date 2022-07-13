
import UserEditLogout from "./models/userEdit_Logout.models.js";


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



