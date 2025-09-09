let price1;
let price2;
let price3;

function calculatePrice() {
 price1 = parseFloat(document.getElementById('grocery1').value);
 price2 = parseFloat(document.getElementById('grocery2').value);
 price3 = parseFloat(document.getElementById('grocery3').value);

let TotalPrice = price1 + price2 + price3;

 document.getElementById('result').innerText = `The total price is: ${TotalPrice}`;

}