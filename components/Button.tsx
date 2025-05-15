import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export default function Button({active, text, onPress, style} : {active: boolean, text: string, onPress: () => void, style: any}) {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            {active ?
                <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={["#fe7000", "#e43800", "#d00e07"]} style={styles.buttonContainer}>
                    <Text style={{
                    color: '#fefefe',
                    fontWeight: 'bold'
                }}>{text}</Text>
                </LinearGradient>

                : <View style={styles.buttonContainer}>
                    <Text style={{
                        color: '#fefefe',
                        fontWeight: 'bold'
                    }}>{text}</Text>
                </View>
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        borderWidth: 0,
        backgroundColor: '#181818',
        padding: 8,
        borderRadius: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
