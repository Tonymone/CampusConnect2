import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline, chevronForward } from 'ionicons/icons';
import { institutionalEmailValidator } from 'src/app/validators/validators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, public loadingCtrl: LoadingController, public authService: AuthenticationService, private alertController: AlertController) {
    addIcons({ personOutline, lockClosedOutline, chevronForward });
  }

  goToHomePage() {
    this.router.navigate(['/tabs/tab1']);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // name: ['', [Validators.required]],  password --> Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"), institutionalEmailValidator()]],
      password: ['', [Validators.required]] 
    });
  }

  get errorControl(){
    return this.loginForm?.controls;
  }

  async logIn(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((error) =>{
        // console.log(error);
        loading.dismiss();
      })
      if(user){
         loading.dismiss();
         this.router.navigate(['./tabs']);
      }else{
        // console.log('provide correct values');
        this.presentAlert();
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Credentials',
      message: 'Please enter correct email ID and password.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

}
