import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  title = 'Reactive/Model Driven'

  constructor() { }
  ngOnInit(): void {
  }

  registrationform = new FormGroup({
    //username : new FormControl('Amit'), //default value
    username: new FormControl('Amit',
      [Validators.required, Validators.minLength(4)]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('Pune'), //city, state and postalcode combined in address
      state: new FormControl(''),
      postalcode: new FormControl('')
    })
  });

  loadApiData() {
    this.registrationform.patchValue({ //setValue is strict as one has to set ALL values, otherwise use patchValue to set values only to a few form controls
      username: 'Amit',
      password: ' ',
      confirmPassword: ' ',
      address: {
        city: 'Pune',
        state: 'Maharashtra',
        postalcode: '411004'
      }
    })
  }

  onSubmit(){
    alert(JSON.stringify(this.registrationform.value));
  }

}
/*
   Reactive Forms
   1. Code and the Logic resides in Component class. 
   2. No 2 way bindings
   3. well suited for complex scenarios
      - dynamic form fields
      - custom validation
      - dynamic validation */

/*  In Reactive Forms, we require ReactiveFormsModule thus add it in app.module.ts
    FormGroup and FormControl classes are used
    Each form field (from html like username, password and confirmpassword) are
    considered as instances of FormControl.
    Entire form comprising of 3 form fields is defined as an instance of FormGroup */