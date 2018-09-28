var expect = require('chai').expect;
var HomePage = require('../pages/home.page.js'); 

describe('Given an application that calculates the type of triangle', function () {
  
    it('should show Equilater when all the sides are the same', function () {
        
        HomePage.enterTriangleValues("2","2","2");
        HomePage.submitTriangle();

        expect(HomePage.getResult()).to.equal('O triângulo é Equilátero')

    });

    
    it('should show Isoceles when 2 sides are the same', function () {
        
        HomePage.enterTriangleValues("2","2","4");
        HomePage.submitTriangle();

        expect(HomePage.getResult()).to.equal('O triângulo é Isósceles')
    });

    it('should show Escaleno when all the sides are different', function () {
        
        HomePage.enterTriangleValues("2","4","6");
        HomePage.submitTriangle();

        expect(HomePage.getResult()).to.equal('O triângulo é Escaleno')

    });

});