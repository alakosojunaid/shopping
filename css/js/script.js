// SELECT ALL NECESSARY ELEMENTS
let plusBtns = document.querySelectorAll(".fa-plus-circle");
let minusBtns = document.querySelectorAll(".fa-minus-circle");
let trashBtns = document.querySelectorAll(".fa-trash-alt");
let heartBtns = document.querySelectorAll(".fa-heart");
let totalDisplay = document.querySelector(".total");


// FUNCTION TO UPDATE TOTAL
function updateTotal() {
  let total = 0;
  let products = document.querySelectorAll(".card");

  products.forEach(product => {
    let quantity = product.querySelector(".quantity").innerText;
    let unitPriceText = product.querySelector(".unit-price").innerText;

    // Remove the "$" and convert to number
    let unitPrice = parseInt(unitPriceText);

    total += quantity * unitPrice;
  });

  totalDisplay.innerText = total + " $";
}


// PLUS BUTTON
plusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let quantitySpan = this.nextElementSibling;
    quantitySpan.innerText++;
    updateTotal();
  });
});


// MINUS BUTTON
minusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let quantitySpan = this.previousElementSibling;

    if (quantitySpan.innerText > 0) {
      quantitySpan.innerText--;
      updateTotal();
    }
  });
});


// DELETE PRODUCT
trashBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.closest(".card-body").remove();
    updateTotal();
  });
});


// LIKE (HEART TOGGLE)
heartBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("text-danger");
  });
});


// INITIAL TOTAL
updateTotal();