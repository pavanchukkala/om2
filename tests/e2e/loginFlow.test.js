// e2e/loginFlow.test.js
// End-to-end test for login flow

describe('Login Flow E2E Test', () => {
    it('should allow a user to login successfully', () => {
      cy.visit('/login');
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('password123');
      cy.get('#loginButton').click();
      
      // Assert that user is redirected to the dashboard
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, Test User');
    });
  
    it('should show an error for invalid credentials', () => {
      cy.visit('/login');
      cy.get('#email').type('invalid@example.com');
      cy.get('#password').type('wrongpassword');
      cy.get('#loginButton').click();
  
      // Assert error message is displayed
      cy.contains('Invalid email or password').should('be.visible');
    });
  });