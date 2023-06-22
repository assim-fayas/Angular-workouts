import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent {

  btnName:string='Click-child'
  @Input() postlists!:string

}
