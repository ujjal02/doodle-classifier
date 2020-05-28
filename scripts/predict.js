let model
const button = document.querySelector('#predictCanvas')

const loadModel = async () => {
    button.disabled = true
    console.log('model loading..')
    model = await tf.loadLayersModel('model/model.json')
    console.log('model loaded..')
    button.disabled = false
}

const prepocessCanavas = (image) => {
    const tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([28, 28])
        .mean(2)
        .expandDims(2)
        .expandDims()
        .toFloat()
    return tensor.div(255.0)
}

const predict = async () => {
    const tensor = prepocessCanavas(canvas)
    const predictions = await model.predict(tensor).data()
    const results = Array.from(predictions)
    displayChart(results)
}