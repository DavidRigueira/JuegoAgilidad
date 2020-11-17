let listaCirculos = []
class Circulo{
    constructor(x,y,r,color) {
        this.x = x
        this.y = y
        this.r = r
        this.color = color
    }
    dibujar(){
        fill(this.color)
        circle(this.x, this.y, this.r*2)
    }
}
function generarCirculo(){
    let color = Math.random()>0.5?'red':'blue'
    let x = numeroAleatorio(0, width)
    let y = numeroAleatorio(0, height)
    let radio = 100
    let nuevoCirculo = new Circulo(x,y,radio,color)
    listaCirculos.push(nuevoCirculo)
    colisionMouseCirculo(x, y, nuevoCirculo)
}
function numeroAleatorio(min, max){
    return Math.round(Math.random() * (max-min) + min)
}
function setup(){
    createCanvas(400, 400)
}
function draw(){
    background(220)
    generarCirculo()
    listaCirculos.forEach(circulo => circulo.dibujar())
}
function colisionMouseCirculo(mx, my, circulo){
    line(mx, 0, mx, 0)
    line(0, my, 0, my)

}
