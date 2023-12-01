function upadateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);

    if (isIncreasing && productNumber < 8) {
        productNumber += 1;
    } else if (!isIncreasing && productNumber > 0) {
        productNumber -= 1;
    }

    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    const totalQuantity = getInputvalue('phone') + getInputvalue('case') + getInputvalue('pase');
    if (totalQuantity > 8) {
        alert('Total quantity cannot exceed 8 items.');
        if (isIncreasing) {
            productNumber -= 1;
        } else {
            productNumber += 1;
        }
        productInput.value = productNumber;
        productTotal.innerText = productNumber * price;
    }

    calculateTotal();
}

function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 10;
    const caseTotal = getInputvalue('case') * 50;
    const paseTotal = getInputvalue('pase') * 60;
    const subTotal = phoneTotal + caseTotal+paseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}


document.getElementById('case-plus').addEventListener('click', function() {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    upadateCaseNumber('case', 50, true);
});

document.getElementById('case-minus').addEventListener('click', function() {
    // const caseInput = document.getElementById('case-number');
    //     const caseNumber = caseInput.value;
    //    if(caseInput.value > 1){
    //         caseInput.value = parseInt(caseNumber) - 1;
    //    }
    upadateCaseNumber('case', 50, false);
});

document.getElementById('phone-plus').addEventListener('click', function() {
    upadateCaseNumber('phone', 10, true);
});


document.getElementById('phone-minus').addEventListener('click', function() {
    upadateCaseNumber('phone', 10, false);
});
document.getElementById('pase-plus').addEventListener('click', function() {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    upadateCaseNumber('pase', 60, true);
});

document.getElementById('pase-minus').addEventListener('click', function() {
    // const caseInput = document.getElementById('case-number');
    //     const caseNumber = caseInput.value;
    //    if(caseInput.value > 1){
    //         caseInput.value = parseInt(caseNumber) - 1;
    //    }
    upadateCaseNumber('pase', 60, false);
});