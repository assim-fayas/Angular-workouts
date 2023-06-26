import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  onSubmit(f:NgForm){
    console.log(f); 
  }
  getValue(f:FormControl){
    console.log(f);
    
  }
}
