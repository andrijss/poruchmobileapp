'use client'

import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { supabase } from '../../utils/supabase'
import { router } from 'expo-router'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = async () => {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
        } else {
            router.replace('/')
        }

        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={loading ? 'Logging In...' : 'Login'} onPress={handleLogin} disabled={loading} />
            <Text style={styles.switch}>
                Don't have an account?{' '}
                <Text style={styles.link} onPress={() => {
                    router.replace('/sign-up');
                }}>
                    Sign Up
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#101010'
    },

    title: { fontSize: 24, marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 8 },
    error: { color: 'red', marginBottom: 10 },
    switch: { textAlign: 'center', marginTop: 20 },
    link: { color: 'blue' },
})
