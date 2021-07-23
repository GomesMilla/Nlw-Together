import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
// StyleSheet é um objeto que vai conter as regras de estilização

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.secondary90,
        fontFamily: 'Cochin',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:360,
        top: '4%',
    },
    content:{
        marginTop: -40,    
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        color: theme.colors.highlight,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
})