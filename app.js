// Update Case Number:
function updateProduct(product, price, isIncreasing) {
        const productInput = document.getElementById(product + "-number");
        let productNumber = productInput.value;
        if (isIncreasing) {
                productNumber = parseInt(productNumber) + 1;
        }
        else if (productNumber > 0) {
                productNumber = parseInt(productNumber) - 1;
        }
        productInput.value = productNumber;
        // Update Case Total:
        const productTotal = document.getElementById(product + "-total");
        productTotal.innerText = productNumber * price;
}

// Phone Increase:
document.getElementById("phone-plus").addEventListener("click", function () {
        updateProduct('phone', 1219, true);
})
// Phone Decrease:
document.getElementById("phone-minus").addEventListener("click", function () {
        updateProduct('phone', 1219, false);
})

// When Increase Case Number:
document.getElementById("case-plus").addEventListener("click", function () {
        updateProduct('case', 59, true);
})

// When Decrease Case Number:
document.getElementById("case-minus").addEventListener("click", function () {
        updateProduct('case', 59, false);
})
