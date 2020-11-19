let listaCirculos = []
let aciertos = 0
let fallos = 0
let dificultad = 50
let sonidoAzul
let sonidoRojo
class Circulo {
    constructor(x,y,r,c) {
        this.x = x
        this.y = y
        this.r = r
        this.c = c
    }
    dibujar() {
        fill(this.c)
        circle(this.x, this.y, this.r*2)
    }
}
function generarCirculo() {
    let c = Math.random()>0.5?'red':'blue'
    let x = numeroAleatorio(0, width)
    let y = numeroAleatorio(0, height)
    let r = numeroAleatorio(20, 50)
    let nuevoCirculo = new Circulo(x,y,r,c)
    return nuevoCirculo
    
}
function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}
function setup() {
    listaCirculos = []
    createCanvas(400, 400)
    textSize(20)
    sonidoAzul = loadSound('disparo_1.mp3')
    sonidoRojo = loadSound('error-fallo 5.mp3')
}
function draw() {
    background(220)
    if(frameCount % dificultad === 0) {
        let nuevoCirculo = generarCirculo()
        listaCirculos.push(nuevoCirculo)
        if(dificultad >= 1){
            dificultad-=1
        }
    }
    listaCirculos.forEach(circulo => circulo.dibujar())
    fill('black')
    text(`Aciertos ${aciertos}`, 10, 20)
    text(`Fallos ${fallos}`, 300, 20)

    let listaFiltrada = listaCirculos.filter(circulo => circulo.c === 'blue')
    if(listaFiltrada.length >= 5){
        noLoop()
        text('GAME OVER', width/2, height/2)
    }
}
function colisionMouseCirculo(mx, my, circulo) {
    let ca = circulo.x - mx
    let cb = circulo.y - my
    let h = Math.sqrt(ca*ca + cb*cb)
    return h < circulo.r
}
function mousePressed() {
    listaCirculos.forEach((circulo, indice) => {
        if( colisionMouseCirculo(mouseX, mouseY, circulo) ) {
           circulo.c === 'red' ? fallos++ : aciertos++
           circulo.c === 'red' ? sonidoRojo.play() : sonidoAzul.play()
           listaCirculos.splice(indice, 1)
        }
    })
}
