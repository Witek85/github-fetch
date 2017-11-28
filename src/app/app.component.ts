import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
chosen:string;
  issues = [
  {'date': '12.01.2015', 'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
  {'date': '12.01.2015', 'name': 'Maecenas pellentesque', 'status': 'closed' },
  {'date': '12.03.2015', 'name': 'Etiam nunc fringilla aliquet', 'status': 'closed' },
  {'date': '12.04.2015', 'name': 'Fusce iaculis, purus fringilla', 'status': 'open' },
  {'date': '12.05.2015', 'name': 'Morbi eleifend. Sed eget', 'status': 'open' },
  {'date': '12.06.2015', 'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
  {'date': '12.08.2015', 'name': 'Maecenas pellentesque', 'status': 'closed' },
  {'date': '12.09.2015', 'name': 'Etiam nunc fringilla aliquet', 'status': 'closed' },
  {'date': '12.10.2015', 'name': 'Fusce iaculis, purus fringilla', 'status': 'open' },
  {'date': '12.12.2015', 'name': 'Morbi eleifend. Sed eget', 'status': 'open' }
  ];

  getIssuesOpen() {
    return this.issues.filter((issue) => {
      return issue.status === 'open';
    });
  }

  getIssuesClosed() {
    return this.issues.filter((issue) => {
      return issue.status === 'closed';
    });
  }

  constructor() { }

  ngOnInit() {
  }

  receiveChosen($event) {
    this.chosen = $event;
  }

  ismodifiedIssueMain(event) {
    // console.log('modifiedIssueMain', event);

    const pos = this.issues.findIndex((iss) => {
      return iss.name === event.name;
    });

    this.issues[pos].status = event.status; 

    // console.log(this.issues);
    // console.log(this.issuesOpen);
    // console.log(this.issuesClosed);

    // console.log(this.issues.filter((issue) => {
    //   return issue.status === 'open';
    // }) );

    // this.issuesOpen
    // console.log(this.issues.filter((issue) => {
      //   return issue.status === 'closed';
      // }) );
}

getIssues() {
  if (this.chosen === 'all') {
    return this.issues.slice();
  }

  return this.issues.filter((issue) => {
    return issue.status === this.chosen;
  });

}
  
}
