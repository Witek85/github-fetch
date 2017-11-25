import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  chosen:string;
	issues = [
    {'date': '12.01.2015', 'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
    {'date': '12.01.2015', 'name': 'Maecenas pellentesque', 'status': 'closed' },
    {'date': '12.03.2015', 'name': 'Etiam nunc fringilla aliquet', 'status': 'closed' },
    {'date': '12.04.2015', 'name': 'Fusce iaculis, purus fringilla', 'status': 'open' },
    {'date': '12.05.2015', 'name': 'Morbi eleifend. Sed eget', 'status': 'open' }
  ];
  issuesOpen = this.issues.filter((issue) => {
      return issue.status === 'open';
    });
  issuesClosed = this.issues.filter((issue) => {
      return issue.status === 'closed';
  });

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

    console.log(this.issues);
    console.log(this.issues.filter((issue) => {
      return issue.status === 'open';
    }) );
    console.log(this.issues.filter((issue) => {
      return issue.status === 'closed';
    }) );
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
