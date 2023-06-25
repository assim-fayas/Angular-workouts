import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
title:string='User Details'
formName!:string
email!:string
Address!:string

objArray:Array<any>=[]

enteredName(){
  console.log(this.formName);
  
}

enteredEmail(){
  console.log(this.email);
  
}
enteredAddress(){
  console.log(this.Address);
}
onclick(){
  this.objArray.push({name:this.formName,
   email:this.email,
   address:this.Address})

   console.log(this.objArray);
  }  

  onDelete(index:any){
 
    this.objArray.splice(index,1)
  }

}
