import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  toReceiveFromChild1:any;
  toReceiveFromChild2:any;


  dataToChild1:object = {
    imgUrl: 'https://i.pinimg.com/originals/64/4e/7b/644e7b96ce4212a3cce17b263ed03fd4.png',
    cardTitle: 'Angular',
    cardText: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
  };
  dataToChild2:object = {
    imgUrl: 'https://citrusbug.com/storage/uploads/blog/Best-10-web-development-frameworks/React-Creative-logo.jpg',
    cardTitle: 'React JS',
    cardText: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. '
  };

}
