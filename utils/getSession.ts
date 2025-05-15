import { supabase } from './supabase'
import { Session } from '@supabase/supabase-js'

export const getSession = async (): Promise<Session | null> => {
    const { data, error } = await supabase.auth.getSession()

    if (error) {
        console.error('Error getting session:', error.message)
        return null
    }

    return data.session
}