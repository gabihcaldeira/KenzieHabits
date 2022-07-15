import ApiRequest from '../controller/Api.controller.js'
import Dashboard from './dashboard.models.js'
export class ModalEditHabit {

    static async modalEditCreate() {

        const body = document.querySelector('body')
        const editModal = body.insertAdjacentHTML('beforeend',
            `
       <div class="modal modal--edit display-none">
       <div class="modal__inner">
           <div class="modal__inner--header">            
               <h1 class="modal__inner--title">Editar Hábito</h1>
               <button class="modal__inner--button">X</button>
           </div>
   
           <form class="modal__inner--form">
               <div class="modal__inner__div">
                   <label for="iinputTitle" class="modal__inner--label">Título</label>
                   <input type="text" class="modal__inner--inputTitle" id="inputTitle">
               </div>
               <div class="modal__inner__div">
                   <label for="inputDescription" class="modal__inner--label">Descrição</label>
                   <input type="text" class="modal__inner--inputDescription" id="inputDescription">
               </div>
               
               <div class="modal__inner__div">
                   <label for="inputCategoria" class="modal__inner--label">Categoria</label>
                   <select id="inputCategoria" name="inputCategoria">
                       <option value="saude">💜 Saúde</option>  
                       <option value="estudos">🖊️ Estudos</option>
                       <option value="casa">🏠 Casa</option>
                       <option value="trabalho">🔨 Trabalho</option>
                       <option value="lazer">🏖️Lazer</option>
                 </select>
               </div>
               
               <div class="modal__inner__div--status">
                   <label for="status" class="modal__inner--label">Status</label>
                   <label class="new__checkbox"><input type="checkbox" id="status" name="status"><span class="checkmark"></span></label>
                   
               </div>
   
               <div class="modal__inner__div--buttons">
                   <button class="deleteButton">Excluir</button>
                   <button class="saveButton">Salvar alterações</button>
               </div>
           </form>
       </div>
   </div>`
        )
        return editModal
    }
}


ModalEditHabit.modalEditCreate()







export class EditModal {



    static formEdit = document.querySelector('.modal__inner--form')
    static formElements = [...this.formEdit.elements]

    static modal = document.querySelector('.modal')
    static botaoSair = document.querySelector('.modal__inner--button')







    static async updateHabit(id) {
        const habits = {
            habit_title: this.formElements[0].value,
            habit_description: this.formElements[1].value,
            habit_category: this.formElements[2].value
        }
        const response = await ApiRequest.updateHabit(habits, id)
        if (response.habit_id) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Seu hábito foi editado",
                showConfirmButton: false,
                timer: 1500
            }).then(() => EditModal.modal.classList.add('display-none')).then(async () => {
                const allHabits = await ApiRequest.readAllHabits()
                Dashboard.showTableHabits(allHabits)
            })
        }
        return habits
    }

}