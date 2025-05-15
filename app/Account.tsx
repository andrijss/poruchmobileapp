import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";

import {useSession} from "@/utils/useSession";
import {Text, TouchableOpacity} from 'react-native';
import {View} from "react-native";

import EventHistoryElement from "@/components/EventHistoryElement";

import RadialGradientBackground from "@/components/RadialGradientBackground";
import {LinearGradient} from "expo-linear-gradient";

import { config } from "@gluestack-ui/config"
import { Avatar, AvatarFallbackText, GluestackUIProvider } from "@gluestack-ui/themed"

import {StyleSheet} from "react-native";
import { IconSymbol } from '@/components/ui/IconSymbol';

import { useNavigation } from 'expo-router';
import React from "react";

import {
    ScrollView,
} from 'react-native';
import Event from "@/components/Event";
import {useFonts} from "expo-font";
import {supabase} from "@/utils/supabase";


export default function Index() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        "FontMedium": require('../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    const { session, loading } = useSession()

    if (loading) return null
    if (!session) return <Text>Please log in</Text>

    return (
        <GluestackUIProvider config={config}>
            <ThemedView
                style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>

                <RadialGradientBackground></RadialGradientBackground>

                <TopBar
                    text={'Ваш профіль'}
                    notifications={false}
                    backButton={true}
                    buttons={false}
                    blur={false}
                />

                <ThemedView style={styles.profileGroup}>
                        <Avatar bgColor="#e43800" size="xl" borderRadius="$full">
                            <AvatarFallbackText>A S</AvatarFallbackText>
                        </Avatar>
                        <ThemedView style={{
                            left: 20,
                            backgroundColor: 'transparent',
                            // top: 15
                        }}>
                            <ThemedText style={styles.usernameText}>Andrii Salyk</ThemedText>
                            <ThemedText style={styles.goToProfileText}>Волонтер</ThemedText>

                            <ThemedView style={{
                                display: 'flex',
                                flexDirection: 'row',
                                top: 4,
                                backgroundColor: 'transparent',
                            }}>
                                <IconSymbol size={16} name="pin.fill" color={'gray'} style={{
                                    left: -3,
                                }} />
                                <ThemedText style={[styles.goToProfileText, {
                                    top: -2,
                                    left: 0,
                                }]}>
                                    Львів
                                </ThemedText>
                            </ThemedView>
                        </ThemedView>
                </ThemedView>


                <ThemedView style={styles.mainContent}>
                    <View style={{
                        height: 116,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.35,
                        shadowRadius: 10,
                    }}>
                            <View style={{
                                width: '100%',
                                height: '100%',
                                padding: 22,
                                backgroundColor: '#181818',
                                borderRadius: 18,
                            }}>
                                <ThemedText style={{
                                    fontFamily: "FontBold",
                                    paddingTop: 18,
                                    color: '#fefefe',
                                    fontSize: 34,
                                }}>
                                    3 год 42 хв.
                                </ThemedText>
                                <ThemedText style={{
                                    marginTop: 0,
                                    fontWeight: '500',
                                    fontSize: 18,
                                    fontFamily: "FontMedium",
                                    top:8,
                                    color: '#d7d7d7'
                                }}>
                                    загалний час на подіях
                                </ThemedText>
                            </View>
                    </View>

                    <ThemedText style={{
                        marginTop: 30,
                        fontWeight: '500',
                        fontSize: 20,
                        color: 'lightgray',
                        fontFamily: "FontBold"
                    }}>
                        Історія подій:
                    </ThemedText>

                    <ScrollView style={{
                        top: 28,
                        flex: 1,
                        width: 345,
                    }}>
                        <Event
                            eventName={'Допомога в притулку'}
                            date={'24 квітня 2025'}
                            linkToEvent={'1'}
                            status={'finished'}
                            type={'a'}
                            address={'Університетська 1'}
                        >
                        </Event>
                        <Event
                            eventName={'Благодійний концерт'}
                            date={'24 квітня 2025'}
                            linkToEvent={'2'}
                            status={'finished'}
                            type={'a'}
                            address={'театр Опери та балету'}>
                        </Event>
                        <TouchableOpacity>
                            <Text onPress={() => {
                                supabase.auth.signOut();
                            }} style={{
                                color: '#fefefe'
                            }}>Log out</Text>
                        </TouchableOpacity>
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
        marginBottom: 8,
        width: '100%',
        backgroundColor: 'transparent',
        paddingLeft: 24,
        top: 148,
    },
    usernameText: {
        fontSize: 36,
        paddingTop: 24,
        top: -2,
        fontFamily: "FontBold"
    },
    goToProfileText: {
        fontSize: 16,
        color: 'gray',
        fontFamily: "FontBold"
    },
    mainContent: {
        flex: 1,
        top: 170,
        backgroundColor: 'transparent',
    }
})