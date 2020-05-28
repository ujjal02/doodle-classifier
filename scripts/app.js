let drawing
const chartBox = document.querySelector('#chartBox')

chartBox.innerHTML = ''
chartBox.style.display = 'none'

$('#canvas').mousedown(function(e) {
    const mouseX = e.pageX - this.offsetLeft
    const mouseY = e.pageY - this.offsetTop
    drawing = true
    addUserGesture(mouseX, mouseY)
    drawOnCanvas()
})

canvas.addEventListener("touchstart", (e) => {
    if (e.target == canvas) {
        e.preventDefault();
      }
  
    const rect  = canvas.getBoundingClientRect();
    const touch = e.touches[0];
  
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;
  
    drawing = true;
    addUserGesture(mouseX, mouseY);
    drawOnCanvas();
  
}, false)

$("#canvas").mousemove(function(e) {
    if(drawing) {
        const mouseX = e.pageX - this.offsetLeft
        const mouseY = e.pageY - this.offsetTop
        addUserGesture(mouseX, mouseY)
        drawOnCanvas();
    }
})

canvas.addEventListener('touchmove', (e) => {
    if(e.target === canvas) {
        e.preventDefault()
    }
    if(drawing) {
        const rect = canvas.getBoundingClientRect()
        const touch = e.touches[0]
        const mouseX = touch.clientX - rect.left
        const mouseY = touch.clientY - rect.top
        addUserGesture(mouseX, mouseY, true)
        drawOnCanvas()
    }
}, false)

$('#canvas').mouseup((e) => {
    drawing = false
})

canvas.addEventListener('touchend', (e) => {
    if(e.target === canvas) {
        e.preventDefault()
    }
    drawing = false
}, false)

$('#canvas').mouseleave((e) => {
    drawing = false
})

canvas.addEventListener('touchleave', (e) => {
    if(e.target === canvas) {
        e.preventDefault()
    }
    drawing = false
}, false)

loadModel()