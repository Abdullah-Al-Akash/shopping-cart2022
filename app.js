// Update Case Number:
function updateCaseNumber(isIncreasing) {
        const caseInput = document.getElementById("case-number");
        const caseNumber = caseInput.value;
        if (isIncreasing) {
                caseInput.value = parseInt(caseNumber) + 1;
        }
        else if (caseNumber > 0) {
                caseInput.value = parseInt(caseNumber) - 1;
        }
}

// When Increase Case Number:
document.getElementById("case-plus").addEventListener("click", function () {
        updateCaseNumber(true);
})

// When Decrease Case Number:
document.getElementById("case-minus").addEventListener("click", function () {
        updateCaseNumber(false);
})
