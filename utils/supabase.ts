
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://ltakolphtrnhliyoawcz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0YWtvbHBodHJuaGxpeW9hd2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNzMxMjksImV4cCI6MjA2MDY0OTEyOX0.SJFL7NBmbpjMBlEarF1YgA5NznRGyKfkhxeNd7OEa0Y",
    {
        auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    })