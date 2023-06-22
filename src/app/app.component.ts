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

}
