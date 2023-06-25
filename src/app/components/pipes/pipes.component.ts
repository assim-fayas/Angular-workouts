
import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import{Post} from "../../models/post"
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title: string = 'Angular Pipes'
  count: number = 23432
  devalue: number = 26.543
  price: number = 5439.344
  today: Date = new Date()
  obj: object = {
    id: 1,
    name: 'asim'
  }
  arr: Array<string> = ['post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5'
  ]

  //custom pipes
  userDetails = {
    name: "User 1",
    city: "calicut",
    countryCode: "+91"
  }

  dummy: string = "The time zone of the formatted value can be specified either by passingit in as the second parameter of the pipe, or by setting the default through the "

  posts!: Array<any>

  constructor(private postservice: UserService ) {

    this.posts=postservice.postList
  }


  addnewData() {

    let newPost:Post = {
      id: 7,
      postTitle: "post 7"
    }
    this.postservice.addPost(newPost);
  }

}
