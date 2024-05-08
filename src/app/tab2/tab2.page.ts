import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  public notifications = [
    {
      message: "Barclays will not hire MCA students due to their changed hiring policy."
    },
    {
      message: "Tech Mahindra is conducting campus placements for MCA students. Apply now!"
    },
    {
      message: "Infosys is offering internship opportunities for MCA students. Don't miss out!"
    },
    {
      message: "TCS is recruiting MCA graduates for software developer roles. Register for the placement drive."
    },
    {
      message: "Capgemini is conducting a webinar on career opportunities for MCA students. Join now!"
    }
  ]



  public faqs = [
    {
      question: "What are the eligibility criteria for placement?",
      answer: "The eligibility criteria for placement may vary depending on the requirements of the recruiting companies. Generally, criteria include academic performance, specific skill sets, and sometimes additional requirements such as extracurricular activities."
    },
    {
      question: "How do I prepare for interviews?",
      answer: "To prepare for interviews, you can start by researching the company, practicing common interview questions, and preparing examples of your achievements and experiences. Additionally, consider seeking guidance from the TPO office for interview preparation workshops or mock interviews."
    },
    {
      question: "Can international students participate in placements?",
      answer: "Yes, international students are usually eligible to participate in placements. However, it's essential to check with the TPO office regarding any specific requirements or regulations for international students regarding work permits, visa status, etc."
    },
    {
      question: "Is there any dress code for placement events?",
      answer: "While there might not be a strict dress code for all placement events, it's advisable to dress professionally. Business casual or formal attire is typically appropriate for placement-related activities such as interviews, career fairs, and networking events."
    },
    {
      question: "How can I improve my resume?",
      answer: "To improve your resume, focus on highlighting your relevant skills, experiences, and achievements. Tailor your resume to the specific job or internship you're applying for, and ensure it's well-organized, concise, and error-free. Consider seeking feedback from mentors or the TPO office for further improvements."
    },
    {
      question: "Are there any internship opportunities available?",
      answer: "Yes, internship opportunities are often available for students looking to gain practical experience in their field of study. Check the Job Openings section on the app or consult with the TPO office for information on current internship opportunities and application procedures."
    },
    {
      question: "How can I improve my communication skills?",
      answer: "Improving communication skills takes practice and effort. You can start by actively participating in class discussions, joining clubs or organizations that involve public speaking or communication activities, and seeking feedback from peers or mentors. Additionally, consider taking communication skills workshops or courses offered by the TPO office."
    },
    {
      question: "What networking opportunities are available?",
      answer: "There are various networking opportunities available for students, including career fairs, industry-specific events, alumni networking events, and informational interviews. Stay updated on upcoming networking events through the app's Events section and actively participate to expand your professional network."
    },
    {
      question: "Can I apply for multiple companies?",
      answer: "Yes, you can apply for multiple companies simultaneously. However, ensure that you prioritize your applications based on your preferences and qualifications. Keep track of application deadlines and follow up with companies as needed."
    },
    {
      question: "How can I access career resources?",
      answer: "You can access career resources through the Resources section of the app, where you'll find helpful guides, articles, and tools for career development, resume writing, interview preparation, and more. Additionally, you can visit the TPO office for personalized assistance and guidance."
    },
    {
      question: "What types of placements are available?",
      answer: "Placements can vary in terms of industry, role, and duration. Common types of placements include full-time job placements, summer internships, co-op programs, and part-time positions. Explore the Job Openings section on the app to discover the various placement opportunities available."
    },
    {
      question: "How do I stay updated on placement-related news?",
      answer: "To stay updated on placement-related news and announcements, make sure to regularly check the app's Home and Events sections for updates on upcoming events, job openings, workshops, and other relevant information. You can also subscribe to email newsletters or follow the TPO office on social media for additional updates."
    },
    {
      question: "Are there any workshops or training sessions available?",
      answer: "Yes, the TPO office often organizes workshops, training sessions, and seminars to help students develop essential skills for career readiness. These workshops may cover topics such as resume writing, interview preparation, networking strategies, and soft skills development. Keep an eye on the Events section for upcoming workshops and training opportunities."
    },
    {
      question: "How can I get help with my job search?",
      answer: "You can get help with your job search by visiting the TPO office, where you can receive personalized assistance and guidance from career advisors. They can help you with various aspects of your job search, including resume review, job application strategies, interview preparation, and connecting with potential employers."
    },
    {
      question: "What support services are available for students?",
      answer: "The TPO office offers a range of support services for students, including career counseling, job placement assistance, resume building workshops, mock interviews, and networking opportunities. Additionally, they provide resources and information on job openings, internships, and other placement-related opportunities to help students navigate their career paths successfully."
    }
  ];



}
