let segundos = 0
let minutos = 0
let horas = 0
basic.forever(function () {
    if (segundos < 59) {
        segundos = segundos + 1
    }
    if (segundos == 59) {
        minutos = minutos + 1
    }
    if (minutos == 59) {
        horas = horas + 1
        minutos = 0
    }
})
