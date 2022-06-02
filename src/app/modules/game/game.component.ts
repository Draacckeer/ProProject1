import {Component} from "@angular/core";

enum LevelType{
  RandomMinMax,
  Equal,
  Multiplication,
  Division,
}

class Level{
  levelType: LevelType = LevelType.RandomMinMax;
  minNumber1: number = 0;
  maxNumber1: number = 0;
  minNumber2: number = 0;
  maxNumber2: number = 0;
  operator: string = "+";

  constructor(levelType: LevelType, operator: string = "+", minNumber1: number, maxNumber1: number,
              minNumber2?: number, maxNumber2?: number) {
    this.levelType=levelType;
    this.minNumber1=minNumber1;
    this.maxNumber1=maxNumber1;
    this.minNumber2=minNumber2?minNumber2:0;
    this.maxNumber2=maxNumber2?maxNumber2:0;
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
    this.levels.push(new Level(LevelType.RandomMinMax, "+", 1, 2, 3, 4));
    this.levels.push(new Level(LevelType.RandomMinMax, "+", 1, 4, 5, 8));
    this.levels.push(new Level(LevelType.RandomMinMax, "-", 1, 2, 3, 4));
    this.levels.push(new Level(LevelType.RandomMinMax, "-", 1, 4, 5, 8));
    this.levels.push(new Level(LevelType.Equal, "+", 1, 8));
    this.levels.push(new Level(LevelType.Equal, "-", 1, 8));
    this.levels.push(new Level(LevelType.Multiplication, "*", 1, 3, 1, 3));
    this.levels.push(new Level(LevelType.Multiplication, "*", 2, 5, 2, 5));
    this.levels.push(new Level(LevelType.RandomMinMax, "÷", 1, 3, 1, 3));
    this.levels.push(new Level(LevelType.RandomMinMax, "÷", 2, 5, 2, 5));
  }

  setupVariables(){
    this.problems = [];
    this.answers = [];
    this.currentLine = 0;
    this.operatorAnswer = "";

    this.operatorProblem=this.CurrentLevel().operator;

    if(this.CurrentLevel().levelType == LevelType.RandomMinMax){
      // Random generated numbers problems[0] and problems[1]
      this.problems.push(this.RandomNumberMinMax(this.CurrentLevel().minNumber1, this.CurrentLevel().maxNumber1));
      this.problems.push(this.RandomNumberMinMax(this.CurrentLevel().minNumber2, this.CurrentLevel().maxNumber2));
    }
    else if(this.CurrentLevel().levelType == LevelType.Equal){
      let randomNumber = this.RandomNumberMinMax(this.CurrentLevel().minNumber1, this.CurrentLevel().maxNumber1);
      this.problems.push(randomNumber);
      this.problems.push(randomNumber);
    }
    else if(this.CurrentLevel().levelType == LevelType.Multiplication){
      this.problems.push(this.RandomNumberMinMax(this.CurrentLevel().minNumber1,this.CurrentLevel().maxNumber1));
      this.problems.push(this.RandomNumberMinMax(this.CurrentLevel().minNumber2,this.CurrentLevel().maxNumber2)
        *this.problems[0]);
    }

  }

  submitAnswer(){
    if(this.currentLine==0){
      if(this.answers[0]==this.problems[1]&&this.operatorAnswer==
        this.OperatorOpposite(this.CurrentLevel().operator)&&this.answers[1]==this.problems[0]){
        this.currentLine++;
      }
    }
    else if(this.currentLine==1){
      if(this.answers[2]==this.CalculateByOperator(this.problems[1], this.problems[0],
        this.OperatorOpposite(this.CurrentLevel().operator))){
        this.currentLine++;
      }
    }
  }

  RandomNumberMinMax(min: number, max: number){
    return Math.floor(Math.random() *
        (max - min + 1)) + min;
  }

  CurrentLevel(): Level{
    return this.levels[this.currentLevel];
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

  OperatorOpposite(operator: string): string{
    if(operator=="+") return "-";
    if(operator=="-") return "+";
    if(operator=="*") return "÷";
    if(operator=="÷") return "*";
    return "Error";
  }

  CalculateByOperator(numA: number, numB:number, operator: string): number{
    if(operator=="+"){
      return numA + numB;
    };
    if(operator=="-") {
      return numA - numB;
    }
    if(operator=="*") {
      return numA * numB;
    }
    if(operator=="÷") {
      return numA / numB;
    };
    return 0;
  }
}
