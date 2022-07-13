import ApiRequest from "./Api.controller.js"
import Dashboard from "../models/dashboard.models.js"


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
                    // fazer modal de verificar
                    await ApiRequest.completeHabit(event.target.value)
                    event.target.disabled = true;

                }
            });
        });
    }

    static getCreateHabitModal() {
        const button = document.getElementsByClassName('buttons__button')[2]
        button.addEventListener('click', () => {
            //mostrar modal
        })


    }

    static getEditHabitModal() {
        const editButtons = document.querySelectorAll('.table__data--btn')
        editButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                // event.target.id --> id do botão editar
            })
        })

    }
}

export default DashboardActions