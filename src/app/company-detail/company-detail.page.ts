import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.page.html',
  styleUrls: ['./company-detail.page.scss'],
})
export class CompanyDetailPage implements OnInit {
  company: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   if (params.has('id')) {
    //     // Fetch company details using the provided ID
    //     const companyId = params.get('id');
    //     // Alternatively, you can access company data directly from route state
    //     this.company = history.state.company;
    //   }
    // });

    this.route.paramMap.subscribe(params => {
      this.company = history.state.company;
    });
  }

}
