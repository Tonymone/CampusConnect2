import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Observable } from 'rxjs';
import { addIcons } from 'ionicons';
import { personOutline, homeOutline, notificationsOutline, businessOutline } from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // user: Observable<any>; // Adjust the type if necessary

  constructor(private afAuth: AngularFireAuth) { 
    addIcons({personOutline, homeOutline, notificationsOutline, businessOutline});
  }

  ngOnInit() {
    // this.user = this.afAuth.authState;
  }

}
