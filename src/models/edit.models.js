import ApiRequest from '../controller/Api.controller.js'



let id = null;
const modal = document.querySelector('.modal')
const botaoSair = document.querySelector('.modal__inner--button')
botaoSair.addEventListener('click', ()=>{
    modal.classList.add('display-none')
    id = null;

    EditModal.formElements[0].value = null;
    EditModal.formElements[1].value = null;
    EditModal.formElements[2].value = null;
    if(userData[0].habit_status == true){
        EditModal.formElements[3].checked = true
    }else{
        EditModal.formElements[3].checked = false
    }



})
export default class EditModal{


    static form = document.querySelector('.modal__inner--form')
    static formElements = [...this.form.elements]


    static async updateHabit(id){
         
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

    static async removeHabit(id){
        const response = await ApiRequest.deleteHabit(id)
        
        if(response.message = "hábito deletado com sucesso"){
            swal("Sucesso", "Seu hábito foi removido com sucesso", "success");
        }
        
    }

}


await ApiRequest.readAllHabits()



    const botaoModal = document.querySelectorAll('.modalAbrir')
    botaoModal.forEach((el)=>{
        el.addEventListener('click',async ()=>{
            id = el.id;
            

            modal.classList.remove('display-none')
            
            const usersData = await ApiRequest.readAllHabits()
            const userData = await usersData.filter((el)=>{
                if(el.habit_id == id){
                    return el
                }
            })
            
            console.log(userData)
            EditModal.formElements[0].value = await userData[0].habit_title
            EditModal.formElements[1].value = await userData[0].habit_description
            EditModal.formElements[2].value = await userData[0].habit_category
            if(userData[0].habit_status == true){
                EditModal.formElements[3].checked = true
            }else{
                EditModal.formElements[3].checked = false
            }

            EditModal.formElements[5].addEventListener('click', async (event)=>{
                event.preventDefault();
                console.log(await EditModal.updateHabit(id))
                
            })

            
            EditModal.formElements[4].addEventListener('click', async (event)=>{
                event.preventDefault();
                console.log(await EditModal.removeHabit(id))
            })

        })
    })