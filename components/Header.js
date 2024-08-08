import {View, Text , StyleSheet} from 'react-native'

export default function Header(){
    return(
        <View style={styles.Header}>
            <Text>header ok</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    Header: {
        flex: 2,
        backgroundColor: "#698560",
        justifyContent: 'center',
        alignItems: 'center'
    }
})