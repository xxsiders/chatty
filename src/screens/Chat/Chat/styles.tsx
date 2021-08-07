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
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        flex: 1,
        overflow: 'hidden'
    },
    headerContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        zIndex: 100,
        overflow: 'hidden'
    },
    block: {
        flexDirection: Layout.styles.flexDirection,
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionButton: {
        color: Colors.white,
        opacity: 0.5,
        fontSize: Layout.fonts.h5,
        padding: 4
    },
    title: {
        fontSize: Layout.fonts.h1,
        color: Colors.white,
        fontWeight: 'bold',
        width: 180,
        marginHorizontal: '6%',
        marginVertical: 12,
    },
})

export default styles