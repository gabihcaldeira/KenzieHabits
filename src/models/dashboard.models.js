import ApiRequest from "../controller/Api.controller.js";
import DashboardActions from "../controller/dashboard.controller.js";

class Dashboard {
    static tableLength = 10;

    static showTableHabits(habits) {
        const section = document.getElementById('table')
        section.innerHTML = ""

        const table = document.createElement('table')

        const tableHeader = document.createElement('tr')
        tableHeader.className = "table__header"
        tableHeader.innerHTML = `<th class="table__data table__data--header">Status</th>
        <th class="table__data table__data--header">Título</th>
        <th class="table__data table__data--header">Descrição</th>
        <th class="table__data  table__data--header">Categoria</th>
        <th class="table__data table__data--header">Editar</th>`

        table.append(tableHeader)

        let length = this.tableLength
        let maxHabits = (habits.length > length) ? length : habits.length;

        for (let index = 0; index < maxHabits; index++) {

            let habit = habits[index];
            let { habit_id, habit_title, habit_description, habit_category, habit_status } = habit;


            const tr = document.createElement('tr')
            tr.className = 'table__row';

            let checkbox = ``;
            let habitTitle = `<td class="table__data">${habit_title}</td>`
            if (habit_status) {
                checkbox = `<span class="checkBox"><input type="checkbox" name="status" disabled checked value="${habit_id}"><span class="checkmark"></span></span>`;
                habitTitle = `<td class="table__data" style="text-decoration:line-through">${habit_title}</td>`
            } else {
                checkbox = `<span class="checkBox"><input type="checkbox" name="status" value="${habit_id}"><span class="checkmark"></span></span>`;
            }

            tr.innerHTML = `
                <td class="table__data table__data--check">${checkbox}</td>
                ${habitTitle}
                <td class="table__data">${habit_description}</td>
                <td class="table__data table__data--category"> <span>${habit_category}</span></td>
                <td class="table__data table__data--btn"><button id="${habit_id}" class="fa-solid fa-ellipsis"></button></td>
            `;


            table.append(tr)
        }

        section.append(table)

        if (habits.length > maxHabits) {
            const buttonMoreHabits = document.createElement('button')
            buttonMoreHabits.className = "table__button button--blue"
            buttonMoreHabits.innerText = "Carregar Mais"
            section.append(buttonMoreHabits)
            buttonMoreHabits.addEventListener('click', () => {
                this.tableLength += 10
                this.showTableHabits(habits)
                DashboardActions.getEditHabitModal()
            });
        }
        DashboardActions.completeHabit()
    }
}

export default Dashboard
