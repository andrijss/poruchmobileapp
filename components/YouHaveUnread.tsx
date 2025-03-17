import React from "react";
import { View, StyleSheet,Text } from "react-native";
import { IconSymbol } from '@/components/ui/IconSymbol';
import {Dimensions} from 'react-native';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

import { useNavigation } from 'expo-router';

import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

interface DividerProps {
    amount?: number;
    from?: string;
}

const Divider: React.FC<DividerProps> = ({ amount, from }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('notifications')} style={[styles.container, {
            top: amount != 3 && -20,
        }]}>
            <IconSymbol size={32} name="bell.fill" color={'#c4c4c4'} style={{
            }} />
            <ThemedView style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: 10,
                width: 20,
                top: 31,
                left: 29,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ThemedText style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>{amount}</ThemedText>
            </ThemedView>
            <Text style={{
                color: "#d5d5d5",
                marginLeft: 9,
                paddingRight: 16,
                fontSize: 13,
                top: 2,
                fontWeight: 'bold'
            }}>У Вас є нові сповіщення від координатора події "{from}"</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent", // Колір фону
        borderRadius: 12, // Закруглення кутів
        shadowColor: "#000", // Тінь
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth: 1,
        width: windowWidth - 48,
        borderColor: "#d5d5d5",
        marginHorizontal: 24,
        elevation: 3, // Тінь для Android
        position: "relative",
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,
        paddingVertical: 16,
        paddingHorizontal: 13,
    },
});

export default Divider;


