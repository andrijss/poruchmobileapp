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
import {BlurView} from "expo-blur";

import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import NavigationContainer from "@react-navigation/native";

function TopBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={32} style={{ marginBottom: -3 }} {...props} />;
}


export default function TopBar({ text, buttons, backButton, notifications, blur } : { text:string, buttons:boolean, backButton:boolean, notifications:boolean, blur:boolean }) {

    const navigation = useNavigation();

    return (
        <ThemedView style={styles.topBar}>

            { backButton ?
                <ThemedView style={styles.backButtonStyle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome size={26} style={{ marginBottom: -3 }} color={'#fff'} name={'arrow-left'}></FontAwesome>
                    </TouchableOpacity>
                </ThemedView> : <ThemedView></ThemedView>
            }

            <ThemedText style={styles.bigText}>{text}</ThemedText>

            { buttons ? notifications ?
                <BlurView style={[styles.menuButton, {left: -20}]} intensity={blur ? 50 : 0} tint={'dark'}>
                        <TouchableOpacity onPress={() => {}}>
                            <TopBarIcon name={'bell'} color={'#fff'}></TopBarIcon>
                        </TouchableOpacity>
                    <ThemedView style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        borderRadius: 10,
                        width: 20,
                        right: 8,
                        top: 26,
                        height: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <ThemedText style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>3</ThemedText>
                    </ThemedView>
                </BlurView>: <ThemedView style={styles.menuButton}></ThemedView>  : <ThemedView></ThemedView>
            }

            { buttons ?
                <BlurView style={styles.menuButton} intensity={blur ? 50 : 0} tint={'dark'}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <TopBarIcon name={'bars'} color='#fff'></TopBarIcon>
                    </TouchableOpacity>
                </BlurView> : <ThemedView></ThemedView>
            }
        </ThemedView>
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
        paddingLeft: 28,
        fontWeight: 800,
        fontSize: 36,
        top: 18
    },
    backButtonStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        left: 24,
        top: -3,
    },
})