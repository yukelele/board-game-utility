import { Component, OnInit } from '@angular/core';
import { Dice } from '../model/dice';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  dice: Dice[] = [{title: 'Dice', side: 6, roll: 1}];
  diceRollColor: string[] = ['red']

  isOnlyOneDice = true;

  constructor() {}

  ngOnInit() {}

  AddDice(): void {
    const new_dice = {title: 'Dice', side: 6, roll: 1};

    this.dice.push(new_dice);

    this.isOnlyOneDice = this.dice.length == 1 ? true : false;

  }

  DeleteDice(index: number): void {
    this.dice.splice(index, 1);

    this.isOnlyOneDice = this.dice.length == 1 ? true : false;
  }

  rollDice(index: number): void {
    this.dice[index].roll = this.diceRollGenerator(this.dice[index].side);

    this.changeDiceRollColor(index);
  }

  diceRollGenerator(side: number): number {
    return Math.floor(Math.random() * side) + 1;
  }

  changeDiceRollColor(index: number): void {
    this.diceRollColor[index] = this.diceRollColor[index] === 'red' ? 'green' : 'red';
  }

}
