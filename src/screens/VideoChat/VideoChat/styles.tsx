import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    contentContainer: {
        backgroundColor: Colors.white,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        flex: 1,
        overflow: 'hidden'
    },
})

export default styles