import {View, Text , StyleSheet} from 'react-native'

export default function Content(){
    return(
        <View style={styles.content}>
            <Text>content ok</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 5,
        backgroundColor: "#998560",
        justifyContent: 'center',
        alignItems: 'center'
    }
})