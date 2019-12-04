import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public months = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" }
  ];

  public loginForm;
  public currentDate = new Date();
  constructor(public router:Router) {
  }

  ngOnInit() {
    let currentMonth;
     this.months.forEach(a=>{
          if(a.id===this.currentDate.getMonth()){
            currentMonth = a.month
      }})
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      portfolio : new FormControl('',[Validators.required]),
      month : new FormControl(currentMonth,[]),
      year : new FormControl(this.currentDate.getUTCFullYear(),[]) 
    })
  }
  
  submit(){
    this.router.navigate(['dashboard'])
  }

}
