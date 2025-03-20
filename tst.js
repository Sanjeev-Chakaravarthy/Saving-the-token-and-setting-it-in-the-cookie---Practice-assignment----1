const { encrypt, decrypt } = require('./script');


const payload = { userId: 28122007, role: "Respected Campus Manager" };


const encryptedTok = encrypt(payload)
console.log("Encrypted Token:", encryptedTok)


try {
  const decryptedData = decrypt(encryptedTok)
  console.log("Decrypted Data:", decryptedData);
} catch (error) {
  console.error("Error in decryption:", error.message)
}
