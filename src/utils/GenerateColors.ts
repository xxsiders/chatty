import Colors from "../constants/Colors"

const deafultColors = [
    Colors.yellow,
    Colors.pink,
    Colors.darkPink,
    Colors.lightBlue,
    Colors.secondry
]

const GenerateColors = (indexLength: number) => {
    let Colors = []
    let ColorsIndex = 0
    for (let i = 0; i <= indexLength; i++) {
        if (ColorsIndex === 5) {
            ColorsIndex = 0
        }
        Colors.push(deafultColors[ColorsIndex])
        ColorsIndex++
    }
    return Colors
}

export default GenerateColors