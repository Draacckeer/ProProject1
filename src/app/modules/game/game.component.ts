import {Component} from "@angular/core";

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})

export class GameComponent{
  operators: String[] = ["+", "-", "*", "÷"];
  currentLevel = 1;
  currentLine = 0;

  problems: number[] = [];

  answers: any = [];
  operatorAnswer: String = "";
  operatorProblem: String = "+";

  constructor() {
    this.setupVariables();
  }

  setupVariables(){
    let min1=0;
    let max1=0;
    let min2=0;
    let max2=0;
    if(this.currentLevel==1){
      min1=1;
      max1=2;
      min2=3;
      max2=4;
    }
    else if(this.currentLevel==2){
      min1=1;
      max1=4;
      min2=5;
      max2=8;
    }
    this.problems = [];
    this.problems.push(Math.floor(Math.random() * (max1 - min1 + 1)) + min1);
    this.problems.push(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);
    this.currentLine = 0;
  }

  submitAnswer(){
    if(this.currentLine==0){
      if(this.answers[0]==this.problems[1]&&this.operatorAnswer=='-'&&this.answers[1]==this.problems[0]){
        this.currentLine++;
      }
    }
    else if(this.currentLine==1){
      if(this.answers[2]==this.problems[1]-this.problems[0]){
        this.currentLine++;
      }
    }
  }
}
