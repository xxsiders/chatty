import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    contentContainer: {
        paddingHorizontal: '5%',
        paddingVertical: 20,
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
    listContainer: {
        paddingHorizontal: (Layout.window.width * .1) - 8
    },
    searchIcon: {
        marginHorizontal: 4,
        width: 45,
        height: 45,
        backgroundColor: '#ffffff55',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    }
})

export default styles