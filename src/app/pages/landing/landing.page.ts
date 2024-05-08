import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router: Router) { 
    addIcons({chevronForward})
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
