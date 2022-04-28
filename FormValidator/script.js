// Code Starts Here..
let form = document.querySelector("#form")
let message = document.querySelector("#message")
let isValid = false
let passwordMatch = false
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm(form)
    if (!isValid) {
        message.textContent = 'Please fill in all input'
        message.style.color = 'red'
    }
    else {
        checkPasswordMatch()

        if (!passwordMatch) {
            message.textContent = 'Ensure Password match'
            message.style.color = 'red'
            document.querySelector("#password1").style.borderColor = 'red'
            document.querySelector("#password2").style.borderColor = 'red'
            return
        }

        else {
            document.querySelector("#password1").style.borderColor = 'green'
            document.querySelector("#password2").style.borderColor = 'green'
        }

        if (isValid && passwordMatch) {
         message.textContent = 'Register Sucessfully'
            message.style.color = 'green'
        }
    }
   
})

let validateForm = (form) => {
    isValid = form.checkValidity()
}

let checkPasswordMatch = () => {
    let password = document.querySelector("#password1").value
    let password2 = document.querySelector("#password2").value
    if (password === password2) {
        passwordMatch = true
    }
}