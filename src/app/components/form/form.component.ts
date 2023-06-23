import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  postHead:string="Post Form"

  posttitle!:string
  postDetails!:string
  postimgUrl!:string
  postUrl!:string
  postcheck!:boolean

// results
titlerslt!:string
  clickPosttitle(){
     this.titlerslt=this.posttitle
   
  }

postrslt!:string
  clickpostDetails(){
this.postrslt=this.postDetails
  }

imgrslt!:string
clickimg(){
this.imgrslt=this.postimgUrl
  }
urlrslt!:string
  clickurl(){
this.urlrslt=this.postUrl
console.log(this.urlrslt);

  }
  
}
