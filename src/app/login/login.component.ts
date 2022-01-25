import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonMethod } from '../commonmethod/commonsmethods';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Tag="LoginComponent"
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  phone_number:any;
  errormessage:string=""

  constructor(public router:Router ,private _formBuilder: FormBuilder,private snackBar: MatSnackBar) {
   this. phone_number=""
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
   
  }
  
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  gotoHome(){
      this.router.navigate(['/dashboard'])
  }
   validation(){
      if(this.phone_number.length == 2)
      {
        this.errormessage="Enter Phone Number "
        return false
      }
      else{
        this.errormessage=""
        return true
      }
   }
  opensneakbar(){
    if(this.validation())
    {
      CommonMethod.showconsole(this.Tag,'Value of Input :- '+this.phone_number)
    this.snackBar.open('OTP Send Sucessfully', 'Ok', {
      duration: 2000,
    });
    }
    else{
      CommonMethod.showconsole(this.Tag,"Something is wrong");
    }
    
  }
  
}
