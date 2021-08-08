import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flexDirection: Layout.styles.flexDirection,
        paddingHorizontal: '5%',
        marginBottom: 24,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    dataContainer: {
        flex: 1,
        marginHorizontal: 12,
        overflow: 'hidden'
    },
    block: {
        flexDirection: Layout.styles.flexDirection,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
    },
    date: {
        fontSize: Layout.fonts.h5,
        color: Colors.gray
    },
    username: {
        fontSize: Layout.fonts.h3,
        fontWeight: 'bold',
        color: Colors.foruth,
        textTransform: 'capitalize'
    },
    message: {
        fontSize: Layout.fonts.h5,
        color: Colors.foruth,
    }
})

export default styles