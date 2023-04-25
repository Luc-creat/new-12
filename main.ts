let Drehzahl = 0
basic.forever(function () {
    Drehzahl = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P1, Drehzahl)
    if (Drehzahl > 0 == Drehzahl < 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (Drehzahl < 0 && Drehzahl < 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (Drehzahl < 0 && Drehzahl < 800) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (Drehzahl < 0 && Drehzahl < 1023) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
