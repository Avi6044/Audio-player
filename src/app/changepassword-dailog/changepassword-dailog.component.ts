import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-changepassword-dailog',
  templateUrl: './changepassword-dailog.component.html',
  styleUrls: ['./changepassword-dailog.component.css']
})
export class ChangepasswordDailogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangepasswordDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private snackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.snackBar.open('Reset password link send your email address', 'Ok', {
      duration: 2000,
    });
  }
  ngOnInit() {
  }
 
}
