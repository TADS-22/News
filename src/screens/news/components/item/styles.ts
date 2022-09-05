import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    article: {
        margin: 16,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#696969',
        elevation: 2
    },
    title: { 
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 12,
        marginTop: 10,
    },
    date: {
        fontSize: 10,
        fontStyle: 'italic',
        marginTop: 10,
        textAlign: 'right',
    }
})

export default Styles