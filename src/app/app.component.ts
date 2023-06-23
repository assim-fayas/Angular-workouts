import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// maessage passing to child component named navbar

  navbarName:string='Angular workouts'


//message recived from  post child component  

receivedmsg!:any
recievemessage($event:any){
this.receivedmsg=$event  /*then use this recievedmsg variable in htm template to show  
the variable data */

}

//property binding

imgUrl:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQonFpgTYiQjmMaWGIuKGipvTXutkc4mHRRuMm67fJyi5RoD1EQIArwgYNK_ku2Xkc2s&usqp=CAU';


//class binding
bool:boolean=true

textclassbinding:string='result of class binding'

// style binding

textstylebinding:string='result style binding'

//event binding

clicked(){
  console.log("cliked");
  
}

//event filtering

Onkeyup(username:any){
  console.log(username);
  
}

//twoway binding

userName!:string
keyUp(){
console.log(this.userName);
}

}
