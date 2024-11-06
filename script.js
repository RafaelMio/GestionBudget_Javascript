const revenueNameInput = document.getElementById('addRevenueName');
const revenueNbInput = document.getElementById('addRevenueNb');
const expenseNameInput = document.getElementById('addExpenseName');
const expenseNbInput = document.getElementById('addExpenseNb');
const addRevenueButton = document.getElementById('addRevenueButton');
const addExpenseButton = document.getElementById('addExpenseButton');
const revenueList = document.getElementById('revenueList');
const expenseList = document.getElementById('expenseList');

function addRevenue() {
    const text = revenueNameInput.value;
    const nb = revenueNbInput.value;
    if (text && nb) {
        createOperationDiv(text, nb, "revenue");
        revenueNameInput.value = '';
        revenueNbInput.value = '';
    }
}

function addExpense() {
    const text = expenseNameInput.value;
    const nb = expenseNbInput.value;
    if (text && nb) {
        createOperationDiv(text, nb, "expense");
        expenseNameInput.value = '';
        expenseNbInput.value = '';
    }
}

function createOperationDiv(name, number, type) {
    const productDiv = document.createElement('div');
    if (type === "revenue") {
        productDiv.classList.add('revenue');
        revenueList.appendChild(productDiv);
    }
    else {
        productDiv.classList.add('expense');
        expenseList.appendChild(productDiv);
    }
    productDiv.textContent = `${name} - Montant : ${number} €`;
}

addRevenueButton.addEventListener('click', addRevenue);
addExpenseButton.addEventListener('click', addExpense);