
import UserEditLogout from "./models/userEdit_Logout.models.js";


UserEditLogout.btnLogout.addEventListener('click', () => UserEditLogout.logout())
UserEditLogout.userInfoHeader()

addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = e.target
    if (targetId.classList.contains("fa-ellipsis")){
        UserEditLogout.popUpEdit.classList.remove("display-none")
    setTimeout(() => {
    UserEditLogout.popUpEdit.classList.add("display-none")
    }, 1500)
    }
   
   /* if (targetId.classList.contains("fa-ellipsis")){
        UserEditLogout.popUpCreate.classList.remove("display-none")
    setTimeout(() => {
    UserEditLogout.popUpCreate.classList.add("display-none")
    }, 2000) 
    } */
   
}) 



