import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.gray + 'aaa25',
        borderRadius: 16,
        marginHorizontal: '6%',
        borderTopWidth: 0,
        paddingTop: 4,
        paddingRight: 4,
    },
    input: {
        fontSize: Layout.fonts.h4,
        flex: 1,
        paddingHorizontal: 16,
        color: Colors.foruth
    }
})

export default styles