
// um sistema de controle de temperatura esta sendo monitorada pelo arduino
// a escala do sensor de temperatura vai de 0°C até 100°C
// a escala no arduino vai de 0V até 5V
//qual o valor que o programa deve mostrar se o sensor medir 37°C?

let resposta = document.getElementById('resposta')



function principal(){

// let tempMaxima = 100, tensaoArduino = 5, tempSensor = 37

ler tempMaxima = Number(document.getElementById('tempMaxima').value)
ler tensaoArduino = Number(document.getElementById('tensaoArduino').value)
ler tempSensor = Number(document.getElementById('tempSensor').value)

let resArduino = ( tensaoArduino * tempSensor ) /tempMaxima

    console.log(`o valor da tensão no Arduino é: ${resArduino.toFixed(2)} V`)
    console.log(`para uma temperatura de ${tempSensor} °C`)






}

principal()