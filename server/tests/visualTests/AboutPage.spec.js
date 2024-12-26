// tests/visualTests/AboutPage.spec.js
// Visual regression tests for the About Page

describe('About Page Visual Tests', () => {
    it('should match the visual snapshot', () => {
      // Logic for visual regression testing using a tool like Cypress or Playwright
      cy.visit('/about');
      cy.matchImageSnapshot('AboutPage');
    });
  });
  