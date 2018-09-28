var HomePage = function() {

    this.txtLado1 = function(){ return browser.element('android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtLado1")') }
    this.txtLado2 = function(){ return browser.element('android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtLado2")') }
    this.txtLado3 = function(){ return browser.element('android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtLado3")') }
    this.btnSubmit = function() {return browser.element('android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/btnCalcular")')}
    this.txtResult = function() {return browser.element('android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtResultado")')}
  
    this.enterTriangleValues = function(side1, side2, side3) {
      this.txtLado1().click().keys(side1);
      this.txtLado2().click().keys(side2);
      this.txtLado3().click().keys(side3);
    };

    this.submitTriangle = function(){
        this.btnSubmit().click();
    }

    this.getResult = function(){
        return this.txtResult().getText();
    }
  
  };
  module.exports = new HomePage();