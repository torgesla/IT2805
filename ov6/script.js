function setTax(){
  var income = document.getElementById('income').value;
  var wealth = document.getElementById('wealth').value;
  var tax = (0.35 * income) + (0.25 * wealth);
  console.log(income);
  console.log(wealth);
  console.log(tax);
  console.log('hei');
  document.getElementById('tax').value = tax;
}
