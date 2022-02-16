// Update Case Number:
function updateCaseNumber(product, price, isIncreasing) {
        const caseInput = document.getElementById(product + "-number");
        let caseNumber = caseInput.value;
        if (isIncreasing) {
                caseNumber = parseInt(caseNumber) + 1;
        }
        else if (caseNumber > 0) {
                caseNumber = parseInt(caseNumber) - 1;
        }
        caseInput.value = caseNumber;
        // Update Case Total:
        const caseTotal = document.getElementById(product + "-total");
        caseTotal.innerText = caseNumber * price;
}

// Phone Increase:
document.getElementById("phone-plus").addEventListener("click", function () {
        updateCaseNumber('phone', 1219, true);
})
// Phone Decrease:
document.getElementById("phone-minus").addEventListener("click", function () {
        updateCaseNumber('phone', 1219, false);
})

// When Increase Case Number:
document.getElementById("case-plus").addEventListener("click", function () {
        updateCaseNumber('case', 59, true);
})

// When Decrease Case Number:
document.getElementById("case-minus").addEventListener("click", function () {
        updateCaseNumber('case', 59, false);
})
