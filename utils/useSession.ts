import { useEffect, useState } from 'react'
import { getSession } from './getSession'
import { Session } from '@supabase/supabase-js'

export const useSession = () => {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession()
            setSession(session)
            setLoading(false)
        }

        fetchSession()
    }, [])

    return { session, loading }
}
