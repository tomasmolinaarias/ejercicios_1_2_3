const resultado = document.querySelector('.formulario');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const erro_nombre = document.querySelector('.errorNombre');
const asunto = document.querySelector('#asunto');
const erro_asunto = document.querySelector('.errorAsunto');
const mensaje = document.querySelector('#mensaje');
const erro_mensaje = document.querySelector('.errorMensaje');
const boton = document.querySelector('#botton');
boton.addEventListener('click', () => {
    event.preventDefault()

    console.log(asunto.value)
    let entrar = false
    const sololetras = /I[A-Za-z]+$/g;
    if (!sololetras.test(nombre.value)) {
        erro_nombre.innerHTML = 'El nombre es requerido.';
        entrar = true
    }
    console.log(sololetras.test(nombre.value));
    if (!sololetras.test(asunto.value)) {
        erro_asunto.innerHTML = 'El nombre es requerido.';
        entrar = true
    }
    console.log(sololetras.test(asunto.value));
    if (!sololetras.test(mensaje.value)) {
        erro_mensaje.innerHTML = 'El nombre es requerido.';
        entrar = true
    }
    console.log(sololetras.test(mensaje.value));

});