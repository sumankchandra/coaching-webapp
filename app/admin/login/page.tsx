'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (password === 'Password1$') {
      document.cookie = `admin_auth=true; path=/`
      router.push('/admin/leads')
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow rounded-xl w-80">
        <h1 className="text-xl mb-4">Admin Login</h1>

        <input
          type="password"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}