import { Component, ViewChild, AfterViewInit,Output,EventEmitter } from '@angular/core';
import { PostListsComponent } from '../post-lists/post-lists.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit {

  postlist: string = 'here is the list of the post'

  title: string = 'post shows here'

  // @viewchild

  @ViewChild(PostListsComponent) btnname !:any

  message!:string

  ngAfterViewInit() {
    console.log(this.btnname);
    this.message=this.btnname.btnName
  }

  //@output event Emitter

 messageVia:string='when you clicked this message came from child component nemed post.'
  @Output() btnMessage=new EventEmitter<string>();

  sendMessage(){
    this.btnMessage.emit(this.messageVia)
  }


  //directives

  postArray:Array<string>=['post 1','post 2','post 3','post 4']
 
 
  objArray:Array<any>=[
    {id:1 , post:'post 1'},
    {id:2 , post:'post 2'},
    {id:3 , post:'post 3'},
    {id:4 , post:'post 4'},
    {id:5 , post:'post 5'},
    {id:6 , post:'post 6'},
  ]

  addData(){
    this.postArray.push(` post  ${ this. postArray.length+1}`)
  }

  addNew(){
    this.objArray.push({id:7,post:'post 7'})
  }

onDelete(index:any){
this.postArray.splice(index,1)
  }

  delete(post:any){
let index=this.objArray.indexOf(post)
this.objArray.splice(index,1)
  }
}
