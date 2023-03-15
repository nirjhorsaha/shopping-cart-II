function getTotalPrice(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateValue(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateTotalPrice() {
    // calculate subtotal
    const currentPhonePrice = getTotalPrice("phone-total");
    const currentCasePrice = getTotalPrice("case-total");
    const currentSubTotal = currentPhonePrice + currentCasePrice;

    calculateValue('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountstring = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstring);
    calculateValue('tax-Amount', taxAmount);

    // calculate total amount
    const finalAmount = currentSubTotal + taxAmount;
    calculateValue('final-total', finalAmount);


}
