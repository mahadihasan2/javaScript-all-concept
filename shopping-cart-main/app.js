// console.log("Click this website");
function updateProductNumber(product, price, inCreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (inCreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  }
  else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }

  productInput.value = productNumber;

  // update caseTotal value 
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

}

// Handle phone incress decress event
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
})




// Handle Case incress-decress Event
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
  // 
})