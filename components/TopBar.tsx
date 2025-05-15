import React, { useState } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Modal,
    Animated,
    Dimensions,
    SafeAreaView,
    PanResponder,
} from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import {Avatar, AvatarFallbackText} from "@gluestack-ui/themed";

import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import NavigationContainer from "@react-navigation/native";
import {useFonts} from "expo-font";

function TopBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={32} style={{ marginBottom: -3 }} {...props} />;
}


export default function TopBar({ text, buttons, backButton, notifications, blur } : { text:string, buttons:boolean, backButton:boolean, notifications:boolean, blur:boolean }) {

    const navigation = useNavigation();

    const [loaded] = useFonts({
        "FontMedium": require('../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    return (
        <GluestackUIProvider config={config}>
        <ThemedView style={styles.topBar}>

            { backButton ?
                <ThemedView style={styles.backButtonStyle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconSymbol size={24} name='chevron.backward' color={'#c4c4c4'} style={{
                            bottom: -6,
                            marginRight: 8,
                        }} />
                    </TouchableOpacity>
                </ThemedView> : <ThemedView></ThemedView>
            }

            <ThemedText style={styles.bigText}>{text}</ThemedText>

            { buttons ? notifications ?
                <ThemedView style={[styles.menuButton, {left: -2}]} >
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                            <IconSymbol size={32} name="bell.fill" color={'#c4c4c4'} style={{
                                bottom: -3,
                                shadowColor: '#000000',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.28,
                                shadowRadius: 16,
                            }} />
                        </TouchableOpacity>
                    <ThemedView style={{
                        position: 'absolute',
                        backgroundColor: '#D00E07FF',
                        borderRadius: 10,
                        width: 20,
                        right: 8,
                        top: 29,
                        height: 20,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <ThemedText style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>3</ThemedText>
                    </ThemedView>
                </ThemedView>: <ThemedView style={styles.menuButton}></ThemedView>  : <ThemedView></ThemedView>
            }

            { buttons ?
                <ThemedView style={styles.menuButton}>
                    <TouchableOpacity
                        style={{
                            top: 3.5,
                            shadowColor: '#000000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.38,
                            shadowRadius: 16,
                        }}
                        onPress={() => navigation.openDrawer()}>
                        <Avatar bgColor="#E43800FF" size="sm" borderRadius="$full">
                            <AvatarFallbackText>John Doe</AvatarFallbackText>
                        </Avatar>
                    </TouchableOpacity>
                </ThemedView> : <ThemedView></ThemedView>
            }
        </ThemedView>
            </GluestackUIProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        position: 'absolute',
        width: '100%',
        height: 52,
        top: '8%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    menuButton: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 16,
        overflow: 'hidden',
        width: 56,
        height: 56,
        right: 10,
    },
    bigText: {
        width: '70%',
        padding: 10,
        paddingLeft: 24,
        fontFamily: 'FontBold',
        fontSize: 28,
        top: 18
    },
    backButtonStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        left: 20,
        top: 2,
        marginRight: -6
    },
})