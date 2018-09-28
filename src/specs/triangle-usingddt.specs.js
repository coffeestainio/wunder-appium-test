var expect = require('chai').expect;
var HomePage = require('../pages/home.page.js'); 
var jsonTriangle = require("../resources/data.json");

describe('Given an application that calculates the type of triangle - using DDT', function () {
       
       jsonTriangle.triangles.forEach(triangle => {
           
            it('should be a ' + triangle.expectedResult + 'when the sides are: ' + triangle.side1 + triangle.side2 + triangle.side3, function () {
                
                HomePage.enterTriangleValues(triangle.side1,triangle.side2, triangle.side3);
                HomePage.submitTriangle();

                expect(HomePage.getResult()).to.equal(triangle.expectedResult)

            });

       }); 

});