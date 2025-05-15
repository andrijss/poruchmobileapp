import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

import Divider from "@/components/Divider";
import TopBar from "@/components/TopBar";
import Notification from "@/components/Notification";
import UnreadNotification from "@/components/UnreadNotification";
import RadialGradientBackground from "@/components/RadialGradientBackground";

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import {ScrollView, StyleSheet} from "react-native";

import { useNavigation } from 'expo-router';
import React from "react";

export default function Index() {
    const navigation:any = useNavigation();

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
                    text={'Сповіщення'}
                    notifications={false}
                    backButton={true}
                    buttons={false}
                    blur={false}
                />

                <ThemedView style={{
                    position: 'absolute',
                    backgroundColor: '#d00e07',
                    borderRadius: 18,
                    width: 32,
                    right: 126,
                    top: 91,
                    height: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ThemedText style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>3</ThemedText>
                </ThemedView>

                <ScrollView>
                <UnreadNotification
                    category={'Допомога у притулку'}
                    time={'9:36'}
                    name={'John Smith (координатор)'}
                    message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}>
                </UnreadNotification>

                <Divider text={"Учора"} color={"#fff"}></Divider>

                <Notification
                    category={"Допомога в притулку"}
                    time={"учора 14:53"}
                    message={"Ви підписались на подію Допомога у притулку як волонтер"}>
                </Notification>

                    <Notification
                        category={"Благодійний концерт"}
                        time={"учора 12:15"}
                        message={"Ви підписались на подію Благодійний концерт як волонтер"}>
                    </Notification>
                </ScrollView>

            </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})