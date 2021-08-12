let numin = 0
let numcnt = 0
basic.forever(function () {
    if (numin <= numcnt) {
        basic.showNumber(numcnt)
        basic.pause(1000)
        numcnt += 1
    }
    basic.showString("1:00")
    basic.showString("1:01")
})
