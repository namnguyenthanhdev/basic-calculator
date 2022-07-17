const OPERATOR_TYPE = {
    MULTIPLY: "MULTIPLY",
    SUBTRACT: "SUBTRACT",
    DIVIDE: "DIVIDE",
    ADD: "ADD"
}


let firstOperand = 0;
let secondOperand = 0;
let currentOperator = null;


function getCurrentOutput() {
    const outputElm = document.getElementById("output");
    if (!outputElm) {
        console.log("No output element", outputElm);
        return "";
    }
    return outputElm.innerText;
}

function checkExistFirstOperand() {
    return !(!firstOperand || firstOperand === 0);
}


function checkExistOperator() {
    return !(!currentOperator || !OPERATOR_TYPE[currentOperator]);
}

function handleEqualOperatorClicked() {
    if (!checkExistOperator()) {
        return checkExistFirstOperand() ? getCurrentOutput() : firstOperand;
    }
    secondOperand = getCurrentOutput();
    let letSecondOperand = secondOperand || 0;
    let localFirstOperand = firstOperand || 0;

    switch (currentOperator) {
        case OPERATOR_TYPE.ADD:
            changeOutput(add(localFirstOperand, letSecondOperand));
            return;
        case OPERATOR_TYPE.MULTIPLY:
            changeOutput(multiply(localFirstOperand, letSecondOperand));
            return;
        case OPERATOR_TYPE.SUBTRACT:
            changeOutput(subtract(localFirstOperand, letSecondOperand));
            return;
        case OPERATOR_TYPE.DIVIDE:
            changeOutput(divide(localFirstOperand, letSecondOperand));
            return;
    }


}

function handleOperatorClicked(operatorElement) {

    const {dataset} = operatorElement || {};
    const {operator} = dataset || {};

    firstOperand = getCurrentOutput();
    currentOperator = OPERATOR_TYPE[operator] || null;
    changeOutput("");
}


function handleNumberClick(currentElement) {
    const {dataset} = currentElement || {};
    const {number} = dataset || {};
    const newOutput = appendText(getCurrentOutput(), number);
    changeOutput(newOutput);
}


function changeOutput(newOutput) {
    const outputElm = document.getElementById("output");
    outputElm.innerText = newOutput;
}

function appendText(currentText, textToAppend) {
    if (!currentText) {
        if (!textToAppend) {
            return "";
        }
        return textToAppend;
    }
    return textToAppend ? currentText + textToAppend : currentText;
}

function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error ");
    }
    return a / b;
}



