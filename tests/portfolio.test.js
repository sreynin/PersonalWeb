/**
 * Basic tests for the portfolio site.
 * These verify that the HTML structure has the expected sections
 * and that key elements are present.
 */

const fs = require('fs');
const path = require('path');

describe('Portfolio HTML Structure', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('should have a page title', () => {
    const title = document.querySelector('title');
    expect(title).not.toBeNull();
    expect(title.textContent.length).toBeGreaterThan(0);
  });

  test('should have a navigation bar', () => {
    const navbar = document.querySelector('.navbar');
    expect(navbar).not.toBeNull();
  });

  test('should have navigation links', () => {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('should have a viewport meta tag for responsiveness', () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).not.toBeNull();
    expect(viewport.getAttribute('content')).toContain('width=device-width');
  });

  test('should load Bootstrap CSS', () => {
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    expect(bootstrapLink).not.toBeNull();
  });

  test('should have a back-to-top button', () => {
    const backToTop = document.querySelector('.back-to-top');
    expect(backToTop).not.toBeNull();
  });

  test('should include the main JavaScript file', () => {
    const mainScript = document.querySelector('script[src*="main.js"]');
    expect(mainScript).not.toBeNull();
  });
});
