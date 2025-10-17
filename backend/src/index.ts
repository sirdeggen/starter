import express from 'express'
import cors from 'cors'
import { PrivateKey } from '@bsv/sdk'

const app = express()

app.use(cors())
app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  console.log('\x1b[34mGET /\x1b[0m')
  const privateKey = PrivateKey.fromRandom()
  res.json({ something: 'only a backend would know', address: privateKey.toAddress() })
})

app.post('/act', (req, res) => {
  console.log('\x1b[34mPOST /act')
  console.log('req', req.body, '\x1b[0m')
  const responseBody = req.body
  const privateKey = PrivateKey.fromWif(req.body.key)
  responseBody.additional = 'things from back'
  responseBody.address = privateKey.toAddress()
  console.log('\x1b[32mres', responseBody, '\x1b[0m')
  res.json(responseBody)
})

app.listen(port, () => {
  console.log('Server running on http://localhost:' + String(port))
})
