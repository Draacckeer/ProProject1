import {Component} from "@angular/core";

class Level{
  minNumber1: number = 0;
  maxNumber1: number = 0;
  minNumber2: number = 0;
  maxNumber2: number = 0;
  operator: string = "+";

  constructor(minNumber1: number, maxNumber1: number, minNumber2: number, maxNumber2: number, operator: string = "+") {
    this.minNumber1=minNumber1;
    this.maxNumber1=maxNumber1;
    this.minNumber2=minNumber2;
    this.maxNumber2=maxNumber2;
    this.operator=operator;
  }

}

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})

export class GameComponent{

  operators: string[] = ["+", "-", "*", "÷"];
  currentLevel = 0;
  currentLine = 0;
  levels: Level[] = [];

  problems: number[] = [];
  operatorProblem: string = "+";

  answers: any = [];
  operatorAnswer: string = "";

  constructor() {

    this.setupLevels();
    this.setupVariables();
  }

  setupLevels(){
    this.levels.push(new Level(1, 2, 3, 4, "+"));
    this.levels.push(new Level(1, 4, 5, 8, "+"));
    this.levels.push(new Level(1, 2, 3, 4, "-"));
    this.levels.push(new Level(1, 4, 5, 8, "-"));
  }

  setupVariables(){
    this.problems = [];
    this.answers = [];

    this.operatorProblem=this.levels[this.currentLevel].operator;

    // Random generated numbers problems[0] and problems[1]
    this.problems.push(Math.floor(Math.random() *
      (this.levels[this.currentLevel].maxNumber1 - this.levels[this.currentLevel].minNumber1 + 1))
      + this.levels[this.currentLevel].minNumber1);
    this.problems.push(Math.floor(Math.random() *
      (this.levels[this.currentLevel].maxNumber2 - this.levels[this.currentLevel].minNumber2 + 1))
      + this.levels[this.currentLevel].minNumber2);
    this.currentLine = 0;
  }

  previousLevel(){
    if(!this.levels[this.currentLevel-1]) return;
    this.currentLevel--;
    this.setupVariables();
  }

  nextLevel(){
    if(!this.levels[this.currentLevel+1]) return;
    this.currentLevel++;
    this.setupVariables();
  }

  submitAnswer(){
    if(this.currentLine==0){
      if(this.answers[0]==this.problems[1]&&this.operatorAnswer==
        this.OperatorOpposite(this.levels[this.currentLevel].operator)&&this.answers[1]==this.problems[0]){
        this.currentLine++;
      }
    }
    else if(this.currentLine==1){
      if(this.answers[2]==this.problems[1]+(this.levels[this.currentLevel].operator=="+"?-1:1)*this.problems[0]){
        this.currentLine++;
      }
    }
  }

  OperatorOpposite(operator: string): string{
    if(operator=="+") return "-";
    if(operator=="-") return "+";
    if(operator=="*") return "/";
    if(operator=="/") return "*";
    return "Error";
  }
}
