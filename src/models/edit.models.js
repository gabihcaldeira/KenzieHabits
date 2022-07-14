import ApiRequest from '../controller/Api.controller.js'


const modal = document.querySelector('.modal')
const botaoSair = document.querySelector('.modal__inner--button')
botaoSair.addEventListener('click',()=>modal.classList.add('display-none'))
export default class EditModal{

    static form = document.querySelector('.modal__inner--form')
    static formElements = [...this.form.elements]

    static async updateHabit(id){
         console.log(this.form)
        const updateHabit = {
        habit_title: this.formElements[0].value,
        habit_description:  this.formElements[1].value,
        habit_category: this.formElements[2].value
      }
    const response = await ApiRequest.updateHabit(updateHabit,id)
    if(response.habit_id){
        swal("Sucesso", "Seu hábito foi editado", "success");
    }
    return updateHabit
    }
}


console.log(await ApiRequest.readAllHabits())


const botaoModal = document.querySelectorAll('.modalAbrir')

botaoModal.forEach(el => {
        el.addEventListener('click', ()=>{
            const id = el.id;
            console.log(id)
            modal.classList.remove('display-none')
            
            EditModal.formElements[5].addEventListener('click', async (event)=>{
            event.preventDefault();
            console.log(await EditModal.updateHabit(id))
                
        })
    })
})
