import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop:1,
        borderColor: 'red',
        borderWidth: 1,
        flex:1,
    },

    headerText:{
        fontSize: 20,
        fontWeight: "bold",
    },

    movieGroup: {
        borderWidth: 1,
        borderColor: 'blue',
        paddingTop: 10,
        paddingBottom: 10
    },

    imageStyles: {
        height: 200,
        width: 120
    }
    
})

export default styles;