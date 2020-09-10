// When you press this knob, the steps will be resetted to "0".
input.onButtonPressed(Button.A, function () {
    led.fadeOut(1500)
led.stopAnimation()
    stap = 0
    led.fadeIn(150)
})
input.onPinPressed(TouchPin.P2, function () {
    music.setVolume(0)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(254)
    led.stopAnimation()
})
// If you shake because of running, jogging or walkking, "+1" will be added to the counter.
input.onGesture(Gesture.Shake, function () {
    stap += 1
    music.playMelody("- - - C5 F - - - ", 999)
})
let stap = 0
stap = 0
let volume = 128
basic.forever(function () {
    basic.showNumber(stap)
})
