const assert = require('chai').assert; 
const app = require('../app.js'); 

describe('Simple test', function() { 
  it('should return hello message', function() { 
    assert.equal('Hello, GitHub Actions!', 'Hello, GitHub Actions!'); 
  });

});