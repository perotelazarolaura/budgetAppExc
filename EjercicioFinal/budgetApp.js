const checkAmountButton = document.getElementById("button-save");// el boton para gasotos e input(correcto)
const productTitle = document.getElementById("concepoInput");//Concepto INPUT(correcto)
const errorMessage = document.getElementById("errorPresupuesto");// el id del error gasto(correcto)
const productTitleError = document.getElementById("errorConcepto");//Id Erro concepto(correcto)
const totalIncome = document.getElementById("ingresosTotales");//INGRESOS SPAN (correcto)
const totalExpenditure = document.getElementById("gasotsTotales");//GASTOS SPAN (correcto)
const balanceValue = document.getElementById("balanceTotal");//BALANCE TRAS GASTOS SPAN (correcto)
const list = document.getElementById("list");
const amountInput = document.getElementById("gastoInput");//entrada de gastos e ingresos
const hiddenTable = document.getElementById("hiddenTable")
const currency = "€"

let state = {
    balance: 0,
    income: 0,
    expenditure: 0,
    historic: []
}

function setVisuals(state, currency) {
    totalExpenditure.innerText = `${state.expenditure}${currency}`;
    totalIncome.innerText = `${state.income}${currency}`;
    balanceValue.innerText = `${state.balance}${currency}`;
}
setVisuals(state, currency)


//Set Budget Part
checkAmountButton.addEventListener("click", () =>{
    checkNotNull();
    listCreator(productTitle.value, amountInput.value);
    
});

function checkNotNull() {
    let tempAmount = Number(amountInput.value);
    //check if the value is income or expense
    if (tempAmount === "") {
        errorMessage.classList.remove("hide");
        return
    }

    errorMessage.classList.add("hide");
    if (tempAmount < 0){
        state.expenditure += tempAmount
    } else {
        state.income += tempAmount
    }
    state.balance = state.income + state.expenditure
    // call function that generates a new historic transsaction
    setVisuals(state, currency)
};

 //Function To Create List
 const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
    input.value = expenseName.value.replace(); input.saveValue()
    input.value = expenseValue.value.replace(); input.saveValue()
};


