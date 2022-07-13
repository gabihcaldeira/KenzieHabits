import ApiRequest from "../controller/Api.controller.js";

class Dashboard {
    // static token = JSON.parse(localStorage.getItem("@habits_kenzie-token"))

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

        habits.forEach(({ habit_id, habit_title, habit_description, habit_category, habit_status }) => {
            const tr = document.createElement('tr')
            tr.className = 'table__row';

            let checkbox = ``;
            if (habit_status) {
                checkbox = `<span class="checkBox"><input type="checkbox" name="status" checked value="${habit_id}"><span class="checkmark"></span></span>`;
            } else {
                checkbox = `<span class="checkBox"><input type="checkbox" name="status" value="${habit_id}"><span class="checkmark"></span></span>`;
            }

            tr.innerHTML = `
                <td class="table__data table__data--check">${checkbox}</td>
                <td class="table__data">${habit_title}</td>
                <td class="table__data">${habit_description}</td>
                <td class="table__data table__data--category"> <span>${habit_category}</span></td>
                <td class="table__data table__data--btn"><button class="fa-solid fa-ellipsis"></button></td>
            `;


            table.append(tr)
        });

        const buttonMoreHabits = document.createElement('button')
        buttonMoreHabits.className = "table__button button--blue"
        buttonMoreHabits.innerText = "Carregar Mais"

        section.append(table, buttonMoreHabits)
    }
}

export default Dashboard
