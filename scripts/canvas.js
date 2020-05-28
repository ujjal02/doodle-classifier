const canvasBox = document.querySelector('#canvasBox')
const canvas = document.createElement('canvas')

const canvasBackgroundColor = "black"
const canvasStrokeStyle = "white"
const canvasLineJoin = "round"
const canvasId = "canvas"
const canvasWidth = 350
const canvasHeight = 350
const canvasLineWidth = 12

let clickX = new Array()
let clickY = new Array()
let clickD = new Array()

canvas.setAttribute('width', canvasWidth)
canvas.setAttribute('height', canvasHeight)
canvas.setAttribute('id', canvasId)
canvas.style.backgroundColor = canvasBackgroundColor
canvasBox.appendChild(canvas)

if(typeof G_vmlCanvasManager != 'undefined'){
    canvas = G_vmlCanvasManager.initElement(canvas)
}

const context = canvas.getContext('2d')


const addUserGesture = (x, y, dragging) => {
    clickX.push(x)
    clickY.push(y)
    clickD.push(dragging)
}

const drawOnCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.strokeStyle = canvasStrokeStyle
    context.lineJoin = canvasLineJoin
    context.lineWidth = canvasLineWidth
    for(let i = 0; i< clickX.length; i++){
        context.beginPath()
        if(clickD[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1])
        }else{
            context.moveTo(clickX[i] - 1, clickY[i])
        }
        context.lineTo(clickX[i], clickY[i])
        context.closePath()
        context.stroke()
    }
}

const clearCanvas = (id) => {
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    clickX = new Array()
    clickY = new Array()
    clickD = new Array()
}