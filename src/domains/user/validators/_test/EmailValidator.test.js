const EmailValidator = require('../EmailValidator');

describe('EmailValidator', () => {
  describe('validate', () => {
    it('should return true for a valid email', () => {
      // Arrange
      const email = 'test@example.com';
      const emailValidator = new EmailValidator();

      // Action
      const isValid = emailValidator.validate(email);

      // Assert
      expect(isValid).toBe(true);
    });

    it('should return false for an invalid email', () => {
      // Arrange
      const email = 'invalid_email';
      const emailValidator = new EmailValidator();

      // Action
      const isValid = emailValidator.validate(email);

      // Assert
      expect(isValid).toBe(false);
    });
  });
});
