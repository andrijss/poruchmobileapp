import React, { useState } from 'react';

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import { IconSymbol } from '@/components/ui/IconSymbol';

import {StyleSheet, TouchableOpacity} from "react-native";

export default function EventHistoryElement({eventName, date} : {eventName: string, date: string}) {
    return (
        <ThemedView style={styles.eventContainer}>
            <TouchableOpacity>
                <ThemedText style={{
                    fontWeight: 'bold'
                }}>{date}</ThemedText>

                <ThemedText style={{
                    fontSize: 26,
                    paddingTop: 9,
                    fontWeight: 'bold'
                }}>{eventName}</ThemedText>

                <ThemedView style={{
                    display: 'flex',
                    flexDirection: 'row',
                    top: 10
                }}>
                    <IconSymbol size={16} name="flag.fill" color={'#c4c4c4'} />
                    <ThemedText style={{
                        fontWeight: 'bold',
                        left: 6,
                        top: -1
                    }}>
                        Подія завершена
                    </ThemedText>
                </ThemedView>

                <ThemedText style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    fontWeight: 'bold',
                    fontSize: 24,
                    top: 4,
                    right: 2,
                    textColor: 'gray',
                }}>
                    <IconSymbol size={16} name="chevron.forward" color={'#c4c4c4'} style={{
                    }} />
                </ThemedText>

            </TouchableOpacity>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    eventContainer: {
        padding: 16,
        paddingTop: 12,
        height: 108,
        borderWidth: 1,
        borderColor: '#636363',
        marginBottom: 18,
        borderRadius: 12,
    }
})

