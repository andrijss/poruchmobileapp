import {Text, TouchableOpacity, View} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import {StyleSheet} from "react-native";

import * as Location from 'expo-location';

import {Dimensions} from 'react-native';

import {
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    Heading,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    ButtonText,
    Checkbox,
    CheckboxIndicator,
    CheckboxIcon,
    CheckboxLabel,
    CheckIcon,
} from "@gluestack-ui/themed"

import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BlurView } from 'expo-blur';


import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

import { useState, useEffect } from 'react';

export default function Index() {
    const colorScheme = useColorScheme();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    const [showModal, setShowModal] = useState(false)
    console.log(showModal)
    const ref = React.useRef(null)

    return (
        <GluestackUIProvider config={config}>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                zoomEnabled={true}
                loadingEnabled={true}
                loadingBackgroundColor={Colors[colorScheme ?? 'dark'].background}
                loadingIndicatorColor={Colors[colorScheme ?? 'dark'].text}
            >
                <Marker coordinate={{ latitude: 50.23256, longitude: 24.12055 }} onPress={() => {setShowModal(true)}}>
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'rgba(252, 36, 3, 0.5)',
                        borderRadius: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'rgba(252, 36, 3, 0.7)',
                            borderRadius: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                width: 20,
                                height: 20,
                                backgroundColor: 'rgb(252, 36, 3)',
                                borderRadius: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            </View>
                        </View>
                    </View>
                </Marker>
            </MapView>
            <BlurView style={styles.topFilter} intensity={50}>
            </BlurView>

            <View style={[styles.topFilter, {
                zIndex: 101,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 8,
                paddingRight: 8,}]}>

                <TouchableOpacity style={[styles.topFilterButton, {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }]}>
                    <Text style={[styles.topFilterText, {color: '#000'}]}>
                        Всі
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topFilterButton}>
                    <Text style={styles.topFilterText}>
                        Разові
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topFilterButton}>
                    <Text style={styles.topFilterText}>
                        Постійні
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false)
                }}
                finalFocusRef={ref}
            >
                <ModalBackdrop />
                <ModalContent style={{
                    width: windowWidth - 46,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    height: '40%',
                    borderRadius: 14,
                    top: 145,
                    paddingBottom: 8
                }}>
                    <ModalHeader>
                        <Heading size="2xl">Допомога у притулку</Heading>
                        <ModalCloseButton>
                            <IconSymbol size={24} name='xmark' color={'#1f1f1f'} style={{
                                bottom: -2,
                            }} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <Heading size="xl" style={{
                            top: -6
                        }}>
                            9:00 - 18:00
                        </Heading>
                        <Heading>
                            Короткий опис події, особливості роботи, необхідні навички.
                        </Heading>

                        <Checkbox
                            style={{
                                marginTop: 12
                            }}
                            size="lg"
                            isReadOnly={true}
                            isChecked={true}
                            isInvalid={false}
                            isDisabled={false}>
                            <CheckboxIndicator mr="$2" style={{
                                backgroundColor: '#444',
                                borderColor: '#444'
                            }}>
                                <CheckboxIcon as={CheckIcon} style={{
                                    color: '#fff'
                                }} />
                            </CheckboxIndicator>
                            <CheckboxLabel style={{
                                fontWeight: 'bold',
                            }}>Задача 1</CheckboxLabel>
                        </Checkbox>

                        <Checkbox
                            style={{
                                marginTop: 10
                            }}
                            size="lg"
                            isReadOnly={true}
                            isChecked={true}
                            isInvalid={false}
                            isDisabled={false}>
                            <CheckboxIndicator mr="$2" style={{
                                backgroundColor: '#444',
                                borderColor: '#444'
                            }}>
                                <CheckboxIcon as={CheckIcon} style={{
                                    color: '#fff'
                                }} />
                            </CheckboxIndicator>
                            <CheckboxLabel style={{
                                fontWeight: 'bold',
                            }}>Задача 2</CheckboxLabel>
                        </Checkbox>

                        <Checkbox
                            style={{
                                marginTop: 10
                            }}
                            size="lg"
                            isReadOnly={true}
                            isChecked={false}
                            isInvalid={false}
                            isDisabled={false}>
                            <CheckboxIndicator mr="$2" style={{
                                backgroundColor: '#444',
                                borderColor: '#444'
                            }}>
                                <CheckboxIcon as={CheckIcon} style={{
                                    color: '#fff'
                                }} />
                            </CheckboxIndicator>
                            <CheckboxLabel style={{
                                fontWeight: 'bold',
                            }}>Задача 3</CheckboxLabel>
                        </Checkbox>
                    </ModalBody>
                    <ModalFooter style={{
                        justifyContent: 'flex-start',
                    }}>
                        <Button
                            size="md"
                            action="positive"
                            borderRadius={10}
                            borderWidth="$0"
                            onPress={() => {
                                setShowModal(false)
                            }}
                        >
                            <ButtonText>Підписатись на подію</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </View>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    topFilter: {
        zIndex: 100,
        position: 'absolute',
        left: 0,
        right: 0,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth-48,
        top: 70,
        marginHorizontal: 24,
        overflow: 'hidden',
        borderRadius: 16,
    },
    topFilterButton: {
        width: 105,
        height: 36,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topFilterText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})