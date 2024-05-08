import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronForward, navigate } from 'ionicons/icons';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss']
})

export class ResetPasswordPage implements OnInit {
  email : any;
  constructor(private router:Router, public authService: AuthenticationService) {
    addIcons({chevronForward})
  }

  ngOnInit() {
  }

  async resetPassword(){
    this.authService.resetPassword(this.email).then(() =>{
      console.log("reset link sent")
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log(error);
    })
  }

}
