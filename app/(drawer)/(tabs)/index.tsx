import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import {StyleSheet} from "react-native";

import { useNavigation } from 'expo-router';

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
                text={'Головна'}
                notifications={true}
                backButton={false}
                buttons={true}
                blur={false}
            />
        </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})