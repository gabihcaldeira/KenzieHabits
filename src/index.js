import Login from "./controller/login.controller.js";



Login.btnLogin.addEventListener('click', async (e) => {
    e.preventDefault()
    await Login.requisitionLogin()    
})





