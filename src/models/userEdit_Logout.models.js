

export default class UserEditLogout{
    static btnLogout = document.querySelector('#btn__leave--user')
    static popUpEdit = document.querySelector('#popup_edit')
    static popUpCreate = document.querySelector('#popup_create')

    static logout(){       
      Swal.fire({
        title: 'Você quer sair?',
        text: "Você será redirecionado para o Login!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deslogar !'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deslogado!',
            'redirecionando para o Login.',
            'success'
          ).then(() => {
            localStorage.removeItem("@habits_kenzie-token")
            localStorage.removeItem("@habits_kenzie-userInfo")
            window.location.href = '../../index.html'
          })
          
        }
      })
          
      }   
   
}

