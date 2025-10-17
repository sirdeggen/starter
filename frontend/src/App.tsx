import React, { useState } from 'react'
import { PrivateKey } from '@bsv/sdk'

function App (): React.ReactNode {
  const [message, setMessage] = useState<string>('')
  const [key, _] = useState<string>(PrivateKey.fromRandom().toWif())

  const handleGet = async (): Promise<void> => {
    try {
      const res = await fetch('http://localhost:3000/')
      const data = await res.json()
      setMessage(JSON.stringify(data))
    } catch {
      setMessage('Error fetching data')
    }
  }

  const handlePost = async (): Promise<void> => {
    try {
      const res = await fetch('http://localhost:3000/act', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: 'something you want to send', key })
      })
      const data = await res.json()
      setMessage(JSON.stringify(data))
    } catch {
      setMessage('Error fetching data')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello World</h1>
      <h2>Click the buttons below to test the API</h2>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <button onClick={handleGet}>GET something</button>
        <button onClick={handlePost}>POST some data</button>
      </section>
      {message !== '' && <p>{message}</p>}
    </div>
  )
}

export default App
