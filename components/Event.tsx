import React, { useState } from 'react';

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import { IconSymbol } from '@/components/ui/IconSymbol';

import {Link} from 'expo-router';

import {StyleSheet, TouchableOpacity} from "react-native";

export default function Event({eventName,
                                  date,
                                  linkToEvent,
                                  status} : {
    eventName: string,
    date: string,
    linkToEvent: string,
    status: string}) {
    // @ts-ignore
    return (
        <ThemedView style={styles.eventContainer}>
            <Link href={'/Event/'.concat(linkToEvent)}>
                <ThemedView style={{
                    width: '100%',
                }}>
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
                    <IconSymbol size={16} name="note" color={'#c4c4c4'} />
                    <ThemedText style={{
                        fontWeight: 'bold',
                        left: 6,
                        top: -1
                    }}>
                        {status}
                    </ThemedText>
                </ThemedView>

                <ThemedText style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 24,
                    top: 4,
                    right: 2,
                    color: 'gray',
                }}>
                    <IconSymbol size={16} name="chevron.forward" color={'#c4c4c4'} style={{
                    }} />
                </ThemedText>
                </ThemedView>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    eventContainer: {
        padding: 16,
        paddingTop: 12,
        height: 108,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 18,
        borderRadius: 12,
    }
})

