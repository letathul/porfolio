import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  data = {
    name: 'Athul Babu',
    headline:
      'Android Native Developer | Kotlin | Java | SQL | Jetpack Compose | Multiplatform',
    location: 'Hamilton, Ontario, Canada',
    contact: {
      phone: '+19054015648',
      email: 'letathul@gmail.com',
    },
    socialMedia: {
      Facebook: '+19054015648',
      Google: 'letathul@gmail.com',
      Linkedin: 'www.linkedin.com/in/letathul',
    },
    summary:
      "Over 8 years of native Android development experience. Bachelor's degree in computer science. Proficient in Kotlin, Java, XML, SQL, Jetpack Compose, and Compose Multiplatform. Passionate about mobile app innovation and user-friendly solutions. Led and contributed to significant projects in telecommunications and security sectors. Collaborated effectively with cross-functional and cross-border teams. Mentored junior developers and implemented cutting-edge technologies. Improved application performance by 50%. Reduced production time through agile practices. Committed to helping organizations achieve their goals and deliver value to customers.",
    experience: [
      {
        title: 'Android Lead Developer',
        company: 'Exclusive Dry Cleaners Inc.',
        location: 'Toronto, Ontario, Canada',
        dateRange: 'March 2024 - Present',
        description:
          'Leading the development of an Android application, implementing features such as user authentication, service ordering, real-time tracking, profile management, and payment processing through Stripe integration.',
      },
      {
        title: 'Associate Technical Lead',
        company: 'MicroObjects Pvt. Ltd',
        location: 'Kochi, Kerala, India',
        dateRange: 'September 2022 - June 2023',
        description:
          'Led and managed two projects from inception to completion. Successfully collaborated with Telus and ADT teams. Provided mentorship to junior team members. Demonstrated proficiency in utilizing Google APIs, AWS, and third-party integrations. Spearheaded a new project utilizing modern MVVM and clean architecture principles.',
      },
      {
        title: 'Senior Software Engineer',
        company: 'MicroObjects Pvt. Ltd',
        location: 'Kochi, Kerala, India',
        dateRange: 'August 2020 - August 2022',
        description: '',
      },
      {
        title: 'Senior Software Engineer',
        company: 'AB Initiatives',
        location: 'Trivandrum',
        dateRange: 'February 2020 - August 2020',
        description:
          'Contributed to a product-based company, engaging in cross-functional collaboration with marketing, design, and QA teams. Pioneered innovative monthly brainstorming sessions.',
      },
      {
        title: 'Sales Associate',
        company: 'Giant Tiger',
        location: 'Stratford, Ontario, Canada',
        dateRange: 'March 2019 - November 2019',
        description:
          'Excelled in customer service, leveraging product expertise to drive sales and implementing effective merchandising strategies. Fostered teamwork and exceeded sales targets.',
      },
      {
        title: 'Sales Associate',
        company: 'The Source',
        location: 'Stratford, Ontario, Canada',
        dateRange: 'December 2018 - March 2019',
        description:
          'Immersed in the dynamic world of consumer electronics. Developed a solid foundation in understanding technology and its applications. Communicated intricate technical features to customers effectively.',
      },
      {
        title: 'Senior Software Engineer',
        company: 'MicroObjects Pvt. Ltd',
        location: 'Cochin Area, India',
        dateRange: 'December 2017 - October 2018',
        description:
          'Contributed significantly to the development of innovative mobile applications using Kotlin. Delivered top-tier Android experiences through custom UI components.',
      },
      {
        title: 'IT Technician',
        company: 'Al Sadiq Hospital',
        location: 'Dammam, Eastern, Saudi Arabia',
        dateRange: 'May 2016 - June 2017',
        description:
          'Managed critical IT infrastructure and resolved technical issues. Collaborated with diverse teams to communicate technical solutions effectively.',
      },
      {
        title: 'Software Engineer (Android)',
        company: 'WBPRO',
        location: 'Kochi, Kerala, India',
        dateRange: 'May 2012 - March 2016',
        description:
          'Utilized cutting-edge technologies within the insurance domain, contributing to projects for prominent clients including Allstate and National Water Prime.',
      },
    ],
    education: [
      {
        school: 'Humber College',
        degree: 'Full Stack .NET Cloud Developer',
        fieldOfStudy: 'Computer Science',
        dateRange: '2024',
      },
      {
        school: 'Cochin University of Science and Technology',
        degree: "Bachelor's degree",
        fieldOfStudy: 'Computer Science and Engineering',
        dateRange: '2008 - 2012',
      },
      {
        school: 'St. Gregorious School',
        degree: 'Higher Secondary',
        fieldOfStudy: 'Mathematics and Computer Science',
        dateRange: '2006 - 2008',
      },
      {
        school: 'St. Mary’s H S S',
        degree: 'High School',
        fieldOfStudy: 'SSLC',
        dateRange: '2000 - 2005',
      },
    ],
    skills: [
      { name: 'Android Native', value: 80 },
      { name: 'SQL', value: 70 },
      { name: 'Debugging', value: 85 },
      { name: 'Kotlin Multiplatform', value: 75 },
      { name: 'Jetpack Compose UI', value: 90 },
      { name: 'User Authentication', value: 80 },
      { name: 'Service Ordering and Tracking', value: 65 },
      { name: 'Profile Information Management', value: 70 },
      { name: 'Payment Integration (Stripe)', value: 60 },
    ],
    projects: [
      {
        name: 'Bushnell Trail Cameras',
        link: 'https://play.google.com/store/apps/details?id=com.bushnell.trailcamera&hl=en_IN',
        description:
          'App for managing hunting cameras. 10K+ downloads, 4.5 rating on Google Play.',
      },
      {
        name: 'Invisawear',
        link: 'https://play.google.com/store/apps/details?id=com.onetouch.invisawear.full&hl=en',
        description: `
          I am proud to be associated with InvisaWear, a revolutionary safety technology company. InvisaWear's mission is to empower individuals to live their lives confidently, knowing they have an extra layer of protection at their fingertips.

          As an innovative and socially responsible company, InvisaWear specializes in creating stylish, wearable safety accessories equipped with discreet, built-in technology. These accessories, ranging from jewelry to keychains, are seamlessly integrated with a personal safety feature that can instantly alert emergency contacts and authorities in times of distress.

          InvisaWear's dedication to user safety is matched by its commitment to design and quality. The products are not only aesthetically pleasing but also functional, providing a sense of security without compromising on style. I am thrilled to be part of a company that prioritizes the wellbeing and peace of mind of its customers.

          Discover more about InvisaWear's exceptional safety solutions and join me in promoting safety and security for everyone.`,
      },
      {
        name: 'One For Business',
        link: 'https://play.google.com/store/apps/details?id=com.abcloudpte.swapp&hl=en',
        description: 'Management App for business users.',
      },
      {
        name: 'Onne For Users',
        link: 'https://play.google.com/store/apps/details?id=com.thirdchannel&hl=en_IN',
        description: 'Onne is a single app that functions like multiple apps.',
      },
      {
        name: 'Third Channel',
        link: 'https://play.google.com/store/apps/details?id=com.thirdchannel&hl=en_IN',
        description:
          'Enterprise android application for conducting audits and surveys in shops.',
      },
      {
        name: 'Wavz',
        link: 'https://play.google.com/store/apps/details?id=com.wavz.app&hl=en',
        description: `The WAVZ app paves the way for hassle-free travel on land and water. Pin the presence of Hazards, Police and Points of Interest (POI) on the map to notify other users when the pins come within their notification range. Upvote and downvote on Hazard and Police pins to eventually retain only authentic pins on the map. Enjoy your journeys for a long time to come!The WAVZ app paves the way for hassle-free travel on land and water. Pin the presence of Hazards, Police and Points of Interest (POI) on the map to notify other users when the pins come within their notification range. Upvote and downvote on Hazard and Police pins to eventually retain only authentic pins on the map. Enjoy your journeys for a long time to come!          `,
      },
    ],
    languages: ['English', 'Malayalam'],
  };
  constructor() {}
}
