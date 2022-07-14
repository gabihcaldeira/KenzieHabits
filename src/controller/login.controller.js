import ApiRequest from "./Api.controller.js";

export default class Login {

    static btnLogin = document.querySelector('#btn__login')

    static async requisitionLogin() {

        const formLogin = document.querySelector('.form__login')

        const elenForms = [...formLogin.elements]

        const userData = {
            email: elenForms[0].value,
            password: elenForms[1].value
        }

        const responseLogin = await ApiRequest.userLogin(userData)

        console.log(responseLogin)

        if (responseLogin.token) {

            localStorage.setItem("@habits_kenzie-token", JSON.stringify(responseLogin.token))
            localStorage.setItem("@habits_kenzie-userInfo", JSON.stringify(responseLogin.response))

            swal({
                title: "Login realizado com sucesso!",
                icon: "success",
                button: false,
                timer: 1500
            }).then(() => window.location.href = "/M2/Capstone/m2-capstone-kenzie-habits-gabihcaldeira/src/views/dashboard.views.html")

        }
        else if (responseLogin.message) {

            swal({
                title: `${responseLogin.message}`,
                icon: "error",
                button: false,
                timer: 1500
            })

        }

    }

}




