import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { personOutline, chatbubblesOutline, heartOutline, optionsOutline, logOutOutline } from 'ionicons/icons';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userData$: Observable<any>; // Observable to hold user data

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private alertController: AlertController, private sanitizer: DomSanitizer) {
    addIcons({ personOutline, chatbubblesOutline, heartOutline, optionsOutline, logOutOutline })
  }

  options: any[] = [];
  ngOnInit() {
    this.options = [
      { title: 'Profile', icon: 'person-outline', color: 'primary', id: 'profile', functionName: 'profile' },
      { title: 'Chat', icon: 'chatbubbles-outline', color: 'primary' },
      { title: 'Wishlist', icon: 'heart-outline', color: 'primary' },
      { title: 'Settings', icon: 'options-outline', color: 'primary' },
      { title: 'Notifications', icon: 'notifications-outline', color: 'primary' },
      { title: 'Logout', icon: 'log-out-outline', color: 'secondary', background: 'primary', id: 'present-alert', functionName: 'logOut' }
    ];

    // this.userData$ = this.db.object('users/361l88fLo4WOhFX2OXeMLfndZSr1').valueChanges();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        this.userData$ = this.db.object(`users/${userId}`).valueChanges();
      }
    });
  }

  callFunction(functionName: string) {
    if (functionName === 'logOut') {
      this.logout(); // Call the actual function
    } else if (functionName == 'profile') {
      // Handle other potential function names (optional)
      this.getUserDetails(this.userData$);

    }
  }

  getRows() {
    const rows = [];
    for (let i = 0; i < this.options.length; i += 3) {
      rows.push(this.options.slice(i, i + 3));
    }
    return rows;
  }

  // const cgpaString = userData?.cgpa?.toString();
  getUserDetails(userData: any): string {
    return `
  
      Name: ${userData.name}\n
      College: ${userData.hscCollege}\n
      CGPA: ${userData.cpga}\n
      Percentage: ${userData.percentage}\n
      12th Passing year: ${userData.hscYear}\n
    
      `;
  }

  public alertButtons = [
    {
      text: 'Close',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    }
  ];

  // setResult(ev) {
  //   console.log(`Dismissed with role: ${ev.detail.role}`);
  // }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Logout',
          handler: () => {
            this.afAuth.signOut().then(() => {
              console.log('User logged out');
              this.router.navigate(['/login']);
              // Redirect or perform other actions after logout
            }).catch(error => {
              console.error('Error logging out:', error);
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
