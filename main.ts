input.onButtonPressed(Button.A, function () {
    tijd += -5
    if (tijd < 0) {
        tijd = 0
    }
    basic.showNumber(tijd)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(tijd)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    tijd += 1
    basic.showNumber(tijd)
    basic.clearScreen()
})
let tijd = 0
let lampAan = false
tijd = 0
let timer = input.runningTime()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (tijd > 0) {
        if (!(lampAan)) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            lampAan = true
        }
    } else {
        if (lampAan) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            lampAan = false
        }
    }
    if (input.runningTime() - timer >= 60000) {
        tijd += -1
        timer = input.runningTime()
    }
    if (tijd < 0) {
        tijd = 0
    }
})
