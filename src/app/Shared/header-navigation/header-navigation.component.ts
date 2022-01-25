import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordDailogComponent } from 'src/app/changepassword-dailog/changepassword-dailog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangepasswordDailogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit() {
  }
  gotoLogin()
  {
      this.router.navigate(['/login'])
  }
}
