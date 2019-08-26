import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  // expression: string = '';
  period_symbol: string = '.';
  equal_symbol = '=';
  // left_parathesis = '(';
  // right_parathesis = ')';
  plus_symbol = '+';
  minus_symbol = '-';
  times_symbol = 'x';
  divide_symbol = '/';
  percentage = '%';
  ac_symbol = 'AC';
  ce_symbol = 'CE';
  pi_value: number = Math.PI;
  e_value: number = Math.E;

  input1: number;
  input2: number;
  operationInput: string;

  current_input: string = '';
  final_value: number;

  isDoubleValue: boolean = false;
  isCE: boolean = false;
  haveFullExpression: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  EnterInput(input: string): void {
    if (input === '+' || input === '-' || input === 'x' || input === '/') {
      this.input1 = this.final_value ? this.final_value : Number(this.current_input);
      this.operationInput = input;
      this.isDoubleValue = false;
      this.isCE = true;
      this.haveFullExpression = false;
      this.current_input = ''; 
      this.final_value = null;
    } else if (input === '=') {
      this.input2 = Number(this.current_input);
      this.isDoubleValue = true;
      this.haveFullExpression = false;
      this.isCE = false;
      this.input1 = this.Calculate(this.operationInput, this.input1, this.input2);
      this.current_input = ''; 
      this.operationInput = '';
      this.final_value = this.input1;
    } else if (input === '.') {
      this.isDoubleValue = true;
      this.current_input += input; 
    } else if (input == '%') {
      this.current_input = '' + Number(this.current_input) * 0.01;
    } else if (input == 'AC') {
      this.final_value = null;
      this.current_input = '';
      this.input1 = null;
      this.isDoubleValue = false;
      this.haveFullExpression = false;
    } else if (input == 'CE') {
      this.haveFullExpression = false;
      if (this.current_input) {
        this.current_input = '';
        this.isDoubleValue = false;
      } else {
        this.operationInput = '';
        this.isCE = false;
      }
    } else {
      this.current_input += input;
      if (this.operationInput && this.input1 && this.current_input) {
        this.haveFullExpression = true;
      }
    } 
  }

  Calculate(operation: string, input1: number, input2: number): number {
    switch(operation){
      case '+':
        return this.AddTwoNum(input1, input2);
      case '-':
        return this.SubtractTwoNum(input1, input2);
      case 'x':
        return this.MultiplyTwoNum(input1, input2);
      case '/':
        return this.DivideTwoNum(input1, input2);
    }
  }

  AddTwoNum(num1: number, num2: number): number {
    return num1 + num2;
  }

  SubtractTwoNum(num1: number, num2: number): number {
    return num1 - num2;
  }

  MultiplyTwoNum(num1: number, num2: number): number {
    return num1 * num2;
  }

  DivideTwoNum(num1: number, num2: number): number {
    return num1 / num2; 
  }

}
