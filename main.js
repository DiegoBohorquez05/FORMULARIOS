const boton = document.getElementById('ingresar')
boton.addEventListener('click', e => {
    e.preventDefault()

    const usarname = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (usarname === '' || password === '') {
        alert('No se a encontrado el usuario o la contraseña')
    }

    if (usarname === 'carlitos' && password === 'carlitos123') {
        alert('Correctas')
        setTimeout(() => {
            location = './index.html' //Cuando se colocan bien los datos, se va a redirigir a la pagina index.html
        })
    } else {
        document.querySelector('#mensaje').style.display = 'block'
        setTimeout(() => {
            document.querySelector('#mensaje').style.display = 'none'
        }, 3000)
    }

})

document.getElementById('password').addEventListener('mouseenter', ocultar)//contador, cada vez que pasa el raton por encima del input contraseña, se cuenta 1

function mostrar() {
    console.log('aja')
    document.getElementById('password').type = 'text'//cambio de tipo contraseña a tipo texto, se puede ver
}

function ocultar() {
    document.getElementById('password').type = 'password'
}

document.getElementById('recordarme').addEventListener('change', function (z) {
    if (z.target.checked == true) {
        alert('Desea que recordemos sus datos?')
    }
})