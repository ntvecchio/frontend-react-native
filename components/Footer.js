import {View, Text , StyleSheet} from 'react-native'

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text>footer ok</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 2,
        backgroundColor: "#598260",
        justifyContent: 'center',
        alignItems: 'center'
    }
})