n// e2e/checkoutFlow.test.js
// End-to-end test for checkout flow

describe('Checkout Flow E2E Test', () => {
    it('should allow a user to complete a purchase', () => {
      cy.visit('/products');
      cy.get('.product').first().click();
      cy.get('#addToCart').click();
      cy.visit('/cart');
      cy.get('#checkoutButton').click();
  
      // Fill in checkout details
      cy.get('#address').type('123 Main St');
      cy.get('#paymentInfo').type('4111111111111111');
      cy.get('#confirmPurchase').click();
  
      // Assert success message
      cy.contains('Thank you for your purchase').should('be.visible');
    });
  
    it('should show an error for incomplete checkout details', () => {
      cy.visit('/cart');
      cy.get('#checkoutButton').click();
      cy.get('#confirmPurchase').click();
  
      // Assert error message
      cy.contains('Please complete all required fields').should('be.visible');
    });
  });
  