import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

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
    title: {
        fontSize: Layout.fonts.h1,
        color: Colors.white,
        fontWeight: 'bold',
        width: 180,
        marginHorizontal: '10%',
        marginBottom: 16,
    },
})

export default styles