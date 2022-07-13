export default class DeleteHabitModal {

    static async create(id, clearSection) {

        if(clearSection !== null) {

            const sectionDelete = document.querySelector('.section__delete')
            sectionDelete.remove()


        }

        const botãoDeDelete = document.querySelector('.delete__button')

        const mainTeste = document.querySelector('.main__teste')

        const sectionDelete = document.createElement('section')

        sectionDelete.classList.add('section__delete')

        sectionDelete.append(this.closeDiv(), this.warningDiv(), this.buttonsDiv())

        mainTeste.append(sectionDelete)

        

    }


    static closeDiv() {

        const closeDiv = document.createElement('div')

        const titleDelete = document.createElement('h2')
        const buttonClose = document.createElement('button')

        closeDiv.classList.add('close__div')

        titleDelete.classList.add('close__title')
        buttonClose.classList.add('close__button')

        titleDelete.innerText = 'Excluir hábito'
        buttonClose.innerText = 'X'

        closeDiv.append(titleDelete, buttonClose)

        return closeDiv

    }


    static warningDiv() {

        const warningDiv = document.createElement('div')

        const textInfo = document.createElement('p')
        const textMoreInfo = document.createElement('p')

        warningDiv.classList.add('warning__div')

        textInfo.classList.add('warning__info')
        textMoreInfo.classList.add('warning__more')

        textInfo.innerText = 'Certeza que deseja excluir este hábito?'
        textMoreInfo.innerText = 'Após executar essa ação não, será possível desfazer'

        warningDiv.append(textInfo, textMoreInfo)

        return warningDiv

    }


    static buttonsDiv() {

        const buttonsDiv = document.createElement('div')

        const cancelButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        buttonsDiv.classList.add('buttons__div')

        cancelButton.classList.add('button__cancel')
        deleteButton.classList.add('button__delete')

        cancelButton.innerText = 'Cancelar'
        deleteButton.innerText = 'Sim, excluir este hábito'

        buttonsDiv.append(cancelButton, deleteButton)

        return buttonsDiv

    }

}