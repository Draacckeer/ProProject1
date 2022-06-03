import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-game-level-completed-dialog.component',
  templateUrl: './game-level-completed-dialog.component.html',
})



export class GameLevelCompletedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GameLevelCompletedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

