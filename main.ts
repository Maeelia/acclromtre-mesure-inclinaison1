basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.isGesture(Gesture.LogoUp)) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
