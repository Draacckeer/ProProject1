import {Component} from "@angular/core";

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})

export class GameComponent{
  operators: String[] = ["+", "-", "*", "÷"];
  currentLine = 0;

  problems: number[] = [];

  answers: any = [];
  operatorAnswer: String = "";

  constructor() {
    this.setupVariables();
  }

  setupVariables(){
    this.problems = [];
    this.problems.push(Math.floor(Math.random() * 2) + 1);
    this.problems.push(Math.floor(Math.random() * 2) + this.problems[0] + 1);
    this.currentLine = 0;
  }

  submitAnswer(){
    if(this.currentLine==0){
      if(this.answers[0]=="x"&&this.answers[1]==this.problems[1]&&this.operatorAnswer=='-'&&this.answers[2]==this.problems[0]){
        this.currentLine++;
      }
    }
    else if(this.currentLine==1){
      if(this.answers[3]=='x'&&this.answers[4]==this.problems[1]-this.problems[0]){
        this.currentLine++;
      }
    }
  }
}
