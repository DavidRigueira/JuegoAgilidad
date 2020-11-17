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
    return nuevoCirculo
    
}
function numeroAleatorio(min, max){
    return Math.round(Math.random() * (max-min) + min)
}
function setup(){
    createCanvas(400, 400)
    let nuevoCirculo = generarCirculo()
    listaCirculos.push(nuevoCirculo)
}
function draw(){
    background(220)
    listaCirculos.forEach(circulo => {
        circulo.dibujar()
        colisionMouseCirculo(circulo.x, circulo.y, circulo)
    })
}
function colisionMouseCirculo(mx, my, circulo){
    let raton = line(mx, 0, mx, 0)
    circulo = line(0, my, 0, my)
    let colision = Math.sqrt(Math.pow(raton, 2) + Math.pow(circulo, 2))
    if(colision > 0){
        return false
    }else{
        return true
    }
}
function mousePressed(){
    let value = 0
    if(value === 0){
        value = 255
    }else{
        value = 0
    }
}
