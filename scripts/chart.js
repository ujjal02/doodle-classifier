let firstTime = 0
let chart = ''

const loadChart = (label, data) => {
    const context = document.querySelector('#chartBox').getContext('2d')
    chart = new Chart(context, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Prediction',
                backgroundColor: '#f50057',
                borderColor: 'rgb(255, 99, 132)',
                data
            }]
        },
        options: {}
    })
}

const displayChart = (data) => {
    const label = [ 'apple', 'bed', 'bird', 'book', 'cat', 'chair', 'clock', 'computer', 'cookie', 'dog','fish', 'flower', 'moon', 'mouse', 'sun' ]
    if(firstTime === 0){
        loadChart(label, data)
        firstTime = 1
    }else{
        chart.destroy()
        loadChart(label, data)
    }
    document.querySelector('#chartBox').style.display = 'block'
}