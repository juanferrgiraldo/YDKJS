const TAX_RATE = 0.08;
const PHONE_PRICE = 150;
const ACCESSORY_PRICE = 30;
const SPENDING_THRESHOLD = 200;
let bankAccount = 500;

function calcTax (value) {
  value = value + (value * TAX_RATE);
  return value;
}

function priceFormat (price) {
  price = price.toFixed(2);
  let newPrice = String(price);
  return "$" + newPrice;
}

function totalAmount (phones, accessories) {  
  return (phones * PHONE_PRICE) + (accessories * ACCESSORY_PRICE);
}

function buyPhone() {
  let phoneResponse;
  let phone = 0;
  let accessory = 0;
  let total = 0;
  let aux = 0;
  console.log("Welcome to JStore");  
  while (bankAccount >= total && phoneResponse !== "not") {    
    phoneResponse = prompt("Would you like to buy a phone?\nWrite yes if agree or not if desagree")
    if (phoneResponse === "yes") {
      aux = bankAccount - total - PHONE_PRICE;
      if (aux > 0) {
        phone += 1;
      } else {
        console.log("There are not enough money");
      }
      accessoryResponse = prompt("Would you like to buy an accessory for the phone?\nWrite yes if agree or not if desagree");
      if (accessoryResponse === "yes") {
        aux = bankAccount - total - ACCESSORY_PRICE;
        if (aux > 0) {
          accessory++;        
        } else {
          console.log("There are not enough money");
        }        
      }
    } else {
      console.log("Thanks you for purchasing");      
    }
    total = totalAmount(phone, accessory);
    total = calcTax(total);
    console.log(total);    
  }
  bankAccount -= total;
  total = priceFormat(total);

  console.log("The total is: ", total);
}

buyPhone();