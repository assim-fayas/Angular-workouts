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
 
}
