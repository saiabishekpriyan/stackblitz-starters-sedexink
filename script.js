const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key"; 


const encrypt = (payload) => {
  try {
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); 
    return token;
  } catch (error) {
    console.error("Error encrypting payload:", error);
    return null;
  }
};


const decrypt = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error("Error decrypting token:", error);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt,
};