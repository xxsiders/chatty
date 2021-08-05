import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles