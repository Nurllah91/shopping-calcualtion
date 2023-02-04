function bazar(riceUnit, potatoUnit, tomatoUnit){
    
    const ricePrice = 70;
    const potatoPrice = 20;
    const tomatoPrice = 30; 


    const ricePriceTotal = ricePrice * riceUnit;
    const potatoPriceTotal = potatoPrice * potatoUnit;
    const tomatoPriceTotal = tomatoPrice * tomatoUnit;

    const Total = ricePriceTotal + potatoPriceTotal + tomatoPriceTotal;
    return Total;

}


const rice = 10;
const potato = 5;
const tomato = 3;

const BazarList = bazar(rice, potato, tomato)

console.log(BazarList);