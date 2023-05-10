const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesdDelJugador = document.getElementById('ataque-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')


//Variables Globales
let digilosers = [] //arreglo
let ataqueJugador = []
let ataqueEnemigo = []
let optionDeDigilosers
let inputCharizard
let inputSquirtle
let inputBulbasaur
let inputWaterfire
let inputPoshisand
let mascotaJugador
let mascotaJugadorObjeto
let ataquesDigiloser
let ataquesDigiloserEnemigo
let botonFuego
let botonAgua 
let botonTierra
let botones = []
let inputMedabot
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackGround = new Image()
mapaBackGround.src = './Images/mokemap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


class Digiloser {
    constructor (nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x, 
            this.y,
            this.ancho,
            this.alto
               
            )
    }
}

let charizard = new Digiloser('Charizard', './Images/charizard.png', 5, './Images/Charizardhead.png')
let squirtle = new Digiloser('Squirtle', './Images/Squirtle.png', 5, './Images/squirtlehead.png')
let bulbasaur = new Digiloser('Bulbasaur', './Images/Bulbasaur.png', 5, './Images/Bulbasaurhead.png')
let waterfire = new Digiloser('Waterfire', './Images/waterfire.png', 5, './Images/Lugiahead.png')
let poshisand = new Digiloser('Poshisand', './Images/poshisand.jpg', 5, './Images/poshisandhead.png')
let medabot = new Digiloser('Medabot', './Images/Medabots_Metabee2.png', 5, './Images/Medabots_Metabee2.png')

let charizardEnemigo = new Digiloser('Charizard', './Images/charizard.png', 5, './Images/Charizardhead.png')
let squirtleEnemigo = new Digiloser('Squirtle', './Images/Squirtle.png', 5, './Images/squirtlehead.png')
let bulbasaurEnemigo = new Digiloser('Bulbasaur', './Images/Bulbasaur.png', 5, './Images/Bulbasaurhead.png')
let waterfireEnemigo = new Digiloser('Waterfire', './Images/waterfire.png', 5, './Images/Lugiahead.png')
let poshisandEnemigo = new Digiloser('Poshisand', './Images/poshisand.jpg', 5, './Images/poshisandhead.png')
let medabotEnemigo = new Digiloser('Medabot', './Images/Medabots_Metabee2.png', 5, './Images/Medabots_Metabee2.png')

charizard.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'}
)
charizardEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'}
)

squirtle.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🍃', id: 'boton-tierra'}
)
squirtleEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🍃', id: 'boton-tierra'}
)

bulbasaur.ataques.push(
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua' }
)
bulbasaurEnemigo.ataques.push(
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua' }
)

waterfire.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'}
)
waterfireEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'}
)


poshisand.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🍃', id: 'boton-tierra'}
)
poshisandEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'},
    { nombre: '🍃', id: 'boton-tierra'}
)

medabot.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'}
)
medabotEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🍃', id: 'boton-tierra'}
)

digilosers.push(charizard, squirtle, bulbasaur, waterfire, poshisand, medabot)

function iniciarJuego() {  

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    digilosers.forEach((digiloser) => {
       optionDeDigilosers = `
       <input type="radio" name="mascota" id=${digiloser.nombre} />
         <label class= "tarjeta-de-digiloser" for=${digiloser.nombre} />
            <p>${digiloser.nombre} </p>
            <img src=${digiloser.foto} alt=${digiloser.nombre} />    
            </label>
       `
    contenedorTarjetas.innerHTML += optionDeDigilosers

     inputCharizard = document.getElementById('Charizard')
     inputSquirtle = document.getElementById('Squirtle')
     inputBulbasaur = document.getElementById('Bulbasaur')
     inputWaterfire = document.getElementById('Waterfire')
     inputPoshisand = document.getElementById('Poshisand')
     inputMedabot= document.getElementById('Medabot')
    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)  
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionarMascotaJugador() {

    sectionReiniciar.style.display = 'none'
    sectionSeleccionarMascota.style.display = 'none'

    //sectionSeleccionarAtaque.style.display = 'flex'
    

    if (inputCharizard.checked) {
        spanMascotaJugador.innerHTML = inputCharizard.id
        mascotaJugador = inputCharizard.id
    }else if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = inputSquirtle.id
        mascotaJugador = inputSquirtle.id
    } else if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = inputBulbasaur.id
        mascotaJugador = inputBulbasaur.id
    } else if (inputWaterfire.checked) {
        spanMascotaJugador.innerHTML = inputWaterfire.id
        mascotaJugador = inputWaterfire.id
    } else if (inputPoshisand.checked) {
        spanMascotaJugador.innerHTML = inputPoshisand.id
        mascotaJugador = inputPoshisand.id
    } else if (inputMedabot.checked) {
        spanMascotaJugador.innerHTML = inputMedabot.id
        mascotaJugador = inputMedabot.id
    } else  {
        alert('Selecciona algo idiota')
    }

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
     

}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < digilosers.length; i++) {
        if (mascotaJugador === digilosers[i].nombre) {
            ataques = digilosers[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesDigiloser = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>   
        `
    contenedorAtaques.innerHTML += ataquesDigiloser

    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')  
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo(enemigo) 
{  

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesDigiloserEnemigo = enemigo.ataques
    secuenciaAtaque()   
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesDigiloserEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    }
    else {
        ataqueEnemigo.push('TIERRA')
    }

    console.log(ataqueEnemigo)

    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("Empate")    
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste 🎉🎉')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador   
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste 🎉🎉')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador    
        
         } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste 🎉🎉')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador   
         } else  {
            indexAmbosOponentes(index, index)
            crearMensaje('Perdiste 🥲🥲')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo 
         }

        }

    revisarVidas()

    }

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('Nadie ganó, esto fue un empate')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('YOU ARE THE WINNER 🎉🎉🎉🎉')
    } else {
        crearMensajeFinal('YOU LOSED, KEPP GOING🥲🥲🥲')
    }
    
}

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo


   // let parrafo = document.createElement('p')
   // parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota enemiga atacó con ' + ataqueEnemigo + ' - ' + resultado
    ataquesdDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal
    
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}      

function aleatorio(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min)}

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackGround,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    charizardEnemigo.pintarMokepon()
    squirtleEnemigo.pintarMokepon()
    bulbasaurEnemigo.pintarMokepon()
    waterfireEnemigo.pintarMokepon()
    poshisandEnemigo.pintarMokepon()
    medabotEnemigo.pintarMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(charizardEnemigo)
        revisarColision(squirtleEnemigo)
        revisarColision(bulbasaurEnemigo)
        revisarColision(waterfireEnemigo)
        revisarColision(poshisandEnemigo)
        revisarColision(medabotEnemigo)
        
    }

}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5  
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5   
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5 
}
function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
            case 'ArrowRight':
                moverDerecha()
                break;
        default:
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerOjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerOjetoMascota() {
    for (let i = 0; i < digilosers.length; i++) {
        if (mascotaJugador === digilosers[i].nombre) {
            return digilosers[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x 

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('se detecto una colision')
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    
}

window.addEventListener('load', iniciarJuego)