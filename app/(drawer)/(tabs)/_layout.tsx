import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {useFonts} from 'expo-font';

export default function TabLayout() {
  const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        "FontMedium": require('../../../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../../../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../../../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          default: {
              position: 'absolute',
              height: 70,
              paddingTop: 8,
              backgroundColor: "#1A1A1A",
              borderTopWidth: 0,
              borderRadius: 100,
              bottom: 28,
              marginLeft: 24,
              marginRight: 24,
              elevation: 8,
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.33,
              shadowRadius: 16,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Головна',
          tabBarIcon: ({ focused, color }) =>
              <IconSymbol size={28} name="house.fill" color={focused ? "#E43800" : "gray"} style={{
                  shadowColor: focused ? "#af2a00" : '#000000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.48,
                  shadowRadius: 8,
              }} />
            ,
            tabBarLabelStyle: {
                fontFamily: 'FontMedium',
            }
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Мапа',
          tabBarIcon: ({ focused, color }) =>
              <IconSymbol size={28} name="map.fill" color={focused ? "#E43800" : "gray"} style={{
                  shadowColor: focused ? "#af2a00" : '#000000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.48,
                  shadowRadius: 8,
              }} />
            ,
            tabBarLabelStyle: {
                fontFamily: 'FontMedium',
            }
        }}
      />
        <Tabs.Screen
            name="myevents"
            options={{
                title: 'Мої події',
                tabBarIcon: ({ focused, color }) => <IconSymbol size={28} name="calendar.and.person" color={focused ? "#E43800" : "gray"} style={{
                    shadowColor: focused ? "#af2a00" : '#000000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.48,
                    shadowRadius: 8,
                }} />,
                tabBarLabelStyle: {
                    fontFamily: 'FontMedium',
                }
            }}
        />
    </Tabs>
  );
}
