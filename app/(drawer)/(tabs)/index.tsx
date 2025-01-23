import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";

import { config } from "@gluestack-ui/config"

import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { Menu, Button, ButtonText, MenuItem, Icon, MenuItemLabel } from "@gluestack-ui/themed"

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
                text={'Home'}
                notifications={true}
                backButton={false}
                buttons={true}
                blur={false}
            />
            <Menu
                placement="top"
                trigger={({ ...triggerProps }) => {
                    return (
                        <Button {...triggerProps}>
                            <ButtonText>Menu</ButtonText>
                        </Button>
                    )
                }}
            >
                <MenuItem key="Community" textValue="Community">
                    <MenuItemLabel size="md">Community</MenuItemLabel>
                </MenuItem>
                <MenuItem key="Plugins" textValue="Plugins">
                    <MenuItemLabel size="md">Plugins</MenuItemLabel>
                </MenuItem>
                <MenuItem key="Theme" textValue="Theme">
                    <MenuItemLabel size="md">Theme</MenuItemLabel>
                </MenuItem>
                <MenuItem key="Settings" textValue="Settings">
                    <MenuItemLabel size="md">Settings</MenuItemLabel>
                </MenuItem>
                <MenuItem key="Add account" textValue="Add account">
                    <MenuItemLabel size="md">Add account</MenuItemLabel>
                </MenuItem>
            </Menu>
        </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})