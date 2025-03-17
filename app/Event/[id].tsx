import {useLocalSearchParams, useNavigation} from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import YouHaveUnread from "@/components/YouHaveUnread";

import TopBar from "@/components/TopBar";
import {Avatar, AvatarFallbackText} from "@gluestack-ui/themed";
import {TouchableOpacity} from "react-native";
import {ScrollView} from "react-native";

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import React from "react";

export default function DetailsScreen() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    return (
        <ThemedView style={styles.container}>
            <TopBar text={'Детальніше'} buttons={false} backButton={true} notifications={false} blur={false}></TopBar>

            <ThemedView style={{
                marginTop: 150,
            }}>

                {/* Map and Event Info */}
                <ScrollView>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 49.8366951,
                            longitude: 24.0252233,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    />
                    <View style={styles.eventInfo}>
                        <Text style={styles.eventLocation}>Вул. Влада Житара, 14</Text>
                        <View style={styles.eventDetails}>
                            <Text style={styles.eventTitle}>
                                {id === '1' ? 'Допомога у притулку' : 'Благодійний концерт'}
                            </Text>
                            <View style={styles.participantsContainer}>
                                <Ionicons name="people" size={16} color="white" />
                                <Text style={styles.participantsText}>5/10</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.coordinatorContainer}>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Coordinator')
                    } style={styles.coordinatorDetails}>
                        <Avatar style={styles.coordinatorImage} bgColor={id === '1' ? "#166534" : "#0b8dcd"} size="md" borderRadius="$full">
                            {id === '1' ?
                                <AvatarFallbackText style={styles.coordinatorName}>John Smith</AvatarFallbackText> :
                                <AvatarFallbackText style={styles.coordinatorName}>Nick Scholes</AvatarFallbackText>
                            }
                        </Avatar>
                        <ThemedView style={{
                            top:10
                        }}>
                            {id === '1' ?
                            <Text style={styles.coordinatorName}>John Smith</Text> :
                                <Text style={styles.coordinatorName}>Nick Scholes</Text>
                            }
                            <Text style={styles.coordinatorRole}>координатор</Text>
                        </ThemedView>
                    </TouchableOpacity>
                    <View style={styles.coordinatorActions}>
                        <Ionicons name="call" size={24} color="lightgray" />
                        <Ionicons name="chatbubble" size={24} color="lightgray" style={styles.iconSpacing} />
                    </View>
                </View>

                { id === '1' ?
                <YouHaveUnread from={"Допомога у притулку"} amount={2}></YouHaveUnread> :
                    <YouHaveUnread from={"Благодійний концерт"} amount={1}></YouHaveUnread>
                }

                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                {/* Tasks */}
                <View style={styles.taskContainer}>
                    <View style={styles.taskItem}>
                        <Ionicons name="square-outline" size={24} color="white" />
                        <Text style={styles.taskText}>Задача 1</Text>
                    </View>
                    <View style={styles.taskItem}>
                        <Ionicons name="checkmark" size={24} color="green" />
                        <Text style={styles.taskText}>Задача 2</Text>
                    </View>
                </View>

                </ScrollView>
                {/* Timeline */}

                { id === '1' &&
                <View style={styles.timelineContainer}>
                    <Text style={styles.time}>9:00</Text>
                    <View style={styles.timelineBar}>
                        <View style={styles.timelineProgress} />
                    </View>
                    <Text style={styles.time}>18:00</Text>
                </View>
                }

                {/* Actions */}
                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        { id === '1' ? <Ionicons name="car" size={24} color="lightgray" /> : <Ionicons name="checkmark" size={24} color="lightgray" /> }
                        { id === '1' ? <Text style={styles.actionButtonText}>В дорозі</Text> : <Text style={styles.actionButtonText}>Підтверджено</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        { id === '1' ?  <Text style={styles.actionButtonText}>Вже прибули на локацію?</Text> : <Text style={styles.actionButtonText}>Вирушаєте на локацію?</Text>}
                    </TouchableOpacity>
                </View>

            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mapContainer: {
        marginBottom: 16,
        paddingHorizontal: 24
    },
    map: {
        height: 200,
        borderRadius: 16,
    },
    eventInfo: {
        marginTop: 8,
    },
    eventLocation: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        top: -195,
        left: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    eventDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventTitle: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        top: -70,
        left: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    participantsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: -217,
        right: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    participantsText: {
        marginLeft: 4,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    coordinatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        top: -42
    },
    coordinatorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 8,
    },
    coordinatorDetails: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    coordinatorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',

    },
    coordinatorRole: {
        fontSize: 14,
        color: 'gray',
    },
    coordinatorActions: {
        flexDirection: 'row',
    },
    iconSpacing: {
        marginLeft: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        color: 'white',
        top: -10,
        paddingHorizontal: 24,
    },
    taskContainer: {
        marginBottom: 16,
    },
    taskItem: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    taskText: {
        marginLeft: 8,
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    timelineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 24,
        top: -43
    },
    time: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    timelineBar: {
        flex: 1,
        height:10,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 8,
        borderRadius: 4,
    },
    timelineProgress: {
        width: '50%',
        height: '100%',
        backgroundColor: '#4caf50',
        borderRadius: 4,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        top: -40
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'lightgray',
        flex: 1,
        marginHorizontal: 4,
    },
    actionButtonText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'lightgray'
    },
});
