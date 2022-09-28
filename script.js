const pedir=document.querySelector('#boton1')
const lista=document.querySelector('#seleccione')
const modal=document.querySelector('.modal')
const seleccionado=document.getElementById('productoEsco')

const cancelar=document.querySelector('.cancelar')

pedir.addEventListener('click',()=>{
    if(lista.options[lista.selectedIndex].value==='ninguno'){
        alert('No escogio nada')
    }else{
        modal.style.top=0
        seleccionado.textContent=(lista.options[lista.selectedIndex].text)
    }
})

cancelar.addEventListener('click',()=>{
    modal.style.top='-1120px'
    lista.selectedIndex=0
})