//Mats Verheyen
//Opdarcht: Pizza calculator
//Constante prijzen
const priceSmall = 4.00;
const priceMedium = 6.50;
const priceLarge = 8.00;

//Keuze uit hoeveelheid pizza's
var pizzaSmall = prompt('Hoeveel small pizza\'s', '0');
var pizzaMedium = prompt('Hoeveel medium pizza\'s', '0');
var pizzaLarge = prompt('Hoeveel Large pizza\'s', '0');

//Hoeveelheid omzetten in integers
var num1 = parseFloat(pizzaSmall);
var num2 = parseFloat(pizzaMedium);
var num3 = parseFloat(pizzaLarge);
var total = num1 + num2 + num3; //Totale pizza's uitrekenen

//Totale pizza's weergeven op het scherm
document.write('Aantal bestelde pizza\'s Totaal: ' + total + '<br>' + '<br>');
document.write('Small: ' + pizzaSmall + '<br>');
document.write('Medium: ' + pizzaMedium + '<br>');
document.write('Large: ' + pizzaLarge) + '<br>';
//Totale prijs berekenen
var TotalSmall = pizzaSmall * priceSmall;
var TotalMedium = pizzaMedium * priceMedium;
var TotalLarge = pizzaLarge * priceLarge;
var totaalPrijs = TotalSmall + TotalMedium + TotalLarge;

//Totale prijs berkenen
document.write('<br>Totaal prijs: €' + totaalPrijs);