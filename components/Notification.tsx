import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notification({ category, time, message }: {
    category: string;
    time: string;
    message: React.ReactNode;
}) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <Text style={styles.body}>
                <Text style={styles.name}></Text>
                {message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "transparent", // Колір фону
        borderRadius: 12, // Закруглення кутів
        padding: 12, // Внутрішні відступи
        shadowColor: "#000", // Тінь
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: "#d5d5d5",
        marginHorizontal: 20,
        elevation: 3, // Тінь для Android
        position: "relative",
        marginBottom: 15,
        paddingVertical: 22,
    },

    header: {
        flexDirection: "row", // Горизонтальне розташування
        justifyContent: "space-between", // Простір між елементами
        marginBottom: 10, // Відступ знизу
        paddingHorizontal: 5,
    },
    category: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#d5d5d5",
    },
    time: {
        fontSize: 14,
        color: "#999",
        top: 2,
    },
    body: {
        fontSize: 16,
        color: "#d5d5d5",
        paddingHorizontal: 4,
        lineHeight: 18, // Висота рядків
    },
    name: {
        fontWeight: "bold",
    },
});
