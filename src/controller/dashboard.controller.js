import ApiRequest from "./Api.controller.js"
import Dashboard from "../models/dashboard.models.js"


class DashboardActions {

    static async getAllHabits() {
        const response = await ApiRequest.readAllHabits()
        return response
    }

    static filterAllHabits() {
        const button = document.getElementsByClassName('buttons__button')[0]
        button.addEventListener('click', async () => {
            const allHabits = await this.getAllHabits()
            Dashboard.showTableHabits(allHabits)
        });
    }

    static filterCompleteHabits() {
        const button = document.getElementsByClassName('buttons__button')[1]
        button.addEventListener('click', async () => {
            const allHabits = await this.getAllHabits()
            const filteredHabits = allHabits.filter(({ habit_status }) => habit_status == true)
            Dashboard.showTableHabits(filteredHabits)
        });
    }

    static loadMoreHabits() { }

    static completeHabit() {
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    ApiRequest.completeHabit(event.target.value)
                } else {
                    let data = { habit_status: false }
                    ApiRequest.updateHabit(data, event.target.value)
                }
            })
        })

    }

    static getCreateHabitModal() { }

    static getEditHabitModal() { }
}