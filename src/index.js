let inputText = document.querySelectorAll('.input-text')
let btnEnvio = document.querySelector('.btn-envio')

btnEnvio.addEventListener('click', (e) => {
    e.preventDefault()
    inputText.forEach(input => {
            if (input.value!=="") {
                input.classList.add('filled')
                input.nextElementSibling.classList.remove('warning-message')
            }else {
                input.classList.remove('filled')
                input.classList.add('unfilled')
                input.nextElementSibling.classList.add('warning-message')
            }
        })
    });    

