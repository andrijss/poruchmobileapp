import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";
import Button from "@/components/Button";
import {Image} from "expo-image";

import Event from "@/components/Event";

import CTabs from "@/components/CTabs";
import {LinearGradient} from "expo-linear-gradient";
import RadialGradientBackground from "@/components/RadialGradientBackground";

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { useNavigation } from 'expo-router';

import {supabase} from "@/utils/supabase";
import {useFonts} from "expo-font";
import {IconSymbol} from "@/components/ui/IconSymbol";
import React from "react";

export default function Index() {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        "FontMedium": require('../../../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../../../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../../../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    return (
        <GluestackUIProvider config={config}>
            <ThemedView
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
                {/*<LinearGradient colors={['rgba(236,83,1,0.5)', 'transparent']} style={{*/}
                {/*    width: '100%',*/}
                {/*    height: '50%',*/}
                {/*    position: 'absolute',*/}
                {/*    display: 'flex'*/}
                {/*}}>*/}
                {/*</LinearGradient>*/}

                <RadialGradientBackground></RadialGradientBackground>

                <TopBar
                    text={'Головна'}
                    notifications={true}
                    backButton={false}
                    buttons={true}
                    blur={false}
                />

                <View style={{
                    width: '100%',
                    height: '18%',
                    top: 145,
                    paddingHorizontal: 24,

                    shadowColor: '#d93902',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.6,
                    shadowRadius: 10,
                }}>
                    <LinearGradient style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 18,
                        padding: 24
                    }} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={["#fe7000", "#e43800", "#d00e07"]}>
                        <Text style={{
                            color: '#fefefe',
                            fontWeight: '700',
                            fontSize: 24,
                            top: 12,
                            width: 180,
                            fontFamily: 'FontBold'

                        }}>
                            Доєднуйся       до команди координаторів
                        </Text>
                        <Image
                            source={require('../../../assets/images/voulonteer.png')}
                            style={{
                                width: 200,
                                height: 180,
                                top: 0,
                                right: -20,
                                position: 'absolute'
                            }}
                        ></Image>
                    </LinearGradient>
                </View>

                <ThemedView style={{
                    backgroundColor: '#141414',
                    paddingHorizontal: 24,
                    top: 166,
                    paddingTop: 24,
                    borderTopRightRadius: 24,
                    borderTopLeftRadius: 24,
                    width: '100%',
                    height: '100%',

                    shadowColor: '#000000',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 16,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            color: "#fefefe",
                            fontSize: 28,
                            fontWeight: 'bold',
                            fontFamily: 'FontBold'
                        }}>Події</Text>

                        <View style={{
                            position: 'absolute',
                            right: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            top: 2,
                        }}>
                            <View>
                                <Text style={{
                                    color: "#fefefe",
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    fontFamily: 'FontBold',
                                    textAlign: 'right',
                                }}></Text>
                                <Text style={{
                                    color: "#fefefe",
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    fontFamily: 'FontBold',
                                    textAlign: 'right',
                                }}></Text>
                            </View>
                        </View>
                    </View>

                    <CTabs style={{
                        marginTop: 16,
                        marginBottom: 16,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.4,
                        shadowRadius: 16,
                    }}></CTabs>

                    <SafeAreaProvider>
                        <SafeAreaView edges={['top']}>
                            <ScrollView style={{
                                height: 288,
                            }}>
                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"active"}
                                       type={'a'}
                                       address={"вул. Керамічна 4"}
                                />

                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"soon"}
                                       type={'a'}
                                       address={"вул. Наукова 72"}/>
                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"soon"}
                                       type={'a'}
                                       address={"вул. Театральна 23"}/>
                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"finished"}
                                       type={'a'}
                                       address={"вул. Хімічна 4"}
                                />
                            </ScrollView>
                        </SafeAreaView>
                    </SafeAreaProvider>
                </ThemedView>

            </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})