'use client'

import { useState, useEffect } from 'react'
import AdminPanel from '@/components/admin/AdminPanel' // adjust path if needed

// --- Static credentials (change if needed) ---
const ADMIN_USERNAME = 'admin@sensokart.com'
const ADMIN_PASSWORD = 'S3ns0k@rt!2025'
const STORAGE_KEY = 'sensokart_admin_auth' // sessionStorage key

export default function AuthWrapper() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setAuthenticated(true)
    } else {
      setError('Invalid username or password')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY)
    setAuthenticated(false)
    setUsername('')
    setPassword('')
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-500">Checking session…</div>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">SENSOKART — Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="admin@sensokart.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
                required
              />
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => {
                  setUsername(ADMIN_USERNAME)
                  setPassword(ADMIN_PASSWORD)
                }}
                className="text-sm text-gray-500 hover:underline"
                title="Fill demo credentials"
              >
                Use demo creds
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              Client-side login. Do not use for production.
            </p>
          </form>
        </div>
      </div>
    )
  }

  // Authenticated: render AdminPanel with logout
  return (
    <div>
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-end">
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </div>

      <AdminPanel />
    </div>
  )
}
