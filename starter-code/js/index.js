// ITERATION 1

/* function updateSubtotal($product) {
  const $price = $product.querySelector(".price span");
  //console.log("PRICE INPUT", $price);
  const $quantity = $product.querySelector(".quantity input");
  //console.log("QUANTITY INPUT", $quantity);
  

  let priceValue = parseFloat($price.innerText);
  let quantityValue = $quantity.valueAsNumber;
  
  let subtotalValue =  priceValue * quantityValue;
  
  let $subTotal = $product.querySelector('.subtotal span');
  
  $subTotal.innerText = subtotalValue;

} */
function updateSubtotal($product) {
  const $price = $product.querySelector(".price span");
  const $quantity = $product.querySelector(".quantity input");

  // Extract values from DOM elements
  const priceValue = parseFloat($price.innerText);
  const quantityValue = $quantity.valueAsNumber;

  // Calculate total values
  const subtotalValue = priceValue * quantityValue;

  // Get DOM element that holds the subtotal value for the product
  const $subTotal = $product.querySelector(".subtotal span");

  // Set the product subtotal to the corresponding DOM element
  $subTotal.innerText = subtotalValue;

  // Return subtotal value so it can be used later
  return subtotalValue;
}

function calculateAll() {
  const $products = document.querySelectorAll(".product");

  let totalValue = 0;
  //const $total =
  for (let item of $products) {
    totalValue += updateSubtotal(item);
    //console.log(totalValue);
    //grab each subtotl from item
    //sum the subtotals and store it in a variable
  }
  //console.log(totalValue);
  document.querySelector("#total-value span").innerText = totalValue;

  //display the total using the variable

  // ITERATION 3
  //...
}

const $calculateTrigger = document.getElementById("calculate");

$calculateTrigger.addEventListener("click", calculateAll);

// ITERATION 4

function addProductRemoveListener(i) {
  let parent = i.parentNode;
  let perent = parent.parentNode;
  console.log(perent)
}

const $removebtn = document.getElementsByClassName("btn-remove");
for (i of $removebtn) {
  
  i.addEventListener("click", addProductRemoveListener(i));
}
// ITERATION 5

function createProduct(event) {
  // ...
}
