import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  public companies = [
    {
      "id": 1,
      "name": "ABC Corporation",
      "location": "New York",
      "industry": "Technology",
      "foundedYear": 2005,
      "employeeCount": 5000,
      "revenue": "$1 billion",
      "website": "https://www.abccorp.com",
      "salaryRange": "$2000 - $3000 per month",
      "profile": "ABC Corporation is a leading technology company specializing in software development and digital solutions. We provide cutting-edge products and services to clients worldwide.",
      "jobOpportunities": [
        {
          "position": "Software Engineer",
          "type": "Full-time",
          "requirements": "Bachelor's degree in Computer Science, 3+ years of experience in software development"
        },
        {
          "position": "Product Manager",
          "type": "Full-time",
          "requirements": "Master's degree in Business Administration, 5+ years of experience in product management"
        }
      ],
      "applicationDeadline": "2024-06-30"
    },
    {
      "id": 2,
      "name": "XYZ Industries",
      "location": "San Francisco",
      "industry": "Manufacturing",
      "foundedYear": 1990,
      "employeeCount": 10000,
      "revenue": "$2.5 billion",
      "website": "https://www.xyzindustries.com",
      "salaryRange": "$2500 - $3500 per month",
      "profile": "XYZ Industries is a global manufacturing company known for its innovative products and sustainable practices. With a focus on quality and efficiency, we aim to deliver value to our customers while minimizing environmental impact.",
      "jobOpportunities": [
        {
          "position": "Mechanical Engineer",
          "type": "Full-time",
          "requirements": "Bachelor's degree in Mechanical Engineering, 2+ years of experience in mechanical design"
        },
        {
          "position": "Supply Chain Manager",
          "type": "Full-time",
          "requirements": "Master's degree in Supply Chain Management, 5+ years of experience in supply chain operations"
        }
      ],
      "applicationDeadline": "2024-07-15"
    },
    {
      "id": 3,
      "name": "PQR Solutions",
      "location": "London",
      "industry": "Consulting",
      "foundedYear": 2000,
      "employeeCount": 2000,
      "revenue": "£500 million",
      "website": "https://www.pqrsolutions.com",
      "salaryRange": "£1500 - £2500 per month",
      "profile": "PQR Solutions is a consultancy firm providing strategic advice and business solutions to clients worldwide. Our team of experts works closely with organizations to address their challenges and achieve sustainable growth.",
      "jobOpportunities": [
        {
          "position": "Business Consultant",
          "type": "Full-time",
          "requirements": "Bachelor's degree in Business Administration, 3+ years of consulting experience"
        },
        {
          "position": "Data Analyst",
          "type": "Full-time",
          "requirements": "Bachelor's degree in Statistics or related field, proficiency in data analysis tools"
        }
      ],
      "applicationDeadline": "2024-07-10"
    }
  ]
  
  

  viewCompanyDetails(company: any) {
    this.router.navigate(['/company-detail'], { state: { company } });
  }
  
}
