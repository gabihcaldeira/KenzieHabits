import ApiRequest from "./Api.controller.js"
import Dashboard from "../models/dashboard.models.js"
import { EditModal, ModalEditHabit } from "../models/edit.models.js"

class DashboardActions {

    static async getAllHabits() {
        const response = await ApiRequest.readAllHabits()
        return response
    }

    static filterAllHabits() { //funciona!
        const button = document.getElementsByClassName('buttons__button')[0]
        button.addEventListener('click', async () => {
            const allHabits = await this.getAllHabits()
            Dashboard.showTableHabits(allHabits)
        });
    }

    static filterCompleteHabits() { //funciona!
        const button = document.getElementsByClassName('buttons__button')[1]
        button.addEventListener('click', async () => {
            const allHabits = await this.getAllHabits()
            const filteredHabits = allHabits.filter(({ habit_status }) => habit_status == true)
            Dashboard.showTableHabits(filteredHabits)
        });
    }

    static completeHabit() { //funciona!
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', async (event) => {
                if (event.target.checked) {
                    Swal.fire({
                        title: 'Você quer completar o hábito?',
                        text: "Você não poderá desfazer essa ação!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#E64445',
                        cancelButtonColor: '#ADB5BD',
                        confirmButtonText: 'Sim, completar!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Hábito Completo!',
                                '',
                                'success'
                            ).then(() => event.target.disabled = true)
                                .then(async () => await ApiRequest.completeHabit(event.target.value))
                                .then(async () => {
                                    const allHabits = await ApiRequest.readAllHabits()
                                    Dashboard.showTableHabits(allHabits)
                                })
                        } else {
                            event.target.checked = false
                        }
                    })
                }
            });
        });
    }
    static id = null;

    static getEditHabitModal() {
        const editButtons = document.querySelectorAll('.table__data--btn')
        editButtons.forEach((button) => {
            button.addEventListener('click', async (event) => {

                this.id = event.target.id;
                EditModal.modal.classList.remove('display-none')

                EditModal.formElements[5].addEventListener('click', async (event) => {
                    event.preventDefault();
                    await EditModal.updateHabit(this.id)

                })


                const usersData = await ApiRequest.readAllHabits()
                const userData = await usersData.filter((el) => {
                    if (el.habit_id == this.id) {
                        return el
                    }
                })
                EditModal.formElements[0].value = await userData[0].habit_title
                EditModal.formElements[1].value = await userData[0].habit_description
                EditModal.formElements[2].value = await userData[0].habit_category

            })
        })

    }

    static filterByCAtegory() {
        const form = document.querySelector(".form__categories")

        form.addEventListener('click', async (event) => {
            event.preventDefault()
            const selectedOption = form[0].value
            const response = await ApiRequest.readByCategory(selectedOption)
            Dashboard.showTableHabits(response)
        })
    }

}


export default DashboardActions