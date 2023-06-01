const jwt = require('jsonwebtoken');
const AuthenticationTokenManager = require('../../applications/security/AuthenticationTokenManager');

class JwtTokenManager extends AuthenticationTokenManager {
  async createAccessToken(payload) {
    const accessToken = await jwt.sign(payload, 'hikio010217');
    return accessToken;
  }

  async createRefreshToken(payload) {
    const resfreshToken = await jwt.sign(payload, 'hikio010217');
    return resfreshToken;
  }

  async verifyRefreshToken(payload) {
    return jwt.verify(payload, 'hikio010217');
  }
}

module.exports = JwtTokenManager;