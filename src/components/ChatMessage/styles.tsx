import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const styles = StyleSheet.create({
    message: {
        flexDirection: Layout.styles.flexDirection,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
        flex: 1,
        right: 10
    },
    messageContainer: {
        backgroundColor: Colors.secondry,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 22,
        marginLeft: 8
    },
    myMessageContainer: {
        borderBottomEndRadius: 4,
        backgroundColor: Colors.gray + 'aaa50'
    },
    messageBlock: {
        flexDirection: Layout.styles.flexDirection,
        alignItems: 'flex-end',
        width: "70%",
        maxWidth: 240,
    },
    myMessageBlock: {
        flexDirection: Layout.isRTL ? 'row' : 'row-reverse',
        left: 4
    },
    myMessageTextBlock: {
        flexDirection: Layout.isRTL ? 'row' : 'row-reverse',
    },
    messageText: {
        color: Colors.foruth,
        fontSize: Layout.fonts.h4,
    },
    date: {
        color: Colors.gray,
        fontSize: Layout.fonts.h6,
        maxWidth: 100
    },

})

export default styles