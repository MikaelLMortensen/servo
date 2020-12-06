input.onButtonPressed(Button.A, function () {
    direction = 1
})
input.onButtonPressed(Button.AB, function () {
    direction = 0
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    direction = -1
})
let speed = 0
let direction = 0
direction = 1
basic.forever(function () {
    if (direction != 0) {
        for (let indeks = 0; indeks <= 9; indeks++) {
            speed = indeks * 10 * direction
            servos.P0.run(speed)
            basic.showNumber(speed)
        }
    }
})
