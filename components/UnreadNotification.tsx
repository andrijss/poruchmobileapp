import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {useFonts} from "expo-font";

export default function UnreadNotification({ category, time, name, message }: {
    category: string;
    time: string;
    name: string;
    message: string;
}) {
    const [loaded] = useFonts({
        "FontMedium": require('../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    return (
        <View style={styles.card}>
            {/* Верхній рядок з категорією і часом */}
            <View style={styles.header}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            {/* Основний текст повідомлення */}
            <Text style={styles.body}>
                <Text style={styles.name}>{name}: </Text>
                {message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#181818", // Колір фону
        borderRadius: 18, // Закруглення кутів
        padding: 12, // Внутрішні відступи
        shadowColor: "#000", // Тінь
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginTop: 150,
        marginHorizontal: 20,
        elevation: 3, // Тінь для Android
        position: "relative",
        marginBottom: 26,
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
        fontFamily: "FontBold",
        color: "#fefefe",
    },
    time: {
        fontSize: 14,
        color: "#999",
        top: 3,
        fontFamily: "FontMedium",
    },
    body: {
        fontSize: 16,
        color: "#fefefe",
        paddingHorizontal: 4,
        lineHeight: 18, // Висота рядків
        fontFamily: "FontMedium",
    },
    name: {
        fontFamily: "FontBold",
    },
});
