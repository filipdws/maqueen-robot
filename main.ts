radio.onReceivedValue(function (name, value) {
    if (("" as any) == ("L" as any)) {
        lijevi = value
    }
    if (("" as any) == ("D" as any)) {
        desni = value
    }
})
let desni = 0
let lijevi = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.showColor(neopixel.rgb(255, 0, 0))
radio.setGroup(1)
lijevi = 0
desni = 0
basic.forever(function () {
    if (lijevi >= 0) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, lijevi)
    } else {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CCW, Math.abs(lijevi))
    }
    if (desni >= 0) {
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, desni)
    } else {
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CCW, Math.abs(desni))
    }
})
