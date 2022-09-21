input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
	
})
