import { getCurrencyAbbreviation, getCountryByAbbreviation } from "country-currency-map";

function obtenerMoneda(codigo){
    const moneda = getCurrencyAbbreviation(getCountryByAbbreviation(codigo))
    if(moneda != undefined){
        return moneda;
    }
    else{
        return null;
    }
}

let monedaDelPais, codigoPais;

codigoPais = 'UK';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

