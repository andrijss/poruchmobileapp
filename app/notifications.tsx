import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import {StyleSheet} from "react-native";

import { useNavigation } from 'expo-router';
import React from "react";

export default function Index() {
    const navigation = useNavigation();

    return (
        <GluestackUIProvider config={config}>
            <ThemedView
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <TopBar
                    text={'Сповіщення'}
                    notifications={false}
                    backButton={true}
                    buttons={false}
                    blur={false}
                />

                <ThemedView style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: 18,
                    width: 32,
                    right: 90,
                    top: 88,
                    height: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ThemedText style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>3</ThemedText>
                </ThemedView>
            </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})