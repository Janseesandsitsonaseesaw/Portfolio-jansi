import { useEffect, useState } from 'react'
import { profileFallback } from '../data/profileFallback'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export function useProfile() {
  const [profile, setProfile] = useState(profileFallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch(`${API_BASE}/api/profile`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setProfile(data)
      })
      .catch(() => {
        // Silent fallback — local data already populated the state.
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { profile, loading }
}

export { API_BASE }
