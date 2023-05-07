//Variables Globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputCharizard = document.getElementById('charizard')
    let inputSquirtle = document.getElementById('squirtle')
    let inputBulbasaur = document.getElementById('bulbasaur')
    let inputWaterfire = document.getElementById('waterfire')
    let inputPoshisand = document.getElementById('poshisand')
    let inputMedabot= document.getElementById('medabot')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputCharizard.checked) {
        spanMascotaJugador.innerHTML = 'Charizard'
    }else if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = 'Squirtle'
    } else if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = 'Bulbasaur'
    } else if (inputWaterfire.checked) {
        spanMascotaJugador.innerHTML = 'WaterFire'
    } else if (inputPoshisand.checked) {
        spanMascotaJugador.innerHTML = 'Poshisand'
    } else if (inputMedabot.checked) {
        spanMascotaJugador.innerHTML = 'Medabot'
    } else  {
        alert('Seleccionaste algo idiota')
    }
    seleccionarMascotaEnemigo(); 

}

function seleccionarMascotaEnemigo() 
{
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1)
        spanMascotaEnemigo.innerHTML = 'Charizard'
    else if(mascotaAleatorio == 2)
        spanMascotaEnemigo.innerHTML = 'Squirtle'
    else if(mascotaAleatorio == 3)
        spanMascotaEnemigo.innerHTML = 'Bulbasaur'
    else if(mascotaAleatorio == 4)
        spanMascotaEnemigo.innerHTML = 'WaterFire'
    else if(mascotaAleatorio == 5)
        spanMascotaEnemigo.innerHTML = 'Poshisand'
    else if(mascotaAleatorio == 6)
        spanMascotaEnemigo.innerHTML = 'Medabot'
        
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    }
    else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("Ganaste🎉🎉🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("Ganaste🎉🎉🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("Ganaste🎉🎉🎉")
        
    }else {
        crearMensaje("Perdiste 🥲🥲")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('YOU ARE THE WINNER 🎉🎉🎉🎉')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('YOU LOSED, KEPP GOING🥲🥲🥲')
    }
    
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota enemiga atacó con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}      

function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)}


window.addEventListener('load', iniciarJuego)