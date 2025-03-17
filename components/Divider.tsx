import React from "react";
import { View, StyleSheet,Text } from "react-native";

interface DividerProps {
    text?: string; // Якщо потрібно додати текст, наприклад, "або"
    color?: string; // Колір лінії (за замовчуванням білий)
}

const Divider: React.FC<DividerProps> = ({ text, color = "#d5d5d5" }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.line, { backgroundColor: color }]} />
            {text && <View style={styles.textWrapper}><Text style={[styles.text, { color }]}>{text}</Text></View>}
            <View style={[styles.line, { backgroundColor: color }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 26,
        marginHorizontal: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#d5d5d5", // Білий колір за замовчуванням
    },
    textWrapper: {
        marginHorizontal: 10, // Відступ для тексту
    },
    text: {
        fontSize: 14,
        textAlign: "center",
    }
});

export default Divider;
