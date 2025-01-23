import { Text, View } from "react-native";
import MapView from 'react-native-maps';
import {StyleSheet} from "react-native";
import TopBar from "@/components/TopBar";

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BlurView } from 'expo-blur';

export default function Index() {
    const colorScheme = useColorScheme();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <TopBar
                text={''}
                notifications={true}
                backButton={false}
                buttons={true}
                blur={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})