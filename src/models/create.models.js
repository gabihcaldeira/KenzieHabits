import ApiRequest from '../controller/Api.controller.js'
import Dashboard from '../models/dashboard.models.js'
import DashboardActions from '../controller/dashboard.controller.js'

export class CreateHabitModal {

    static modalCreator() {
        const modal = document.querySelector('body')
        const createModal = modal.insertAdjacentHTML('beforeend',
            `
    <div class = 'modalTwo close__buttonCreate'>
    <div class = "modalOne">
    <form action="#" class = "form__createTask">
        <div class = "form__header--divisory">
            <button class = form__btnClose>
                X
            </button>
            <h2 class = form__headerTitle>Criar Hábito</h2>
        </div>
        
        <div class = "form__title--divisory">
            <label for="title">Título</label>
            <input type="text" placeholder = "Digitar título"class = "form__title" id = "title">
        </div>

        <div class = "form__description--divisory">
            <label for="description">Descrição</label>
            <textarea placeholder = "Digite a descrição" class = 'form__description' name="" id="description" cols="30" rows="10"></textarea>
        </div>

        <div class = "form__category--divisory">
            <label for="category">Categoria</label>
            <select name="" class = "form__category" id="category" >
                <option selected>Selecionar Categoria</option>
                <option value="saude">💜 Saúde</option>  
                <option value="estudos">🖊️ Estudos</option>
                <option value="casa">🏠 Casa</option>
                <option value="trabalho">🔨 Trabalho</option>
                <option value="lazer">🏖️Lazer</option>
            </select>
        </div>

        <button type = "submit" class = "form__btnCreate">Inserir</button>
    </form>
</div>
</div>`
        )
        return createModal
    }
}
CreateHabitModal.modalCreator()

export class CreateModal {
    static modal = document.querySelector('.modalTwo')
    static botaoSair = document.querySelector('.form__btnClose')
    static btnCreate = document.querySelector('.form__btnCreate')
    static form = document.querySelector('.form__createTask')
    static formElements = [...this.form.elements]


    static async createHabit() {
        const createHabit = {
            habit_title: this.formElements[1].value,
            habit_description: this.formElements[2].value,
            habit_category: this.formElements[3].value
        }
        const response = await ApiRequest.createHabit(createHabit)
        if (response.habit_id) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Seu hábito foi criado",
                showConfirmButton: false,
                timer: 1500
            }).then(async () => {
                let allHabits = await DashboardActions.getAllHabits()
                Dashboard.showTableHabits(allHabits)
                this.modal.classList.add('close__buttonCreate')
            })

        }
        return createHabit
    }

}