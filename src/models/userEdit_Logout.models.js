

export default class UserEditLogout{
    
    static btnLogout = document.querySelector('#btn__leave--user')
    static popUpEdit = document.querySelector('#popup_edit')
    static popUpCreate = document.querySelector('#popup_create')

    static userInfoHeader(){
        const {usr_name,usr_image} = JSON.parse(localStorage.getItem('@habits_kenzie-userInfo'))
        const userName = document.querySelector('.header__username')
        const userPriImage = document.querySelector('.dropdown__button')
        const userSubImage = document.querySelector('.header__userAvatar')
        userName.innerText = `${usr_name}`       
        userPriImage.src = `${usr_image}`
        userSubImage.src = `${usr_image}`  
        
    }

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

