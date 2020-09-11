var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox' }).build();
let gatos={};

gatos.traergato=function(){
    
    browser.get('https://quebuscaras.herokuapp.com/inicio2.html').then(function(){
        return browser.findElement(webdriver.By.id("breed_search"));
    }).then(function(query){
        return query.sendKeys("Abyssinian");
    }).then(function(){
        return browser.findElement(webdriver.By.id("botoncat"));
    }).then(function(boton){        
        return boton.click();        
    }).then(function(boton){
        console.log("PASO PRUEBAS");         
    }).catch((error) => {
        console.log(error);
    })

}
gatos.traergato();
module.exports =gatos;