import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-calculator',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css']
})
export class BasicCalculatorComponent implements OnInit {

  clearBtn = 'AC';
  displayValue = '0';
  lastKeyPressed = '';
  operator = '';

  plusIsActive = false;
  minusIsActive = false;
  timesIsActive = false;
  divideIsActive = false;

  num1 = 0;
  num2 = 0;
  currentDecimalPoint = 0;
  maxDecimalPoint = 0;

  constructor() { }

  ngOnInit() {

  }

  inputNumber(num: string) {
    this.opToInactive();
    this.clearBtn = 'C';
    if (this.displayValue === '0' || this.lastKeyPressed === 'op' || this.lastKeyPressed === '=') {
      if (this.lastKeyPressed === '=') {
        this.num1 = 0;
      }
      this.displayValue = num;
    } else {
      this.displayValue += num;
    }
    if (this.displayValue.includes('.')) {
      this.currentDecimalPoint++;
    } else {
      this.currentDecimalPoint = 0;
    }
    this.lastKeyPressed = 'num';
    console.log(this.currentDecimalPoint);
  }

  inputOperator(op: string) {
    this.maxDecimalPoint = Math.max(this.maxDecimalPoint, this.currentDecimalPoint);
    this.opToInactive();
    switch (op) {
      case '+': {
        this.plusIsActive = true;
        break;
      }
      case '-': {
        this.minusIsActive = true;
        break;
      }
      case '*': {
        this.timesIsActive = true;
        break;
      }
      case '/': {
        this.divideIsActive = true;
        break;
      }
      case '=': {
        if (this.operator) {
          if (this.lastKeyPressed === '=') {
            this.num1 = Number(this.displayValue);
          } else {
            this.num2 = Number(this.displayValue);
          }
          console.log(this.num1, this.operator, this.num2);
          this.displayValue = this.calculate(this.num1, this.operator, this.num2);
        }
        break;
      }
    }
    if (op === '=') {
      this.lastKeyPressed = '=';
    } else {
      if (this.num1 && this.operator && this.lastKeyPressed !== 'op' && this.lastKeyPressed !== '=') {
        this.num2 = Number(this.displayValue);
        console.log(this.num1, this.operator, this.num2);
        this.displayValue = this.calculate(this.num1, this.operator, this.num2);
      }
      this.num1 = Number(this.displayValue);
      this.operator = op;
      this.lastKeyPressed = 'op';
    }
  }

  calculate(num1: number, op: string, num2: number) {
    switch (op) {
      case '+': {
        return ((num1 * 10 ** this.maxDecimalPoint + num2 * 10 ** this.maxDecimalPoint) / 10 ** this.maxDecimalPoint).toString();
      }
      case '-': {
        return ((num1 * 10 ** this.maxDecimalPoint - num2 * 10 ** this.maxDecimalPoint) / 10 ** this.maxDecimalPoint).toString();
      }
      case '*': {
        return (num1 * num2).toString();
      }
      case '/': {
        if (num2 === 0) {
          console.log('Dividing by zero is not allowed!');
          return 'Error';
        }
        return (num1 / num2).toString();
      }
      default: {
        console.log('Error:', num1, op, num2);
        return 'Error';
      }
    }
  }

  clearDisplay() {
    this.opToInactive();
    this.displayValue = '0';
    if (this.clearBtn === 'C') {
      this.clearBtn = 'AC';
      if (this.lastKeyPressed === '=') {
        this.num1 = 0;
      }
    } else if (this.clearBtn === 'AC') {
      this.num1 = 0;
      this.num2 = 0;
      this.operator = '';
    }
    this.lastKeyPressed = 'clear';
  }

  toNegative() {
    this.opToInactive();
    this.clearBtn = 'C';
    this.displayValue = (Number(this.displayValue) * -1).toString();
    this.lastKeyPressed = 'negative';
  }

  toPercent() {
    this.opToInactive();
    this.clearBtn = 'C';
    this.displayValue = (Number(this.displayValue) / 100).toString();
    this.lastKeyPressed = 'percent';
  }

  toDecimal() {
    this.opToInactive();
    this.clearBtn = 'C';
    if (this.lastKeyPressed === 'op' || this.lastKeyPressed === '=') {
      this.displayValue = '0.';
      if (this.lastKeyPressed === '=') {
        this.num1 = 0;
      }
    } else if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
    this.lastKeyPressed = 'decimal';
  }

  opToInactive() {
    this.plusIsActive = false;
    this.minusIsActive = false;
    this.timesIsActive = false;
    this.divideIsActive = false;
  }
}
