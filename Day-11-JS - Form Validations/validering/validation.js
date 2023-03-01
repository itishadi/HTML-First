//dölj password


const togglePassword = () => {
    const password = document.getElementById('password')
    const icon = document.getElementById('toggle-password-icon')

    if (password.type === "password") {
        password.type = "text"
        icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'

    } else {
        password.type = "password"
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}

const handleSubmit = (e) => {
    e.preventDefault()

    for (let element of e.target) {
        if (element.required){
        switch (e.target.type) {
            case 'email':
                if (!validateEmail(element.value))
                    errors.push(element)
                break;
            case 'text':
                if (validateName(element.value))
                    errors.push(element)
                break;
            case 'password':
                if (validatePassword(element.value))
                    errors.push(element)
                break;

        }
    }
}

    if (errors.length == 0)
        window.location.reload('success.html')


}



// ^ är börja av strängen
// $ är slutet av strängen
// [´- '] tillåtna tecken
// ? gör möjligt att ([´- '][a-öA-Ö]) den gruppen är valbar, kan finnas med eller nej
// * noll eller flera gånger kan förekomma ett tecken
// {2,30} kan förekomma efter när man har skrivit tecken [´- ']
// e.target.value hämtar ett värde/validerar ett värde

//validerat vi ett object
const validateName = (value) => {
    // e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

    const regEx = /^[A-Ö]([a-öA-Ö\u00C0-\u017F]+(([',. -][a-öA-Ö])?[a-öA-Ö]*)){2,30}$/
    if (!regEx.test(value)) {
        console.log("firstname not valid")
        return false
    }

    console.log("firstname valid")
    return true
}
// '/^[^\s@]+\.[^\s@]+$/'
const validateEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(value)) {
        console.log("email not valid")
        return false
    }

    console.log("email valid")
    return true
}

const validatePassword = (value) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!regEx.test(value)) {
        console.log("password not valid")
        return false
    }

    console.log("password valid")
    return true
}


const validate = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    switch (e.target.type) {
        case 'email':
            validateEmail(e.target.value)
            break;
        case 'text':
            validateName(e.target.value)
            break;
        case 'password':
            validatePassword(e.target.value)
            break;

    }
}
