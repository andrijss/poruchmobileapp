import React from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button, StyleSheet, Text } from 'react-native';

import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Drawer} from "expo-router/drawer";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
              drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right'
            }}
          >
              <ThemedText>Shjhjdfhdj</ThemedText>
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
        <ThemedView style={styles.drawerContainer}>
            <Text style={styles.headerText}>Custom Drawer</Text>

            {/* Custom Buttons */}
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('profile')}
            />
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('settings')}
            />

            <Text style={styles.footerText}>© CyberGOAT team 2025</Text>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        padding: 20,
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
    },
});