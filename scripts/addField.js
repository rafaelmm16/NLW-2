//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    //Duplicar os campos e achar os mesmos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Achar e limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //Repetição para limpar
    fields.forEach(function(field) {
        //pegar os fields
        field.value = ""
    })

    //Achar e colocar na pag
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)
}