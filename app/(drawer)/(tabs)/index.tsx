import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import TopBar from "@/components/TopBar";

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

import { useNavigation } from 'expo-router';

export default function Index() {
    const navigation = useNavigation();

    return (
        <GluestackUIProvider config={config}>
            <ThemedView
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
                <TopBar
                    text={'Головна'}
                    notifications={true}
                    backButton={false}
                    buttons={true}
                    blur={false}
                />

                <ThemedView style={{
                    paddingHorizontal: 24,
                    top: 145
                }}>
                <View style={styles.tabsContainer}>
                    <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
                        <Text style={[styles.tabText, styles.activeTabText]}>Всі</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabText}>Події</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabText}>Збори</Text>
                    </TouchableOpacity>
                </View>

                {/* Category Buttons */}
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.categoryText}>Відновлення</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.categoryText}>Гуманітарка</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.categoryText}>Медичні</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.categoryText}>Культура та освіта</Text>
                    </TouchableOpacity>
                </View>

                {/* Section Titles */}
                <Text style={styles.sectionTitle}>Постійні події</Text>
                    <ThemedView style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 24
                    }}>
                        <ThemedView style={{
                            width: 160,
                            height: 140,
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 14,
                            marginRight: 18,
                            padding: 12
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'lightgray',
                                marginBottom: 14
                            }}>
                                Допомога у притулку
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                color: 'lightgray',
                                fontWeight: 'bold'
                            }}>
                                📌Львів, центр
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                color: 'lightgray',
                                fontWeight: 'bold',
                                top: 29
                            }}>
                                9:00 - 18:00
                            </Text>
                        </ThemedView>

                        <ThemedView style={{
                            width: 160,
                            height: 140,
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 14,
                            padding: 12
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 10,
                                color: 'lightgray',
                            }}>
                                Здача крові
                            </Text>

                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'lightgray',
                            }}>
                                📌Львів, медичний університет
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                top: 22,
                                color: 'lightgray',
                            }}>
                                7:30 - 14:00
                            </Text>
                        </ThemedView>
                    </ThemedView>

                <Text style={styles.sectionTitle}>Разові події</Text>
                    <ThemedView style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 24
                    }}>
                        <ThemedView style={{
                            width: 160,
                            height: 140,
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 14,
                            marginRight: 18,
                            padding: 12
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 14,
                                color: 'lightgray',
                            }}>
                                Благодійний концерт
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'lightgray',
                            }}>
                                📌Львів, центр
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                top: 28,
                                color: 'lightgray',
                            }}>
                                18:30 - 22:30
                            </Text>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        height: 32,
        marginBottom: 24,
    },
    tabButton: {
        flex: 1,
        paddingTop: 8,
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 4,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    activeTab: {
        backgroundColor: '#e0e0e0',
    },
    tabText: {
        fontSize: 14,
        color: 'lightgray',
        fontWeight: 'bold',
    },
    activeTabText: {
        fontWeight: 'bold',
        color: '#222'
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    categoryButton: {
        width: '48%',
        padding: 16,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderRadius: 12,
        marginBottom: 16,
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    categoryText: {
        fontSize: 16,
        color: 'lightgray',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'lightgray',
    },
})