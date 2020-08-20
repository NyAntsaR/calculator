import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    currentResult;
    firstNumber;
    secondNumber;

    numberChangeHandler(event) {
        const inputBoxName = event.target.name;

        if (inputBoxName == 'firstNumber') {
            this.firstNumber = event.target.value;
        } else if (inputBoxName == 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    clickHandler(event) {
        // convert a string to number
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        let inp = this.template.querySelectorAll("lightning-button");

        inp.forEach(function(element) {
            if (element.label === "Add") {
                this.currentResult = `Result of ${firstNum} + ${secondNum} is : ${firstNum + secondNum}`;
            } else if (element.label === "Substract") {
                this.currentResult = `Result of  ${firstNum} - ${secondNum} is : ${firstNum - secondNum}`;
            } else if (element.label === "Multiply") {
                this.currentResult = `Result of  ${firstNum} * ${secondNum} is : ${firstNum * secondNum}`;
            } else if (element.label === "Divide") {
                this.currentResult = `Result of  ${firstNum} / ${secondNum} is : ${firstNum / secondNum}`;
            }
        }, this);
    }
        
}

