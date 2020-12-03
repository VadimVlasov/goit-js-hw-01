const china = "китай";
const chile = "чили";
const avstralia = "австралия";
const india = "индия";
const jamaica = "ямайка";
let country;
let deliveryCountry = prompt(`Введите страну доставки`);
deliveryCountry = deliveryCountry.toLowerCase();
switch (deliveryCountry) {
    case china:
        country = 'Китай';
        console.log(`Доставка в ${country} будет стоить 100 кредитов`);
        break;
    case chile:
        country ='Чили';
        console.log(`Доставка в ${country} будет стоить 250 кредитов`);
        break;
    case avstralia:
        country = 'Австралия';
        console.log(`Доставка в ${country} будет стоить 170 кредитов`);
        break;
    case india:
        country = 'Индия';
        console.log(`Доставка в ${country} будет стоить 80 кредитов`);
        break;
    case jamaica:
        country = 'Ямайку';
        console.log(`Доставка в ${country} будет стоить 120 кредитов`);
        break;
    default:
        alert(`В вашей стране доставка не доступна`);
}