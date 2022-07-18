import ApiRequest from "../controller/Api.controller.js"

export class UserEditLogout {

  static btnLogout = document.querySelector('#btn__leave--user')
  static popUpEdit = document.querySelector('#popup_edit')
  static popUpCreate = document.querySelector('#popup_create')


  static userInfoHeader() {
    const { usr_name, usr_image } = JSON.parse(localStorage.getItem('@habits_kenzie-userInfo'))
    const userName = document.querySelector('.header__username')
    const userPriImage = document.querySelector('.dropdown__button')
    const userSubImage = document.querySelector('.header__userAvatar')
    userName.innerText = `${usr_name}`
    userPriImage.src = `${usr_image}`
    userSubImage.src = `${usr_image}`


  }

  static logout() {
    Swal.fire({
      title: 'Você quer sair?',
      text: "Você será redirecionado para o Login!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deslogar !',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deslogado!',
          'Redirecionando para o Login.',
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






//----------------------------------------------------------------------------------------------
export class EditProfileModal {

  static editModalCreator() {
    const modal = document.querySelector('body')
    const { usr_name, usr_image } = JSON.parse(localStorage.getItem('@habits_kenzie-userInfo'))

    const createModalEdit = modal.insertAdjacentHTML('beforeend',
      `
  <div class = "modalThree close__buttonCreate">
  <div class = "modalOne">
  <form action="#" class = "form__editProfile">
      <div class = "form__header--divisory">
          <button id = "form__btnCloseProfile">
              X
          </button>
          <h2 class = form__headerTitle>Editar perfil</h2>
      </div>
      
      <div class = "form__username--divisory">
          <label for="username">Nome</label>
          <input type="text"  value="${usr_name}" class="form__title" id="username" required="true">
      </div>

      <div class="form__userImg--divisory">
          <label for="userImg">Descrição</label>
          <input type="text" value="${usr_image}" class='form__userImg' name="" id="userImg" required="true">
      </div>

      <button type = "submit" class = "form__btnEditUser">Concluir</button>
  </form>
</div>
</div>
`
    )
    return createModalEdit
  }
}

EditProfileModal.editModalCreator()

export class CreateEditProfile {
  static modal = document.querySelector('.modalThree')
  static botaoSair = document.querySelector('#form__btnCloseProfile')
  static btnCreate = document.querySelector('.form__btnEditUser')
  static form = document.querySelector('.form__editProfile')
  static formElements = [...this.form.elements]
  static botaoModalEdit = document.querySelector('#btn__edituser--avatar')


  static async editProfile() {

    if (this.formElements[1].value == "" || this.formElements[2].value == "") {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha todos os campos!',
        showConfirmButton: true,
      })
    } else {

      const profileEdit = {
        usr_name: this.formElements[1].value,
        usr_image: this.formElements[2].value
      }
      const response = await ApiRequest.updateProfile(profileEdit)
      if (response.usr_email) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Perfil editado com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => this.modal.classList.add('close__buttonCreate'))
          .then(() => {
            localStorage.removeItem("@habits_kenzie-userInfo")
            localStorage.setItem("@habits_kenzie-userInfo", JSON.stringify(response))
            UserEditLogout.userInfoHeader()
          })
      }
      return response
    }
  }

}

CreateEditProfile.botaoSair