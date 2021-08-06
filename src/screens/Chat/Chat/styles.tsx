import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    contentContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50
    },
    headerContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
    },
})

export default styles