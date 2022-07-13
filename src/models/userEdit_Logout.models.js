import ApiRequest from '../controller/Api.controller.js'

export default class UserEditLogout{
    static btnLogout = document.querySelector('#btn__leave--user')
    
    static logout(){

        localStorage.removeItem("@habits_kenzie-token");
        localStorage.removeItem("@habits_kenzie-userInfo");
        swal({
            title: "Você tem certeza?",
            text: "Você será, redirecionado para a tela de Login !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Deslogado!", {
                icon: "success",
              }).then(() => location.reload())
            } 
          }) 
    }
}

