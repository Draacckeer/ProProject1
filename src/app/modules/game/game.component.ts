import {Component} from "@angular/core";

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})

export class GameComponent{
  operators: String[] = ["+", "-", "*", "÷"];
  currentLine = 0;

  answers: any = [];
  operatorAnswer: String = "";

  constructor() {
  }

  submitAnswer(){
    if(this.currentLine==0){
      if(this.answers[0]=="x"&&this.answers[1]==5&&this.operatorAnswer=='-'&&this.answers[2]==2){
        this.currentLine++;
      }
    }
    else if(this.currentLine==1){
      if(this.answers[3]=='x'&&this.answers[4]==3){
        this.currentLine++;
      }
    }
  }
}
