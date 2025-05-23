import React from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button, StyleSheet, Text } from 'react-native';

import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {TouchableOpacity} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Drawer} from "expo-router/drawer";

import {Avatar, AvatarFallbackText} from "@gluestack-ui/themed";

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import {useFonts} from "expo-font";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
        "FontMedium": require('../../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../../assets/fonts/MontserratAlternates-Regular.ttf'),
  });


  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
              drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right'
            }}
          >
              <Drawer.Screen
                  name='(tabs)'
                  options={{
                      headerShown: false,
                  }}
              />
          </Drawer>
      </GestureHandlerRootView>
  )
}

function CustomDrawerContent({ navigation }:{ navigation: any}) {
    return (
        <GluestackUIProvider config={config}>
        <ThemedView style={styles.drawerContainer}>
            <ThemedView style={styles.profileGroup}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={[styles.profileGroup, {
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                    marginBottom: 0,
                }]}>
                    <Avatar bgColor="#E43800FF" size="lg" borderRadius="$full">
                        <AvatarFallbackText>John Doe</AvatarFallbackText>
                    </Avatar>
                    <ThemedView style={{
                        left: 18,
                        top: 15,
                    }}>
                        <ThemedText style={styles.usernameText}>John Doe</ThemedText>
                        <ThemedText style={styles.goToProfileText}>Переглянути профіль</ThemedText>
                    </ThemedView>
                </TouchableOpacity>
            </ThemedView>

            <Text style={styles.footerText}>©CyberGOAT team 2025</Text>
        </ThemedView>
        </GluestackUIProvider>
    );
}

const styles    = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingLeft: 32,
        paddingBottom: 48,
        paddingTop: Platform.OS === 'ios' ? 80 : 60,
        // borderLeftColor: '#454242',
        // borderLeftWidth: 1,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    footerText: {
        marginTop: 'auto',
        fontSize: 14,
        color: 'gray',
        fontFamily: "FontMedium"
    },
    profileGroup: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#454242',
        paddingBottom: 28,
        width: '120%',
        left: -32,
        paddingLeft: 32,
    },
    usernameText: {
        fontSize: 26,
        fontFamily: "FontBold"
    },
    goToProfileText: {
        fontSize: 14,
        color: 'gray',
        fontFamily: "FontMedium"
    }
});