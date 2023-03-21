let som = 0
let laatste_meting = 0
let meting = 0
let metingen = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
while (true) {
    meting = pins.analogReadPin(AnalogPin.P0)
    laatste_meting = metingen[0]
    som += meting
    som += -1 * laatste_meting
    metingen.push(meting)
    metingen.removeAt(0)
}
basic.forever(function () {
	
})
