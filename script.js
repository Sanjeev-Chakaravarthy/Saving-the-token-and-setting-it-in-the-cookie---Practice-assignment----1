const jwt = require('jsonwebtoken')
const cryptojs = require('crypto-js')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY


const encrypt = (payload) => {
  // encrypt the payload and return token
  const tok = jwt.sign(payload, SECRET_KEY, {expiresIn: '30m'})

  const encryptedTok = cryptojs.AES.encrypt(tok,ENCRYPTION_KEY).toString()
  return encryptedTok
}

const decrypt = (token) => {
  // return decoded payload
  const bytes = CryptoJS.AES.decrypt(encryptedToken, ENCRYPTION_KEY)
  const decryptedTok = bytes.toString(CryptoJS.enc.Utf8)


  return jwt.verify(decryptedTok,SECRET_KEY)
}

module.exports = {
  encrypt,
  decrypt
}
