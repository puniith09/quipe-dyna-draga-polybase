const crypto = require('crypto');

const generateHashId = (username) => {
  const hash = crypto.createHash('sha256');
  hash.update(username);
  return hash.digest('hex');
}

module.exports = {
  generateHashId
}