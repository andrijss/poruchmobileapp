import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";

import EventHistoryElement from "@/components/EventHistoryElement";

import { config } from "@gluestack-ui/config"
import {Avatar, AvatarFallbackText, GluestackUIProvider} from "@gluestack-ui/themed"

import {StyleSheet, TouchableOpacity} from "react-native";
import { IconSymbol } from '@/components/ui/IconSymbol';

import { useNavigation } from 'expo-router';
import React, {useState} from "react";

import {
    ScrollView,
} from 'react-native';


export default function Index() {
    const navigation = useNavigation();

    return (
        <GluestackUIProvider config={config}>
            <ThemedView
                style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                <TopBar
                    text={'Координатор'}
                    notifications={false}
                    backButton={true}
                    buttons={false}
                    blur={false}
                />

                <ThemedView style={styles.profileGroup}>
                    <Avatar bgColor="#166534" size="xl" borderRadius="$full">
                        <AvatarFallbackText>John Smith</AvatarFallbackText>
                    </Avatar>
                    <ThemedView style={{
                        left: 20,
                        // top: 15
                    }}>
                        <ThemedText style={styles.usernameText}>John Smith</ThemedText>
                        <ThemedText style={styles.goToProfileText}>Волонтер, Координатор</ThemedText>

                        <ThemedView style={{
                            display: 'flex',
                            flexDirection: 'row',
                            top: 4,
                        }}>
                            <IconSymbol size={16} name="pin.fill" color={'gray'} style={{
                            }} />
                            <ThemedText style={[styles.goToProfileText, {
                                top: -2,
                                left: 3
                            }]}>
                                Львів
                            </ThemedText>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.mainContent}>

                    <ThemedView style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>

                        <ThemedView style={{
                            display: 'flex',
                            flexDirection: 'row',
                            top: -6
                        }}>
                            <ThemedView style={{
                                width: 164,
                                height: 42,
                                borderWidth: 1,
                                borderColor: 'lightgray',
                                borderRadius: 12,
                                marginRight: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ThemedText style={{
                                    fontWeight: 'bold'
                                }}>
                                    Чат
                                </ThemedText>
                            </ThemedView>
                            <ThemedView style={{
                                width: 164,
                                height: 42,
                                borderWidth: 1,
                                borderColor: 'lightgray',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ThemedText style={{
                                    fontWeight: 'bold'
                                }}>
                                    Зателефонувати
                                </ThemedText>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>

                    <ThemedText style={{
                        marginTop: 30,
                        fontWeight: '500',
                        fontSize: 20,
                        color: 'lightgray'
                    }}>
                        Годин на подіях:
                    </ThemedText>
                    <ThemedText style={{
                        fontWeight: 'bold',
                        paddingTop: 26,
                        fontSize: 38,
                    }}>
                        3 год 42 хв.
                    </ThemedText>

                    <ThemedText style={{
                        marginTop: 30,
                        fontWeight: '500',
                        fontSize: 20,
                        color: 'lightgray'
                    }}>
                        Історія подій:
                    </ThemedText>

                    <ScrollView style={{
                        top: 18,
                        flex: 1,
                        width: 345,
                    }}>
                        <EventHistoryElement date={'16.09'} eventName={'Розбір завалів'}></EventHistoryElement>
                        <EventHistoryElement date={'22.01'} eventName={'Event 2...'}></EventHistoryElement>
                    </ScrollView>
                </ThemedView>
            </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    profileGroup: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
        width: '100%',
        paddingLeft: 24,
        top: 148,
    },
    usernameText: {
        fontSize: 36,
        paddingTop: 24,
        top: -2,
        fontWeight: 'bold',
    },
    goToProfileText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    mainContent: {
        flex: 1,
        top: 170,
    }
})