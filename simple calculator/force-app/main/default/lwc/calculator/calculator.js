import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    currentResult;
    firstNumber;
    secondNumber;

    resultHistory = [];
    displayResultHistory = false;

    numberChangeHandler(event) {
        const inputBoxName = event.target.name;

        if (inputBoxName == 'firstNumber') {
            this.firstNumber = event.target.value;
        } else if (inputBoxName == 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.resultHistory.push(this.currentResult);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.resultHistory.push(this.currentResult);
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.resultHistory.push(this.currentResult);
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.resultHistory.push(this.currentResult);
    }

    showResultHistory(event) {
        this.displayResultHistory = event.target.checked;
    }
        
}

