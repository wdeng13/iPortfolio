import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-calculator',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css']
})
export class BasicCalculatorComponent implements OnInit {

  clearBtn = '';
  result = 0;
  display = '';
  input = '0';
  numList = [];
  mathOpList = [];
  lastInputType = '';
  mathOpRank = {
    '+': 2,
    '-': 2,
    '*': 1,
    '/': 1
  }

  constructor() { }

  ngOnInit() {
    this.clearBtn = 'AC';
    this.display = this.result.toString();
  }

  inputNumber(num: number) {
    this.clearBtn = 'C';
    if (this.input === '0') {
      this.input = num.toString();
      this.display = num.toString();
    } else {
      this.input += num.toString();
      this.display += num.toString();
    }
    this.lastInputType = 'num';
  }

  inputOperator(op: string) {
    switch (op) {
      case '=': {
        this.numList.push(this.input);
        this.input = '0';
        let num2 = this.numList.pop();
        let num1 = this.numList.pop();
        let mathOp = this.mathOpList.pop();
        this.result = this.calculate(num1, num2, mathOp);
        this.display = this.result.toString();
        this.numList = [];
        this.mathOpList = [];
        break;
      }
      case '%': {
        this.input = (Number(this.input) / 100).toString();
        this.display = this.input;
        break;
      }
      case '-1': {
        this.input = (Number(this.input) * -1).toString();
        this.display = this.input;
        break;
      }
      case '.': {
        if (!this.input.includes(op)) {
          if (!this.input) {
            this.input = '0' + op;
            this.display = this.input;
          } else {
            this.input += op;
            this.display = this.input;
          }
        }
        break;
      }
      case 'clear': {
        if (this.clearBtn === 'C') {
          this.clearBtn = 'AC';
          this.display = '0';
          this.input = '0';
        } else {
          this.display = '0';
          this.input = '0';
          this.numList = [];
          this.mathOpList = [];
          this.result = 0;
        }
        break;
      }
      case '+': {
        if (this.lastInputType === 'num') {
          this.numList.push(this.input);
          console.log('Input:', this.input);
          console.log('Num List:', this.numList);
          this.input = '0';
          if (this.mathOpList.length > 0) {
            if (this.mathOpRank[this.mathOpList[this.mathOpList.length - 1]] === this.mathOpRank[op]) {
              let num2 = this.numList.pop();
              let num1 = this.numList.pop();
              let mathOp = this.mathOpList.pop();
              this.result = this.calculate(num1, num2, mathOp);
              console.log('Result:', this.result);
              this.display = this.result.toString();
              this.numList.push(this.result.toString());
            }
          }
          this.mathOpList.push(op);
        }
        if (this.lastInputType === 'mathOp') {
          this.mathOpList[this.mathOpList.length - 1] = op;
        }
        this.lastInputType = 'mathOp';
        console.log('Math Op List:', this.mathOpList);
        console.log('\n');
        break;
      }
      case '-': {
        if (this.lastInputType === 'num') {
          this.numList.push(this.input);
          console.log('Input:', this.input);
          console.log('Num List:', this.numList);
          this.input = '0';
          if (this.mathOpList.length > 0) {
            if (this.mathOpRank[this.mathOpList[this.mathOpList.length - 1]] === this.mathOpRank[op]) {
              let num2 = this.numList.pop();
              let num1 = this.numList.pop();
              let mathOp = this.mathOpList.pop();
              this.result = this.calculate(num1, num2, mathOp);
              console.log('Result:', this.result);
              this.display = this.result.toString();
              this.numList.push(this.result.toString());
            }
          }
          this.mathOpList.push(op);
        }
        if (this.lastInputType === 'mathOp') {
          this.mathOpList[this.mathOpList.length - 1] = op;
        }
        this.lastInputType = 'mathOp';
        console.log('Math Op List:', this.mathOpList);
        console.log('\n');
        break;
      }
      case '*': {
        if (this.lastInputType === 'num') {
          this.numList.push(this.input);
          console.log('Input:', this.input);
          console.log('Num List:', this.numList);
          this.input = '0';
          if (this.mathOpList.length > 0) {
            if (this.mathOpRank[this.mathOpList[this.mathOpList.length - 1]] === this.mathOpRank[op]) {
              let num2 = this.numList.pop();
              let num1 = this.numList.pop();
              let mathOp = this.mathOpList.pop();
              this.result = this.calculate(num1, num2, mathOp);
              console.log('Result:', this.result);
              this.display = this.result.toString();
              this.numList.push(this.result.toString());
            }
          }
          this.mathOpList.push(op);
        }
        if (this.lastInputType === 'mathOp') {
          this.mathOpList[this.mathOpList.length - 1] = op;
        }
        this.lastInputType = 'mathOp';
        console.log('Math Op List:', this.mathOpList);
        console.log('\n');
        break;
      }
      case '/': {
        if (this.lastInputType === 'num') {
          this.numList.push(this.input);
          console.log('Input:', this.input);
          console.log('Num List:', this.numList);
          this.input = '0';
          if (this.mathOpList.length > 0) {
            if (this.mathOpRank[this.mathOpList[this.mathOpList.length - 1]] === this.mathOpRank[op]) {
              let num2 = this.numList.pop();
              let num1 = this.numList.pop();
              let mathOp = this.mathOpList.pop();
              this.result = this.calculate(num1, num2, mathOp);
              console.log('Result:', this.result);
              this.display = this.result.toString();
              this.numList.push(this.result.toString());
            }
          }
          this.mathOpList.push(op);
        }
        if (this.lastInputType === 'mathOp') {
          this.mathOpList[this.mathOpList.length - 1] = op;
        }
        this.lastInputType = 'mathOp';
        console.log('Math Op List:', this.mathOpList);
        console.log('\n');
        break;
      }
      // default: {
      //   if (this.lastInputType === 'num') {
      //     this.numList.push(this.input);
      //     this.input = '';
      //     this.opList.push(op);
      //   }
      //   if (this.lastInputType === 'mathOp') {
      //     this.opList[this.opList.length - 1] = op;
      //   }
      //   this.lastInputType = 'mathOp';
      //   break;
      // }
    }
  }

  calculate(num1: string, num2: string, mathOp: string) {
    switch (mathOp) {
      case '+': {
        return Number(num1) + Number(num2);
      }
      case '-': {
        return Number(num1) - Number(num2);
      }
      case '*': {
        return Number(num1) * Number(num2);
      }
      case '/': {
        return Number(num1) / Number(num2);
      }
      // default: {
      //   return 0;
      // }
    }
  }
}
