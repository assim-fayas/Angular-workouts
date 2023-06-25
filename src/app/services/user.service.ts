import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postList:Array<any>=[
    {id:1,postTitle:"post 1"},
    {id:2,postTitle:"post 2"},
    {id:3,postTitle:"post 3"},
    {id:4,postTitle:"post 4"},
    {id:5,postTitle:"post 5"},
    {id:6,postTitle:"post 6"},
  ]

  addPost(data:any){
    this.postList.push(data)
  }
}
