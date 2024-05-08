import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { personOutline, lockClosedOutline, chevronForward, alertCircleOutline } from 'ionicons/icons';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { institutionalEmailValidator } from 'src/app/validators/validators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registrationForm: FormGroup;

  get errorControl() {
    return this.registrationForm.controls;
  }
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"), institutionalEmailValidator()]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.minLength(6)]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      rollNo: ['', [Validators.required]],
      hscCollege: ['', [Validators.required]],
      hscYear: ['', [Validators.required]],
      hscTotal: ['', [Validators.required]],
      hscObtained: ['', [Validators.required]],
      sscCollege: ['', [Validators.required]],
      sscYear: ['', [Validators.required]],
      sscTotal: ['', [Validators.required]],
      sscObtained: ['', [Validators.required]],
      cgpa: ['', [Validators.required]],
      percentage: ['', [Validators.required]],
      resume: ['', [Validators.required]],
      additionalCourses: ['', [Validators.required]]
    });
  }


  formData: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, public loadingCtrl: LoadingController, public authService: AuthenticationService, private afDB: AngularFireDatabase, private storage: AngularFireStorage) {
    
    addIcons({ personOutline, lockClosedOutline, chevronForward });

  }


  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.registrationForm?.valid) {
      try {
        const userCredential = await this.authService.registerUser(this.registrationForm.value.email, this.registrationForm.value.password);
        const user = userCredential.user;
        console.log(user);
        await this.afDB.object('users/' + user.uid).set({
          name: this.registrationForm.value.name,
          email: this.registrationForm.value.email,
          contact: this.registrationForm.value.contact,
          rollNo: this.registrationForm.value.rollNo,
          hscCollege: this.registrationForm.value.hscCollege,
          hscYear: this.registrationForm.value.hscYear,
          hscTotal: this.registrationForm.value.hscTotal,
          hscObtained: this.registrationForm.value.hscObtained,
          sscCollege: this.registrationForm.value.sscCollege,
          sscYear: this.registrationForm.value.sscYear,
          sscTotal: this.registrationForm.value.sscTotal,
          sscObtained: this.registrationForm.value.sscObtained,
          cgpa: this.registrationForm.value.cgpa,
          percentage: this.registrationForm.value.percentage,
          resume: this.registrationForm.value.resume,
          // resume: this.registrationForm.patchValue({resume: file}),
          additionalCourses: this.registrationForm.value.additionalCourses,
          createdAt: Date.now() // Removed semicolon here
        });
        loading.dismiss();
        this.router.navigate(['/login']);
      } catch (error) {
        console.log(error);
        loading.dismiss();
      }
    }
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    // Do something with the file, like upload it to a server
    console.log('File uploaded:', file.name);
  }

  // async signUp() {
  //   const loading = await this.loadingCtrl.create();
  //   await loading.present();
  //   if (this.registrationForm?.valid) {
  //     try {
  //       const userCredential = await this.authService.registerUser(this.registrationForm.value.email, this.registrationForm.value.password);
  //       const user = userCredential.user;
  //       console.log(user);
  
  //       // Upload resume to Firebase Storage
  //       const resumeFile = this.registrationForm.value.resume;
  //       const resumeFilePath = `resumes/${user.uid}/${resumeFile.name}`;
  //       const resumeFileRef = this.storage.ref(resumeFilePath);
  //       const resumeUploadTask = this.storage.upload(resumeFilePath, resumeFile);
  
  //       // Get download URL of the uploaded resume
  //       resumeUploadTask.then(async () => {
  //         const resumeDownloadURL = await resumeFileRef.getDownloadURL();
  
  //         // Save user data along with resume URL to Firebase Realtime Database
  //         await this.afDB.object('users/' + user.uid).set({
  //           name: this.registrationForm.value.name,
  //           email: this.registrationForm.value.email,
  //           contact: this.registrationForm.value.contact,
  //           rollNo: this.registrationForm.value.rollNo,
  //           hscCollege: this.registrationForm.value.hscCollege,
  //           hscYear: this.registrationForm.value.hscYear,
  //           hscTotal: this.registrationForm.value.hscTotal,
  //           hscObtained: this.registrationForm.value.hscObtained,
  //           sscCollege: this.registrationForm.value.sscCollege,
  //           sscYear: this.registrationForm.value.sscYear,
  //           sscTotal: this.registrationForm.value.sscTotal,
  //           sscObtained: this.registrationForm.value.sscObtained,
  //           cpga: this.registrationForm.value.cgpa,
  //           percentage: this.registrationForm.value.percentage,
  //           additionalCourses: this.registrationForm.value.additionalCourses,
  //           resumeURL: resumeDownloadURL, // Include resume URL in user data
  //           createdAt: Date.now()
  //         });
  
  //         loading.dismiss();
  //         this.router.navigate(['/login']);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       loading.dismiss();
  //     }
  //   }
  // }
  
  // handleFileInput(event: any) {
  //   const file = event.target.files[0];
  //   this.registrationForm.patchValue({
  //     resume: file // Set selected file in form control
  //   });
  // }

}
