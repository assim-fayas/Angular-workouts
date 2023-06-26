import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
form:any

constructor(){
  this.form=new FormGroup({
    UserName:new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]

    ),
    Email:new FormControl(),
    Address:new FormControl()
  })
}



}
